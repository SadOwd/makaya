// ⚡ MAKAYA RECHARGE - DONNÉES RÉSEAU BORNES
// ============================================

export const rechargeData = {
  // Métriques globales réseau
  networkMetrics: {
    totalStations: 6,
    totalBornes: 42,
    bornesActives: 38,
    bornesHorsService: 2,
    kwhDistribuesAujourdhui: 1850,
    kwhDistribuesMois: 45600,
    tauxUtilisationMoyen: 38,
    revenusAujourdhui: 277500, // FCFA
    revenusMois: 20840000, // FCFA
    sessionsAujourdhui: 124,
    sessionsMois: 2840
  },

  // Stations de recharge
  stations: [
    {
      id: 1,
      name: "Station Aéroport",
      location: { lat: 6.1667, lng: 1.2833, address: "Aéroport International Gnassingbé Eyadema" },
      bornes: 7,
      bornesDisponibles: 4,
      bornesOccupees: 3,
      bornesHorsService: 0,
      typesBornes: [
        { type: "AC 7kW", count: 3 },
        { type: "AC 22kW", count: 2 },
        { type: "DC 50kW", count: 2 }
      ],
      utilisation: 42.85,
      kwh24h: 425,
      sessions24h: 32,
      revenus24h: 63750,
      status: "operational",
      heuresPointe: ["06h-09h", "17h-20h"],
      tarifAC: 200, // FCFA/kWh
      tarifDC: 250, // FCFA/kWh
      dateMiseEnService: "2024-08-15",
      capaciteMax: 180, // kW
      parking: "12 places",
      services: ["Wifi", "Toilettes", "Boutique", "Sécurité 24/7"]
    },
    {
      id: 2,
      name: "Station Centre-ville",
      location: { lat: 6.1285, lng: 1.2225, address: "Boulevard de la République" },
      bornes: 7,
      bornesDisponibles: 2,
      bornesOccupees: 5,
      bornesHorsService: 0,
      typesBornes: [
        { type: "AC 7kW", count: 5 },
        { type: "DC 50kW", count: 2 }
      ],
      utilisation: 72,
      kwh24h: 380,
      sessions24h: 28,
      revenus24h: 57000,
      status: "operational",
      heuresPointe: ["08h-10h", "12h-14h", "18h-21h"],
      tarifAC: 200,
      tarifDC: 250,
      dateMiseEnService: "2024-09-01",
      capaciteMax: 124, // kW
      parking: "15 places",
      services: ["Wifi", "Café", "Sécurité"]
    },
    {
      id: 3,
      name: "Station Tokoin",
      location: { lat: 6.1394, lng: 1.2156, address: "Quartier Tokoin, Route de Kpalimé" },
      bornes: 4,
      bornesDisponibles: 3,
      bornesOccupees: 1,
      bornesHorsService: 0,
      typesBornes: [
        { type: "AC 7kW", count: 2 },
        { type: "AC 22kW", count: 2 }
      ],
      utilisation: 35,
      kwh24h: 285,
      sessions24h: 22,
      revenus24h: 42750,
      status: "operational",
      heuresPointe: ["07h-09h", "17h-19h"],
      tarifAC: 200,
      tarifDC: 250,
      dateMiseEnService: "2024-10-10",
      capaciteMax: 66, // kW
      parking: "12 places",
      services: ["Wifi", "Toilettes"]
    },
    {
      id: 4,
      name: "Station Légbassito",
      location: { lat: 6.1547, lng: 1.2089, address: "Quartier Légbassito" },
      bornes: 4,
      bornesDisponibles: 4,
      bornesOccupees: 0,
      bornesHorsService: 0,
      typesBornes: [
        { type: "AC 7kW", count: 4 }
      ],
      utilisation: 28,
      kwh24h: 215,
      sessions24h: 18,
      revenus24h: 32250,
      status: "operational",
      heuresPointe: ["08h-10h", "18h-20h"],
      tarifAC: 200,
      tarifDC: 250,
      dateMiseEnService: "2024-10-20",
      capaciteMax: 28, // kW
      parking: "8 places",
      services: ["Wifi"]
    },
    {
      id: 5,
      name: "Station Bè",
      location: { lat: 6.1189, lng: 1.2358, address: "Quartier Bè, Avenue Sarakawa" },
      bornes: 3,
      bornesDisponibles: 2,
      bornesOccupees: 0,
      bornesHorsService: 1,
      typesBornes: [
        { type: "AC 7kW", count: 2 },
        { type: "AC 22kW", count: 1 }
      ],
      utilisation: 22,
      kwh24h: 165,
      sessions24h: 14,
      revenus24h: 24750,
      status: "maintenance",
      heuresPointe: ["07h-09h", "17h-19h"],
      tarifAC: 200,
      tarifDC: 250,
      dateMiseEnService: "2024-11-05",
      capaciteMax: 36, // kW
      parking: "6 places",
      services: ["Wifi"],
      maintenance: {
        type: "Borne AC 22kW défaillante",
        debut: "2025-11-18",
        finPrevue: "2025-11-20"
      }
    },
    {
      id: 6,
      name: "Station Adidogomé",
      location: { lat: 6.1456, lng: 1.1978, address: "Quartier Adidogomé" },
      bornes: 3,
      bornesDisponibles: 3,
      bornesOccupees: 0,
      bornesHorsService: 0,
      typesBornes: [
        { type: "AC 7kW", count: 3 }
      ],
      utilisation: 18,
      kwh24h: 145,
      sessions24h: 12,
      revenus24h: 21750,
      status: "operational",
      heuresPointe: ["08h-10h", "18h-20h"],
      tarifAC: 200,
      tarifDC: 250,
      dateMiseEnService: "2024-11-12",
      capaciteMax: 21, // kW
      parking: "6 places",
      services: ["Wifi"]
    }
  ],

  // Sessions de recharge en cours
  activeSessions: [
    {
      id: 1,
      station: "Station Aéroport",
      borne: "AC-22-01",
      vehicle: "TG-123-AB (BYD Seal)",
      debut: "08:15",
      dureeEstimee: 45,
      progression: 67,
      kwhDelivered: 28.5,
      kwhTarget: 42.0,
      cout: 5700
    },
    {
      id: 2,
      station: "Station Centre-ville",
      borne: "DC-50-01",
      vehicle: "TG-456-CD (BYD Dolphin)",
      debut: "08:32",
      dureeEstimee: 25,
      progression: 45,
      kwhDelivered: 15.2,
      kwhTarget: 33.8,
      cout: 3800
    },
    {
      id: 3,
      station: "Station Aéroport",
      borne: "DC-50-02",
      vehicle: "TG-789-EF (BYD Seal)",
      debut: "08:45",
      dureeEstimee: 30,
      progression: 28,
      kwhDelivered: 12.8,
      kwhTarget: 45.6,
      cout: 3200
    }
  ],

  // Tarification par période
  tarifPeriodes: {
    creuses: { heures: "22h-6h", tarifAC: 150, tarifDC: 200, description: "Heures Creuses" },
    pleines: { heures: "6h-18h", tarifAC: 200, tarifDC: 250, description: "Heures Pleines" },
    pointe: { heures: "18h-22h", tarifAC: 250, tarifDC: 300, description: "Heures Pointe" }
  },

  // Historique utilisation horaire (aujourd'hui) avec périodes tarifaires
  hourlyUsage: [
    { hour: "00h", sessions: 2, kwh: 45, revenus: 6750, periode: "Creuses", tarif: 150 },
    { hour: "01h", sessions: 1, kwh: 28, revenus: 4200, periode: "Creuses", tarif: 150 },
    { hour: "02h", sessions: 0, kwh: 0, revenus: 0, periode: "Creuses", tarif: 150 },
    { hour: "03h", sessions: 1, kwh: 32, revenus: 4800, periode: "Creuses", tarif: 150 },
    { hour: "04h", sessions: 2, kwh: 58, revenus: 8700, periode: "Creuses", tarif: 150 },
    { hour: "05h", sessions: 5, kwh: 125, revenus: 18750, periode: "Creuses", tarif: 150 },
    { hour: "06h", sessions: 8, kwh: 185, revenus: 37000, periode: "Pleines", tarif: 200 },
    { hour: "07h", sessions: 12, kwh: 245, revenus: 49000, periode: "Pleines", tarif: 200 },
    { hour: "08h", sessions: 15, kwh: 298, revenus: 59600, periode: "Pleines", tarif: 200 },
    { hour: "09h", sessions: 10, kwh: 215, revenus: 43000, periode: "Pleines", tarif: 200 },
    { hour: "10h", sessions: 8, kwh: 178, revenus: 35600, periode: "Pleines", tarif: 200 },
    { hour: "11h", sessions: 7, kwh: 165, revenus: 33000, periode: "Pleines", tarif: 200 },
    { hour: "12h", sessions: 9, kwh: 195, revenus: 39000, periode: "Pleines", tarif: 200 },
    { hour: "13h", sessions: 6, kwh: 142, revenus: 28400, periode: "Pleines", tarif: 200 },
    { hour: "14h", sessions: 5, kwh: 118, revenus: 23600, periode: "Pleines", tarif: 200 },
    { hour: "15h", sessions: 7, kwh: 158, revenus: 31600, periode: "Pleines", tarif: 200 },
    { hour: "16h", sessions: 9, kwh: 205, revenus: 41000, periode: "Pleines", tarif: 200 },
    { hour: "17h", sessions: 14, kwh: 285, revenus: 57000, periode: "Pleines", tarif: 200 },
    { hour: "18h", sessions: 16, kwh: 325, revenus: 81250, periode: "Pointe", tarif: 250 },
    { hour: "19h", sessions: 12, kwh: 245, revenus: 61250, periode: "Pointe", tarif: 250 },
    { hour: "20h", sessions: 8, kwh: 175, revenus: 43750, periode: "Pointe", tarif: 250 },
    { hour: "21h", sessions: 6, kwh: 135, revenus: 33750, periode: "Pointe", tarif: 250 },
    { hour: "22h", sessions: 4, kwh: 95, revenus: 14250, periode: "Creuses", tarif: 150 },
    { hour: "23h", sessions: 3, kwh: 68, revenus: 10200, periode: "Creuses", tarif: 150 }
  ],

  // Évolution mensuelle
  monthlyTrends: [
    { month: "Jan", kwh: 38500, revenus: 5775000, sessions: 2450 },
    { month: "Fév", kwh: 41200, revenus: 6180000, sessions: 2620 },
    { month: "Mar", kwh: 43800, revenus: 6570000, sessions: 2780 },
    { month: "Avr", kwh: 42100, revenus: 6315000, sessions: 2680 },
    { month: "Mai", kwh: 44900, revenus: 6735000, sessions: 2850 },
    { month: "Jun", kwh: 43200, revenus: 6480000, sessions: 2740 },
    { month: "Jul", kwh: 46800, revenus: 7020000, sessions: 2970 },
    { month: "Aoû", kwh: 45200, revenus: 6780000, sessions: 2870 },
    { month: "Sep", kwh: 47500, revenus: 7125000, sessions: 3020 },
    { month: "Oct", kwh: 48900, revenus: 7335000, sessions: 3100 },
    { month: "Nov", kwh: 45600, revenus: 6840000, sessions: 2840 }
  ],

  // Planning expansion
  expansionPlan: [
    {
      phase: "Q4 2025",
      stations: [
        { name: "Station Kara", location: "Ville de Kara", bornes: 4, types: ["AC 7kW x2", "DC 50kW x2"], budget: 45000000, status: "Planifié" },
        { name: "Station Sokodé", location: "Ville de Sokodé", bornes: 4, types: ["AC 7kW x2", "AC 22kW x2"], budget: 38000000, status: "Planifié" }
      ]
    },
    {
      phase: "Q1 2026",
      stations: [
        { name: "Station Atakpamé", location: "Ville d'Atakpamé", bornes: 3, types: ["AC 7kW x3"], budget: 28000000, status: "Étude" },
        { name: "Extension Aéroport", location: "Aéroport Lomé", bornes: 4, types: ["DC 50kW x2", "DC 150kW x2"], budget: 65000000, status: "Étude" }
      ]
    },
    {
      phase: "Q2 2026",
      stations: [
        { name: "Station Tsévié", location: "Ville de Tsévié", bornes: 3, types: ["AC 7kW x3"], budget: 25000000, status: "Prospection" },
        { name: "Station Aného", location: "Ville d'Aného", bornes: 3, types: ["AC 7kW x2", "AC 22kW x1"], budget: 30000000, status: "Prospection" }
      ]
    },
    {
      phase: "Q3 2026",
      stations: [
        { name: "Extension Centre-ville", location: "Lomé Centre", bornes: 4, types: ["AC 22kW x2", "DC 50kW x2"], budget: 52000000, status: "Prospection" },
        { name: "Station Kpalimé", location: "Ville de Kpalimé", bornes: 3, types: ["AC 7kW x3"], budget: 28000000, status: "Prospection" }
      ]
    }
  ],

  // 💰 TARIFICATION DÉTAILLÉE
  tarification: {
    coutElectricite: {
      creuses: 80, // FCFA/kWh acheté
      pleines: 95,
      pointe: 110
    },
    tarifVente: {
      AC_7kW: { creuses: 150, pleines: 200, pointe: 250 },
      AC_22kW: { creuses: 150, pleines: 200, pointe: 250 },
      DC_50kW: { creuses: 200, pleines: 250, pointe: 300 },
      DC_150kW: { creuses: 250, pleines: 300, pointe: 350 }
    },
    marges: {
      AC_creuses: { achat: 80, vente: 150, marge: 70, margePercent: 87.5 },
      AC_pleines: { achat: 95, vente: 200, marge: 105, margePercent: 110.5 },
      AC_pointe: { achat: 110, vente: 250, marge: 140, margePercent: 127.3 },
      DC_50_creuses: { achat: 80, vente: 200, marge: 120, margePercent: 150 },
      DC_50_pleines: { achat: 95, vente: 250, marge: 155, margePercent: 163.2 },
      DC_50_pointe: { achat: 110, vente: 300, marge: 190, margePercent: 172.7 },
      DC_150_creuses: { achat: 80, vente: 250, marge: 170, margePercent: 212.5 },
      DC_150_pleines: { achat: 95, vente: 300, marge: 205, margePercent: 215.8 },
      DC_150_pointe: { achat: 110, vente: 350, marge: 240, margePercent: 218.2 }
    },
    exemples: [
      {
        scenario: "Recharge AC 7kW - 30 kWh en heures creuses",
        periode: "Creuses (22h-6h)",
        kwh: 30,
        coutAchat: 2400,
        tarifClient: 4500,
        marge: 2100,
        margePercent: 87.5
      },
      {
        scenario: "Recharge DC 50kW - 45 kWh en heures pleines",
        periode: "Pleines (6h-18h)",
        kwh: 45,
        coutAchat: 4275,
        tarifClient: 11250,
        marge: 6975,
        margePercent: 163.2
      },
      {
        scenario: "Recharge DC 150kW - 60 kWh en heures pointe",
        periode: "Pointe (18h-22h)",
        kwh: 60,
        coutAchat: 6600,
        tarifClient: 21000,
        marge: 14400,
        margePercent: 218.2
      }
    ],
    coutsMensuels: {
      electricite: 8500000,
      maintenance: 3200000,
      personnel: 1800000,
      assurance: 450000,
      autresFrais: 600000,
      total: 14550000
    },
    revenusMensuels: {
      creuses: 7200000,
      pleines: 13300000,
      pointe: 5000000,
      total: 25500000,
      margeNette: 10950000,
      margeNettePercent: 42.9
    }
  },

  // Types de bornes disponibles
  borneTypes: [
    {
      type: "AC 7kW",
      puissance: 7,
      tempsCharge: "4-6h (vide→plein)",
      coutInstallation: 3500000,
      tarifClient: 200,
      usage: "Charge lente, parking longue durée"
    },
    {
      type: "AC 22kW",
      puissance: 22,
      tempsCharge: "1.5-3h (vide→plein)",
      coutInstallation: 5500000,
      tarifClient: 200,
      usage: "Charge semi-rapide"
    },
    {
      type: "DC 50kW",
      puissance: 50,
      tempsCharge: "30-45min (vide→80%)",
      coutInstallation: 18000000,
      tarifClient: 250,
      usage: "Charge rapide"
    },
    {
      type: "DC 150kW",
      puissance: 150,
      tempsCharge: "15-25min (vide→80%)",
      coutInstallation: 45000000,
      tarifClient: 300,
      usage: "Charge ultra-rapide"
    }
  ],

  // Performance par type de borne
  performanceByType: [
    { type: "AC 7kW", count: 13, utilisation: 32, kwh: 12500, revenus: 2500000 },
    { type: "AC 22kW", count: 7, utilisation: 45, kwh: 18900, revenus: 3780000 },
    { type: "DC 50kW", count: 4, utilisation: 58, kwh: 14200, revenus: 3550000 }
  ]
};
