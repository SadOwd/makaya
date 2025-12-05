// Section 7 : Estimation Budgétaire Détaillée (FCFA et USD)

export const budgetData = {
  id: 'budget',
  title: '7. Estimation Budgétaire Détaillée',
  tauxChange: 600, // 1 USD = 600 FCFA

  equipementsRecharge: {
    title: '7.1 Coût des Équipements de Recharge',
    
    bornesAC: {
      titre: 'Bornes AC 21kW (5 unités)',
      lignes: [
        {
          designation: 'Borne AC 21kW (DL-A0121KW)',
          quantite: 5,
          prixUnitaireFCFA: 281400,
          prixUnitaireUSD: 469,
          totalFCFA: 1407000,
          totalUSD: 2345
        },
        {
          designation: 'Poteaux montage acier galvanisé Ø120mm',
          quantite: 5,
          prixUnitaireFCFA: 90000,
          prixUnitaireUSD: 150,
          totalFCFA: 450000,
          totalUSD: 750
        },
        {
          designation: 'Accessoires fixation (colliers, visserie inox)',
          quantite: 5,
          prixUnitaireFCFA: 18000,
          prixUnitaireUSD: 30,
          totalFCFA: 90000,
          totalUSD: 150
        }
      ],
      sousTotalFCFA: 1947000,
      sousTotalUSD: 3245
    },

    bornesDC60: {
      titre: 'Bornes DC 60kW (3 unités)',
      lignes: [
        {
          designation: 'Borne DC 60kW CCS2 (DC-FCA60KW)',
          quantite: 3,
          prixUnitaireFCFA: 2500800,
          prixUnitaireUSD: 4168,
          totalFCFA: 7502400,
          totalUSD: 12504
        },
        {
          designation: 'Câbles CCS2 5m (inclus standard)',
          quantite: 3,
          prixUnitaireFCFA: 0,
          prixUnitaireUSD: 0,
          totalFCFA: 0,
          totalUSD: 0,
          note: 'Inclus'
        },
        {
          designation: 'Accessoires (boulons ancrage M16)',
          quantite: 3,
          prixUnitaireFCFA: 30000,
          prixUnitaireUSD: 50,
          totalFCFA: 90000,
          totalUSD: 150
        }
      ],
      sousTotalFCFA: 7592400,
      sousTotalUSD: 12654
    },

    bornesDC120: {
      titre: 'Bornes DC 120kW (2 unités)',
      lignes: [
        {
          designation: 'Borne DC 120kW CCS2 (DC-FCA120KW)',
          quantite: 2,
          prixUnitaireFCFA: 3623400,
          prixUnitaireUSD: 6039,
          totalFCFA: 7246800,
          totalUSD: 12078
        },
        {
          designation: 'Câbles CCS2 5m section 95mm² (inclus standard)',
          quantite: 2,
          prixUnitaireFCFA: 0,
          prixUnitaireUSD: 0,
          totalFCFA: 0,
          totalUSD: 0,
          note: 'Inclus'
        },
        {
          designation: 'Accessoires (boulons ancrage M20)',
          quantite: 2,
          prixUnitaireFCFA: 36000,
          prixUnitaireUSD: 60,
          totalFCFA: 72000,
          totalUSD: 120
        }
      ],
      sousTotalFCFA: 7318800,
      sousTotalUSD: 12198
    },

    totalEquipements: {
      fcfa: 16858200,
      usd: 28097
    }
  },

  infrastructureElectrique: {
    title: '7.2 Infrastructure Électrique',
    
    tgbt: {
      titre: 'Tableau Général Basse Tension',
      lignes: [
        { designation: 'Armoire TGBT 2000×1000×400mm IP54 IK10', fcfa: 1500000, usd: 2500 },
        { designation: 'Disjoncteur général 630A tétrapolaire courbe C', fcfa: 480000, usd: 800 },
        { designation: 'Différentiel général 300mA Type B', fcfa: 360000, usd: 600 },
        { designation: 'Disjoncteurs AC 5×40A tétra + différentiels 30mA Type A', fcfa: 450000, usd: 750 },
        { designation: 'Disjoncteurs DC 60kW 3×160A tétra + diff 300mA Type B', fcfa: 1080000, usd: 1800 },
        { designation: 'Disjoncteurs DC 120kW 2×250A tétra + diff 300mA Type B', fcfa: 900000, usd: 1500 },
        { designation: 'Parafoudre Type 1 40kA général', fcfa: 240000, usd: 400 },
        { designation: 'Parafoudres Type 2 20-40kA départs', fcfa: 480000, usd: 800 },
        { designation: 'Compteur général Classe 0.5 avec Modbus', fcfa: 360000, usd: 600 },
        { designation: 'Barre cuivre, connexions, jeu de barres, cosses', fcfa: 300000, usd: 500 },
        { designation: 'Étiquetage complet, accessoires, repérage', fcfa: 120000, usd: 200 }
      ],
      sousTotalFCFA: 6270000,
      sousTotalUSD: 10450
    },

    cablage: {
      titre: 'Câblage Électrique',
      lignes: [
        { designation: 'Câbles AC 5×50m 3G10mm² Cu (bornes AC)', fcfa: 900000, usd: 1500 },
        { designation: 'Câbles DC 60kW 3×40m 4G70mm² Cu', fcfa: 1800000, usd: 3000 },
        { designation: 'Câbles DC 120kW 2×40m 4G120mm² Cu', fcfa: 1920000, usd: 3200 },
        { designation: 'Câbles alimentation TGBT 15m 4G240mm² Cu', fcfa: 1080000, usd: 1800 },
        { designation: 'Câbles auxiliaires (éclairage, prises, supervision)', fcfa: 240000, usd: 400 },
        { designation: 'Chemins câbles, goulottes 100m support métal IP44', fcfa: 480000, usd: 800 },
        { designation: 'Fourreaux PVC 150m Ø110mm + coudes', fcfa: 360000, usd: 600 },
        { designation: 'Tire-fils, accessoires, aiguilles, colliers, serre-câbles', fcfa: 180000, usd: 300 }
      ],
      sousTotalFCFA: 6960000,
      sousTotalUSD: 11600
    },

    terre: {
      titre: 'Mise à la Terre et Protection',
      lignes: [
        { designation: 'Conducteur terre 150m cuivre nu 50mm²', fcfa: 480000, usd: 800 },
        { designation: 'Piquets terre 5×2.5m cuivre Ø20mm', fcfa: 240000, usd: 400 },
        { designation: 'Barrette mesure avec borne contrôle', fcfa: 48000, usd: 80 },
        { designation: 'Barre équipotentielle cuivre 30×5mm TGBT', fcfa: 90000, usd: 150 },
        { designation: 'Connexions, cosses, matériel connexion terre', fcfa: 120000, usd: 200 },
        { designation: 'Mesure résistance terre (prestation telluriste)', fcfa: 180000, usd: 300 }
      ],
      sousTotalFCFA: 1158000,
      sousTotalUSD: 1930
    },

    raccordementCEET: {
      titre: 'Raccordement CEET',
      lignes: [
        { designation: 'Frais dossier CEET (étude demande)', fcfa: 300000, usd: 500 },
        { designation: 'Frais raccordement (travaux CEET estimation)', fcfa: 1800000, usd: 3000 },
        { designation: 'Compteur CEET (fourni/posé CEET)', fcfa: 480000, usd: 800 },
        { designation: 'Câble CEET-TGBT si distance > 20m (estimation)', fcfa: 900000, usd: 1500 },
        { designation: 'Coffret comptage IP54 avec disjoncteur branchement', fcfa: 240000, usd: 400 }
      ],
      sousTotalFCFA: 3720000,
      sousTotalUSD: 6200
    },

    totalInfrastructure: {
      fcfa: 18108000,
      usd: 30180
    }
  },

  genieCivil: {
    title: '7.3 Génie Civil et Aménagement',
    
    fondations: {
      titre: 'Fondations et Terrassement',
      lignes: [
        { designation: 'Étude géotechnique (sondages sol, rapport)', fcfa: 480000, usd: 800 },
        { designation: 'Terrassement général 300m³ décapage, évacuation', fcfa: 900000, usd: 1500 },
        { designation: 'Fondations bornes DC 5×(1.2×1.0×0.4m) béton + ferraillage', fcfa: 1500000, usd: 2500 },
        { designation: 'Fondations poteaux AC 5×(0.6×0.6×1.0m) si montage poteau', fcfa: 600000, usd: 1000 },
        { designation: 'Fondation local technique 4×4m dalle + murs', fcfa: 1800000, usd: 3000 },
        { designation: 'Tranchées câbles 150m long × 0.8m prof × 0.5m larg', fcfa: 1200000, usd: 2000 },
        { designation: 'Regard tirage 3 regards PVC Ø315mm', fcfa: 180000, usd: 300 }
      ],
      sousTotalFCFA: 6660000,
      sousTotalUSD: 11100
    },

    revetement: {
      titre: 'Dalle et Revêtement',
      lignes: [
        { designation: 'Fondation GNT 250m² × 0.20m grave compactée', fcfa: 1500000, usd: 2500 },
        { designation: 'Enrobé bitumineux 250m² × (6cm+8cm) pose', fcfa: 4800000, usd: 8000 },
        { designation: 'Alternative béton désactivé (option si préféré)', fcfa: 0, usd: 0, note: 'Même prix' },
        { designation: 'Bordures béton 80ml T2 avec pose', fcfa: 720000, usd: 1200 },
        { designation: 'Caniveaux drainage 40ml avec grille fonte', fcfa: 900000, usd: 1500 }
      ],
      sousTotalFCFA: 7920000,
      sousTotalUSD: 13200
    },

    localTechnique: {
      titre: 'Local Technique',
      lignes: [
        { designation: 'Construction local 3×4m parpaings, toiture, dalle', fcfa: 2700000, usd: 4500 },
        { designation: 'Porte métallique 1.0×2.1m sécurisée', fcfa: 240000, usd: 400 },
        { designation: 'Finitions intérieur (crépi, peinture)', fcfa: 300000, usd: 500 },
        { designation: 'Ventilation (grilles haute/basse)', fcfa: 90000, usd: 150 },
        { designation: 'Éclairage LED 2 réglettes + détecteur', fcfa: 120000, usd: 200 },
        { designation: 'Prises, tableautin (prises service + protection)', fcfa: 90000, usd: 150 },
        { designation: 'Extincteur CO₂ 5kg avec support', fcfa: 60000, usd: 100 }
      ],
      sousTotalFCFA: 3600000,
      sousTotalUSD: 6000
    },

    signaletique: {
      titre: 'Signalétique et Marquage',
      lignes: [
        { designation: 'Pré-signalisation route 3 panneaux directionnels + poteaux', fcfa: 360000, usd: 600 },
        { designation: 'Panneau entrée grand format "STATION RECHARGE VE"', fcfa: 180000, usd: 300 },
        { designation: 'Panneaux places 10 panneaux verticaux "RECHARGE ÉLECTRIQUE"', fcfa: 300000, usd: 500 },
        { designation: 'Marquage sol places peinture époxy, symboles, numéros', fcfa: 720000, usd: 1200 },
        { designation: 'Panneau tarifs 2 cadres vitrés A2 (entrée + zone)', fcfa: 150000, usd: 250 },
        { designation: 'Flèches, divers signalétique circulation', fcfa: 90000, usd: 150 }
      ],
      sousTotalFCFA: 1800000,
      sousTotalUSD: 3000
    },

    totalGenieCivil: {
      fcfa: 19980000,
      usd: 33300
    }
  },

  supervision: {
    title: '7.4 Système Supervision et Gestion',
    
    logiciel: {
      titre: 'Plateforme Logicielle',
      lignes: [
        { designation: 'Licence plateforme gestion bornes, utilisateurs, paiements (1ère année)', fcfa: 1800000, usd: 3000 },
        { designation: 'Setup initial (configuration, branding)', fcfa: 900000, usd: 1500 },
        { designation: 'Serveur local mini-PC industriel si supervision locale (optionnel)', fcfa: 480000, usd: 800 },
        { designation: 'Application mobile personnalisation app white-label', fcfa: 1200000, usd: 2000 }
      ],
      sousTotalFCFA: 4380000,
      sousTotalUSD: 7300
    },

    reseau: {
      titre: 'Communication et Réseau',
      lignes: [
        { designation: 'Routeur 4G industriel avec antenne, 2×SIM failover', fcfa: 240000, usd: 400 },
        { designation: 'Switch réseau 16 ports PoE+ manageable', fcfa: 180000, usd: 300 },
        { designation: 'Abonnement Internet fibre ou 4G illimitée (1 an)', fcfa: 360000, usd: 600 },
        { designation: 'Câbles réseau Cat6 FTP 200m + accessoires', fcfa: 180000, usd: 300 },
        { designation: 'Armoire réseau Rack mural 6U IP44', fcfa: 150000, usd: 250 }
      ],
      sousTotalFCFA: 1110000,
      sousTotalUSD: 1850
    },

    paiement: {
      titre: 'Paiement Électronique',
      lignes: [
        { designation: 'TPE mobiles 3 terminaux paiement 4G (backup)', fcfa: 540000, usd: 900 },
        { designation: 'Intégration Mobile Money API TMoney + Flooz', fcfa: 900000, usd: 1500 },
        { designation: 'Frais setup paiements contrats banque, PSP', fcfa: 300000, usd: 500 },
        { designation: 'Lecteurs RFID 10 cartes (inclus bornes)', fcfa: 0, usd: 0, note: 'Inclus' },
        { designation: 'Cartes RFID prépayées 100 cartes utilisateurs', fcfa: 120000, usd: 200 }
      ],
      sousTotalFCFA: 1860000,
      sousTotalUSD: 3100
    },

    totalSupervision: {
      fcfa: 7350000,
      usd: 12250
    }
  },

  installation: {
    title: '7.5 Installation et Mise en Service',
    lignes: [
      { designation: 'Main d\'œuvre électricité 4 semaines × 4 électriciens', fcfa: 3600000, usd: 6000 },
      { designation: 'Main d\'œuvre génie civil 5 semaines × 3 ouvriers', fcfa: 2400000, usd: 4000 },
      { designation: 'Ingénieur supervision 8 semaines × 1 chef projet', fcfa: 2100000, usd: 3500 },
      { designation: 'Location engins mini-pelle, grue, camion', fcfa: 900000, usd: 1500 },
      { designation: 'Outillage spécialisé matériel mesure, sertissage', fcfa: 480000, usd: 800 },
      { designation: 'Tests mise en service prestation bureau contrôle', fcfa: 720000, usd: 1200 },
      { designation: 'Formation personnel 2 jours × 3 personnes exploitation', fcfa: 360000, usd: 600 }
    ],
    totalFCFA: 10560000,
    totalUSD: 17600
  },

  transport: {
    title: '7.6 Transport et Logistique',
    lignes: [
      { designation: 'Fret maritime Chine-Lomé Container 20\' ou groupage', fcfa: 1500000, usd: 2500 },
      { designation: 'Assurance transport valeur équipements', fcfa: 180000, usd: 300 },
      { designation: 'Dédouanement droits, taxes, commissionnaire', fcfa: 1200000, usd: 2000 },
      { designation: 'Transport local Port-site + divers livraisons', fcfa: 480000, usd: 800 }
    ],
    totalFCFA: 3360000,
    totalUSD: 5600
  },

  etudes: {
    title: '7.7 Études et Autorisations',
    lignes: [
      { designation: 'Étude faisabilité validation technique/économique', fcfa: 900000, usd: 1500 },
      { designation: 'Plans architecte plans exécution, permis', fcfa: 720000, usd: 1200 },
      { designation: 'Bureau étude électrique notes calcul, schémas', fcfa: 1080000, usd: 1800 },
      { designation: 'Permis construire frais administratifs mairie', fcfa: 240000, usd: 400 },
      { designation: 'Autorisation CEET dossier technique raccordement', fcfa: 300000, usd: 500 },
      { designation: 'Déclaration HAPDP données personnelles', fcfa: 120000, usd: 200 }
    ],
    totalFCFA: 3360000,
    totalUSD: 5600
  },

  eclairageSécurité: {
    title: '7.8 Éclairage et Sécurité',
    lignes: [
      { designation: 'Mâts éclairage LED 4×8m avec LED 80W', fcfa: 1920000, usd: 3200 },
      { designation: 'Caméras vidéosurveillance 4 dômes IP 4Mpx + NVR 1To', fcfa: 1200000, usd: 2000 },
      { designation: 'Alarme intrusion centrale + détecteurs local (optionnel)', fcfa: 360000, usd: 600 },
      { designation: 'Éclairage secours BAES local technique', fcfa: 90000, usd: 150 }
    ],
    totalFCFA: 3570000,
    totalUSD: 5950
  },

  divers: {
    title: '7.9 Divers et Imprévus',
    lignes: [
      { designation: 'Assurance chantier Tous risques 6 mois', fcfa: 900000, usd: 1500 },
      { designation: 'Consommations chantier eau, électricité provisoire', fcfa: 240000, usd: 400 },
      { designation: 'Communication lancement marketing, inauguration', fcfa: 600000, usd: 1000 },
      { designation: 'Mobilier site poubelles, bancs (optionnel)', fcfa: 300000, usd: 500 },
      { designation: 'Contingences 10% imprévus techniques', fcfa: 6000000, usd: 10000 }
    ],
    totalFCFA: 8040000,
    totalUSD: 13400
  },

  recapitulatif: {
    title: '7.10 BUDGET TOTAL PHASE 1',
    postes: [
      { designation: 'Équipements recharge', fcfa: 16858200, usd: 28097, pourcentage: 24 },
      { designation: 'Infrastructure électrique', fcfa: 18108000, usd: 30180, pourcentage: 26 },
      { designation: 'Génie civil', fcfa: 19980000, usd: 33300, pourcentage: 29 },
      { designation: 'Supervision/gestion', fcfa: 7350000, usd: 12250, pourcentage: 10 },
      { designation: 'Installation/mise en service', fcfa: 10560000, usd: 17600, pourcentage: 15 },
      { designation: 'Transport/logistique', fcfa: 3360000, usd: 5600, pourcentage: 5 },
      { designation: 'Études/autorisations', fcfa: 3360000, usd: 5600, pourcentage: 5 },
      { designation: 'Éclairage/sécurité', fcfa: 3570000, usd: 5950, pourcentage: 5 },
      { designation: 'Divers/imprévus', fcfa: 8040000, usd: 13400, pourcentage: 11 }
    ],
    totalInvestissementFCFA: 69586200,
    totalInvestissementUSD: 115977,
    arrondi: '~69.6 M FCFA ou 116 000 USD',
    fourchette: '66-72 M FCFA (110 000 - 120 000 USD)'
  }
};
