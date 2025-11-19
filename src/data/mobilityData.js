// 🚗 MAKAYA MOBILITY - DONNÉES VENTE EV + LLD + SAV
// ============================================

export const mobilityData = {
  // Catalogue véhicules électriques à la vente
  vehicles: [
    {
      id: 1,
      brand: "BYD",
      model: "Atto 3",
      category: "SUV Compact",
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=600&fit=crop",
      price: 12500000, // FCFA
      priceUSD: 20800,
      range: 420,
      battery: "60.48 kWh",
      power: "150 kW (204 ch)",
      acceleration: "7.3 s (0-100 km/h)",
      topSpeed: 160,
      seats: 5,
      features: [
        "Écran rotatif 12.8 pouces",
        "Système ADAS complet",
        "Toit panoramique",
        "Sièges cuir premium",
        "Caméra 360°",
        "Chargeur 7 kW intégré"
      ],
      colors: ["Blanc", "Noir", "Gris", "Bleu"],
      availability: "En stock",
      deliveryTime: "2-4 semaines",
      warranty: "6 ans / 150,000 km"
    },
    {
      id: 2,
      brand: "BYD",
      model: "Dolphin",
      category: "Berline Compacte",
      image: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&h=600&fit=crop",
      price: 9800000, // FCFA
      priceUSD: 16300,
      range: 427,
      battery: "44.9 kWh",
      power: "70 kW (95 ch)",
      acceleration: "10.9 s (0-100 km/h)",
      topSpeed: 150,
      seats: 5,
      features: [
        "Écran central 12.8 pouces",
        "Apple CarPlay / Android Auto",
        "Régulateur adaptatif",
        "Capteurs parking",
        "LED full",
        "Coffre 345L"
      ],
      colors: ["Blanc", "Bleu", "Orange", "Gris"],
      availability: "En stock",
      deliveryTime: "1-3 semaines",
      warranty: "6 ans / 150,000 km"
    },
    {
      id: 3,
      brand: "BYD",
      model: "Seal",
      category: "Berline Premium",
      image: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=800&h=600&fit=crop",
      price: 15200000, // FCFA
      priceUSD: 25300,
      range: 570,
      battery: "82.5 kWh",
      power: "230 kW (313 ch)",
      acceleration: "5.9 s (0-100 km/h)",
      topSpeed: 180,
      seats: 5,
      features: [
        "Écran 15.6 pouces rotatif",
        "Système audio Dynaudio 12 HP",
        "Suspension adaptative",
        "Sièges ventilés/chauffants",
        "Conduite autonome Niveau 2",
        "Toit panoramique électrique"
      ],
      colors: ["Blanc", "Noir", "Bleu", "Gris", "Rouge"],
      availability: "En stock",
      deliveryTime: "2-4 semaines",
      warranty: "6 ans / 150,000 km"
    },
    {
      id: 4,
      brand: "BYD",
      model: "Tang",
      category: "SUV 7 places",
      image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop",
      price: 18900000, // FCFA
      priceUSD: 31500,
      range: 505,
      battery: "86.4 kWh",
      power: "380 kW (517 ch)",
      acceleration: "4.4 s (0-100 km/h)",
      topSpeed: 180,
      seats: 7,
      features: [
        "Transmission intégrale",
        "Mode Sport boost",
        "Écran 15.6 pouces HD",
        "3 rangées de sièges",
        "Suspension pneumatique",
        "Chargeur rapide DC 120 kW"
      ],
      colors: ["Blanc", "Noir", "Gris", "Bleu"],
      availability: "Sur commande",
      deliveryTime: "6-8 semaines",
      warranty: "6 ans / 150,000 km"
    },
    {
      id: 5,
      brand: "BYD",
      model: "e6",
      category: "MPV Familial",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop",
      price: 11200000, // FCFA
      priceUSD: 18600,
      range: 420,
      battery: "71.7 kWh",
      power: "120 kW (163 ch)",
      acceleration: "10.5 s (0-100 km/h)",
      topSpeed: 140,
      seats: 5,
      features: [
        "Espace intérieur généreux",
        "Coffre 580L modulable",
        "Climatisation bi-zone",
        "Écran 10.1 pouces",
        "Idéal VTC/Taxi",
        "Faible coût d'entretien"
      ],
      colors: ["Blanc", "Gris", "Bleu"],
      availability: "En stock",
      deliveryTime: "1-2 semaines",
      warranty: "6 ans / 150,000 km"
    },
    {
      id: 6,
      brand: "BYD",
      model: "Song Plus",
      category: "SUV Compact Premium",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop",
      price: 14500000, // FCFA
      priceUSD: 24100,
      range: 505,
      battery: "71.7 kWh",
      power: "160 kW (218 ch)",
      acceleration: "8.5 s (0-100 km/h)",
      topSpeed: 175,
      seats: 5,
      features: [
        "Design Dragon Face",
        "Écran rotatif 12.8 pouces",
        "Toit panoramique ouvrant",
        "Chargeur bidirectionnel V2L",
        "Mode off-road",
        "Coffre 600L"
      ],
      colors: ["Blanc", "Noir", "Gris", "Vert"],
      availability: "En stock",
      deliveryTime: "2-3 semaines",
      warranty: "6 ans / 150,000 km"
    }
  ],

  // Formules Location Longue Durée (LLD)
  lldFormulas: [
    {
      id: 1,
      name: "Premium",
      vehicle: "BYD Seal",
      image: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=800&h=600&fit=crop",
      monthlyPrice: 285000, // FCFA
      duration: "24-60 mois",
      kmIncluded: "3,000 km/mois",
      deposit: 1500000,
      features: [
        "Assurance tous risques incluse",
        "Maintenance préventive incluse",
        "Batterie garantie 100%",
        "Assistance 24/7",
        "Véhicule de remplacement",
        "Borne de recharge offerte",
        "Application de gestion",
        "Carte de recharge réseau"
      ],
      targetCustomers: "Cadres, Entreprises premium",
      advantages: [
        "Aucune immobilisation de capital",
        "Coûts prévisibles",
        "Fiscalité optimisée",
        "Flexibilité durée contrat"
      ]
    },
    {
      id: 2,
      name: "Standard",
      vehicle: "BYD Dolphin",
      image: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&h=600&fit=crop",
      monthlyPrice: 195000, // FCFA
      duration: "24-48 mois",
      kmIncluded: "2,500 km/mois",
      deposit: 1000000,
      features: [
        "Assurance tiers complète",
        "Maintenance incluse",
        "Batterie garantie 8 ans",
        "Assistance 24/7",
        "Carte de recharge",
        "Application mobile",
        "Service client dédié"
      ],
      targetCustomers: "PME, Indépendants",
      advantages: [
        "Prix mensuel attractif",
        "Pas de surprise financière",
        "Économies carburant/entretien",
        "Image verte entreprise"
      ]
    },
    {
      id: 3,
      name: "BaaS (Battery as a Service)",
      vehicle: "BYD Atto 3",
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=600&fit=crop",
      monthlyPrice: 165000, // FCFA
      duration: "36-60 mois",
      kmIncluded: "2,000 km/mois",
      deposit: 500000,
      features: [
        "Location batterie séparée",
        "Prix d'achat réduit (-30%)",
        "Batterie toujours neuve garantie",
        "Échange batterie illimité",
        "Maintenance batterie incluse",
        "Assurance tiers",
        "Recharge réseau Makaya"
      ],
      targetCustomers: "VTC, Flottes, Particuliers",
      advantages: [
        "Coût initial très bas",
        "Pas d'obsolescence batterie",
        "Flexibilité maximale",
        "Revente facilitée"
      ]
    },
    {
      id: 4,
      name: "Flotte Entreprise",
      vehicle: "BYD e6 (x5+)",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop",
      monthlyPrice: 175000, // FCFA/véhicule
      duration: "36-60 mois",
      kmIncluded: "4,000 km/mois",
      deposit: 800000,
      features: [
        "Tarif dégressif volume",
        "Gestion centralisée flotte",
        "Assurance groupe avantageuse",
        "Maintenance sur site",
        "Formation chauffeurs",
        "Reporting CO2 économisé",
        "Branding véhicules possible",
        "Recharge entreprise installée"
      ],
      targetCustomers: "Grandes entreprises, Administrations",
      advantages: [
        "Économies d'échelle",
        "RSE & image verte",
        "Gestion simplifiée",
        "Optimisation fiscale"
      ]
    }
  ],

  // Service Après-Vente (SAV)
  sav: {
    services: [
      {
        id: 1,
        name: "Entretien Préventif",
        icon: "🔧",
        description: "Révisions programmées selon kilométrage",
        price: 45000,
        frequency: "Tous les 20,000 km",
        duration: "2 heures",
        includes: [
          "Contrôle général 50 points",
          "Vérification batterie",
          "Mise à jour logicielle",
          "Freinage et pneumatiques",
          "Climatisation",
          "Diagnostic électronique"
        ]
      },
      {
        id: 2,
        name: "Diagnostic Batterie",
        icon: "🔋",
        description: "Analyse complète santé batterie",
        price: 25000,
        frequency: "Annuel",
        duration: "1 heure",
        includes: [
          "Test capacité réelle",
          "Calibration BMS",
          "Rapport état cellules",
          "Prévisions dégradation",
          "Conseils optimisation"
        ]
      },
      {
        id: 3,
        name: "Mise à Jour OTA",
        icon: "📡",
        description: "Mises à jour logicielles Over-The-Air",
        price: 0,
        frequency: "Selon disponibilité",
        duration: "30 min - 2h",
        includes: [
          "Nouvelles fonctionnalités",
          "Améliorations autonomie",
          "Correctifs bugs",
          "Interface utilisateur",
          "Système de navigation"
        ]
      },
      {
        id: 4,
        name: "Réparation Carrosserie",
        icon: "🎨",
        description: "Réparation dommages extérieurs",
        price: "Sur devis",
        frequency: "À la demande",
        duration: "1-5 jours",
        includes: [
          "Débosselage",
          "Peinture",
          "Pare-brise",
          "Optiques",
          "Plastiques"
        ]
      },
      {
        id: 5,
        name: "Dépannage Mobile",
        icon: "🚑",
        description: "Intervention sur site 24/7",
        price: 35000,
        frequency: "À la demande",
        duration: "Variable",
        includes: [
          "Diagnostic à distance",
          "Intervention sur place",
          "Dépannage électrique",
          "Remorquage si nécessaire",
          "Véhicule de courtoisie"
        ]
      }
    ],

    statistics: {
      avgRepairTime: 2.4, // jours
      satisfactionRate: 92, // %
      vehiclesInService: 12,
      monthlyInterventions: 45,
      preventiveVsCurative: { preventive: 78, curative: 22 } // %
    },

    maintenance: [
      {
        vehicleId: "TG-123-AB",
        model: "BYD Seal",
        entryDate: "2025-11-15",
        expectedDate: "2025-11-18",
        status: "En cours",
        type: "Révision 20k",
        progress: 65
      },
      {
        vehicleId: "TG-456-CD",
        model: "BYD Atto 3",
        entryDate: "2025-11-16",
        expectedDate: "2025-11-17",
        status: "En cours",
        type: "Diagnostic batterie",
        progress: 40
      },
      {
        vehicleId: "TG-789-EF",
        model: "BYD Dolphin",
        entryDate: "2025-11-14",
        expectedDate: "2025-11-16",
        status: "Terminé",
        type: "Mise à jour OTA",
        progress: 100
      }
    ]
  },

  // Métriques globales Mobility
  metrics: {
    vehiclesSold: 128,
    lldContracts: 85,
    totalRevenue: 1650000000, // FCFA
    avgSatisfaction: 4.6,
    deliveryTime: 2.8, // semaines
    testDrivesMonth: 67,
    conversionRate: 42 // %
  },

  // Ventes mensuelles (pour graphiques)
  monthlySales: [
    { month: "Jan", sales: 8, revenue: 98000000 },
    { month: "Fév", sales: 12, revenue: 145000000 },
    { month: "Mar", sales: 15, revenue: 182000000 },
    { month: "Avr", sales: 18, revenue: 215000000 },
    { month: "Mai", sales: 22, revenue: 268000000 },
    { month: "Jun", sales: 19, revenue: 228000000 },
    { month: "Jul", sales: 25, revenue: 305000000 },
    { month: "Aoû", sales: 23, revenue: 285000000 },
    { month: "Sep", sales: 28, revenue: 342000000 },
    { month: "Oct", sales: 31, revenue: 385000000 },
    { month: "Nov", sales: 27, revenue: 325000000 }
  ],

  // Répartition ventes par modèle
  salesByModel: [
    { model: "Atto 3", sales: 35, percentage: 27.3 },
    { model: "Dolphin", sales: 42, percentage: 32.8 },
    { model: "Seal", sales: 28, percentage: 21.9 },
    { model: "e6", sales: 15, percentage: 11.7 },
    { model: "Tang", sales: 5, percentage: 3.9 },
    { model: "Song Plus", sales: 3, percentage: 2.4 }
  ]
};
