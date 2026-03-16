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
        title: "BEFORE 30 POKÉDEX",
        completion: "COMPLETION",
        deadline: "DEADLINE: MAY 24, 2030",
        select: "Select a quest...",
        caught: "CAUGHT",
        all: "ALL",
        career: "CAREER", travel: "TRAVEL", health: "HEALTH",
        personal: "PERSONAL", creative: "CREATIVE", finance: "FINANCE",
    },
    fr: {
        title: "POKÉDEX AVANT 30",
        completion: "COMPLÉTION",
        deadline: "DEADLINE : 24 MAI 2030",
        select: "Choisis une quête...",
        caught: "ATTRAPÉ",
        all: "TOUT",
        career: "CARRIÈRE", travel: "VOYAGE", health: "SANTÉ",
        personal: "PERSO", creative: "CRÉATIF", finance: "FINANCE",
    }
};

// ============================================
//  LIFE GOALS — name/description per language
// ============================================
const GOALS = [
    // CAREER
    { id:1,  category:"career",   pokemonId:6,   difficulty:"★★★★☆", caught:false,
      en: { name:"Land dream job",       desc:"Get a position at a company I'm truly passionate about." },
      fr: { name:"Job de rêve",          desc:"Décrocher un poste dans une boîte qui me passionne vraiment." } },
    { id:2,  category:"career",   pokemonId:52,  difficulty:"★★★★☆", caught:false,
      en: { name:"Side project $$",      desc:"Launch a product or service that generates real revenue." },
      fr: { name:"Side project $$",      desc:"Lancer un produit ou service qui génère de vrais revenus." } },
    { id:3,  category:"career",   pokemonId:39,  difficulty:"★★★☆☆", caught:false,
      en: { name:"Give a tech talk",     desc:"Present at a meetup or conference." },
      fr: { name:"Donner un talk tech",  desc:"Présenter à un meetup ou une conférence." } },

    // TRAVEL
    { id:4,  category:"travel",   pokemonId:149, difficulty:"★★★☆☆", caught:false,
      en: { name:"Visit Japan",          desc:"Explore Tokyo, Kyoto, and the countryside." },
      fr: { name:"Visiter le Japon",     desc:"Explorer Tokyo, Kyoto et la campagne japonaise." } },
    { id:5,  category:"travel",   pokemonId:58,  difficulty:"★★★☆☆", caught:false,
      en: { name:"Epic road trip",       desc:"Drive across a whole country coast to coast." },
      fr: { name:"Road trip épique",     desc:"Traverser un pays entier en voiture." } },
    { id:6,  category:"travel",   pokemonId:144, difficulty:"★★☆☆☆", caught:false,
      en: { name:"Northern Lights",      desc:"Witness the Aurora Borealis in person." },
      fr: { name:"Aurores boréales",     desc:"Voir les aurores boréales en vrai." } },

    // HEALTH
    { id:7,  category:"health",   pokemonId:257, difficulty:"★★★★★", caught:false,
      en: { name:"Run a marathon",       desc:"Complete a full 42km marathon." },
      fr: { name:"Courir un marathon",   desc:"Terminer un marathon complet de 42km." } },
    { id:8,  category:"health",   pokemonId:107, difficulty:"★★★★☆", caught:false,
      en: { name:"Learn martial art",    desc:"Train consistently and earn a belt." },
      fr: { name:"Art martial",          desc:"S'entraîner régulièrement et obtenir une ceinture." } },
    { id:9,  category:"health",   pokemonId:150, difficulty:"★★★☆☆", caught:false,
      en: { name:"30-day meditation",    desc:"Meditate every day for 30 days straight." },
      fr: { name:"30 jours méditation",  desc:"Méditer chaque jour pendant 30 jours d'affilée." } },

    // PERSONAL
    { id:10, category:"personal", pokemonId:132, difficulty:"★★★★☆", caught:false,
      en: { name:"New language",         desc:"Reach conversational fluency in a new language." },
      fr: { name:"Nouvelle langue",      desc:"Atteindre un niveau conversationnel dans une nouvelle langue." } },
    { id:11, category:"personal", pokemonId:65,  difficulty:"★★★★☆", caught:false,
      en: { name:"Read 100 books",       desc:"Read 100 books across all genres." },
      fr: { name:"Lire 100 livres",      desc:"Lire 100 livres de tous genres." } },
    { id:12, category:"personal", pokemonId:4,   difficulty:"★★☆☆☆", caught:false,
      en: { name:"50 recipes",           desc:"Cook 50 recipes from cuisines around the world." },
      fr: { name:"50 recettes",          desc:"Cuisiner 50 recettes de cuisines du monde entier." } },

    // CREATIVE
    { id:13, category:"creative", pokemonId:124, difficulty:"★★★☆☆", caught:false,
      en: { name:"Play instrument",      desc:"Learn to play a full song on a new instrument." },
      fr: { name:"Jouer d'un instru",    desc:"Apprendre à jouer un morceau entier sur un nouvel instrument." } },
    { id:14, category:"creative", pokemonId:137, difficulty:"★★★★☆", caught:false,
      en: { name:"Make a short film",    desc:"Write, shoot, and edit a short film." },
      fr: { name:"Faire un court-métrage", desc:"Écrire, tourner et monter un court-métrage." } },
    { id:15, category:"creative", pokemonId:25,  difficulty:"★★☆☆☆", caught:true,
      en: { name:"Ship this website",    desc:"Build and deploy this life goals website!" },
      fr: { name:"Publier ce site",      desc:"Construire et déployer ce site d'objectifs de vie !" } },

    // FINANCE
    { id:16, category:"finance",  pokemonId:53,  difficulty:"★★★☆☆", caught:false,
      en: { name:"10K emergency fund",   desc:"Build a solid financial safety net." },
      fr: { name:"10K fonds d'urgence",  desc:"Constituer un filet de sécurité financier solide." } },
    { id:17, category:"finance",  pokemonId:376, difficulty:"★★☆☆☆", caught:false,
      en: { name:"Start investing",      desc:"Open a brokerage account and build a portfolio." },
      fr: { name:"Commencer à investir", desc:"Ouvrir un compte-titres et construire un portefeuille." } },
    { id:18, category:"finance",  pokemonId:384, difficulty:"★★★★★", caught:false,
      en: { name:"Become debt-free",     desc:"Pay off all debts. Owe nothing to anyone." },
      fr: { name:"Zéro dette",           desc:"Rembourser toutes les dettes. Ne rien devoir à personne." } },
];
