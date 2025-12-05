/**
 * SECTION 11 : LIVRABLES ET DOCUMENTATION
 * Cahier des Charges - Station de Recharge VE
 * 
 * Liste exhaustive de tous les livrables et documents à fournir
 * tout au long du projet et après sa réalisation.
 */

export const livrablesData = {
  // ============================================================================
  // 1. LIVRABLES DE LA PHASE D'ÉTUDES
  // ============================================================================
  phaseEtudes: {
    titre: "Livrables de la Phase d'Études et Conception",
    delai: "4-6 semaines avant début travaux",
    
    etudesTechniques: {
      categorie: "Études Techniques Préalables",
      
      documents: [
        {
          nom: "Étude de faisabilité technique",
          contenu: [
            "Analyse du site et de son environnement",
            "Étude des contraintes techniques",
            "Évaluation de la capacité du réseau CEET",
            "Analyse des solutions techniques",
            "Recommandations et préconisations"
          ],
          format: "PDF",
          pages: "30-40 pages",
          annexes: [
            "Plans de situation",
            "Photos du site",
            "Résultats des mesures électriques",
            "Courrier CEET (capacité réseau)"
          ],
          validationRequise: true,
          responsable: "Bureau d'études technique"
        },
        {
          nom: "Étude géotechnique G2",
          contenu: [
            "Reconnaissance du sol (sondages)",
            "Essais de laboratoire",
            "Caractéristiques mécaniques du sol",
            "Recommandations pour fondations",
            "Niveau de la nappe phréatique"
          ],
          format: "PDF",
          pages: "15-20 pages",
          norme: "NF P94-500",
          nombreSondages: 3,
          profondeur: "5-8 m",
          validationRequise: true,
          responsable: "Laboratoire géotechnique agréé"
        },
        {
          nom: "Étude topographique",
          contenu: [
            "Plan de nivellement",
            "Implantation des ouvrages",
            "Profils en long et en travers",
            "Cubatures terrassement"
          ],
          format: "DWG + PDF",
          echelle: "1/200",
          precision: "±2 cm",
          validationRequise: true,
          responsable: "Géomètre-expert"
        },
        {
          nom: "Étude d'impact environnemental",
          contenu: [
            "Analyse de l'état initial du site",
            "Identification des impacts du projet",
            "Mesures d'évitement et de réduction",
            "Plan de gestion environnementale",
            "Programme de suivi environnemental"
          ],
          format: "PDF",
          pages: "40-50 pages",
          conformite: "Directive EIE du Togo",
          validationRequise: true,
          responsable: "Bureau d'études environnementales"
        }
      ]
    },
    
    plans: {
      categorie: "Plans et Dessins Techniques",
      
      documents: [
        {
          nom: "Plans d'exécution architecturaux",
          contenu: [
            "Plan masse général (1/500)",
            "Plan d'aménagement détaillé (1/100)",
            "Plans du local technique (1/50)",
            "Façades et coupes (1/50)",
            "Détails constructifs (1/20, 1/10)"
          ],
          format: "DWG (AutoCAD) + PDF",
          logiciel: "AutoCAD 2020 ou supérieur",
          nombrePlanches: 15,
          validationRequise: true,
          visaArchitecte: true
        },
        {
          nom: "Plans d'exécution génie civil",
          contenu: [
            "Plans de fondations (1/50)",
            "Plans de ferraillage (1/50)",
            "Plans de coffrage (1/50)",
            "Détails constructifs (1/20)",
            "Plans de voirie et VRD (1/100)"
          ],
          format: "DWG + PDF",
          nombrePlanches: 20,
          validationRequise: true,
          visaIngenieur: true,
          calculsJoints: [
            "Note de calcul béton armé",
            "Note de calcul structure métallique",
            "Note de calcul voirie"
          ]
        },
        {
          nom: "Schémas électriques",
          contenu: [
            "Schéma unifilaire général",
            "Schémas unifilaires des tableaux",
            "Schémas de principe",
            "Plans d'implantation électrique (1/100)",
            "Schémas de câblage détaillés",
            "Synoptique supervision"
          ],
          format: "DWG + PDF",
          norme: "IEC 61346",
          logiciel: "AutoCAD Electrical ou SEE Electrical",
          nombrePlanches: 25,
          validationRequise: true,
          visaIngenieur: true,
          listeMateriels: "Nomenclature complète des équipements"
        },
        {
          nom: "Plans des réseaux",
          contenu: [
            "Plan des réseaux électriques (1/100)",
            "Plan des réseaux de communication (1/100)",
            "Plan de drainage eaux pluviales (1/100)",
            "Profils en long des réseaux (1/100)",
            "Détails de chambres et regards (1/20)"
          ],
          format: "DWG + PDF",
          nombrePlanches: 12,
          validationRequise: true
        }
      ]
    },
    
    descriptifs: {
      categorie: "Descriptifs et CCTP",
      
      documents: [
        {
          nom: "CCTP Génie Civil",
          contenu: [
            "Description détaillée des travaux",
            "Spécifications techniques des matériaux",
            "Modalités d'exécution",
            "Contrôles et essais",
            "Conditions de réception"
          ],
          format: "PDF",
          pages: "60-80 pages",
          chapitres: [
            "Terrassement et VRD",
            "Gros œuvre",
            "Second œuvre",
            "Finitions"
          ]
        },
        {
          nom: "CCTP Électricité",
          contenu: [
            "Description des installations",
            "Caractéristiques des équipements",
            "Câblage et raccordements",
            "Mise en service et tests",
            "Formation et documentation"
          ],
          format: "PDF",
          pages: "50-70 pages",
          chapitres: [
            "Alimentation CEET",
            "TGBT et tableaux",
            "Bornes de recharge",
            "Supervision"
          ]
        },
        {
          nom: "CCTP VRD et Aménagements",
          contenu: [
            "Voirie et circulation",
            "Réseaux enterrés",
            "Drainage",
            "Clôture et portails",
            "Espaces verts et signalétique"
          ],
          format: "PDF",
          pages: "30-40 pages"
        }
      ]
    },
    
    coutEstime: {
      etudesTechniques: { fcfa: 2_400_000, usd: 4_000 },
      plansEtDessin: { fcfa: 1_800_000, usd: 3_000 },
      descriptifs: { fcfa: 600_000, usd: 1_000 },
      total: { fcfa: 4_800_000, usd: 8_000 }
    }
  },

  // ============================================================================
  // 2. LIVRABLES PENDANT LES TRAVAUX
  // ============================================================================
  phaseTravaux: {
    titre: "Livrables Pendant la Phase Travaux",
    periodicite: "Hebdomadaire et mensuel",
    
    rapportsAvancement: {
      categorie: "Rapports de Suivi",
      
      documents: [
        {
          nom: "Rapport hebdomadaire de chantier",
          contenu: [
            "État d'avancement des travaux",
            "Main d'œuvre présente",
            "Matériaux approvisionnés",
            "Problèmes rencontrés",
            "Photos du chantier (min 10)",
            "Planning prévisionnel semaine suivante"
          ],
          format: "PDF",
          pages: "5-8 pages",
          frequence: "Chaque vendredi",
          destinataires: [
            "Maître d'ouvrage",
            "Maître d'œuvre",
            "Bureau de contrôle"
          ],
          responsable: "Conducteur de travaux"
        },
        {
          nom: "Rapport mensuel d'avancement",
          contenu: [
            "Synthèse des travaux du mois",
            "Taux d'avancement physique et financier",
            "Analyse des écarts planning/budget",
            "Situations de travaux",
            "Photos comparatives début/fin de mois",
            "Prévisions mois suivant"
          ],
          format: "PDF + Excel",
          pages: "15-20 pages",
          frequence: "5 du mois suivant",
          validationRequise: true,
          responsable: "Chef de projet"
        },
        {
          nom: "Comptes rendus de réunions de chantier",
          contenu: [
            "Liste des participants",
            "Points abordés",
            "Décisions prises",
            "Actions à mener (qui, quoi, quand)",
            "Photos illustratives"
          ],
          format: "PDF",
          pages: "3-5 pages",
          frequence: "Après chaque réunion (hebdomadaire)",
          diffusion: "48h après réunion",
          responsable: "Maître d'œuvre"
        }
      ]
    },
    
    documentsQualite: {
      categorie: "Documents Qualité et Contrôle",
      
      documents: [
        {
          nom: "Plans d'assurance qualité (PAQ)",
          contenu: [
            "Organisation qualité du projet",
            "Procédures de contrôle",
            "Points d'arrêt et points critiques",
            "Modalités de contrôle et d'essais",
            "Traitement des non-conformités"
          ],
          format: "PDF",
          pages: "30-40 pages",
          soumission: "Avant démarrage travaux",
          validationRequise: true,
          responsable: "Entreprise principale"
        },
        {
          nom: "Fiches de contrôle et d'essais",
          contenu: [
            "Contrôles géométriques",
            "Essais de compactage",
            "Essais béton (résistance)",
            "Contrôles électriques",
            "Tests d'étanchéité"
          ],
          format: "PDF (formulaires signés)",
          nombreFiches: "Variable selon travaux",
          conservation: "Classeur qualité du chantier",
          responsable: "Laboratoire agréé + Entreprise"
        },
        {
          nom: "Procès-verbaux de réception",
          contenu: [
            "PV de réception fondations",
            "PV de réception gros œuvre",
            "PV de réception réseaux",
            "PV de réception installations électriques",
            "PV de levées de réserves"
          ],
          format: "PDF (signés par toutes parties)",
          conservation: "Original au maître d'ouvrage",
          validationRequise: true
        },
        {
          nom: "Rapports de contrôle technique",
          contenu: [
            "Vérification de la conformité aux plans",
            "Contrôle des matériaux",
            "Vérification des calculs",
            "Avis sur les propositions de l'entreprise",
            "Suivi des réserves"
          ],
          format: "PDF",
          frequence: "Mensuel + visites",
          responsable: "Bureau de contrôle agréé"
        }
      ]
    },
    
    documentsTechniques: {
      categorie: "Documents Techniques Complémentaires",
      
      documents: [
        {
          nom: "Plans de récolement",
          description: "Plans conformes à l'exécution (as-built)",
          contenu: [
            "Plans architecturaux modifiés",
            "Plans de génie civil mis à jour",
            "Plans électriques conformes",
            "Plans de réseaux réalisés"
          ],
          format: "DWG + PDF",
          couleur: "Modifications en rouge",
          delaiRemise: "Avant réception provisoire",
          nombreJeux: 3,
          responsable: "Maître d'œuvre"
        },
        {
          nom: "Notes de calcul finales",
          contenu: [
            "Calculs structures (si modifications)",
            "Calculs électriques mis à jour",
            "Dimensionnement drainage",
            "Calcul fondations"
          ],
          format: "PDF",
          visa: "Ingénieur structure",
          responsable: "Bureau d'études"
        },
        {
          nom: "Fiches techniques des équipements",
          contenu: [
            "Fiches bornes de recharge",
            "Fiches équipements TGBT",
            "Fiches supervision",
            "Certificats de conformité CE"
          ],
          format: "PDF",
          langue: "Français",
          classement: "Par équipement",
          responsable: "Fournisseurs + Entreprise"
        }
      ]
    }
  },

  // ============================================================================
  // 3. LIVRABLES DE FIN DE CHANTIER
  // ============================================================================
  finChantier: {
    titre: "Livrables de Fin de Chantier et Réception",
    delai: "Remise à la réception provisoire",
    
    dossierOuvragesExecutes: {
      nom: "Dossier des Ouvrages Exécutés (DOE)",
      description: "Compilation de tous les documents techniques du projet réalisé",
      
      composition: [
        {
          section: "1 - Plans de récolement",
          contenu: [
            "Plans architecturaux conformes à l'exécution",
            "Plans de génie civil as-built",
            "Schémas électriques finaux",
            "Plans des réseaux réalisés"
          ],
          format: "DWG + PDF",
          nombreJeux: 3
        },
        {
          section: "2 - Documents administratifs",
          contenu: [
            "Permis de construire",
            "Autorisations administratives",
            "Procès-verbaux de réception",
            "Attestations de conformité",
            "Déclaration d'achèvement de travaux"
          ],
          format: "PDF (originaux scannés)"
        },
        {
          section: "3 - Documents techniques",
          contenu: [
            "Notes de calcul finales",
            "Études techniques",
            "CCTP et descriptifs",
            "Rapports de contrôle"
          ],
          format: "PDF"
        },
        {
          section: "4 - Fiches équipements",
          contenu: [
            "Fiches techniques complètes",
            "Notices d'utilisation",
            "Certificats de conformité",
            "Agréments et certifications"
          ],
          format: "PDF",
          classement: "Par équipement"
        },
        {
          section: "5 - Garanties et assurances",
          contenu: [
            "Certificats de garantie",
            "Polices d'assurance",
            "Attestations décennales",
            "Garanties fournisseurs"
          ],
          format: "PDF (originaux au MO)"
        }
      ],
      
      support: [
        "3 classeurs papier reliés",
        "3 clés USB avec version numérique",
        "1 version sur plateforme cloud"
      ],
      
      indexation: "Table des matières détaillée avec numérotation"
    },
    
    dossierInterventionUlterieure: {
      nom: "Dossier d'Interventions Ultérieures sur l'Ouvrage (DIUO)",
      description: "Informations pour la maintenance et les interventions futures",
      
      contenu: [
        {
          chapitre: "1 - Identification de l'ouvrage",
          elements: [
            "Description générale",
            "Localisation précise",
            "Caractéristiques principales",
            "Plan de situation"
          ]
        },
        {
          chapitre: "2 - Dossier technique",
          elements: [
            "Plans de repérage",
            "Accès aux installations",
            "Localisation des organes de sécurité",
            "Modes opératoires d'intervention"
          ]
        },
        {
          chapitre: "3 - Équipements et matériels",
          elements: [
            "Liste des équipements",
            "Localisation précise",
            "Caractéristiques techniques",
            "Conditions d'accès"
          ]
        },
        {
          chapitre: "4 - Consignes de sécurité",
          elements: [
            "Risques identifiés",
            "Mesures de prévention",
            "Équipements de protection",
            "Procédures d'urgence"
          ]
        },
        {
          chapitre: "5 - Maintenance préventive",
          elements: [
            "Planning de maintenance",
            "Opérations à réaliser",
            "Fréquence des interventions",
            "Prestataires recommandés"
          ]
        }
      ],
      
      format: "Classeur A4 + version numérique",
      miseAJour: "À chaque modification significative"
    },
    
    manuels: {
      categorie: "Manuels et Notices",
      
      documents: [
        {
          nom: "Manuel d'utilisation de la station",
          contenu: [
            "Présentation générale",
            "Fonctionnement des bornes AC",
            "Fonctionnement des bornes DC",
            "Système de supervision",
            "Gestion des pannes courantes",
            "Contacts et support"
          ],
          format: "PDF illustré",
          pages: "40-50 pages",
          langue: "Français",
          nombreExemplaires: 5
        },
        {
          nom: "Manuel de maintenance",
          contenu: [
            "Programme de maintenance préventive",
            "Procédures de maintenance",
            "Diagnostic et dépannage",
            "Pièces de rechange recommandées",
            "Registres de maintenance",
            "Contacts fournisseurs et SAV"
          ],
          format: "PDF",
          pages: "60-80 pages",
          annexes: [
            "Fiches d'intervention",
            "Registres de maintenance",
            "Tableaux de bord"
          ],
          nombreExemplaires: 3
        },
        {
          nom: "Manuel de l'exploitant",
          contenu: [
            "Organisation de l'exploitation",
            "Procédures opérationnelles",
            "Gestion commerciale",
            "Supervision et reporting",
            "Gestion des incidents",
            "Relations clients"
          ],
          format: "PDF",
          pages: "30-40 pages",
          nombreExemplaires: 3
        },
        {
          nom: "Notices techniques des équipements",
          description: "Une notice par équipement principal",
          contenu: [
            "Notice bornes AC (fabricant)",
            "Notice bornes DC 60kW (fabricant)",
            "Notice bornes DC 120kW (fabricant)",
            "Notice TGBT",
            "Notice système supervision",
            "Notice load balancing"
          ],
          format: "PDF (fourni par fabricants)",
          langue: "Français ou Anglais",
          traduction: "Parties critiques traduites en français"
        }
      ]
    },
    
    formations: {
      categorie: "Documentation Formation",
      
      sessions: [
        {
          nom: "Formation exploitation",
          participants: "Gestionnaires et opérateurs (4-6 personnes)",
          duree: "2 jours",
          contenu: [
            "Utilisation de la plateforme de supervision",
            "Gestion des recharges",
            "Traitement des incidents courants",
            "Service client"
          ],
          support: "Support de formation PDF + vidéos",
          attestation: "Attestation de formation",
          responsable: "Fournisseur bornes + intégrateur"
        },
        {
          nom: "Formation maintenance",
          participants: "Techniciens maintenance (2-3 personnes)",
          duree: "3 jours",
          contenu: [
            "Fonctionnement technique des équipements",
            "Maintenance préventive",
            "Diagnostic et dépannage",
            "Sécurité électrique",
            "Utilisation des outils de diagnostic"
          ],
          support: "Manuel de maintenance + fiches techniques",
          attestation: "Certificat technique",
          responsable: "Fournisseur équipements"
        }
      ],
      
      documentsRemis: [
        "Supports de formation",
        "Vidéos tutoriels",
        "Fiches récapitulatives",
        "Attestations de formation"
      ]
    },
    
    certificationsConformite: {
      categorie: "Certificats et Attestations",
      
      documents: [
        {
          nom: "Attestation de conformité électrique",
          emetteur: "Bureau de contrôle agréé",
          reference: "Consuel ou équivalent Togo",
          contenu: [
            "Vérification conformité NF C 15-100",
            "Tests de continuité et d'isolement",
            "Mesure de la résistance de terre",
            "Vérification dispositifs de protection"
          ],
          validite: "Permanente",
          original: "Maître d'ouvrage"
        },
        {
          nom: "Certificat de conformité bornes de recharge",
          emetteur: "Fabricant + organisme certifié",
          normes: ["IEC 61851", "IEC 62196"],
          contenu: [
            "Conformité aux normes européennes",
            "Tests de sécurité",
            "Tests de performance",
            "Marquage CE"
          ],
          nombreCertificats: "1 par type de borne",
          validite: "Permanente"
        },
        {
          nom: "Attestation de conformité génie civil",
          emetteur: "Bureau de contrôle",
          contenu: [
            "Conformité aux DTU",
            "Respect des plans d'exécution",
            "Qualité des matériaux",
            "Résultats des essais"
          ]
        },
        {
          nom: "Certificat de réception CEET",
          emetteur: "Compagnie d'Électricité",
          contenu: [
            "Conformité branchement",
            "Mise en service",
            "Puissance souscrite",
            "Conditions contractuelles"
          ]
        },
        {
          nom: "Attestation assurance décennale",
          emetteur: "Entreprises principales",
          garantie: "10 ans",
          couverture: [
            "Solidité de l'ouvrage",
            "Impropriété à destination",
            "Dommages compromettant solidité"
          ],
          montantGaranti: "Valeur totale du projet"
        }
      ]
    }
  },

  // ============================================================================
  // 4. LIVRABLES POST-RÉCEPTION
  // ============================================================================
  postReception: {
    titre: "Livrables Après Réception et Pendant Exploitation",
    
    garantiePerfectionnement: {
      nom: "Documents de la Garantie de Perfectionnement (1 an)",
      duree: "12 mois après réception provisoire",
      
      documents: [
        {
          nom: "Rapport de visite de garantie",
          frequence: "Trimestriel (4 rapports)",
          contenu: [
            "État général des installations",
            "Anomalies constatées",
            "Interventions réalisées",
            "Recommandations"
          ],
          responsable: "Entreprise principale"
        },
        {
          nom: "Registre des interventions",
          description: "Suivi de toutes les interventions sous garantie",
          contenu: [
            "Date et nature intervention",
            "Constat",
            "Actions menées",
            "Pièces remplacées"
          ],
          format: "Excel + PDF",
          miseAJour: "Après chaque intervention"
        },
        {
          nom: "Rapport de levée de réserves",
          contenu: [
            "Liste des réserves émises à la réception",
            "État de traitement",
            "Justificatifs de levée",
            "Photos avant/après"
          ],
          delai: "Dans les 6 mois suivant réception"
        }
      ]
    },
    
    bilanExploitation: {
      nom: "Bilans d'Exploitation",
      periodicite: "Annuel (recommandé)",
      
      documents: [
        {
          nom: "Bilan technique annuel",
          contenu: [
            "Disponibilité des bornes",
            "Nombre de recharges effectuées",
            "Énergie délivrée",
            "Pannes et incidents",
            "Maintenance réalisée",
            "Recommandations d'amélioration"
          ],
          format: "PDF + Excel",
          pages: "15-20 pages"
        },
        {
          nom: "Bilan économique annuel",
          contenu: [
            "Chiffre d'affaires",
            "Coûts d'exploitation",
            "Résultat net",
            "Indicateurs de performance",
            "Comparaison avec prévisionnel"
          ],
          format: "Excel + PDF",
          confidentialite: "Confidentiel"
        }
      ]
    },
    
    miseAJourDocumentation: {
      nom: "Mises à Jour Documentation",
      
      elements: [
        {
          document: "Plans de récolement",
          miseAJour: "Si modifications/extensions",
          responsable: "Exploitant + Bureau d'études"
        },
        {
          document: "DIUO",
          miseAJour: "Annuelle ou si modification",
          responsable: "Coordonnateur SPS ou exploitant"
        },
        {
          document: "Manuel de maintenance",
          miseAJour: "Si nouveaux équipements ou procédures",
          responsable: "Responsable maintenance"
        },
        {
          document: "Registre de sécurité",
          miseAJour: "Permanente",
          contenu: [
            "Contrôles périodiques",
            "Interventions maintenance",
            "Incidents et accidents",
            "Formations du personnel"
          ],
          conservation: "10 ans minimum"
        }
      ]
    }
  },

  // ============================================================================
  // 5. RÉCAPITULATIF DES LIVRABLES
  // ============================================================================
  recapitulatif: {
    totalDocuments: 85,
    
    parPhase: [
      {
        phase: "Études",
        nombre: 15,
        delai: "Avant démarrage travaux"
      },
      {
        phase: "Travaux",
        nombre: 25,
        delai: "Pendant chantier"
      },
      {
        phase: "Fin de chantier",
        nombre: 35,
        delai: "À la réception provisoire"
      },
      {
        phase: "Post-réception",
        nombre: 10,
        delai: "Pendant exploitation"
      }
    ],
    
    parCategorie: [
      { categorie: "Plans et dessins", nombre: 30 },
      { categorie: "Rapports techniques", nombre: 20 },
      { categorie: "Documents qualité", nombre: 15 },
      { categorie: "Manuels et notices", nombre: 10 },
      { categorie: "Certificats", nombre: 10 }
    ],
    
    supports: {
      papier: "3 jeux complets (classeurs)",
      numerique: "3 clés USB + cloud",
      archivage: "Plateforme documentaire en ligne"
    },
    
    conservation: {
      documentsAdministratifs: "30 ans minimum",
      plansTechniques: "Durée de vie ouvrage",
      certificatsConformite: "Permanente",
      documentsMaintenance: "Durée d'exploitation",
      garanties: "Durée garantie + 5 ans"
    }
  }
};

// Export par défaut
export default livrablesData;
