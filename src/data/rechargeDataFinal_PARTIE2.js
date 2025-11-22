// 🔋 MAKAYA RECHARGE - PARTIE 2/3
// À copier-coller APRÈS la partie 1 (suite de tendancesHoraires)

  // 📊 KPI STRATÉGIQUES
  kpis: {
    financiers: {
      tauxMarge: 48.6,
      revenuParBorne: 11962,
      revenuParSession: 1545,
      revenuParKWh: 49.2,
      coutOperationnel: 2159000,
      beneficeNet: 6463000,
      ROImensuel: 299.3,
      coutParBorne: 44979,
      coutParSession: 242
    },
    operationnels: {
      tauxDisponibilite: 95.8,
      tempsArretMoyen: 1.8,
      tempsReponse: 18,
      satisfactionGlobale: 4.72,
      tauxFidelisation: 84,
      npsScore: 72,
      tauxRenouvellement: 89,
      tempsChargeMoyen: 98
    },
    energie: {
      efficaciteDistribution: 97.1,
      pertesReseau: 2.9,
      facteurCharge: 82.3,
      consommationPeak: 900,
      autonomieReseau: 99.4,
      coutKWhMoyen: 62.5
    },
    environnement: {
      co2EviteJour: 3.4,
      co2EviteMois: 102,
      co2EviteAnnee: 1224,
      equivalentArbres: 1836,
      litresEssenceEvites: 51000,
      kmEvites: 6800000
    }
  },

  // ⚠️ ALERTES SYSTÈME
  alertes: {
    critiques: [
      { type: "MAINTENANCE_URGENTE", station: "ST003", borne: "B009", message: "Borne fast22kW en maintenance", impact: "Réduction capacité 11%", action: "Réparation programmée 22/11", priorite: 1 },
      { type: "MAINTENANCE_URGENTE", station: "ST006", borne: "B017", message: "Borne fast22kW en maintenance", impact: "Réduction capacité 17%", action: "Technicien sur place", priorite: 1 }
    ],
    warnings: [
      { type: "UTILISATION_ELEVEE", station: "ST001", message: "Utilisation >90% heures pointe", recommandation: "Ajouter 2 bornes", impact: "Attente +8min", priorite: 2 },
      { type: "UTILISATION_FAIBLE", station: "ST006", message: "Utilisation 62% seulement", recommandation: "Marketing local", impact: "Perte 35% potentiel", priorite: 2 }
    ],
    infos: [
      { type: "PERFORMANCE_EXCEPTIONNELLE", station: "ST005", message: "Satisfaction 4.92/5 - Record", details: "Meilleure performance réseau", priorite: 3 }
    ]
  },

  // 🔮 PRÉVISIONS 2026
  previsions: {
    scenario_conservateur: { nom: "Croissance Prudente", croissance: 8, revenuM12: 111741120, revenuM24: 120680409, investissementRequis: 45000000, nouvellesStations: 2, nouvellesBornes: 12, ROI: 4.2, risque: "faible" },
    scenario_realiste: { nom: "Croissance Standard", croissance: 15, revenuM12: 118983600, revenuM24: 136831140, investissementRequis: 78000000, nouvellesStations: 3, nouvellesBornes: 24, ROI: 3.6, risque: "modéré" },
    scenario_optimiste: { nom: "Expansion Agressive", croissance: 25, revenuM12: 129330000, revenuM24: 161662500, investissementRequis: 125000000, nouvellesStations: 5, nouvellesBornes: 40, ROI: 2.9, risque: "élevé" }
  },

  // 💡 INSIGHTS & RECOMMANDATIONS
  insights: {
    opportunites: [
      { titre: "Heures pointe ultra-rentables", description: "93.3% marge 18h-22h", action: "Maximiser capacité pointe", impact: "+12% revenus", priorite: "Haute", investissement: 56000000, roiMois: 18 },
      { titre: "Station Aéroport surperformance", description: "91% utilisation, 4.85/5", action: "Ajouter 3 bornes ultra", impact: "+18M/mois", priorite: "Haute", investissement: 84000000, roiMois: 15 },
      { titre: "Ultra-rapides ROI optimal", description: "ROI 4.5 ans, 68% marge", action: "Prioriser 50kW", impact: "+25% efficacité", priorite: "Moyenne", investissement: 28000000, roiMois: 54 },
      { titre: "Premium rentable", description: "142k/mois par client", action: "Campagne VIP", impact: "+7M/mois", priorite: "Moyenne", investissement: 5000000, roiMois: 9 }
    ],
    risques: [
      { titre: "2 bornes maintenance", description: "Impact -8% capacité", action: "Réparation 48h", impact: "580k/semaine", priorite: "Critique", delai: "2 jours" },
      { titre: "Adidogomé sous-utilisé", description: "62% seulement", action: "Marketing local", impact: "+680k/mois", priorite: "Haute", delai: "1 mois" },
      { titre: "Dépendance pointe", description: "30% revenus sur 4h", action: "Diversifier creuses", impact: "-40% risque", priorite: "Moyenne", delai: "3 mois" }
    ],
    actionsRecommandees: [
      { action: "2 bornes ultra Aéroport", priorite: "Haute", impact: "+12% revenus", investissement: 56000000, delai: "2 mois", roiEstime: 18 },
      { action: "Campagne creuses -30%", priorite: "Moyenne", impact: "+500 sessions/mois", investissement: 3000000, delai: "1 mois", roiEstime: 8 },
      { action: "Partenariats B2B flottes", priorite: "Haute", impact: "+8M/mois", investissement: 2000000, delai: "3 mois", roiEstime: 4 },
      { action: "Fidélité gamification", priorite: "Moyenne", impact: "+15% rétention", investissement: 5000000, delai: "2 mois", roiEstime: 12 }
    ]
  },

  // 📊 COMPARATIF STATIONS
  comparatifStations: {
    meilleurPerformance: { station: "ST001", raisons: ["Emplacement premium", "Clientèle internationale", "Mix optimal"], revenuJour: 94200, tauxUtilisation: 91, satisfaction: 4.85, marge: 86.3 },
    potentielAmelioration: { station: "ST006", raisons: ["Zone sous-exploitée", "Marketing insuffisant"], revenuActuel: 44600, potentielEstime: 68000, ecart: 52, actions: ["Marketing local", "Partenariats quartier"] },
    equilibre: { station: "ST004", raisons: ["Clientèle fidèle", "Coûts maîtrisés", "Prix/service équilibré"], revenuJour: 42600, marge: 84.5, satisfaction: 4.78, roiExcellent: 23.3 }
  },

  // 🎯 OBJECTIFS 2026 TRIMESTRIELS
  objectifs2026: {
    Q1: { stations: 7, bornes: 56, revenusMensuel: 10200000, clientsActifs: 4500, satisfaction: 4.75, co2Evite: 120 },
    Q2: { stations: 8, bornes: 64, revenusMensuel: 11800000, clientsActifs: 5200, satisfaction: 4.78, co2Evite: 145 },
    Q3: { stations: 9, bornes: 72, revenusMensuel: 13500000, clientsActifs: 6000, satisfaction: 4.80, co2Evite: 165 },
    Q4: { stations: 10, bornes: 80, revenusMensuel: 15200000, clientsActifs: 6800, satisfaction: 4.85, co2Evite: 190 }
  },

  // 📱 DONNÉES TEMPS RÉEL
  tempsReel: {
    derniereMAJ: "2025-11-22T14:30:00Z",
    sessionsEnCours: 34,
    bornesOccupees: 34,
    bornesDisponibles: 12,
    revenuJournalierActuel: 287400,
    energieDistribueeActuelle: 5847,
    clientsActifsAujourdhui: 186,
    alertesActives: 2,
    prochaineMaintenance: "2025-11-23T08:00:00Z"
  },

  // 🌍 IMPACT ENVIRONNEMENTAL DÉTAILLÉ
  impactEnvironnemental: {
    co2Evite: { journalier: 3.4, hebdomadaire: 23.8, mensuel: 102, annuel: 1224 },
    equivalences: {
      arbresPlantes: 1836,
      litresEssenceEvites: 51000,
      kmVehiculeThermique: 6800000,
      foyersAlimentes: 124,
      particulesFinesEvitees: 48.5
    },
    energieRenouvelable: {
      partSolaire: 35,
      partReseau: 65,
      objectif2026: 60,
      objectif2028: 85,
      investissementSolaire: 180000000,
      roiSolaire: 6.2
    },
    certification: {
      iso14001: true,
      carbonNeutral: false,
      objectifNeutral: "2027"
    }
  },

  // 📋 ANALYSE MARGES COMPLÈTE
  analyseMarges: {
    parPeriode: {
      heuresCreuses: { marge: 88.9, revenuMensuel: 1284000, coutMensuel: 142380, beneficeMensuel: 1141620, pourcentageRevenu: 14.9 },
      heuresPleines: { marge: 84.6, revenuMensuel: 4278000, coutMensuel: 658770, beneficeMensuel: 3619230, pourcentageRevenu: 49.6 },
      heuresPointe: { marge: 93.3, revenuMensuel: 3060000, coutMensuel: 204000, beneficeMensuel: 2856000, pourcentageRevenu: 35.5 }
    },
    parTypeBorne: {
      slow7kW: { margeGlobale: 51.1, revenuMensuel: 3033600, coutMensuel: 1483741, beneficeMensuel: 1549859, contribution: 35.2 },
      fast22kW: { margeGlobale: 58.0, revenuMensuel: 7020750, coutMensuel: 2948715, beneficeMensuel: 4072035, contribution: 81.5 },
      ultra50kW: { margeGlobale: 68.0, revenuMensuel: 5886000, coutMensuel: 1883520, beneficeMensuel: 4002480, contribution: 69.3 }
    },
    total: {
      revenuMensuel: 8622000,
      coutTotal: 2159000,
      beneficeNet: 6463000,
      margeMoyenne: 48.6,
      objectifMarge: 52.0,
      ecartObjectif: -3.4
    }
  },

  // 📊 ANALYSE PERFORMANCE DÉTAILLÉE
  performanceBornes: {
    slow7kW: {
      revenuTotal: 101120,
      revenuJour: 3371,
      revenuMois: 101120,
      energieDistribuee: 1148,
      nombreSessions: 112,
      sessionMoyenne: 903,
      margeUnitaire: 45,
      margeTotale: 51700,
      margePourcentage: 51.1,
      satisfactionClient: 4.67,
      tauxPanne: 1.2,
      dureeVieMoyenne: 12,
      ROI: 3.2,
      principalesStations: ["ST004", "ST002", "ST006"]
    },
    fast22kW: {
      revenuTotal: 234025,
      revenuJour: 7801,
      revenuMois: 234025,
      energieDistribuee: 3187,
      nombreSessions: 660,
      sessionMoyenne: 355,
      margeUnitaire: 58,
      margeTotale: 135735,
      margePourcentage: 58.0,
      satisfactionClient: 4.73,
      tauxPanne: 2.1,
      dureeVieMoyenne: 10,
      ROI: 3.8,
      principalesStations: ["ST001", "ST002", "ST005"]
    },
    ultra50kW: {
      revenuTotal: 196200,
      revenuJour: 6540,
      revenuMois: 196200,
      energieDistribuee: 3512,
      nombreSessions: 770,
      sessionMoyenne: 255,
      margeUnitaire: 68,
      margeTotale: 133416,
      margePourcentage: 68.0,
      satisfactionClient: 4.81,
      tauxPanne: 3.4,
      dureeVieMoyenne: 8,
      ROI: 4.5,
      principalesStations: ["ST001", "ST003", "ST005"]
    }
  },
