/**
 * SECTION 5 : PERFORMANCES ET GARANTIES
 * Cahier des Charges - Station de Recharge VE
 * 
 * Spécifications détaillées des performances attendues et garanties exigées
 * pour tous les équipements et ouvrages de la station de recharge.
 */

export const performancesGarantiesData = {
  // ============================================================================
  // 1. PERFORMANCES DES BORNES DE RECHARGE
  // ============================================================================
  performancesBornes: {
    titre: "Performances des Bornes de Recharge",
    
    bornesAC21kW: {
      designation: "Bornes AC 21kW (5 unités)",
      modele: "DL-A0121KW",
      
      performancesElectriques: {
        puissanceNominale: {
          valeur: 21,
          unite: "kW",
          tolerance: "± 5%",
          garantie: "Sur toute la durée de vie"
        },
        
        efficaciteEnergetique: {
          minimum: 95,
          typique: 96,
          unite: "%",
          mesure: "Selon IEC 61851-21",
          garantie: "≥ 95% pendant 3 ans"
        },
        
        facteurPuissance: {
          minimum: 0.95,
          typique: 0.99,
          correction: "PFC actif intégré",
          garantie: "≥ 0.95 en permanence"
        },
        
        harmoniques: {
          THDi: {
            valeur: "< 5%",
            norme: "IEC 61000-3-2",
            garantie: "Conforme pendant toute durée vie"
          },
          THDu: {
            valeur: "< 3%",
            description: "Impact sur réseau"
          }
        },
        
        protectionElectrique: {
          isolement: {
            valeur: "> 10 MΩ",
            tension: "500V DC",
            norme: "IEC 61851-1"
          },
          differentielle: {
            type: "Type A ou B",
            sensibilite: "30 mA",
            temps: "< 300 ms"
          },
          surtension: {
            niveau: "Catégorie III",
            protection: "Varistances intégrées"
          }
        }
      },
      
      performancesOperationnelles: {
        disponibilite: {
          objectif: 98,
          unite: "%",
          calcul: "Temps opérationnel / Temps total",
          garantie: "≥ 95% sur 12 mois (hors maintenance préventive)"
        },
        
        tempsReponse: {
          demarrageCharge: "< 30 secondes",
          arretCharge: "< 5 secondes",
          authentification: "< 10 secondes"
        },
        
        precision: {
          mesureEnergie: {
            classe: "B (IEC 62053-21)",
            precision: "± 2%",
            garantie: "Conforme pendant 5 ans"
          },
          affichage: {
            rafraichissement: "1 seconde",
            precision: "0.01 kWh"
          }
        },
        
        cyclabilite: {
          nombrecycles: "> 50,000 cycles",
          definition: "1 cycle = 1 session complète charge",
          garantie: "20,000 cycles minimum"
        }
      },
      
      performancesEnvironnementales: {
        temperature: {
          fonctionnement: "-25°C à +50°C",
          stockage: "-40°C à +70°C",
          garantie: "Fonctionnement normal de 0°C à 40°C"
        },
        
        humidite: {
          fonctionnement: "5% à 95% HR (sans condensation)",
          garantie: "Conforme IP54"
        },
        
        indiceProtection: {
          IP: "IP54 (poussière + projections eau)",
          IK: "IK10 (résistance chocs 20 Joules)",
          garantie: "Maintenu pendant 10 ans"
        },
        
        altitude: {
          maximum: "2000 m",
          application: "Non contraignant pour Lomé (niveau mer)"
        }
      }
    },
    
    bornesDC60kW: {
      designation: "Bornes DC 60kW (3 unités)",
      modele: "DC-FCA60KW",
      
      performancesElectriques: {
        puissanceNominale: {
          valeur: 60,
          unite: "kW",
          tolerance: "± 5%",
          garantie: "Sur toute la durée de vie"
        },
        
        tensionSortie: {
          plage: "200-920 V DC",
          ajustement: "Automatique selon batterie véhicule"
        },
        
        courantSortie: {
          maximum: 150,
          unite: "A",
          precision: "± 1%"
        },
        
        efficaciteEnergetique: {
          minimum: 94.5,
          typique: 95.5,
          unite: "%",
          mesure: "Selon IEC 61851-23",
          garantie: "≥ 94% pendant 3 ans"
        },
        
        facteurPuissance: {
          minimum: 0.95,
          typique: 0.99,
          correction: "PFC actif triphasé",
          garantie: "≥ 0.95 en permanence"
        },
        
        harmoniques: {
          THDi: {
            valeur: "< 5%",
            norme: "IEC 61000-3-12 (forte puissance)",
            garantie: "Conforme pendant toute durée vie"
          }
        },
        
        ondulationDC: {
          valeur: "< 5%",
          description: "Ripple sur sortie DC",
          norme: "IEC 61851-23"
        },
        
        isolationGalvanique: {
          entreEntreeSortie: "Oui (transformateur isolation)",
          rigidite: "> 4 kV",
          garantie: "Permanent"
        }
      },
      
      performancesCharge: {
        temps0a80: {
          batterie50kWh: "48 minutes",
          calcul: "50 kWh × 0.8 / 60 kW × 60 min",
          tolerance: "± 10% selon conditions"
        },
        
        vitesseCharge: {
          autonomieGagnee: "~200 km/h",
          base: "Consommation 15 kWh/100km"
        },
        
        courbeCharge: {
          description: "Puissance constante jusqu'à 80% puis décroissante",
          gestionBMS: "Communication avec BMS véhicule"
        }
      },
      
      performancesOperationnelles: {
        disponibilite: {
          objectif: 97,
          unite: "%",
          garantie: "≥ 94% sur 12 mois"
        },
        
        tempsReponse: {
          demarrageCharge: "< 60 secondes (inc. handshake)",
          arretCharge: "< 10 secondes",
          authentification: "< 15 secondes"
        },
        
        precision: {
          mesureEnergie: {
            classe: "B (IEC 62053-21)",
            precision: "± 1.5%",
            garantie: "Conforme pendant 5 ans"
          }
        },
        
        cyclabilite: {
          nombrecycles: "> 100,000 cycles",
          garantie: "50,000 cycles minimum"
        }
      },
      
      performancesEnvironnementales: {
        temperature: {
          fonctionnement: "-25°C à +50°C",
          refroidissement: "Ventilation forcée + dissipateurs",
          garantie: "Fonctionnement 0°C à 45°C"
        },
        
        indiceProtection: {
          IP: "IP54",
          IK: "IK10",
          garantie: "Maintenu pendant 10 ans"
        }
      }
    },
    
    bornesDC120kW: {
      designation: "Bornes DC 120kW (2 unités)",
      modele: "DC-FCA120KW",
      
      performancesElectriques: {
        puissanceNominale: {
          valeur: 120,
          unite: "kW",
          tolerance: "± 5%",
          garantie: "Sur toute la durée de vie"
        },
        
        tensionSortie: {
          plage: "200-1000 V DC",
          ajustement: "Automatique selon batterie véhicule"
        },
        
        courantSortie: {
          maximum: 250,
          unite: "A",
          precision: "± 1%"
        },
        
        efficaciteEnergetique: {
          minimum: 94.5,
          typique: 96,
          unite: "%",
          mesure: "Selon IEC 61851-23",
          garantie: "≥ 94% pendant 3 ans"
        },
        
        facteurPuissance: {
          minimum: 0.95,
          typique: 0.99,
          garantie: "≥ 0.95 en permanence"
        }
      },
      
      performancesCharge: {
        temps0a80: {
          batterie50kWh: "24 minutes",
          batterie75kWh: "36 minutes",
          tolerance: "± 10% selon conditions"
        },
        
        vitesseCharge: {
          autonomieGagnee: "~400 km/h",
          base: "Consommation 15 kWh/100km"
        }
      },
      
      performancesOperationnelles: {
        disponibilite: {
          objectif: 96,
          unite: "%",
          garantie: "≥ 93% sur 12 mois"
        },
        
        cyclabilite: {
          nombrecycles: "> 100,000 cycles",
          garantie: "50,000 cycles minimum"
        }
      },
      
      performancesEnvironnementales: {
        temperature: {
          fonctionnement: "-25°C à +50°C",
          refroidissement: "Système actif (ventilateurs + échangeurs)",
          garantie: "Fonctionnement 0°C à 45°C"
        },
        
        indiceProtection: {
          IP: "IP54",
          IK: "IK10",
          garantie: "Maintenu pendant 10 ans"
        }
      }
    }
  },

  // ============================================================================
  // 2. PERFORMANCES INFRASTRUCTURE ÉLECTRIQUE
  // ============================================================================
  performancesElectriques: {
    titre: "Performances Infrastructure Électrique",
    
    TGBT: {
      designation: "Tableau Général Basse Tension",
      
      performances: {
        courantNominal: {
          valeur: 800,
          unite: "A",
          garantie: "Supporté en permanence"
        },
        
        pouvoirCoupure: {
          valeur: 50,
          unite: "kA",
          norme: "IEC 60947-2",
          garantie: "Permanent"
        },
        
        pertes: {
          maximum: "2%",
          typique: "1.5%",
          conditions: "À puissance nominale"
        },
        
        equilibragePhases: {
          desequilibre: "< 10%",
          mesure: "Courants efficaces par phase"
        }
      },
      
      fiabilite: {
        MTBF: {
          valeur: "> 100,000 heures",
          description: "Temps moyen entre pannes",
          garantie: "Selon fabricant"
        },
        
        dureeVie: {
          valeur: "> 25 ans",
          conditions: "Maintenance régulière"
        }
      }
    },
    
    cablage: {
      designation: "Câbles d'alimentation",
      
      performances: {
        chutesTension: {
          maximum: "3%",
          calcul: "Entre TGBT et borne la plus éloignée",
          garantie: "À pleine charge"
        },
        
        pertes: {
          maximum: "1.5%",
          optimisation: "Section câbles surdimensionnée"
        },
        
        isolement: {
          resistance: "> 10 MΩ",
          tensionEssai: "1000 V DC",
          garantie: "Contrôle annuel"
        }
      }
    },
    
    miseTerre: {
      designation: "Système de mise à la terre",
      
      performances: {
        resistanceTerre: {
          objectif: "< 5 Ω",
          maximum: "10 Ω",
          mesure: "Méthode 62% (3 piquets)",
          garantie: "Contrôle annuel + après orage"
        },
        
        continuite: {
          resistance: "< 0.1 Ω",
          mesure: "Entre borne terre et masses métalliques"
        }
      }
    }
  },

  // ============================================================================
  // 3. PERFORMANCES SYSTÈME DE SUPERVISION
  // ============================================================================
  performancesSupervision: {
    titre: "Performances Système de Supervision",
    
    plateforme: {
      designation: "Plateforme de gestion et supervision",
      
      performances: {
        disponibilite: {
          objectif: "99.5%",
          unite: "%",
          garantie: "≥ 99% sur base annuelle",
          calcul: "Temps uptime / Temps total"
        },
        
        tempsReponse: {
          affichageInterface: "< 2 secondes",
          commandeBorne: "< 5 secondes",
          rapportTempReel: "Rafraîchissement 10 secondes"
        },
        
        capaciteTraitement: {
          sessionsSimultanees: "> 20",
          utilisateurs: "> 50",
          historiqueConserve: "Minimum 3 ans"
        },
        
        securite: {
          chiffrement: "TLS 1.3 minimum",
          authentification: "2FA (double facteur)",
          sauvegardes: "Quotidiennes automatiques"
        }
      },
      
      fonctionnalites: {
        garanties: [
          "Monitoring temps réel des 10 bornes",
          "Démarrage/arrêt à distance",
          "Gestion tarifaire",
          "Facturation automatique",
          "Rapports d'activité",
          "Alertes incidents (email/SMS)",
          "Interface mobile (iOS/Android)",
          "API REST pour intégrations"
        ]
      }
    },
    
    communication: {
      designation: "Communication bornes-serveur",
      
      performances: {
        protocole: "OCPP 1.6J ou 2.0.1",
        latence: "< 500 ms",
        fiabilite: "≥ 99%",
        reconnexion: "Automatique < 60 secondes",
        modeDegrade: "Stockage local si perte connexion"
      }
    }
  },

  // ============================================================================
  // 4. PERFORMANCES GÉNIE CIVIL
  // ============================================================================
  performancesGenieCivil: {
    titre: "Performances Ouvrages Génie Civil",
    
    fondations: {
      designation: "Fondations bornes et structures",
      
      performances: {
        resistanceCompression: {
          beton: "≥ 25 MPa à 28 jours",
          essai: "Éprouvettes cylindriques 16x32 cm",
          norme: "EN 12390-3",
          garantie: "Essais laboratoire agréé"
        },
        
        tassements: {
          differentiel: "< 5 mm",
          absolu: "< 20 mm",
          garantie: "Décennale"
        },
        
        durabilite: {
          enrobage: "≥ 3 cm (classe exposition XC4)",
          compacite: "Absence nids de cailloux",
          garantie: "10 ans (décennale)"
        }
      }
    },
    
    voirie: {
      designation: "Plateforme et voirie",
      
      performances: {
        portance: {
          EV2: "≥ 120 MPa",
          classe: "T5 (véhicules légers)",
          garantie: "3 ans"
        },
        
        rugositeRevetement: {
          PRD: "> 0.5 (Profondeur Rugosité Développée)",
          adherence: "Conforme NF P 98-086",
          garantie: "2 ans"
        },
        
        uni: {
          flaches: "< 10 mm sous règle 3m",
          pente: "1.5% (drainage)"
        },
        
        durabilite: {
          ornierage: "< 5 mm après 5 ans",
          fissuration: "Aucune fissure structurelle",
          garantie: "3 ans"
        }
      }
    },
    
    drainage: {
      designation: "Système de drainage eaux pluviales",
      
      performances: {
        capacite: {
          debit: "≥ 10 L/s",
          pluie: "Décennale (80 mm/h)",
          garantie: "Aucun débordement pluie décennale"
        },
        
        etancheite: {
          canalisations: "Étanche classe B (EN 1610)",
          essai: "Pression 0.5 bar pendant 15 min"
        }
      }
    }
  },

  // ============================================================================
  // 5. GARANTIES CONTRACTUELLES
  // ============================================================================
  garantiesContractuelles: {
    titre: "Garanties Contractuelles Exigées",
    
    garantiesLegales: [
      {
        type: "Garantie de parfait achèvement",
        duree: "12 mois",
        debutCompte: "Réception provisoire",
        portee: "Tous désordres, même mineurs",
        delaiIntervention: "15 jours après notification",
        cout: "Gratuit (inclus dans marché)",
        exclusions: [
          "Mauvais usage",
          "Défaut d'entretien",
          "Force majeure"
        ]
      },
      {
        type: "Garantie biennale (bon fonctionnement)",
        duree: "24 mois",
        debutCompte: "Réception définitive",
        portee: "Équipements dissociables",
        equipementsConcernes: [
          "Bornes de recharge",
          "TGBT et tableaux",
          "Système supervision",
          "Portails motorisés",
          "Caméras surveillance"
        ],
        delaiIntervention: "1 mois",
        cout: "Gratuit"
      },
      {
        type: "Garantie décennale",
        duree: "10 ans",
        debutCompte: "Réception définitive",
        portee: "Solidité et impropriété à destination",
        ouvragesConcernes: [
          "Fondations",
          "Structure local technique",
          "Voirie et dallages",
          "Étanchéité",
          "Installations électriques fixes"
        ],
        assurance: "Obligatoire",
        cout: "Gratuit (assuré par entrepreneur)"
      }
    ],
    
    garantiesFournisseurs: [
      {
        equipement: "Bornes AC 21kW",
        fabricant: "DELU",
        garantieStandard: {
          duree: "36 mois",
          portee: "Pièces et main d'œuvre",
          intervention: "J+2 ouvrables",
          hotline: "24/7"
        },
        garantieEtendue: {
          option: "Extension 60 mois",
          coutEstime: { fcfa: 40_000, usd: 67, unite: "par borne" },
          avantages: [
            "Intervention J+1",
            "Pièces détachées garanties",
            "Mise à jour firmware incluses"
          ]
        }
      },
      {
        equipement: "Bornes DC 60kW",
        fabricant: "DELU",
        garantieStandard: {
          duree: "36 mois",
          portee: "Pièces et main d'œuvre",
          intervention: "J+1 ouvrable",
          hotline: "24/7"
        },
        garantieEtendue: {
          option: "Extension 60 mois",
          coutEstime: { fcfa: 250_000, usd: 417, unite: "par borne" }
        }
      },
      {
        equipement: "Bornes DC 120kW",
        fabricant: "DELU",
        garantieStandard: {
          duree: "36 mois",
          portee: "Pièces et main d'œuvre",
          intervention: "J+1 ouvrable",
          hotline: "24/7"
        },
        garantieEtendue: {
          option: "Extension 60 mois",
          coutEstime: { fcfa: 360_000, usd: 600, unite: "par borne" }
        }
      },
      {
        equipement: "TGBT et appareillage",
        fabricant: "Schneider Electric / Legrand",
        garantie: {
          duree: "24 mois",
          portee: "Pièces défectueuses",
          intervention: "Selon SAV fabricant"
        }
      },
      {
        equipement: "Système supervision",
        fournisseur: "Intégrateur",
        garantie: {
          duree: "24 mois",
          portee: "Logiciel et matériel",
          miseAJour: "Incluses pendant garantie",
          support: "Email + téléphone"
        }
      }
    ],
    
    garantiesPerformances: {
      description: "Garanties de résultats sur performances",
      
      engagements: [
        {
          indicateur: "Disponibilité moyenne bornes",
          valeur: "≥ 95%",
          periodemesure: "12 mois glissants",
          penalite: "1% du prix borne par point sous objectif",
          plafond: "10% du prix borne"
        },
        {
          indicateur: "Efficacité énergétique bornes AC",
          valeur: "≥ 95%",
          verification: "Mesure laboratoire agréé",
          penalite: "Remplacement si < 93%"
        },
        {
          indicateur: "Efficacité énergétique bornes DC",
          valeur: "≥ 94%",
          verification: "Mesure laboratoire agréé",
          penalite: "Remplacement si < 92%"
        },
        {
          indicateur: "Résistance de terre",
          valeur: "≤ 10 Ω",
          verification: "Mesure contrôle initial + annuelle",
          penalite: "Travaux correctifs gratuits"
        }
      ]
    },
    
    cautionsGaranties: {
      description: "Cautions bancaires exigées",
      
      cautions: [
        {
          type: "Caution de restitution d'avance",
          montant: "15% du marché",
          fcfa: 10_437_930,
          usd: 17_397,
          duree: "Jusqu'à apurement avance",
          organisme: "Banque agréée au Togo"
        },
        {
          type: "Caution de bonne exécution",
          montant: "10% du marché",
          fcfa: 6_958_620,
          usd: 11_598,
          duree: "Jusqu'à réception définitive",
          organisme: "Banque agréée au Togo"
        },
        {
          type: "Caution de retenue de garantie (alternative)",
          montant: "5% du marché",
          fcfa: 3_479_310,
          usd: 5_799,
          duree: "12 mois après réception provisoire",
          alternative: "Retenue sur paiements"
        }
      ]
    }
  },

  // ============================================================================
  // 6. INDICATEURS DE PERFORMANCE (KPI)
  // ============================================================================
  indicateursPerformance: {
    titre: "Indicateurs Clés de Performance",
    
    KPITechniques: [
      {
        nom: "Disponibilité opérationnelle",
        formule: "(Temps disponible / Temps total) × 100",
        objectif: "≥ 95%",
        mesure: "Mensuelle",
        responsable: "Exploitant"
      },
      {
        nom: "Temps moyen de réparation (MTTR)",
        description: "Durée moyenne intervention panne",
        objectif: "< 4 heures",
        mesure: "Par incident",
        responsable: "Maintenance"
      },
      {
        nom: "Temps moyen entre pannes (MTBF)",
        description: "Fiabilité équipements",
        objectif: "> 720 heures (1 mois)",
        mesure: "Glissant 12 mois",
        responsable: "Exploitant"
      },
      {
        nom: "Taux de réussite sessions",
        formule: "(Sessions complètes / Sessions totales) × 100",
        objectif: "≥ 98%",
        mesure: "Mensuelle",
        responsable: "Exploitant"
      }
    ],
    
    KPIQualite: [
      {
        nom: "Satisfaction client",
        mesure: "Enquête (note /5)",
        objectif: "≥ 4.0/5",
        frequence: "Trimestrielle",
        echantillon: "Min 30 clients"
      },
      {
        nom: "Taux de réclamation",
        formule: "(Réclamations / Sessions) × 100",
        objectif: "< 1%",
        mesure: "Mensuelle",
        responsable: "Service client"
      }
    ],
    
    KPIEconomiques: [
      {
        nom: "Taux d'utilisation",
        formule: "(Énergie délivrée / Énergie max théorique) × 100",
        objectif: "≥ 30% An 1",
        mesure: "Mensuelle",
        responsable: "Exploitation"
      },
      {
        nom: "Coût par kWh délivré",
        formule: "Coûts exploitation / kWh vendus",
        objectif: "< 120 FCFA/kWh",
        mesure: "Mensuelle",
        responsable: "Finance"
      }
    ],
    
    tableauBord: {
      description: "Dashboard temps réel",
      frequence: "Actualisation continue",
      acces: "Web + mobile",
      exports: "Excel, PDF"
    }
  },

  // ============================================================================
  // 7. RÉCAPITULATIF
  // ============================================================================
  recapitulatif: {
    garantiesTotales: 3,
    garantiesEquipements: 5,
    garantiesPerformances: 4,
    cauctions: 3,
    KPIdefinis: 10,
    
    dureeGarantieMaximale: "10 ans (décennale)",
    
    coutExtensionsGaranties: {
      description: "Coût total extensions recommandées (optionnel)",
      bornesAC: { fcfa: 200_000, usd: 335 },
      bornesDC60: { fcfa: 750_000, usd: 1_251 },
      bornesDC120: { fcfa: 720_000, usd: 1_200 },
      total: { fcfa: 1_670_000, usd: 2_786 }
    }
  }
};

// Export par défaut
export default performancesGarantiesData;
