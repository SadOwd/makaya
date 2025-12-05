/**
 * SECTION 13 : ANNEXES TECHNIQUES - PARTIE 1/3
 * Cahier des Charges - Station de Recharge VE
 * 
 * Annexes techniques, tableaux de référence et documentation complémentaire
 * NOTE: Fusionner avec parties 2 et 3 pour obtenir la section complète
 */

export const annexesTechniquesData_Part1 = {
  // ============================================================================
  // 1. GLOSSAIRE ET DÉFINITIONS
  // ============================================================================
  glossaire: {
    titre: "Glossaire des Termes Techniques",
    
    termes: [
      {
        terme: "AC (Alternating Current)",
        definition: "Courant alternatif. Type de courant électrique utilisé par le réseau CEET et les bornes AC.",
        unite: "Tension 230V mono ou 400V triphasé"
      },
      {
        terme: "DC (Direct Current)",
        definition: "Courant continu. Type de courant stocké dans batteries VE et délivré par bornes DC rapides.",
        unite: "Tension 200-1000V"
      },
      {
        terme: "kW (kilowatt)",
        definition: "Unité de puissance. 1 kW = 1000 watts.",
        usage: "Puissance des bornes (21kW, 60kW, 120kW)"
      },
      {
        terme: "kWh (kilowatt-heure)",
        definition: "Unité d'énergie. Énergie délivrée par 1kW pendant 1 heure.",
        usage: "Capacité batteries, énergie vendue"
      },
      {
        terme: "BMS (Battery Management System)",
        definition: "Système de gestion de batterie du véhicule. Contrôle charge/décharge.",
        role: "Limite puissance charge selon état batterie"
      },
      {
        terme: "CCS (Combined Charging System)",
        definition: "Standard de connecteur DC combinant AC et DC rapide.",
        types: ["CCS1 (Amérique)", "CCS2 (Europe/Afrique) - UTILISÉ"]
      },
      {
        terme: "Type 2 (Mennekes)",
        definition: "Connecteur AC triphasé standard européen.",
        specifications: "IEC 62196-2, jusqu'à 43kW"
      },
      {
        terme: "OCPP (Open Charge Point Protocol)",
        definition: "Protocole de communication ouvert entre bornes et système de supervision.",
        versions: ["1.6J (largement adopté)", "2.0.1 (plus récent)"]
      },
      {
        terme: "Load Balancing",
        definition: "Répartition intelligente de la puissance disponible entre bornes.",
        objectif: "Ne pas dépasser puissance souscrite (400kW)"
      },
      {
        terme: "IRVE (Infrastructure de Recharge Véhicules Électriques)",
        definition: "Certification pour installateurs de bornes de recharge.",
        norme: "NF C 15-100 art. 771, formation obligatoire"
      },
      {
        terme: "TGBT (Tableau Général Basse Tension)",
        definition: "Armoire électrique distribuant puissance vers bornes.",
        composition: "Disjoncteur général + protections + compteurs"
      },
      {
        terme: "Différentiel",
        definition: "Dispositif de protection contre défauts d'isolement.",
        types: ["Type A (courant alternatif)", "Type B (AC + DC) - REQUIS IRVE"]
      },
      {
        terme: "THD (Total Harmonic Distortion)",
        definition: "Taux de distorsion harmonique. Mesure qualité du courant.",
        limite: "THDi < 5% (IEC 61000-3-2)"
      },
      {
        terme: "Facteur de puissance (PF)",
        definition: "Ratio puissance active / puissance apparente. Mesure efficacité électrique.",
        objectif: "≥ 0.95",
        correction: "PFC (Power Factor Correction) intégré bornes"
      },
      {
        terme: "IP (Indice de Protection)",
        definition: "Degré de protection contre corps solides et liquides.",
        format: "IP XY (X=solides 0-6, Y=liquides 0-8)",
        station: "IP54 (poussière + projections eau)"
      },
      {
        terme: "IK (Indice de résistance aux chocs)",
        definition: "Résistance aux impacts mécaniques.",
        echelle: "IK00 à IK10 (20 Joules)",
        station: "IK10"
      },
      {
        terme: "ROI (Return On Investment)",
        definition: "Retour sur investissement. Temps pour récupérer investissement initial.",
        formule: "Investissement / Bénéfice annuel",
        projet: "< 12 mois"
      },
      {
        terme: "TRI (Taux de Rentabilité Interne)",
        definition: "Taux d'actualisation annulant VAN. Mesure rentabilité projet.",
        projet: "180-200%"
      },
      {
        terme: "VAN (Valeur Actuelle Nette)",
        definition: "Somme des flux financiers actualisés sur durée de vie projet.",
        projet: "450 M FCFA"
      },
      {
        terme: "Temps de charge 0-80%",
        definition: "Temps standard pour recharger batterie de 0% à 80%.",
        note: "Ralentissement au-delà de 80% pour protection batterie"
      },
      {
        terme: "Efficacité énergétique",
        definition: "Ratio énergie délivrée au VE / énergie prélevée au réseau.",
        bornesAC: "≥ 95%",
        bornesDC: "≥ 94%"
      }
    ]
  },

  // ============================================================================
  // 2. NORMES ET STANDARDS DE RÉFÉRENCE
  // ============================================================================
  normesReference: {
    titre: "Tableau des Normes et Standards Applicables",
    
    normesElectriques: [
      {
        reference: "NF C 15-100",
        titre: "Installations électriques basse tension",
        organisme: "AFNOR / UTE",
        version: "2021",
        application: "Toutes installations électriques du projet",
        articlesClefs: [
          "771 : Installations recharge VE",
          "443 : Protection surtensions",
          "531 : Coupure d'urgence"
        ],
        obligatoire: true,
        disponibilite: "AFNOR Editions, boutique.afnor.org"
      },
      {
        reference: "IEC 61851-1",
        titre: "Système charge conductive VE - Partie 1 : Exigences générales",
        organisme: "CEI (Commission Électrotechnique Internationale)",
        version: "2017",
        application: "Toutes bornes de recharge",
        contenu: [
          "Modes de charge (1-4)",
          "Fonctions contrôle",
          "Protection personnes",
          "Essais"
        ],
        obligatoire: true,
        disponibilite: "IEC Webstore, webstore.iec.ch"
      },
      {
        reference: "IEC 61851-21-2",
        titre: "Exigences bornes AC raccordées réseau",
        organisme: "CEI",
        version: "2018",
        application: "Bornes AC 21kW",
        contenu: [
          "Qualité énergie",
          "Harmoniques",
          "Protection réseau",
          "Essais EMC"
        ],
        obligatoire: true
      },
      {
        reference: "IEC 61851-23",
        titre: "Stations charge DC pour VE",
        organisme: "CEI",
        version: "2014",
        application: "Bornes DC 60kW et 120kW",
        contenu: [
          "Sortie DC",
          "Communication CAN",
          "Isolation galvanique",
          "Ondulation DC"
        ],
        obligatoire: true
      },
      {
        reference: "IEC 62196-2",
        titre: "Connecteurs AC pour VE - Type 2",
        organisme: "CEI",
        version: "2016",
        application: "Connecteurs bornes AC",
        specifications: "Type 2 (Mennekes), 32A triphasé",
        obligatoire: true
      },
      {
        reference: "IEC 62196-3",
        titre: "Connecteurs DC pour VE - CCS Combo 2",
        organisme: "CEI",
        version: "2014",
        application: "Connecteurs bornes DC",
        specifications: "CCS2, jusqu'à 500A",
        obligatoire: true
      }
    ],
    
    normesGenieCivil: [
      {
        reference: "Eurocode 2 (EN 1992)",
        titre: "Calcul structures béton",
        organisme: "CEN (Comité Européen Normalisation)",
        application: "Fondations et local technique",
        parties: [
          "EN 1992-1-1 : Règles générales",
          "EN 1992-1-2 : Résistance au feu"
        ],
        alternative: "BAEL 91 modifié 99",
        obligatoire: true
      },
      {
        reference: "DTU 13.12",
        titre: "Règles calcul fondations superficielles",
        organisme: "AFNOR",
        application: "Fondations bornes et bâtiment",
        obligatoire: true
      },
      {
        reference: "DTU 21",
        titre: "Exécution ouvrages béton",
        organisme: "AFNOR",
        application: "Tous ouvrages béton armé",
        obligatoire: true
      },
      {
        reference: "NF P 98-086",
        titre: "Dimensionnement chaussées routières",
        organisme: "AFNOR",
        application: "Plateforme stationnement",
        classe: "T5 (véhicules légers)",
        obligatoire: false,
        statut: "Recommandé"
      }
    ],
    
    normesSecurite: [
      {
        reference: "NF C 18-510",
        titre: "Opérations sur ouvrages électriques",
        organisme: "AFNOR / UTE",
        version: "2020",
        application: "Personnel exploitation et maintenance",
        habilitations: ["B1V", "B2V", "BR", "BC", "H0V"],
        recyclage: "Tous les 3 ans",
        obligatoire: true
      },
      {
        reference: "NF S 61-932",
        titre: "Systèmes détection incendie",
        organisme: "AFNOR",
        application: "Local technique",
        obligatoire: true
      },
      {
        reference: "NF EN 3",
        titre: "Extincteurs portatifs",
        organisme: "AFNOR",
        application: "Station de recharge",
        types: ["CO2 6kg (local)", "Poudre ABC 9kg (extérieur)"],
        obligatoire: true
      }
    ],
    
    protocoleCommunication: [
      {
        reference: "OCPP 1.6J",
        titre: "Open Charge Point Protocol",
        organisme: "Open Charge Alliance",
        version: "1.6 JSON",
        application: "Communication bornes ↔ supervision",
        gratuit: true,
        documentation: "openchargealliance.org",
        obligatoire: false,
        statut: "Fortement recommandé"
      },
      {
        reference: "ISO 15118-2",
        titre: "Communication véhicule-borne",
        organisme: "ISO",
        version: "2014",
        application: "Charge intelligente, Plug & Charge",
        obligatoire: false,
        statut: "Recommandé pour bornes DC"
      }
    ]
  },

  // ============================================================================
  // 3. CARACTÉRISTIQUES VÉHICULES ÉLECTRIQUES
  // ============================================================================
  caracteristiquesVehicules: {
    titre: "Caractéristiques des Principaux Véhicules Électriques",
    note: "Données indicatives - vérifier auprès constructeurs",
    
    vehicules: [
      {
        marque: "Renault",
        modele: "Zoe",
        capaciteBatterie: "52 kWh",
        autonomieWLTP: "395 km",
        consommation: "13.2 kWh/100km",
        connecteurs: ["Type 2 AC", "CCS2 DC"],
        chargeAC: {
          max: "22 kW (triphasé)",
          temps0_100: "2h30 (22kW)",
          compatible: "Bornes AC 21kW du projet"
        },
        chargeDC: {
          max: "50 kW",
          temps20_80: "50 min (50kW)",
          compatible: "Bornes DC 60kW et 120kW"
        },
        prix: "~35 000 EUR",
        disponibilite: "Togo via concessionnaires"
      },
      {
        marque: "Nissan",
        modele: "Leaf",
        capaciteBatterie: "40 kWh / 62 kWh",
        autonomieWLTP: "270 km / 385 km",
        consommation: "14.8 kWh/100km",
        connecteurs: ["Type 2 AC", "CHAdeMO DC"],
        chargeAC: {
          max: "6.6 kW",
          temps0_100: "6h (40kWh) / 9h (62kWh)",
          compatible: "Bornes AC 21kW (limité par véhicule)"
        },
        chargeDC: {
          max: "50 kW",
          temps20_80: "45 min (40kWh) / 60 min (62kWh)",
          compatible: "CHAdeMO uniquement - NON compatible CCS2",
          note: "Adaptateur CHAdeMO↔CCS2 possible"
        },
        prix: "~30 000 EUR",
        disponibilite: "Togo via Nissan"
      },
      {
        marque: "Volkswagen",
        modele: "ID.3 / ID.4",
        capaciteBatterie: "58 kWh / 77 kWh",
        autonomieWLTP: "420 km / 520 km",
        consommation: "13.8 kWh/100km",
        connecteurs: ["Type 2 AC", "CCS2 DC"],
        chargeAC: {
          max: "11 kW",
          temps0_100: "5h30 (58kWh) / 7h30 (77kWh)",
          compatible: "Bornes AC 21kW (limité par véhicule)"
        },
        chargeDC: {
          max: "125 kW",
          temps5_80: "35 min (58kWh) / 45 min (77kWh)",
          compatible: "Bornes DC 60kW et 120kW (pleine puissance DC 120kW)"
        },
        prix: "~40 000 EUR",
        disponibilite: "Import ou VW Togo (à vérifier)"
      },
      {
        marque: "Tesla",
        modele: "Model 3",
        capaciteBatterie: "60 kWh / 82 kWh",
        autonomieWLTP: "491 km / 614 km",
        consommation: "12.2 kWh/100km",
        connecteurs: ["Type 2 AC", "CCS2 DC (Europe)"],
        chargeAC: {
          max: "11 kW",
          temps0_100: "5h30 (60kWh) / 7h30 (82kWh)",
          compatible: "Bornes AC 21kW"
        },
        chargeDC: {
          max: "250 kW",
          temps10_80: "27 min (60kWh) / 31 min (82kWh)",
          compatible: "Bornes DC 120kW (limité à 120kW)",
          note: "Puissance max sur Superchargeur Tesla"
        },
        prix: "~45 000 EUR",
        disponibilite: "Import"
      },
      {
        marque: "Hyundai",
        modele: "Kona Electric",
        capaciteBatterie: "39 kWh / 64 kWh",
        autonomieWLTP: "305 km / 484 km",
        consommation: "12.8 kWh/100km",
        connecteurs: ["Type 2 AC", "CCS2 DC"],
        chargeAC: {
          max: "7.2 kW",
          temps0_100: "5h30 (39kWh) / 9h (64kWh)",
          compatible: "Bornes AC 21kW"
        },
        chargeDC: {
          max: "77 kW (39kWh) / 100 kW (64kWh)",
          temps10_80: "47 min (39kWh) / 47 min (64kWh)",
          compatible: "Bornes DC 60kW et 120kW"
        },
        prix: "~35 000 EUR",
        disponibilite: "Togo via Hyundai"
      },
      {
        marque: "BMW",
        modele: "iX3",
        capaciteBatterie: "80 kWh",
        autonomieWLTP: "460 km",
        consommation: "17.4 kWh/100km",
        connecteurs: ["Type 2 AC", "CCS2 DC"],
        chargeAC: {
          max: "11 kW",
          temps0_100: "7h30",
          compatible: "Bornes AC 21kW"
        },
        chargeDC: {
          max: "150 kW",
          temps10_80: "34 min",
          compatible: "Bornes DC 120kW (limité à 120kW)"
        },
        prix: "~70 000 EUR",
        disponibilite: "Import ou BMW Togo"
      }
    ],
    
    tendances: {
      croissanceBatteries: "Capacités augmentent : 60-100 kWh devient standard",
      puissanceCharge: "DC rapide 150-350kW se généralise haut de gamme",
      standardConnecteurs: "CCS2 dominant en Europe/Afrique",
      prix: "Baisse progressive : parité thermique attendue 2025-2027",
      autonomie: "Standard 400-600 km WLTP"
    }
  }
};

// Export par défaut
export default annexesTechniquesData_Part1;
