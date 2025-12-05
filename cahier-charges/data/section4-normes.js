/**
 * SECTION 4 : NORMES ET RÉGLEMENTATIONS
 * Cahier des Charges - Station de Recharge VE
 * 
 * Ensemble des normes, réglementations et standards applicables
 * au projet de construction et d'exploitation de la station de recharge.
 */

export const normesReglementationsData = {
  // ============================================================================
  // 1. CADRE RÉGLEMENTAIRE NATIONAL (TOGO)
  // ============================================================================
  reglementationNationale: {
    titre: "Réglementation Nationale Togolaise",
    
    autorisationsAdministratives: {
      categorie: "Autorisations et Permis",
      
      documents: [
        {
          nom: "Permis de construire",
          autorite: "Mairie de Lomé - Service d'Urbanisme",
          delaiObtention: "2-3 mois",
          validite: "3 ans",
          pieces: [
            "Demande sur formulaire officiel",
            "Plans architecturaux (masse, façades, coupes)",
            "Plan de situation cadastral",
            "Note descriptive du projet",
            "Justificatif de propriété du terrain",
            "Étude d'impact environnemental (si requis)"
          ],
          cout: { fcfa: 150_000, usd: 250 }
        },
        {
          nom: "Autorisation de raccordement CEET",
          autorite: "Compagnie Énergie Électrique du Togo",
          delaiObtention: "1-2 mois",
          conditions: [
            "Demande de puissance (400 kW)",
            "Plans électriques du projet",
            "Schéma unifilaire",
            "Étude de faisabilité technique CEET"
          ],
          coutRaccordement: {
            fcfa: 3_600_000,
            usd: 6_000,
            description: "Selon distance et puissance"
          }
        },
        {
          nom: "Autorisation d'exploitation commerciale",
          autorite: "Ministère du Commerce",
          delaiObtention: "1 mois",
          pieces: [
            "Registre de commerce",
            "Statuts de la société",
            "Attestation fiscale",
            "Justificatif des locaux"
          ]
        },
        {
          nom: "Certificat de conformité environnementale",
          autorite: "Agence Nationale de Gestion de l'Environnement (ANGE)",
          delaiObtention: "2-3 mois",
          exigence: "Étude d'impact environnemental (EIE)",
          cout: { fcfa: 500_000, usd: 833 }
        },
        {
          nom: "Autorisation d'occuper le domaine public",
          autorite: "Mairie ou Direction des Routes (si voie publique)",
          delaiObtention: "1-2 mois",
          redevance: "Annuelle selon superficie"
        }
      ]
    },
    
    codesReglements: {
      categorie: "Codes et Règlements Applicables",
      
      textes: [
        {
          nom: "Code de l'Urbanisme du Togo",
          reference: "Loi n°2018-024",
          application: [
            "Règles d'implantation",
            "Distances aux limites",
            "Hauteur des constructions",
            "Coefficient d'occupation des sols (COS)"
          ]
        },
        {
          nom: "Code de l'Environnement",
          reference: "Loi n°2008-005",
          application: [
            "Études d'impact environnemental",
            "Gestion des déchets",
            "Pollution sonore",
            "Protection des ressources"
          ]
        },
        {
          nom: "Code du Travail",
          reference: "Loi n°2006-010",
          application: [
            "Sécurité des travailleurs",
            "Durée du travail",
            "Protection sociale",
            "Médecine du travail"
          ]
        },
        {
          nom: "Réglementation Électrique Nationale",
          autorite: "CEET et ARE (Autorité de Régulation de l'Électricité)",
          application: [
            "Normes d'installation électrique",
            "Sécurité des personnes",
            "Qualité de l'électricité",
            "Tarification"
          ]
        }
      ]
    },
    
    fiscalite: {
      categorie: "Régime Fiscal et Douanier",
      
      taxes: [
        {
          nom: "TVA",
          taux: "18%",
          application: "Travaux et équipements",
          recuperation: "Si société assujettie"
        },
        {
          nom: "Droits de douane",
          taux: "5-20%",
          application: "Équipements importés (bornes, TGBT)",
          exoneration: "Possible si projet d'utilité publique"
        },
        {
          nom: "Taxe professionnelle",
          base: "Chiffre d'affaires",
          taux: "Variable selon activité",
          periodicite: "Annuelle"
        }
      ],
      
      incitationsInvestissement: {
        codeInvestissement: "Loi n°2012-001",
        avantages: [
          "Exonération droits de douane (équipements)",
          "Réduction impôt sur sociétés (5 ans)",
          "Exonération patente (3 ans)",
          "Procédures simplifiées"
        ],
        conditions: [
          "Investissement > 50 M FCFA",
          "Création d'emplois",
          "Transfert de technologie",
          "Agrément préalable"
        ]
      }
    }
  },

  // ============================================================================
  // 2. NORMES ÉLECTRIQUES INTERNATIONALES
  // ============================================================================
  normesElectriques: {
    titre: "Normes Électriques Applicables",
    
    installationsElectriques: {
      categorie: "Installations Électriques Basse Tension",
      
      normes: [
        {
          reference: "NF C 15-100",
          titre: "Installations électriques à basse tension",
          version: "2021",
          application: [
            "Dimensionnement des installations",
            "Protection contre contacts directs/indirects",
            "Mise à la terre",
            "Protection contre surintensités",
            "Schémas de liaison à la terre (TT, TN, IT)"
          ],
          articlesImportants: [
            {
              article: "771",
              sujet: "Installations de recharge VE",
              exigences: [
                "Protection différentielle 30 mA type A ou B",
                "Dispositif de coupure d'urgence",
                "Mise à la terre ≤ 100 Ω",
                "Protection contre surcharges"
              ]
            },
            {
              article: "443",
              sujet: "Protection contre surtensions",
              exigences: [
                "Parafoudres Type 1 + Type 2",
                "Coordination des protections",
                "Distance de protection"
              ]
            }
          ]
        },
        {
          reference: "IEC 60364",
          titre: "Installations électriques des bâtiments",
          equivalence: "Norme internationale (base NF C 15-100)",
          parties: [
            "IEC 60364-4-41 : Protection contre les chocs électriques",
            "IEC 60364-5-54 : Mise à la terre et conducteurs de protection",
            "IEC 60364-7-722 : Alimentation VE"
          ]
        }
      ]
    },
    
    bornesRecharge: {
      categorie: "Normes Spécifiques Bornes de Recharge",
      
      normes: [
        {
          reference: "IEC 61851-1",
          titre: "Système de charge conductive pour véhicules électriques - Partie 1: Exigences générales",
          version: "2017",
          contenu: [
            "Classification des modes de charge (Mode 1-4)",
            "Fonctions de contrôle et protection",
            "Communication véhicule-borne",
            "Sécurité des personnes",
            "Essais et vérifications"
          ],
          modesCharge: [
            {
              mode: "Mode 3",
              description: "Charge AC avec communication (IEC 62196)",
              tension: "230V AC monophasé / 400V AC triphasé",
              application: "Bornes AC 21kW du projet"
            },
            {
              mode: "Mode 4",
              description: "Charge DC avec communication (protocole CHAdeMO, CCS)",
              tension: "DC jusqu'à 1000V",
              application: "Bornes DC 60kW et 120kW du projet"
            }
          ]
        },
        {
          reference: "IEC 61851-21-2",
          titre: "Exigences pour bornes de recharge AC raccordées au réseau électrique",
          application: "Bornes AC 21kW",
          exigences: [
            "Qualité de l'énergie (harmoniques, flicker)",
            "Protection réseau",
            "Essais EMC",
            "Raccordement au réseau"
          ]
        },
        {
          reference: "IEC 61851-23",
          titre: "Stations de charge DC pour véhicules électriques",
          application: "Bornes DC 60kW et 120kW",
          exigences: [
            "Caractéristiques de sortie DC",
            "Communication CAN (CHAdeMO, CCS)",
            "Isolation galvanique",
            "Ondulation résiduelle DC"
          ]
        },
        {
          reference: "IEC 62196",
          titre: "Connecteurs pour véhicules électriques",
          parties: [
            {
              partie: "IEC 62196-1",
              sujet: "Exigences générales",
              contenu: "Caractéristiques mécaniques, électriques, environnementales"
            },
            {
              partie: "IEC 62196-2",
              sujet: "Connecteurs AC",
              types: [
                "Type 1 (SAE J1772) - Amérique du Nord/Japon",
                "Type 2 (Mennekes) - Europe - **UTILISÉ AU PROJET**",
                "Type 3 (obsolète)"
              ]
            },
            {
              partie: "IEC 62196-3",
              sujet: "Connecteurs DC",
              types: [
                "CHAdeMO - Japon",
                "CCS Combo 2 - Europe/International - **UTILISÉ AU PROJET**",
                "GB/T - Chine"
              ]
            }
          ]
        }
      ]
    },
    
    communicationDonnees: {
      categorie: "Communication et Interopérabilité",
      
      protocoles: [
        {
          nom: "OCPP (Open Charge Point Protocol)",
          version: "1.6J / 2.0.1",
          description: "Protocole de communication borne ↔ système supervision",
          fonctions: [
            "Démarrage/arrêt de charge",
            "Authentification utilisateurs",
            "Monitoring en temps réel",
            "Gestion tarifaire",
            "Mise à jour firmware"
          ],
          normeAssociee: "Open Charge Alliance"
        },
        {
          nom: "ISO 15118",
          titre: "Communication véhicule-borne (V2G)",
          versions: [
            "ISO 15118-2 : Spécifications réseau et application",
            "ISO 15118-3 : Couche physique et liaison",
            "ISO 15118-20 : Cas d'usage avancés (V2G, Plug & Charge)"
          ],
          fonctions: [
            "Plug & Charge (authentification automatique)",
            "Charge bidirectionnelle (V2G)",
            "Charge intelligente",
            "Optimisation tarifaire"
          ],
          statut: "Recommandé pour bornes DC"
        },
        {
          nom: "Modbus TCP/IP",
          description: "Communication avec TGBT et équipements",
          usage: "Monitoring énergie, load balancing"
        }
      ]
    },
    
    cybersecurite: {
      categorie: "Cybersécurité et Protection des Données",
      
      normes: [
        {
          reference: "IEC 62443",
          titre: "Sécurité des systèmes d'automatisation industriels",
          application: "Système de supervision et bornes connectées",
          niveaux: [
            "SL 1 : Protection contre accès non autorisés",
            "SL 2 : Protection contre menaces délibérées (recommandé)"
          ]
        },
        {
          reference: "ISO/IEC 27001",
          titre: "Système de management de la sécurité de l'information",
          application: "Plateforme de gestion et données clients",
          exigences: [
            "Politique de sécurité",
            "Gestion des accès",
            "Chiffrement des données",
            "Sauvegarde et continuité"
          ]
        },
        {
          legislation: "RGPD / Loi Informatique et Libertés",
          application: "Protection données personnelles utilisateurs",
          exigences: [
            "Consentement explicite",
            "Droit accès/rectification/suppression",
            "Sécurisation données",
            "Notification violation données (72h)"
          ]
        }
      ]
    }
  },

  // ============================================================================
  // 3. NORMES GÉNIE CIVIL ET CONSTRUCTION
  // ============================================================================
  normesGenieCivil: {
    titre: "Normes Génie Civil et Construction",
    
    structuresBeton: {
      categorie: "Béton Armé et Structures",
      
      normes: [
        {
          reference: "DTU 13.12",
          titre: "Règles pour le calcul des fondations superficielles",
          application: "Fondations bornes et local technique",
          contenu: [
            "Détermination capacité portante",
            "Calcul des tassements",
            "Justification à l'ELS et ELU",
            "Règles de ferraillage"
          ]
        },
        {
          reference: "DTU 21",
          titre: "Exécution des ouvrages en béton",
          application: "Tous ouvrages béton armé",
          parties: [
            "DTU 21 : Règles générales",
            "Classe d'exposition selon EN 206",
            "Enrobage des armatures",
            "Coffrages et étaiements"
          ]
        },
        {
          reference: "Eurocode 2 (EN 1992)",
          titre: "Calcul des structures en béton",
          application: "Dimensionnement fondations et local",
          methode: "Méthode états limites"
        },
        {
          reference: "BAEL 91 modifié 99",
          titre: "Règles techniques de conception béton armé (alternative)",
          statut: "Encore utilisé si pas Eurocode"
        }
      ]
    },
    
    voirieReseaux: {
      categorie: "Voirie et Réseaux Divers (VRD)",
      
      normes: [
        {
          reference: "NF P 98-086",
          titre: "Dimensionnement des chaussées routières",
          application: "Plateforme de stationnement",
          classes: [
            "Classe T5 : Véhicules légers (retenue pour projet)",
            "PL : Poids lourds (si bus électriques)"
          ]
        },
        {
          reference: "NF EN 12620",
          titre: "Granulats pour béton",
          application: "Grave non traitée, tout-venant"
        },
        {
          reference: "NF P 98-331",
          titre: "Mise en œuvre des enrobés",
          application: "Revêtement bitumineux",
          temperature: "140-160°C à la pose"
        },
        {
          reference: "Fascicule 70",
          titre: "Ouvrages d'assainissement",
          application: "Drainage eaux pluviales",
          dimensionnement: "Pluie décennale minimum"
        }
      ]
    },
    
    reseauxEnterres: {
      categorie: "Réseaux Électriques Enterrés",
      
      normes: [
        {
          reference: "NF C 13-200",
          titre: "Installations électriques à haute tension - Règles",
          application: "Si transformateur HT/BT sur site (non prévu)"
        },
        {
          reference: "NF C 13-100",
          titre: "Postes de livraison",
          application: "Raccordement CEET"
        },
        {
          reference: "Décret n°91-1147",
          titre: "Exécution des travaux à proximité de réseaux",
          application: "Tranchées et fouilles",
          exigences: [
            "Déclaration d'Intention de Commencement de Travaux (DICT)",
            "Demande de Renseignements (DT)",
            "Respect distances sécurité",
            "Présence exploitant si sensible"
          ]
        }
      ]
    }
  },

  // ============================================================================
  // 4. NORMES SÉCURITÉ ET ENVIRONNEMENT
  // ============================================================================
  normesSecurite: {
    titre: "Sécurité, Santé et Environnement",
    
    securiteIncendie: {
      categorie: "Protection contre l'Incendie",
      
      normes: [
        {
          reference: "NF S 61-932",
          titre: "Règles d'installation des systèmes de détection incendie",
          application: "Local technique",
          equipements: [
            "Détecteurs de fumée",
            "Alarme sonore",
            "Désenfumage"
          ]
        },
        {
          reference: "NF EN 3",
          titre: "Extincteurs d'incendie portatifs",
          application: "Station de recharge",
          exigences: [
            "1 extincteur CO2 6kg (local technique)",
            "2 extincteurs poudre ABC 9kg (extérieur)",
            "Signalétique conforme NF X 08-003"
          ]
        },
        {
          reference: "Arrêté du 10 novembre 1976",
          titre: "Lutte contre l'incendie des bâtiments d'habitation",
          adaptation: "Local technique (< 15m²)",
          exigences: [
            "Porte coupe-feu 1/2h",
            "Matériaux M0 ou A1 (incombustibles)"
          ]
        }
      ]
    },
    
    securiteElectrique: {
      categorie: "Sécurité des Travailleurs - Électricité",
      
      reglementation: [
        {
          reference: "NF C 18-510",
          titre: "Opérations sur les ouvrages et installations électriques",
          application: "Personnel d'exploitation et maintenance",
          habilitations: [
            "B1V / B2V : Chargé de travaux BT",
            "BR : Chargé d'intervention BT",
            "BC : Chargé de consignation",
            "H0V : Personnel non-électricien travaux voisinage"
          ],
          recyclage: "Tous les 3 ans"
        },
        {
          reference: "Décret n°88-1056",
          titre: "Protection des travailleurs dans établissements soumis au Code du Travail",
          application: "Conception et exploitation",
          exigences: [
            "Personnel formé et habilité",
            "Consignation avant intervention",
            "EPI adaptés",
            "VAT (Vérificateur d'Absence de Tension)"
          ]
        }
      ]
    },
    
    environnement: {
      categorie: "Protection de l'Environnement",
      
      normes: [
        {
          reference: "ISO 14001",
          titre: "Système de management environnemental",
          application: "Gestion environnementale du projet (optionnel)",
          benefices: [
            "Réduction impacts environnementaux",
            "Conformité réglementaire",
            "Image positive"
          ]
        },
        {
          legislation: "Gestion des déchets de chantier",
          textes: [
            "Directive européenne 2008/98/CE",
            "Loi togolaise sur déchets"
          ],
          obligations: [
            "Tri sélectif (inertes, DIB, dangereux)",
            "Traçabilité (BSD - Bordereau Suivi Déchets)",
            "Valorisation prioritaire",
            "Élimination contrôlée"
          ]
        },
        {
          reference: "ISO 50001",
          titre: "Système de management de l'énergie",
          application: "Optimisation consommation station (optionnel)",
          avantages: [
            "Réduction coûts énergétiques",
            "Performance énergétique",
            "Certification"
          ]
        }
      ]
    },
    
    accessibilite: {
      categorie: "Accessibilité Personnes à Mobilité Réduite",
      
      normes: [
        {
          reference: "Loi n°2005-102 (France - référence)",
          titre: "Égalité des droits et des chances des personnes handicapées",
          adaptation: "À appliquer selon réglementation togolaise",
          exigences: [
            "1 place PMR minimum (3.3 x 5 m)",
            "Cheminement accessible",
            "Pente max 5%",
            "Ressaut max 2 cm",
            "Borne accessible (hauteur, lisibilité)",
            "Signalétique adaptée"
          ]
        }
      ]
    }
  },

  // ============================================================================
  // 5. STANDARDS TECHNIQUES ET QUALITÉ
  // ============================================================================
  standardsQualite: {
    titre: "Standards Techniques et Management Qualité",
    
    qualite: {
      categorie: "Management de la Qualité",
      
      normes: [
        {
          reference: "ISO 9001:2015",
          titre: "Système de management de la qualité",
          application: "Entreprises et maîtrise d'œuvre (recommandé)",
          principes: [
            "Orientation client",
            "Leadership",
            "Implication du personnel",
            "Approche processus",
            "Amélioration continue"
          ],
          benefices: [
            "Qualité constante",
            "Satisfaction client",
            "Réduction non-conformités"
          ]
        }
      ]
    },
    
    certifications: {
      categorie: "Certifications Équipements",
      
      marquages: [
        {
          nom: "Marquage CE",
          description: "Conformité aux directives européennes",
          application: "Toutes bornes de recharge",
          directives: [
            "Directive Basse Tension 2014/35/UE",
            "Directive CEM 2014/30/UE",
            "Directive RoHS 2011/65/UE"
          ],
          obligation: "Obligatoire pour mise sur marché UE"
        },
        {
          nom: "Certification NF Électricité Performance",
          description: "Qualité et performance bornes (France)",
          organisme: "AFNOR Certification",
          avantages: [
            "Garantie qualité",
            "Éligibilité subventions (en France)"
          ],
          statut: "Recommandé mais non obligatoire au Togo"
        },
        {
          nom: "Certification IECEE CB Scheme",
          description: "Reconnaissance internationale équipements électriques",
          organisme: "CEI (Commission Électrotechnique Internationale)",
          portee: "Facilite acceptation dans plusieurs pays"
        }
      ]
    },
    
    essaisVerifications: {
      categorie: "Essais et Vérifications",
      
      procedures: [
        {
          type: "Essais de réception usine (FAT)",
          norme: "IEC 61851",
          equipements: "Bornes de recharge",
          tests: [
            "Fonctionnement général",
            "Sécurité électrique",
            "Communication",
            "Protection IP",
            "Tests climatiques"
          ],
          documents: "Rapport d'essais + certificat conformité"
        },
        {
          type: "Essais sur site (SAT)",
          norme: "NF C 15-100",
          tests: [
            "Continuité conducteurs protection",
            "Résistance d'isolement (≥ 1 MΩ)",
            "Résistance de terre (≤ 100 Ω pour TT)",
            "Fonctionnement différentiels",
            "Vérification protection surcharges",
            "Tests fonctionnels bornes"
          ],
          rapports: "PV d'essais signé par bureau de contrôle"
        },
        {
          type: "Contrôles périodiques",
          frequence: "Annuelle",
          norme: "NF C 15-100",
          verification: [
            "État des installations",
            "Fonctionnement protections",
            "Mesure résistance terre",
            "Révision équipements"
          ],
          organisme: "Organisme accrédité COFRAC ou équivalent"
        }
      ]
    }
  },

  // ============================================================================
  // 6. RÉCAPITULATIF DES NORMES PRINCIPALES
  // ============================================================================
  recapitulatif: {
    normesClefs: [
      {
        domaine: "Installations électriques BT",
        norme: "NF C 15-100",
        statut: "Obligatoire"
      },
      {
        domaine: "Bornes de recharge VE",
        norme: "IEC 61851 (toutes parties)",
        statut: "Obligatoire"
      },
      {
        domaine: "Connecteurs AC",
        norme: "IEC 62196-2 Type 2",
        statut: "Obligatoire"
      },
      {
        domaine: "Connecteurs DC",
        norme: "IEC 62196-3 CCS Combo 2",
        statut: "Obligatoire"
      },
      {
        domaine: "Communication borne-système",
        norme: "OCPP 1.6J / 2.0.1",
        statut: "Fortement recommandé"
      },
      {
        domaine: "Béton armé",
        norme: "Eurocode 2 (EN 1992) ou BAEL 91",
        statut: "Obligatoire"
      },
      {
        domaine: "Voirie",
        norme: "NF P 98-086",
        statut: "Recommandé"
      },
      {
        domaine: "Sécurité incendie",
        norme: "NF S 61-932",
        statut: "Obligatoire"
      },
      {
        domaine: "Habilitation électrique",
        norme: "NF C 18-510",
        statut: "Obligatoire"
      },
      {
        domaine: "Marquage équipements",
        norme: "Marquage CE",
        statut: "Obligatoire"
      }
    ],
    
    autorisationsObligatoires: [
      "Permis de construire",
      "Autorisation raccordement CEET",
      "Certificat conformité environnementale",
      "Autorisation exploitation commerciale"
    ],
    
    delaiTotalAutorisations: "3-6 mois",
    
    coutAutorisations: {
      fcfa: 650_000,
      usd: 1_083
    },
    
    referentielDocumentaire: {
      description: "Tous les documents normatifs doivent être disponibles sur le chantier",
      conservation: "Dossier réglementaire pendant toute la durée d'exploitation"
    }
  }
};

// Export par défaut
export default normesReglementationsData;
