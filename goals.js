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
        career: "CAREER", travel: "TRAVEL", health: "HEALTH",
        personal: "PERSONAL", creative: "CREATIVE", finance: "FINANCE",
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
        career: "CARRIÈRE", travel: "VOYAGE", health: "SANTÉ",
        personal: "PERSO", creative: "CRÉATIF", finance: "FINANCE",
    }
};

// ============================================
//  LIFE GOALS — name/description per language
// ============================================
const GOALS = [
    // META
    { category:"creative", pokemonId:25,  difficulty:"★★☆☆☆", caught:true,
      started: "2026-03-16", finished: "2026-03-16",
      progress: { current:1, total:1 },
      en: { name:"Ship this website",    desc:"First step among many!" },
      fr: { name:"Publier ce site",      desc:"Faut bien commencer quelque part !" } },

    // CAREER
    { category:"career",   pokemonId:474,   difficulty:"★★★★☆", caught:false,
      en: { name:"Work at Google",       desc:"No logic reason, I just want to work at Google. I want to play with the best." },
      fr: { name:"Travailler chez Google",          desc:"Pas de raison logique, je veux juste travailler chez Google. Je veux jouer avec les meilleurs." } },
    { category:"career",   pokemonId:479,  difficulty:"★★★★☆", caught:false,
      progress: { current:42, total:100 },
      started: "2023-06-01",
      en: { name:"Teach people CS",      desc:"Getting 1 million downloads on my free app that teach you code, Code Life" },
      fr: { name:"Enseigner l'informatique",      desc:"Obtenir 1 million de téléchargements sur mon application gratuite qui enseigne le code, Code Life" } },
    { category:"career",   pokemonId:115,  difficulty:"★★★★☆", caught:false,
      en: { name:"Motivate youngsters",      desc:"Motivate 100k of young people to pursue their dreams and achieve their goals thanks to my Gamified Life app, GameLife" },
      fr: { name:"Motiver les jeunes",      desc:"Motiver 100k jeunes à poursuivre leurs rêves et atteindre leurs objectifs grâce à mon application de Gamification de vie, GameLife" } },
    { category:"career",   pokemonId:571,  difficulty:"★★★★☆", caught:false,
      en: { name:"Make a game",      desc:"Create a video game." },
      fr: { name:"Créer un jeu",      desc:"Créer un jeu vidéo." } },
    { category:"career",   pokemonId:52,  difficulty:"★★★★★", caught:false,
      en: { name:"Make 1M €",      desc:"Make 1 million euros thanks to all my different projects." },
      fr: { name:"Faire 1M €",      desc:"Faire 1 million d'euros grâce à tous mes différents projets." } },
    { category:"career",   pokemonId:441,  difficulty:"★★★☆☆", caught:false,
      en: { name:"Give a big talk",     desc:"Present something I built to 100+ people at a meetup or conference." },
      fr: { name:"Faire un super talk",  desc:"Présenter quelque chose que j'ai construit à plus de 100 personnes lors d'un meetup ou d'une conférence." } },
    { category:"career",   pokemonId:628,  difficulty:"★★★☆☆", caught:false,
      en: { name:"Work in North America",     desc:"Get a job in North America just to see how is it, and how different life is." },
      fr: { name:"Travailler en Amérique du Nord",  desc:"Obtenir un emploi en Amérique du Nord juste pour voir comment c'est. Et à quel point la vie y est différente." } },

    // HEALTH
    { category:"health",   pokemonId:59, difficulty:"★★★★★", caught:false,
      en: { name:"Run a marathon",       desc:"Complete a full 42km marathon." },
      fr: { name:"Courir un marathon",   desc:"Terminer un marathon complet de 42km." } },
    { category:"health",   pokemonId:658, difficulty:"★★★★★", caught:false,
      en: { name:"IronMan 70.3",       desc:"Complete a 70.3 IronMan triathlon." },
      fr: { name:"Semi IronMan",   desc:"Terminer un Semi IronMan." } },
    { category:"health",   pokemonId:307, difficulty:"★★★☆☆", caught:false,
      en: { name:"Meditation",    desc:"Meditate every day for 30 days straight." },
      fr: { name:"Méditation",  desc:"Méditer chaque jour pendant 30 jours d'affilée." } },

    // Culture
    { category:"creative", pokemonId:272, difficulty:"★★★★☆", caught:false,
      en: { name:"Learn Spanish",         desc:"Reach conversational fluency in Spanish." },
      fr: { name:"Apprendre l'espagnol",      desc:"Atteindre un niveau conversationnel en espagnol." } },
    { category:"creative", pokemonId:65, difficulty:"★★★★☆", caught:false,
      en: { name:"1500 elo at chess",         desc:"Reach a 1500 Elo rating in chess." },
      fr: { name:"Atteindre 1500 elo aux échecs",      desc:"Atteindre un classement Elo de 1500 aux échecs." } },
    { category:"creative", pokemonId:849, difficulty:"★★★☆☆", caught:false,
      en: { name:"Play Guitar / Uk",      desc:"Becoming really good at playing the guitar and ukulele. Not just campfire song like I'm doing right now." },
      fr: { name:"Jouer de la guitare / Uk",    desc:"Devenir vraiment bon à la guitare et au ukulélé. Pas seulement des chansons de feu de camp comme je fais là." } },
    { category:"creative", pokemonId:294, difficulty:"★★★☆☆", caught:false,
      en: { name:"Learn to sing",      desc:"Become decent at singing. Being able to perform in front of others." },
      fr: { name:"Apprendre à chanter",    desc:"Devenir compétent en chant. Être capable de chanter devant d'autres gens pour le plaisir." } },

    // TRAVEL
    { category:"travel",   pokemonId:303, difficulty:"★★★★☆", caught:false,
      en: { name:"Visit Japan",          desc:"Explore Tokyo, Kyoto, and the countryside." },
      fr: { name:"Visiter le Japon",     desc:"Explorer Tokyo, Kyoto et la campagne japonaise." } },
    { category:"travel",   pokemonId:418,  difficulty:"★★★★★", caught:true,
      en: { name:"Surf in Hawaii",       desc:"Catch some waves in the beautiful beaches of Hawaii." },
      fr: { name:"Surfer à Hawaï",     desc:"Surfer sur des vagues sur les magnifiques plages d'Hawaï." } },
    { category:"travel",   pokemonId:144, difficulty:"★★★☆☆", caught:true,
      en: { name:"Northern Lights",      desc:"Witness the Aurora Borealis in person." },
      fr: { name:"Aurores boréales",     desc:"Voir les aurores boréales en vrai." } },
    { category:"travel",   pokemonId:1000, difficulty:"★★★★☆", caught:true,
      en: { name:"Gamble in LasVegas",      desc:"Try your luck in the casinos of Las Vegas." },
      fr: { name:"Parier à Las Vegas",     desc:"Tenter sa chance dans les casinos de Las Vegas." } },
    { category:"travel",   pokemonId:630, difficulty:"★★★★☆", caught:false,
      en: { name:"Machu Picchu",      desc:"Visit the ancient Incan city of Machu Picchu." },
      fr: { name:"Machtu Pichtu",     desc:"Visiter l'ancienne cité inca de Machu Picchu." } },
    { category:"travel",   pokemonId:563, difficulty:"★★★☆☆", caught:false,
      en: { name:"Giza's Pyramids",      desc:"Visit the ancient pyramids of Giza." },
      fr: { name:"Pyramides de Gizeh",     desc:"Visiter les anciennes pyramides de Gizeh." } },
    { category:"travel",   pokemonId:784, difficulty:"★★★★☆", caught:false,
      en: { name:"Great wall of China",      desc:"Visit the Great Wall of China." },
      fr: { name:"Grande Muraille de Chine",     desc:"Visiter la Grande Muraille de Chine." } },
    { category:"travel",   pokemonId:330, difficulty:"★★★★☆", caught:true,
      en: { name:"Grand Canyon",      desc:"Visit the Grand Canyon." },
      fr: { name:"Grand Canyon",     desc:"Visiter le Grand Canyon." } },
    { category:"travel",   pokemonId:382, difficulty:"★★★☆☆", caught:true,
      en: { name:"Niagara Falls",      desc:"Visit Niagara Falls." },
      fr: { name:"Chutes du Niagara",     desc:"Visiter les chutes du Niagara." } },

];
