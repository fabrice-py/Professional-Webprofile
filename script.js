/* ============================================================
   script.js — Site professionnel de Fabrice TSAMO
   - Traductions FR / EN (changement de langue par l'utilisateur)
   - Navigation (menu mobile, lien actif, ombre à l'en-tête)
   - Animations d'apparition au défilement
   - Galerie (filtres + visionneuse)
   - Images de remplacement tant que les photos ne sont pas ajoutées
   - Formulaire de contact (Formspree ou repli mailto)
   ============================================================ */

/* ------------------------------------------------------------
   1. DICTIONNAIRE DE TRADUCTIONS
   Chaque clé correspond à un attribut data-i18n dans index.html.
   Pour modifier un texte : éditez la valeur ici (FR et EN).
   ------------------------------------------------------------ */
const translations = {
  /* ======================= FRANÇAIS ======================= */
  fr: {
    "meta.title": "Fabrice TSAMO – Ingénieur procédés | Valorisation des matières premières secondaires",
    "meta.description": "Fabrice TSAMO, ingénieur des mines et géométallurgiste : traitement des minerais, hydrométallurgie, valorisation des ressources secondaires, caractérisation de déchets, modélisation Python et cartographie SIG.",

    /* Navigation */
    "nav.home": "Accueil",
    "nav.profile": "Profil",
    "nav.experience": "Expériences",
    "nav.projects": "Projets",
    "nav.gallery": "Galerie",
    "nav.skills": "Compétences",
    "nav.education": "Formation",
    "nav.contact": "Contact",

    /* Accueil */
    "hero.greeting": "Bonjour, je suis",
    "hero.title": "Ingénieur procédés – Valorisation des matières premières secondaires",
    "hero.tagline": "Ingénieur des mines et géométallurgiste, je conçois, teste et modélise des procédés de traitement des minerais et de valorisation des ressources secondaires. Du laboratoire à l'échelle pilote, de l'échantillon au simulateur, je transforme la donnée expérimentale en décisions de procédé.",
    "hero.chip1": "Géométallurgie",
    "hero.chip2": "Hydrométallurgie",
    "hero.chip3": "Traitement des minerais",
    "hero.chip4": "Caractérisation de déchets",
    "hero.chip5": "Modélisation",
    "hero.chip6": "Python",
    "hero.chip7": "Cartographie SIG",
    "hero.cta_contact": "Me contacter",
    "hero.cta_projects": "Voir mes projets",
    "hero.cta_cv": "Télécharger mon CV",
    "hero.badge": "Du laboratoire au pilote",
    "hero.scroll": "Découvrir",

    /* Profil */
    "profile.label": "Profil professionnel",
    "profile.title": "Ingénieur des mines & géométallurgiste",
    "profile.p1": "Ingénieur des mines diplômé de l'ENSP Bamenda et titulaire d'un Master Georessources Engineering de l'ENSG Nancy, je suis spécialisé dans le traitement, la séparation et la valorisation des ressources minérales et secondaires. Mon approche géométallurgique relie la caractérisation de la matière (minéralogie, granulométrie, chimie) à la performance des procédés de concentration et d'extraction.",
    "profile.p2": "Mon expérience couvre l'ensemble de la chaîne expérimentale, du laboratoire au pilote : préparation d'échantillons, essais de séparation gravimétrique et magnétique, hydrométallurgie, puis exploitation et modélisation des résultats. J'ai développé un simulateur géométallurgique en Python permettant de modéliser des opérations de séparation et des circuits de traitement complets, et j'ai construit un jumeau numérique de centre de tri de déchets d'équipements électriques et électroniques (DEEE) sous MATLAB/Simulink.",
    "profile.p3": "Également géomaticien cartographe, je mobilise les outils SIG (QGIS, ArcGIS, web mapping) pour structurer et analyser les données terrain, qu'il s'agisse de campagnes de caractérisation de déchets ou de cartographie de gisements. Cette double compétence procédés / données me permet d'aborder les problématiques de valorisation avec une vision à la fois opérationnelle et quantitative.",
    "profile.h1": "Ingénieur des mines",
    "profile.h2": "Géométallurgiste",
    "profile.h3": "Traitement, séparation et valorisation des ressources minérales et secondaires",
    "profile.h4": "Expérience du laboratoire au pilote",
    "profile.h5": "Simulateur géométallurgique développé en Python",
    "profile.h6": "Modélisation de circuits de traitement",
    "profile.h7": "Caractérisation de déchets et modélisation d'un centre de tri DEEE",
    "profile.h8": "Géomaticien cartographe",

    /* Expériences */
    "exp.label": "Expériences professionnelles",
    "exp.title": "Un parcours du terrain au laboratoire",
    "exp.intro": "Des campagnes de caractérisation aux essais métallurgiques, chaque expérience a renforcé une même conviction : la qualité d'un procédé se construit sur la qualité de la donnée.",

    "exp1.period": "2026",
    "exp1.type": "Mission",
    "exp1.role": "Chargé de mission – Caractérisation de déchets",
    "exp1.company": "OPTAE France",
    "exp1.desc": "Pilotage d'une campagne de caractérisation des déchets ménagers et assimilés à l'échelle d'un territoire de 51 communes, de la conception des protocoles à l'analyse spatiale des résultats.",
    "exp1.b1": "Élaboration et déploiement des protocoles de caractérisation (échantillonnage, tri, classification par catégories) sur 51 communes.",
    "exp1.b2": "Tri, classification et quantification des flux de déchets ; consolidation des résultats en indicateurs de composition et de gisement.",
    "exp1.b3": "Structuration, nettoyage et analyse des données terrain pour produire des bilans fiables et exploitables par les décideurs.",
    "exp1.b4": "Analyse cartographique SIG des résultats : répartition spatiale des gisements, cartes thématiques et supports d'aide à la décision.",

    "exp2.period": "2025",
    "exp2.type": "R&D – Métallurgie",
    "exp2.role": "Ingénieur procédés – Valorisation de résidus de manganèse",
    "exp2.company": "Eramet Ideas",
    "exp2.desc": "Étude de valorisation de résidus de manganèse au sein du centre de recherche d'Eramet : caractérisation complète de la matière et essais de séparation physique pour identifier les voies de récupération du manganèse.",
    "exp2.b1": "Caractérisation granulométrique, chimique et minéralogique des résidus pour établir le bilan de déportement du manganèse par fraction.",
    "exp2.b2": "Réalisation d'essais de séparation gravimétrique et magnétique et évaluation des performances (teneur, récupération, rendement massique).",
    "exp2.b3": "Préparation d'échantillons représentatifs : broyage, séchage, quartage et tamisage humide.",
    "exp2.b4": "Division de pulpe à l'hydrocyclone et au diviseur ; suivi des bilans matière et interprétation des résultats.",

    "exp3.period": "2024",
    "exp3.type": "Géomatique",
    "exp3.role": "Géomaticien Cartographe",
    "exp3.company": "Groupe ARRDEL",
    "exp3.desc": "Conception d'outils cartographiques et de collecte de données pour la plateforme ArrdelBee du groupe ARRDEL, et formation des équipes aux outils géomatiques.",
    "exp3.b1": "Conception et mise en place d'un module de Web Mapping intégré à la plateforme ArrdelBee.",
    "exp3.b2": "Réalisation de formulaires numériques pour les enquêtes terrain et structuration des données collectées.",
    "exp3.b3": "Production de cartes thématiques pour l'analyse et la communication des résultats.",
    "exp3.b4": "Formation en cartographie et en pilotage de drone.",

    "exp4.period": "2023",
    "exp4.type": "Stage",
    "exp4.role": "Stagiaire géologue – Gisement de fer",
    "exp4.company": "Jindal Steel",
    "exp4.desc": "Stage de géologie d'exploration sur un gisement de fer : acquisition et interprétation des données de forage en appui à l'évaluation de la ressource.",
    "exp4.b1": "Core logging détaillé des carottes de forage (lithologie, minéralisation, altération, structures).",
    "exp4.b2": "Échantillonnage minéralogique des carottes et préparation des échantillons pour analyse.",
    "exp4.b3": "Cartographie des puits de forage et intégration des données dans la base de données du gisement.",

    /* Projets */
    "proj.label": "Projets académiques & personnels",
    "proj.title": "Modéliser pour mieux valoriser",
    "proj.intro": "Trois projets qui illustrent ma démarche : caractériser la matière, modéliser les séparations, optimiser les circuits.",

    "proj1.title": "Simulateur géométallurgique en Python",
    "proj1.desc": "Développement d'un simulateur géométallurgique en Python permettant de modéliser des opérations de séparation (gravimétrique, magnétique, classification) et de les assembler en circuits de traitement complets. L'outil relie les caractéristiques de la matière (distribution granulométrique, teneurs par fraction, propriétés physiques) aux performances attendues de chaque unité.",
    "proj1.d2": "Le simulateur calcule les bilans matière et métal, les courbes de partage et de récupération, et permet de comparer rapidement plusieurs configurations de flowsheet. Il constitue une base pour des études de sensibilité et pour l'optimisation de circuits avant essais pilotes.",
    "proj1.b1": "Modélisation des séparations par courbes de partage et modèles de performance",
    "proj1.b2": "Construction et simulation de circuits de traitement (flowsheets) avec recirculation",
    "proj1.b3": "Bilans matière / métal et calcul des indicateurs (teneur, récupération, rendement)",
    "proj1.b4": "Python – NumPy, pandas, Matplotlib",
    "proj1.fig1": "Schéma du circuit simulé (flowsheet)",
    "proj1.fig2": "Courbes de récupération / partage issues du simulateur",

    "proj2.title": "Jumeau numérique d'un centre de tri DEEE (MATLAB/Simulink)",
    "proj2.desc": "Modélisation dynamique d'un centre de tri de déchets d'équipements électriques et électroniques (DEEE) sous MATLAB/Simulink. Le jumeau numérique reproduit la chaîne de traitement (démantèlement, broyage, séparations physiques, tri) et permet de suivre les flux de matières et de composants à travers les différentes unités.",
    "proj2.d2": "L'outil sert à tester des scénarios d'exploitation (variation des flux entrants, réglages des séparateurs, goulots d'étranglement) et à estimer les taux de récupération des fractions valorisables : métaux ferreux, non ferreux, plastiques, cartes électroniques.",
    "proj2.b1": "Modélisation des flux et des unités de tri sous Simulink",
    "proj2.b2": "Scénarios de fonctionnement et analyse des goulots d'étranglement",
    "proj2.b3": "Estimation des taux de récupération par fraction",
    "proj2.b4": "MATLAB / Simulink",
    "proj2.fig1": "Schéma-bloc du jumeau numérique",
    "proj2.fig2": "Résultats de simulation (flux, taux de récupération)",

    "proj3.title": "Optimisation d'un procédé de traitement de l'andalousite (GeoRessources)",
    "proj3.desc": "Projet mené au laboratoire GeoRessources (Nancy) sur l'optimisation d'un procédé de traitement de l'andalousite. L'étude a combiné la caractérisation de la matière et des essais de séparation afin d'améliorer la qualité du concentré et la récupération de l'andalousite.",
    "proj3.d2": "Le travail a porté sur l'identification des paramètres influents du procédé, la réalisation d'essais comparatifs et l'interprétation des résultats par bilans matière, dans une logique d'optimisation du flowsheet.",
    "proj3.b1": "Caractérisation minéralogique et granulométrique de l'alimentation",
    "proj3.b2": "Essais de séparation et étude paramétrique",
    "proj3.b3": "Bilans matière et analyse des performances (teneur / récupération)",
    "proj3.b4": "Traitement de données et visualisation des résultats",
    "proj3.fig1": "Résultats d'essais métallurgiques",
    "proj3.fig2": "Courbe teneur – récupération",

    "results.title": "Résultats & visualisations",
    "results.intro": "Encarts prévus pour mes graphiques, courbes de récupération, cartes SIG et résultats d'essais métallurgiques.",
    "results.r1": "Graphiques",
    "results.r2": "Courbes de récupération",
    "results.r3": "Cartes SIG",
    "results.r4": "Résultats d'essais métallurgiques",

    /* Galerie */
    "gallery.label": "Galerie photos",
    "gallery.title": "En images",
    "gallery.intro": "Laboratoire, essais métallurgiques, caractérisation, terrain et résultats scientifiques.",
    "gallery.f_all": "Tous",
    "gallery.f_lab": "Laboratoire",
    "gallery.f_tests": "Essais métallurgiques",
    "gallery.f_charac": "Caractérisation",
    "gallery.f_field": "Terrain / déchets",
    "gallery.f_results": "Résultats scientifiques",
    "gallery.c1": "Préparation d'échantillons au laboratoire",
    "gallery.c2": "Tamisage humide et division de pulpe",
    "gallery.c3": "Essai de séparation gravimétrique",
    "gallery.c4": "Séparation magnétique – banc d'essai",
    "gallery.c5": "Caractérisation granulométrique (granulométrie laser)",
    "gallery.c6": "Analyse minéralogique (DRX / MEB)",
    "gallery.c7": "Campagne de caractérisation de déchets sur le terrain",
    "gallery.c8": "Tri et classification des flux de déchets",
    "gallery.c9": "Courbes de récupération – résultats d'essais",
    "gallery.c10": "Carte thématique SIG des résultats",

    /* Compétences */
    "skills.label": "Compétences",
    "skills.title": "De la matière au modèle",
    "skills.intro": "Un socle technique complet : caractériser, préparer, séparer, puis modéliser et optimiser, avec les outils numériques et géomatiques adaptés.",
    "skills.c1_title": "Minéralurgie & hydrométallurgie",
    "skills.c1_desc": "Concentration gravimétrique et magnétique, classification, lixiviation et extraction hydrométallurgique, bilans matière et métal, conception de flowsheets.",
    "skills.c1_t1": "Gravimétrie",
    "skills.c1_t2": "Séparation magnétique",
    "skills.c1_t3": "Hydrocyclone",
    "skills.c1_t4": "Lixiviation",
    "skills.c1_t5": "Bilans matière",
    "skills.c2_title": "Caractérisation",
    "skills.c2_desc": "Analyse granulométrique, minéralogique et chimique des matières premières, résidus et déchets, du gisement au laboratoire.",
    "skills.c2_t1": "Granulométrie laser",
    "skills.c2_t5": "Caractérisation de déchets",
    "skills.c3_title": "Préparation de la matière",
    "skills.c3_desc": "Constitution d'échantillons représentatifs et préparation des lots d'essai selon les bonnes pratiques d'échantillonnage.",
    "skills.c3_t1": "Broyage",
    "skills.c3_t2": "Séchage",
    "skills.c3_t3": "Quartage",
    "skills.c3_t4": "Tamisage humide",
    "skills.c3_t5": "Division de pulpe",
    "skills.c4_title": "Optimisation & modélisation de procédés",
    "skills.c4_desc": "Simulation de circuits, étude paramétrique, analyse statistique des essais et construction de jumeaux numériques.",
    "skills.c4_t1": "Simulation de circuits",
    "skills.c4_t2": "Courbes de partage",
    "skills.c4_t3": "Plans d'expériences",
    "skills.c4_t4": "Jumeau numérique",
    "skills.c5_title": "Outils numériques",
    "skills.c5_desc": "Programmation scientifique, simulation de procédés et analyse statistique.",
    "skills.c6_title": "Géomatique & cartographie",
    "skills.c6_desc": "Structuration, analyse spatiale et restitution cartographique des données terrain.",
    "skills.c6_t3": "Cartes thématiques",
    "skills.c6_t4": "Enquêtes terrain",

    /* Formation */
    "edu.label": "Diplômes & formations",
    "edu.title": "Formation d'ingénieur, spécialisation géoressources",
    "edu1.period": "2024 – 2026",
    "edu1.degree": "Master Georessources Engineering",
    "edu1.school": "ENSG Nancy – École nationale supérieure de géologie, Université de Lorraine",
    "edu1.desc": "Formation d'ingénierie des géoressources orientée vers la caractérisation, le traitement et la valorisation des ressources minérales primaires et secondaires, avec une forte composante géométallurgie, hydrométallurgie et modélisation des procédés.",
    "edu1.b1": "Géométallurgie et traitement des minerais",
    "edu1.b2": "Hydrométallurgie et valorisation des ressources secondaires",
    "edu1.b3": "Modélisation et simulation de procédés (Python, UsimPac / Bilco)",
    "edu2.period": "2018 – 2023",
    "edu2.degree": "Diplôme d'Ingénieur des Mines",
    "edu2.school": "ENSP Bamenda – École Nationale Supérieure Polytechnique, Université de Bamenda",
    "edu2.desc": "Formation d'ingénieur généraliste en ingénierie des mines couvrant la géologie, l'exploration, l'exploitation minière, le traitement des minerais et la gestion de projets miniers.",
    "edu2.b1": "Géologie et exploration minière",
    "edu2.b2": "Exploitation minière et traitement des minerais",
    "edu2.b3": "Topographie, cartographie et SIG",

    /* Contact */
    "contact.label": "Contact",
    "contact.title": "Travaillons ensemble",
    "contact.intro": "Vous recrutez dans le traitement des minerais, l'hydrométallurgie, la valorisation des ressources secondaires ou la géomatique ? Discutons de votre projet.",
    "contact.name": "Nom",
    "contact.name_ph": "Votre nom",
    "contact.email": "Email",
    "contact.email_ph": "votre@email.com",
    "contact.subject": "Objet",
    "contact.subject_ph": "Objet de votre message",
    "contact.message": "Message",
    "contact.message_ph": "Votre message…",
    "contact.send": "Envoyer le message",
    "contact.side_title": "Me retrouver",
    "contact.side_text": "Réponse sous 48 h. Ouvert aux opportunités en France et à l'international.",
    "contact.linkedin": "Profil professionnel",
    "contact.github": "Simulateur & projets Python",
    "contact.email_btn": "M'écrire directement",
    "contact.cv": "Télécharger le PDF",

    /* Messages du formulaire (utilisés par le script) */
    "form.invalid": "Merci de remplir tous les champs avec une adresse email valide.",
    "form.sending": "Envoi en cours…",
    "form.ok": "Merci ! Votre message a bien été envoyé.",
    "form.err": "Une erreur est survenue. Vous pouvez m'écrire directement par email.",
    "form.mailto": "Votre messagerie va s'ouvrir avec le message pré-rempli.",

    /* Pied de page */
    "footer.text": "Ingénieur procédés · Valorisation des matières premières secondaires"
  },

  /* ======================= ENGLISH ======================= */
  en: {
    "meta.title": "Fabrice TSAMO – Process Engineer | Secondary Raw Materials Recovery",
    "meta.description": "Fabrice TSAMO, mining engineer and geometallurgist: mineral processing, hydrometallurgy, secondary resource recovery, waste characterisation, Python modelling and GIS mapping.",

    /* Navigation */
    "nav.home": "Home",
    "nav.profile": "Profile",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.gallery": "Gallery",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.contact": "Contact",

    /* Home */
    "hero.greeting": "Hello, I am",
    "hero.title": "Process Engineer – Secondary Raw Materials Recovery",
    "hero.tagline": "A mining engineer and geometallurgist, I design, test and model mineral processing and secondary resource recovery processes. From the laboratory to pilot scale, from the sample to the simulator, I turn experimental data into process decisions.",
    "hero.chip1": "Geometallurgy",
    "hero.chip2": "Hydrometallurgy",
    "hero.chip3": "Mineral processing",
    "hero.chip4": "Waste characterisation",
    "hero.chip5": "Modelling",
    "hero.chip6": "Python",
    "hero.chip7": "GIS mapping",
    "hero.cta_contact": "Get in touch",
    "hero.cta_projects": "View my projects",
    "hero.cta_cv": "Download my CV",
    "hero.badge": "From lab to pilot scale",
    "hero.scroll": "Discover",

    /* Profile */
    "profile.label": "Professional profile",
    "profile.title": "Mining engineer & geometallurgist",
    "profile.p1": "A mining engineer graduated from ENSP Bamenda and holder of a Master's degree in Georesources Engineering from ENSG Nancy, I specialise in the processing, separation and recovery of mineral and secondary resources. My geometallurgical approach links material characterisation (mineralogy, particle size, chemistry) to the performance of concentration and extraction processes.",
    "profile.p2": "My experience spans the whole experimental chain, from the laboratory to pilot scale: sample preparation, gravity and magnetic separation tests, hydrometallurgy, then data processing and modelling of the results. I developed a geometallurgical simulator in Python to model separation units and complete processing circuits, and I built a digital twin of a WEEE (waste electrical and electronic equipment) sorting plant in MATLAB/Simulink.",
    "profile.p3": "Also a GIS analyst and cartographer, I rely on GIS tools (QGIS, ArcGIS, web mapping) to structure and analyse field data, whether for waste characterisation campaigns or deposit mapping. This dual process / data skill set lets me tackle recovery challenges with a vision that is both operational and quantitative.",
    "profile.h1": "Mining engineer",
    "profile.h2": "Geometallurgist",
    "profile.h3": "Processing, separation and recovery of mineral and secondary resources",
    "profile.h4": "Experience from laboratory to pilot scale",
    "profile.h5": "Geometallurgical simulator developed in Python",
    "profile.h6": "Processing circuit modelling",
    "profile.h7": "Waste characterisation and modelling of a WEEE sorting plant",
    "profile.h8": "GIS analyst & cartographer",

    /* Experience */
    "exp.label": "Professional experience",
    "exp.title": "A path from the field to the laboratory",
    "exp.intro": "From characterisation campaigns to metallurgical testing, every experience has reinforced the same conviction: a good process is built on good data.",

    "exp1.period": "2026",
    "exp1.type": "Assignment",
    "exp1.role": "Project Officer – Waste Characterisation",
    "exp1.company": "OPTAE France",
    "exp1.desc": "Led a household and similar waste characterisation campaign across a territory of 51 municipalities, from protocol design to spatial analysis of the results.",
    "exp1.b1": "Designed and rolled out characterisation protocols (sampling, sorting, classification by category) across 51 municipalities.",
    "exp1.b2": "Sorted, classified and quantified waste streams; consolidated the results into composition and deposit indicators.",
    "exp1.b3": "Structured, cleaned and analysed field data to deliver reliable, decision-ready reports.",
    "exp1.b4": "GIS mapping analysis of the results: spatial distribution of waste deposits, thematic maps and decision-support material.",

    "exp2.period": "2025",
    "exp2.type": "R&D – Metallurgy",
    "exp2.role": "Process Engineer – Manganese Residue Recovery",
    "exp2.company": "Eramet Ideas",
    "exp2.desc": "Recovery study of manganese residues at Eramet's research centre: full material characterisation and physical separation tests to identify manganese recovery routes.",
    "exp2.b1": "Particle size, chemical and mineralogical characterisation of the residues to establish the manganese deportment balance by size fraction.",
    "exp2.b2": "Ran gravity and magnetic separation tests and assessed performance (grade, recovery, mass yield).",
    "exp2.b3": "Prepared representative samples: crushing and grinding, drying, quartering and wet sieving.",
    "exp2.b4": "Pulp splitting with hydrocyclone and rotary splitter; mass balance monitoring and interpretation of results.",

    "exp3.period": "2024",
    "exp3.type": "Geomatics",
    "exp3.role": "GIS Analyst & Cartographer",
    "exp3.company": "ARRDEL Group",
    "exp3.desc": "Designed mapping and data collection tools for the ARRDEL Group's ArrdelBee platform and trained teams in geomatics tools.",
    "exp3.b1": "Designed and implemented a Web Mapping module integrated into the ArrdelBee platform.",
    "exp3.b2": "Built digital forms for field surveys and structured the collected data.",
    "exp3.b3": "Produced thematic maps for analysis and communication of results.",
    "exp3.b4": "Delivered training in cartography and drone piloting.",

    "exp4.period": "2023",
    "exp4.type": "Internship",
    "exp4.role": "Geologist Intern – Iron Ore Deposit",
    "exp4.company": "Jindal Steel",
    "exp4.desc": "Exploration geology internship on an iron ore deposit: acquisition and interpretation of drilling data in support of resource evaluation.",
    "exp4.b1": "Detailed core logging of drill cores (lithology, mineralisation, alteration, structures).",
    "exp4.b2": "Mineralogical sampling of drill cores and sample preparation for analysis.",
    "exp4.b3": "Drill hole mapping and integration of the data into the deposit database.",

    /* Projects */
    "proj.label": "Academic & personal projects",
    "proj.title": "Modelling for better recovery",
    "proj.intro": "Three projects that illustrate my approach: characterise the material, model the separations, optimise the circuits.",

    "proj1.title": "Geometallurgical simulator in Python",
    "proj1.desc": "Development of a geometallurgical simulator in Python to model separation units (gravity, magnetic, classification) and assemble them into complete processing circuits. The tool links material characteristics (size distribution, grade by fraction, physical properties) to the expected performance of each unit.",
    "proj1.d2": "The simulator computes mass and metal balances, partition and recovery curves, and makes it quick to compare several flowsheet configurations. It provides a basis for sensitivity studies and circuit optimisation ahead of pilot testing.",
    "proj1.b1": "Separation modelling with partition curves and performance models",
    "proj1.b2": "Building and simulating processing circuits (flowsheets) with recirculation",
    "proj1.b3": "Mass / metal balances and KPI calculation (grade, recovery, yield)",
    "proj1.b4": "Python – NumPy, pandas, Matplotlib",
    "proj1.fig1": "Simulated circuit diagram (flowsheet)",
    "proj1.fig2": "Recovery / partition curves from the simulator",

    "proj2.title": "Digital twin of a WEEE sorting plant (MATLAB/Simulink)",
    "proj2.desc": "Dynamic modelling of a waste electrical and electronic equipment (WEEE) sorting plant in MATLAB/Simulink. The digital twin reproduces the treatment chain (dismantling, shredding, physical separation, sorting) and tracks material and component flows through the different units.",
    "proj2.d2": "The tool is used to test operating scenarios (variation of incoming flows, separator settings, bottlenecks) and to estimate recovery rates of the recoverable fractions: ferrous metals, non-ferrous metals, plastics and printed circuit boards.",
    "proj2.b1": "Flow and sorting unit modelling in Simulink",
    "proj2.b2": "Operating scenarios and bottleneck analysis",
    "proj2.b3": "Recovery rate estimation by fraction",
    "proj2.b4": "MATLAB / Simulink",
    "proj2.fig1": "Block diagram of the digital twin",
    "proj2.fig2": "Simulation results (flows, recovery rates)",

    "proj3.title": "Optimisation of an andalusite processing route (GeoRessources)",
    "proj3.desc": "Project carried out at the GeoRessources laboratory (Nancy) on the optimisation of an andalusite processing route. The study combined material characterisation and separation tests to improve concentrate quality and andalusite recovery.",
    "proj3.d2": "The work focused on identifying the influential process parameters, running comparative tests and interpreting the results through mass balances, with a view to optimising the flowsheet.",
    "proj3.b1": "Mineralogical and particle size characterisation of the feed",
    "proj3.b2": "Separation tests and parametric study",
    "proj3.b3": "Mass balances and performance analysis (grade / recovery)",
    "proj3.b4": "Data processing and visualisation of results",
    "proj3.fig1": "Metallurgical test results",
    "proj3.fig2": "Grade – recovery curve",

    "results.title": "Results & visualisations",
    "results.intro": "Slots reserved for my charts, recovery curves, GIS maps and metallurgical test results.",
    "results.r1": "Charts",
    "results.r2": "Recovery curves",
    "results.r3": "GIS maps",
    "results.r4": "Metallurgical test results",

    /* Gallery */
    "gallery.label": "Photo gallery",
    "gallery.title": "In pictures",
    "gallery.intro": "Laboratory, metallurgical testing, characterisation, fieldwork and scientific results.",
    "gallery.f_all": "All",
    "gallery.f_lab": "Laboratory",
    "gallery.f_tests": "Metallurgical tests",
    "gallery.f_charac": "Characterisation",
    "gallery.f_field": "Field / waste",
    "gallery.f_results": "Scientific results",
    "gallery.c1": "Sample preparation in the laboratory",
    "gallery.c2": "Wet sieving and pulp splitting",
    "gallery.c3": "Gravity separation test",
    "gallery.c4": "Magnetic separation – test bench",
    "gallery.c5": "Particle size characterisation (laser diffraction)",
    "gallery.c6": "Mineralogical analysis (XRD / SEM)",
    "gallery.c7": "Waste characterisation campaign in the field",
    "gallery.c8": "Sorting and classification of waste streams",
    "gallery.c9": "Recovery curves – test results",
    "gallery.c10": "Thematic GIS map of the results",

    /* Skills */
    "skills.label": "Skills",
    "skills.title": "From material to model",
    "skills.intro": "A complete technical foundation: characterise, prepare, separate, then model and optimise, with the right digital and geomatics tools.",
    "skills.c1_title": "Mineral processing & hydrometallurgy",
    "skills.c1_desc": "Gravity and magnetic concentration, classification, leaching and hydrometallurgical extraction, mass and metal balances, flowsheet design.",
    "skills.c1_t1": "Gravity separation",
    "skills.c1_t2": "Magnetic separation",
    "skills.c1_t3": "Hydrocyclone",
    "skills.c1_t4": "Leaching",
    "skills.c1_t5": "Mass balances",
    "skills.c2_title": "Characterisation",
    "skills.c2_desc": "Particle size, mineralogical and chemical analysis of raw materials, residues and waste, from the deposit to the laboratory.",
    "skills.c2_t1": "Laser diffraction",
    "skills.c2_t5": "Waste characterisation",
    "skills.c3_title": "Material preparation",
    "skills.c3_desc": "Preparation of representative samples and test batches following sampling best practices.",
    "skills.c3_t1": "Crushing / grinding",
    "skills.c3_t2": "Drying",
    "skills.c3_t3": "Quartering",
    "skills.c3_t4": "Wet sieving",
    "skills.c3_t5": "Pulp splitting",
    "skills.c4_title": "Process optimisation & modelling",
    "skills.c4_desc": "Circuit simulation, parametric studies, statistical analysis of tests and digital twin development.",
    "skills.c4_t1": "Circuit simulation",
    "skills.c4_t2": "Partition curves",
    "skills.c4_t3": "Design of experiments",
    "skills.c4_t4": "Digital twin",
    "skills.c5_title": "Digital tools",
    "skills.c5_desc": "Scientific programming, process simulation and statistical analysis.",
    "skills.c6_title": "Geomatics & cartography",
    "skills.c6_desc": "Structuring, spatial analysis and map-based reporting of field data.",
    "skills.c6_t3": "Thematic maps",
    "skills.c6_t4": "Field surveys",

    /* Education */
    "edu.label": "Degrees & education",
    "edu.title": "Engineering education, georesources specialisation",
    "edu1.period": "2024 – 2026",
    "edu1.degree": "Master's in Georesources Engineering",
    "edu1.school": "ENSG Nancy – National School of Geology, Université de Lorraine",
    "edu1.desc": "Georesources engineering programme focused on the characterisation, processing and recovery of primary and secondary mineral resources, with a strong emphasis on geometallurgy, hydrometallurgy and process modelling.",
    "edu1.b1": "Geometallurgy and mineral processing",
    "edu1.b2": "Hydrometallurgy and secondary resource recovery",
    "edu1.b3": "Process modelling and simulation (Python, UsimPac / Bilco)",
    "edu2.period": "2018 – 2023",
    "edu2.degree": "Mining Engineering Degree (Ingénieur des Mines)",
    "edu2.school": "ENSP Bamenda – National Higher Polytechnic School, University of Bamenda",
    "edu2.desc": "Generalist mining engineering programme covering geology, exploration, mining operations, mineral processing and mining project management.",
    "edu2.b1": "Geology and mineral exploration",
    "edu2.b2": "Mining operations and mineral processing",
    "edu2.b3": "Surveying, cartography and GIS",

    /* Contact */
    "contact.label": "Contact",
    "contact.title": "Let's work together",
    "contact.intro": "Hiring in mineral processing, hydrometallurgy, secondary resource recovery or geomatics? Let's talk about your project.",
    "contact.name": "Name",
    "contact.name_ph": "Your name",
    "contact.email": "Email",
    "contact.email_ph": "your@email.com",
    "contact.subject": "Subject",
    "contact.subject_ph": "Subject of your message",
    "contact.message": "Message",
    "contact.message_ph": "Your message…",
    "contact.send": "Send message",
    "contact.side_title": "Find me",
    "contact.side_text": "Reply within 48 h. Open to opportunities in France and abroad.",
    "contact.linkedin": "Professional profile",
    "contact.github": "Simulator & Python projects",
    "contact.email_btn": "Write to me directly",
    "contact.cv": "Download the PDF",

    /* Form messages */
    "form.invalid": "Please fill in all fields with a valid email address.",
    "form.sending": "Sending…",
    "form.ok": "Thank you! Your message has been sent.",
    "form.err": "Something went wrong. You can email me directly.",
    "form.mailto": "Your email client will open with the message pre-filled.",

    /* Footer */
    "footer.text": "Process Engineer · Secondary Raw Materials Recovery"
  }
};

/* ------------------------------------------------------------
   2. GESTION DE LA LANGUE
   ------------------------------------------------------------ */
const LANG_KEY = "ft-site-lang";
let currentLang = "fr";

function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) || translations.fr[key] || "";
}

function applyLanguage(lang) {
  if (!translations[lang]) lang = "fr";
  currentLang = lang;
  const dict = translations[lang];

  // Textes
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  // Placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
  });
  // Attributs content (meta description)
  document.querySelectorAll("[data-i18n-content]").forEach((el) => {
    const key = el.getAttribute("data-i18n-content");
    if (dict[key] !== undefined) el.setAttribute("content", dict[key]);
  });

  document.documentElement.lang = lang;
  document.title = dict["meta.title"];
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.setAttribute("aria-pressed", btn.dataset.lang === lang ? "true" : "false");
  });

  try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* stockage indisponible */ }
}

function detectLanguage() {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved && translations[saved]) return saved;
  } catch (e) { /* ignore */ }
  const nav = (navigator.language || "fr").slice(0, 2).toLowerCase();
  return translations[nav] ? nav : "fr";
}

/* ------------------------------------------------------------
   3. NAVIGATION
   ------------------------------------------------------------ */
function initNavigation() {
  const header = document.getElementById("siteHeader");
  const burger = document.getElementById("burger");
  const nav = document.getElementById("mainNav");
  const toTop = document.getElementById("toTop");
  const links = Array.from(nav.querySelectorAll("a[href^='#']"));
  const sections = links.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);

  // Menu mobile
  burger.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });
  links.forEach((a) => a.addEventListener("click", () => {
    nav.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  }));

  // Ombre de l'en-tête + bouton retour en haut
  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 10);
    toTop.classList.toggle("show", window.scrollY > 600);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // Lien actif selon la section visible
  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id));
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    sections.forEach((s) => spy.observe(s));
  }
}

/* ------------------------------------------------------------
   4. ANIMATIONS D'APPARITION
   ------------------------------------------------------------ */
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("visible"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach((el) => io.observe(el));
}

/* ------------------------------------------------------------
   5. IMAGES DE REMPLACEMENT
   Tant qu'une image n'existe pas dans le dossier images/, un
   visuel gris indiquant le nom de fichier attendu est affiché.
   ------------------------------------------------------------ */
function placeholderFor(img) {
  const file = (img.getAttribute("src") || "image").split("/").pop();
  const label = currentLang === "en" ? "Add image" : "Image à ajouter";
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
       <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
         <stop offset="0" stop-color="#e2e8f0"/><stop offset="1" stop-color="#cbd5e1"/></linearGradient></defs>
       <rect width="800" height="500" fill="url(#g)"/>
       <g fill="none" stroke="#94a3b8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
         <rect x="330" y="170" width="140" height="110" rx="12"/>
         <circle cx="372" cy="205" r="14"/>
         <path d="M340 270 l45 -45 l35 35 l25 -25 l25 35"/>
       </g>
       <text x="400" y="330" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="22" font-weight="600" fill="#475569">${label}</text>
       <text x="400" y="365" text-anchor="middle" font-family="monospace" font-size="18" fill="#64748b">${file}</text>
     </svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

function initImageFallbacks() {
  document.querySelectorAll("img").forEach((img) => {
    if (img.closest(".lightbox")) return;
    const apply = () => {
      if (img.dataset.placeholder) return;
      img.dataset.placeholder = "1";
      img.src = placeholderFor(img);
      const fig = img.closest(".figure-slot");
      if (fig) fig.classList.add("is-placeholder");
    };
    img.addEventListener("error", apply, { once: true });
    // Image déjà tentée avant l'exécution du script
    if (img.complete && img.naturalWidth === 0 && img.getAttribute("src")) apply();
  });
}

/* ------------------------------------------------------------
   6. GALERIE : filtres + visionneuse
   ------------------------------------------------------------ */
function initGallery() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const items = Array.from(document.querySelectorAll(".gallery-item"));

  filterBtns.forEach((btn) => btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const f = btn.dataset.filter;
    items.forEach((it) => it.classList.toggle("hidden", f !== "all" && it.dataset.cat !== f));
  }));

  // Visionneuse
  const lb = document.getElementById("lightbox");
  const lbImg = document.getElementById("lbImg");
  const lbCap = document.getElementById("lbCaption");
  let index = 0;

  const visibleItems = () => items.filter((it) => !it.classList.contains("hidden"));

  const show = (i) => {
    const list = visibleItems();
    if (!list.length) return;
    index = (i + list.length) % list.length;
    const fig = list[index];
    const img = fig.querySelector("img");
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lbCap.textContent = fig.querySelector("figcaption").textContent;
  };
  const open = (fig) => {
    show(visibleItems().indexOf(fig));
    lb.classList.add("open");
    lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };
  const close = () => {
    lb.classList.remove("open");
    lb.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  items.forEach((fig) => fig.addEventListener("click", () => open(fig)));
  document.getElementById("lbClose").addEventListener("click", close);
  document.getElementById("lbPrev").addEventListener("click", () => show(index - 1));
  document.getElementById("lbNext").addEventListener("click", () => show(index + 1));
  lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(index - 1);
    if (e.key === "ArrowRight") show(index + 1);
  });
}

/* ------------------------------------------------------------
   7. FORMULAIRE DE CONTACT
   - Si l'attribut action contient encore YOUR_FORM_ID : repli
     vers un lien mailto (ouvre la messagerie de l'utilisateur).
   - Sinon : envoi AJAX vers Formspree.
   ------------------------------------------------------------ */
function initContactForm() {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  if (!form) return;

  const setStatus = (msg, type) => {
    status.textContent = msg;
    status.className = "form-status" + (type ? " " + type : "");
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const fields = ["name", "email", "subject", "message"].map((id) => document.getElementById(id));
    let valid = true;
    fields.forEach((f) => {
      const ok = f.value.trim() !== "" && (f.type !== "email" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value));
      f.classList.toggle("invalid", !ok);
      if (!ok) valid = false;
    });
    if (!valid) { setStatus(t("form.invalid"), "err"); return; }

    const [name, email, subject, message] = fields.map((f) => f.value.trim());
    const action = form.getAttribute("action") || "";

    // Repli mailto tant que Formspree n'est pas configuré
    if (action.includes("YOUR_FORM_ID")) {
      const mailto = document.querySelector(".contact-link[href^='mailto:']");
      const to = mailto ? mailto.getAttribute("href").replace("mailto:", "") : "";
      const body = `${message}\n\n— ${name} (${email})`;
      window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus(t("form.mailto"), "ok");
      return;
    }

    // Envoi Formspree
    try {
      setStatus(t("form.sending"), "");
      const res = await fetch(action, {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: new FormData(form)
      });
      if (res.ok) { form.reset(); setStatus(t("form.ok"), "ok"); }
      else { setStatus(t("form.err"), "err"); }
    } catch (err) {
      setStatus(t("form.err"), "err");
    }
  });
}

/* ------------------------------------------------------------
   8. INITIALISATION
   ------------------------------------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  applyLanguage(detectLanguage());
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });

  document.getElementById("year").textContent = new Date().getFullYear();

  initNavigation();
  initReveal();
  initImageFallbacks();
  initGallery();
  initContactForm();
});
