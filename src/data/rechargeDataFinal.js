// 🔋 MAKAYA RECHARGE - DONNÉES COMPLÈTES FINALES V2.0
// PARTIE 1/3 - À copier-coller dans rechargeDataFinal.js
// Dernière mise à jour: 22 Novembre 2025

export const rechargeDataFinal = {
  // 📊 VUE D'ENSEMBLE GLOBALE
  overview: {
    totalStations: 6,
    totalBornes: 48,
    bornesActives: 46,
    bornesEnMaintenance: 2,
    tauxUtilisation: 82.3,
    revenusJournaliers: 287400,
    revenusHebdo: 2011800,
    revenusMensuel: 8622000,
    revenusAnnuel: 103464000,
    co2Evite: { journalier: 3.4, mensuel: 102, annuel: 1224 },
    clientsActifs: 850
  ,
    sessionsJour: 186,
    energieDistribuee: 5847,
    margeMoyenne: 48.6,
    satisfaction: 4.72,
    croissanceMensuelle: 12.5,
    nouveauxClients: 284
  },

  // ⚡ PÉRIODES TARIFAIRES
  periodesHoraires: {
    heuresCreuses: {
      periode: "22h-6h",
      duree: 8,
      pourcentageSessions: 18,
      tauxUtilisation: 52,
      prixMoyenKWh: 85,
      coutAchatKWh: 45,
      margeUnitaire: 40,
      margePourcentage: 88.9,
      revenuMoyen: 42800,
      revenuMensuel: 1284000,
      energieDistribuee: 1052,
      sessionsJour: 33,
      revenuParSession: 1297,
      clientsMoyens: 28,
      description: "Période optimale avec coûts énergétiques minimums",
      strategie: "Promouvoir abonnements nocturnes -30%",
      potentielCroissance: 35
    },
    heuresPleines: {
      periode: "6h-18h",
      duree: 12,
      pourcentageSessions: 52,
      tauxUtilisation: 86,
      prixMoyenKWh: 120,
      coutAchatKWh: 65,
      margeUnitaire: 55,
      margePourcentage: 84.6,
      revenuMoyen: 142600,
      revenuMensuel: 4278000,
      energieDistribuee: 3042,
      sessionsJour: 97,
      revenuParSession: 1470,
      clientsMoyens: 78,
      description: "Période standard forte demande B2B",
      strategie: "Packages entreprises & flottes",
      potentielCroissance: 18
    },
    heuresPointe: {
      periode: "18h-22h",
      duree: 4,
      pourcentageSessions: 30,
      tauxUtilisation: 98,
      prixMoyenKWh: 145,
      coutAchatKWh: 75,
      margeUnitaire: 70,
      margePourcentage: 93.3,
      revenuMoyen: 102000,
      revenuMensuel: 3060000,
      energieDistribuee: 1753,
      sessionsJour: 56,
      revenuParSession: 1821,
      clientsMoyens: 45,
      description: "Période premium demande maximale",
      strategie: "Réservation prioritaire intelligente",
      potentielCroissance: 8
    }
  },

  // 💰 GRILLE TARIFAIRE PAR TYPE DE BORNE
  tarifsBornes: {
    slow7kW: {
      nom: "Charge Lente 7kW",
      puissance: 7,
      tempsChargeMoyen: 6,
      capaciteBatterie: 42,
      heuresCreuses: { prixKWh: 75, coutAchat: 45, marge: 30, margePct: 66.7, sessionMoyenne: 35700, beneficeSession: 14280, revenuJour: 16800, sessionsJour: 4.7 },
      heuresPleines: { prixKWh: 110, coutAchat: 65, marge: 45, margePct: 69.2, sessionMoyenne: 52800, beneficeSession: 21600, revenuJour: 58400, sessionsJour: 11.0 },
      heuresPointe: { prixKWh: 135, coutAchat: 75, marge: 60, margePct: 80.0, sessionMoyenne: 64800, beneficeSession: 28800, revenuJour: 25920, sessionsJour: 4.0 },
      nombreBornes: 6,
      utilisationMoyenne: 68,
      clienteleCible: "Résidentiel, longue durée",
      roiEstime: 3.2
    },
    fast22kW: {
      nom: "Charge Rapide 22kW",
      puissance: 22,
      tempsChargeMoyen: 2.5,
      capaciteBatterie: 55,
      heuresCreuses: { prixKWh: 85, coutAchat: 45, marge: 40, margePct: 88.9, sessionMoyenne: 46750, beneficeSession: 22000, revenuJour: 14025, sessionsJour: 3.0 },
      heuresPleines: { prixKWh: 125, coutAchat: 65, marge: 60, margePct: 92.3, sessionMoyenne: 68750, beneficeSession: 33000, revenuJour: 137500, sessionsJour: 20.0 },
      heuresPointe: { prixKWh: 150, coutAchat: 75, marge: 75, margePct: 100.0, sessionMoyenne: 82500, beneficeSession: 41250, revenuJour: 82500, sessionsJour: 10.0 },
      nombreBornes: 20,
      utilisationMoyenne: 85,
      clienteleCible: "Commercial, VTC, flottes",
      roiEstime: 3.8
    },
    ultra50kW: {
      nom: "Charge Ultra-Rapide 50kW",
      puissance: 50,
      tempsChargeMoyen: 0.8,
      capaciteBatterie: 40,
      heuresCreuses: { prixKWh: 95, coutAchat: 45, marge: 50, margePct: 111.1, sessionMoyenne: 38000, beneficeSession: 20000, revenuJour: 11400, sessionsJour: 3.0 },
      heuresPleines: { prixKWh: 135, coutAchat: 65, marge: 70, margePct: 107.7, sessionMoyenne: 54000, beneficeSession: 28000, revenuJour: 108000, sessionsJour: 20.0 },
      heuresPointe: { prixKWh: 160, coutAchat: 75, marge: 85, margePct: 113.3, sessionMoyenne: 64000, beneficeSession: 34000, revenuJour: 76800, sessionsJour: 12.0 },
      nombreBornes: 22,
      utilisationMoyenne: 92,
      clienteleCible: "Express, premium",
      roiEstime: 4.5
    }
  },

  // 🏢 STATIONS DÉTAILLÉES
  stations: [
    {
      id: "ST001",
      nom: "Station Aéroport",
      localisation: { zone: "Aéroport International", coordonnees: { lat: 6.1656, lng: 1.2545 }, adresse: "Route Aéroport, Lomé" },
      bornes: [
        { type: "ultra50kW", nombre: 4, statut: "actif", utilisation: 96 },
        { type: "fast22kW", nombre: 3, statut: "actif", utilisation: 89 },
        { type: "slow7kW", nombre: 1, statut: "actif", utilisation: 72 }
      ],
      performance: { sessionsJour: 68, revenuJour: 94200, energieJour: 1247, tauxUtilisation: 91, satisfaction: 4.85 },
      tarificationActive: "Premium Aéroport"
    },
    {
      id: "ST002",
      nom: "Station Centre-Ville",
      localisation: { zone: "Boulevard 13 Janvier", coordonnees: { lat: 6.1372, lng: 1.2123 }, adresse: "Face Hôtel Sarakawa" },
      bornes: [
        { type: "ultra50kW", nombre: 2, statut: "actif", utilisation: 87 },
        { type: "fast22kW", nombre: 4, statut: "actif", utilisation: 92 },
        { type: "slow7kW", nombre: 2, statut: "actif", utilisation: 75 }
      ],
      performance: { sessionsJour: 54, revenuJour: 72800, energieJour: 987, tauxUtilisation: 85, satisfaction: 4.68 },
      tarificationActive: "Standard Urbain"
    },
    {
      id: "ST003",
      nom: "Station Port",
      localisation: { zone: "Zone Portuaire", coordonnees: { lat: 6.1289, lng: 1.2287 }, adresse: "Avenue du Port" },
      bornes: [
        { type: "ultra50kW", nombre: 5, statut: "actif", utilisation: 88 },
        { type: "fast22kW", nombre: 3, statut: "actif", utilisation: 82 },
        { type: "fast22kW", nombre: 1, statut: "maintenance", utilisation: 0 }
      ],
      performance: { sessionsJour: 47, revenuJour: 68400, energieJour: 924, tauxUtilisation: 73, satisfaction: 4.52 },
      tarificationActive: "Pro Logistique"
    },
    {
      id: "ST004",
      nom: "Station Université",
      localisation: { zone: "Campus Universitaire", coordonnees: { lat: 6.1744, lng: 1.2089 }, adresse: "Boulevard de la Kara" },
      bornes: [
        { type: "fast22kW", nombre: 3, statut: "actif", utilisation: 78 },
        { type: "slow7kW", nombre: 3, statut: "actif", utilisation: 71 }
      ],
      performance: { sessionsJour: 38, revenuJour: 42600, energieJour: 687, tauxUtilisation: 75, satisfaction: 4.78 },
      tarificationActive: "Étudiant Campus"
    },
    {
      id: "ST005",
      nom: "Station Hôtel 2 Février",
      localisation: { zone: "Quartier Administratif", coordonnees: { lat: 6.1313, lng: 1.2198 }, adresse: "Avenue de la Libération" },
      bornes: [
        { type: "ultra50kW", nombre: 3, statut: "actif", utilisation: 94 },
        { type: "fast22kW", nombre: 2, statut: "actif", utilisation: 86 },
        { type: "slow7kW", nombre: 1, statut: "actif", utilisation: 68 }
      ],
      performance: { sessionsJour: 42, revenuJour: 64800, energieJour: 854, tauxUtilisation: 83, satisfaction: 4.92 },
      tarificationActive: "Premium Hospitalité"
    },
    {
      id: "ST006",
      nom: "Station Adidogomé",
      localisation: { zone: "Carrefour Adidogomé", coordonnees: { lat: 6.1498, lng: 1.1956 }, adresse: "Route N1" },
      bornes: [
        { type: "ultra50kW", nombre: 2, statut: "actif", utilisation: 84 },
        { type: "fast22kW", nombre: 2, statut: "actif", utilisation: 69 },
        { type: "fast22kW", nombre: 1, statut: "maintenance", utilisation: 0 },
        { type: "slow7kW", nombre: 1, statut: "actif", utilisation: 63 }
      ],
      performance: { sessionsJour: 32, revenuJour: 44600, energieJour: 648, tauxUtilisation: 62, satisfaction: 4.48 },
      tarificationActive: "Standard Résidentiel"
    }
  ],

  // 💳 FORMULES ABONNEMENT
  abonnements: [
    { id: "ABO01", nom: "FLEX - Pay As You Go", type: "sans_abonnement", fraisMensuel: 0, reduction: 0, avantages: ["Aucun engagement", "Tarifs normaux", "Accès toutes stations"], utilisateurs: 2847, revenuMoyen: 24500, satisfactionMoyenne: 4.65 },
    { id: "ABO02", nom: "SMART - Occasionnel", type: "leger", fraisMensuel: 5000, reduction: 8, avantages: ["8% réduction", "Accès prioritaire heures creuses", "Support standard"], utilisateurs: 654, revenuMoyen: 35600, satisfactionMoyenne: 4.72, economieAnnuelle: 18400 },
    { id: "ABO03", nom: "PRO - Régulier", type: "moyen", fraisMensuel: 12000, reduction: 15, avantages: ["15% réduction", "Accès prioritaire", "1h gratuite/mois", "Support prioritaire"], utilisateurs: 278, revenuMoyen: 68400, satisfactionMoyenne: 4.81, economieAnnuelle: 52800 },
    { id: "ABO04", nom: "PREMIUM - Illimité", type: "intensif", fraisMensuel: 35000, reduction: 25, avantages: ["25% réduction", "Accès VIP", "5h gratuites/mois", "Support 24/7", "Valet charging"], utilisateurs: 68, revenuMoyen: 142800, satisfactionMoyenne: 4.94, economieAnnuelle: 156000 }
  ],

  // 📈 TENDANCES HORAIRES COMPLÈTES (24h)
  tendancesHoraires: [
    { heure: "00h", sessions: 3, revenus: 5400, utilisation: 28, energie: 89, periode: "creuse" },
    { heure: "01h", sessions: 2, revenus: 3200, utilisation: 22, energie: 67, periode: "creuse" },
    { heure: "02h", sessions: 2, revenus: 2800, utilisation: 18, energie: 58, periode: "creuse" },
    { heure: "03h", sessions: 2, revenus: 2600, utilisation: 15, energie: 54, periode: "creuse" },
    { heure: "04h", sessions: 3, revenus: 4800, utilisation: 26, energie: 79, periode: "creuse" },
    { heure: "05h", sessions: 5, revenus: 7200, utilisation: 38, energie: 118, periode: "creuse" },
    { heure: "06h", sessions: 12, revenus: 19800, utilisation: 62, energie: 324, periode: "pleine" },
    { heure: "07h", sessions: 18, revenus: 31400, utilisation: 76, energie: 512, periode: "pleine" },
    { heure: "08h", sessions: 22, revenus: 38600, utilisation: 88, energie: 631, periode: "pleine" },
    { heure: "09h", sessions: 16, revenus: 28200, utilisation: 72, energie: 461, periode: "pleine" },
    { heure: "10h", sessions: 13, revenus: 23400, utilisation: 66, energie: 383, periode: "pleine" },
    { heure: "11h", sessions: 15, revenus: 26800, utilisation: 70, energie: 438, periode: "pleine" },
    { heure: "12h", sessions: 20, revenus: 36200, utilisation: 82, energie: 592, periode: "pleine" },
    { heure: "13h", sessions: 17, revenus: 30400, utilisation: 75, energie: 497, periode: "pleine" },
    { heure: "14h", sessions: 13, revenus: 24200, utilisation: 64, energie: 396, periode: "pleine" },
    { heure: "15h", sessions: 11, revenus: 21400, utilisation: 58, energie: 350, periode: "pleine" },
    { heure: "16h", sessions: 16, revenus: 29600, utilisation: 72, energie: 484, periode: "pleine" },
    { heure: "17h", sessions: 22, revenus: 42800, utilisation: 90, energie: 698, periode: "pleine" },
    { heure: "18h", sessions: 26, revenus: 51400, utilisation: 97, energie: 838, periode: "pointe" },
    { heure: "19h", sessions: 28, revenus: 55200, utilisation: 98, energie: 900, periode: "pointe" },
    { heure: "20h", sessions: 24, revenus: 48600, utilisation: 94, energie: 792, periode: "pointe" },
    { heure: "21h", sessions: 18, revenus: 36400, utilisation: 82, energie: 593, periode: "pointe" },
    { heure: "22h", sessions: 11, revenus: 19200, utilisation: 56, energie: 394, periode: "creuse" },
    { heure: "23h", sessions: 6, revenus: 10200, utilisation: 42, energie: 209, periode: "creuse" }
  ],

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
