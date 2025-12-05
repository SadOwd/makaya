// Section 1 : Présentation du Projet

export const presentationData = {
  id: 'presentation',
  title: '1. Présentation du Projet',
  
  contexte: {
    title: '1.1 Contexte et Justification',
    content: `Le Togo s'inscrit dans une dynamique de transition énergétique et de développement durable. L'émergence progressive de véhicules électriques dans la sous-région ouest-africaine nécessite la mise en place d'infrastructures de recharge adaptées et fiables.

Ce projet vise à créer dans sa phase pilote une première station de recharge publique multi-standards à Lomé, capitale du Togo, offrant à la fois des solutions de recharge semi-rapide (AC) et rapide (DC) pour répondre aux besoins variés des utilisateurs de véhicules électriques. Ensuite une expansion maîtrisée sur le plan national et régional.`
  },

  objectifs: {
    title: '1.2 Objectifs du Projet',
    principaux: [
      'Déployer une infrastructure de recharge publique de 10 bornes opérationnelles',
      'Offrir des services de recharge adaptés à différents besoins (charge semi-rapide et rapide)',
      'Garantir une disponibilité de service ≥ 95%',
      'Proposer des tarifs compétitifs pour démocratiser la mobilité électrique',
      'Créer un modèle économique viable et duplicable'
    ],
    secondaires: [
      'Contribuer à la réduction des émissions de CO₂ dans le secteur des transports',
      'Préparer l\'intégration future d\'énergies renouvelables (solaire)',
      'Créer des emplois locaux (exploitation, maintenance)',
      'Positionner le Togo comme pionnier de la mobilité électrique en Afrique de l\'Ouest'
    ]
  },

  localisation: {
    title: '1.3 Localisation et Site',
    ville: 'Lomé, Togo',
    criteres: [
      {
        nom: 'Accessibilité routière',
        exigence: '24h/24, 7j/7',
        priorite: 'Critique'
      },
      {
        nom: 'Proximité axes routiers',
        exigence: 'Distance < 500m route principale',
        priorite: 'Critique'
      },
      {
        nom: 'Visibilité élevée',
        exigence: 'Visible depuis route, signalétique',
        priorite: 'Élevée'
      },
      {
        nom: 'Zone à fort trafic',
        exigence: 'Centres commerciaux, zone portuaire, aéroport',
        priorite: 'Critique'
      },
      {
        nom: 'Raccordement CEET',
        exigence: 'Distance < 200m, 400 kW disponible',
        priorite: 'Critique'
      },
      {
        nom: 'Foncier sécurisé',
        exigence: 'Propriété ou bail longue durée (15+ ans)',
        priorite: 'Critique'
      }
    ],
    caracteristiques: {
      surfaceMin: '250-300 m²',
      forme: 'Rectangulaire préférable (30m × 10m)',
      accesPL: 'Accès véhicules lourds pour livraison',
      sol: 'Sol stable (capacité portance > 2 bars)',
      pente: 'Pente naturelle < 3%',
      extension: 'Possibilité extension future (+100 m²)'
    },
    zonesRecommandees: [
      'Zone portuaire autonome',
      'Aéroport International Gnassingbé Eyadema',
      'Centres commerciaux (Marina Market, etc.)',
      'Quartier administratif',
      'Axes Boulevard du 13 Janvier, Route de Kpalimé'
    ]
  },

  alimentation: {
    title: '1.4 Alimentation Électrique',
    fournisseur: {
      nom: 'CEET',
      description: 'Compagnie Énergie Électrique du Togo',
      statut: 'Monopole national de distribution électricité'
    },
    raccordement: {
      typeReseau: 'Basse Tension (BT) ou Moyenne Tension (MT)',
      alimentation: 'Triphasée 400V (3 phases + neutre + terre)',
      frequence: '50 Hz ± 2%',
      puissanceSouscrite: '370-400 kW minimum',
      typeAbonnement: 'Professionnel Haute Puissance'
    },
    calculs: {
      puissanceInstallee: {
        ac: { quantite: 5, unitaire: 21, total: 105 },
        dc60: { quantite: 3, unitaire: 60, total: 180 },
        dc120: { quantite: 2, unitaire: 120, total: 240 },
        total: 525
      },
      coefficientSimultaneite: 0.7,
      puissancePratique: 367.5,
      margeSecurite: 1.1,
      puissanceRecommandee: 400
    },
    pointLivraison: {
      localisation: 'Limite propriété (à définir avec CEET)',
      distanceMax: '200 mètres idéalement',
      compteur: 'Triphasé électronique Classe 1',
      disjoncteur: '400A minimum tétrapolaire'
    }
  }
};
