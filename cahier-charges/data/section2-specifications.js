// Section 2 : Spécifications Techniques Détaillées

export const specificationsData = {
  id: 'specifications',
  title: '2. Spécifications Techniques Détaillées',

  configurationGenerale: {
    title: '2.1 Configuration Générale de la Station',
    capaciteTotale: '10 points de recharge simultanés',
    bornes: [
      {
        type: 'AC 21kW',
        quantite: 5,
        puissanceUnitaire: 21,
        puissanceTotale: 105,
        usage: 'Charge semi-rapide (2-3h)',
        tempsCharge50kWh: '2h30 (0-100%)'
      },
      {
        type: 'DC 60kW',
        quantite: 3,
        puissanceUnitaire: 60,
        puissanceTotale: 180,
        usage: 'Charge rapide standard (45-50min)',
        tempsCharge50kWh: '48 min (0-80%)'
      },
      {
        type: 'DC 120kW',
        quantite: 2,
        puissanceUnitaire: 120,
        puissanceTotale: 240,
        usage: 'Charge ultra-rapide (20-25min)',
        tempsCharge50kWh: '24 min (0-80%)'
      }
    ],
    puissanceMax: 525,
    puissanceReelle: 367.5,
    abonnementCEET: 400
  },

  bornesAC: {
    title: '2.2 BORNES AC 21kW (5 Unités)',
    modele: 'DL-A0121KW (SzDawn Lighting Technology)',
    caracteristiquesElectriques: {
      puissanceNominale: '21 kW',
      tensionEntree: 'AC 220V monophasé',
      tensionSortie: 'AC 220V',
      courantSortie: '0-80A ajustable',
      frequence: '50/60 Hz',
      efficacite: '≥ 95%',
      facteurPuissance: '> 0.95'
    },
    caracteristiquesPhysiques: {
      dimensions: '675 × 325 × 175 mm (H×L×P)',
      poidsNet: '11.5 kg',
      materiaux: 'Boîtier métal (tôle), panneau verre trempé',
      couleur: 'Blanc/Noir standard (personnalisable)',
      protectionEnvironnementale: 'IP54',
      protectionMecanique: 'IK08',
      temperatureFonctionnement: '-35°C à +70°C',
      humidite: '5% à 95% sans condensation',
      altitudeMax: '< 2000m'
    },
    installation: {
      typeMontage: 'Montage mural ou sur colonne (poteau Ø 100-150mm)',
      cable: '5 mètres (Type 2 recommandé)',
      longueurMax: 'jusqu\'à 7.5m personnalisable',
      hauteur: '1.2-1.5m du sol'
    },
    interfaceUtilisateur: {
      ecran: 'LED basique (état de charge, erreurs)',
      indicateurs: 'LED RGB (disponible/en charge/erreur/hors service)',
      boutons: 'Arrêt d\'urgence accessible',
      langue: 'Français (paramétrable)'
    },
    modesDemarrage: [
      'Plug & Charge : Branchement direct (gratuit ou prépayé)',
      'Scan QR Code : Via application mobile',
      'Carte RFID : Carte prépayée ou abonnement',
      'Application mobile : Géolocalisation et paiement intégré'
    ],
    connecteurs: {
      standard: 'Type 2 (IEC 62196-2)',
      alternative: 'GB/T AC (si véhicules chinois prédominants)',
      type: 'Câble attaché ou prise (à définir)'
    },
    protocolesCommunication: [
      'Ethernet RJ45',
      'WiFi 2.4GHz (optionnel)',
      '4G LTE (optionnel avec carte SIM locale)',
      'OCPP 1.6J minimum (OCPP 2.0.1 préféré)',
      'Modbus TCP/RTU pour supervision locale'
    ],
    protectionsElectriques: {
      surtension: '> 275V AC',
      sousTension: '< 180V AC',
      surcharge: '> 110% courant nominal',
      courtCircuit: 'disjoncteur intégré',
      fuitesTerre: '≤ 30mA, temps réponse ≤ 0.1s (Type A ou B)',
      surchauffe: 'coupure automatique > 80°C interne',
      basseTemperature: '≤ -30°C (désactivation temporaire)'
    },
    protectionsPhysiques: [
      'Détection température câble : capteur intégré dans prise',
      'Verrouillage connecteur : mécanique pendant charge',
      'Protection foudre : parafoudre Type 2 intégré',
      'Arrêt d\'urgence : bouton poussoir rouge accessible',
      'Protection IK : IK08 minimum (résistance aux chocs)'
    ],
    performancesCharge: {
      batterie50kWh: {
        '0_80': '~1h50 (40 kWh délivrés)',
        '0_100': '~2h30 (50 kWh délivrés)',
        '20_80': '~1h25 (charge d\'appoint)'
      },
      batterie75kWh: {
        '0_80': '~2h50',
        '0_100': '~3h45'
      }
    },
    usageOptimal: [
      'Stationnements semi-prolongés (2-4h)',
      'Centres commerciaux, cinémas, restaurants',
      'Parkings publics, gares routières',
      'Bureaux et lieux de travail',
      'Stationnement résidentiel nocturne'
    ],
    comptageEnergie: {
      precision: 'Classe 1 (±1%)',
      affichage: 'kWh délivrés, durée, coût',
      enregistrement: 'historique 1000 sessions minimum'
    },
    conformite: [
      'IEC 61851-1 (Mode 3)',
      'IEC 62196-2',
      'EN 61000-6-2, EN 61000-6-4',
      'Certification CE (obligatoire)'
    ],
    prix: {
      fcfa: 281400,
      usd: 469
    }
  },

  bornesDC60: {
    title: '2.3 BORNES DC 60kW (3 Unités)',
    modele: 'DC-FCA60KW (SzDawn Lighting Technology)',
    caracteristiquesElectriques: {
      puissanceNominale: '60 kW',
      tensionEntree: 'AC 380V triphasé ±15%',
      frequenceEntree: '45-65 Hz',
      courantEntree: '~100A par phase à pleine charge',
      facteurPuissance: '≥ 0.99 (au-dessus 50% charge)',
      THD: '≤ 5% (au-dessus 50% charge)',
      efficaciteEnergetique: '≥ 94.5%'
    },
    sortieDC: {
      tensionSortie: '200-1000V DC (puissance constante)',
      courantSortie: '0-250A',
      precisionTension: '≤ ±0.5%',
      precisionCourant: '≤ ±1%',
      ondulation: '≤ ±0.5%',
      precisionComptage: 'Classe 0.5 (±0.5%)'
    },
    caracteristiquesPhysiques: {
      dimensions: '1700 × 600 × 700 mm (H×L×P)',
      poidsNet: '235 kg',
      type: 'Borne au sol (free-standing)',
      materiaux: 'Acier revêtu poudre époxy anticorrosion',
      couleur: 'Standard blanc/gris (personnalisable)',
      vitre: 'Polycarbonate anti-vandalisme',
      protection: 'IP54 (poussière + projections d\'eau)',
      ik: 'IK10 (résistance impact 20 joules)'
    },
    conditionsEnvironnementales: {
      temperatureFonctionnement: '-35°C à +70°C',
      humiditeRelative: '5% à 95% sans condensation',
      altitude: '< 3000m',
      refroidissement: 'Air forcé (ventilation intelligente)',
      niveauSonore: '≤ 60 dB(A) à 1m',
      mtbf: '100 000 heures (11.4 ans)'
    },
    installation: {
      type: 'Au sol sur dalle béton',
      fixation: '4 tiges d\'ancrage M16 × 500mm',
      cableCharge: '5 mètres (CCS2 recommandé)',
      optionSatellite: 'Câble 10m pour borne double face'
    },
    interfaceUtilisateur: {
      ecran: 'LCD couleur 7 pouces tactile capacitif',
      resolution: '1024 × 600 pixels',
      luminosite: '400 cd/m² (lisible plein soleil)',
      protectionEcran: 'Gorilla Glass anti-rayures',
      indicateursLED: 'Couronne lumineuse RGB (statut visible de loin)',
      clavier: 'Optionnel (pavé numérique)',
      lecteurRFID: 'NFC 13.56 MHz intégré',
      lecteurQR: 'Caméra intégrée'
    },
    modesCharge: [
      'Automatique (Auto Full) : Charge complète jusqu\'à 100%',
      'Niveau batterie fixe (SOC) : Ex: s\'arrêter à 80%',
      'Montant fixe : Ex: 5000 FCFA de recharge',
      'Durée fixe : Ex: 30 minutes de charge',
      'Énergie fixe : Ex: 25 kWh exactement'
    ],
    methodesPaiement: [
      'Carte bancaire (TPE intégré optionnel)',
      'Mobile Money (TMoney, Flooz) via API',
      'Scan QR Code (application)',
      'Carte RFID prépayée',
      'Abonnement mensuel'
    ],
    connecteursStandards: {
      option1: {
        nom: 'GB/T DC (Standard chinois)',
        connecteur: 'GB/T 20234.3-2015',
        tension: '200-750V',
        courantMax: '250A',
        communication: 'CAN bus',
        prixFCFA: 1673400,
        prixUSD: 2788
      },
      option2Recommandee: {
        nom: 'CCS2 (Standard Europe/Afrique) - RECOMMANDÉ',
        type: 'Combo Type 2 + DC',
        tension: '200-1000V',
        courantMax: '250A',
        communication: 'PLC (Power Line Communication)',
        prixFCFA: 2500800,
        prixUSD: 4168,
        recommandation: 'CCS2 pour compatibilité maximale au Togo'
      }
    },
    systemeRefroidissement: {
      type: 'Refroidissement actif par air forcé',
      ventilatateurs: '2-3 unités (redondance)',
      debitAir: '500-800 m³/h',
      vitesse: 'Variable (contrôle PWM selon température)',
      filtresAir: 'Lavables, accessibles façade',
      detectionColmatage: 'Alerte maintenance préventive'
    },
    gestionThermique: {
      sondesTemperature: 'Modules puissance + ambiante',
      deratingAutomatique: 'Réduction puissance si > 65°C',
      coupureSecurite: 'Si température > 75°C',
      degivrageAutomatique: 'Résistance chauffante (climat froid)'
    },
    communication: {
      ethernet: '10/100 Mbps (principal)',
      wifi: '802.11 b/g/n 2.4 GHz (backup)',
      modem4G: 'Intégré avec slot SIM (redondance)',
      protocoleVPN: 'Sécurisation communications'
    },
    protocolesSupport: [
      'OCPP 1.6J : Open Charge Point Protocol (obligatoire)',
      'OCPP 2.0.1 : Version avancée (préféré)',
      'Modbus TCP : Pour supervision SCADA local',
      'REST API : Intégration applications tierces',
      'MQTT : IoT et monitoring temps réel'
    ],
    donneesRemontees: [
      'État borne : Disponible/Occupée/Erreur/Maintenance',
      'Puissance instantanée : kW en temps réel',
      'Énergie délivrée : kWh par session',
      'Tensions/Courants : Monitoring électrique',
      'Température : Modules + ambiante',
      'Diagnostics : Codes erreurs détaillés',
      'Sessions : Début, fin, durée, utilisateur, paiement'
    ],
    cybersecurite: [
      'Certificats SSL/TLS : Chiffrement communications',
      'Authentification : Login/password + certificats',
      'Firmware signé : Mises à jour sécurisées',
      'Firewall intégré : Protection attaques réseau',
      'Logs sécurisés : Traçabilité événements'
    ],
    performancesCharge: {
      batterie50kWh: {
        '10_80': '~42 minutes (35 kWh @ 50kW moyen)',
        '0_80': '~48 minutes (40 kWh)',
        '0_100': '~65 minutes (charge ralentie 80-100%)'
      },
      batterie75kWh: {
        '10_80': '~63 minutes (~52.5 kWh)',
        '0_100': '~95 minutes'
      }
    },
    courbeCharge: {
      '0_50': 'Puissance maximale constante 60 kW',
      '50_80': 'Puissance constante ou légère réduction',
      '80_100': 'Réduction progressive (25-15 kW) - géré par BMS véhicule'
    },
    compatibiliteVehicules: [
      'Berlines électriques : Nissan Leaf, Renault Zoe, Tesla Model 3',
      'SUV électriques : Tesla Model Y, Hyundai Kona, Kia Niro',
      'Utilitaires : Renault Kangoo E-Tech, Peugeot e-Partner',
      'Bus électriques : Charge possible mais lente (grosse batterie)'
    ],
    usageOptimal: [
      'Recharge rapide en route (stations-service, aires autoroute)',
      'Flottes commerciales (taxis, VTC)',
      'Recharge opportuniste (courses 30-45 min)'
    ],
    conformiteNormes: [
      'IEC 61851-23 : Stations de charge DC pour VE',
      'IEC 61851-24 : Communication numérique',
      'IEC 62196-3 : Connecteurs DC (CCS)',
      'ISO 15118 : Communication V2G (Vehicle to Grid)'
    ]
  },

  bornesDC120: {
    title: '2.4 BORNES DC 120kW (2 Unités)',
    modele: 'DC-FCA120KW (SzDawn Lighting Technology)',
    caracteristiquesElectriques: {
      puissanceNominale: '120 kW',
      tensionEntree: 'AC 380V triphasé ±15%',
      frequenceEntree: '45-65 Hz',
      courantEntree: '~200A par phase à pleine charge',
      facteurPuissance: '≥ 0.99 (au-dessus 50% charge)',
      THD: '≤ 5% (au-dessus 50% charge)',
      efficaciteEnergetique: '≥ 94.5%'
    },
    sortieDC: {
      tensionSortie: '200-1000V DC (puissance constante)',
      courantSortie: '0-250A (limité par câble)',
      puissanceConstante: '120 kW de 200V à 480V',
      auDelaNotes: 'Au-delà 480V : Puissance limitée par 250A (max 250kW si véhicule accepte)',
      precisionTension: '≤ ±0.5%',
      precisionCourant: '≤ ±1%',
      ondulation: '≤ ±0.5%',
      precisionComptage: 'Classe 0.5 (±0.5%)'
    },
    caracteristiquesPhysiques: {
      dimensions: '1700 × 600 × 700 mm (H×L×P)',
      poidsNet: '275 kg',
      type: 'Borne au sol (free-standing)',
      materiaux: 'Acier revêtu poudre époxy anticorrosion',
      couleur: 'Standard blanc/gris (personnalisable)',
      vitre: 'Polycarbonate anti-vandalisme',
      protection: 'IP54 (poussière + projections d\'eau)',
      ik: 'IK10 (résistance impact 20 joules)'
    },
    conditionsEnvironnementales: {
      temperatureFonctionnement: '-35°C à +70°C',
      humiditeRelative: '5% à 95% sans condensation',
      altitude: '< 3000m',
      refroidissement: 'Air forcé renforcé (ventilation haute performance)',
      niveauSonore: '≤ 60 dB(A) à 1m',
      mtbf: '100 000 heures (11.4 ans)'
    },
    installation: {
      type: 'Au sol sur dalle béton renforcée',
      fixation: '4 tiges d\'ancrage M20 × 600mm',
      cableCharge: '5 mètres (CCS2 recommandé, section 95mm²)',
      option: '2ème connecteur (double sortie 2×60kW en partage)'
    },
    connecteursStandards: {
      option1: {
        nom: 'GB/T DC',
        prixFCFA: 2416800,
        prixUSD: 4028
      },
      option2Recommandee: {
        nom: 'CCS2 - RECOMMANDÉ',
        prixFCFA: 3623400,
        prixUSD: 6039,
        recommandation: 'CCS2 pour le Togo'
      }
    },
    systemeRefroidissementRenforce: {
      ventilateurs: '3 unités redondantes',
      debitAir: '1000-1200 m³/h',
      dissipationThermique: '~7 kW (à 120kW charge)',
      refroidissementActif: 'Permanent au-dessus 50% charge'
    },
    gestionThermiqueAvancee: {
      seuils: [
        '60°C : Limitation 100 kW',
        '65°C : Limitation 80 kW',
        '70°C : Limitation 60 kW',
        '75°C : Arrêt sécurité'
      ]
    },
    performancesCharge: {
      batterie50kWh: {
        '10_80': '~21 minutes (35 kWh @ 100kW moyen)',
        '0_80': '~24 minutes (40 kWh)',
        '0_100': '~40 minutes (charge ralentie 80-100%)'
      },
      batterie75kWh: {
        '10_80': '~32 minutes (~52.5 kWh)',
        '0_100': '~55 minutes'
      },
      batterie100kWh: {
        '10_80': '~42 minutes (~70 kWh)',
        '0_100': '~75 minutes'
      }
    },
    courbeChargeTypique: {
      '0_50': 'Puissance maximale 120 kW (si batterie accepte)',
      '50_80': 'Puissance constante ou réduction selon BMS',
      '80_100': 'Réduction progressive (30-20 kW)'
    },
    noteImportante: 'Certains véhicules ne peuvent pas accepter 120kW continus (limitation BMS). Dans ce cas, la borne s\'adapte automatiquement à la puissance maximale du véhicule.',
    compatibiliteHautePuissance: [
      'Tesla Model 3/Y/S/X (jusqu\'à 250 kW max, accepte 120 kW)',
      'Porsche Taycan (270 kW max, profite pleinement)',
      'Hyundai Ioniq 5/6 (jusqu\'à 240 kW)',
      'Kia EV6 (jusqu\'à 240 kW)',
      'Mercedes EQS, EQE',
      'BMW iX, i4'
    ],
    usageOptimal: [
      'Recharge ultra-rapide express (20-30 min)',
      'Axes autoroutiers longue distance',
      'Stations-service grande affluence',
      'Flottes premium (taxis Tesla, VTC haut de gamme)',
      'Positionnement service premium (tarif supérieur)'
    ]
  },

  loadBalancing: {
    title: '2.5 Système de Gestion Dynamique de la Charge (Load Balancing)',
    necessite: 'Éviter dépassement puissance souscrite (400 kW) lors de pics de consommation simultanée',
    principe: {
      supervisionTempsReel: 'Mesure puissance totale instantanée',
      repartitionIntelligente: 'Attribution puissance disponible entre bornes actives',
      priorisation: 'Selon heure arrivée, type abonnement, ou SOC véhicule',
      limitationProgressive: 'Réduction puissance bornes si approche limite',
      transparence: 'Information temps de charge ajusté'
    },
    architecture: {
      controleurCentral: 'Serveur local (mini-PC industriel) ou cloud',
      communication: 'OCPP 1.6/2.0 avec chaque borne',
      mesure: 'Compteur principal TGBT avec sortie Modbus',
      algorithme: 'Round-robin, priorité FIFO, ou intelligent (ML)',
      interface: 'Dashboard supervision temps réel'
    },
    exempleScenario: {
      situation: '8 véhicules en charge simultanée',
      demandes: {
        ac: { quantite: 4, puissance: 21, total: 84 },
        dc60: { quantite: 2, puissance: 60, total: 120 },
        dc120: { quantite: 2, puissance: 120, total: 240 },
        totalDemande: 444,
        limite: 400
      },
      action: {
        ac: 'Maintien 21 kW (priorité économique)',
        dc60: 'Maintien 60 kW',
        dc120: 'Réduction à 100 kW chacun',
        totalAjuste: 404,
        resultat: 'TOTAL ajusté = 404 kW ≈ 400 kW ✓'
      },
      impact: {
        dureeCharge120kW: '+20% (24 min → 29 min)'
      }
    },
    avantages: [
      'Optimisation abonnement CEET (pas de surdimensionnement)',
      'Évitement dépassement puissance (pénalités CEET)',
      'Flexibilité opérationnelle',
      'Meilleure expérience utilisateur (vs coupure brutale)'
    ]
  }
};
