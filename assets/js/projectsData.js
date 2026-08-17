/* ==========================================================================
   PROJECTS & DATASTORE — TAOUFIK HAMZA PORTFOLIO
   ========================================================================== */

const portfolioData = {
  profile: {
    name: "TAOUFIK HAMZA",
    title: "Élève Ingénieur en Informatique et Réseaux",
    subtitle: "Option Cybersécurité, Infrastructures et Réseaux — 4ᵉ Année",
    school: "École Marocaine des Sciences de l'Ingénieur (EMSI) — Casablanca",
    email: "hamza.taoufik.pro@gmail.com",
    altEmail: "taoufikhamza3453@gmail.com",
    phone: "+212 717071596",
    location: "Oulad Abbou, BERRECHID — Maroc",
    github: "https://github.com/taoufikhamza",
    linkedin: "https://www.linkedin.com/in/taoufikhamza",
    bio: "Élève ingénieur en 4ᵉ année, spécialisé en Cybersécurité, Infrastructures et Réseaux. Fortement engagé dans la sécurité des systèmes d'information, la gestion optimale des réseaux et la conception d'architectures informatiques hautement résilientes."
  },

  education: [
    {
      period: "Septembre 2024 — En cours",
      title: "2ᵉ Année Cycle Ingénieur (4ᵉ Année)",
      specialty: "Spécialisation Cybersécurité, Infrastructures et Réseaux",
      institution: "École Marocaine des Sciences de l'Ingénieur (EMSI) — Casablanca",
      description: "Formation supérieure axée sur la sécurité des systèmes et réseaux, la virtualisation, l'administration système, les pare-feux et la protection des données."
    },
    {
      period: "2022 — 2024",
      title: "Diplôme Technicien Spécialisé",
      specialty: "Développement Digital Option Web Full Stack",
      institution: "Institut Spécialisé de Technologies Appliquées (ISTA) Settat 2",
      description: "Apprentissage approfondi du développement Web Front-End & Back-End, des architectures de bases de données et des applications réactives."
    },
    {
      period: "Juin 2022",
      title: "Baccalauréat Scientifique",
      specialty: "Option Sciences Physiques",
      institution: "Lycée Khalid Ibn Al Walid",
      description: "Obtention du baccalauréat scientifique."
    }
  ],

  experience: [
    {
      period: "Juil. 2025 — Sept. 2025",
      role: "Développeur & Assistant IT",
      company: "GROUPE LABEL'VIE — SERVICE IT",
      location: "Casablanca, Maroc",
      tasks: [
        "Développement d'une application web de gestion et suivi des matériels informatiques du groupe.",
        "Assistance aux utilisateurs pour la résolution des problèmes techniques matériels et réseaux."
      ],
      technologies: [
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "PHP / Laravel", icon: "devicon-laravel-original colored" },
        { name: "MySQL", icon: "devicon-mysql-plain colored" },
        { name: "Réseaux IT", icon: "fa-solid fa-network-wired" }
      ]
    },
    {
      period: "Avril 2024 — Mai 2024",
      role: "Stagiaire Développeur (Stage PFE)",
      company: "PRINT HOUSE",
      location: "Settat, Maroc",
      tasks: [
        "Membre actif des équipes de développement du projet de gestion d'imprimerie.",
        "Conception et intégration des modules commerciaux en tant que spécialiste Front-End et Back-End."
      ],
      technologies: [
        { name: "React.js", icon: "devicon-react-original colored" },
        { name: "Node.js", icon: "devicon-nodejs-plain colored" },
        { name: "MySQL", icon: "devicon-mysql-plain colored" },
        { name: "Git", icon: "devicon-git-plain colored" }
      ]
    }
  ],

  // 13 REAL PROJECTS FROM GITHUB & CV (EXCLUDING NON-PROJECTS)
  projects: [
    {
      id: "siem-dashboard",
      title: "Étude et réalisation d'un tableau de bord SIEM",
      category: "cyber",
      categoryName: "Cybersécurité & Audits",
      shortDesc: "Déploiement d'une plateforme SOC/SIEM basée sur Wazuh dans un environnement VMware segmenté et sécurisé.",
      fullDesc: "Mise en œuvre d'une architecture SOC (Security Operations Center) virtuelle segmentée et sécurisée. Simulation d'attaques et détection automatique via Active Response sous Wazuh, pfSense et Windows Server 2016.",
      keyFeatures: [
        "Déploiement d'une plateforme SOC/SIEM basée sur Wazuh sous VMware",
        "Simulation d'attaques (Nmap, Hydra, SQLmap) et détection automatique via Active Response",
        "Administration sous Windows Server 2016 et Active Directory"
      ],
      technologies: [
        { name: "Wazuh SIEM", icon: "fa-solid fa-shield-halved" },
        { name: "pfSense", icon: "fa-solid fa-network-wired" },
        { name: "Kali Linux", icon: "devicon-linux-plain colored" },
        { name: "Windows Server", icon: "fa-solid fa-server" }
      ],
      github: "https://github.com/taoufikhamza/Etude-et-realisation-d-un-tableau-de-bord-pour-la-prise-de-decision-rela",
      icon: "fa-shield-halved"
    },
    {
      id: "blue-team-soc",
      title: "Analyse d'Incidents Blue-Team SOC Lab",
      category: "cyber",
      categoryName: "Cybersécurité & Audits",
      shortDesc: "Simulation et analyse d'incidents de sécurité dans un environnement SOC virtuel avec le framework MITRE ATT&CK.",
      fullDesc: "Lab complet de réponse aux incidents et de détection d'attaques (Brute Force, Brute Force SSH, SQLi, Port Scanning) avec analyse des journaux sous SIEM Wazuh.",
      keyFeatures: [
        "Simulation d'attaques Brute Force & SQLi et qualification d'alertes SOC",
        "Détection et corrélation d'événements via le framework MITRE ATT&CK",
        "Mise en place de règles Active Response et filtrage sous pfSense"
      ],
      technologies: [
        { name: "Wazuh", icon: "fa-solid fa-shield-cat" },
        { name: "Kali Linux", icon: "devicon-linux-plain colored" },
        { name: "pfSense", icon: "fa-solid fa-fire-burner" },
        { name: "MITRE ATT&CK", icon: "fa-solid fa-crosshairs" }
      ],
      github: "https://github.com/taoufikhamza/Analyse-d-Incidents-Blue-Team-Security-Operations-Center-SOC-Lab",
      icon: "fa-user-shield"
    },
    {
      id: "medical-blockchain",
      title: "Medical-Blockchain — Gestion Décentralisée de Santé",
      category: "blockchain",
      categoryName: "Blockchain & Web3",
      shortDesc: "Plateforme médicale décentralisée sur Blockchain Ethereum avec Smart Contracts Solidity et interface React.js.",
      fullDesc: "Système sécurisé et immuable de gestion des dossiers médicaux. Les patients et médecins interagissent via des Smart Contracts avec contrôle d'accès renforcé et authentification MetaMask.",
      keyFeatures: [
        "Smart Contracts Solidity testés et déployés avec Truffle & Ganache",
        "Gestion des rôles (Médecin / Patient) et confidentialité des dossiers",
        "Interface Web3 réactive développée sous React.js"
      ],
      technologies: [
        { name: "Ethereum", icon: "devicon-ethereum-plain colored" },
        { name: "Solidity", icon: "devicon-solidity-plain colored" },
        { name: "React.js", icon: "devicon-react-original colored" },
        { name: "MetaMask", icon: "fa-solid fa-wallet" }
      ],
      github: "https://github.com/taoufikhamza/Medical-Blockchain",
      icon: "fa-cubes"
    },
    {
      id: "javafx-stock",
      title: "Gestion de Stock JavaFX MVC",
      category: "desktop",
      categoryName: "Java & Desktop",
      shortDesc: "Application de gestion de stock et de produits sous l'architecture MVC avec JavaFX et MySQL.",
      fullDesc: "Application desktop moderne conçue en Java (JavaFX) appliquant l'architecture Modèle-Vue-Contrôleur (MVC). Elle permet la gestion complète des produits, catégories, mouvements de stock et clients.",
      keyFeatures: [
        "Architecture MVC structurée et orientée objet (POO)",
        "Gestion dynamique des produits, catégories et réapprovisionnements",
        "Connexion sécurisée à une base de données MySQL"
      ],
      technologies: [
        { name: "Java / JavaFX", icon: "devicon-java-plain colored" },
        { name: "MySQL", icon: "devicon-mysql-plain colored" },
        { name: "Architecture MVC", icon: "fa-solid fa-sitemap" }
      ],
      github: "https://github.com/taoufikhamza/Gestion-de-Stock-JavaFX-MVC",
      icon: "fa-boxes-packing"
    },
    {
      id: "kooragoal",
      title: "KooraGoal — Application Mobile de Football",
      category: "web",
      categoryName: "Développement Mobile & Web",
      shortDesc: "Application mobile de football permettant de suivre les matchs en direct, actualités et classements.",
      fullDesc: "Application mobile réactive de suivi sportif offrant les scores en direct, les détails des matchs, le classement des équipes et les dernières actualités du football.",
      keyFeatures: [
        "Affichage des scores en temps réel et des détails de matchs",
        "Interface mobile fluide et réactive développée pour smartphones"
      ],
      technologies: [
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "React Native / Web", icon: "devicon-react-original colored" },
        { name: "API REST", icon: "fa-solid fa-cloud-arrow-down" }
      ],
      github: "https://github.com/taoufikhamza/KooraGoal",
      icon: "fa-futbol"
    },
    {
      id: "linago-neo4j",
      title: "LinaGo Neo4j — Système de Recommandation par Graphe",
      category: "cyber",
      categoryName: "Graphes & Data Security",
      shortDesc: "Système basé sur la base de données orientée graphe Neo4j pour la gestion d'utilisateurs et de recommandations.",
      fullDesc: "Application innovante exploitant la puissance de la base de données orientée graphes Neo4j (Cypher query language) pour modéliser les relations entre utilisateurs et générer des recommandations intelligentes.",
      keyFeatures: [
        "Modélisation en graphe des entités et relations sous Neo4j",
        "Requêtes optimisées en langage Cypher pour les recommandations"
      ],
      technologies: [
        { name: "Neo4j Graph DB", icon: "fa-solid fa-diagram-project" },
        { name: "Cypher Query", icon: "fa-solid fa-database" },
        { name: "Java / Python", icon: "devicon-java-plain colored" }
      ],
      github: "https://github.com/taoufikhamza/LinaGo-Neo4j",
      icon: "fa-network-wired"
    },
    {
      id: "rh-management",
      title: "Gestion des Ressources Humaines (RH)",
      category: "web",
      categoryName: "Développement Enterprise",
      shortDesc: "Plateforme complète de gestion des employés, contrats, congés et fiches de paie.",
      fullDesc: "Application web d'entreprise dédiée aux départements RH pour l'administration des employés, le traitement des demandes de congés, la gestion des contrats et l'édition des fiches de paie.",
      keyFeatures: [
        "Gestion centralisée des profils employés et des contrats de travail",
        "Module d'approbation des congés et suivi de la paie"
      ],
      technologies: [
        { name: "C# / .NET", icon: "devicon-csharp-plain colored" },
        { name: "SQL Server / MySQL", icon: "devicon-mysql-plain colored" },
        { name: "HTML5 / CSS3", icon: "devicon-html5-plain colored" }
      ],
      github: "https://github.com/taoufikhamza/Gestion-ressources-humaines",
      icon: "fa-users-gear"
    },
    {
      id: "stockmaster",
      title: "Gestion de Stock et Inventaire StockMaster",
      category: "desktop",
      categoryName: "Gestion & Inventaire",
      shortDesc: "Application robuste pour la gestion des stocks, inventaires, entrées/sorties et alertes de seuil.",
      fullDesc: "Solution logicielle conçue pour automatiser le suivi des inventaires commerciaux, la gestion des fournisseurs et l'émission d'alertes automatiques en cas de rupture de stock.",
      keyFeatures: [
        "Gestion des mouvements de stock (entrées, sorties, ajustements)",
        "Alertes automatiques de seuil critique de stock"
      ],
      technologies: [
        { name: "C++ / Java", icon: "devicon-cplusplus-plain colored" },
        { name: "MySQL", icon: "devicon-mysql-plain colored" }
      ],
      github: "https://github.com/taoufikhamza/Gestion-de-Stock-et-Inventaire-StockMaster",
      icon: "fa-boxes-stacked"
    },
    {
      id: "parcit-labelvie",
      title: "ParcIT — Gestion des Equipements IT (Label'Vie)",
      category: "web",
      categoryName: "Développement Web & IT",
      shortDesc: "Application développée pour le Groupe Label'Vie dédiée au suivi du parc informatique et matériel.",
      fullDesc: "Plateforme web de gestion et d'inventaire du parc matériel IT développée lors du stage au Groupe Label'Vie, permettant un suivi précis des équipements attribués aux collaborateurs.",
      keyFeatures: [
        "Inventaire automatisé et suivi de la maintenance du parc IT",
        "Gestion des tickets d'assistance technique matérielle et réseau"
      ],
      technologies: [
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "PHP / Laravel", icon: "devicon-laravel-original colored" },
        { name: "MySQL", icon: "devicon-mysql-plain colored" }
      ],
      github: "https://github.com/taoufikhamza/ParcIT",
      icon: "fa-laptop-file"
    },
    {
      id: "restaurant-reservation",
      title: "Gestion de Réservation Restaurant en Ligne",
      category: "web",
      categoryName: "Développement Web",
      shortDesc: "Application web de réservation de tables et menus pour restaurant avec espace administrateur.",
      fullDesc: "Application web intuitive permettant aux clients de réserver des tables en ligne et d'explorer les menus. Inclut un tableau de bord administrateur pour la confirmation des réservations.",
      keyFeatures: [
        "Formulaire de réservation interactif avec confirmation par email",
        "Espace d'administration pour la gestion des tables et des créneaux"
      ],
      technologies: [
        { name: "Python", icon: "devicon-python-plain colored" },
        { name: "HTML5 / CSS3", icon: "devicon-html5-plain colored" },
        { name: "MySQL", icon: "devicon-mysql-plain colored" }
      ],
      github: "https://github.com/taoufikhamza/Gestion-de-r-servation-Restaurant-en-ligne",
      icon: "fa-utensils"
    },
    {
      id: "e-delivery-app",
      title: "Application Web E-Livraison (Python Django)",
      category: "web",
      categoryName: "Développement Web",
      shortDesc: "Plateforme web Full-Stack de gestion des commandes et du suivi des colis en temps réel.",
      fullDesc: "Solution e-commerce et e-livraison permettant la passation de commandes, la gestion des livreurs et la géolocalisation des colis développée sous Python Django.",
      keyFeatures: [
        "Backend puissant sous Django avec gestion de base de données MySQL",
        "Suivi du statut des livraisons et tableau de bord livreurs"
      ],
      technologies: [
        { name: "Python (Django)", icon: "devicon-django-plain colored" },
        { name: "MySQL", icon: "devicon-mysql-plain colored" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" }
      ],
      github: "https://github.com/taoufikhamza/R-alisation-d-une-application-web-e-livraison-",
      icon: "fa-truck-fast"
    },
    {
      id: "biblio-symfo",
      title: "Biblio_symfo — Gestion de Bibliothèque (Symfony)",
      category: "web",
      categoryName: "Développement Web PHP",
      shortDesc: "Système de gestion de bibliothèque et d'emprunts d'ouvrages développé sous Symfony.",
      fullDesc: "Application web robuste développée avec le framework PHP Symfony pour la gestion des livres, des adhérents, des emprunts et des retards d'imprimerie/bibliothèque.",
      keyFeatures: [
        "Architecture MVC Symfony avec composants Twig & Doctrine ORM",
        "Gestion des prêts et retards avec notifications"
      ],
      technologies: [
        { name: "PHP / Symfony", icon: "devicon-symfony-original colored" },
        { name: "MySQL", icon: "devicon-mysql-plain colored" },
        { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" }
      ],
      github: "https://github.com/taoufikhamza/Biblio_symfo",
      icon: "fa-book-bookmark"
    },
    {
      id: "print-house-app",
      title: "Plateforme d'Imprimerie Commerciale (Print House)",
      category: "web",
      categoryName: "Développement Web & PFE",
      shortDesc: "Application de gestion commerciale et de commande d'imprimerie développée lors du stage PFE.",
      fullDesc: "Solution web commerciale complète de suivi des commandes d'impression, d'édition de devis et de gestion de la relation client pour Print House Settat.",
      keyFeatures: [
        "Passation de commandes d'impression sur mesure en ligne",
        "Interface de gestion Front-End et Back-End réactive"
      ],
      technologies: [
        { name: "React.js", icon: "devicon-react-original colored" },
        { name: "Node.js", icon: "devicon-nodejs-plain colored" },
        { name: "MySQL", icon: "devicon-mysql-plain colored" }
      ],
      github: "https://github.com/taoufikhamza/Mini-Projet-Gestion-bibliotheque-",
      icon: "fa-print"
    }
  ],

  certifications: [
    {
      id: "cert-google-cyber",
      name: "Foundations of Cybersecurity",
      issuer: "Google",
      date: "Mai 2026",
      credentialId: "CQIQN72UXJPU",
      category: "cyber",
      icon: "fa-brands fa-google",
      verifyUrl: "https://coursera.org/verify/CQIQN72UXJPU"
    },
    {
      id: "cert-learnquest-blockchain",
      name: "Fundamentals of Blockchain Architecture",
      issuer: "LearnQuest",
      date: "Mai 2026",
      credentialId: "CMGVK6JQ5GDY",
      category: "blockchain",
      icon: "fa-brands fa-ethereum",
      verifyUrl: "https://coursera.org/verify/CMGVK6JQ5GDY"
    },
    {
      id: "cert-google-agile",
      name: "Agile Project Management",
      issuer: "Google",
      date: "Mai 2026",
      credentialId: "76NBLWM8P8XT",
      category: "management",
      icon: "fa-brands fa-google",
      verifyUrl: "https://coursera.org/verify/76NBLWM8P8XT"
    },
    {
      id: "cert-epfl-cpp",
      name: "Introduction à la programmation orientée objet (en C++)",
      issuer: "École Polytechnique Fédérale de Lausanne (EPFL)",
      date: "Janvier 2025",
      credentialId: "MMM2XG3X5XYC",
      category: "dev",
      icon: "devicon-cplusplus-plain colored",
      verifyUrl: "https://coursera.org/verify/MMM2XG3X5XYC"
    },
    {
      id: "cert-umich-python",
      name: "Utiliser Python pour accéder aux données Web",
      issuer: "University of Michigan",
      date: "Mai 2025",
      credentialId: "10YK2Y5VA6FI",
      category: "dev",
      icon: "devicon-python-plain colored",
      verifyUrl: "https://coursera.org/verify/10YK2Y5VA6FI"
    },
    {
      id: "cert-meta-react",
      name: "React Basics",
      issuer: "Meta",
      date: "Novembre 2025",
      credentialId: "AJNHLJCQ7VZT",
      category: "web",
      icon: "devicon-react-original colored",
      verifyUrl: "https://coursera.org/verify/AJNHLJCQ7VZT"
    },
    {
      id: "cert-meta-react-native",
      name: "React Native",
      issuer: "Meta",
      date: "Novembre 2025",
      credentialId: "L09AVUQWWE83",
      category: "web",
      icon: "devicon-react-original colored",
      verifyUrl: "https://coursera.org/verify/L09AVUQWWE83"
    },
    {
      id: "cert-jhu-unix",
      name: "L'atelier Unix",
      issuer: "The Johns Hopkins University",
      date: "Janvier 2025",
      credentialId: "DVS33SU2UKK1",
      category: "infra",
      icon: "fa-brands fa-linux",
      verifyUrl: "https://coursera.org/verify/DVS33SU2UKK1"
    },
    {
      id: "cert-umich-js",
      name: "Interactivité avec JavaScript",
      issuer: "University of Michigan",
      date: "Janvier 2025",
      credentialId: "NFV30ADAFM06",
      category: "web",
      icon: "devicon-javascript-plain colored",
      verifyUrl: "https://coursera.org/verify/NFV30ADAFM06"
    },
    {
      id: "cert-hkust-se",
      name: "Génie logiciel : conception de logiciels et gestion de projets",
      issuer: "The Hong Kong University of Science and Technology",
      date: "Mai 2025",
      credentialId: "K8J9W9EBXQ5L",
      category: "management",
      icon: "fa-solid fa-diagram-project",
      verifyUrl: "https://coursera.org/verify/K8J9W9EBXQ5L"
    },
    {
      id: "cert-umich-neg",
      name: "Négocier avec succès : Stratégies et capacités essentielles",
      issuer: "University of Michigan",
      date: "Janvier 2025",
      credentialId: "F1AM8ZP4Q12B",
      category: "management",
      icon: "fa-solid fa-handshake",
      verifyUrl: "https://coursera.org/verify/F1AM8ZP4Q12B"
    }
  ],

  skillCategories: [
    {
      title: "Cybersécurité & Audits",
      icon: "fa-solid fa-shield-virus",
      skills: [
        { name: "Wazuh SIEM", icon: "fa-solid fa-shield-halved" },
        { name: "Elastic SIEM / ELK", icon: "fa-solid fa-chart-line" },
        { name: "Splunk SIEM", icon: "fa-solid fa-magnifying-glass-chart" },
        { name: "IBM QRadar", icon: "fa-solid fa-radar" },
        { name: "pfSense Firewall", icon: "fa-solid fa-fire-burner" },
        { name: "Suricata / Snort IDS", icon: "fa-solid fa-network-wired" },
        { name: "Wireshark", icon: "fa-solid fa-wave-square" },
        { name: "Burp Suite", icon: "fa-solid fa-bug" },
        { name: "Nmap & Nessus", icon: "fa-solid fa-crosshairs" },
        { name: "TheHive & MISP", icon: "fa-solid fa-box-archive" },
        { name: "MITRE ATT&CK", icon: "fa-solid fa-bullseye" },
        { name: "OWASP Top 10", icon: "fa-solid fa-user-ninja" }
      ]
    },
    {
      title: "Programmation & Langages",
      icon: "fa-solid fa-code",
      skills: [
        { name: "Python", icon: "devicon-python-plain colored" },
        { name: "Java", icon: "devicon-java-plain colored" },
        { name: "C++", icon: "devicon-cplusplus-plain colored" },
        { name: "Solidity", icon: "devicon-solidity-plain colored" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" }
      ]
    },
    {
      title: "Développement Web & Mobile",
      icon: "fa-solid fa-laptop-code",
      skills: [
        { name: "HTML5 / CSS3", icon: "devicon-html5-plain colored" },
        { name: "React.js", icon: "devicon-react-original colored" },
        { name: "Laravel", icon: "devicon-laravel-original colored" },
        { name: "Symfony", icon: "devicon-symfony-original colored" },
        { name: "Django", icon: "devicon-django-plain colored" }
      ]
    },
    {
      title: "Infrastructures & Outils",
      icon: "fa-solid fa-server",
      skills: [
        { name: "Linux (Kali, Ubuntu)", icon: "devicon-linux-plain colored" },
        { name: "VMware", icon: "fa-solid fa-server" },
        { name: "Docker", icon: "devicon-docker-plain colored" },
        { name: "GitHub", icon: "devicon-github-original colored" },
        { name: "Postman", icon: "devicon-postman-plain colored" },
        { name: "MySQL", icon: "devicon-mysql-plain colored" },
        { name: "MongoDB", icon: "devicon-mongodb-plain colored" }
      ]
    }
  ]
};
