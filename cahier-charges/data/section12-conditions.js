/**
 * SECTION 12 : CONDITIONS CONTRACTUELLES
 * Cahier des Charges - Station de Recharge VE
 * 
 * Conditions contractuelles, juridiques et administratives
 * du projet de construction de la station de recharge.
 */

export const conditionsContractuellesData = {
  // ============================================================================
  // 1. CADRE CONTRACTUEL GÉNÉRAL
  // ============================================================================
  cadreGeneral: {
    titre: "Cadre Contractuel et Juridique",
    
    typeMarche: {
      designation: "Marché de travaux - Construction station de recharge VE",
      nature: "Marché privé",
      mode: "Conception-Réalisation",
      procedure: "Appel d'offres restreint avec présélection",
      montant: {
        fcfa: 69_586_200,
        usd: 115_977,
        tva: "18% (Togo)",
        montantTTC: {
          fcfa: 82_111_716,
          usd: 136_853
        }
      }
    },
    
    partiesContractantes: {
      maitreOuvrage: {
        designation: "MAKAYA RECHARGE",
        forme: "À déterminer (SARL, SA, SAS)",
        representant: "Gérant ou Président",
        adresse: "Lomé, Togo",
        role: [
          "Définition des besoins",
          "Financement du projet",
          "Validation des choix techniques",
          "Réception des ouvrages",
          "Exploitation de la station"
        ]
      },
      
      maitreOeuvre: {
        designation: "Bureau d'études ou architecte",
        mission: "Complète (conception + suivi)",
        honoraires: {
          pourcentage: "8-10% du montant travaux",
          fcfa: 5_566_896,
          usd: 9_278
        },
        responsabilites: [
          "Conception du projet",
          "Établissement des plans",
          "Consultation des entreprises",
          "Direction des travaux",
          "Coordination",
          "Réception des ouvrages"
        ]
      },
      
      entreprises: {
        principal: {
          designation: "Entreprise générale",
          mission: "Tous corps d'état",
          responsabilites: [
            "Réalisation conforme aux plans",
            "Coordination sous-traitants",
            "Respect des délais",
            "Garanties",
            "Sécurité du chantier"
          ]
        },
        
        soustraitants: [
          {
            corps: "Génie civil et VRD",
            qualification: "Catégorie B minimum"
          },
          {
            corps: "Électricité et bornes de recharge",
            qualification: "Certifié IRVE (Infrastructure de Recharge VE)"
          },
          {
            corps: "Supervision et télégestion",
            qualification: "Intégrateur systèmes agréé"
          }
        ]
      },
      
      bureauControle: {
        designation: "Bureau de contrôle technique agréé",
        mission: "Contrôle technique + SPS",
        honoraires: {
          pourcentage: "2-3% du montant travaux",
          fcfa: 1_391_724,
          usd: 2_320
        },
        responsabilites: [
          "Vérification de la conception",
          "Contrôle de l'exécution",
          "Visa des ouvrages",
          "Coordination SPS",
          "Attestations de conformité"
        ]
      }
    },
    
    documentsContractuels: {
      hierarchie: [
        {
          ordre: 1,
          document: "Acte d'engagement",
          description: "Engagement de l'entreprise sur prix et délais"
        },
        {
          ordre: 2,
          document: "Cahier des Clauses Administratives Particulières (CCAP)",
          description: "Dispositions administratives et financières"
        },
        {
          ordre: 3,
          document: "Cahier des Clauses Techniques Particulières (CCTP)",
          description: "Spécifications techniques détaillées"
        },
        {
          ordre: 4,
          document: "Plans d'exécution",
          description: "Plans validés pour réalisation"
        },
        {
          ordre: 5,
          document: "Bordereau des Prix Unitaires (BPU)",
          description: "Décomposition des prix"
        },
        {
          ordre: 6,
          document: "Détail Quantitatif Estimatif (DQE)",
          description: "Quantités prévisionnelles"
        }
      ],
      
      interpretation: "En cas de contradiction entre documents, l'ordre de priorité ci-dessus prévaut"
    }
  },

  // ============================================================================
  // 2. CONDITIONS D'EXÉCUTION
  // ============================================================================
  conditionsExecution: {
    titre: "Conditions d'Exécution des Travaux",
    
    delais: {
      delaiExecution: {
        duree: "16 semaines (4 mois)",
        pointDepart: "Date de l'ordre de service",
        jalons: [
          {
            phase: "Études d'exécution et approvisionnements",
            duree: "4 semaines",
            jalon: "Plans visés + matériaux commandés"
          },
          {
            phase: "Terrassement et fondations",
            duree: "3 semaines",
            jalon: "Fondations coulées et durcies"
          },
          {
            phase: "Voirie, réseaux et local technique",
            duree: "5 semaines",
            jalon: "VRD terminés + local clos/couvert"
          },
          {
            phase: "Équipements électriques et bornes",
            duree: "3 semaines",
            jalon: "Tous équipements installés"
          },
          {
            phase: "Mise en service et tests",
            duree: "1 semaine",
            jalon: "Station opérationnelle"
          }
        ],
        penalitesRetard: {
          taux: "0.1% du montant du marché par jour calendaire",
          plafond: "10% du montant total",
          exemples: [
            {
              retard: "10 jours",
              penalite: {
                fcfa: 695_862,
                usd: 1_160
              }
            },
            {
              retard: "30 jours",
              penalite: {
                fcfa: 2_087_586,
                usd: 3_479
              }
            }
          ]
        }
      },
      
      prolongations: {
        causesRecevables: [
          "Conditions climatiques exceptionnelles (attestées par météo)",
          "Retard de fourniture du terrain aménagé",
          "Modifications demandées par le maître d'ouvrage",
          "Découvertes archéologiques ou pollutions",
          "Force majeure (guerre, catastrophe naturelle, épidémie)"
        ],
        procedure: "Demande écrite motivée sous 7 jours + pièces justificatives",
        approbation: "Accord écrit du maître d'ouvrage requis"
      }
    },
    
    modalitesPaiement: {
      deviseReglement: "FCFA (ou USD selon accord)",
      
      echeancier: [
        {
          etape: "Avance de démarrage",
          pourcentage: 15,
          montant: {
            fcfa: 10_437_930,
            usd: 17_397
          },
          condition: "Caution bancaire de restitution d'avance (même montant)",
          delai: "15 jours après ordre de service"
        },
        {
          etape: "Acompte 1 - Fondations",
          pourcentage: 20,
          montant: {
            fcfa: 13_917_240,
            usd: 23_195
          },
          condition: "Attachements signés + PV fondations",
          delai: "30 jours après validation"
        },
        {
          etape: "Acompte 2 - VRD et gros œuvre",
          pourcentage: 25,
          montant: {
            fcfa: 17_396_550,
            usd: 28_994
          },
          condition: "Attachements signés + PV avancement",
          delai: "30 jours après validation"
        },
        {
          etape: "Acompte 3 - Équipements électriques",
          pourcentage: 25,
          montant: {
            fcfa: 17_396_550,
            usd: 28_994
          },
          condition: "Bornes installées + tests préliminaires",
          delai: "30 jours après validation"
        },
        {
          etape: "Solde",
          pourcentage: 15,
          montant: {
            fcfa: 10_437_930,
            usd: 17_397
          },
          condition: "Réception provisoire sans réserves majeures",
          delai: "45 jours après réception provisoire",
          retenue: "5% en garantie de parfait achèvement (1 an)"
        }
      ],
      
      retenuGarantie: {
        montant: {
          pourcentage: 5,
          fcfa: 3_479_310,
          usd: 5_799
        },
        liberation: "Après réception définitive (1 an) et levée de toutes réserves",
        alternative: "Caution bancaire de même montant"
      },
      
      revisions: {
        formule: "Prix ferme et non révisable",
        exception: "Si dépassement délai > 3 mois pour fait du maître d'ouvrage"
      }
    },
    
    assurances: {
      obligatoires: [
        {
          type: "Assurance tous risques chantier",
          souscripteur: "Entreprise principale",
          montant: "Valeur totale du projet",
          duree: "Pendant toute la durée du chantier + 1 mois",
          garanties: [
            "Dommages aux ouvrages",
            "Vol et vandalisme",
            "Incendie",
            "Catastrophes naturelles",
            "Responsabilité civile"
          ]
        },
        {
          type: "Assurance décennale",
          souscripteur: "Toutes entreprises (gros œuvre, électricité)",
          duree: "10 ans après réception",
          garanties: [
            "Solidité de l'ouvrage",
            "Impropriété à destination",
            "Dommages compromettant solidité"
          ],
          montant: "Coût total de reconstruction"
        },
        {
          type: "Assurance responsabilité civile",
          souscripteur: "Toutes entreprises intervenant",
          garantie: "Minimum 500 M FCFA (833 333 USD)",
          couverture: "Dommages corporels, matériels et immatériels"
        }
      ],
      
      justificatifs: "Attestations à fournir avant démarrage et renouvellement",
      consequences: "Suspension des travaux si assurances non à jour"
    },
    
    securite: {
      planPrevention: {
        obligation: "Plan Général de Coordination (PGC) SPS obligatoire",
        coordinateur: "Bureau de contrôle ou coordinateur SPS dédié",
        contenu: [
          "Analyse des risques",
          "Mesures de prévention",
          "Organisation des secours",
          "Formation du personnel"
        ]
      },
      
      mesuresObligatoires: [
        "Port des EPI (casques, chaussures, gants)",
        "Balisage et signalisation du chantier",
        "Consignation électrique selon NF C 18-510",
        "Interdiction accès personnes non autorisées",
        "Extincteurs et trousse de secours",
        "Affichage consignes de sécurité",
        "Registre journal de chantier"
      ],
      
      controles: {
        frequence: "Inspections hebdomadaires",
        responsable: "Coordonnateur SPS + chef de chantier",
        sanctions: "Arrêt des travaux si manquements graves"
      }
    }
  },

  // ============================================================================
  // 3. GARANTIES ET RESPONSABILITÉS
  // ============================================================================
  garantiesResponsabilites: {
    titre: "Garanties et Responsabilités",
    
    garantiesLegales: [
      {
        type: "Garantie de parfait achèvement",
        duree: "12 mois après réception provisoire",
        portee: "Réparation de tous désordres signalés",
        procedure: [
          "Notification par le maître d'ouvrage",
          "Intervention sous 15 jours",
          "Réparation gratuite",
          "Prolongation si réparations importantes"
        ],
        exclusions: [
          "Dommages dus à usage anormal",
          "Défaut d'entretien",
          "Modifications non autorisées",
          "Force majeure"
        ]
      },
      {
        type: "Garantie biennale (bon fonctionnement)",
        duree: "2 ans après réception",
        portee: "Équipements dissociables du gros œuvre",
        concerneprincipalement: [
          "Bornes de recharge",
          "TGBT et tableaux électriques",
          "Système de supervision",
          "Portails motorisés",
          "Équipements de sécurité"
        ],
        procedure: "Notification + intervention sous 1 mois"
      },
      {
        type: "Garantie décennale",
        duree: "10 ans après réception",
        portee: "Solidité de l'ouvrage et impropriété à destination",
        concerne: [
          "Fondations",
          "Structure du local technique",
          "Voirie et dallages",
          "Étanchéité",
          "Installation électrique (si compromet solidité)"
        ],
        assurance: "Obligatoirement assurée"
      }
    ],
    
    garantiesFournisseurs: [
      {
        equipement: "Bornes AC 21kW",
        fabricant: "DELU",
        garantie: "3 ans pièces et main d'œuvre",
        extension: "Possible jusqu'à 5 ans (option payante)",
        sav: "Support technique 24/7"
      },
      {
        equipement: "Bornes DC 60kW et 120kW",
        fabricant: "DELU",
        garantie: "3 ans pièces et main d'œuvre",
        extension: "Possible jusqu'à 5 ans",
        sav: "Support technique 24/7 + intervention J+1"
      },
      {
        equipement: "TGBT et équipements électriques",
        garantie: "2 ans fabricant",
        sav: "Selon fabricant (Schneider, Legrand, etc.)"
      },
      {
        equipement: "Système de supervision",
        garantie: "2 ans logiciel + matériel",
        miseAJour: "Incluses pendant garantie",
        support: "Hotline technique"
      }
    ],
    
    responsabilites: {
      entreprisePrincipale: [
        "Conformité des travaux aux plans et normes",
        "Respect des délais",
        "Coordination des sous-traitants",
        "Sécurité du chantier",
        "Gestion des déchets",
        "Réparation des désordres sous garantie"
      ],
      
      maitreOeuvre: [
        "Qualité de la conception",
        "Conformité des plans aux règlements",
        "Suivi et contrôle de l'exécution",
        "Validation des choix techniques",
        "Coordination générale du projet"
      ],
      
      bureauControle: [
        "Vérification de la conformité technique",
        "Alerte sur non-conformités",
        "Validation des ouvrages",
        "Coordination SPS"
      ],
      
      maitreOuvrage: [
        "Paiement des sommes dues",
        "Fourniture du terrain aménagé",
        "Obtention des autorisations",
        "Réception des ouvrages",
        "Validation des modifications"
      ]
    },
    
    limitesResponsabilites: {
      forceMajeure: [
        "Guerre, émeutes, actes de terrorisme",
        "Catastrophes naturelles majeures",
        "Épidémies déclarées par OMS",
        "Grèves générales nationales",
        "Décisions gouvernementales (expropriation, etc.)"
      ],
      
      faitPrince: [
        "Modification substantielle du projet",
        "Suspension décidée par maître d'ouvrage",
        "Retard dans mise à disposition du terrain"
      ],
      
      consequences: "Prolongation délais sans pénalités + ajustement prix si impacts"
    }
  },

  // ============================================================================
  // 4. RÉCEPTION ET LEVÉE DE GARANTIES
  // ============================================================================
  reception: {
    titre: "Modalités de Réception",
    
    receptionProvisoire: {
      declenchement: "À la fin des travaux, sur demande de l'entreprise",
      
      procedure: [
        {
          etape: "Demande de réception",
          delai: "Par lettre recommandée",
          documents: [
            "DOE complet",
            "Attestations de conformité",
            "Notices et manuels",
            "Garanties équipements"
          ]
        },
        {
          etape: "Visite contradictoire",
          delai: "Dans les 15 jours suivant la demande",
          participants: [
            "Maître d'ouvrage",
            "Maître d'œuvre",
            "Entreprise principale",
            "Bureau de contrôle"
          ]
        },
        {
          etape: "Établissement du PV",
          contenu: [
            "Constatations sur état des ouvrages",
            "Liste des réserves (si existantes)",
            "Délais de levée des réserves",
            "Date de prise d'effet de la garantie"
          ],
          delai: "PV signé le jour même ou sous 8 jours"
        }
      ],
      
      reserves: {
        categorisation: [
          {
            type: "Réserves mineures",
            definition: "N'empêchent pas utilisation",
            delaiLevee: "3 mois maximum",
            exemples: [
              "Défauts de finition",
              "Manques mineures signalétique",
              "Ajustements mineurs"
            ]
          },
          {
            type: "Réserves majeures",
            definition: "Compromettent utilisation partielle",
            delaiLevee: "1 mois maximum",
            exemples: [
              "Borne non fonctionnelle",
              "Défaut électrique majeur",
              "Problème de sécurité"
            ],
            consequence: "Retenue de 10-15% du solde jusqu'à levée"
          },
          {
            type: "Refus de réception",
            cas: [
              "Non-conformité grave et généralisée",
              "Ouvrages dangereux",
              "Impossibilité d'exploitation"
            ],
            consequence: "Nouvelle présentation après corrections"
          }
        ]
      },
      
      effets: [
        "Début de la garantie de parfait achèvement (1 an)",
        "Transfert des risques au maître d'ouvrage",
        "Libération du chantier",
        "Paiement du solde (hors retenue garantie)"
      ]
    },
    
    receptionDefinitive: {
      delai: "12 mois après réception provisoire",
      
      conditions: [
        "Toutes réserves levées",
        "Aucun désordre apparu pendant l'année",
        "Visites de garantie effectuées",
        "Registre de maintenance tenu"
      ],
      
      procedure: [
        "Visite finale contradictoire",
        "Vérification bon état général",
        "PV de réception définitive",
        "Levée retenue de garantie"
      ],
      
      effets: [
        "Fin garantie de parfait achèvement",
        "Début garantie biennale (2 ans)",
        "Libération retenue de garantie (5%)",
        "Fin des obligations contractuelles principales"
      ]
    }
  },

  // ============================================================================
  // 5. LITIGES ET RÈGLEMENT DES DIFFÉRENDS
  // ============================================================================
  litiges: {
    titre: "Gestion des Litiges et Différends",
    
    resolution: {
      etape1: {
        methode: "Règlement amiable",
        delai: "30 jours",
        procedure: [
          "Notification écrite du différend",
          "Réunion de conciliation",
          "Expertise contradictoire si besoin",
          "Accord écrit signé"
        ]
      },
      
      etape2: {
        methode: "Médiation",
        delai: "60 jours supplémentaires",
        mediateur: "Expert indépendant désigné d'un commun accord",
        cout: "Partagé 50/50",
        caractere: "Non contraignant mais recommandé"
      },
      
      etape3: {
        methode: "Arbitrage",
        institution: "Centre d'Arbitrage de Lomé ou CCIA (Chambre de Commerce)",
        regles: "Règlement d'arbitrage OHADA",
        siege: "Lomé, Togo",
        langue: "Français",
        nombreArbitres: 1,
        delaiRendu: "6 mois maximum",
        cout: "Selon barème CCIA",
        execution: "Sentence exécutoire sans recours (sauf vices de forme)"
      },
      
      etape4: {
        methode: "Juridiction étatique (en dernier recours)",
        tribunal: "Tribunal de Grande Instance de Lomé",
        droit: "Droit togolais + OHADA",
        procedure: "Selon Code de procédure civile togolais"
      }
    },
    
    clauseCompromissoire: {
      texte: "Tout différend découlant du présent contrat ou en relation avec celui-ci sera définitivement tranché selon le Règlement d'arbitrage de la CCIA par un arbitre unique désigné conformément à ce Règlement. Le siège de l'arbitrage sera Lomé (Togo) et la langue sera le français.",
      portee: "Tous litiges sauf fraude manifeste ou dol"
    },
    
    expertises: {
      declenchement: "À la demande d'une partie ou d'un commun accord",
      expert: "Désigné d'un commun accord ou par tribunal/arbitre",
      mission: "Éclairer sur point technique précis",
      cout: "Partagé selon responsabilités ou décision arbitre",
      delai: "2-3 mois pour rapport"
    }
  },

  // ============================================================================
  // 6. DISPOSITIONS DIVERSES
  // ============================================================================
  dispositionsDiverses: {
    titre: "Clauses Diverses",
    
    confidentialite: {
      portee: "Toutes informations échangées dans le cadre du projet",
      duree: "5 ans après fin du contrat",
      exceptions: [
        "Informations publiques",
        "Obligation légale de divulgation",
        "Accord écrit de divulgation"
      ],
      sanction: "Dommages et intérêts"
    },
    
    proprieteIntellectuelle: {
      plans: "Propriété du maître d'ouvrage après paiement intégral",
      brevets: "Equipements restent propriété des fabricants",
      logiciels: "Licence d'utilisation perpétuelle",
      marques: "MAKAYA RECHARGE propriété du maître d'ouvrage"
    },
    
    cession: {
      contrat: "Interdit sauf accord écrit du maître d'ouvrage",
      soustraitance: "Autorisée jusqu'à 50% avec agrément",
      garanties: "Transmises en cas de vente station"
    },
    
    notifications: {
      forme: "Lettre recommandée avec AR ou email avec accusé",
      adresses: "Indiquées au contrat + mises à jour si changement",
      delaiRecption: "3 jours ouvrables après envoi (courrier) / immédiat (email)"
    },
    
    modificationContrat: {
      procedure: "Avenant écrit signé par toutes parties",
      limites: "Modification < 20% du montant sans nouvelle consultation",
      validation: "Visa du maître d'œuvre requis"
    },
    
    forceMajeure: {
      definition: "Événement imprévisible, irrésistible, extérieur",
      notification: "Sous 15 jours avec justificatifs",
      effets: [
        "Suspension des obligations",
        "Prolongation des délais",
        "Pas de pénalités"
      ],
      duree: "Si > 3 mois, possibilité résiliation sans indemnité"
    },
    
    resiliation: {
      motifs: [
        {
          cause: "Faute grave de l'entreprise",
          exemples: [
            "Abandon de chantier > 15 jours",
            "Non-respect grave normes sécurité",
            "Sous-traitance non autorisée",
            "Non-paiement sous-traitants"
          ],
          procedure: "Mise en demeure 15 jours + résiliation",
          consequences: [
            "Perte de l'avance",
            "Confiscation caution",
            "Dommages et intérêts",
            "Paiement travaux réalisés (déduction désordres)"
          ]
        },
        {
          cause: "Faute du maître d'ouvrage",
          exemples: [
            "Non-paiement > 60 jours",
            "Non-fourniture terrain",
            "Modifications excessives"
          ],
          procedure: "Mise en demeure 30 jours + résiliation",
          consequences: [
            "Paiement intégral travaux réalisés",
            "Indemnisation préjudice",
            "Remboursement frais mobilisation"
          ]
        },
        {
          cause: "Résiliation pour convenance",
          procedure: "Préavis 1 mois",
          indemnisation: "10% du montant restant à réaliser"
        }
      ]
    },
    
    langueApplicable: "Français",
    droitApplicable: "Droit togolais et OHADA",
    integralite: "Le contrat constitue l'intégralité de l'accord",
    separabilite: "Nullité d'une clause n'affecte pas les autres"
  },

  // ============================================================================
  // 7. RÉCAPITULATIF
  // ============================================================================
  recapitulatif: {
    documentsContractuels: 6,
    garanties: 3,
    delaiExecution: "16 semaines",
    delaiGarantie: "1 an (parfait achèvement)",
    
    montants: {
      marcheHT: { fcfa: 69_586_200, usd: 115_977 },
      marcheTTC: { fcfa: 82_111_716, usd: 136_853 },
      avance: { fcfa: 10_437_930, usd: 17_397 },
      retenue: { fcfa: 3_479_310, usd: 5_799 }
    },
    
    penalitesRetard: {
      tauxJournalier: "0.1%",
      plafond: "10%"
    },
    
    assurancesObligatoires: 3,
    juridictionArbitrage: "CCIA Lomé"
  }
};

// Export par défaut
export default conditionsContractuellesData;
