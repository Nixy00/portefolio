// Tout le contenu du site est ici : pour modifier un texte, un projet ou une
// compétence, il suffit d'éditer ce fichier. Chaque texte a une version fr et en.

export const profile = {
  name: "Matteo Godart",
  role: {
    fr: "Étudiant en BUT Informatique · Parcours Data",
    en: "Computer Science student (BUT) · Data track",
  },
  intro: {
    fr: "Étudiant en 3e année, j'aime transformer des données brutes en outils clairs et utiles, de la modélisation jusqu'à la visualisation.",
    en: "Third-year student who enjoys turning raw data into clear, useful tools, from modelling all the way to visualisation.",
  },
  headline: { fr: "Je conçois des", en: "I build" },
  headlineWords: {
    fr: ["bases de données", "tableaux de bord", "applications web", "outils d'analyse"],
    en: ["databases", "dashboards", "web applications", "analysis tools"],
  },
  location: { fr: "Reims, France", en: "Reims, France" },
  school: "IUT de Reims-Châlons-Charleville",
  github: "https://github.com/Nixy00",
};

export const categories = [
  { id: "all", label: { fr: "Tous", en: "All" } },
  { id: "perso", label: { fr: "Personnel", en: "Personal" } },
  { id: "cours", label: { fr: "Cours", en: "Coursework" } },
  { id: "stage", label: { fr: "Stage", en: "Internship" } },
];

export const projects = [
  {
    id: "autodash",
    category: "perso",
    title: "AutoDash",
    kind: { fr: "Projet personnel", en: "Personal project" },
    year: "2026",
    summary: {
      fr: "Tableau de bord des statistiques du sport automobile, par saison et par course, avec simulation des dernières manches d'un championnat encore ouvert.",
      en: "A motorsport statistics dashboard, by season and by race, with a simulation of the final rounds of a still-open championship.",
    },
    highlights: [
      {
        fr: "Données de 1950 à aujourd'hui via l'API Jolpica-F1, avec pagination et cache d'une heure",
        en: "Data from 1950 to today through the Jolpica-F1 API, with pagination and a one-hour cache",
      },
      {
        fr: "Classements pilotes et constructeurs, fiche pilote et scénario « Et si… ? »",
        en: "Driver and constructor standings, driver profile and a “What if…?” scenario",
      },
      {
        fr: "Tests automatisés avec pytest et GitHub Actions, déploiement avec Docker",
        en: "Automated tests with pytest and GitHub Actions, deployment with Docker",
      },
    ],
    tags: ["Python", "Streamlit", "Plotly", "pandas", "pytest", "Docker", "GitHub Actions"],
    image: "projects/autodash.png",
    gallery: [],
    github: "https://github.com/Nixy00/AutoDash",
  },
  {
    id: "buddy-system",
    category: "cours",
    title: "Buddy System",
    kind: { fr: "SAÉ · équipe de 5", en: "SAÉ · team of 5" },
    year: "2025 – 2026",
    summary: {
      fr: "Application web qui facilite l'intégration des étudiants internationaux à l'Université de Reims : parrainage, événements, messagerie et administration.",
      en: "A web app that helps international students settle in at the University of Reims: buddy matching, events, messaging and administration.",
    },
    highlights: [
      {
        fr: "Recherche de buddy avec filtres, inscription aux événements, messagerie privée",
        en: "Buddy search with filters, event sign-up, private messaging",
      },
      {
        fr: "Espace administrateur : gestion des utilisateurs, des événements et des signalements, statistiques",
        en: "Admin area: users, events and reports management, statistics",
      },
      {
        fr: "Gestion de projet en sprints, cahier des charges et déploiement sur une VM",
        en: "Sprint-based project management, specifications and deployment on a VM",
      },
    ],
    tags: ["Symfony 7.3", "PHP", "Twig", "MySQL", "Codeception", "Git"],
    image: "projects/buddy-home.png",
    gallery: ["projects/buddy-admin.png", "projects/buddy-messagerie.png"],
    github: "https://github.com/Nixy00/buddy-system",
  },
  {
    id: "steam",
    category: "cours",
    title: { fr: "Application web · base Steam", en: "Web app · Steam database" },
    kind: { fr: "Projet de cours · équipe de 2", en: "Coursework · team of 2" },
    summary: {
      fr: "Copie et manipulation d'une base de données de jeux Steam, puis développement d'une application web complète pour l'exploiter.",
      en: "Copying and working with a Steam games database, then building a full web application on top of it.",
    },
    highlights: [
      {
        fr: "Développement front-end et back-end",
        en: "Front-end and back-end development",
      },
      {
        fr: "Travail à deux, suivi du code sous GitLab",
        en: "Pair work, code tracked on GitLab",
      },
    ],
    tags: ["SQL", "PHP", "JavaScript", "HTML", "CSS", "GitLab"],
  },
  {
    id: "jo-2024",
    category: "cours",
    title: { fr: "Base de données · JO Paris 2024", en: "Database · Paris 2024 Olympics" },
    kind: { fr: "Projet de cours", en: "Coursework" },
    summary: {
      fr: "Conception d'une base de données sur les Jeux olympiques de Paris 2024, de la modélisation à la visualisation.",
      en: "Designing a database on the Paris 2024 Olympic Games, from modelling to visualisation.",
    },
    highlights: [
      {
        fr: "Modélisation avec PowerAMC, création et manipulation des données",
        en: "Modelling with PowerAMC, creating and manipulating the data",
      },
      {
        fr: "Insertion des données par plusieurs méthodes (SQL Developer, Access)",
        en: "Loading data through several methods (SQL Developer, Access)",
      },
      {
        fr: "Visualisation des résultats avec Power BI",
        en: "Visualising the results with Power BI",
      },
    ],
    tags: ["SQL", "SQL Developer", "PowerAMC", "Power BI", "Access"],
  },
  {
    id: "stage",
    category: "stage",
    title: {
      fr: "Digitalisation des données de production",
      en: "Digitalising production data",
    },
    kind: { fr: "Stage · 8 semaines", en: "Internship · 8 weeks" },
    summary: {
      fr: "Analyse des flux de données d'un site de production et mise en place d'outils pour mieux les exploiter.",
      en: "Analysing the data flows of a production site and setting up tools to make better use of them.",
    },
    highlights: [
      {
        fr: "Cartographie et analyse des flux de collecte et de traitement des données",
        en: "Mapping and analysing data collection and processing flows",
      },
      {
        fr: "Identification des points de perte d'information",
        en: "Identifying where information gets lost",
      },
      {
        fr: "Mise en application d'outils internes et d'un tableau de bord opérationnel",
        en: "Rolling out internal tools and an operational dashboard",
      },
    ],
    tags: ["Data", { fr: "Analyse de flux", en: "Flow analysis" }, { fr: "Tableau de bord", en: "Dashboard" }],
  },
];

// Les 6 compétences du BUT Informatique, reliées aux projets qui les illustrent.
export const butSkills = [
  {
    id: "realiser",
    title: { fr: "Réaliser un développement d'application", en: "Develop an application" },
    text: {
      fr: "Concevoir, coder et tester des applications qui répondent à un besoin.",
      en: "Design, code and test applications that meet a need.",
    },
    projects: ["autodash", "buddy-system", "steam"],
  },
  {
    id: "optimiser",
    title: { fr: "Optimiser des applications", en: "Optimise applications" },
    text: {
      fr: "Choisir les bons algorithmes et structures, mesurer et améliorer les performances.",
      en: "Pick the right algorithms and structures, measure and improve performance.",
    },
    projects: ["autodash"],
  },
  {
    id: "administrer",
    title: {
      fr: "Administrer des systèmes informatiques communicants",
      en: "Administer networked computer systems",
    },
    text: {
      fr: "Installer, déployer et sécuriser des services (serveurs, conteneurs, machines virtuelles).",
      en: "Install, deploy and secure services (servers, containers, virtual machines).",
    },
    projects: ["autodash", "buddy-system"],
  },
  {
    id: "donnees",
    core: true,
    title: { fr: "Gérer des données de l'information", en: "Manage information data" },
    text: {
      fr: "Modéliser, stocker, interroger et visualiser des données : le cœur du parcours Data.",
      en: "Model, store, query and visualise data: the core of the Data track.",
    },
    projects: ["jo-2024", "steam", "autodash", "stage"],
  },
  {
    id: "conduire",
    title: { fr: "Conduire un projet", en: "Lead a project" },
    text: {
      fr: "Analyser un besoin, planifier, suivre l'avancement et livrer.",
      en: "Analyse a need, plan, track progress and deliver.",
    },
    projects: ["buddy-system", "stage"],
  },
  {
    id: "equipe",
    title: { fr: "Travailler dans une équipe informatique", en: "Work in an IT team" },
    text: {
      fr: "Collaborer avec Git, répartir le travail et communiquer au sein d'une équipe.",
      en: "Collaborate with Git, share the work and communicate within a team.",
    },
    projects: ["buddy-system", "steam"],
  },
];

export const stack = [
  {
    title: { fr: "Données", en: "Data" },
    items: ["SQL", "Power BI", "pandas", "Plotly", "PowerAMC", "Access"],
  },
  {
    title: { fr: "Développement", en: "Development" },
    items: ["Python", "PHP", "Symfony", "JavaScript", "HTML", "CSS", "Streamlit"],
  },
  {
    title: { fr: "Outils", en: "Tools" },
    items: ["Git", "GitHub", "GitLab", "Docker", "Linux (Ubuntu)", "pytest"],
  },
];

export const languages = [
  { name: { fr: "Français", en: "French" }, level: { fr: "Langue maternelle", en: "Native" } },
  { name: { fr: "Anglais", en: "English" }, level: { fr: "Conversationnel", en: "Conversational" } },
  { name: { fr: "Espagnol", en: "Spanish" }, level: { fr: "Intermédiaire", en: "Intermediate" } },
];

export const education = [
  {
    when: "2026",
    title: {
      fr: "BUT Informatique, 3e année · parcours Data",
      en: "BUT Computer Science, 3rd year · Data track",
    },
    where: "IUT de Reims-Châlons-Charleville",
  },
  {
    when: "2025",
    title: {
      fr: "BUT Informatique, 2e année · parcours Data",
      en: "BUT Computer Science, 2nd year · Data track",
    },
    where: "IUT de Reims-Châlons-Charleville",
  },
  {
    when: "2024",
    title: { fr: "Baccalauréat STI2D", en: "STI2D Baccalaureate" },
    where: { fr: "Mention assez bien", en: "With honours (assez bien)" },
  },
];

export const ui = {
  nav: {
    projects: { fr: "Projets", en: "Projects" },
    skills: { fr: "Compétences", en: "Skills" },
    education: { fr: "Parcours", en: "Background" },
  },
  heroCta: { fr: "Voir mes projets", en: "See my projects" },
  projectsTitle: { fr: "Projets", en: "Projects" },
  projectsIntro: {
    fr: "Un projet personnel, des projets réalisés en BUT et un stage en entreprise.",
    en: "A personal project, projects built during my degree and an internship.",
  },
  noRepo: {
    cours: { fr: "Projet de cours, pas de dépôt public", en: "Coursework, no public repository" },
    stage: { fr: "Travail en entreprise, code non public", en: "Company work, code not public" },
  },
  viewCode: { fr: "Voir le code", en: "View code" },
  skillsTitle: { fr: "Compétences", en: "Skills" },
  skillsIntro: {
    fr: "Les six compétences du BUT Informatique, et les projets où je les ai mises en pratique.",
    en: "The six competencies of the Computer Science BUT, and the projects where I applied them.",
  },
  coreBadge: { fr: "Cœur du parcours", en: "Track focus" },
  stackTitle: { fr: "Technologies", en: "Tech stack" },
  languagesTitle: { fr: "Langues", en: "Languages" },
  educationTitle: { fr: "Parcours", en: "Background" },
  close: { fr: "Fermer", en: "Close" },
  themeDark: { fr: "Passer en thème sombre", en: "Switch to dark theme" },
  themeLight: { fr: "Passer en thème clair", en: "Switch to light theme" },
  langLabel: { fr: "Switch to English", en: "Passer en français" },
  footer: { fr: "Portfolio de Matteo Godart", en: "Matteo Godart's portfolio" },
  backToTop: { fr: "Haut de page", en: "Back to top" },
  menuOpen: { fr: "Ouvrir le menu", en: "Open menu" },
  menuClose: { fr: "Fermer le menu", en: "Close menu" },
  scrollHint: { fr: "Défiler", en: "Scroll" },
};
