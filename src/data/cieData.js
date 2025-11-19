// 🌿 CARBON INTELLIGENCE ENGINE (CIE) - DONNÉES
// ============================================

export const cieData = {
  // Score Carbone Dynamique Global
  globalCarbonScore: {
    score: 94, // sur 100
    grade: 'A+',
    trend: '+3.2%', // vs mois dernier
    co2AvoidedTotal: 847.3, // tonnes/an
    co2AvoidedToday: 2.32, // tonnes
    targetAchievement: 112, // % de l'objectif
  },

  // Données temps réel
  realTimeData: {
    totalKmToday: 8945,
    totalKwHToday: 1431,
    co2AvoidedToday: 2320, // kg
    equivalentTrees: 116,
    activeVehicles: 45,
    avgEfficiency: 11.0, // kWh/100km
    lastUpdate: new Date().toISOString()
  },

  // Forecast CO2 & Savings (12-36 mois)
  forecast: {
    months12: {
      co2Avoided: 1015, // tonnes
      costSavings: 285000000, // FCFA
      kmProjected: 5600000,
      decarbonationRate: 0.92
    },
    months24: {
      co2Avoided: 2145, // tonnes
      costSavings: 598000000, // FCFA
      kmProjected: 11800000,
      decarbonationRate: 0.94
    },
    months36: {
      co2Avoided: 3420, // tonnes
      costSavings: 945000000, // FCFA
      kmProjected: 18500000,
      decarbonationRate: 0.96
    }
  },

  // Tendances mensuelles CO2 évité
  monthlyTrends: [
    { month: 'Jan', co2Avoided: 58.2, costSaved: 16500000, km: 420000, efficiency: 16.2 },
    { month: 'Fév', co2Avoided: 61.5, costSaved: 17400000, km: 445000, efficiency: 16.1 },
    { month: 'Mar', co2Avoided: 65.8, costSaved: 18600000, km: 475000, efficiency: 16.0 },
    { month: 'Avr', co2Avoided: 68.4, costSaved: 19300000, km: 495000, efficiency: 15.9 },
    { month: 'Mai', co2Avoided: 72.1, costSaved: 20400000, km: 520000, efficiency: 15.8 },
    { month: 'Jun', co2Avoided: 69.5, costSaved: 19700000, km: 502000, efficiency: 16.0 },
    { month: 'Jul', co2Avoided: 75.8, costSaved: 21500000, km: 548000, efficiency: 15.7 },
    { month: 'Aoû', co2Avoided: 73.2, costSaved: 20800000, km: 530000, efficiency: 15.9 },
    { month: 'Sep', co2Avoided: 78.6, costSaved: 22300000, km: 568000, efficiency: 15.6 },
    { month: 'Oct', co2Avoided: 81.4, costSaved: 23100000, km: 588000, efficiency: 15.5 },
    { month: 'Nov', co2Avoided: 79.8, costSaved: 22600000, km: 576000, efficiency: 15.7 }
  ],

  // Score Carbone Dynamique par véhicule
  vehicleCarbonScores: [
    {
      id: 1,
      vehicle: 'TG-123-AB',
      model: 'BYD Seal',
      score: 98,
      grade: 'A+',
      co2Avoided: 3.8, // tonnes ce mois
      efficiency: 15.2, // kWh/100km (vs 16.0 nominal)
      kmThisMonth: 7520,
      efficiencyVsBenchmark: '+5.0%', // meilleur que la moyenne
      driverEfficiency: 96,
      regenerationRate: 0.23,
      ranking: 1
    },
    {
      id: 2,
      vehicle: 'TG-456-CD',
      model: 'BYD Dolphin',
      score: 95,
      grade: 'A+',
      co2Avoided: 3.2,
      efficiency: 15.8,
      kmThisMonth: 6850,
      efficiencyVsBenchmark: '+1.2%',
      driverEfficiency: 94,
      regenerationRate: 0.21,
      ranking: 2
    },
    {
      id: 3,
      vehicle: 'TG-789-EF',
      model: 'BYD Seal',
      score: 92,
      grade: 'A',
      co2Avoided: 3.5,
      efficiency: 16.5,
      kmThisMonth: 7180,
      efficiencyVsBenchmark: '-3.1%',
      driverEfficiency: 88,
      regenerationRate: 0.19,
      ranking: 3
    },
    {
      id: 4,
      vehicle: 'TG-234-GH',
      model: 'BYD Atto 3',
      score: 89,
      grade: 'A',
      co2Avoided: 2.9,
      efficiency: 16.8,
      kmThisMonth: 6420,
      efficiencyVsBenchmark: '-5.0%',
      driverEfficiency: 85,
      regenerationRate: 0.17,
      ranking: 4
    },
    {
      id: 5,
      vehicle: 'TG-567-IJ',
      model: 'BYD Song Plus',
      score: 96,
      grade: 'A+',
      co2Avoided: 3.4,
      efficiency: 15.5,
      kmThisMonth: 7020,
      efficiencyVsBenchmark: '+3.1%',
      driverEfficiency: 93,
      regenerationRate: 0.22,
      ranking: 5
    }
  ],

  // Efficacité chauffeurs
  driverEfficiency: [
    {
      id: 1,
      name: 'Koffi A.',
      vehicle: 'BYD Seal',
      score: 96,
      efficiency: 15.2,
      regeneration: 0.23,
      smoothDriving: 94,
      speedOptimization: 92,
      thermalManagement: 98,
      co2Saved: 3.8,
      ranking: 1,
      improvement: '+2.3%'
    },
    {
      id: 2,
      name: 'Ama B.',
      vehicle: 'BYD Dolphin',
      score: 94,
      efficiency: 15.8,
      regeneration: 0.21,
      smoothDriving: 92,
      speedOptimization: 95,
      thermalManagement: 94,
      co2Saved: 3.2,
      ranking: 2,
      improvement: '+1.8%'
    },
    {
      id: 3,
      name: 'Adjoa E.',
      vehicle: 'BYD Song Plus',
      score: 93,
      efficiency: 15.5,
      regeneration: 0.22,
      smoothDriving: 93,
      speedOptimization: 91,
      thermalManagement: 95,
      co2Saved: 3.4,
      ranking: 3,
      improvement: '+3.1%'
    },
    {
      id: 4,
      name: 'Kokou C.',
      vehicle: 'BYD Seal',
      score: 88,
      efficiency: 16.5,
      regeneration: 0.19,
      smoothDriving: 85,
      speedOptimization: 88,
      thermalManagement: 92,
      co2Saved: 3.5,
      ranking: 4,
      improvement: '-1.2%'
    },
    {
      id: 5,
      name: 'Edem D.',
      vehicle: 'BYD Atto 3',
      score: 85,
      efficiency: 16.8,
      regeneration: 0.17,
      smoothDriving: 82,
      speedOptimization: 86,
      thermalManagement: 88,
      co2Saved: 2.9,
      ranking: 5,
      improvement: '-2.5%'
    }
  ],

  // Heatmap CO2 par zone et heure
  zoneCO2Heatmap: [
    {
      zone: 'Aéroport',
      peakHours: ['06h-09h', '17h-20h'],
      avgConsumption: 12.2, // kWh/100km
      traffic: 'dense',
      co2Intensity: 'low',
      recommendations: 'Zone optimale pour efficacité',
      co2SavedMonth: 45.2 // tonnes
    },
    {
      zone: 'Centre-ville',
      peakHours: ['08h-10h', '12h-14h', '18h-21h'],
      avgConsumption: 12.8,
      traffic: 'très dense',
      co2Intensity: 'medium',
      recommendations: 'Éviter heures de pointe si possible',
      co2SavedMonth: 38.5
    },
    {
      zone: 'Tokoin',
      peakHours: ['07h-09h', '17h-19h'],
      avgConsumption: 11.5,
      traffic: 'modéré',
      co2Intensity: 'low',
      recommendations: 'Bonne efficacité énergétique',
      co2SavedMonth: 32.8
    },
    {
      zone: 'Légbassito',
      peakHours: ['08h-10h', '18h-20h'],
      avgConsumption: 12.2,
      traffic: 'modéré',
      co2Intensity: 'low',
      recommendations: 'Zone performante',
      co2SavedMonth: 28.6
    },
    {
      zone: 'Bè',
      peakHours: ['07h-09h', '17h-19h'],
      avgConsumption: 13.2,
      traffic: 'dense',
      co2Intensity: 'medium',
      recommendations: 'Préférer trajets fluides',
      co2SavedMonth: 25.4
    }
  ],

  // Analyse rentabilité carbone véhicules
  vehicleCarbonROI: [
    {
      model: 'BYD Seal',
      units: 18,
      co2AvoidedTotal: 68.4, // tonnes
      acquisitionCost: 273600000, // FCFA
      opexSavings: 48500000,
      co2CostPerTonne: 4000000,
      paybackMonths: 32,
      roi: 'Excellent',
      keepReplace: 'Garder + Augmenter'
    },
    {
      model: 'BYD Dolphin',
      units: 22,
      co2AvoidedTotal: 70.4,
      acquisitionCost: 215600000,
      opexSavings: 52300000,
      co2CostPerTonne: 3062000,
      paybackMonths: 28,
      roi: 'Excellent',
      keepReplace: 'Garder + Augmenter'
    },
    {
      model: 'BYD Atto 3',
      units: 8,
      co2AvoidedTotal: 23.2,
      acquisitionCost: 100000000,
      opexSavings: 17200000,
      co2CostPerTonne: 4310000,
      paybackMonths: 35,
      roi: 'Bon',
      keepReplace: 'Garder'
    },
    {
      model: 'BYD e6',
      units: 4,
      co2AvoidedTotal: 15.8,
      acquisitionCost: 44800000,
      opexSavings: 11800000,
      co2CostPerTonne: 2835000,
      paybackMonths: 24,
      roi: 'Très bon',
      keepReplace: 'Garder'
    }
  ],

  // Anomalies détectées
  anomalies: [
    {
      id: 1,
      type: 'Surconsommation',
      vehicle: 'TG-234-GH',
      severity: 'medium',
      description: 'Consommation +5% au-dessus de la normale',
      impact: '0.3 tonnes CO2/mois supplémentaires',
      recommendation: 'Vérifier système climatisation + style conduite',
      detected: '2025-11-15',
      status: 'En cours'
    },
    {
      id: 2,
      type: 'Efficacité batterie',
      vehicle: 'TG-789-EF',
      severity: 'low',
      description: 'Baisse régénération -8%',
      impact: '0.15 tonnes CO2/mois',
      recommendation: 'Diagnostic batterie recommandé',
      detected: '2025-11-12',
      status: 'Planifié'
    },
    {
      id: 3,
      type: 'Charge non-optimale',
      vehicle: 'TG-456-CD',
      severity: 'low',
      description: 'Charges fréquentes en heures de pointe',
      impact: '+12% empreinte carbone charge',
      recommendation: 'Privilégier charges nocturnes',
      detected: '2025-11-10',
      status: 'Alerté'
    }
  ],

  // Certificats CO2 générés
  certificates: [
    {
      id: 'CERT-2025-11',
      month: 'Novembre 2025',
      co2Avoided: 79.8,
      vehiclesCovered: 52,
      kmTotal: 576000,
      methodology: 'GIEC 2024 + IEA',
      verifiedBy: 'Makaya Carbon Intelligence Engine',
      generatedDate: '2025-11-18',
      status: 'Certifié',
      downloadUrl: '/certificates/CERT-2025-11.pdf'
    },
    {
      id: 'CERT-2025-10',
      month: 'Octobre 2025',
      co2Avoided: 81.4,
      vehiclesCovered: 52,
      kmTotal: 588000,
      methodology: 'GIEC 2024 + IEA',
      verifiedBy: 'Makaya Carbon Intelligence Engine',
      generatedDate: '2025-10-18',
      status: 'Certifié',
      downloadUrl: '/certificates/CERT-2025-10.pdf'
    }
  ],

  // Objectifs et targets
  targets: {
    annual: {
      co2Target: 900, // tonnes
      current: 847.3,
      achievement: 94.1, // %
      remaining: 52.7
    },
    efficiency: {
      target: 15.5, // kWh/100km
      current: 16.0,
      gap: 0.5,
      improvement: 'En cours'
    },
    driverTraining: {
      target: 90, // % chauffeurs formés
      current: 78,
      remaining: 12
    }
  },

  // Comparaison vs Business Plan
  vsBP: {
    co2AvoidedVsTarget: '+12%', // On fait mieux que prévu
    efficiencyVsTarget: '-3%', // Légèrement moins efficace
    costSavingsVsTarget: '+8%', // Économies supérieures
    kmVsTarget: '+5%' // Plus de km parcourus
  }
};
