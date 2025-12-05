/**
 * SECTION 6 : PLANNING ET PHASAGE - PARTIE 2/3
 * Cahier des Charges - Station de Recharge VE
 * 
 * Phase travaux et installation
 * NOTE: Fusionner avec parties 1 et 3 pour obtenir la section complète
 */

export const planningPhasageData_Part2 = {
  // ============================================================================
  // 3. PHASE 1 : TRAVAUX (Semaines 13-28)
  // ============================================================================
  phase1_travaux: {
    titre: "Phase 1 : Réalisation Travaux",
    duree: "16 semaines",
    periode: "Semaines 13 à 28",
    
    // SEMAINE 13 : Installation chantier
    semaine13: {
      periode: "Semaine 13",
      titre: "Installation de Chantier",
      
      taches: [
        {
          nom: "Clôture provisoire chantier",
          responsable: "Entreprise GC",
          duree: "2 jours",
          description: "Clôture grillagée 2m avec portail",
          cout: { fcfa: 400_000, usd: 667 }
        },
        {
          nom: "Installation base vie",
          responsable: "Entreprise GC",
          duree: "2 jours",
          equipements: [
            "Bureau chantier (container)",
            "Vestiaires",
            "Sanitaires",
            "Local stockage"
          ],
          cout: { fcfa: 600_000, usd: 1_000 }
        },
        {
          nom: "Branchement provisoire eau/électricité",
          responsable: "Entreprise",
          duree: "2 jours",
          cout: { fcfa: 300_000, usd: 500 }
        },
        {
          nom: "Panneaux signalisation chantier",
          responsable: "Entreprise",
          duree: "1 jour",
          panneaux: [
            "Panneau projet (4x3m)",
            "Consignes sécurité",
            "Interdiction accès",
            "Contacts urgence"
          ],
          cout: { fcfa: 200_000, usd: 333 }
        },
        {
          nom: "Réunion démarrage chantier",
          responsable: "Maître d'œuvre",
          duree: "0.5 jour",
          participants: [
            "Toutes entreprises",
            "Maître d'œuvre",
            "Bureau contrôle",
            "Coordonnateur SPS"
          ],
          livrables: ["PV démarrage chantier"]
        }
      ],
      
      jalons: [{
        nom: "Chantier opérationnel",
        criteres: [
          "Installation complète",
          "Autorisations affichées",
          "Personnel briefé sécurité"
        ]
      }]
    },
    
    // SEMAINES 14-15 : Terrassement
    semaines14_15: {
      periode: "Semaines 14-15",
      titre: "Terrassement et Préparation Terrain",
      
      taches: [
        {
          nom: "Piquetage et implantation",
          responsable: "Géomètre",
          duree: "2 jours",
          travaux: [
            "Implantation axes principaux",
            "Bornage limites",
            "Nivellement"
          ],
          livrables: ["PV implantation"]
        },
        {
          nom: "Décapage terre végétale",
          responsable: "Entreprise GC",
          duree: "3 jours",
          volume: "150 m³",
          profondeur: "30 cm",
          equipements: ["Pelle mécanique", "3 camions"],
          cout: { fcfa: 900_000, usd: 1_500 }
        },
        {
          nom: "Nivellement et compactage",
          responsable: "Entreprise GC",
          duree: "4 jours",
          travaux: [
            "Apport grave 0/31.5",
            "Réglage nivellements",
            "Compactage (95% OPM)"
          ],
          volume: "90 m³",
          controles: "Essai densité (tous 100m²)",
          cout: { fcfa: 1_200_000, usd: 2_000 }
        },
        {
          nom: "Fouilles fondations bornes",
          responsable: "Entreprise GC",
          duree: "3 jours",
          details: [
            "5 fouilles AC : 80x80x60cm",
            "3 fouilles DC60 : 100x100x80cm",
            "2 fouilles DC120 : 120x120x100cm"
          ],
          volume: "16.8 m³",
          cout: { fcfa: 600_000, usd: 1_000 }
        },
        {
          nom: "Fouille local technique",
          responsable: "Entreprise GC",
          duree: "2 jours",
          dimensions: "4x3x0.8m",
          volume: "9.6 m³",
          cout: { fcfa: 400_000, usd: 667 }
        }
      ],
      
      controles: [
        {
          type: "Contrôle géométrique",
          frequence: "Avant coulage",
          responsable: "Géomètre + Bureau contrôle"
        },
        {
          type: "Essais compactage",
          nombre: 5,
          norme: "NF P 94-093",
          responsable: "Laboratoire agréé"
        }
      ],
      
      jalons: [{
        nom: "Terrassement validé",
        semaine: 15,
        criteres: [
          "Toutes fouilles exécutées",
          "Compactage validé",
          "PV géomètre OK"
        ]
      }]
    },
    
    // SEMAINES 16-17 : Fondations
    semaines16_17: {
      periode: "Semaines 16-17",
      titre: "Fondations Bornes et Local Technique",
      
      taches: [
        {
          nom: "Ferraillage fondations bornes",
          responsable: "Entreprise GC",
          duree: "4 jours",
          travaux: [
            "Pose treillis soudés",
            "Mise en place attentes verticales",
            "Pose fourreaux passages câbles"
          ],
          controles: "Visa bureau contrôle avant coulage"
        },
        {
          nom: "Coulage béton fondations bornes",
          responsable: "Entreprise GC",
          duree: "2 jours",
          volume: "7.2 m³",
          dosage: "350 kg/m³",
          controles: [
            "3 éprouvettes par coulage",
            "Slump test",
            "Vibration"
          ],
          cout: { fcfa: 1_440_000, usd: 2_400 }
        },
        {
          nom: "Fondations local technique",
          responsable: "Entreprise GC",
          duree: "3 jours",
          travaux: [
            "Semelle filante 40x60cm",
            "Ferraillage HA 12",
            "Coulage béton 350"
          ],
          volume: "3.36 m³",
          cout: { fcfa: 840_000, usd: 1_400 }
        },
        {
          nom: "Séchage béton",
          responsable: "Surveillance chantier",
          duree: "7 jours",
          note: "28 jours pour résistance complète",
          arrosage: "2 fois/jour pendant 7 jours"
        }
      ],
      
      controles: [
        {
          type: "Essais béton résistance",
          echeances: ["7 jours", "28 jours"],
          objectif: "≥ 25 MPa à 28j",
          responsable: "Laboratoire"
        }
      ],
      
      jalons: [{
        nom: "Fondations achevées",
        semaine: 17,
        criteres: [
          "Toutes fondations coulées",
          "Béton pris (7 jours min)",
          "Essais lancés"
        ]
      }]
    },
    
    // SEMAINES 17-19 : Réseaux
    semaines17_19: {
      periode: "Semaines 17-19",
      titre: "Tranchées et Réseaux Enterrés",
      note: "En parallèle avec séchage béton",
      
      taches: [
        {
          nom: "Tranchées électriques",
          responsable: "Entreprise électricité",
          duree: "5 jours",
          specifications: [
            "Profondeur 80cm",
            "Largeur 40cm",
            "Longueur 285m"
          ],
          volume: "91.2 m³",
          cout: { fcfa: 1_800_000, usd: 3_000 }
        },
        {
          nom: "Pose fourreaux électriques",
          responsable: "Entreprise électricité",
          duree: "3 jours",
          fourreaux: [
            "Ø160mm CEET→TGBT (25m)",
            "Ø75mm bornes AC (120m)",
            "Ø110mm bornes DC60 (80m)",
            "Ø140mm bornes DC120 (60m)"
          ],
          cout: { fcfa: 900_000, usd: 1_500 }
        },
        {
          nom: "Tranchées communication",
          responsable: "Entreprise électricité",
          duree: "3 jours",
          specifications: [
            "Profondeur 60cm",
            "Séparation réseau élec 20cm",
            "Longueur 280m"
          ],
          cout: { fcfa: 600_000, usd: 1_000 }
        },
        {
          nom: "Pose câbles communication",
          responsable: "Entreprise électricité",
          duree: "2 jours",
          cables: [
            "Fibre optique 12 fibres (300m)",
            "Ethernet Cat6A (280m)",
            "Coaxial RG6 (250m)"
          ],
          cout: { fcfa: 800_000, usd: 1_333 }
        },
        {
          nom: "Pose chambres passage",
          responsable: "Entreprise GC",
          duree: "2 jours",
          nombre: 8,
          type: "Regards béton 60x60cm",
          cout: { fcfa: 480_000, usd: 800 }
        },
        {
          nom: "Réseau mise à la terre",
          responsable: "Entreprise électricité",
          duree: "3 jours",
          travaux: [
            "Pose 12 piquets Ø20mm x 2m",
            "Conducteur ceinture Cu 50mm²",
            "Barrette mesure"
          ],
          cout: { fcfa: 840_000, usd: 1_400 }
        },
        {
          nom: "Remblai tranchées",
          responsable: "Entreprise GC",
          duree: "3 jours",
          travaux: [
            "Lit de sable (10cm)",
            "Grillage avertissement",
            "Remblai compacté couches 20cm"
          ],
          cout: { fcfa: 1_200_000, usd: 2_000 }
        }
      ],
      
      controles: [
        {
          type: "Mesure résistance terre",
          objectif: "≤ 10 Ω",
          methode: "3 piquets (62%)",
          responsable: "Bureau contrôle"
        },
        {
          type: "Tests fourreaux",
          test: "Passage tire-fil",
          responsable: "Entreprise électricité"
        }
      ],
      
      jalons: [{
        nom: "Réseaux enterrés terminés",
        semaine: 19,
        criteres: [
          "Toutes tranchées rebouchées",
          "Résistance terre OK",
          "Chambres posées"
        ]
      }]
    },
    
    // SEMAINES 18-20 : Local technique
    semaines18_20: {
      periode: "Semaines 18-20",
      titre: "Construction Local Technique",
      note: "En parallèle avec réseaux",
      
      taches: [
        {
          nom: "Élévation murs",
          responsable: "Entreprise GC",
          duree: "5 jours",
          travaux: [
            "Montage parpaings 20cm",
            "Chaînages horizontaux",
            "Linteaux porte/fenêtre"
          ],
          surface: "24 m² (périmètre)",
          hauteur: "2.8 m",
          cout: { fcfa: 1_200_000, usd: 2_000 }
        },
        {
          nom: "Dalle béton local",
          responsable: "Entreprise GC",
          duree: "3 jours",
          travaux: [
            "Hérisson 20cm",
            "Dalle BA 15cm + treillis ST25C",
            "Chape lissée"
          ],
          surface: "12 m²",
          cout: { fcfa: 600_000, usd: 1_000 }
        },
        {
          nom: "Toiture",
          responsable: "Entreprise GC",
          duree: "4 jours",
          option1: "Dalle béton 12cm + étanchéité",
          option2: "Charpente métallique + bac acier",
          cout: { fcfa: 800_000, usd: 1_333 }
        },
        {
          nom: "Enduits et finitions",
          responsable: "Entreprise GC",
          duree: "4 jours",
          travaux: [
            "Enduit ciment intérieur",
            "Enduit extérieur",
            "Peinture"
          ],
          cout: { fcfa: 400_000, usd: 667 }
        },
        {
          nom: "Menuiseries",
          responsable: "Entreprise GC",
          duree: "2 jours",
          elements: [
            "Porte métallique 90x210cm",
            "Grilles ventilation",
            "Serrure 3 points"
          ],
          cout: { fcfa: 300_000, usd: 500 }
        }
      ],
      
      jalons: [{
        nom: "Local technique terminé",
        semaine: 20,
        criteres: [
          "Clos et couvert",
          "Enduits terminés",
          "Porte posée"
        ]
      }]
    },
    
    // SEMAINES 19-22 : Voirie
    semaines19_22: {
      periode: "Semaines 19-22",
      titre: "Voirie et Circulation",
      
      taches: [
        {
          nom: "Couche de forme",
          responsable: "Entreprise VRD",
          duree: "3 jours",
          materiau: "Tout-venant 0/31.5",
          epaisseur: "20 cm",
          volume: "90 m³",
          cout: { fcfa: 1_350_000, usd: 2_250 }
        },
        {
          nom: "Couche fondation",
          responsable: "Entreprise VRD",
          duree: "3 jours",
          materiau: "Grave non traitée 0/20",
          epaisseur: "15 cm",
          volume: "67.5 m³",
          cout: { fcfa: 1_800_000, usd: 3_000 }
        },
        {
          nom: "Couche de base",
          responsable: "Entreprise VRD",
          duree: "2 jours",
          materiau: "Grave bitume GB3",
          epaisseur: "8 cm",
          volume: "36 m³",
          cout: { fcfa: 2_160_000, usd: 3_600 }
        },
        {
          nom: "Couche roulement",
          responsable: "Entreprise VRD",
          duree: "2 jours",
          materiau: "Béton bitumineux BB 0/10",
          epaisseur: "5 cm",
          volume: "22.5 m³",
          temperature: "140-160°C pose",
          cout: { fcfa: 2_250_000, usd: 3_750 }
        },
        {
          nom: "Bordures",
          responsable: "Entreprise VRD",
          duree: "2 jours",
          type: "Bordures T2 béton",
          longueur: "85 ml",
          cout: { fcfa: 680_000, usd: 1_133 }
        },
        {
          nom: "Drainage eaux pluviales",
          responsable: "Entreprise VRD",
          duree: "4 jours",
          elements: [
            "Caniveaux 40 ml",
            "Regards 4 unités",
            "Collecteur Ø200 (35m)",
            "Séparateur hydrocarbures"
          ],
          cout: { fcfa: 2_800_000, usd: 4_667 }
        },
        {
          nom: "Marquage au sol",
          responsable: "Entreprise VRD",
          duree: "2 jours",
          travaux: [
            "10 places stationnement",
            "Flèches directionnelles",
            "Passages piétons",
            "Logos VE"
          ],
          cout: { fcfa: 450_000, usd: 750 }
        }
      ],
      
      controles: [
        {
          type: "Essais compactage",
          nombre: 10,
          norme: "NF P 98-086"
        },
        {
          type: "Contrôle épaisseurs",
          methode: "Carottage (2 carottes)"
        }
      ],
      
      jalons: [{
        nom: "Voirie achevée",
        semaine: 22,
        criteres: [
          "Revêtement terminé",
          "Drainage opérationnel",
          "Marquage réalisé"
        ],
        cheminCritique: true
      }]
    }
  }
};

// Export par défaut
export default planningPhasageData_Part2;
