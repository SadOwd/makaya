// ⚡ MAKAYA RECHARGE - DONNÉES COMPLÈTES AVEC ANALYSE COÛTS
// Basé sur analyse exhaustive par borne + Tarifs CEET réels
// Sessions: 600/mois (conservateur) au lieu de 1000
// ================================================================

export const rechargeDataComplete = {
  // 📊 STRUCTURE COÛTS PAR BORNE DC 50kW
  coutsBorne: {
    investissement: {
      borneDC50kW: 35000000,
      transformateur: 3500000,
      genieCivil: 5000000,
      raccordementCEET: 2000000,
      installation: 500000,
      signaletique: 300000,
      certification: 200000,
      total: 46500000,
      amortissement: 4650000, // /an sur 10 ans
      coutCapital: 5463750 // WACC 11.75%
    },

    operationnels: {
      variables: {
        electricite: {
          // Pour 600 sessions/mois × 35 kWh = 21,000 kWh/mois = 252,000 kWh/an
          creuses: { kwh: 75600, cout: 74, total: 5594400 }, // 30%
          pleines: { kwh: 138600, cout: 82, total: 11365200 }, // 55%
          pointe: { kwh: 37800, cout: 115, total: 4347000 }, // 15%
          pertes5pct: 1065330,
          totalAvecPertes: 22371930 // 88.78 F/kWh effectif
        },
        transactionsPaiement: 1393200, // 2.7% du CA
        connectivite: 840000,
        total: 24605130
      },

      fixes: {
        maintenance: 5400000,
        loyer: 2400000,
        assurances: 1440000,
        taxes: 360000,
        personnel: 585600,
        marketing: 780000,
        autres: 600000,
        total: 11565600
      },

      capital: {
        amortissement: 4650000,
        coutCapital: 5463750,
        total: 10113750
      }
    },

    totaux: {
      variables: 24605130,
      fixes: 11565600,
      capital: 10113750,
      totalAnnuel: 46284480,
      coutParKwh: 183.65 // 46,284,480 / 252,000 kWh
    }
  },

  // 💰 TARIFICATION OPTIMALE (toutes périodes et segments)
  tarificationComplete: {
    coutRevient: 183.65, // FCFA/kWh (coût complet)
    seuilMinimum: 202, // +10% marge minimale

    // Par type de borne et période
    tarifsParBorne: {
      AC_7_22kW: {
        creuses: { achatCEET: 74, vente: 180, marge: 143.2, economieVsThermique: 35.6 },
        pleines: { achatCEET: 82, vente: 210, marge: 156.1, economieVsThermique: 24.7 },
        pointe: { achatCEET: 115, vente: 260, marge: 126.1, economieVsThermique: 6.5 }
      },
      DC_50kW: {
        creuses: { achatCEET: 74, vente: 200, marge: 170.3, economieVsThermique: 27.9 },
        pleines: { achatCEET: 82, vente: 230, marge: 180.5, economieVsThermique: 17.3 },
        pointe: { achatCEET: 115, vente: 285, marge: 147.8, economieVsThermique: -2.5 }
      },
      DC_150kW: {
        creuses: { achatCEET: 74, vente: 220, marge: 197.3, economieVsThermique: 20.7 },
        pleines: { achatCEET: 82, vente: 250, marge: 204.9, economieVsThermique: 10.1 },
        pointe: { achatCEET: 115, vente: 310, marge: 169.6, economieVsThermique: -11.5 }
      }
    },

    // Par segment client (stratégie prix)
    tarifsParSegment: {
      chauffeursMakayaRide: {
        label: "Chauffeurs Makaya Ride",
        creuses: 160, // Super-préférentiel
        pleines: 190,
        pointe: 240,
        remise: 17.4, // % vs externe
        margeNette: 28.3,
        objectif: "Fidélisation ecosystem + Volume"
      },
      fleetteLLD: {
        label: "Clients LLD Makaya",
        creuses: 145,
        pleines: 175,
        pointe: 220,
        remise: 23.9,
        margeNette: 21.5,
        objectif: "Lock-in clients LLD"
      },
      externes: {
        label: "Clients Externes",
        creuses: 200,
        pleines: 230,
        pointe: 285,
        remise: 0,
        margeNette: 35.4,
        objectif: "Rentabilité maximale"
      },
      reservation: {
        label: "Réservation Anticipée",
        creuses: 220,
        pleines: 255,
        pointe: 315,
        premium: 10,
        margeNette: 41.2,
        objectif: "Premium service + Yield management"
      }
    }
  },

  // 📈 PROJECTIONS MENSUELLES (600 sessions conservateur)
  projectionsMensuelles: {
    hypotheses: {
      sessionsJour: 20,
      joursMois: 30,
      sessionsMois: 600,
      kwhMoyenSession: 35,
      kwhTotalMois: 21000,
      repartitionPeriodes: {
        creuses: { pct: 30, sessions: 180, kwh: 6300 },
        pleines: { pct: 55, sessions: 330, kwh: 11550 },
        pointe: { pct: 15, sessions: 90, kwh: 3150 }
      },
      repartitionBornes: {
        AC: { pct: 45, sessions: 270 },
        DC50: { pct: 40, sessions: 240 },
        DC150: { pct: 15, sessions: 90 }
      }
    },

    revenus: {
      // Mix pondéré tous segments: 70% externes, 20% Ride, 10% LLD
      AC: {
        creuses: { sessions: 81, kwh: 2835, revenu: 550815 }, // Mix 196 F/kWh
        pleines: { sessions: 149, kwh: 5215, revenu: 1097150 }, // Mix 210 F/kWh
        pointe: { sessions: 40, kwh: 1400, revenu: 364000 } // Mix 260 F/kWh
      },
      DC50: {
        creuses: { sessions: 72, kwh: 2520, revenu: 554400 }, // Mix 220 F/kWh
        pleines: { sessions: 132, kwh: 4620, revenu: 1062600 }, // Mix 230 F/kWh
        pointe: { sessions: 36, kwh: 1260, revenu: 359100 } // Mix 285 F/kWh
      },
      DC150: {
        creuses: { sessions: 27, kwh: 945, revenu: 207900 }, // Mix 220 F/kWh
        pleines: { sessions: 49, kwh: 1715, revenu: 428750 }, // Mix 250 F/kWh
        pointe: { sessions: 14, kwh: 490, revenu: 151900 } // Mix 310 F/kWh
      },
      totalMensuel: 4776615,
      totalAnnuel: 57319380
    },

    couts: {
      variables: 2050428, // /mois
      fixes: 963800, // /mois
      capital: 842813, // /mois
      totalMensuel: 3857041,
      totalAnnuel: 46284480
    },

    resultats: {
      beneficeMensuel: 919574,
      beneficeAnnuel: 11034900,
      margeNette: 19.2, // % (conservateur avec 600 sessions)
      margeEBITDA: 31.5,
      seuilRentabilite: 412 // sessions/mois
    }
  },

  // 📊 PROJECTION 5 ANS (1 BORNE)
  projection5ans: [
    {
      annee: 2026,
      tauxOccupation: 60,
      sessionsMois: 600,
      sessionsAnnee: 7200,
      kwhAnnuel: 252000,
      ca: 57319380,
      coutsVariables: 24605130,
      coutsFixes: 11565600,
      ebitda: 21148650,
      margeEBITDA: 36.9,
      resultatNet: 11034900,
      margeNette: 19.2
    },
    {
      annee: 2027,
      tauxOccupation: 75,
      sessionsMois: 750,
      sessionsAnnee: 9000,
      kwhAnnuel: 315000,
      ca: 71649225,
      coutsVariables: 30756413,
      coutsFixes: 11565600,
      ebitda: 29327212,
      margeEBITDA: 40.9,
      resultatNet: 19213462,
      margeNette: 26.8
    },
    {
      annee: 2028,
      tauxOccupation: 85,
      sessionsMois: 850,
      sessionsAnnee: 10200,
      kwhAnnuel: 357000,
      ca: 81235755,
      coutsVariables: 34857668,
      coutsFixes: 11565600,
      ebitda: 34812487,
      margeEBITDA: 42.8,
      resultatNet: 24698737,
      margeNette: 30.4
    },
    {
      annee: 2029,
      tauxOccupation: 90,
      sessionsMois: 900,
      sessionsAnnee: 10800,
      kwhAnnuel: 378000,
      ca: 86091390,
      coutsVariables: 37100552, // +5% inflation
      coutsFixes: 11565600,
      ebitda: 37425238,
      margeEBITDA: 43.5,
      resultatNet: 27311488,
      margeNette: 31.7
    },
    {
      annee: 2030,
      tauxOccupation: 95,
      sessionsMois: 950,
      sessionsAnnee: 11400,
      kwhAnnuel: 399000,
      ca: 90947025,
      coutsVariables: 38955580, // +5% inflation
      coutsFixes: 11565600,
      ebitda: 40425845,
      margeEBITDA: 44.4,
      resultatNet: 30312095,
      margeNette: 33.3
    }
  ],

  // 🎯 SEUILS RENTABILITÉ
  seuilsRentabilite: [
    { tarifMoyen: 180, volumeMois: 48750, sessionsMois: 1393, status: "non-viable" },
    { tarifMoyen: 200, volumeMois: 35200, sessionsMois: 1006, status: "limite" },
    { tarifMoyen: 220, volumeMois: 26800, sessionsMois: 766, status: "viable" },
    { tarifMoyen: 230, volumeMois: 24100, sessionsMois: 689, status: "optimal" },
    { tarifMoyen: 250, volumeMois: 19500, sessionsMois: 557, status: "confortable" }
  ],

  // 📊 DONNÉES GRAPHIQUES STRATÉGIE PRIX
  strategiePrix: {
    // Courbe coûts vs prix
    courbe: [
      { volume: 200, coutUnitaire: 245, prixMin: 270, prixOptimal: 230, margeMin: 9.3, margeOptimale: -6.5 },
      { volume: 400, coutUnitaire: 205, prixMin: 226, prixOptimal: 230, margeMin: 9.8, margeOptimale: 10.9 },
      { volume: 600, coutUnitaire: 183, prixMin: 202, prixOptimal: 230, margeMin: 9.3, margeOptimale: 19.2 },
      { volume: 800, coutUnitaire: 171, prixMin: 188, prixOptimal: 230, margeMin: 9.4, margeOptimale: 25.7 },
      { volume: 1000, coutUnitaire: 163, prixMin: 179, prixOptimal: 230, margeMin: 9.5, margeOptimale: 29.1 }
    ],

    // Segments et positionnement
    segments: [
      { segment: "LLD Fleet", prix: 175, volume: 10, margeNette: 21.5, couleur: "#10b981" },
      { segment: "Ride Drivers", prix: 190, volume: 20, margeNette: 28.3, couleur: "#f97316" },
      { segment: "Externes", prix: 230, volume: 70, margeNette: 35.4, couleur: "#3b82f6" },
      { segment: "Premium", prix: 255, volume: 5, margeNette: 41.2, couleur: "#eab308" }
    ],

    // Comparaison concurrence
    positionnement: [
      { operateur: "Thermique Essence", coutKm: 47.6, label: "Baseline" },
      { operateur: "Thermique Diesel", coutKm: 41.4, label: "Alternative" },
      { operateur: "Makaya Creuses", coutKm: 28.8, label: "Best Deal", economie: 39.5 },
      { operateur: "Makaya Pleines", coutKm: 36.8, label: "Standard", economie: 22.7 },
      { operateur: "Makaya Pointe", coutKm: 45.6, label: "Premium", economie: 4.2 },
      { operateur: "Concurrence", coutKm: 44.8, label: "Marché", economie: 5.9 }
    ]
  },

  // 📉 DONNÉES GRAPHIQUES AMORTISSEMENT
  amortissement: {
    // Plan d'amortissement détaillé
    planAnnuel: [
      {
        annee: 2026,
        investissement: 46500000,
        amortissementAnnuel: 4650000,
        amortissementCumul: 4650000,
        valeurResiduelle: 41850000,
        beneficeNet: 11034900,
        beneficeCumul: 11034900,
        roi: 421.4, // % du capex récupéré
        paybackRestant: 35465100
      },
      {
        annee: 2027,
        investissement: 46500000,
        amortissementAnnuel: 4650000,
        amortissementCumul: 9300000,
        valeurResiduelle: 37200000,
        beneficeNet: 19213462,
        beneficeCumul: 30248362,
        roi: 65.1,
        paybackRestant: 16251638
      },
      {
        annee: 2028,
        investissement: 46500000,
        amortissementAnnuel: 4650000,
        amortissementCumul: 13950000,
        valeurResiduelle: 32550000,
        beneficeNet: 24698737,
        beneficeCumul: 54947099,
        roi: 118.2,
        paybackRestant: 0, // ROI atteint !
        paybackMois: 32
      },
      {
        annee: 2029,
        investissement: 46500000,
        amortissementAnnuel: 4650000,
        amortissementCumul: 18600000,
        valeurResiduelle: 27900000,
        beneficeNet: 27311488,
        beneficeCumul: 82258587,
        roi: 176.9
      },
      {
        annee: 2030,
        investissement: 46500000,
        amortissementAnnuel: 4650000,
        amortissementCumul: 23250000,
        valeurResiduelle: 23250000,
        beneficeNet: 30312095,
        beneficeCumul: 112570682,
        roi: 242.1
      }
    ],

    // Métriques clés
    metriques: {
      investissementTotal: 46500000,
      dureeAmortissement: 10, // ans
      amortissementAnnuel: 4650000,
      beneficeCumul5ans: 112570682,
      roiAnnee: 2.7, // années (32 mois)
      tirAnnuel: 38.5, // % TRI
      vnpAnnee5: 89320450 // VAN actualisée
    }
  }
};
