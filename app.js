// ===== PREVENT iOS BOUNCE SCROLL =====
document.addEventListener('touchmove', function(e) {
    if (!e.target.closest('.list')) e.preventDefault();
}, { passive: false });

// ===== STATE =====
const LK = 'before30-lang';
let selIdx = 0;
let lang = localStorage.getItem(LK) || 'fr';
const ROW_H = 44; // row height + gap
const N = GOALS.length;
const CAUGHT_COUNT = GOALS.filter(g => g.caught).length;

// ===== DOM =====
const $ = id => document.getElementById(id);
const list = $('list');
const track = $('list-track');
const sprite = $('sprite');
const sNum = $('s-num');
const sName = $('s-name');
const detail = $('detail-text');
const pbar = $('pbar');
const pLabel = $('pbar-label');
const hCountdown = $('h-countdown');
const hTitle = $('h-title');
const hDeadline = $('h-deadline');
const hCompletion = $('h-completion');

function t(key) { return LANG[lang][key] || LANG.en[key] || key; }
function gName(g) { return (g[lang] || g.en).name; }
function gDesc(g) { return (g[lang] || g.en).desc; }

const TCOLORS = {
    career:'#f08030', travel:'#6890f0', health:'#78c850',
    personal:'#f85888', creative:'#a040a0', finance:'#b8a038'
};

function artUrl(id) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}

sprite.addEventListener('error', () => { sprite.style.visibility = 'hidden'; });
sprite.addEventListener('load', () => { sprite.style.visibility = 'visible'; });

function ballSVG() {
    return `<svg viewBox="0 0 14 14" width="14" height="14">
        <circle cx="7" cy="7" r="6" fill="#c02028" stroke="#333" stroke-width="1.5"/>
        <rect x="1" y="6" width="12" height="2" fill="#333"/>
        <circle cx="7" cy="7" r="6" fill="none" stroke="#333" stroke-width="1.5"/>
        <path d="M1,7 Q1,13 7,13 Q13,13 13,7" fill="#eee" stroke="#333" stroke-width="1.5"/>
        <circle cx="7" cy="7" r="2.5" fill="#fff" stroke="#333" stroke-width="1.2"/>
        <circle cx="7" cy="7" r="1" fill="#fff"/>
    </svg>`;
}

function emptyBallSVG() {
    return `<svg viewBox="0 0 14 14" width="14" height="14">
        <circle cx="7" cy="7" r="5" fill="none" stroke="#bbb" stroke-width="1"/>
    </svg>`;
}

function wrap(i) {
    return ((i % N) + N) % N;
}

// ===== BUILD ROWS (3x for infinite illusion) =====
const rowEls = []; // all DOM rows (3 * N)
let virtualIdx = 0; // index in the middle copy (0..N-1 maps to rows N..2N-1)

function buildRows() {
    track.innerHTML = '';
    rowEls.length = 0;

    // Build 3 copies: [copy0][copy1=main][copy2]
    for (let copy = 0; copy < 3; copy++) {
        GOALS.forEach((g, i) => {
            const row = document.createElement('div');
            row.className = 'row';
            row.innerHTML =
                `<div class="row-ball">${g.caught ? ballSVG() : emptyBallSVG()}</div>` +
                `<span class="row-num">${String(g.id).padStart(3, '0')}</span>` +
                `<span class="row-name">${gName(g).toUpperCase()}</span>`;
            row.addEventListener('click', () => {
                selIdx = i;
                virtualIdx = N + i; // middle copy
                updateWheel(true);
                showDetail();
            });
            track.appendChild(row);
            rowEls.push(row);
        });
    }

    virtualIdx = N + selIdx; // start in middle copy
}

// ===== WHEEL POSITION & DEPTH =====
function updateWheel(animate) {
    if (animate === false) {
        track.style.transition = 'none';
    } else {
        track.style.transition = '';
    }

    const listH = list.clientHeight;
    const offset = virtualIdx * ROW_H - (listH / 2) + (ROW_H / 2);
    track.style.transform = `translateY(${-offset}px)`;

    // Depth classes on ALL rows based on visual distance from virtualIdx
    rowEls.forEach((row, i) => {
        const g = GOALS[i % N];
        const dist = Math.abs(i - virtualIdx);

        row.classList.remove('sel', 'depth-1', 'depth-2', 'depth-3', 'depth-4');
        row.classList.toggle('caught', g.caught);

        if (dist === 0) {
            row.classList.add('sel');
            row.classList.remove('hidden');
        } else if (dist <= 4) {
            row.classList.add(`depth-${dist}`);
            row.classList.remove('hidden');
        } else {
            row.classList.add('depth-4', 'hidden');
        }
    });

    pbar.style.width = (CAUGHT_COUNT / GOALS.length * 100) + '%';
    pLabel.textContent = CAUGHT_COUNT + '/' + GOALS.length;
}

// After the transition, silently snap back to middle copy if needed
function snapToMiddle() {
    if (virtualIdx < N || virtualIdx >= 2 * N) {
        selIdx = wrap(selIdx);
        virtualIdx = N + selIdx;

        // Suppress row transitions during snap so rows don't animate in
        track.classList.add('snapping');
        updateWheel(false);
        track.offsetHeight; // force reflow
        track.classList.remove('snapping');
        track.style.transition = '';
    }
}

track.addEventListener('transitionend', e => {
    if (e.target !== track) return; // ignore bubbled events from child rows
    snapToMiddle();
});

// ===== NAVIGATE =====
function navigate(delta) {
    selIdx = wrap(selIdx + delta);
    virtualIdx += delta;
    updateWheel(true);
    showDetail();
}

// ===== MOUSE WHEEL (throttled: 1 step per scroll) =====
let wheelLock = false;
list.addEventListener('wheel', e => {
    e.preventDefault();
    if (wheelLock) return;
    wheelLock = true;
    navigate(e.deltaY > 0 ? 1 : -1);
    setTimeout(() => { wheelLock = false; }, 250);
}, { passive: false });

// ===== KEYBOARD =====
document.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') { e.preventDefault(); navigate(1); }
    if (e.key === 'ArrowUp') { e.preventDefault(); navigate(-1); }
});

// ===== TOUCH SWIPE =====
let touchStartY = 0;
list.addEventListener('touchstart', e => { touchStartY = e.touches[0].clientY; });
list.addEventListener('touchend', e => {
    const dy = touchStartY - e.changedTouches[0].clientY;
    if (Math.abs(dy) > 20) navigate(dy > 0 ? 1 : -1);
});

// ===== DETAIL =====
function showDetail() {
    const g = GOALS[selIdx];
    sprite.src = artUrl(g.pokemonId);
    sprite.classList.toggle('silhouette', !g.caught);
    sNum.textContent = '#' + String(g.id).padStart(3, '0');
    sName.textContent = gName(g).toUpperCase();

    const ct = g.caught ? `<span class="d-caught-tag">${t('caught')}</span>` : '';
    const catLabel = t(g.category);

    const startVal = g.started || '—';
    const finishVal = g.finished || '—';
    const datesHtml = `<div class="d-dates">
        <span class="d-date-label">${t('started')}</span> <span class="d-date-value">${startVal}</span>
        <span class="d-date-sep">—</span>
        <span class="d-date-label">${t('finished')}</span> <span class="d-date-value">${finishVal}</span>
    </div>`;

    const prog = g.progress || { current: 0, total: 1 };
    const pct = Math.round(prog.current / prog.total * 100);
    const progressHtml = `<div class="d-progress">
        <span class="d-progress-label">${t('progress')}</span>
        <div class="d-progress-track"><div class="d-progress-fill" style="width:${pct}%"></div></div>
        <span class="d-progress-value">${prog.current}/${prog.total}</span>
    </div>`;

    detail.innerHTML =
        `<div class="d-top">` +
            `<div class="d-title-row"><span class="d-title">${gName(g).toUpperCase()}</span><span class="d-type" style="background:${TCOLORS[g.category]}">${catLabel}</span>${ct}</div>` +
            `<div class="d-desc">${gDesc(g)}</div>` +
        `</div>` +
        `<div class="d-bottom">` +
            progressHtml +
            `<div class="d-bottom-row">${datesHtml}<div class="d-stars">${g.difficulty}</div></div>` +
        `</div>`;
}

// ===== LANGUAGE =====
function setLang(l) {
    lang = l;
    localStorage.setItem(LK, l);
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
    hTitle.textContent = t('title');
    hDeadline.textContent = t('deadline');
    hCompletion.textContent = t('completion');
    buildRows();
    updateWheel(false);
    track.offsetHeight;
    track.style.transition = '';
    showDetail();
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

// ===== COUNTDOWN =====
function updateHud() {
    const now = new Date(), bd = TRAINER.birthday;
    const target = new Date(bd.getFullYear() + TRAINER.target, bd.getMonth(), bd.getDate());
    const diff = Math.max(0, target - now);
    const totalSec = Math.floor(diff / 1000);
    const d = Math.floor(totalSec / 86400);
    const h = Math.floor((totalSec % 86400) / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    const y = Math.floor(d / 365);
    const mo = Math.floor((d % 365) / 30);
    const dd = d % 30;
    const pad = n => String(n).padStart(2, '0');
    hCountdown.textContent = `${y}y ${mo}m ${dd}d ${pad(h)}h ${pad(m)}m ${pad(s)}s`;
}

// ===== INIT =====
setLang(lang);
updateHud();
setInterval(updateHud, 1000);
