/**
 * SECTION 6 : PLANNING ET PHASAGE - PARTIE 3/3
 * Cahier des Charges - Station de Recharge VE
 * 
 * Installation équipements, tests et mise en service
 * NOTE: Fusionner avec parties 1 et 2 pour obtenir la section complète
 */

export const planningPhasageData_Part3 = {
  // ============================================================================
  // SUITE PHASE 1 : ÉQUIPEMENTS ET MISE EN SERVICE
  // ============================================================================
  
  // SEMAINES 21-24 : Installation électrique
  semaines21_24: {
    periode: "Semaines 21-24",
    titre: "Installation Électrique et TGBT",
    
    taches: [
      {
        nom: "Installation TGBT",
        responsable: "Entreprise électricité",
        duree: "3 jours",
        travaux: [
          "Pose coffret TGBT",
          "Fixation murale",
          "Raccordements internes"
        ],
        equipements: [
          "TGBT 800A",
          "Disjoncteur général",
          "10 départs protégés",
          "Parafoudres"
        ],
        cout: { fcfa: 4_800_000, usd: 8_000 }
      },
      {
        nom: "Tirage câbles alimentation",
        responsable: "Entreprise électricité",
        duree: "5 jours",
        cables: [
          "CEET→TGBT : 4x240mm² (25m)",
          "TGBT→Bornes AC : 5x(4x25mm²)",
          "TGBT→Bornes DC60 : 3x(4x95mm²)",
          "TGBT→Bornes DC120 : 2x(4x185mm²)"
        ],
        longueurTotale: "285 m",
        cout: { fcfa: 6_000_000, usd: 10_000 }
      },
      {
        nom: "Raccordement CEET",
        responsable: "CEET + Entreprise",
        duree: "3 jours",
        travaux: [
          "Branchement compteur",
          "Raccordement TGBT",
          "Vérifications CEET",
          "Mise sous tension"
        ],
        cout: { fcfa: 3_600_000, usd: 6_000 },
        prerequis: "Autorisation CEET validée",
        cheminCritique: true
      },
      {
        nom: "Raccordements terre",
        responsable: "Entreprise électricité",
        duree: "2 jours",
        travaux: [
          "Connexions masses métalliques",
          "Liaisons équipotentielles",
          "Barrette de mesure"
        ],
        cout: { fcfa: 400_000, usd: 667 }
      },
      {
        nom: "Éclairage et prises",
        responsable: "Entreprise électricité",
        duree: "3 jours",
        equipements: [
          "6 lampadaires LED 150W",
          "Éclairage local technique",
          "4 prises extérieures étanches"
        ],
        cout: { fcfa: 1_200_000, usd: 2_000 }
      }
    ],
    
    controles: [
      {
        type: "Tests électriques préalables",
        tests: [
          "Continuité conducteurs protection",
          "Isolement (≥1 MΩ)",
          "Résistance terre (≤10 Ω)",
          "Polarité",
          "Déclenchement différentiels"
        ],
        responsable: "Bureau contrôle + Entreprise"
      }
    ],
    
    jalons: [{
      nom: "Installation électrique terminée",
      semaine: 24,
      criteres: [
        "TGBT opérationnel",
        "Tous câbles tirés",
        "Mise sous tension OK",
        "Tests préalables validés"
      ],
      cheminCritique: true
    }]
  },
  
  // SEMAINES 23-26 : Installation bornes
  semaines23_26: {
    periode: "Semaines 23-26",
    titre: "Installation Bornes de Recharge",
    note: "Après mise sous tension",
    
    taches: [
      {
        nom: "Livraison bornes sur site",
        responsable: "Fournisseur DELU",
        duree: "1 jour",
        equipements: [
          "5 bornes AC 21kW",
          "3 bornes DC 60kW",
          "2 bornes DC 120kW"
        ],
        controles: [
          "Vérification quantités",
          "Inspection dommages transport",
          "Vérification certificats"
        ],
        prerequis: "Fondations sèches (28j)",
        delaiLivraison: "6-8 semaines (anticipé semaine 15)"
      },
      {
        nom: "Installation bornes AC",
        responsable: "Technicien certifié IRVE",
        duree: "3 jours",
        etapes: [
          "Fixation sur fondations (boulons M16)",
          "Raccordement câbles alimentation",
          "Raccordement communication",
          "Raccordement terre"
        ],
        nombre: 5,
        tempsUnitaire: "4-6h/borne",
        cout: { fcfa: 500_000, usd: 833 }
      },
      {
        nom: "Installation bornes DC 60kW",
        responsable: "Technicien certifié IRVE",
        duree: "3 jours",
        etapes: [
          "Fixation sur fondations",
          "Raccordement triphasé",
          "Raccordement fibre optique",
          "Raccordement terre",
          "Vérifications constructeur"
        ],
        nombre: 3,
        tempsUnitaire: "6-8h/borne",
        cout: { fcfa: 450_000, usd: 750 }
      },
      {
        nom: "Installation bornes DC 120kW",
        responsable: "Technicien certifié IRVE",
        duree: "2 jours",
        etapes: [
          "Fixation fondations renforcées",
          "Raccordement haute puissance",
          "Raccordement communication",
          "Tests préliminaires"
        ],
        nombre: 2,
        tempsUnitaire: "8-10h/borne",
        cout: { fcfa: 400_000, usd: 667 }
      },
      {
        nom: "Configuration logicielle bornes",
        responsable: "Intégrateur systèmes",
        duree: "2 jours",
        travaux: [
          "Paramétrage réseau",
          "Configuration tarifs",
          "Tests communication",
          "Enregistrement plateforme"
        ],
        cout: { fcfa: 600_000, usd: 1_000 }
      }
    ],
    
    controles: [
      {
        type: "Tests borne par borne",
        tests: [
          "Alimentation électrique",
          "Communication OCPP",
          "Affichage écran",
          "Lecteur badge",
          "Connecteurs (verrouillage)"
        ],
        responsable: "Technicien + Bureau contrôle"
      }
    ],
    
    jalons: [{
      nom: "Toutes bornes installées",
      semaine: 26,
      criteres: [
        "10 bornes fixées",
        "Tous raccordements faits",
        "Tests unitaires OK",
        "Communication établie"
      ],
      cheminCritique: true
    }]
  },
  
  // SEMAINES 25-26 : Supervision
  semaines25_26: {
    periode: "Semaines 25-26",
    titre: "Installation Système de Supervision",
    note: "En parallèle avec installation bornes",
    
    taches: [
      {
        nom: "Installation serveur local",
        responsable: "Intégrateur",
        duree: "1 jour",
        equipements: [
          "Serveur/PC industriel",
          "Switch réseau",
          "Routeur 4G backup",
          "Onduleur"
        ],
        emplacement: "Local technique",
        cout: { fcfa: 2_400_000, usd: 4_000 }
      },
      {
        nom: "Installation caméras surveillance",
        responsable: "Installateur vidéo",
        duree: "2 jours",
        equipements: [
          "4 caméras IP extérieures",
          "Enregistreur NVR",
          "Écran monitoring"
        ],
        cout: { fcfa: 1_800_000, usd: 3_000 }
      },
      {
        nom: "Configuration plateforme cloud",
        responsable: "Intégrateur",
        duree: "3 jours",
        travaux: [
          "Installation logiciel supervision",
          "Configuration base de données",
          "Intégration bornes (OCPP)",
          "Paramétrage utilisateurs",
          "Tests fonctionnels"
        ],
        cout: { fcfa: 1_800_000, usd: 3_000 }
      },
      {
        nom: "Application mobile",
        responsable: "Développeur",
        duree: "Parallèle (livré semaine 26)",
        plateformes: ["iOS", "Android"],
        fonctionnalites: [
          "Localisation station",
          "Disponibilité temps réel",
          "Démarrage charge à distance",
          "Paiement intégré",
          "Historique"
        ],
        cout: { fcfa: 3_600_000, usd: 6_000 }
      }
    ],
    
    jalons: [{
      nom: "Système supervision opérationnel",
      semaine: 26,
      criteres: [
        "Toutes bornes connectées",
        "Dashboard fonctionnel",
        "Application mobile testée",
        "Caméras opérationnelles"
      ]
    }]
  },
  
  // SEMAINES 27-28 : Tests et mise en service
  semaines27_28: {
    periode: "Semaines 27-28",
    titre: "Tests, Formations et Mise en Service",
    
    taches: [
      {
        nom: "Tests d'intégration système",
        responsable: "Intégrateur + Bureau contrôle",
        duree: "3 jours",
        tests: [
          {
            nom: "Test charge complète AC",
            procedure: "Recharge véhicule test 0-100%",
            mesures: ["Temps", "Énergie", "Puissance", "Facturation"],
            critereSucces: "Charge complète sans incident"
          },
          {
            nom: "Test charge DC rapide",
            procedure: "Recharge 20-80% sur DC 60kW et 120kW",
            mesures: ["Temps", "Courbe puissance", "Communication BMS"],
            critereSucces: "Conforme spécifications"
          },
          {
            nom: "Test load balancing",
            procedure: "Charge simultanée 10 bornes",
            mesures: ["Répartition puissance", "Respect 400kW", "Stabilité"],
            critereSucces: "Pas de surcharge, équilibrage OK"
          },
          {
            nom: "Test authentification",
            procedure: "Badge, app mobile, QR code",
            critereSucces: "Tous modes fonctionnels"
          },
          {
            nom: "Test paiement",
            procedure: "Transactions test",
            modes: ["Badge prépayé", "Carte bancaire", "Mobile"],
            critereSucces: "Facturation correcte"
          },
          {
            nom: "Test supervision",
            procedure: "Monitoring, alertes, rapports",
            critereSucces: "Toutes fonctions opérationnelles"
          },
          {
            nom: "Test mode dégradé",
            procedure: "Coupure internet, panne borne",
            critereSucces: "Basculement automatique, alertes"
          }
        ],
        livrables: ["Rapport tests complet (50 pages)"]
      },
      {
        nom: "Essais réglementaires",
        responsable: "Bureau contrôle agréé",
        duree: "2 jours",
        essais: [
          "Continuité protection (< 0.1Ω)",
          "Isolement (≥ 1MΩ)",
          "Résistance terre (≤ 10Ω)",
          "Déclenchement différentiels",
          "Polarité",
          "Fonctionnement protections"
        ],
        livrables: [
          "Attestation conformité Consuel",
          "PV essais électriques"
        ],
        cout: { fcfa: 400_000, usd: 667 }
      },
      {
        nom: "Formation exploitants",
        responsable: "Fournisseur bornes + Intégrateur",
        duree: "2 jours",
        participants: "4-6 personnes",
        programme: [
          "Fonctionnement bornes",
          "Utilisation plateforme supervision",
          "Gestion des recharges",
          "Traitement incidents courants",
          "Service client",
          "Procédures d'urgence"
        ],
        support: "Manuel exploitation + vidéos",
        livrables: ["Attestations formation"],
        cout: { fcfa: 600_000, usd: 1_000 }
      },
      {
        nom: "Formation maintenance",
        responsable: "Fournisseur équipements",
        duree: "3 jours",
        participants: "2-3 techniciens",
        programme: [
          "Fonctionnement technique",
          "Maintenance préventive",
          "Diagnostic pannes",
          "Remplacement composants",
          "Sécurité électrique",
          "Outils diagnostic"
        ],
        support: "Manuel maintenance",
        livrables: ["Certificats techniques"],
        cout: { fcfa: 800_000, usd: 1_333 }
      },
      {
        nom: "Remise documentation",
        responsable: "Maître d'œuvre",
        duree: "1 jour",
        documents: [
          "DOE (3 classeurs + USB)",
          "DIUO",
          "Manuels utilisation",
          "Manuels maintenance",
          "Attestations conformité",
          "Garanties",
          "Contacts SAV"
        ]
      },
      {
        nom: "Réception provisoire",
        responsable: "Maître d'ouvrage",
        duree: "0.5 jour",
        participants: [
          "Maître d'ouvrage",
          "Maître d'œuvre",
          "Entreprises",
          "Bureau contrôle"
        ],
        procedure: [
          "Visite contradictoire",
          "Vérification conformité",
          "Liste réserves (si nécessaire)",
          "Signature PV réception"
        ],
        livrables: ["PV réception provisoire"],
        effets: [
          "Début garantie parfait achèvement (12 mois)",
          "Transfert risques",
          "Libération chantier",
          "Paiement solde (hors retenue 5%)"
        ]
      }
    ],
    
    jalons: [{
      nom: "Station opérationnelle",
      semaine: 28,
      criteres: [
        "Tous tests validés",
        "Personnel formé",
        "Réception provisoire signée",
        "Station ouverte au public"
      ],
      celebration: "Inauguration officielle"
    }]
  },
  
  // SEMAINES 26-27 : Aménagements finaux
  semaines26_27: {
    periode: "Semaines 26-27",
    titre: "Aménagements Finaux et Signalétique",
    
    taches: [
      {
        nom: "Clôture définitive",
        responsable: "Entreprise métallerie",
        duree: "4 jours",
        specifications: [
          "Grillage rigide 2m",
          "Portail coulissant 6m motorisé",
          "Portillon piéton",
          "Contrôle accès (badge + code)"
        ],
        cout: { fcfa: 3_600_000, usd: 6_000 }
      },
      {
        nom: "Espaces verts",
        responsable: "Paysagiste",
        duree: "3 jours",
        travaux: [
          "Plantation 3 arbres",
          "Bandes végétalisées 30m²",
          "4 jardinières",
          "Système arrosage goutte-à-goutte"
        ],
        cout: { fcfa: 800_000, usd: 1_333 }
      },
      {
        nom: "Signalétique",
        responsable: "Entreprise signalétique",
        duree: "2 jours",
        elements: [
          "Totem lumineux 3x2m",
          "4 panneaux directionnels",
          "10 panneaux info bornes",
          "8 panneaux sécurité"
        ],
        cout: { fcfa: 2_400_000, usd: 4_000 }
      },
      {
        nom: "Mobilier urbain",
        responsable: "Fournisseur",
        duree: "1 jour",
        equipements: [
          "Abri piétons 3x2m",
          "3 bancs",
          "4 poubelles tri sélectif",
          "Borne WiFi"
        ],
        cout: { fcfa: 1_800_000, usd: 3_000 }
      },
      {
        nom: "Nettoyage final",
        responsable: "Entreprise nettoyage",
        duree: "1 jour",
        travaux: [
          "Nettoyage complet site",
          "Évacuation déchets",
          "Nettoyage local technique",
          "Contrôle propreté"
        ],
        cout: { fcfa: 200_000, usd: 333 }
      }
    ]
  },

  // ============================================================================
  // RÉCAPITULATIF PLANNING
  // ============================================================================
  recapitulatifPlanning: {
    titre: "Récapitulatif du Planning Global",
    
    durees: {
      phase0_preparation: "12 semaines",
      phase1_travaux: "16 semaines",
      total: "28 semaines (7 mois)"
    },
    
    jalonsClefs: [
      { jalon: "Démarrage", semaine: 0 },
      { jalon: "Fin études", semaine: 8 },
      { jalon: "Autorisations OK", semaine: 11 },
      { jalon: "Début travaux", semaine: 13 },
      { jalon: "Fondations", semaine: 17 },
      { jalon: "Voirie terminée", semaine: 22 },
      { jalon: "Raccordement CEET", semaine: 24 },
      { jalon: "Bornes installées", semaine: 26 },
      { jalon: "Mise en service", semaine: 28 }
    ],
    
    cheminCritique: [
      "Obtention permis construire (8 sem)",
      "Autorisation CEET (6 sem)",
      "Approvisionnement bornes (6-8 sem, anticipé)",
      "Raccordement CEET (3 jours)",
      "Installation bornes (8 jours)",
      "Tests intégration (3 jours)"
    ],
    
    risquesDelais: [
      {
        risque: "Retard autorisations",
        impact: "+2-4 semaines",
        probabilite: "Moyenne",
        mitigation: "Démarrage démarches dès semaine 3"
      },
      {
        risque: "Retard livraison bornes",
        impact: "+2-3 semaines",
        probabilite: "Faible",
        mitigation: "Commande anticipée semaine 15"
      },
      {
        risque: "Météo (saison pluies)",
        impact: "+1-2 semaines",
        probabilite: "Moyenne",
        mitigation: "Planifier phase travaux hors saison pluies"
      },
      {
        risque: "Disponibilité CEET",
        impact: "+1-2 semaines",
        probabilite: "Faible",
        mitigation: "Coordination étroite, rendez-vous anticipés"
      }
    ],
    
    coutTotal: {
      phase0: { fcfa: 10_800_000, usd: 18_000 },
      phase1: { fcfa: 58_786_200, usd: 97_977 },
      total: { fcfa: 69_586_200, usd: 115_977 }
    }
  },

  // ============================================================================
  // PLANNING POST-MISE EN SERVICE
  // ============================================================================
  postMiseEnService: {
    titre: "Planning Post-Mise en Service",
    
    garantiePerfectionnement: {
      periode: "12 mois après réception provisoire",
      
      visites: [
        {
          type: "Visite 3 mois",
          objet: "Contrôle fonctionnement, levée réserves mineures"
        },
        {
          type: "Visite 6 mois",
          objet: "Bilan mi-parcours, ajustements"
        },
        {
          type: "Visite 9 mois",
          objet: "Contrôle préventif"
        },
        {
          type: "Visite 12 mois",
          objet: "Préparation réception définitive"
        }
      ]
    },
    
    maintenancePreventive: {
      mensuelle: [
        "Inspection visuelle générale",
        "Nettoyage bornes et connecteurs",
        "Vérification éclairage",
        "Test alarmes"
      ],
      
      trimestrielle: [
        "Vérification serrages connexions",
        "Contrôle ventilation bornes DC",
        "Test différentiels",
        "Mise à jour firmware"
      ],
      
      annuelle: [
        "Mesure résistance terre",
        "Vérification complète installations",
        "Essais fonctionnels complets",
        "Révision générale équipements"
      ]
    },
    
    receptionDefinitive: {
      echeance: "12 mois après réception provisoire",
      conditions: [
        "Toutes réserves levées",
        "Aucun désordre majeur",
        "Visites garantie effectuées",
        "Maintenance à jour"
      ],
      effets: [
        "Libération retenue garantie (5%)",
        "Fin garantie parfait achèvement",
        "Début garantie biennale"
      ]
    }
  }
};

// Export par défaut
export default planningPhasageData_Part3;
