// 🔋 MAKAYA RECHARGE - PARTIE 3/3 (FIN)
// À copier-coller APRÈS la partie 2 (suite de performanceBornes)

  // 📈 ANALYSE TENDANCES & SAISONNALITÉ
  tendancesSaisonnalite: {
    mensuelle: {
      janvier: { sessions: 4800, revenus: 7420000, croissance: -5, facteurs: ["Post-fêtes", "Budget serré"] },
      fevrier: { sessions: 5100, revenus: 7890000, croissance: 6, facteurs: ["Reprise économique"] },
      mars: { sessions: 5400, revenus: 8350000, croissance: 6, facteurs: ["Stabilisation"] },
      avril: { sessions: 5200, revenus: 8050000, croissance: -4, facteurs: ["Vacances scolaires"] },
      mai: { sessions: 5600, revenus: 8640000, croissance: 8, facteurs: ["Pic activité business"] },
      juin: { sessions: 5800, revenus: 8950000, croissance: 4, facteurs: ["Fin année fiscale"] },
      juillet: { sessions: 5300, revenus: 8180000, croissance: -9, facteurs: ["Vacances été"] },
      aout: { sessions: 5100, revenus: 7880000, croissance: -4, facteurs: ["Période creuse"] },
      septembre: { sessions: 5900, revenus: 9120000, croissance: 16, facteurs: ["Rentrée forte"] },
      octobre: { sessions: 6200, revenus: 9580000, croissance: 5, facteurs: ["Activité soutenue"] },
      novembre: { sessions: 6000, revenus: 9270000, croissance: -3, facteurs: ["Stabilisation"] },
      decembre: { sessions: 5700, revenus: 8810000, croissance: -5, facteurs: ["Fêtes de fin d'année"] }
    },
    hebdomadaire: {
      lundi: { sessions: 850, utilisation: 79, pic: "8h-9h, 17h-19h" },
      mardi: { sessions: 920, utilisation: 84, pic: "7h-9h, 18h-20h" },
      mercredi: { sessions: 880, utilisation: 82, pic: "8h-10h, 17h-19h" },
      jeudi: { sessions: 940, utilisation: 86, pic: "7h-9h, 18h-20h" },
      vendredi: { sessions: 980, utilisation: 89, pic: "8h-10h, 16h-21h" },
      samedi: { sessions: 720, utilisation: 68, pic: "10h-13h, 18h-20h" },
      dimanche: { sessions: 620, utilisation: 58, pic: "11h-14h, 19h-21h" }
    }
  },

  // 💼 ANALYSE CLIENTÈLE DÉTAILLÉE
  analyseClientele: {
    segmentation: {
      particuliers: { pourcentage: 52, sessionsJour: 97, revenuMoyen: 1380, satisfaction: 4.68, fidelite: 78 },
      professionnels: { pourcentage: 35, sessionsJour: 65, revenuMoyen: 1820, satisfaction: 4.79, fidelite: 88 },
      flottes: { pourcentage: 10, sessionsJour: 19, revenuMoyen: 2140, satisfaction: 4.82, fidelite: 95 },
      touristes: { pourcentage: 3, sessionsJour: 5, revenuMoyen: 980, satisfaction: 4.58, fidelite: 12 }
    },
    comportement: {
      frequenceVisite: {
        quotidien: 8,
        hebdomadaire: 24,
        bihebdomadaire: 31,
        mensuel: 37
      },
      dureeSession: {
        moins30min: 42,
        de30a60min: 28,
        de1a2h: 18,
        plus2h: 12
      },
      preferencesPaiement: {
        carte: 58,
        mobile: 35,
        abonnement: 7
      }
    }
  },

  // 🔧 MAINTENANCE & FIABILITÉ
  maintenance: {
    planification: {
      preventive: {
        frequence: "Mensuelle",
        coutMensuel: 180000,
        dureeIntervention: 4,
        impactDisponibilite: 2.1
      },
      corrective: {
        frequenceMoyenne: 2.3,
        coutMoyen: 420000,
        tempsReponse: 18,
        tempsReparation: 6.5
      }
    },
    fiabilite: {
      slow7kW: { tauxPanne: 1.2, mtbf: 8760, mttr: 4 },
      fast22kW: { tauxPanne: 2.1, mtbf: 4380, mttr: 6 },
      ultra50kW: { tauxPanne: 3.4, mtbf: 2920, mttr: 8 }
    },
    stock: {
      pieces: [
        { nom: "Câbles Type 2", quantite: 12, seuil: 5, valeur: 450000 },
        { nom: "Connecteurs CCS", quantite: 8, seuil: 3, valeur: 680000 },
        { nom: "Cartes électroniques", quantite: 6, seuil: 2, valeur: 1200000 }
      ]
    }
  },

  // 🎓 FORMATION & COMPÉTENCES
  equipes: {
    techniciens: {
      nombre: 8,
      certifications: ["IRVE Niveau 2", "Sécurité électrique", "Diagnostic avancé"],
      tempsReponse: 18,
      tauxResolution: 94
    },
    support: {
      nombre: 4,
      disponibilite: "24/7",
      langues: ["Français", "Anglais", "Ewe"],
      satisfactionClient: 4.68
    },
    management: {
      nombre: 2,
      experience: "7 ans moyenne",
      kpisPrincipaux: ["Disponibilité", "Satisfaction", "ROI"]
    }
  },

  // 🌐 EXPANSION GÉOGRAPHIQUE
  expansionPlan: {
    phase1_2026: {
      villes: ["Kara", "Sokodé"],
      stations: 3,
      bornes: 18,
      investissement: 180000000,
      revenuEstime: 4200000
    },
    phase2_2027: {
      villes: ["Atakpamé", "Dapaong"],
      stations: 4,
      bornes: 24,
      investissement: 240000000,
      revenuEstime: 6800000
    },
    international_2028: {
      pays: ["Bénin", "Ghana"],
      stations: 8,
      bornes: 48,
      investissement: 480000000,
      revenuEstime: 18500000
    }
  },

  // 📱 TECHNOLOGIES & INNOVATION
  innovation: {
    enCours: [
      { projet: "App mobile V2", budget: 12000000, avancement: 65, datelivraison: "Q1 2026" },
      { projet: "IA prédiction demande", budget: 8000000, avancement: 40, datelivraison: "Q2 2026" },
      { projet: "Blockchain paiements", budget: 15000000, avancement: 25, datelivraison: "Q3 2026" }
    ],
    pipeline: [
      { projet: "Bornes 150kW", budget: 45000000, etude: "Faisabilité", lancement: "Q4 2026" },
      { projet: "Solar carports", budget: 120000000, etude: "Avant-projet", lancement: "Q1 2027" },
      { projet: "Battery swapping", budget: 280000000, etude: "R&D", lancement: "Q3 2027" }
    ]
  },

  // 🤝 PARTENARIATS & ÉCOSYSTÈME
  partenariats: {
    constructeurs: [
      { nom: "Tesla", type: "Réseau Supercharger", statut: "Négociation" },
      { nom: "Renault", type: "Flotte électrique", statut: "Actif", clients: 45 },
      { nom: "BYD", type: "Distribution véhicules", statut: "Actif", ventes: 128 }
    ],
    energie: [
      { nom: "CEET", type: "Fourniture électricité", tarif: "Préférentiel -8%" },
      { nom: "Solar Togo", type: "Panneaux solaires", puissance: "250kW" }
    ],
    financiers: [
      { nom: "Ecobank", type: "Financement croissance", montant: 500000000 },
      { nom: "BOA", type: "Solutions paiement", commission: 1.5 }
    ],
    institutionnels: [
      { nom: "Ministère Environnement", type: "Subventions vertes", montant: 85000000 },
      { nom: "Union Européenne", type: "Fonds développement", montant: 240000000 }
    ]
  },

  // 📚 CONFORMITÉ & CERTIFICATIONS
  conformite: {
    normes: [
      { norme: "IEC 61851", statut: "Conforme", auditDate: "2025-09-15" },
      { norme: "ISO 15118", statut: "Conforme", auditDate: "2025-08-22" },
      { norme: "OCPP 2.0", statut: "Implémenté", version: "2.0.1" }
    ],
    certifications: [
      { cert: "ISO 9001", validite: "2027-12-31", organisme: "Bureau Veritas" },
      { cert: "ISO 14001", validite: "2027-06-30", organisme: "SGS" },
      { cert: "OHSAS 18001", validite: "2026-12-31", organisme: "TÜV" }
    ],
    audits: {
      dernierAudit: "2025-10-18",
      prochainAudit: "2026-04-15",
      nonConformites: 0,
      recommandations: 3
    }
  },

  // 🎯 ROADMAP STRATÉGIQUE 2026-2028
  roadmapStrategique: {
    2026: {
      Q1: ["Lancer 2 stations Kara/Sokodé", "App mobile V2", "1000 abonnés PRO"],
      Q2: ["Déployer IA prédiction", "Certification ISO 27001", "Partenariat Tesla"],
      Q3: ["3 stations supplémentaires", "Blockchain paiements", "2M sessions/an"],
      Q4: ["10 stations total", "Leader Togo 45%", "100M revenus annuels"]
    },
    2027: {
      expansion: "Bénin + Ghana",
      objectif: "25 stations, 200 bornes",
      revenu: "250M FCFA/an",
      partMarche: "Regional leader 35%"
    },
    2028: {
      consolidation: "Réseau Afrique Ouest",
      objectif: "50 stations, 400 bornes",
      revenu: "500M FCFA/an",
      partMarche: "Top 3 régional"
    }
  },

  // 📖 MÉTADONNÉES & VERSIONING
  metadata: {
    version: "2.0.0",
    derniereMAJ: "2025-11-22T14:30:00Z",
    auteur: "Makaya E-Mobility",
    statut: "Production",
    environnement: "App React",
    documentation: "README.md",
    licence: "Propriétaire",
    contact: "data@makaya-emobility.tg"
  }
};

// Export par défaut
export default rechargeDataFinal;
