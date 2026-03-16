// ===== STATE =====
const SK = 'before30-caught';
const LK = 'before30-lang';
const caught = new Set(JSON.parse(localStorage.getItem(SK) || '[]'));
GOALS.forEach(g => { if (caught.has(g.id)) g.caught = true; });
let sel = null;
let filter = 'all';
let lang = localStorage.getItem(LK) || 'en';

// ===== DOM =====
const $ = id => document.getElementById(id);
const list = $('list');
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

const PNAMES = {
    4:'CHARMANDER',6:'CHARIZARD',25:'PIKACHU',39:'JIGGLYPUFF',
    52:'MEOWTH',53:'PERSIAN',58:'GROWLITHE',65:'ALAKAZAM',
    107:'HITMONCHAN',124:'JYNX',132:'DITTO',137:'PORYGON',
    144:'ARTICUNO',149:'DRAGONITE',150:'MEWTWO',257:'BLAZIKEN',
    376:'METAGROSS',384:'RAYQUAZA'
};

const TCOLORS = {
    career:'#f08030', travel:'#6890f0', health:'#78c850',
    personal:'#f85888', creative:'#a040a0', finance:'#b8a038'
};

function artUrl(id) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}

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

function filtered() {
    return filter === 'all' ? GOALS : GOALS.filter(g => g.category === filter);
}

// ===== RENDER =====
function render() {
    const goals = filtered();
    list.innerHTML = '';
    goals.forEach(g => {
        const row = document.createElement('div');
        row.className = 'row' + (g.caught ? ' caught' : '') + (g === sel ? ' sel' : '');
        row.innerHTML =
            `<div class="row-ball">${g.caught ? ballSVG() : emptyBallSVG()}</div>` +
            `<span class="row-num">${String(g.id).padStart(3, '0')}</span>` +
            `<span class="row-name">${gName(g).toUpperCase()}</span>` +
            `<div class="row-dot" style="background:${TCOLORS[g.category]}"></div>`;
        row.onclick = () => select(g);
        list.appendChild(row);
    });

    const c = GOALS.filter(g => g.caught).length;
    pbar.style.width = (c / GOALS.length * 100) + '%';
    pLabel.textContent = c + '/' + GOALS.length;
}

function select(g) {
    sel = g;
    sprite.src = artUrl(g.pokemonId);
    sprite.className = g.caught ? '' : 'silhouette';
    sNum.textContent = '#' + String(g.id).padStart(3, '0');
    sName.textContent = g.caught ? (PNAMES[g.pokemonId] || '???') : '???';

    const ct = g.caught ? ` <span class="d-caught-tag">${t('caught')}</span>` : '';
    const catLabel = t(g.category);
    detail.innerHTML =
        `<div class="d-title">${gName(g).toUpperCase()} ` +
        `<span class="d-type" style="background:${TCOLORS[g.category]}">${catLabel}</span>${ct}</div>` +
        `<div class="d-desc">${gDesc(g)}</div>` +
        `<div class="d-stars">${g.difficulty}</div>`;

    const goals = filtered();
    list.querySelectorAll('.row').forEach((r, i) => r.classList.toggle('sel', goals[i] === g));
}

// ===== LANGUAGE =====
function setLang(l) {
    lang = l;
    localStorage.setItem(LK, l);

    // Toggle buttons
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === l));

    // Update static UI text
    hTitle.textContent = t('title');
    hDeadline.textContent = t('deadline');
    hCompletion.textContent = t('completion');

    // Update filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        const key = btn.dataset.key;
        const dot = btn.querySelector('.fdot');
        const label = t(key);
        btn.innerHTML = (dot ? dot.outerHTML : '') + label;
    });

    // Re-render
    render();
    if (sel) select(sel);
    else detail.innerHTML = `<p>${t('select')}</p>`;
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

// ===== FILTERS =====
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filter = btn.dataset.cat;
        const goals = filtered();
        if (!goals.includes(sel) && goals.length) sel = goals[0];
        render();
        if (sel) select(sel);
    });
});

// ===== TOGGLE CAUGHT (double-click) =====
list.addEventListener('dblclick', () => {
    if (!sel) return;
    sel.caught = !sel.caught;
    if (sel.caught) caught.add(sel.id); else caught.delete(sel.id);
    localStorage.setItem(SK, JSON.stringify([...caught]));
    render();
    select(sel);
});

// ===== KEYBOARD =====
document.addEventListener('keydown', e => {
    const goals = filtered();
    const idx = sel ? goals.indexOf(sel) : -1;
    if (e.key === 'ArrowDown') {
        e.preventDefault();
        const n = idx < goals.length - 1 ? idx + 1 : 0;
        select(goals[n]); render();
        list.querySelectorAll('.row')[n]?.scrollIntoView({ block: 'nearest' });
    }
    if (e.key === 'ArrowUp') {
        e.preventDefault();
        const p = idx > 0 ? idx - 1 : goals.length - 1;
        select(goals[p]); render();
        list.querySelectorAll('.row')[p]?.scrollIntoView({ block: 'nearest' });
    }
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (!sel) return;
        sel.caught = !sel.caught;
        if (sel.caught) caught.add(sel.id); else caught.delete(sel.id);
        localStorage.setItem(SK, JSON.stringify([...caught]));
        render(); select(sel);
    }
});

// ===== AGE & COUNTDOWN =====
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
if (GOALS.length) select(GOALS[0]);
setInterval(updateHud, 1000);
