// ⚡ MAKAYA RECHARGE - TARIFICATION OPTIMISÉE
// Basée sur tarifs CEET officiels Mai 2025
// ============================================

export const tarifsMakayaRecharge = {
  // 📋 RÉFÉRENCE TARIFS CEET (Moyenne Tension >1000 kVA)
  tarifsAchatCEET: {
    creuses: { periode: "23h-6h", achat: 74 }, // FCFA/kWh
    pleines: { periode: "6h-18h", achat: 82 },
    pointe: { periode: "18h-23h", achat: 115 }
  },

  // 🚗 RÉFÉRENCE COÛTS THERMIQUE
  coutThermique: {
    essence: { prix: 680, conso: 7.0, coutKm: 47.6 }, // L=680F, 7L/100km
    diesel: { prix: 690, conso: 6.0, coutKm: 41.4 }, // L=690F, 6L/100km
    moyenneVTC: 44.5 // FCFA/km
  },

  // ⚡ CONSOMMATION VÉHICULES ÉLECTRIQUES
  consoElectrique: {
    moyenne: 16.0, // kWh/100km
    bydSeal: 15.8,
    bydDolphin: 14.2,
    bydAtto3: 16.5
  },

  // 🎯 OBJECTIF ÉCONOMIES CLIENT
  objectifEconomie: {
    min: 20, // % vs thermique
    max: 25,
    cibleCoutKm: { min: 33.4, max: 35.6 } // FCFA/km
  },

  // 💰 GRILLE TARIFAIRE MAKAYA RECHARGE
  // Tarifs OPTIMISÉS pour rentabilité ET attractivité client
  
  tarifVenteParBorne: {
    // AC 7kW & 22kW (Charge lente/normale)
    AC: {
      creuses: {
        periode: "23h-6h",
        achatCEET: 74,
        tarifVente: 180, // +143% marge
        economieVsThermique: "35.6%", // (180×16)/100 = 28.8 FCFA/km vs 44.5
        description: "Idéal pour charge nocturne, économie maximale"
      },
      pleines: {
        periode: "6h-18h", 
        achatCEET: 82,
        tarifVente: 210, // +156% marge
        economieVsThermique: "24.7%", // (210×16)/100 = 33.6 FCFA/km
        description: "Charge journée, très compétitif"
      },
      pointe: {
        periode: "18h-23h",
        achatCEET: 115,
        tarifVente: 260, // +126% marge
        economieVsThermique: "6.5%", // (260×16)/100 = 41.6 FCFA/km
        description: "Charge rapide soir, léger premium"
      }
    },

    // DC 50kW (Charge rapide)
    DC50: {
      creuses: {
        periode: "23h-6h",
        achatCEET: 74,
        tarifVente: 200, // +170% marge
        economieVsThermique: "27.9%", // (200×16)/100 = 32.0 FCFA/km
        description: "Charge rapide nuit, très rentable"
      },
      pleines: {
        periode: "6h-18h",
        achatCEET: 82,
        tarifVente: 230, // +180% marge
        economieVsThermique: "17.3%", // (230×16)/100 = 36.8 FCFA/km
        description: "Charge rapide journée, bon compromis"
      },
      pointe: {
        periode: "18h-23h",
        achatCEET: 115,
        tarifVente: 285, // +148% marge
        economieVsThermique: "-2.5%", // (285×16)/100 = 45.6 FCFA/km (légèrement plus cher)
        description: "Charge rapide urgente, premium service"
      }
    },

    // DC 150kW (Charge ultra-rapide)
    DC150: {
      creuses: {
        periode: "23h-6h",
        achatCEET: 74,
        tarifVente: 220, // +197% marge
        economieVsThermique: "20.7%", // (220×16)/100 = 35.2 FCFA/km
        description: "Ultra-rapide nuit, meilleur rapport"
      },
      pleines: {
        periode: "6h-18h",
        achatCEET: 82,
        tarifVente: 250, // +205% marge
        economieVsThermique: "10.1%", // (250×16)/100 = 40.0 FCFA/km
        description: "Ultra-rapide journée, service premium"
      },
      pointe: {
        periode: "18h-23h",
        achatCEET: 115,
        tarifVente: 310, // +170% marge
        economieVsThermique: "-11.5%", // (310×16)/100 = 49.6 FCFA/km
        description: "Ultra-rapide express, tarif premium"
      }
    }
  },

  // 📊 EXEMPLES CONCRETS DE RECHARGE
  exemplesRecharge: [
    {
      scenario: "VTC Charge Nuit - BYD Seal 60 kWh",
      typeRecharge: "AC 22kW",
      periode: "Creuses (23h-6h)",
      duree: "3h",
      kwhRecharge: 60,
      achatElectricite: 74 * 60, // 4,440 FCFA
      tarifClient: 180 * 60, // 10,800 FCFA
      marge: 6360, // FCFA
      margePercent: 143,
      autonomieGagnee: "380 km",
      coutKmElec: 28.4, // 10,800 / 380
      coutKmThermique: 47.6,
      economieClient: 19.2, // FCFA/km
      economiePercent: 40.3,
      economieTrajet: 7296 // sur 380 km
    },
    {
      scenario: "VTC Charge Journée - BYD Dolphin 45 kWh",
      typeRecharge: "DC 50kW",
      periode: "Pleines (6h-18h)",
      duree: "40 min",
      kwhRecharge: 45,
      achatElectricite: 82 * 45, // 3,690 FCFA
      tarifClient: 230 * 45, // 10,350 FCFA
      marge: 6660, // FCFA
      margePercent: 180,
      autonomieGagnee: "320 km",
      coutKmElec: 32.3, // 10,350 / 320
      coutKmThermique: 47.6,
      economieClient: 15.3, // FCFA/km
      economiePercent: 32.1,
      economieTrajet: 4896 // sur 320 km
    },
    {
      scenario: "VTC Charge Express Soir - BYD Atto 3 55 kWh",
      typeRecharge: "DC 150kW",
      periode: "Pointe (18h-23h)",
      duree: "20 min",
      kwhRecharge: 55,
      achatElectricite: 115 * 55, // 6,325 FCFA
      tarifClient: 310 * 55, // 17,050 FCFA
      marge: 10725, // FCFA
      margePercent: 170,
      autonomieGagnee: "340 km",
      coutKmElec: 50.1, // 17,050 / 340
      coutKmThermique: 47.6,
      surCoutClient: 2.5, // FCFA/km (légèrement plus cher)
      surCoutPercent: 5.3,
      avantage: "Gain temps (20min vs 3h)", // La rapidité justifie le léger surcoût
      noteClient: "Acceptable pour urgence"
    }
  ],

  // 💵 PROJECTION REVENUS MENSUELS RÉALISTE
  projectionMensuelle: {
    hypotheses: {
      sessionsJour: 120,
      joursMois: 30,
      sessionsMois: 3600,
      repartitionPeriodes: {
        creuses: { part: 35, sessions: 1260 }, // 35% - charges nocturnes
        pleines: { part: 50, sessions: 1800 }, // 50% - journée active
        pointe: { part: 15, sessions: 540 } // 15% - urgences soir
      },
      repartitionBornes: {
        AC: 45, // 45% - charges lentes
        DC50: 40, // 40% - charges rapides
        DC150: 15 // 15% - ultra-rapide premium
      },
      kwhMoyenneSession: 42 // kWh
    },

    detailRevenus: {
      // AC
      AC_creuses: { sessions: 567, kwh: 23814, achat: 1762236, vente: 4286520, marge: 2524284 },
      AC_pleines: { sessions: 810, kwh: 34020, achat: 2789640, vente: 7144200, marge: 4354560 },
      AC_pointe: { sessions: 243, kwh: 10206, achat: 1173690, vente: 2653560, marge: 1479870 },
      
      // DC 50kW
      DC50_creuses: { sessions: 504, kwh: 21168, achat: 1566432, vente: 4233600, marge: 2667168 },
      DC50_pleines: { sessions: 720, kwh: 30240, achat: 2479680, vente: 6955200, marge: 4475520 },
      DC50_pointe: { sessions: 216, kwh: 9072, achat: 1043280, vente: 2585520, marge: 1542240 },
      
      // DC 150kW
      DC150_creuses: { sessions: 189, kwh: 7938, achat: 587412, vente: 1746360, marge: 1158948 },
      DC150_pleines: { sessions: 270, kwh: 11340, achat: 929880, vente: 2835000, marge: 1905120 },
      DC150_pointe: { sessions: 81, kwh: 3402, achat: 391230, vente: 1054620, marge: 663390 },

      totaux: {
        sessionsTotal: 3600,
        kwhTotal: 151200,
        achatTotal: 12723480, // ~12.7M FCFA
        venteTotal: 33494580, // ~33.5M FCFA
        margeTotal: 20771100, // ~20.8M FCFA
        margePercent: 163.2 // %
      }
    },

    coutsFixes: {
      electriciteCEET: 12723480,
      maintenanceBornes: 3500000, // entretien 24 bornes
      personnelTech: 2200000, // 2 techniciens
      assurances: 600000,
      amortissementBornes: 2800000, // sur 5 ans
      autresFrais: 900000,
      totalCouts: 22723480
    },

    resultatNet: {
      revenusTotal: 33494580,
      coutsTotal: 22723480,
      beneficeNet: 10771100, // ~10.8M FCFA/mois
      margeNette: 32.1, // %
      beneficeAnnuel: 129253200 // ~129M FCFA/an
    }
  },

  // 🎯 POSITIONNEMENT CONCURRENTIEL
  positionnement: {
    vs_thermique: {
      economieMinimale: 5.3, // % (heures pointe DC150)
      economieMaximale: 40.3, // % (heures creuses AC)
      economieTypique: 25, // %
      message: "20-25% moins cher en moyenne vs essence/diesel"
    },
    vs_concurrence: {
      tarifMoyenMarche: 280, // FCFA/kWh estimé
      tarifMoyenMakaya: 230, // FCFA/kWh
      avantageCompetitif: "-18%",
      differentiation: "Tarifs transparents + périodes optimisées"
    },
    incitationUsage: {
      heuresCreuses: "Économie maximale 35-40%",
      heuresPleines: "Bon compromis 17-25%",
      heuresPointe: "Service premium express, léger surcoût acceptable"
    }
  },

  // 📈 OBJECTIFS ANNÉE 1
  objectifsAnnee1: {
    installations: {
      stations: 6,
      bornes: 24,
      capaciteTotal: "535 kW"
    },
    performance: {
      tauxUtilisation: 42, // % (conservateur)
      sessionsMois: 3600,
      sessionsAnnee: 43200,
      kwhAnnuel: 1814400, // kWh
      revenusAnnuel: 401934960, // ~402M FCFA
      beneficeNetAnnuel: 129253200, // ~129M FCFA
      margeNette: 32.1 // %
    },
    impactEnvironnemental: {
      co2Evite: 847, // tonnes/an
      equivalentArbres: 42365,
      litresCarburantEvites: 1260000 // litres
    }
  },

  // 🎓 MESSAGES MARKETING
  messagesClients: {
    principal: "Rechargez 20-25% moins cher que l'essence/diesel !",
    creuses: "🌙 Recharge nuit : jusqu'à 40% d'économie !",
    pleines: "☀️ Recharge journée : 17-25% moins cher !",
    pointe: "⚡ Recharge express : service premium rapide",
    vcp: "Économisez jusqu'à 7,300 FCFA par plein de 60 kWh !"
  }
};
