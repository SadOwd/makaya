// ⚡ MAKAYA RECHARGE - ANALYSE COMPLÈTE ENRICHIE
// ================================================

export const rechargeAnalytics = {
  
  // 📊 ANALYSE GLOBALE RÉSEAU
  analysGlobale: {
    metriquesActuelles: {
      ca_journalier: 277500,
      ca_mensuel: 20840000,
      ca_annuel_projete: 250080000,
      marge_nette_mensuelle: 10950000,
      marge_nette_pourcent: 42.9,
      roi_mensuel: 8.2, // % return on investment
      seuil_rentabilite_atteint: true,
      mois_rentabilite: 18, // mois pour atteindre le break-even
      kwh_par_euro_investi: 2.8
    },
    
    croissance: {
      mois_vs_precedent: +8.2, // %
      trimestre_vs_precedent: +12.5,
      annee_vs_annee: +45.8,
      tendance: "Forte croissance",
      facteurs: [
        "Augmentation du parc de véhicules électriques (+35% au Togo)",
        "Expansion réseau (3 nouvelles stations en 3 mois)",
        "Optimisation tarifaire heures creuses/pointe",
        "Partenariats avec entreprises de VTC (Makaya Ride, Yango, Gozem)",
        "Subventions gouvernementales pour mobilité électrique"
      ]
    },

    objectifs2026: {
      stations_total: 18, // +12 nouvelles stations
      bornes_total: 96, // +54 nouvelles bornes
      ca_mensuel_cible: 48000000,
      marge_nette_cible: 22000000,
      kwh_distribues_mois: 120000,
      parts_marche_lome: 35, // %
      couverture_nationale: "8 villes principales"
    }
  },

  // 🔋 ANALYSE DÉTAILLÉE PAR TYPE DE BORNE
  analyseBornes: {
    AC_7kW: {
      quantite: 19,
      taux_utilisation: 32,
      kwh_mois: 38250,
      sessions_mois: 2450,
      revenus_mois: 7650000,
      cout_electricite_mois: 3600000,
      marge_brute: 4050000,
      marge_pourcent: 52.9,
      rentabilite_par_borne: 213158, // FCFA/mois/borne
      roi_installation: 16.5, // mois
      usage_principal: "Particuliers, parking de nuit, résidents",
      satisfaction_client: 4.2, // /5
      incidents_techniques: 3,
      disponibilite: 96.8, // %
      temps_charge_moyen: 4.5, // heures
      recommendations: [
        "Installer davantage en zones résidentielles",
        "Optimiser la période creuse (22h-6h)",
        "Partenariats avec immeubles résidentiels"
      ]
    },

    AC_22kW: {
      quantite: 5,
      taux_utilisation: 45,
      kwh_mois: 18900,
      sessions_mois: 920,
      revenus_mois: 3780000,
      cout_electricite_mois: 1780000,
      marge_brute: 2000000,
      marge_pourcent: 52.9,
      rentabilite_par_borne: 400000, // FCFA/mois/borne
      roi_installation: 13.8, // mois
      usage_principal: "Professionnels, flottes VTC, entreprises",
      satisfaction_client: 4.5,
      incidents_techniques: 1,
      disponibilite: 98.2,
      temps_charge_moyen: 2.2, // heures
      recommendations: [
        "Idéal pour zones commerciales",
        "Cibler parkings d'entreprises",
        "Développer offres B2B"
      ]
    },

    DC_50kW: {
      quantite: 6,
      taux_utilisation: 58,
      kwh_mois: 36450,
      sessions_mois: 1580,
      revenus_mois: 9110000,
      cout_electricite_mois: 3420000,
      marge_brute: 5690000,
      marge_pourcent: 62.5,
      rentabilite_par_borne: 948333, // FCFA/mois/borne
      roi_installation: 19.0, // mois
      usage_principal: "Transit rapide, VTC, urgences",
      satisfaction_client: 4.7,
      incidents_techniques: 2,
      disponibilite: 94.3,
      temps_charge_moyen: 0.65, // heures (39 min)
      recommendations: [
        "Forte demande - installer +4 bornes",
        "Priorité axes routiers principaux",
        "Maximiser heures de pointe (meilleure marge)"
      ]
    },

    DC_150kW: {
      quantite: 0, // Planifié pour 2026
      taux_utilisation_projete: 70,
      kwh_mois_projete: 45000,
      sessions_mois_projetees: 1200,
      revenus_mois_projetes: 13500000,
      cout_electricite_mois_projete: 4200000,
      marge_brute_projetee: 9300000,
      marge_pourcent_projetee: 68.9,
      rentabilite_par_borne_projetee: 2325000, // FCFA/mois/borne
      roi_installation_projete: 19.4, // mois
      usage_principal_cible: "Transit ultra-rapide, autoroutes",
      priorite_installation: [
        "Extension Aéroport (2 bornes)",
        "Axe Lomé-Kpalimé (2 bornes)",
        "Centre-ville extension (2 bornes)"
      ]
    }
  },

  // ⏰ ANALYSE PAR PÉRIODE TARIFAIRE
  analysePeriodes: {
    heuresCreuses: {
      plage: "22h-6h (8h)",
      pourcentage_journee: 33.3,
      sessions_jour: 14,
      kwh_jour: 288,
      revenus_jour: 43200,
      cout_electricite: 23040,
      marge: 20160,
      marge_pourcent: 87.5,
      taux_occupation_bornes: 18,
      optimisation: [
        "Promouvoir via app mobile (notifications)",
        "Offres fidélité heures creuses",
        "Partenariats flottes pour charges nocturnes"
      ],
      potentiel_croissance: "+45% si promotion active"
    },

    heuresPleines: {
      plage: "6h-18h (12h)",
      pourcentage_journee: 50.0,
      sessions_jour: 91,
      kwh_jour: 1505,
      revenus_jour: 301000,
      cout_electricite: 142975,
      marge: 158025,
      marge_pourcent: 110.5,
      taux_occupation_bornes: 45,
      caracteristiques: [
        "Période la plus stable",
        "Mix équilibré particuliers/professionnels",
        "Forte demande 7h-9h et 12h-14h"
      ]
    },

    heuresPointe: {
      plage: "18h-22h (4h)",
      pourcentage_journee: 16.7,
      sessions_jour: 42,
      kwh_jour: 880,
      revenus_jour: 220000,
      cout_electricite: 96800,
      marge: 123200,
      marge_pourcent: 127.3,
      taux_occupation_bornes: 68,
      caracteristiques: [
        "Marge la plus élevée",
        "Forte demande VTC (fin de service)",
        "Saturation fréquente aux stations centrales"
      ],
      besoin_urgent: "Augmenter capacité +30% en heures pointe"
    },

    comparatifMensuel: {
      creuses: { revenus: 1296000, marge: 604800, pourcent_ca_total: 6.2 },
      pleines: { revenus: 9030000, marge: 4740750, pourcent_ca_total: 43.3 },
      pointes: { revenus: 6600000, marge: 3696000, pourcent_ca_total: 31.7 },
      autre: { revenus: 3914000, marge: 1908450, pourcent_ca_total: 18.8 }
    }
  },

  // 🗺️ ANALYSE PAR STATION
  performanceStations: {
    top_performers: [
      {
        station: "Station Centre-ville",
        classement: 1,
        score_global: 94,
        kwh_mois: 11400,
        revenus_mois: 5130000,
        marge_mois: 2950000,
        taux_utilisation: 72,
        sessions_mois: 840,
        points_forts: [
          "Emplacement stratégique",
          "Forte demande professionnelle",
          "Mix optimal AC/DC"
        ],
        actions: ["Extension +3 bornes DC prévue Q1 2026"]
      },
      {
        station: "Station Aéroport",
        classement: 2,
        score_global: 91,
        kwh_mois: 12750,
        revenus_mois: 5735000,
        marge_mois: 3280000,
        taux_utilisation: 61,
        sessions_mois: 960,
        points_forts: [
          "Trafic international stable",
          "Clientèle premium",
          "Disponibilité services (Wifi, toilettes, café)"
        ],
        actions: ["Ajouter 2 bornes DC 150kW Q1 2026"]
      },
      {
        station: "Station Tokoin",
        classement: 3,
        score_global: 78,
        kwh_mois: 8550,
        revenus_mois: 3846000,
        marge_mois: 2215000,
        taux_utilisation: 48,
        sessions_mois: 660,
        points_forts: [
          "Zone résidentielle dense",
          "Croissance régulière",
          "Peu de concurrence"
        ],
        actions: ["Promotion heures creuses résidents"]
      }
    ],

    sous_performers: [
      {
        station: "Station Adidogomé",
        classement: 6,
        score_global: 52,
        kwh_mois: 4350,
        revenus_mois: 1957500,
        marge_mois: 1120000,
        taux_utilisation: 24,
        sessions_mois: 360,
        problemes: [
          "Faible visibilité",
          "Accès difficile",
          "Manque de services annexes"
        ],
        actions_correctives: [
          "Améliorer signalétique",
          "Partenariat avec commerces locaux",
          "Campagne marketing ciblée quartier"
        ],
        delai_amelioration: "3 mois"
      },
      {
        station: "Station Bè",
        classement: 5,
        score_global: 58,
        kwh_mois: 4950,
        revenus_mois: 2227500,
        marge_mois: 1280000,
        taux_utilisation: 28,
        sessions_mois: 420,
        problemes: [
          "Maintenance récurrente",
          "Zone moins dense en VE",
          "1 borne HS actuellement"
        ],
        actions_correctives: [
          "Réparation urgente borne AC 22kW",
          "Audit technique complet",
          "Formation technique équipe"
        ],
        delai_amelioration: "1 mois"
      }
    ],

    expansion_prioritaire: [
      {
        zone: "Kara (Nord)",
        potentiel_ca_mensuel: 3800000,
        cout_installation: 45000000,
        roi_mois: 22,
        priorite: "Haute",
        raisons: [
          "Deuxième ville du Togo",
          "Aucune infrastructure de recharge actuelle",
          "Croissance économique forte"
        ]
      },
      {
        zone: "Sokodé (Centre)",
        potentiel_ca_mensuel: 2900000,
        cout_installation: 38000000,
        roi_mois: 24,
        priorite: "Haute",
        raisons: [
          "Axe commercial stratégique",
          "Demande latente identifiée",
          "Subventions régionales disponibles"
        ]
      },
      {
        zone: "Tsévié (Maritime)",
        potentiel_ca_mensuel: 1850000,
        cout_installation: 25000000,
        roi_mois: 20,
        priorite: "Moyenne",
        raisons: [
          "Proximité Lomé (30km)",
          "Zone périurbaine en croissance",
          "Coût installation modéré"
        ]
      }
    ]
  },

  // 💡 INSIGHTS & OPTIMISATIONS
  insights: {
    principaux: [
      {
        titre: "Saturation heures de pointe",
        description: "Taux d'occupation 68% en heures pointe vs 45% moyenne",
        impact: "Perte de CA estimée: 2.5M FCFA/mois",
        action: "Installer +6 bornes DC 50kW priorité stations Centre-ville et Aéroport",
        gain_potentiel: "+4.2M FCFA/mois",
        delai: "Q1 2026"
      },
      {
        titre: "Sous-utilisation heures creuses",
        description: "Seulement 14 sessions/jour en heures creuses (33% du temps)",
        impact: "Potentiel non exploité: 3.8M FCFA/mois",
        action: "Campagne promotionnelle heures creuses + app notifications",
        gain_potentiel: "+1.7M FCFA/mois",
        delai: "Immédiat"
      },
      {
        titre: "Performance disparate stations",
        description: "Écart de rentabilité de 1:3 entre meilleures/moins bonnes",
        impact: "Optimisation globale réseau nécessaire",
        action: "Plan d'amélioration ciblé stations sous-performantes",
        gain_potentiel: "+2.1M FCFA/mois",
        delai: "3 mois"
      },
      {
        titre: "Demande forte DC 50kW",
        description: "Taux utilisation 58% vs 32-45% pour AC",
        impact: "ROI supérieur malgré coût élevé",
        action: "Prioriser DC 50kW dans nouvelles installations",
        gain_potentiel: "ROI optimisé sur expansion",
        delai: "Stratégie long terme"
      }
    ],

    tendances_emergentes: [
      "Croissance forte demande B2B (flottes VTC, entreprises): +65% sur 6 mois",
      "Adoption accrue véhicules électriques particuliers: +35% annuel",
      "Préférence marquée pour charge rapide même si plus chère",
      "Sensibilité aux heures creuses si économies significatives (>30%)",
      "Demande croissante services annexes (Wifi, toilettes, café)"
    ],

    risques: [
      {
        risque: "Saturation réseau actuel",
        probabilite: "Haute",
        impact: "Élevé",
        mitigation: "Accélérer plan expansion Q1 2026"
      },
      {
        risque: "Augmentation coût électricité",
        probabilite: "Moyenne",
        impact: "Moyen",
        mitigation: "Négocier contrats long terme, panneaux solaires"
      },
      {
        risque: "Défaillance technique bornes",
        probabilite: "Moyenne",
        impact: "Moyen",
        mitigation: "Contrats maintenance préventive, pièces de rechange"
      },
      {
        risque: "Concurrence accrue",
        probabilite: "Haute",
        impact: "Moyen",
        mitigation: "Fidélisation clients, qualité service, innovation"
      }
    ]
  },

  // 📈 PROJECTIONS 2026-2027
  projections: {
    scenario_conservateur: {
      ca_mensuel_2026: 35000000,
      ca_mensuel_2027: 48000000,
      marge_nette_2026: 15000000,
      marge_nette_2027: 21000000,
      stations_2026: 12,
      stations_2027: 18,
      parts_marche_2027: 28
    },

    scenario_optimiste: {
      ca_mensuel_2026: 45000000,
      ca_mensuel_2027: 68000000,
      marge_nette_2026: 20000000,
      marge_nette_2027: 32000000,
      stations_2026: 15,
      stations_2027: 24,
      parts_marche_2027: 42
    },

    hypotheses: [
      "Croissance parc VE Togo: +40% par an",
      "Nouvelles stations selon planning",
      "Maintien des marges tarifaires actuelles",
      "Pas de concurrent majeur avant 2027",
      "Subventions gouvernementales maintenues"
    ]
  },

  // 🎯 PLAN D'ACTION 2026
  planAction2026: {
    Q1: [
      "Extension Station Aéroport: +2 bornes DC 150kW",
      "Extension Station Centre-ville: +3 bornes DC 50kW",
      "Lancement stations Kara et Sokodé",
      "Campagne marketing heures creuses",
      "Mise en place app mobile optimisée"
    ],
    Q2: [
      "Ouverture stations Tsévié et Atakpamé",
      "Programme fidélité entreprises/flottes",
      "Installation panneaux solaires 2 stations pilotes",
      "Audit performance + optimisation réseau"
    ],
    Q3: [
      "Extension stations Tokoin et Légbassito",
      "Ouverture station Kpalimé",
      "Partenariats avec immeubles résidentiels",
      "Formation technique équipes maintenance"
    ],
    Q4: [
      "Bilan annuel + ajustements stratégiques",
      "Préparation expansion 2027",
      "Négociation nouveaux contrats électricité",
      "Innovation: bornes avec stockage batterie"
    ]
  }
};
