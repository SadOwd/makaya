// 🔋 MAKAYA RECHARGE - DONNÉES OPTIMISÉES V3.0
// Grille tarifaire PRO + Abonnements rentables

export const rechargeDataOptimized = {
  // 📊 VUE D'ENSEMBLE OPTIMISÉE
overview: {
    totalStations: 6,
    totalBornes: 100,
    bornesActives: 98,
    bornesEnMaintenance: 2,
    tauxUtilisation: 85.4,
    revenusJournaliers: 26027,
    revenusMensuel: 780810000, // 26027 * 30
    revenusAnnuels: 9500000000,
    margeNette: 27.9,
    EBITDA: 40.5,
    beneficeNet: 2650000000,
    ROImoyenPortfolio: 2.8,
    clientsActifs: 8547,
    sessionsJour: 456,
    energieDistribuee: 2603,
    satisfaction: 4.8,
    co2Evite: {
      journalier: 5.2,
      mensuel: 156,
      annuel: 1900
    }
  },

  // ⚡ TYPES DE BORNES OPTIMISÉS (Portfolio Pro)
  typesBornes: {
    ac7kW: {
      nom: "AC 7 kW - Usage Privatif",
      puissance: 7,
      emoji: "🏠",
      tempsCharge2080: "4h30",
      capex: 4800000,
      coutParKWh: 363,
      tarifParKWh: 180,
      margeNette: -152,
      roi: null,
      volumeAnnuel: 15000,
      occupation: 60,
      status: "non_viable_public",
      color: "red",
      recommandation: "Flottes captives et domicile uniquement",
      revenusAnnuels: 2700000,
      coutTotal: 5444000,
      deficitAnnuel: -2744000,
      usageCible: "Particuliers (vente directe) + Maintenance",
      avantages: ["Installation simple", "Coût initial faible", "Compatible tout VE"],
      inconvenients: ["Non rentable en public", "Temps charge long", "Occupation faible"]
    },
    
    ac22kW: {
      nom: "AC 22 kW - B2B Léger",
      puissance: 22,
      emoji: "🏢",
      tempsCharge2080: "1h30",
      capex: 14300000,
      coutParKWh: 198,
      tarifParKWh: 210,
      margeNette: 5.7,
      roi: 9.9,
      volumeAnnuel: 120000,
      occupation: 70,
      status: "rentable_marginal",
      color: "yellow",
      recommandation: "Centres commerciaux, hôtels, B2B corporate",
      revenusAnnuels: 25200000,
      coutTotal: 23765000,
      beneficeNet: 1435000,
      EBITDA: 18.2,
      usageCible: "B2B, hôtels, centres commerciaux",
      avantages: ["Rentable sur contrats B2B", "Temps charge acceptable", "CAPEX modéré"],
      inconvenients: ["ROI long (9,9 ans)", "Sensible coût foncier", "Marge faible 5,7%"],
      emplacementsPrioritaires: ["Hôtel 2 Février", "Centre commercial", "Parking entreprise"]
    },
    
    dc50kW: {
      nom: "DC 50 kW - Référence Marché ⭐",
      puissance: 50,
      emoji: "⚡",
      tempsCharge2080: "28 min",
      capex: 52500000,
      coutParKWh: 175,
      tarifParKWh: 235,
      margeNette: 20.3,
      roi: 3.3,
      volumeAnnuel: 357000,
      occupation: 75,
      status: "coeur_reseau",
      color: "blue",
      recommandation: "Type de borne cœur réseau Makaya (70% du parc)",
      revenusAnnuels: 83895000,
      coutTotal: 66814000,
      beneficeNet: 17081000,
      EBITDA: 33.9,
      usageCible: "Tout public, usage mixte optimal",
      avantages: ["Compatible 95% parc VE", "ROI excellent 3,3 ans", "Temps optimal 28min", "Meilleur ratio investissement/volume"],
      inconvenients: ["CAPEX moyen-élevé", "Maintenance régulière"],
      emplacementsPrioritaires: ["Toutes stations stratégiques", "Axes principaux", "Centres urbains"],
      performanceOptimale: true
    },
    
    dc150kW: {
      nom: "DC 150 kW - Champion ROI 🏆",
      puissance: 150,
      emoji: "🚀",
      tempsCharge2080: "12 min",
      capex: 105400000,
      coutParKWh: 186,
      tarifParKWh: 275,
      margeNette: 32.5,
      roi: 1.9,
      volumeAnnuel: 630000,
      occupation: 65,
      status: "champion_rentabilite",
      color: "green",
      recommandation: "Priorité absolue - Meilleur ROI du portfolio (1,9 ans)",
      revenusAnnuels: 173250000,
      coutTotal: 116925000,
      beneficeNet: 56325000,
      EBITDA: 45.7,
      usageCible: "Autoroutes, hubs transit, premium",
      avantages: ["ROI imbattable 1,9 ans", "Marge nette 32,5%", "Charge rapide 12min", "Volume élevé"],
      inconvenients: ["CAPEX important", "Parc compatible 40%"],
      emplacementsPrioritaires: ["Autoroutes nationales", "Hubs transit", "Stations-service premium", "Zones hôtelières affaires"],
      meilleurChoix: true
    },
    
    dc350kW: {
      nom: "DC 350 kW - Flagship Premium 🔥",
      puissance: 350,
      emoji: "💎",
      tempsCharge2080: "8 min",
      capex: 187000000,
      coutParKWh: 221,
      tarifParKWh: 320,
      margeNette: 30.8,
      roi: 2.4,
      volumeAnnuel: 780000,
      occupation: 55,
      status: "premium_strategique",
      color: "purple",
      recommandation: "Image high-tech - Déploiement limité (1-2 bornes max)",
      revenusAnnuels: 249600000,
      coutTotal: 172592000,
      beneficeNet: 77008000,
      EBITDA: 42.1,
      usageCible: "Sites emblématiques, image marque",
      avantages: ["Charge ultra-rapide 8min", "Image innovante", "Différenciation premium"],
      inconvenients: ["CAPEX très élevé", "Parc compatible limité 5%", "Maintenance lourde"],
      emplacementsPrioritaires: ["Aéroport Lomé", "Centre-ville prestige"],
      usageStrategique: "Vitrine technologique + premium"
    }
  },

  // 💳 ABONNEMENTS ULTRA-RENTABLES (Nouvelle Gamme)
  abonnements: [
    {
      id: "START",
      nom: "START - Liberté & Micro-Frais",
      type: "sans_abonnement",
      fraisMensuel: 0,
      fraisSession: 150,
      reduction: 0,
      color: "slate",
      emoji: "🟩",
      avantages: [
        "Aucun engagement",
        "Frais fixes 150 FCFA par session",
        "Tarifs standards",
        "Accès au réseau complet"
      ],
      cible: "Utilisateurs occasionnels",
      arpuAugmentation: 18,
      utilisateurs: 3245,
      revenuMoyen: 28900,
      sessionsParMois: 5.2,
      energieMoyenne: 87,
      satisfactionMoyenne: 4.58,
      logiqueBusiness: "Monétiser les petits utilisateurs via micro-frais invisibles"
    },
    
    {
      id: "ESSENTIAL",
      nom: "ESSENTIAL - Usage Raisonné",
      type: "leger",
      fraisMensuel: 7000,
      reduction: 13,
      color: "blue",
      emoji: "🟦",
      avantages: [
        "13% de réduction",
        "2 sessions prioritaires/mois",
        "1h gratuite fractionnable (3×20min)",
        "Support standard amélioré"
      ],
      heuresGratuites: 1,
      sessionsPrioritaires: 2,
      cible: "Usage faible à moyen",
      arpuAugmentation: 26,
      utilisateurs: 2847,
      revenuMoyen: 45600,
      sessionsParMois: 18.4,
      energieMoyenne: 312,
      satisfactionMoyenne: 4.71,
      economieAnnuelle: 28400,
      logiqueBusiness: "Client paie forfait donc veut rentabiliser - pousse consommation"
    },
    
    {
      id: "PRO_PLUS",
      nom: "PRO+ - Conducteur Intensif",
      type: "professionnel",
      fraisMensuel: 18000,
      reduction: 12,
      color: "orange",
      emoji: "🟧",
      avantages: [
        "12% de réduction illimitée",
        "Priorité illimitée toutes heures",
        "1h30 gratuite/mois",
        "File PRO+ aux stations fréquentées",
        "Rapport mensuel automatisé",
        "Assistance proactive WhatsApp PRO"
      ],
      heuresGratuites: 1.5,
      prioriteIllimitee: true,
      cible: "VTC, professionnels, gros rouleurs",
      arpuAugmentation: 40,
      utilisateurs: 1654,
      revenuMoyen: 95400,
      sessionsParMois: 42.6,
      energieMoyenne: 724,
      satisfactionMoyenne: 4.84,
      economieAnnuelle: 67200,
      logiqueBusiness: "Maximise ARPU sans coût marginal fort - pros/VTC captifs"
    },
    
    {
      id: "ULTRA",
      nom: "ULTRA - Haut de Gamme",
      type: "premium",
      fraisMensuel: 42000,
      reduction: 18,
      color: "yellow",
      emoji: "🟨",
      avantages: [
        "18% de réduction (marge préservée)",
        "Accès VIP + borne réservée fixe",
        "3h gratuites/mois",
        "Recharge d'urgence 1×/mois",
        "Support dédié 24/7",
        "Remplacement câble/adaptateur 1×/an",
        "File prioritaire toutes stations"
      ],
      heuresGratuites: 3,
      borneReservee: 1,
      rechargeUrgence: true,
      support24_7: true,
      cible: "Conducteurs intensifs premium",
      arpuAugmentation: 55,
      utilisateurs: 547,
      revenuMoyen: 198600,
      sessionsParMois: 68.3,
      energieMoyenne: 1156,
      satisfactionMoyenne: 4.93,
      economieAnnuelle: 142800,
      logiqueBusiness: "Réduction modérée 18% au lieu de 25% = marge sauvegardée"
    },
    
    {
      id: "BLACK_LABEL",
      nom: "BLACK LABEL - Élite & Flottes",
      type: "prestige",
      fraisMensuel: 85000,
      reduction: 10,
      color: "purple",
      emoji: "🟪",
      avantages: [
        "10% de réduction maîtrisée (revenu sécurisé)",
        "4h gratuites/mois (limité, contrôlé)",
        "2 bornes réservées (stations choisies)",
        "Recharges illimitées 7kW la nuit",
        "Hotline directe numéro dédié",
        "Assurance dommage borne-client",
        "Maintenance préventive câbles/chargeurs",
        "Compte multi-véhicules (jusqu'à 5)"
      ],
      heuresGratuites: 4,
      bornesReservees: 2,
      rechargesNuitIllimitees: true,
      multiVehicules: 5,
      hotlineDediee: true,
      assuranceDommages: true,
      cible: "Flottes, institutionnels, grands rouleurs",
      arpuAugmentation: 110,
      utilisateurs: 254,
      revenuMoyen: 428900,
      sessionsParMois: 156.7,
      energieMoyenne: 2678,
      satisfactionMoyenne: 4.97,
      economieAnnuelle: 312000,
      logiqueBusiness: "Réduction basse 10% = marge maximale sur forte consommation"
    }
  ],

  // 🎯 STRATÉGIE DE DÉPLOIEMENT (2025-2030)
  strategieDeploiement: {
    phase1: {
      periode: "2025-2026 (Années 1-2)",
      objectif: "Installer base rentable",
      totalBornes: 40,
      mix: {
        dc50kW: { nombre: 28, pourcentage: 70 },
        dc150kW: { nombre: 10, pourcentage: 25 },
        ac22kW: { nombre: 2, pourcentage: 5 }
      },
      capexTotal: 2552000000,
      revenusAnnuelsAn3: 3983000000,
      beneficeNet: 1011000000,
      margeNette: 25.4
    },
    
    phase2: {
      periode: "2027-2028 (Années 3-4)",
      objectif: "Densification axes + flagship",
      totalBornes: 60,
      mix: {
        dc50kW: { nombre: 36, pourcentage: 60 },
        dc150kW: { nombre: 18, pourcentage: 30 },
        ac22kW: { nombre: 5, pourcentage: 8 },
        dc350kW: { nombre: 1, pourcentage: 2 }
      },
      capexTotal: 3226000000,
      revenusCumules: 9500000000,
      beneficeNet: 2650000000,
      margeNette: 27.9
    },
    
    mixOptimal100Bornes: {
      dc50kW: 60,
      dc150kW: 30,
      ac22kW: 8,
      dc350kW: 2
    },
    
    performanceGlobaleAn4: {
      capexCumule: 5778000000,
      revenus: 9500000000,
      EBITDA: 3850000000,
      benefice: 2650000000,
      ROImoyenPortfolio: 2.8
    }
  },

  // 📍 STATIONS OPTIMISÉES
  stations: [
    {
      id: "ST001",
      nom: "Aéroport Gnassingbé Eyadema",
      zone: "Aéroport International",
      bornes: [
        { type: "dc350kW", nombre: 2, status: "actif" },
        { type: "dc150kW", nombre: 3, status: "actif" },
        { type: "dc50kW", nombre: 4, status: "actif" }
      ],
      totalBornes: 9,
      revenusJournaliers: 7840,
      tauxUtilisation: 94,
      typeClientele: "Premium, Business, International"
    },
    
    {
      id: "ST002",
      nom: "Autoroute Lomé-Kara",
      zone: "Hub Transit National",
      bornes: [
        { type: "dc150kW", nombre: 8, status: "actif" },
        { type: "dc50kW", nombre: 12, status: "actif" }
      ],
      totalBornes: 20,
      revenusJournaliers: 9240,
      tauxUtilisation: 88,
      typeClientele: "Transit, VTC, Professionnels"
    },
    
    {
      id: "ST003",
      nom: "Centre-Ville Sarakawa",
      zone: "Hyper-centre Lomé",
      bornes: [
        { type: "dc150kW", nombre: 4, status: "actif" },
        { type: "dc50kW", nombre: 16, status: "actif" },
        { type: "ac22kW", nombre: 4, status: "actif" }
      ],
      totalBornes: 24,
      revenusJournaliers: 6420,
      tauxUtilisation: 91,
      typeClientele: "Urbain, Commercial, Résidentiel"
    },
    
    {
      id: "ST004",
      nom: "Port Autonome",
      zone: "Zone Logistique",
      bornes: [
        { type: "dc150kW", nombre: 6, status: "actif" },
        { type: "dc50kW", nombre: 14, status: "actif" },
        { type: "ac22kW", nombre: 2, status: "actif" }
      ],
      totalBornes: 22,
      revenusJournaliers: 5870,
      tauxUtilisation: 85,
      typeClientele: "Flottes, Transport, Logistique"
    },
    
    {
      id: "ST005",
      nom: "Hôtel 2 Février",
      zone: "Quartier Affaires",
      bornes: [
        { type: "dc150kW", nombre: 3, status: "actif" },
        { type: "dc50kW", nombre: 8, status: "actif" },
        { type: "ac22kW", nombre: 2, status: "actif" }
      ],
      totalBornes: 13,
      revenusJournaliers: 4240,
      tauxUtilisation: 82,
      typeClientele: "Business, Hôtellerie, VIP"
    },
    
    {
      id: "ST006",
      nom: "Université de Lomé",
      zone: "Campus & Résidentiel",
      bornes: [
        { type: "dc150kW", nombre: 2, status: "actif" },
        { type: "dc50kW", nombre: 6, status: "actif" },
        { type: "ac22kW", nombre: 4, status: "maintenance", },
      ],
      totalBornes: 12,
      revenusJournaliers: 2417,
      tauxUtilisation: 76,
      typeClientele: "Étudiants, Personnel, Résidents"
    }
  ],

  // ⚠️ RISQUES & MITIGATION
  risques: [
    {
      nom: "Sous-utilisation AC 7kW",
      impact: "Très haut",
      probabilite: "Certain",
      contreMesure: "Ne pas déployer en usage public",
      budgetMitigation: 0,
      statut: "mitige"
    },
    {
      nom: "Hausse tarif électricité",
      impact: "Élevé",
      probabilite: "Moyen",
      contreMesure: "Ajustement tarifaire dynamique + contrats fixes",
      budgetMitigation: 15000000,
      statut: "surveille"
    },
    {
      nom: "Vandalisme équipements",
      impact: "Moyen",
      probabilite: "Moyen",
      contreMesure: "Caméras surveillance + assurance complète",
      budgetMitigation: 42000000,
      statut: "couvert"
    },
    {
      nom: "Concurrence agressive",
      impact: "Moyen",
      probabilite: "Moyen",
      contreMesure: "Fidélisation abonnements + Excellence service",
      budgetMitigation: 28000000,
      statut: "anticipe"
    }
  ],

  // 📈 MÉTRIQUES COMPARATIVES PORTFOLIO
  comparatifPortfolio: [
    { type: "AC 22kW", capex: 14.3, coutKWh: 198, tarifKWh: 210, margeNette: 5.7, roi: 9.9, kWhAn: 120, beneficeAn: 1.4, score: 3 },
    { type: "DC 50kW", capex: 52.5, coutKWh: 175, tarifKWh: 235, margeNette: 20.3, roi: 3.3, kWhAn: 357, beneficeAn: 17.1, score: 8 },
    { type: "DC 150kW", capex: 105.4, coutKWh: 186, tarifKWh: 275, margeNette: 32.5, roi: 1.9, kWhAn: 630, beneficeAn: 56.3, score: 10 },
    { type: "DC 350kW", capex: 187.0, coutKWh: 221, tarifKWh: 320, margeNette: 30.8, roi: 2.4, kWhAn: 780, beneficeAn: 77.0, score: 9 }
  ],

  // 🎯 RECOMMANDATIONS STRATÉGIQUES
  recommandations: [
    {
      priorite: 1,
      action: "Priorité absolue : DC 150 kW",
      rationnel: "ROI imbattable 1,9 ans - Idéal autoroutes + hubs stratégiques",
      deploiement: "30 bornes (30% du parc)",
      impact: "Maximise rentabilité globale"
    },
    {
      priorite: 2,
      action: "Pilier réseau : DC 50 kW",
      rationnel: "Base densification urbaine - Ratio CAPEX/performance imbattable",
      deploiement: "60 bornes (60% du parc)",
      impact: "Couverture territoriale optimale"
    },
    {
      priorite: 3,
      action: "Utilisation ciblée : AC 22 kW",
      rationnel: "Hôtels, B2B, contrats garantis uniquement",
      deploiement: "8 bornes (8% du parc)",
      impact: "Complémentarité offre B2B"
    },
    {
      priorite: 4,
      action: "Option premium : DC 350 kW",
      rationnel: "Image high-tech - Sites emblématiques (1-2 bornes max)",
      deploiement: "2 bornes (2% du parc)",
      impact: "Différenciation premium + vitrine techno"
    }
  ]
};

export default rechargeDataOptimized;
