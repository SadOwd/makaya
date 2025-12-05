/**
 * SECTION 9 : GESTION DES RISQUES
 * Cahier des Charges - Station de Recharge VE
 * 
 * Identification, analyse et stratégies de mitigation
 * de tous les risques du projet
 */

export const gestionRisquesData = {
  // ============================================================================
  // 1. MÉTHODOLOGIE D'ANALYSE DES RISQUES
  // ============================================================================
  methodologie: {
    titre: "Méthodologie d'Analyse des Risques",
    
    approche: {
      methode: "Matrice de criticité (Probabilité × Impact)",
      echelles: {
        probabilite: [
          { niveau: 1, label: "Très faible", description: "< 10%" },
          { niveau: 2, label: "Faible", description: "10-30%" },
          { niveau: 3, label: "Moyenne", description: "30-50%" },
          { niveau: 4, label: "Élevée", description: "50-70%" },
          { niveau: 5, label: "Très élevée", description: "> 70%" }
        ],
        impact: [
          { niveau: 1, label: "Négligeable", description: "< 1% budget/délai" },
          { niveau: 2, label: "Faible", description: "1-5% budget/délai" },
          { niveau: 3, label: "Moyen", description: "5-10% budget/délai" },
          { niveau: 4, label: "Élevé", description: "10-20% budget/délai" },
          { niveau: 5, label: "Critique", description: "> 20% budget/délai" }
        ]
      },
      
      niveauxCriticite: [
        { score: "1-5", niveau: "Faible", couleur: "Vert", action: "Surveillance" },
        { score: "6-10", niveau: "Moyen", couleur: "Jaune", action: "Plan mitigation recommandé" },
        { score: "11-15", niveau: "Élevé", couleur: "Orange", action: "Plan mitigation obligatoire" },
        { score: "16-25", niveau: "Critique", couleur: "Rouge", action: "Action immédiate requise" }
      ]
    },
    
    processus: [
      "Identification des risques",
      "Évaluation (probabilité × impact)",
      "Priorisation",
      "Élaboration stratégies mitigation",
      "Mise en œuvre actions",
      "Surveillance continue",
      "Révision périodique"
    ]
  },

  // ============================================================================
  // 2. RISQUES TECHNIQUES
  // ============================================================================
  risquesTechniques: {
    titre: "Risques Techniques",
    
    risques: [
      {
        id: "T01",
        categorie: "Électrique",
        risque: "Capacité réseau CEET insuffisante",
        description: "Le réseau CEET ne peut pas fournir les 400 kW demandés",
        probabilite: 2,
        impact: 5,
        criticite: 10,
        niveau: "Moyen",
        
        consequences: [
          "Impossibilité de réaliser le projet",
          "Nécessité réduction puissance (moins de bornes)",
          "Coût supplémentaire transformateur privé"
        ],
        
        mitigation: {
          preventif: [
            "Étude faisabilité CEET dès semaine 4",
            "Confirmation écrite capacité disponible",
            "Plan B: installation transformateur MT/BT privé",
            "Dimensionnement load balancing intelligent"
          ],
          correctif: [
            "Si insuffisant: réduire nombre bornes DC",
            "Option solaire + stockage (Phase 2 anticipée)",
            "Délestage intelligent selon disponibilité réseau"
          ]
        },
        
        responsable: "Maître d'œuvre + CEET",
        coutEstime: { fcfa: 15_000_000, usd: 25_000, note: "Si transformateur privé nécessaire" }
      },
      
      {
        id: "T02",
        categorie: "Équipements",
        risque: "Retard livraison bornes de recharge",
        description: "Délai livraison bornes supérieur à 8 semaines",
        probabilite: 3,
        impact: 3,
        criticite: 9,
        niveau: "Moyen",
        
        consequences: [
          "Retard mise en service station",
          "Pénalités retard",
          "Coûts prolongation chantier"
        ],
        
        mitigation: {
          preventif: [
            "Commande bornes anticipée (semaine 15)",
            "Clause pénalités fournisseur",
            "Sélection fournisseur fiable (DELU)",
            "Stock tampon chez fournisseur"
          ],
          correctif: [
            "Activation fournisseur alternatif",
            "Mise en service progressive (AC puis DC)",
            "Communication transparente clients"
          ]
        },
        
        responsable: "Acheteur + Logistique",
        delaiAlerte: "4 semaines avant livraison prévue"
      },
      
      {
        id: "T03",
        categorie: "Géotechnique",
        risque: "Sol insuffisamment porteur",
        description: "Capacité portante sol < attendu, nécessitant fondations renforcées",
        probabilite: 2,
        impact: 3,
        criticite: 6,
        niveau: "Moyen",
        
        consequences: [
          "Surcoût fondations",
          "Retard 1-2 semaines",
          "Modification plans"
        ],
        
        mitigation: {
          preventif: [
            "Étude géotechnique G2 obligatoire",
            "3 sondages minimum",
            "Dimensionnement conservateur",
            "Contingence budget 5%"
          ],
          correctif: [
            "Fondations profondes (micropieux)",
            "Amélioration sol (colonnes ballastées)",
            "Augmentation section fondations"
          ]
        },
        
        responsable: "Bureau études structures",
        coutEstime: { fcfa: 2_000_000, usd: 3_333, note: "Si renforcement nécessaire" }
      },
      
      {
        id: "T04",
        categorie: "Électrique",
        risque: "Défaillance load balancing",
        description: "Système load balancing ne limite pas correctement la puissance",
        probabilite: 2,
        impact: 4,
        criticite: 8,
        niveau: "Moyen",
        
        consequences: [
          "Dépassement puissance souscrite",
          "Disjonction générale",
          "Pénalités CEET",
          "Interruption service"
        ],
        
        mitigation: {
          preventif: [
            "Tests approfondis mise en service",
            "Simulation charge simultanée 10 bornes",
            "Redondance capteurs puissance",
            "Système monitoring temps réel",
            "Marge sécurité 10% (360kW au lieu de 400kW)"
          ],
          correctif: [
            "Désactivation bornes en surcharge",
            "Correction logicielle immédiate",
            "Limitation manuelle temporaire"
          ]
        },
        
        responsable: "Intégrateur systèmes",
        tests: "Tests charge 100%, 110%, 120% puissance nominale"
      },
      
      {
        id: "T05",
        categorie: "Communication",
        risque: "Panne connectivité internet",
        description: "Coupure prolongée connexion internet/4G",
        probabilite: 3,
        impact: 2,
        criticite: 6,
        niveau: "Moyen",
        
        consequences: [
          "Impossibilité monitoring à distance",
          "Paiements en ligne indisponibles",
          "Pas de mise à jour temps réel"
        ],
        
        mitigation: {
          preventif: [
            "Double connexion (fibre + 4G backup)",
            "Mode dégradé: fonctionnement local",
            "Stockage transactions en local",
            "Synchronisation automatique au retour"
          ],
          correctif: [
            "Basculement automatique 4G",
            "Intervention FAI sous 24h",
            "Communication usagers (panneaux)"
          ]
        },
        
        responsable: "Gestionnaire IT",
        coutBackup: { fcfa: 30_000, usd: 50, unite: "par mois" }
      }
    ]
  },

  // ============================================================================
  // 3. RISQUES FINANCIERS
  // ============================================================================
  risquesFinanciers: {
    titre: "Risques Financiers",
    
    risques: [
      {
        id: "F01",
        categorie: "Budget",
        risque: "Dépassement budget construction",
        description: "Coût réel > budget prévu de 10-20%",
        probabilite: 3,
        impact: 4,
        criticite: 12,
        niveau: "Élevé",
        
        causes: [
          "Hausse prix matériaux",
          "Travaux imprévus (sous-sol, réseaux)",
          "Modifications en cours chantier",
          "Défaillance entreprise"
        ],
        
        consequences: [
          "Besoin financement complémentaire",
          "Réduction périmètre projet",
          "Retard mise en service"
        ],
        
        mitigation: {
          preventif: [
            "Études préalables complètes",
            "Contingence 10% dans budget",
            "Contrats prix fermes",
            "Suivi strict dépenses",
            "Validation avant toute modification"
          ],
          correctif: [
            "Renégociation fournisseurs",
            "Recherche financement pont",
            "Priorisation dépenses critiques",
            "Report aménagements secondaires"
          ]
        },
        
        responsable: "Directeur financier",
        provision: { fcfa: 6_958_620, usd: 11_598, note: "10% budget total" }
      },
      
      {
        id: "F02",
        categorie: "Exploitation",
        risque: "Fréquentation inférieure aux prévisions",
        description: "Taux utilisation < 50% des prévisions An 1",
        probabilite: 3,
        impact: 5,
        criticite: 15,
        niveau: "Élevé",
        
        consequences: [
          "Revenus insuffisants",
          "ROI allongé (> 24 mois)",
          "Difficulté paiement crédits",
          "Rentabilité compromise"
        ],
        
        mitigation: {
          preventif: [
            "Étude marché approfondie avant lancement",
            "Partenariats concessionnaires VE",
            "Marketing agressif pré-lancement",
            "Tarifs promotionnels 3 premiers mois",
            "Diversification B2B (flottes)",
            "Emplacement stratégique"
          ],
          correctif: [
            "Campagne marketing renforcée",
            "Ajustement tarifs (promotions)",
            "Élargissement zone chalandise",
            "Services additionnels (WiFi, confort)",
            "Partenariats commerces proximité"
          ]
        },
        
        responsable: "Directeur commercial",
        indicateur: "Suivi hebdomadaire kWh vendus",
        seuilAlerte: "< 800 kWh/jour pendant 1 mois"
      },
      
      {
        id: "F03",
        categorie: "Tarification",
        risque: "Hausse prix électricité CEET",
        description: "Augmentation tarif CEET > 20%",
        probabilite: 3,
        impact: 3,
        criticite: 9,
        niveau: "Moyen",
        
        consequences: [
          "Réduction marge",
          "Nécessité augmentation tarifs",
          "Perte compétitivité"
        ],
        
        mitigation: {
          preventif: [
            "Clause indexation dans contrats clients",
            "Marge suffisante (tarif 3-4x coût élec)",
            "Veille réglementaire",
            "Diversification sources (solaire Phase 2)"
          ],
          correctif: [
            "Ajustement tarifs proportionnel",
            "Communication transparente clients",
            "Optimisation consommation (efficacité)",
            "Accélération Phase 2 solaire"
          ]
        },
        
        responsable: "Directeur financier",
        revisionTarifs: "Trimestrielle si variation > 5%"
      },
      
      {
        id: "F04",
        categorie: "Change",
        risque: "Variation taux de change FCFA/USD",
        description: "Dépréciation FCFA > 10% pendant approvisionnements",
        probabilite: 2,
        impact: 3,
        criticite: 6,
        niveau: "Moyen",
        
        consequences: [
          "Surcoût équipements importés",
          "Dépassement budget",
          "Retard commandes"
        ],
        
        mitigation: {
          preventif: [
            "Paiements équipements en FCFA si possible",
            "Contrats prix fermes en FCFA",
            "Couverture change (hedging) pour gros montants",
            "Commande anticipée"
          ],
          correctif: [
            "Renégociation conditions paiement",
            "Sourcing local alternatif",
            "Étalement paiements"
          ]
        },
        
        responsable: "Trésorier",
        montantExpose: { usd: 50_000, note: "Équipements importés" }
      }
    ]
  },

  // ============================================================================
  // 4. RISQUES OPÉRATIONNELS
  // ============================================================================
  risquesOperationnels: {
    titre: "Risques Opérationnels",
    
    risques: [
      {
        id: "O01",
        categorie: "Sécurité",
        risque: "Vandalisme et vols",
        description: "Dégradation volontaire équipements ou vols câbles/composants",
        probabilite: 3,
        impact: 3,
        criticite: 9,
        niveau: "Moyen",
        
        consequences: [
          "Coûts réparation",
          "Indisponibilité bornes",
          "Perte revenus",
          "Image dégradée"
        ],
        
        mitigation: {
          preventif: [
            "Clôture périmétrique 2m",
            "Vidéosurveillance 24/7 (4 caméras)",
            "Éclairage puissant nocturne",
            "Portail verrouillé hors heures",
            "Équipements anti-effraction",
            "Rondes sécurité",
            "Assurance tous risques"
          ],
          correctif: [
            "Intervention réparation sous 24h",
            "Plainte police",
            "Renforcement sécurité",
            "Mobilisation assurance"
          ]
        },
        
        responsable: "Responsable sécurité",
        coutSecurite: { fcfa: 1_800_000, usd: 3_000, note: "Caméras + éclairage" },
        assurance: { fcfa: 1_200_000, usd: 2_000, unite: "par an" }
      },
      
      {
        id: "O02",
        categorie: "Maintenance",
        risque: "Disponibilité pièces détachées",
        description: "Délai obtention pièces > 2 semaines",
        probabilite: 3,
        impact: 3,
        criticite: 9,
        niveau: "Moyen",
        
        consequences: [
          "Immobilisation bornes prolongée",
          "Perte revenus",
          "Insatisfaction clients"
        ],
        
        mitigation: {
          preventif: [
            "Stock pièces critiques sur site",
            "Contrat maintenance avec stock garanti",
            "Fournisseur local ou régional",
            "Pièces interchangeables",
            "Documentation technique complète"
          ],
          correctif: [
            "Commande express (aérien)",
            "Location borne temporaire",
            "Réparation provisoire",
            "Communication clients (délai)"
          ]
        },
        
        responsable: "Responsable maintenance",
        stockRecommande: [
          "Connecteurs de rechange (2)",
          "Cartes électroniques (1/type borne)",
          "Câbles alimentation",
          "Fusibles, contacteurs"
        ],
        coutStock: { fcfa: 1_500_000, usd: 2_500 }
      },
      
      {
        id: "O03",
        categorie: "Compétences",
        risque: "Manque personnel qualifié",
        description: "Difficulté recruter/retenir techniciens qualifiés",
        probabilite: 3,
        impact: 3,
        criticite: 9,
        niveau: "Moyen",
        
        consequences: [
          "Maintenance insuffisante",
          "Pannes non résolues",
          "Dégradation disponibilité"
        ],
        
        mitigation: {
          preventif: [
            "Formation initiale complète (5 jours)",
            "Recyclages annuels",
            "Documentation détaillée",
            "Procédures claires",
            "Rémunération attractive",
            "Partenariat centres formation"
          ],
          correctif: [
            "Contrat maintenance externe",
            "Support distance fournisseur",
            "Recrutement personnel formé",
            "Formation accélérée interne"
          ]
        },
        
        responsable: "DRH",
        budgetFormation: { fcfa: 1_400_000, usd: 2_333, unite: "par an" }
      },
      
      {
        id: "O04",
        categorie: "Environnement",
        risque: "Coupures électriques fréquentes",
        description: "Délestages CEET > 4h/jour",
        probabilite: 4,
        impact: 4,
        criticite: 16,
        niveau: "Critique",
        
        consequences: [
          "Indisponibilité service",
          "Perte revenus (40-50%)",
          "Insatisfaction clients majeure",
          "Réputation compromise"
        ],
        
        mitigation: {
          preventif: [
            "Veille sur qualité réseau CEET",
            "Monitoring coupures",
            "Communication proactive délestages",
            "Anticipation Phase 2 (solaire + stockage)",
            "Diversification heures pointe/creuse"
          ],
          correctif: [
            "Accélération Phase 2 solaire",
            "Générateur secours (diesel) temporaire",
            "Ajustement horaires exploitation",
            "Tarifs préférentiels heures creuses",
            "Communication transparente"
          ]
        },
        
        responsable: "Directeur exploitation",
        phase2Anticipation: {
          solaire: "120 kWc",
          stockage: "200 kWh",
          cout: { fcfa: 45_000_000, usd: 75_000 },
          ROI: "< 5 ans avec délestages fréquents"
        }
      }
    ]
  },

  // ============================================================================
  // 5. RISQUES RÉGLEMENTAIRES ET JURIDIQUES
  // ============================================================================
  risquesReglementaires: {
    titre: "Risques Réglementaires et Juridiques",
    
    risques: [
      {
        id: "R01",
        categorie: "Autorisations",
        risque: "Refus ou retard autorisations administratives",
        description: "Permis de construire ou autorisations CEET/ANGE refusés ou retardés",
        probabilite: 2,
        impact: 5,
        criticite: 10,
        niveau: "Moyen",
        
        consequences: [
          "Retard projet 2-6 mois",
          "Coûts prolongation études",
          "Perte opportunité marché"
        ],
        
        mitigation: {
          preventif: [
            "Dossiers complets et conformes",
            "Accompagnement experts (architecte, bureau études)",
            "Contacts préalables autorités",
            "Anticipation dépôts (semaines 3-5)",
            "Suivi régulier instruction"
          ],
          correctif: [
            "Complément dossiers sous 7 jours",
            "Recours amiable puis juridique",
            "Modification projet si nécessaire",
            "Activation contacts institutionnels"
          ]
        },
        
        responsable: "Directeur de projet",
        delaiMax: "12 semaines",
        seuilAlerte: "8 semaines sans réponse"
      },
      
      {
        id: "R02",
        categorie: "Conformité",
        risque: "Non-conformité normes électriques",
        description: "Installations non conformes NF C 15-100 ou IEC 61851",
        probabilite: 2,
        impact: 4,
        criticite: 8,
        niveau: "Moyen",
        
        consequences: [
          "Refus mise en service",
          "Travaux correctifs",
          "Retard exploitation",
          "Responsabilité juridique"
        ],
        
        mitigation: {
          preventif: [
            "Bureau contrôle agréé dès conception",
            "Plans visés avant exécution",
            "Entreprises certifiées (IRVE)",
            "Matériels certifiés (CE, NF)",
            "Contrôles à chaque phase",
            "Tests finaux exhaustifs"
          ],
          correctif: [
            "Mise en conformité immédiate",
            "Mobilisation entreprise",
            "Nouveau contrôle",
            "Certification rapide"
          ]
        },
        
        responsable: "Bureau de contrôle",
        pointsControle: [
          "Fondations (avant remblai)",
          "Réseaux enterrés (avant rebouchage)",
          "TGBT (avant mise sous tension)",
          "Bornes (après installation)",
          "Final (avant mise en service)"
        ]
      },
      
      {
        id: "R03",
        categorie: "Responsabilité",
        risque: "Accident/incident sur site",
        description: "Électrocution, incendie, accident usager",
        probabilite: 1,
        impact: 5,
        criticite: 5,
        niveau: "Faible",
        
        consequences: [
          "Responsabilité civile/pénale",
          "Dommages et intérêts",
          "Fermeture station",
          "Image très dégradée"
        ],
        
        mitigation: {
          preventif: [
            "Conformité totale normes sécurité",
            "Signalétique complète",
            "Protections électriques redondantes",
            "Extincteurs et détection incendie",
            "Procédures urgence affichées",
            "Formation personnel sécurité",
            "Assurance RC 500 M FCFA",
            "Maintenance préventive stricte"
          ],
          correctif: [
            "Procédure urgence (pompiers, SAMU)",
            "Sécurisation zone",
            "Enquête interne",
            "Mobilisation assurance",
            "Communication de crise",
            "Mesures correctivessupplémentaires"
          ]
        },
        
        responsable: "Directeur général",
        assuranceRC: { fcfa: 2_400_000, usd: 4_000, unite: "par an" },
        formation: "Recyclage annuel secourisme"
      }
    ]
  },

  // ============================================================================
  // 6. MATRICE DE RISQUES ET PLAN D'ACTION
  // ============================================================================
  matriceRisques: {
    titre: "Matrice de Criticité des Risques",
    
    risquesCritiques: [
      { id: "O04", risque: "Coupures électriques fréquentes", criticite: 16 }
    ],
    
    risquesEleves: [
      { id: "F01", risque: "Dépassement budget", criticite: 12 },
      { id: "F02", risque: "Fréquentation insuffisante", criticite: 15 }
    ],
    
    risquesMoyens: [
      { id: "T01", risque: "Capacité CEET insuffisante", criticite: 10 },
      { id: "T02", risque: "Retard livraison bornes", criticite: 9 },
      { id: "T04", risque: "Défaillance load balancing", criticite: 8 },
      { id: "F03", risque: "Hausse prix électricité", criticite: 9 },
      { id: "O01", risque: "Vandalisme", criticite: 9 },
      { id: "O02", risque: "Pièces détachées", criticite: 9 },
      { id: "O03", risque: "Personnel qualifié", criticite: 9 },
      { id: "R01", risque: "Retard autorisations", criticite: 10 },
      { id: "R02", risque: "Non-conformité", criticite: 8 }
    ],
    
    risquesFaibles: [
      { id: "T03", risque: "Sol insuffisant", criticite: 6 },
      { id: "T05", risque: "Panne internet", criticite: 6 },
      { id: "F04", risque: "Variation change", criticite: 6 },
      { id: "R03", risque: "Accident", criticite: 5 }
    ]
  },

  planAction: {
    titre: "Plan d'Action Prioritaire",
    
    actionsPrioritaires: [
      {
        priorite: 1,
        risque: "O04 - Coupures électriques",
        action: "Étude Phase 2 solaire + stockage dès An 1",
        responsable: "Direction",
        delai: "6 mois",
        budget: { fcfa: 45_000_000, usd: 75_000 }
      },
      {
        priorite: 2,
        risque: "F02 - Fréquentation insuffisante",
        action: "Plan marketing agressif + partenariats concessionnaires",
        responsable: "Direction commerciale",
        delai: "Avant ouverture",
        budget: { fcfa: 3_000_000, usd: 5_000 }
      },
      {
        priorite: 3,
        risque: "F01 - Dépassement budget",
        action: "Contrôle strict dépenses + contingence 10%",
        responsable: "Direction financière",
        delai: "Permanent",
        budget: { fcfa: 6_958_620, usd: 11_598 }
      },
      {
        priorite: 4,
        risque: "T01 - Capacité CEET",
        action: "Confirmation capacité + load balancing intelligent",
        responsable: "Maître d'œuvre",
        delai: "Semaine 10",
        budget: { fcfa: 0, usd: 0 }
      },
      {
        priorite: 5,
        risque: "O01 - Vandalisme",
        action: "Vidéosurveillance + clôture + assurance",
        responsable: "Responsable sécurité",
        delai: "Avant ouverture",
        budget: { fcfa: 3_000_000, usd: 5_000 }
      }
    ],
    
    budgetTotal: {
      mitigation: { fcfa: 58_000_000, usd: 96_667 },
      contingence: { fcfa: 6_958_620, usd: 11_598 },
      total: { fcfa: 64_958_620, usd: 108_265 }
    },
    
    revisions: {
      frequence: "Mensuelle pendant travaux, trimestrielle en exploitation",
      responsable: "Comité de pilotage",
      outils: "Registre risques + dashboard"
    }
  }
};

// Export par défaut
export default gestionRisquesData;
