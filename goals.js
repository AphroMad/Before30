// ============================================
//  TRAINER CONFIG
// ============================================
const TRAINER = {
    name: "PIERRE",
    birthday: new Date(2000, 4, 24), // May 24, 2000
    target: 30
};

// ============================================
//  UI TRANSLATIONS
// ============================================
const LANG = {
    en: {
        title: "BEFORE 30 GOALDEX",
        completion: "COMPLETION",
        deadline: "DEADLINE: MAY 24, 2030",
        select: "Select a quest...",
        caught: "CAUGHT",
        started: "STARTED",
        finished: "FINISHED",
        progress: "PROGRESS",
        career: "CAREER", travel: "TRAVEL", sport: "SPORT",
        music: "MUSIC", mind: "MIND", creative: "CREATIVE", personal: "PERSONAL",
    },
    fr: {
        title: "GOALDEX AVANT 30",
        completion: "COMPLÉTION",
        deadline: "DEADLINE : 24 MAI 2030",
        select: "Choisis une quête...",
        caught: "ATTRAPÉ",
        started: "DÉBUT",
        finished: "FIN",
        progress: "PROGRÈS",
        career: "CARRIÈRE", travel: "VOYAGE", sport: "SPORT",
        music: "MUSIQUE", mind: "MENTAL", creative: "CRÉATIF", personal: "PERSO",
    }
};

// ============================================
//  LIFE GOALS — name/description per language
// ============================================
const GOALS = [

    // 1 — SPORT
    { category:"sport",    pokemonId:84,   difficulty:"★★★★☆", caught:false,
      en: { name:"5km sub 20m",       desc:"Run 5 kilometers in under 20 minutes." },
      fr: { name:"5km en moins de 20m",   desc:"Courir 5 kilomètres en moins de 20 minutes." } },
    // 2 — CAREER
    { category:"career",   pokemonId:479,  difficulty:"★★★★☆", caught:false,
      progress: { current:80000, total:1000000, unit:"downloads" },
      started: "2024-12-25",
      en: { name:"Teach people CS",      desc:"Getting 1 million downloads on my free app that teach you code, Code Life" },
      fr: { name:"Enseigner l'informatique",      desc:"Obtenir 1 million de téléchargements sur mon application gratuite qui enseigne le code, Code Life" } },
    // 3 — MIND
    { category:"mind",     pokemonId:307,  difficulty:"★★★☆☆", caught:false,
      en: { name:"Meditation",    desc:"Meditate every day for 30 days straight." },
      fr: { name:"Méditation",  desc:"Méditer chaque jour pendant 30 jours d'affilée." } },
    // 4 — MUSIC
    { category:"music",    pokemonId:849,  difficulty:"★★★☆☆", caught:false,
      progress: { current:33, total:100, unit:"%" },
      en: { name:"Play Guitar / Uk",      desc:"Becoming really good at playing the guitar and ukulele. Not just campfire song like I'm doing right now." },
      fr: { name:"Jouer de la guitare / Uk",    desc:"Devenir vraiment bon à la guitare et au ukulélé. Pas seulement des chansons de feu de camp comme je fais là." } },
    // 5 — SPORT
    { category:"sport",    pokemonId:59,   difficulty:"★★★★☆", caught:false,
      en: { name:"Run a marathon",       desc:"Complete a full 42km marathon." },
      fr: { name:"Courir un marathon",   desc:"Terminer un marathon complet de 42km." } },
    // 6 — CREATIVE
    { category:"creative", pokemonId:571,  difficulty:"★★★★☆", caught:false,
      en: { name:"Make a game",      desc:"Create a fun video game. A game that people genuinly enjoy playing." },
      fr: { name:"Créer un jeu",      desc:"Créer un jeu vidéo amusant. Un jeu que les gens apprécient vraiment." } },
    // 7 — MIND
    { category:"mind",     pokemonId:272,  difficulty:"★★★★☆", caught:false,
      en: { name:"Learn Spanish",         desc:"Reach conversational fluency in Spanish." },
      fr: { name:"Apprendre l'espagnol",      desc:"Atteindre un niveau conversationnel en espagnol." } },
    // 8 — CAREER (caught!)
    { category:"career",   pokemonId:628,  difficulty:"★★★☆☆", caught:true,
      started: "2024-03-01", finished: "2025-03-01",
      en: { name:"Work in North America",     desc:"Get a job in North America just to see how is it, and how different life is." },
      fr: { name:"Travailler en Amérique du Nord",  desc:"Obtenir un job en Amérique du Nord juste pour voir comment c'est. Et à quel point la vie y est différente." } },
    // 9 — SPORT
    { category:"sport",    pokemonId:701,  difficulty:"★★★★☆", caught:false,
      en: { name:"Backflip",       desc:"Learn to do a backflip." },
      fr: { name:"Backflip",   desc:"Apprendre à faire un backflip." } },
    // 10 — PERSONAL
    { category:"personal", pokemonId:441,  difficulty:"★★★☆☆", caught:false,
      en: { name:"Whistle like a dad",     desc:"Learn to whistle really loudly like dad does. It's useful when coaching!" },
      fr: { name:"Siffler comme un daron",  desc:"Apprendre à siffler très fort comme le fait papa. C'est pratique quand on coach !" } },
    // 11 — MIND
    { category:"mind",     pokemonId:65,   difficulty:"★★★★☆", caught:false,
      en: { name:"1500 elo at chess",         desc:"Reach a 1500 Elo rating in chess." },
      fr: { name:"Atteindre 1500 elo aux échecs",      desc:"Atteindre un classement Elo de 1500 aux échecs." } },
    // 12 — CAREER
    { category:"career",   pokemonId:115,  difficulty:"★★★★☆", caught:false,
      progress: { current:20000, total:100000, unit:"users" },
      started: "2021-09-25",
      en: { name:"Motivate youngsters",      desc:"Motivate 100k of young people to pursue their dreams and achieve their goals thanks to my Gamified Life app, GameLife" },
      fr: { name:"Motiver les jeunes",      desc:"Motiver 100k jeunes à poursuivre leurs rêves et atteindre leurs objectifs grâce à mon application de Gamification de vie, GameLife" } },
    // 13 — SPORT
    { category:"sport",    pokemonId:658,  difficulty:"★★★★★", caught:false,
      en: { name:"IronMan 70.3",       desc:"Complete a 70.3 IronMan triathlon." },
      fr: { name:"Semi IronMan",   desc:"Terminer un Semi IronMan." } },
    // 14 — MUSIC
    { category:"music",    pokemonId:39,   difficulty:"★★★☆☆", caught:false,
      progress: { current:10, total:100, unit:"%" },
      en: { name:"Learn to sing",      desc:"Become decent at singing. Being able to perform in front of others." },
      fr: { name:"Apprendre à chanter",    desc:"Devenir compétent en chant. Être capable de chanter devant d'autres gens pour le plaisir." } },
    // 15 — CREATIVE
    { category:"creative", pokemonId:289,  difficulty:"★★★☆☆", caught:false,
      en: { name:"Build in Public 30 days",      desc:"Document my journey publicly for at least 30 days." },
      fr: { name:"Build in public 30 jours",    desc:"Documenter mon parcours publiquement pendant au moins 30 jours." } },
    // 16 — SPORT
    { category:"sport",    pokemonId:68,   difficulty:"★★★☆☆", caught:false,
      progress: { current:50, total:100, unit:"kg" },
      en: { name:"100kg bench",       desc:"100kg * 10 reps bench press." },
      fr: { name:"100kg Développé couché",   desc:"100kg * 10 réps au développé couché." } },
    // 17 — CAREER
    { category:"career",   pokemonId:294,  difficulty:"★★★☆☆", caught:false,
      en: { name:"Give a big talk",     desc:"Present something I built to 100+ people at a meetup or conference." },
      fr: { name:"Faire un super talk",  desc:"Présenter quelque chose que j'ai construit à plus de 100 personnes lors d'un meetup ou d'une conférence." } },
    // 18 — MIND
    { category:"mind",     pokemonId:518,  difficulty:"★★★☆☆", caught:false,
      en: { name:"Lucid Dreams",     desc:"Learn to control and remember your dreams while you're asleep." },
      fr: { name:"Rêves lucides",  desc:"Apprendre à contrôler et à se souvenir de ses rêves pendant le sommeil." } },
    // 19 — SPORT
    { category:"sport",    pokemonId:538,  difficulty:"★★★☆☆", caught:false,
      en: { name:"Learn to Fight",    desc:"Enough to be able to defend my people and I." },
      fr: { name:"Apprendre à me battre",  desc:"En savoir assez pour pouvoir défendre mes proches et moi." } },
    // 20 — PERSONAL
    { category:"personal", pokemonId:534,  difficulty:"★★★★☆", caught:false,
      en: { name:"House flipping",     desc:"Learn the basics of electricity, plumbing, etc.. Then renovate a house." },
      fr: { name:"Retaper une maison",  desc:"Apprendre les bases de l'elec, plomberie, etc.. Puis rénover une maison." } },
    // 21 — CREATIVE
    { category:"creative", pokemonId:51,   difficulty:"★★★★☆", caught:false,
      en: { name:"Building a community",      desc:"Share my journey online, showing people it's possible, allowing them to dream and to work towards those dreams." },
      fr: { name:"Créer une communauté",    desc:"Partager mon parcours en ligne, montrer aux gens que tout est possible, et leur permettre de rêver et de travailler pour atteindre ces rêves." } },
    // 22 — SPORT
    { category:"sport",    pokemonId:106,  difficulty:"★★★★★", caught:false,
      progress: { current:80, total:100, unit:"cm" },
      started: "2021-01-01",
      en: { name:"1m jump",    desc:"Keep training my jumps to be able to jump 1 meter high." },
      fr: { name:"Saut de 1m",  desc:"Continuer à m'entraîner pour pouvoir sauter à 1 mètre de hauteur." } },
    // 23 — CAREER
    { category:"career",   pokemonId:474,  difficulty:"★★★★☆", caught:false,
      en: { name:"Google / Apple Job",       desc:"No logic reason, I just want to work at Google or Apple. I want to play with the best." },
      fr: { name:"Google / Apple Job",          desc:"Pas de raison logique, je veux juste travailler l'un des deux. Je veux jouer avec les meilleurs." } },
    // 24 — SPORT
    { category:"sport",    pokemonId:237,  difficulty:"★★★☆☆", caught:false,
      en: { name:"Stable handstand",    desc:"Start training to hold a stable handstand." },
      fr: { name:"Handstand stable",  desc:"Commencer à s'entraîner pour tenir un handstand stable." } },
    // 25 — MIND
    { category:"mind",     pokemonId:151,  difficulty:"★★★☆☆", caught:false,
      en: { name:"Becoming myself",    desc:"Understanding myself, what I like, don't like, and building self-confidence." },
      fr: { name:"Devenir moi-même",  desc:"Me comprendre, ce que j'aime, ce que je n'aime pas, et développer ma confiance en moi." } },
    // 26 — CAREER
    { category:"career",   pokemonId:52,   difficulty:"★★★★★", caught:false,
      progress: { current:15000, total:1000000, unit:"€" },
      started: "2026-01-01",
      en: { name:"Make 1M €",      desc:"Make 1 million euros thanks to all my different projects." },
      fr: { name:"Faire 1M €",      desc:"Faire 1 million d'euros grâce à tous mes différents projets." } },
    // 27 — SPORT
    { category:"sport",    pokemonId:100,  difficulty:"★★★★☆", caught:false,
      en: { name:"1 Dunk",    desc:"I just want to dunk once, on the normal height basketball hoop." },
      fr: { name:"Faire 1 Dunk",  desc:"Je veux réussir un dunk, juste un, sur un panier normal." } },
    // 28 — CAREER
    { category:"career",   pokemonId:448,  difficulty:"★★★☆☆", caught:false,
      en: { name:"Lead my own company",     desc:"Create and develop my own company. Not a small company, a big thing." },
      fr: { name:"Diriger ma propre entreprise",  desc:"Créer et développer ma propre entreprise. Pas un petit truc, un grand projet." } },
    // 29 — SPORT
    { category:"sport",    pokemonId:74,   difficulty:"★★★☆☆", caught:false,
      en: { name:"Muscle up",    desc:"Be able to perform a muscle up." },
      fr: { name:"Muscle up",  desc:"Être capable de réaliser un muscle up." } },
    // 30 — PERSONAL
    { category:"personal", pokemonId:925,  difficulty:"★★★★☆", caught:false,
      en: { name:"Help my family",      desc:"Support and assist my family in various ways." },
      fr: { name:"Aider ma famille",    desc:"Soutenir et aider ma famille avec tout ce que j'ai." } },

];
