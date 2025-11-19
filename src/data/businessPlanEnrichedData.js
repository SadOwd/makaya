// 📊 BUSINESS PLAN GLOBAL - DONNÉES ENRICHIES
// =============================================

export const businessPlanData = {
  // Vue d'ensemble entreprise
  overview: {
    nom: "MAKAYA ENERGIE",
    slogan: "Mobilité Électrique & Durable en Afrique",
    dateCreation: "2024-01-15",
    phase: "Série A - Expansion",
    valuation: 8500000000, // FCFA (≈ 14M USD)
    levee: { cible: 3000000000, actuel: 1200000000, avancement: 40 },
    effectifs: { total: 42, vtc: 18, tech: 12, admin: 8, sav: 4 }
  },

  // KPIs Globaux Temps Réel
  globalMetrics: {
    ca: {
      journalier: 4850000,
      mensuel: 145500000,
      annuel: 1746000000,
      previsionAnnuelle: 2100000000,
      ecart: -16.8 // % vs prévision
    },
    clients: {
      total: 8450,
      actifs: 6200,
      nouveaux30j: 850,
      churn: 2.3 // %
    },
    vehicules: {
      flotte: 6,
      utilisation: 78,
      kmTotal: 285000,
      co2Evite: 847.3 // tonnes/an
    },
    financier: {
      marge: 32,
      ebitda: 465000000,
      cashburn: -85000000, // mensuel
      runway: 14 // mois
    }
  },

  // 🚕 MAKAYA RIDE - Contribution au CA
  ride: {
    ca: {
      journalier: 1850000, // 38% du CA total
      mensuel: 55500000,
      annuel: 666000000,
      prevision: 720000000,
      ecart: -7.5
    },
    operationnel: {
      courses: { jour: 124, mois: 3720, an: 44640 },
      kmParcourus: { jour: 2850, mois: 85500, an: 1026000 },
      chauffeurs: { actifs: 18, disponibles: 18, enPause: 0 },
      vehicules: { actifs: 6, maintenance: 0, horsService: 0 },
      tauxOccupation: 68,
      tempsMoyenCourse: 28,
      revenuMoyenCourse: 14900
    },
    contributions: {
      pourcentageCA: 38.1,
      margeNette: 28,
      coutOperationnel: 39960000, // mensuel
      profitabilite: 15540000 // mensuel
    },
    tendances: {
      croissance30j: 12.5,
      croissance90j: 38.2,
      saisonnalite: "Hausse +18% pendant saison sèche"
    }
  },

  // 🚗 MAKAYA MOBILITY - Contribution au CA
  mobility: {
    ca: {
      journalier: 2150000, // 44% du CA total
      mensuel: 64500000,
      annuel: 774000000,
      prevision: 900000000,
      ecart: -14.0
    },
    ventes: {
      vehiculesVendus: { mois: 3, an: 36, prevision: 48 },
      revenuMoyen: 15000000,
      margeVente: 18,
      stock: { actuel: 8, enCommande: 12, livraison: "Q1 2026" }
    },
    lld: {
      contratsActifs: 42,
      revenuMensuelRecurrent: 42000000,
      dureeContratMoyenne: 36, // mois
      tauxRenouvellement: 78
    },
    sav: {
      interventions: { mois: 85, an: 1020 },
      revenuMensuel: 8500000,
      satisfactionClient: 92,
      delaiMoyenIntervention: 2.5 // jours
    },
    contributions: {
      pourcentageCA: 44.3,
      repartition: { ventes: 55, lld: 35, sav: 10 },
      margeNette: 22,
      profitabilite: 14190000 // mensuel
    },
    tendances: {
      croissance30j: 8.2,
      croissance90j: 24.5,
      pipelineVentes: { q1: 8, q2: 12, q3: 15, q4: 18 }
    }
  },

  // ⚡ MAKAYA RECHARGE - Contribution au CA
  recharge: {
    ca: {
      journalier: 850000, // 18% du CA total
      mensuel: 25500000,
      annuel: 306000000,
      prevision: 480000000,
      ecart: -36.3
    },
    infrastructure: {
      stations: { actives: 6, maintenance: 0, expansion: 8 },
      bornes: { actives: 22, horsService: 2, total: 24 },
      capaciteTotale: 535, // kW
      tauxUtilisation: 38
    },
    operationnel: {
      sessionsJour: 124,
      sessionsMois: 3720,
      kwhDistribuesJour: 1850,
      kwhDistribuesMois: 55500,
      revenuMoyenSession: 6850,
      coutElectricite: 8500000, // mensuel
      margeOperationnelle: 67
    },
    contributions: {
      pourcentageCA: 17.6,
      margeNette: 45,
      coutOperationnel: 14025000, // mensuel
      profitabilite: 11475000 // mensuel
    },
    tarifsPeriodes: {
      creuses: { heures: "22h-6h", tarifAC: 150, tarifDC: 200, part: 28 },
      pleines: { heures: "6h-18h", tarifAC: 200, tarifDC: 250, part: 52 },
      pointe: { heures: "18h-22h", tarifAC: 250, tarifDC: 300, part: 20 }
    },
    tendances: {
      croissance30j: -5.2,
      croissance90j: 15.8,
      expansionPrevue: { q1_2026: 2, q2_2026: 2, q3_2026: 2, q4_2026: 2 }
    }
  },

  // 📊 Répartition Globale CA
  repartitionCA: [
    { domaine: "Makaya Ride", valeur: 666000000, part: 38.1, couleur: "#f97316" },
    { domaine: "Makaya Mobility", valeur: 774000000, part: 44.3, couleur: "#10b981" },
    { domaine: "Makaya Recharge", valeur: 306000000, part: 17.6, couleur: "#eab308" }
  ],

  // 📈 Tendances CA 12 derniers mois
  tendancesCA: [
    { mois: "Déc 2024", ride: 45000000, mobility: 52000000, recharge: 18000000, total: 115000000 },
    { mois: "Jan 2025", ride: 48000000, mobility: 55000000, recharge: 19500000, total: 122500000 },
    { mois: "Fév 2025", ride: 50000000, mobility: 58000000, recharge: 21000000, total: 129000000 },
    { mois: "Mar 2025", ride: 52000000, mobility: 60000000, recharge: 22500000, total: 134500000 },
    { mois: "Avr 2025", ride: 51000000, mobility: 59000000, recharge: 21800000, total: 131800000 },
    { mois: "Mai 2025", ride: 54000000, mobility: 62000000, recharge: 23500000, total: 139500000 },
    { mois: "Jun 2025", ride: 53000000, mobility: 61000000, recharge: 22800000, total: 136800000 },
    { mois: "Jul 2025", ride: 56000000, mobility: 65000000, recharge: 25000000, total: 146000000 },
    { mois: "Aoû 2025", ride: 55000000, mobility: 63000000, recharge: 24200000, total: 142200000 },
    { mois: "Sep 2025", ride: 57000000, mobility: 66000000, recharge: 26000000, total: 149000000 },
    { mois: "Oct 2025", ride: 58000000, mobility: 68000000, recharge: 27000000, total: 153000000 },
    { mois: "Nov 2025", ride: 55500000, mobility: 64500000, recharge: 25500000, total: 145500000 }
  ],

  // 🚨 Système d'Alertes Intelligent
  alertes: {
    critiques: [
      {
        id: 1,
        type: "Objectif CA",
        severite: "critical",
        titre: "Écart CA Recharge -36% vs prévision",
        description: "Le CA Makaya Recharge est 36% en dessous de l'objectif annuel. Expansion stations retardée.",
        impact: { ca: -174000000, marge: -78300000 },
        actions: [
          "Accélérer ouverture 2 nouvelles stations Q1 2026",
          "Campagne marketing bornes rapides",
          "Partenariat entreprises (flottes)"
        ],
        dateDetection: "2025-11-15",
        responsable: "Direction Recharge"
      },
      {
        id: 2,
        type: "Trésorerie",
        severite: "critical",
        titre: "Runway 14 mois - Lever fonds urgent",
        description: "Avec cash-burn actuel (-85M/mois), runway limité à 14 mois. Série A doit être bouclée Q1 2026.",
        impact: { runway: 14, fondsCibles: 3000000000, fondsActuels: 1200000000 },
        actions: [
          "Finaliser pitch investisseurs",
          "Roadshow Série A janvier 2026",
          "Réduction coûts opérationnels -15%"
        ],
        dateDetection: "2025-11-10",
        responsable: "CFO"
      }
    ],
    warnings: [
      {
        id: 3,
        type: "Performance",
        severite: "warning",
        titre: "Taux utilisation bornes 38% - Cible 55%",
        description: "Utilisation réseau recharge sous objectif. Impact rentabilité stations.",
        impact: { manqueGagner: 8500000 },
        actions: [
          "Analyse zones faible trafic",
          "Promotions heures creuses",
          "Communication app clients"
        ],
        dateDetection: "2025-11-12"
      },
      {
        id: 4,
        type: "Croissance",
        severite: "warning",
        titre: "Croissance Mobility +8% vs +15% cible",
        description: "Ralentissement ventes véhicules. Pipeline Q4 fragile.",
        impact: { ventesManquantes: 6 },
        actions: [
          "Offres spéciales fin d'année",
          "Relance leads pipeline",
          "Formation équipe vente"
        ],
        dateDetection: "2025-11-14"
      }
    ],
    infos: [
      {
        id: 5,
        type: "Succès",
        severite: "info",
        titre: "Makaya Ride +12.5% croissance 30j",
        description: "Excellente performance Ride. Objectifs dépassés.",
        actions: ["Capitaliser sur dynamique", "Recruter 2 chauffeurs"],
        dateDetection: "2025-11-16"
      }
    ]
  },

  // 🎯 Scénarios Stratégiques
  scenarios: {
    conservateur: {
      nom: "Scénario Conservateur",
      hypotheses: {
        croissanceCA: 15,
        prixElectricite: "stable",
        concurrence: "forte",
        reglementation: "neutre"
      },
      projections2026: {
        ca: 2010000000,
        ebitda: 522600000,
        parDeMarche: 12,
        vehiculesFlotte: 12
      },
      risques: ["Pression concurrentielle", "Coûts énergie"]
    },
    realiste: {
      nom: "Scénario Réaliste (Base Case)",
      hypotheses: {
        croissanceCA: 25,
        prixElectricite: "+5%",
        concurrence: "modérée",
        reglementation: "favorable"
      },
      projections2026: {
        ca: 2182500000,
        ebitda: 590475000,
        partDeMarche: 18,
        vehiculesFlotte: 18
      },
      probabilite: 65
    },
    optimiste: {
      nom: "Scénario Optimiste",
      hypotheses: {
        croissanceCA: 40,
        prixElectricite: "stable",
        concurrence: "faible",
        reglementation: "très favorable",
        subventions: "gouvernement"
      },
      projections2026: {
        ca: 2444400000,
        ebitda: 733320000,
        partDeMarche: 25,
        vehiculesFlotte: 24
      },
      catalyseurs: ["Interdiction véhicules thermiques 2030", "Subventions EV"]
    }
  },

  // 🗺️ Roadmap Stratégique
  roadmap: {
    q4_2025: {
      periode: "Q4 2025 (Nov-Déc)",
      priorites: [
        { item: "Boucler Série A (1.8Md restants)", status: "en_cours", completion: 40 },
        { item: "Lancer 2 stations recharge (Kara, Sokodé)", status: "planifie", completion: 0 },
        { item: "Recruter 8 chauffeurs Ride", status: "en_cours", completion: 25 },
        { item: "Campagne marketing fin année", status: "planifie", completion: 0 }
      ],
      budget: 450000000,
      kpis: { ca: 300000000, clients: 1200 }
    },
    q1_2026: {
      periode: "Q1 2026 (Jan-Mar)",
      priorites: [
        { item: "Finaliser Série A", status: "planifie", completion: 0 },
        { item: "Étendre flotte +6 véhicules Ride", status: "planifie", completion: 0 },
        { item: "Ouvrir 2 stations (Atakpamé, Extension Aéroport)", status: "planifie", completion: 0 },
        { item: "Lancer service maintenance préventive", status: "planifie", completion: 0 }
      ],
      budget: 850000000,
      kpis: { ca: 500000000, stations: 8 }
    },
    q2_2026: {
      periode: "Q2 2026 (Avr-Jun)",
      priorites: [
        { item: "Expansion nationale (Tsévié, Aného)", status: "planifie", completion: 0 },
        { item: "Partenariats entreprises (flottes B2B)", status: "planifie", completion: 0 },
        { item: "App mobile v2.0 (AI, prédictions)", status: "planifie", completion: 0 }
      ],
      budget: 650000000,
      kpis: { ca: 550000000, clients: 12000 }
    },
    q3_2026: {
      periode: "Q3 2026 (Jul-Sep)",
      priorites: [
        { item: "Étendre réseau (Centre-ville, Kpalimé)", status: "planifie", completion: 0 },
        { item: "Lancer formule BaaS (Battery as a Service)", status: "planifie", completion: 0 },
        { item: "Certifications ISO 14001 (environnement)", status: "planifie", completion: 0 }
      ],
      budget: 700000000,
      kpis: { ca: 600000000, bornes: 40 }
    }
  },

  // ⚠️ Matrice Risques
  risques: {
    critiques: [
      {
        categorie: "Financier",
        risque: "Échec levée Série A",
        probabilite: 25,
        impact: "Très Élevé",
        consequence: "Arrêt expansion, licenciements",
        mitigation: ["Diversifier investisseurs", "Plan B: prêt bancaire", "Réduction coûts"],
        proprietaire: "CFO"
      },
      {
        categorie: "Opérationnel",
        risque: "Panne majeure réseau recharge",
        probabilite: 15,
        impact: "Élevé",
        consequence: "Perte clients, image dégradée",
        mitigation: ["Maintenance préventive++", "Contrats SLA fournisseurs", "Redondance équipements"],
        proprietaire: "CTO"
      }
    ],
    eleves: [
      {
        categorie: "Marché",
        risque: "Arrivée concurrent bien financé",
        probabilite: 40,
        impact: "Élevé",
        consequence: "Baisse parts de marché, guerre prix",
        mitigation: ["Fidélisation clients", "Différenciation service", "Expansion rapide"],
        proprietaire: "CEO"
      },
      {
        categorie: "Réglementaire",
        risque: "Hausse taxes électricité",
        probabilite: 30,
        impact: "Moyen",
        consequence: "Compression marges -8%",
        mitigation: ["Répercussion partielle clients", "Efficacité énergétique", "Lobbying gouvernement"],
        proprietaire: "CFO"
      }
    ],
    moderes: [
      {
        categorie: "Technologique",
        risque: "Obsolescence batteries",
        probabilite: 20,
        impact: "Moyen",
        consequence: "Coûts remplacement inattendus",
        mitigation: ["Veille technologique", "Garanties constructeurs", "Budget R&D"],
        proprietaire: "CTO"
      }
    ]
  },

  // 📤 Options Export Données
  exports: {
    disponibles: [
      { format: "PDF", type: "Rapport Complet", taille: "~15 pages", delai: "instantané" },
      { format: "Excel", type: "Données Financières", taille: "~2 MB", delai: "instantané" },
      { format: "PowerPoint", type: "Pitch Deck Investisseurs", taille: "~25 slides", delai: "instantané" },
      { format: "CSV", type: "Données Brutes KPIs", taille: "~500 KB", delai: "instantané" },
      { format: "JSON", type: "API Export", taille: "~1 MB", delai: "instantané" }
    ],
    dernierExport: { date: "2025-11-18", format: "PDF", utilisateur: "mensah@makaya.tg" }
  }
};
