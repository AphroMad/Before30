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
        title: "BEFORE 30 YEARS OLD GOALDEX",
        deadline: "DEADLINE: MAY 24, 2030",
        select: "Select a quest...",
        caught: "CAUGHT",
        started: "STARTED",
        finished: "FINISHED",
        progress: "PROGRESS",
        career: "CAREER", travel: "TRAVEL", sport: "SPORT",
        music: "MUSIC", mind: "MIND", creative: "CREATIVE", personal: "PERSONAL",
        unknown: "UNKNOWN",
    },
    fr: {
        title: "GOALDEX AVANT 30 ANS",
        deadline: "DEADLINE : 24 MAI 2030",
        select: "Choisis une quête...",
        caught: "ATTRAPÉ",
        started: "DÉBUT",
        finished: "FIN",
        progress: "PROGRÈS",
        career: "CARRIÈRE", travel: "VOYAGE", sport: "SPORT",
        music: "MUSIQUE", mind: "MENTAL", creative: "CRÉATIF", personal: "PERSO",
        unknown: "INCONNU",
    }
};

// ============================================
//  LIFE GOALS — name/description per language
// ============================================
const GOALS = [

    { category:"sport",    pokemonId:84,   difficulty:"★★★★☆", caught:false,
      en: { name:"5km sub 20m",       desc:"Run 5 kilometers in under 20 minutes." },
      fr: { name:"5km en moins de 20m",   desc:"Courir 5 kilomètres en moins de 20 minutes." } },

    { category:"career",   pokemonId:479,  difficulty:"★★★★☆", caught:false,
      progress: { current:80000, total:1000000, unit:"downloads" },
      started: "2024-12-25",
      en: { name:"Teach people CS",      desc:"Getting 1 million downloads on my free app that teach you code, Code Life" },
      fr: { name:"Enseigner l'informatique",      desc:"Obtenir 1 million de téléchargements sur mon application gratuite qui enseigne le code, Code Life" } },

    { category:"travel",   pokemonId:554,   difficulty:"★★☆☆☆", caught:false,
      en: { name:"Visit Japan",    desc:"Travel to Japan. Tokyo, mangas, temples, food, everything." },
      fr: { name:"Aller au Japon",  desc:"Voyager au Japon. Tokyo, mangas, les temples, la bouffe, tout." } },

    { category:"sport",    pokemonId:59,   difficulty:"★★★★☆", caught:false,
      en: { name:"Run a marathon",       desc:"Complete a full 42km marathon." },
      fr: { name:"Courir un marathon",   desc:"Terminer un marathon complet de 42km." } },

    { category:"creative", pokemonId:571,  difficulty:"★★★★☆", caught:false,
      progress: { current:0, total:1000000, unit:"downloads" },
      en: { name:"Make a game",      desc:"Create a fun video game. A game that people genuinly enjoy playing. Let's reach 100k dl with it!" },
      fr: { name:"Créer un jeu",      desc:"Créer un jeu vidéo amusant. Un jeu que les gens apprécient vraiment. Et atteindre 100k téléchargements avec !" } },

    { category:"mind",     pokemonId:272,  difficulty:"★★★★☆", caught:false,
      en: { name:"Spanish",         desc:"Reach conversational fluency in Spanish." },
      fr: { name:"Espagnol",      desc:"Atteindre un niveau conversationnel en espagnol." } },

    { category:"career",   pokemonId:628,  difficulty:"★★★☆☆", caught:true,
      started: "2024-03-01", finished: "2025-03-01",
      en: { name:"Work in North America",     desc:"Get a job in North America just to see how life is there, like in the movie, you know?" },
      fr: { name:"Travailler en Amérique du Nord",  desc:"Obtenir un job en Amérique du Nord juste pour voir comment est la vie là-bas. Comme dans les films ou pas ?" } },

    { category:"sport",    pokemonId:701,  difficulty:"★★★★☆", caught:false,
      en: { name:"Backflip",       desc:"Learn to do a backflip." },
      fr: { name:"Backflip",   desc:"Apprendre à faire un backflip." } },

    { category:"personal", pokemonId:441,  difficulty:"★★★☆☆", caught:false,
      en: { name:"Whistle like a dad",     desc:"Learn to whistle really loudly like dad does." },
      fr: { name:"Siffler comme un daron",  desc:"Apprendre à siffler très fort comme le fait papa." } },

    { category:"mind",     pokemonId:65,   difficulty:"★★★★☆", caught:false,
      en: { name:"1500 elo at chess",         desc:"Reach a 1500 Elo rating in chess." },
      fr: { name:"1500 elo aux échecs",      desc:"Atteindre un classement Elo de 1500 aux échecs." } },

    { category:"career",   pokemonId:115,  difficulty:"★★★★☆", caught:false,
      progress: { current:20000, total:100000, unit:"users" },
      started: "2021-09-25",
      en: { name:"Motivate youngsters",      desc:"Motivate 100k of young people to pursue their dreams and achieve their goals thanks to my Gamified Life app, GameLife" },
      fr: { name:"Motiver les jeunes",      desc:"Motiver 100k jeunes à poursuivre leurs rêves et atteindre leurs objectifs grâce à mon application de Gamification de vie, GameLife" } },

    { category:"sport",    pokemonId:658,  difficulty:"★★★★★", caught:false,
      en: { name:"IronMan",       desc:"Complete a full IronMan." },
      fr: { name:"IronMan",   desc:"Terminer un IronMan complet." } },

    { category:"personal", pokemonId:384,  difficulty:"★★☆☆☆", caught:true,
      started: "2023-09-25", finished: "2023-09-25",
      en: { name:"Skydive",      desc:"Jump out of a plane alone. Once is enough." },
      fr: { name:"Saut en parachute",    desc:"Sauter seul d'un avion. Juste une fois." } },

    { category:"sport",    pokemonId:68,   difficulty:"★★★☆☆", caught:false,
      progress: { current:50, total:100, unit:"kg" },
      en: { name:"100kg bench",       desc:"100kg * 10 reps bench press." },
      fr: { name:"100kg DC",   desc:"100kg * 10 réps au développé couché." } },

    { category:"career",   pokemonId:294,  difficulty:"★★★☆☆", caught:false,
      en: { name:"Give a big talk",     desc:"Present something I built to 100+ people at a meetup or conference." },
      fr: { name:"Faire un super talk",  desc:"Présenter quelque chose que j'ai construit à plus de 100 personnes lors d'un meetup ou d'une conférence." } },

    { category:"mind",     pokemonId:132,  difficulty:"★★★☆☆", caught:false,
      en: { name:"Rubik's cube sub 1m",      desc:"Solve a Rubik's cube in under 1 minute." },
      fr: { name:"Rubik's cube en moins d'1m",    desc:"Résoudre un Rubik's cube en moins d'1 minute." } },

    { category:"sport",    pokemonId:382,  difficulty:"★★☆☆☆", caught:false,
      en: { name:"Scuba diving",      desc:"Get a scuba diving certification." },
      fr: { name:"Diplôme plongée",    desc:"Obtenir un diplôme de plongée sous-marine." } },

    { category:"personal", pokemonId:534,  difficulty:"★★★★☆", caught:false,
      en: { name:"House flipping",     desc:"Learn the basics of electricity, plumbing, etc.. Then renovate a house." },
      fr: { name:"Retaper une maison",  desc:"Apprendre les bases de l'elec, plomberie, etc.. Puis rénover une maison." } },

    { category:"travel",   pokemonId:144,  difficulty:"★★☆☆☆", caught:true,
      started: "2020-11-20", finished: "2020-11-20",
      en: { name:"Northern Lights",      desc:"Watch the northern lights with my own eyes. Iceland, Norway, Lapland... wherever the sky decides." },
      fr: { name:"Aurores boréales",    desc:"Voir une aurore boréale de mes propres yeux. Islande, Norvège, Laponie... là où le ciel décide." } },

    { category:"sport",    pokemonId:106,  difficulty:"★★★★★", caught:false,
      progress: { current:80, total:100, unit:"cm" },
      started: "2021-01-01",
      en: { name:"1m jump",    desc:"Keep training my jumps to be able to jump 1 meter high." },
      fr: { name:"Saut de 1m",  desc:"Continuer à m'entraîner pour pouvoir sauter à 1 mètre de hauteur." } },

    { category:"career",   pokemonId:474,  difficulty:"★★★★☆", caught:true,
      started: "2026-07-06", finished: "",
      en: { name:"Google / Apple Job",       desc:"No logic reason, I just want to work at Google or Apple. I want to play with the best." },
      fr: { name:"Google / Apple Job",          desc:"Pas de raison logique, je veux juste travailler l'un des deux. Je veux jouer avec les meilleurs." } },

    { category:"sport",    pokemonId:237,  difficulty:"★★★☆☆", caught:false,
      en: { name:"Stable handstand",    desc:"Being able to do a stable handstand for at least 30 seconds." },
      fr: { name:"Handstand stable",  desc:"Être capable de faire un handstand stable pendant au moins 30 secondes." } },

    { category:"mind",     pokemonId:175,  difficulty:"★★★☆☆", caught:false,
      en: { name:"Poker tournament",      desc:"Win a poker tournament." },
      fr: { name:"Tournoi de poker",    desc:"Gagner un tournoi de poker." } },

    { category:"career",   pokemonId:52,   difficulty:"★★★★★", caught:false,
      progress: { current:15000, total:1000000, unit:"€" },
      started: "2026-01-01",
      en: { name:"Make 1M €",      desc:"Make 1 million euros thanks to all my different projects." },
      fr: { name:"Faire 1M €",      desc:"Faire 1 million d'euros grâce à tous mes différents projets." } },

    { category:"sport",    pokemonId:100,  difficulty:"★★★★☆", caught:false,
      en: { name:"1 Dunk",    desc:"I just want to dunk once, on the normal height basketball hoop." },
      fr: { name:"Faire 1 Dunk",  desc:"Je veux réussir un dunk, juste un, sur un panier normal." } },

    { category:"personal", pokemonId:1008, difficulty:"★★☆☆☆", caught:true,
      started: "2022-12-16", finished: "",
      en: { name:"Motorcycle license",      desc:"Get my motorcycle license and go for a ride." },
      fr: { name:"Permis moto",    desc:"Passer le permis moto et aller rouler." } },

    { category:"sport",    pokemonId:74,   difficulty:"★★★☆☆", caught:false,
      en: { name:"Muscle up",    desc:"Be able to perform a muscle up." },
      fr: { name:"Muscle up",  desc:"Être capable de réaliser un muscle up." } },

    { category:"personal", pokemonId:925,  difficulty:"★★★☆☆", caught:false,
      en: { name:"Trip for parents",      desc:"A full trip for my parents, 100% paid by me." },
      fr: { name:"Voyage pour les parents",    desc:"Un vrai voyage pour les parents, payé à 100% par moi." } },

    { category:"unknown",  pokemonId:132,  difficulty:"☆☆☆☆☆", caught:false,
      en: { name:"???",      desc:"Empty slot. A new quest will appear here soon..." },
      fr: { name:"???",    desc:"Emplacement libre. Une nouvelle quête apparaîtra ici bientôt..." } },

    { category:"unknown",  pokemonId:132,  difficulty:"☆☆☆☆☆", caught:false,
      en: { name:"???",      desc:"Empty slot. A new quest will appear here soon..." },
      fr: { name:"???",    desc:"Emplacement libre. Une nouvelle quête apparaîtra ici bientôt..." } },

];
