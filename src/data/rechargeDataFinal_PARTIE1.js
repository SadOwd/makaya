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
    clientsActifs: 3847,
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
