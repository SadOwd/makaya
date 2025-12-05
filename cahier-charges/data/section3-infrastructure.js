/**
 * SECTION 3 : INFRASTRUCTURE & GÉNIE CIVIL
 * Cahier des Charges - Station de Recharge VE
 * 
 * Description détaillée de tous les travaux d'infrastructure et de génie civil
 * nécessaires pour la construction de la station de recharge.
 */

export const infrastructureData = {
  // ============================================================================
  // 1. TERRASSEMENT ET FONDATIONS
  // ============================================================================
  terrassement: {
    titre: "Terrassement et Préparation du Terrain",
    surfaceTotale: {
      valeur: 500,
      unite: "m²",
      description: "Surface totale de la station"
    },
    
    travaux: [
      {
        nom: "Décapage et déblaiement",
        description: "Enlèvement de la terre végétale et nivellement du terrain",
        profondeur: "30 cm",
        surface: "500 m²",
        volume: "150 m³",
        delai: "3 jours",
        prerequis: ["Autorisation de construire", "Bornage du terrain"],
        equipements: ["Pelle mécanique", "Camions benne"]
      },
      {
        nom: "Compactage du sol",
        description: "Compactage du fond de fouille pour assurer la stabilité",
        densite: "95% de l'Optimum Proctor Modifié",
        epaisseur: "20 cm de grave compactée",
        controles: [
          "Essai de densité tous les 100 m²",
          "Vérification de la portance",
          "Test de perméabilité"
        ]
      },
      {
        nom: "Fouilles pour fondations",
        description: "Excavation pour les fondations des bornes et du local technique",
        details: [
          {
            element: "Fondations bornes AC",
            dimensions: "80x80x60 cm",
            nombre: 5,
            volumeUnitaire: "0.384 m³",
            volumeTotal: "1.92 m³"
          },
          {
            element: "Fondations bornes DC 60kW",
            dimensions: "100x100x80 cm",
            nombre: 3,
            volumeUnitaire: "0.8 m³",
            volumeTotal: "2.4 m³"
          },
          {
            element: "Fondations bornes DC 120kW",
            dimensions: "120x120x100 cm",
            nombre: 2,
            volumeUnitaire: "1.44 m³",
            volumeTotal: "2.88 m³"
          },
          {
            element: "Fondations local technique",
            dimensions: "4x3x0.8 m",
            volumeTotal: "9.6 m³"
          }
        ],
        volumeTotalFouilles: "16.8 m³"
      }
    ],
    
    coutEstime: {
      terrassementGeneral: { fcfa: 1_500_000, usd: 2_500 },
      compactage: { fcfa: 800_000, usd: 1_333 },
      fouilles: { fcfa: 1_200_000, usd: 2_000 },
      total: { fcfa: 3_500_000, usd: 5_833 }
    }
  },

  // ============================================================================
  // 2. FONDATIONS ET STRUCTURES
  // ============================================================================
  fondations: {
    titre: "Fondations et Structures Porteuses",
    
    fondationsBornes: {
      materiaux: {
        beton: "Béton dosé à 350 kg/m³",
        ferraillage: "Acier HA FeE500 (8-12 mm)",
        etancheite: "Membrane bitumineuse"
      },
      
      specifications: [
        {
          type: "Bornes AC 21kW",
          nombre: 5,
          dimensions: {
            longueur: "80 cm",
            largeur: "80 cm",
            profondeur: "60 cm",
            volume: "0.384 m³"
          },
          ferraillage: {
            semelle: "Treillis soudé ST25C (150x150 mm)",
            attentes: "4 HA 12 verticaux pour fixation borne",
            etriers: "HA 8 tous les 15 cm"
          },
          charge: {
            poidsBorne: "150 kg",
            chargeExploitation: "200 kg",
            coefficientSecurite: 2.5,
            chargeCalcul: "875 kg"
          }
        },
        {
          type: "Bornes DC 60kW",
          nombre: 3,
          dimensions: {
            longueur: "100 cm",
            largeur: "100 cm",
            profondeur: "80 cm",
            volume: "0.8 m³"
          },
          ferraillage: {
            semelle: "Treillis soudé ST35C (150x150 mm)",
            attentes: "6 HA 14 verticaux pour fixation borne",
            etriers: "HA 10 tous les 12 cm"
          },
          charge: {
            poidsBorne: "250 kg",
            chargeExploitation: "300 kg",
            coefficientSecurite: 2.5,
            chargeCalcul: "1375 kg"
          }
        },
        {
          type: "Bornes DC 120kW",
          nombre: 2,
          dimensions: {
            longueur: "120 cm",
            largeur: "120 cm",
            profondeur: "100 cm",
            volume: "1.44 m³"
          },
          ferraillage: {
            semelle: "Treillis soudé ST40C (150x150 mm)",
            attentes: "8 HA 16 verticaux pour fixation borne",
            etriers: "HA 12 tous les 10 cm"
          },
          charge: {
            poidsBorne: "350 kg",
            chargeExploitation: "400 kg",
            coefficientSecurite: 2.5,
            chargeCalcul: "1875 kg"
          }
        }
      ],
      
      protectionCables: {
        description: "Fourreaux pour passages de câbles",
        materiau: "PVC Ø110 mm",
        disposition: "Enterrés dans fondations à 40 cm de profondeur",
        nombre: "3 fourreaux par borne (alimentation, communication, réserve)"
      }
    },
    
    localTechnique: {
      description: "Bâtiment abritant le TGBT et les équipements de supervision",
      dimensions: {
        longueur: "4 m",
        largeur: "3 m",
        hauteur: "2.8 m",
        surfaceInterieure: "12 m²"
      },
      
      fondations: {
        type: "Semelle filante périphérique",
        dimensions: "40x60 cm",
        profondeur: "80 cm",
        beton: "Béton dosé à 350 kg/m³",
        ferraillage: "Acier HA 12 longitudinal + étriers HA 8"
      },
      
      structure: {
        murs: {
          materiaux: "Parpaings creux 20x20x50 cm",
          epaisseur: "20 cm",
          enduit: "Enduit ciment intérieur et extérieur",
          peinture: "Peinture acrylique blanche (intérieur) et grise (extérieur)"
        },
        dalle: {
          type: "Dalle béton armé",
          epaisseur: "15 cm",
          ferraillage: "Treillis soudé ST25C",
          finition: "Chape lissée"
        },
        toiture: {
          type: "Dalle béton ou charpente métallique",
          couverture: "Bac acier ou tuiles béton",
          isolation: "Laine de verre 100 mm",
          etancheite: "Membrane EPDM"
        }
      },
      
      amenagements: {
        porte: {
          type: "Porte métallique sécurisée",
          dimensions: "90x210 cm",
          serrure: "3 points + cylindre haute sécurité",
          protection: "Peinture anticorrosion"
        },
        ventilation: {
          type: "Ventilation naturelle haute et basse",
          grilles: "Grilles métalliques anti-intrusion",
          surface: "0.5 m² (haute) + 0.5 m² (basse)"
        },
        eclairage: {
          type: "Éclairage LED",
          puissance: "2x18W",
          commande: "Interrupteur + détecteur de présence"
        },
        prisesCourant: {
          nombre: 4,
          type: "Prises 16A 2P+T",
          protection: "Disjoncteur différentiel 30mA"
        }
      }
    },
    
    coutEstime: {
      fondationsBornes: { fcfa: 4_200_000, usd: 7_000 },
      localTechnique: { fcfa: 6_500_000, usd: 10_833 },
      total: { fcfa: 10_700_000, usd: 17_833 }
    }
  },

  // ============================================================================
  // 3. VOIRIE ET REVÊTEMENTS
  // ============================================================================
  voirie: {
    titre: "Voirie, Circulation et Revêtements",
    
    plateforme: {
      description: "Plateforme de stationnement et de circulation",
      surfaceTotale: "450 m²",
      
      couches: [
        {
          nom: "Couche de forme",
          materiau: "Tout-venant 0/31.5 compacté",
          epaisseur: "20 cm",
          volume: "90 m³",
          role: "Répartition des charges et drainage"
        },
        {
          nom: "Couche de fondation",
          materiau: "Grave non traitée 0/20",
          epaisseur: "15 cm",
          volume: "67.5 m³",
          role: "Support de la couche de roulement"
        },
        {
          nom: "Couche de base",
          materiau: "Grave bitume GB3",
          epaisseur: "8 cm",
          volume: "36 m³",
          role: "Résistance mécanique"
        },
        {
          nom: "Couche de roulement",
          materiau: "Béton bitumineux BB 0/10",
          epaisseur: "5 cm",
          volume: "22.5 m³",
          role: "Surface de roulement et étanchéité"
        }
      ],
      
      epaisseurTotale: "48 cm",
      
      marquageSol: {
        description: "Marquage au sol pour délimitation des places",
        peinture: "Peinture routière réfléchissante jaune et blanche",
        largeurTraits: "10 cm",
        elements: [
          {
            type: "Emplacements de stationnement",
            dimensions: "2.5 x 5 m",
            nombre: 10,
            marquage: "Trait continu blanc + logo véhicule électrique"
          },
          {
            type: "Voie de circulation",
            largeur: "6 m",
            marquage: "Flèches directionnelles"
          },
          {
            type: "Zone d'attente",
            superficie: "20 m²",
            marquage: "Hachures jaunes"
          },
          {
            type: "Passage piétons",
            largeur: "3 m",
            marquage: "Bandes blanches 50 cm"
          }
        ]
      }
    },
    
    places: {
      description: "Emplacements de stationnement",
      configuration: [
        {
          type: "Places standard VE",
          nombre: 10,
          dimensions: "2.5 x 5 m",
          surfaceUnitaire: "12.5 m²",
          surfaceTotale: "125 m²",
          equipement: "1 borne de recharge par place",
          accessibilite: "Toutes accessibles"
        },
        {
          type: "Places PMR (Personnes à Mobilité Réduite)",
          nombre: 1,
          dimensions: "3.3 x 5 m",
          surfaceUnitaire: "16.5 m²",
          equipement: "Borne AC accessible",
          marquage: "Logo PMR + bande d'accès latérale 80 cm"
        }
      ]
    },
    
    drainage: {
      description: "Système de drainage des eaux pluviales",
      
      penteTerrain: "1.5% vers le réseau d'évacuation",
      
      elements: [
        {
          nom: "Caniveaux de collecte",
          type: "Caniveaux à grille fonte classe D400",
          longueur: "40 ml",
          largeur: "30 cm",
          capacite: "100 L/s"
        },
        {
          nom: "Regards de visite",
          type: "Regards béton préfabriqués",
          nombre: 4,
          dimensions: "60x60 cm",
          profondeur: "60 cm"
        },
        {
          nom: "Collecteur principal",
          materiau: "Tuyau PVC Ø200 mm",
          longueur: "35 m",
          pente: "2%"
        },
        {
          nom: "Séparateur d'hydrocarbures",
          type: "Classe 1 (< 5 mg/L)",
          capacite: "5000 L",
          bypass: "Oui (crue centennale)",
          entretien: "Vidange trimestrielle"
        }
      ],
      
      dimensionnement: {
        precipitationDecennale: "80 mm/h",
        coefficientRunoff: 0.9,
        debitPointe: "10 L/s",
        surfaceDrainage: "500 m²"
      }
    },
    
    bordures: {
      description: "Bordures de délimitation",
      type: "Bordures béton préfabriquées T2",
      dimensions: "100x20x25 cm",
      longueur: "85 ml",
      pose: "Sur lit de béton dosé à 250 kg/m³"
    },
    
    coutEstime: {
      terrassementPlateforme: { fcfa: 3_200_000, usd: 5_333 },
      revetementBitume: { fcfa: 8_100_000, usd: 13_500 },
      marquageSol: { fcfa: 450_000, usd: 750 },
      drainage: { fcfa: 2_800_000, usd: 4_667 },
      bordures: { fcfa: 680_000, usd: 1_133 },
      total: { fcfa: 15_230_000, usd: 25_383 }
    }
  },

  // ============================================================================
  // 4. RÉSEAUX ÉLECTRIQUES ENTERRÉS
  // ============================================================================
  reseauxElectriques: {
    titre: "Réseaux Électriques Enterrés",
    
    trancheesElectriques: {
      description: "Tranchées pour passage des câbles électriques",
      
      specifications: {
        profondeurStandard: "80 cm sous chaussée",
        largeurTranchee: "40 cm",
        litSable: "10 cm sous et au-dessus des câbles",
        grilleAvertissement: "Grillage rouge 'DANGER ELECTRICITE' à 30 cm",
        remblai: "Tout-venant compacté par couches de 20 cm"
      },
      
      traces: [
        {
          nom: "Tranchée principale CEET → TGBT",
          longueur: "25 m",
          cables: [
            "4x240 mm² Cu isolé PR (alimentation principale)",
            "Câble de terre 95 mm² Cu"
          ],
          fourreaux: "3x Ø160 mm PVC série lourde"
        },
        {
          nom: "Tranchées TGBT → Bornes AC",
          longueur: "120 m (total)",
          cables: "5 x (4x25 mm² Cu isolé PR + terre 16 mm²)",
          fourreaux: "Ø75 mm PVC par borne"
        },
        {
          nom: "Tranchées TGBT → Bornes DC 60kW",
          longueur: "80 m (total)",
          cables: "3 x (4x95 mm² Cu isolé PR + terre 50 mm²)",
          fourreaux: "Ø110 mm PVC par borne"
        },
        {
          nom: "Tranchées TGBT → Bornes DC 120kW",
          longueur: "60 m (total)",
          cables: "2 x (4x185 mm² Cu isolé PR + terre 95 mm²)",
          fourreaux: "Ø140 mm PVC par borne"
        }
      ],
      
      volumeTranchees: "118.4 m³",
      longueurTotale: "285 m"
    },
    
    reseauxCommunication: {
      description: "Réseaux de communication et supervision",
      
      specifications: {
        profondeur: "60 cm",
        separation: "Tranchées séparées du réseau électrique (distance min 20 cm)",
        grillage: "Grillage vert 'TELECOMMUNICATION'"
      },
      
      cables: [
        {
          type: "Fibre optique",
          specification: "12 fibres monomode OS2",
          longueur: "300 m",
          usage: "Connexion internet + supervision"
        },
        {
          type: "Câble Ethernet",
          specification: "Cat 6A FTP",
          longueur: "280 m",
          usage: "Réseau local bornes"
        },
        {
          type: "Câble coaxial",
          specification: "RG6 75Ω",
          longueur: "250 m",
          usage: "Caméras vidéosurveillance"
        }
      ],
      
      fourreaux: "Ø50 mm PEHD (3 fourreaux)"
    },
    
    chambresPassage: {
      description: "Chambres de tirage et de passage",
      type: "Regards béton préfabriqués 60x60 cm",
      nombre: 8,
      emplacement: [
        "Entrée station (point CEET)",
        "Avant TGBT",
        "Après TGBT (distribution)",
        "Zones bornes AC (2 chambres)",
        "Zones bornes DC 60kW (2 chambres)",
        "Zone bornes DC 120kW (1 chambre)"
      ],
      equipement: "Couvercle fonte verrouillable classe D400"
    },
    
    miseTerre: {
      description: "Réseau de mise à la terre",
      
      specifications: {
        resistance: "≤ 10 Ω (objectif < 5 Ω)",
        conducteur: "Cable Cu nu 50 mm²",
        profondeur: "60 cm minimum"
      },
      
      elements: [
        {
          nom: "Piquet de terre",
          type: "Piquet acier cuivré Ø20 mm",
          longueur: "2 m",
          nombre: 12,
          espacement: "3 m minimum entre piquets"
        },
        {
          nom: "Conducteur de ceinture",
          specification: "Cu nu 50 mm²",
          longueur: "150 m",
          disposition: "Maillage en fond de fouille"
        },
        {
          nom: "Barrette de mesure",
          nombre: 1,
          emplacement: "Local technique (TGBT)",
          fonction: "Contrôle périodique de la résistance"
        }
      ]
    },
    
    coutEstime: {
      trancheesElectriques: { fcfa: 4_560_000, usd: 7_600 },
      reseauxCommunication: { fcfa: 1_800_000, usd: 3_000 },
      chambresPassage: { fcfa: 1_200_000, usd: 2_000 },
      miseTerre: { fcfa: 1_680_000, usd: 2_800 },
      total: { fcfa: 9_240_000, usd: 15_400 }
    }
  },

  // ============================================================================
  // 5. AMÉNAGEMENTS PAYSAGERS ET PÉRIPHÉRIQUES
  // ============================================================================
  amenagementsPaysagers: {
    titre: "Aménagements Paysagers et Périphériques",
    
    espacesverts: {
      description: "Zones végétalisées et aménagements paysagers",
      surfaceTotale: "50 m²",
      
      elements: [
        {
          nom: "Bandes végétalisées",
          surface: "30 m²",
          composition: [
            "Gazon résistant à la sécheresse",
            "Arbustes locaux (Lauriers, Hibiscus)",
            "Paillage minéral (graviers blancs)"
          ],
          arrosage: "Goutte-à-goutte automatique"
        },
        {
          nom: "Arbres d'ombrage",
          nombre: 3,
          especes: [
            "Flamboyant (Delonix regia)",
            "Neem (Azadirachta indica)"
          ],
          hauteur: "2-3 m à la plantation",
          protection: "Tuteurs + grillage anti-animaux"
        },
        {
          nom: "Jardinières",
          nombre: 4,
          materiaux: "Béton préfabriqué",
          dimensions: "100x50x50 cm",
          plantation: "Plantes ornementales locales"
        }
      ]
    },
    
    clotureSecurite: {
      description: "Clôture périmétrique de sécurité",
      
      specifications: {
        type: "Grillage rigide soudé avec poteaux métalliques",
        hauteur: "2 m",
        maille: "50x200 mm",
        fil: "Ø5 mm galvanisé",
        couleur: "Vert RAL 6005"
      },
      
      perimetreTotal: "90 m",
      
      poteaux: {
        type: "Poteaux acier galvanisé 60x60 mm",
        espacement: "2.5 m",
        nombre: 36,
        scellement: "Béton dosé à 300 kg/m³ (30x30x40 cm)"
      },
      
      portails: {
        portailPrincipal: {
          type: "Portail coulissant motorisé",
          largeur: "6 m",
          hauteur: "2 m",
          motorisation: "24V avec batterie de secours",
          controleAcces: "Badge + code + interphone"
        },
        portailPieton: {
          type: "Portillon battant",
          largeur: "1 m",
          hauteur: "2 m",
          serrure: "Électrique avec badge"
        }
      }
    },
    
    signaletique: {
      description: "Signalétique et affichage",
      
      elements: [
        {
          type: "Totem d'entrée lumineux",
          dimensions: "3 x 2 m",
          materiaux: "Acier + panneau aluminium composite",
          eclairage: "LED RGB programmable",
          affichage: [
            "Logo MAKAYA RECHARGE",
            "Tarifs",
            "Disponibilité en temps réel"
          ]
        },
        {
          type: "Panneaux directionnels",
          nombre: 4,
          dimensions: "80 x 60 cm",
          messages: [
            "Entrée → ",
            "Sortie →",
            "Bornes AC →",
            "Bornes DC rapide →"
          ]
        },
        {
          type: "Panneaux d'information par borne",
          nombre: 10,
          dimensions: "40 x 30 cm",
          contenu: [
            "Type de borne (AC/DC)",
            "Puissance",
            "Tarif",
            "Instructions d'utilisation",
            "QR code application"
          ]
        },
        {
          type: "Signalétique de sécurité",
          nombre: 8,
          types: [
            "Danger électrique (4)",
            "Interdiction de fumer (2)",
            "Extincteur (2)"
          ]
        }
      ]
    },
    
    mobilierUrbain: {
      description: "Mobilier urbain et confort usagers",
      
      elements: [
        {
          nom: "Abri piétons",
          nombre: 1,
          dimensions: "3 x 2 m",
          structure: "Métal galvanisé",
          couverture: "Polycarbonate transparent",
          equipement: ["Banc intégré", "Éclairage LED"]
        },
        {
          nom: "Bancs",
          nombre: 3,
          materiaux: "Bois exotique traité + structure métal",
          dimensions: "180 x 60 cm"
        },
        {
          nom: "Poubelles",
          nombre: 4,
          type: "Tri sélectif (2 compartiments)",
          capacite: "100 L",
          materiau: "Acier galvanisé avec couvercle"
        },
        {
          nom: "Borne WiFi gratuit",
          nombre: 1,
          debit: "100 Mbps",
          portee: "50 m",
          affichage: "Panneau instructions connexion"
        }
      ]
    },
    
    coutEstime: {
      espacesverts: { fcfa: 1_200_000, usd: 2_000 },
      clotureSecurite: { fcfa: 3_600_000, usd: 6_000 },
      signaletique: { fcfa: 2_400_000, usd: 4_000 },
      mobilierUrbain: { fcfa: 1_800_000, usd: 3_000 },
      total: { fcfa: 9_000_000, usd: 15_000 }
    }
  },

  // ============================================================================
  // 6. RÉCAPITULATIF INFRASTRUCTURE
  // ============================================================================
  recapitulatif: {
    coutTotalInfrastructure: {
      fcfa: 47_670_000,
      usd: 79_450
    },
    
    repartition: [
      { poste: "Terrassement et Fondations", fcfa: 3_500_000, usd: 5_833, pourcentage: 7.3 },
      { poste: "Fondations Structures", fcfa: 10_700_000, usd: 17_833, pourcentage: 22.5 },
      { poste: "Voirie et Revêtements", fcfa: 15_230_000, usd: 25_383, pourcentage: 32.0 },
      { poste: "Réseaux Électriques", fcfa: 9_240_000, usd: 15_400, pourcentage: 19.4 },
      { poste: "Aménagements Paysagers", fcfa: 9_000_000, usd: 15_000, pourcentage: 18.9 }
    ],
    
    delaiRealisation: {
      total: "12 semaines",
      detail: [
        { phase: "Terrassement et fondations", duree: "3 semaines" },
        { phase: "Voirie et réseaux", duree: "4 semaines" },
        { phase: "Structures et local technique", duree: "3 semaines" },
        { phase: "Aménagements finaux", duree: "2 semaines" }
      ]
    },
    
    garanties: {
      grosOeuvre: "10 ans (décennale)",
      etancheite: "10 ans",
      revetements: "3 ans",
      equipements: "2 ans"
    }
  }
};

// Export par défaut
export default infrastructureData;
