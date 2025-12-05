/**
 * SECTION 6 : PLANNING ET PHASAGE - PARTIE 1/3
 * Cahier des Charges - Station de Recharge VE
 * 
 * Planning général du projet et phases préparatoires
 * NOTE: Fusionner avec parties 2 et 3 pour obtenir la section complète
 */

export const planningPhasageData_Part1 = {
  // ============================================================================
  // 1. VUE D'ENSEMBLE DU PLANNING
  // ============================================================================
  vueEnsemble: {
    titre: "Planning Général du Projet",
    
    dureeGlobale: {
      total: "28 semaines",
      detail: "7 mois calendaires",
      decomposition: [
        { phase: "Études et autorisations", duree: "12 semaines" },
        { phase: "Travaux et installation", duree: "16 semaines" }
      ]
    },
    
    jalonsClefs: [
      {
        nom: "Démarrage projet",
        semaine: 0,
        description: "Signature contrats et lancement"
      },
      {
        nom: "Fin études",
        semaine: 8,
        description: "Plans validés et autorisations obtenues"
      },
      {
        nom: "Début travaux",
        semaine: 12,
        description: "Ordre de service travaux"
      },
      {
        nom: "Fin gros œuvre",
        semaine: 20,
        description: "Fondations et voirie terminées"
      },
      {
        nom: "Fin équipements",
        semaine: 26,
        description: "Toutes bornes installées"
      },
      {
        nom: "Mise en service",
        semaine: 28,
        description: "Station opérationnelle"
      }
    ],
    
    cheminCritique: [
      "Obtention permis de construire",
      "Autorisation CEET",
      "Approvisionnement bornes DC",
      "Coulage fondations",
      "Raccordement CEET",
      "Tests et mise en service"
    ]
  },

  // ============================================================================
  // 2. PHASE 0 : PRÉPARATION ET ÉTUDES (Semaines 1-12)
  // ============================================================================
  phase0_preparation: {
    titre: "Phase 0 : Préparation et Études",
    duree: "12 semaines",
    periode: "Semaines 1 à 12",
    
    // SEMAINES 1-2 : Lancement
    semaines1_2: {
      periode: "Semaines 1-2",
      titre: "Lancement et Constitution Équipe",
      
      taches: [
        {
          nom: "Constitution équipe projet",
          responsable: "Maître d'ouvrage",
          duree: "1 semaine",
          livrables: [
            "Organigramme projet",
            "Fiches de fonction",
            "Planning détaillé"
          ],
          cout: { fcfa: 0, usd: 0, note: "Interne" }
        },
        {
          nom: "Sélection maître d'œuvre",
          responsable: "Maître d'ouvrage",
          duree: "2 semaines",
          etapes: [
            "Consultation (3 bureaux min)",
            "Analyse offres techniques et financières",
            "Négociation",
            "Signature contrat"
          ],
          livrables: ["Contrat maître d'œuvre signé"],
          cout: {
            fcfa: 5_566_896,
            usd: 9_278,
            base: "8% du montant travaux"
          }
        },
        {
          nom: "Sélection bureau de contrôle",
          responsable: "Maître d'ouvrage",
          duree: "2 semaines",
          livrables: ["Contrat bureau contrôle signé"],
          cout: {
            fcfa: 1_391_724,
            usd: 2_320,
            base: "2% du montant travaux"
          }
        },
        {
          nom: "Kick-off meeting projet",
          responsable: "Chef de projet",
          duree: "1 jour",
          participants: [
            "Maître d'ouvrage",
            "Maître d'œuvre",
            "Bureau de contrôle",
            "Architecte"
          ],
          livrables: [
            "Compte-rendu réunion",
            "Planning validé",
            "Matrice responsabilités (RACI)"
          ]
        }
      ]
    },
    
    // SEMAINES 3-6 : Études techniques
    semaines3_6: {
      periode: "Semaines 3-6",
      titre: "Études Techniques Préalables",
      
      taches: [
        {
          nom: "Étude topographique",
          responsable: "Géomètre-expert",
          duree: "2 semaines",
          etapes: [
            "Levé topographique terrain (2 jours)",
            "Traitement données (3 jours)",
            "Élaboration plans (5 jours)"
          ],
          livrables: [
            "Plan topographique 1/200",
            "Fichier DWG",
            "Profils terrain"
          ],
          cout: { fcfa: 600_000, usd: 1_000 }
        },
        {
          nom: "Étude géotechnique G2",
          responsable: "Laboratoire géotechnique",
          duree: "3 semaines",
          etapes: [
            "Sondages terrain (3 sondages, 2 jours)",
            "Essais laboratoire (1 semaine)",
            "Rapport (1 semaine)"
          ],
          livrables: [
            "Rapport géotechnique G2",
            "Recommandations fondations",
            "Fiches essais"
          ],
          cout: { fcfa: 1_200_000, usd: 2_000 }
        },
        {
          nom: "Étude faisabilité technique",
          responsable: "Maître d'œuvre",
          duree: "3 semaines",
          contenu: [
            "Analyse contraintes site",
            "Dimensionnement préliminaire",
            "Étude capacité réseau CEET",
            "Solutions techniques"
          ],
          livrables: [
            "Rapport faisabilité (30 pages)",
            "Schémas de principe",
            "Chiffrage estimatif"
          ],
          cout: { fcfa: 800_000, usd: 1_333 }
        },
        {
          nom: "Étude impact environnemental",
          responsable: "Bureau études environnement",
          duree: "4 semaines",
          contenu: [
            "État initial site",
            "Identification impacts",
            "Mesures réduction",
            "Plan gestion environnement"
          ],
          livrables: [
            "Étude impact (50 pages)",
            "Plan gestion environnement",
            "Dossier ANGE"
          ],
          cout: { fcfa: 1_500_000, usd: 2_500 }
        }
      ],
      
      jalons: [
        {
          nom: "Validation études préalables",
          semaine: 6,
          criteres: [
            "Tous rapports remis et validés",
            "Aucun point bloquant identifié",
            "Budget confirmé"
          ]
        }
      ]
    },
    
    // SEMAINES 5-8 : Conception
    semaines5_8: {
      periode: "Semaines 5-8",
      titre: "Conception et Plans d'Exécution",
      note: "En parallèle avec études (semaines 5-6)",
      
      taches: [
        {
          nom: "Conception architecturale",
          responsable: "Architecte",
          duree: "4 semaines",
          etapes: [
            "Esquisse (1 semaine)",
            "Avant-projet (1 semaine)",
            "Projet définitif (2 semaines)"
          ],
          livrables: [
            "Plans architecturaux",
            "Façades et coupes",
            "Notice descriptive"
          ],
          nombrePlanches: 10,
          cout: { fcfa: 1_200_000, usd: 2_000 }
        },
        {
          nom: "Plans génie civil",
          responsable: "Bureau études structures",
          duree: "4 semaines",
          contenu: [
            "Notes de calcul fondations",
            "Plans ferraillage",
            "Plans coffrage",
            "Plans VRD"
          ],
          livrables: [
            "Plans exécution génie civil (20 planches)",
            "Notes calcul visées",
            "Métrés détaillés"
          ],
          nombrePlanches: 20,
          cout: { fcfa: 1_500_000, usd: 2_500 }
        },
        {
          nom: "Schémas électriques",
          responsable: "Bureau études électriques",
          duree: "4 semaines",
          contenu: [
            "Schémas unifilaires",
            "Plans implantation",
            "Schémas câblage",
            "Notes de calcul"
          ],
          livrables: [
            "Schémas électriques (25 planches)",
            "Liste matériels",
            "Spécifications techniques"
          ],
          nombrePlanches: 25,
          cout: { fcfa: 2_000_000, usd: 3_333 }
        }
      ],
      
      jalons: [
        {
          nom: "Validation conception",
          semaine: 8,
          criteres: [
            "Plans visés bureau contrôle",
            "Budget confirmé",
            "Aucune réserve majeure"
          ]
        }
      ]
    },
    
    // SEMAINES 3-10 : Autorisations
    semaines3_10: {
      periode: "Semaines 3-10",
      titre: "Démarches Administratives et Autorisations",
      note: "En parallèle avec études et conception",
      
      taches: [
        {
          nom: "Permis de construire",
          responsable: "Architecte + Maître d'ouvrage",
          duree: "8 semaines",
          etapes: [
            "Constitution dossier (1 semaine)",
            "Dépôt mairie (semaine 4)",
            "Instruction (6 semaines)",
            "Délivrance permis (semaine 10)"
          ],
          pieces: [
            "Formulaire officiel",
            "Plans architecturaux",
            "Plan situation cadastral",
            "Notice descriptive",
            "Justificatif propriété"
          ],
          livrables: ["Permis de construire"],
          cout: { fcfa: 150_000, usd: 250 },
          cheminCritique: true
        },
        {
          nom: "Autorisation CEET",
          responsable: "Maître d'œuvre + Maître d'ouvrage",
          duree: "6 semaines",
          etapes: [
            "Demande raccordement (semaine 4)",
            "Étude technique CEET (4 semaines)",
            "Validation (semaine 10)"
          ],
          pieces: [
            "Demande puissance 400 kW",
            "Plans électriques",
            "Schéma unifilaire",
            "Justificatifs société"
          ],
          livrables: [
            "Autorisation raccordement",
            "Devis CEET",
            "Conditions techniques"
          ],
          cout: { fcfa: 3_600_000, usd: 6_000 },
          cheminCritique: true
        },
        {
          nom: "Certificat conformité environnementale",
          responsable: "Bureau études environnement",
          duree: "8 semaines",
          etapes: [
            "Dépôt EIE à ANGE (semaine 5)",
            "Instruction (6 semaines)",
            "Certificat (semaine 11)"
          ],
          livrables: ["Certificat ANGE"],
          cout: { fcfa: 500_000, usd: 833 },
          inclus: "Dans coût EIE"
        },
        {
          nom: "Autorisation exploitation commerciale",
          responsable: "Service juridique",
          duree: "4 semaines",
          etapes: [
            "Constitution dossier (1 semaine)",
            "Dépôt Ministère Commerce (semaine 7)",
            "Instruction (2 semaines)",
            "Autorisation (semaine 11)"
          ],
          pieces: [
            "Registre commerce",
            "Statuts société",
            "Attestation fiscale",
            "Justificatif locaux"
          ],
          livrables: ["Autorisation exploitation"],
          cout: { fcfa: 100_000, usd: 167 }
        }
      ],
      
      jalons: [
        {
          nom: "Toutes autorisations obtenues",
          semaine: 11,
          criteres: [
            "Permis de construire délivré",
            "Autorisation CEET validée",
            "Certificat ANGE obtenu",
            "Autorisation commerce OK"
          ],
          cheminCritique: true
        }
      ]
    },
    
    // SEMAINES 9-12 : Appels d'offres
    semaines9_12: {
      periode: "Semaines 9-12",
      titre: "Consultation Entreprises et Contractualisation",
      
      taches: [
        {
          nom: "Élaboration dossiers consultation",
          responsable: "Maître d'œuvre",
          duree: "2 semaines",
          contenu: [
            "CCAP (Clauses Administratives)",
            "CCTP (Clauses Techniques)",
            "Plans d'exécution",
            "Bordereau prix unitaires",
            "Planning"
          ],
          livrables: ["Dossier consultation complet"],
          cout: { fcfa: 400_000, usd: 667 }
        },
        {
          nom: "Consultation entreprises",
          responsable: "Maître d'ouvrage + Maître d'œuvre",
          duree: "4 semaines",
          etapes: [
            "Lancement consultation (semaine 9)",
            "Visite de site (semaine 10)",
            "Réception offres (semaine 12)",
            "Analyse offres (semaine 12)"
          ],
          nombreEntreprises: "5 minimum",
          lots: [
            "Lot unique (entreprise générale)",
            "OU lots séparés (GC + Élec + Supervision)"
          ]
        },
        {
          nom: "Sélection et négociation",
          responsable: "Maître d'ouvrage",
          duree: "1 semaine",
          criteres: [
            "Prix (40%)",
            "Références (30%)",
            "Délais (20%)",
            "Moyens (10%)"
          ],
          livrables: ["Rapport d'analyse offres"]
        },
        {
          nom: "Contractualisation",
          responsable: "Maître d'ouvrage",
          duree: "1 semaine",
          documents: [
            "Contrats signés",
            "Cautions bancaires",
            "Assurances",
            "Planning travaux validé"
          ],
          livrables: [
            "Contrats entreprises signés",
            "Ordre de service préparation chantier"
          ]
        }
      ],
      
      jalons: [
        {
          nom: "Entreprises sélectionnées",
          semaine: 12,
          criteres: [
            "Contrats signés",
            "Cautions déposées",
            "Assurances fournies",
            "Planning validé"
          ],
          cheminCritique: true
        }
      ]
    }
  }
};

// Export par défaut
export default planningPhasageData_Part1;
