// Section 8 : Modèle Économique et Rentabilité (FCFA et USD)

export const modeleEconomiqueData = {
  id: 'economique',
  title: '8. Modèle Économique et Rentabilité',
  tauxChange: 600,

  strategieTarifaire: {
    title: '8.1 Stratégie Tarifaire',
    
    tarificationAC: {
      titre: '8.1.1 Tarification Recharge AC 21kW',
      approche: 'Tarif au kWh',
      benchmark: {
        ceetResidentiel: { min: 80, max: 100, unite: 'FCFA/kWh' },
        ceetProfessionnel: { min: 100, max: 120, unite: 'FCFA/kWh' },
        margeEurope: '30-50% sur coût électricité',
        margeAfrique: '150-250% (infrastructure neuve)'
      },
      tarifPropose: {
        fcfa: 300,
        usd: 0.50,
        coefficient: '×2.5-3 sur coût CEET'
      },
      tarifHoraireAlternatif: {
        fcfa: 4000,
        usd: 6.67,
        unite: 'par heure',
        equivalence: '~13 kWh/h soit 5 200 FCFA si 300 FCFA/kWh',
        note: 'Moins avantageux client mais simplifie'
      }
    },

    tarificationDC60: {
      titre: '8.1.2 Tarification Recharge DC 60kW',
      approche: 'Tarif au kWh majoré (rapidité service)',
      tarifPropose: {
        fcfa: 400,
        usd: 0.67,
        majoration: '+33% vs AC',
        coefficient: '×3.3-4 sur coût CEET'
      },
      justificationMajoration: [
        'Temps recharge divisé par 3-4 vs AC',
        'Équipement plus coûteux (amortissement)',
        'Service premium (disponibilité rapide)',
        'Consommation électrique optimisée (moins de pertes stationnement)'
      ],
      forfaitsAlternatifs: [
        {
          duree: '30 min',
          fcfa: 8000,
          usd: 13.33,
          kwhDelivres: '15-18 kWh',
          equivalenceKwh: '6 000-7 200 FCFA (léger avantage)'
        },
        {
          duree: '45 min',
          fcfa: 11000,
          usd: 18.33,
          kwhDelivres: '22-27 kWh'
        }
      ]
    },

    tarificationDC120: {
      titre: '8.1.3 Tarification Recharge DC 120kW',
      approche: 'Premium pricing (service ultra-rapide)',
      tarifPropose: {
        fcfa: 500,
        usd: 0.83,
        majoration: '+25% vs DC 60kW',
        coefficient: '×4-5 sur coût CEET',
        positionnement: 'Premium haut de gamme'
      },
      justification: [
        'Temps recharge divisé par 2 vs DC 60kW',
        'Investissement équipement le plus élevé',
        'Service exclusif (Tesla, véhicules premium)',
        'Clientèle cible moins sensible au prix',
        'Rotation maximale (optimisation revenus)'
      ],
      forfaits: [
        {
          duree: '20 min',
          fcfa: 8000,
          usd: 13.33,
          kwhDelivres: '30-35 kWh (10-80%)'
        },
        {
          duree: '30 min',
          fcfa: 11000,
          usd: 18.33,
          kwhDelivres: '45-50 kWh'
        }
      ]
    },

    modulationsTarifaires: {
      titre: '8.1.4 Modulations Tarifaires',
      heuresPleinesCreuses: {
        heurespleines: {
          horaires: '7h-22h',
          tarifs: 'Standards',
          ac: 300,
          dc60: 400,
          dc120: 500
        },
        heuresCreuses: {
          horaires: '22h-7h',
          reduction: '-20%',
          ac: 240,
          dc60: 320,
          dc120: 400,
          objectif: 'Inciter recharge nocturne, lisser consommation'
        }
      },
      abonnementsMensuels: [
        {
          nom: 'Forfait Essentiel',
          fcfa: 25000,
          usd: 42,
          inclus: '100 kWh (AC ou DC 60kW)',
          avantages: '-15% au-delà',
          cible: 'Particuliers occasionnels'
        },
        {
          nom: 'Forfait Professionnel',
          fcfa: 80000,
          usd: 133,
          inclus: '350 kWh (tous types)',
          avantages: [
            '-20% au-delà',
            'Accès prioritaire DC 120kW',
            'Facturation mensuelle'
          ],
          cible: 'VTC, taxis, flottes'
        },
        {
          nom: 'Forfait Flotte',
          prix: 'Sur devis',
          inclus: 'Volume > 1000 kWh/mois',
          avantages: 'Tarif négocié (-25 à -35%)',
          cible: 'Entreprises, administrations'
        }
      ],
      promotionsLancement: [
        { periode: 'Mois 1-2', reduction: '-50%', objectif: 'Découverte' },
        { periode: 'Mois 3-6', reduction: '-25%', objectif: 'Phase croissance' },
        { programme: 'Carte fidélité', avantage: '10ème recharge gratuite' }
      ]
    },

    moyensPaiement: {
      titre: '8.1.5 Moyens de Paiement',
      paiementImmediat: [
        { methode: 'Mobile Money', details: 'TMoney, Flooz', commission: '~2%' },
        { methode: 'Carte bancaire', details: 'Visa, Mastercard via TPE', commission: '~3-4%' },
        { methode: 'Scan QR Code', details: 'Application mobile (prépaiement wallet)', commission: 'Minimal' },
        { methode: 'Cash', details: 'Auprès superviseur si présent', commission: '0%', note: 'Optionnel' }
      ],
      paiementDiffere: [
        { methode: 'Carte RFID prépayée', montants: '10 000-50 000-100 000 FCFA' },
        { methode: 'Abonnement mensuel', details: 'Facturation email + prélèvement' },
        { methode: 'Compte entreprise', details: 'Facturation fin de mois (flottes)' }
      ],
      reductionFrais: [
        'Encourager Mobile Money et RFID (commissions faibles)',
        'Majoration +500 FCFA si paiement carte bancaire internationale'
      ]
    }
  },

  hypothesesExploitation: {
    title: '8.2 Hypothèses d\'Exploitation',
    
    frequentationPrevisionnelle: {
      annee1: {
        titre: 'Année 1 (lancement progressif)',
        bornes: [
          {
            type: 'AC',
            sessionsParJourParBorne: 2,
            utilisation: '40%',
            kwhMoyenSession: 40,
            kwhParJourParBorne: 80,
            totalBornes: 5,
            sessionsJour: 10,
            kwhJour: 400
          },
          {
            type: 'DC 60',
            sessionsParJourParBorne: 4,
            utilisation: '50%',
            kwhMoyenSession: 35,
            kwhParJourParBorne: 140,
            totalBornes: 3,
            sessionsJour: 12,
            kwhJour: 420
          },
          {
            type: 'DC 120',
            sessionsParJourParBorne: 6,
            utilisation: '60%',
            kwhMoyenSession: 30,
            kwhParJourParBorne: 180,
            totalBornes: 2,
            sessionsJour: 12,
            kwhJour: 360
          }
        ],
        totalSessionsJour: 34,
        totalKwhJour: 1180,
        totalKwhAnnuel: 430700
      },
      annees2_3: {
        titre: 'Années 2-3 (croissance)',
        bornes: [
          {
            type: 'AC',
            sessionsParJourParBorne: 3,
            utilisation: '60%',
            kwhParJourParBorne: 120,
            totalBornes: 5,
            sessionsJour: 15,
            kwhJour: 600
          },
          {
            type: 'DC 60',
            sessionsParJourParBorne: 6,
            utilisation: '75%',
            kwhParJourParBorne: 210,
            totalBornes: 3,
            sessionsJour: 18,
            kwhJour: 630
          },
          {
            type: 'DC 120',
            sessionsParJourParBorne: 8,
            utilisation: '80%',
            kwhParJourParBorne: 240,
            totalBornes: 2,
            sessionsJour: 16,
            kwhJour: 480
          }
        ],
        totalSessionsJour: 49,
        totalKwhJour: 1710,
        totalKwhAnnuel: 624150
      },
      annee4Plus: {
        titre: 'Année 4+ (maturité)',
        augmentation: 'Progressive jusqu\'à 80% utilisation globale',
        kwhJour: '2 100-2 300',
        kwhAnnuel: '766 500-839 500'
      }
    },

    revenusPrevisionnels: {
      titre: '8.2.2 Revenus Prévisionnels',
      annee1: {
        ac: {
          kwhJour: 400,
          tarifFCFA: 300,
          revenuJourFCFA: 120000,
          revenuAnnuelFCFA: 43800000,
          revenuAnnuelUSD: 73000
        },
        dc60: {
          kwhJour: 420,
          tarifFCFA: 400,
          revenuJourFCFA: 168000,
          revenuAnnuelFCFA: 61320000,
          revenuAnnuelUSD: 102200
        },
        dc120: {
          kwhJour: 360,
          tarifFCFA: 500,
          revenuJourFCFA: 180000,
          revenuAnnuelFCFA: 65700000,
          revenuAnnuelUSD: 109500
        },
        totalFCFA: 170820000,
        totalUSD: 284700
      },
      annees2_3: {
        ac: {
          revenuAnnuelFCFA: 65700000,
          revenuAnnuelUSD: 109500
        },
        dc60: {
          revenuAnnuelFCFA: 91980000,
          revenuAnnuelUSD: 153300
        },
        dc120: {
          revenuAnnuelFCFA: 87600000,
          revenuAnnuelUSD: 146000
        },
        totalFCFA: 245280000,
        totalUSD: 408800
      },
      annee4Plus: {
        totalFCFA: 300000000,
        totalUSD: 500000,
        note: 'Hypothèse conservative'
      }
    },

    coutsExploitation: {
      titre: '8.2.3 Coûts d\'Exploitation Annuels',
      electricite: {
        annee1: {
          consommationKwh: 430700,
          tarifCEETFCFA: 120,
          coutFCFA: 51684000,
          coutUSD: 86140,
          ratioRevenus: '30%'
        },
        annees2_3: {
          consommationKwh: 624150,
          tarifCEETFCFA: 120,
          coutFCFA: 74898000,
          coutUSD: 124830,
          ratioRevenus: '31%'
        }
      },
      maintenancePreventive: [
        { element: 'Bornes AC (5)', frequence: '2×/an', coutUnitaireFCFA: 120000, coutUnitaireUSD: 200, coutAnnuelFCFA: 1200000, coutAnnuelUSD: 2000 },
        { element: 'Bornes DC 60kW (3)', frequence: '4×/an', coutUnitaireFCFA: 240000, coutUnitaireUSD: 400, coutAnnuelFCFA: 2880000, coutAnnuelUSD: 4800 },
        { element: 'Bornes DC 120kW (2)', frequence: '4×/an', coutUnitaireFCFA: 300000, coutUnitaireUSD: 500, coutAnnuelFCFA: 2400000, coutAnnuelUSD: 4000 },
        { element: 'TGBT, protections', frequence: '1×/an', coutFCFA: 480000, coutUSD: 800 },
        { element: 'Éclairage, vidéosurveillance', frequence: '1×/an', coutFCFA: 180000, coutUSD: 300 },
        { element: 'Nettoyage filtres ventilation', frequence: '4×/an', coutFCFA: 240000, coutUSD: 400 },
        { element: 'Vérifications électriques', frequence: '1×/an', coutFCFA: 600000, coutUSD: 1000 }
      ],
      totalMaintenancePreventiveFCFA: 7980000,
      totalMaintenancePreventiveUSD: 13300,
      maintenanceCorrective: {
        annee1FCFA: 3000000,
        annee1USD: 5000,
        annees2PlusFCFA: 1800000,
        annees2PlusUSD: 3000
      },
      personnel: [
        { poste: 'Superviseur/gestionnaire', nombre: 1, salaireMensuelFCFA: 240000, salaireMensuelUSD: 400, annuelFCFA: 2880000, annuelUSD: 4800 },
        { poste: 'Technicien maintenance', nombre: 1, salaireMensuelFCFA: 180000, salaireMensuelUSD: 300, annuelFCFA: 2160000, annuelUSD: 3600 },
        { poste: 'Agent accueil (optionnel)', nombre: 0.5, salaireMensuelFCFA: 120000, salaireMensuelUSD: 200, annuelFCFA: 720000, annuelUSD: 1200 }
      ],
      totalPersonnelFCFA: 5760000,
      totalPersonnelUSD: 9600,
      assurances: {
        exploitation: { fcfa: 1500000, usd: 2500 },
        rc: { fcfa: 480000, usd: 800 },
        totalFCFA: 1980000,
        totalUSD: 3300
      },
      abonnements: {
        plateformeGestion: { fcfa: 1800000, usd: 3000 },
        internet4G: { fcfa: 360000, usd: 600 },
        misesAJour: { fcfa: 300000, usd: 500 },
        totalFCFA: 2460000,
        totalUSD: 4100
      },
      divers: {
        consommables: { fcfa: 300000, usd: 500 },
        nettoyageSite: { fcfa: 720000, usd: 1200 },
        taxesLocales: { fcfa: 600000, usd: 1000 },
        marketing: { fcfa: 1200000, usd: 2000 },
        totalFCFA: 2820000,
        totalUSD: 4700
      },
      recapAnnee1: {
        electricite: { fcfa: 51684000, usd: 86140, pourcent: 30 },
        maintenance: { fcfa: 10980000, usd: 18300, pourcent: 6 },
        personnel: { fcfa: 5760000, usd: 9600, pourcent: 3 },
        assurances: { fcfa: 1980000, usd: 3300, pourcent: 1 },
        abonnements: { fcfa: 2460000, usd: 4100, pourcent: 1 },
        divers: { fcfa: 2820000, usd: 4700, pourcent: 2 },
        totalFCFA: 75684000,
        totalUSD: 126140,
        pourcentRevenus: 44
      },
      recapAnnees2_3: {
        electricite: { fcfa: 74898000, usd: 124830, pourcent: 31 },
        autres: { fcfa: 22500000, usd: 37500 },
        totalFCFA: 97398000,
        totalUSD: 162330,
        pourcentRevenus: 40
      }
    }
  },

  analyseRentabilite: {
    title: '8.3 Analyse de Rentabilité',
    
    resultatsAnnuelsPrevisionnels: {
      annee1: {
        revenusFCFA: 170820000,
        revenusUSD: 284700,
        coutsExploitationFCFA: 75684000,
        coutsExploitationUSD: 126140,
        ebitdaFCFA: 95136000,
        ebitdaUSD: 158560,
        margeEbitda: '56%',
        amortissementFCFA: 13800000,
        amortissementUSD: 23000,
        resultatNetFCFA: 81336000,
        resultatNetUSD: 135560,
        margeNette: '48%'
      },
      annees2_3: {
        revenusFCFA: 245280000,
        revenusUSD: 408800,
        coutsExploitationFCFA: 97398000,
        coutsExploitationUSD: 162330,
        ebitdaFCFA: 147882000,
        ebitdaUSD: 246470,
        margeEbitda: '60%',
        amortissementFCFA: 13800000,
        amortissementUSD: 23000,
        resultatNetFCFA: 134082000,
        resultatNetUSD: 223470,
        margeNette: '55%'
      },
      annees4_5: {
        revenusFCFA: 300000000,
        revenusUSD: 500000,
        coutsExploitationFCFA: 117000000,
        coutsExploitationUSD: 195000,
        ebitdaFCFA: 183000000,
        ebitdaUSD: 305000,
        margeEbitda: '61%',
        amortissementFCFA: 13800000,
        amortissementUSD: 23000,
        resultatNetFCFA: 169200000,
        resultatNetUSD: 282000,
        margeNette: '56%'
      }
    },

    retourInvestissement: {
      titre: '8.3.2 Retour sur Investissement (ROI)',
      roiSimple: {
        investissementInitialFCFA: 69586200,
        investissementInitialUSD: 115977,
        resultatNetAn1FCFA: 81336000,
        resultatNetAn1USD: 135560,
        roiMois: 'moins de 12 mois',
        roiExact: '10.3 mois'
      },
      cumul5ans: {
        an1FCFA: 81336000,
        an2_3FCFA: 268164000,
        an4_5FCFA: 338400000,
        totalFCFA: 687900000,
        totalUSD: 1146500,
        roiPourcent: '988%'
      },
      triTauxRendementInterne: {
        fluxTresorerie: [
          { annee: 0, montantFCFA: -69586200, montantUSD: -115977 },
          { annee: 1, montantFCFA: 81336000, montantUSD: 135560 },
          { annee: 2, montantFCFA: 134082000, montantUSD: 223470 },
          { annee: 3, montantFCFA: 134082000, montantUSD: 223470 },
          { annee: 4, montantFCFA: 169200000, montantUSD: 282000 },
          { annee: 5, montantFCFA: 169200000, montantUSD: 282000 }
        ],
        tri: '180-200%',
        qualification: 'Exceptionnel',
        vanTaux10FCFA: 450000000,
        vanTaux10USD: 750000
      }
    },

    seuilRentabilite: {
      titre: '8.3.3 Seuil de Rentabilité',
      pointMortMensuelAn1: {
        coutsFixesMensuels: {
          personnelFCFA: 480000,
          personnelUSD: 800,
          assurancesFCFA: 165000,
          assurancesUSD: 275,
          abonnementsFCFA: 205000,
          abonnementsUSD: 342,
          diversFCFA: 235000,
          diversUSD: 392,
          totalFCFA: 1085400,
          totalUSD: 1809
        },
        coutsVariables: {
          electricite: '30% CA',
          maintenance: '5% CA',
          margeContribution: '65%'
        },
        seuilRentabilite: {
          formule: 'Coûts fixes / Marge contribution',
          calculFCFA: '1 085 400 / 0.65',
          resultatFCFA: 1669846,
          resultatUSD: 2783
        },
        revenusAnnuelsFCFA: 170820000,
        revenusMensuelsFCFA: 14235000,
        revenusMensuelsUSD: 23725,
        pointMortAtteint: 'Mois 1',
        conclusionAtteinte: '1 669 846 FCFA < 14 235 000 FCFA'
      },
      nombreSessionsMinimum: {
        revenuMoyenSessionFCFA: 13753,
        revenuMoyenSessionUSD: 22.92,
        sessionsJourMinimum: 4,
        utilisationMinimum: '12%',
        conclusion: 'Seuil très bas, projet rentable même avec faible fréquentation initiale'
      }
    },

    analyseSensibilite: {
      titre: '8.3.4 Analyse de Sensibilité',
      scenarioPessimiste: {
        description: '-30% fréquentation',
        revenusAn1FCFA: 119574000,
        revenusAn1USD: 199290,
        coutsFCFA: 63000000,
        coutsUSD: 105000,
        resultatNetFCFA: 56574000,
        resultatNetUSD: 94290,
        roiMois: 15,
        qualification: 'Toujours excellent'
      },
      scenarioNominal: {
        description: 'Base',
        revenusAn1FCFA: 170820000,
        revenusAn1USD: 284700,
        resultatNetFCFA: 81336000,
        resultatNetUSD: 135560,
        roiMois: 10.3
      },
      scenarioOptimiste: {
        description: '+30% fréquentation',
        revenusAn1FCFA: 222066000,
        revenusAn1USD: 370110,
        coutsFCFA: 88200000,
        coutsUSD: 147000,
        resultatNetFCFA: 133866000,
        resultatNetUSD: 223110,
        roiMois: 6,
        qualification: 'Exceptionnel'
      },
      impactVariationTarifs: {
        moins10pourcent: {
          description: '-10% tarifs',
          roiMois: 13
        },
        plus10pourcent: {
          description: '+10% tarifs',
          roiMois: 9
        }
      },
      impactCoutElectriciteCEET: {
        plus20pourcent: {
          description: '+20% (144 FCFA/kWh)',
          impactResultatNetFCFA: -10200000,
          impactResultatNetUSD: -17000,
          roiMois: 14
        },
        moins20pourcent: {
          description: '-20% (96 FCFA/kWh)',
          impactResultatNetFCFA: +10200000,
          impactResultatNetUSD: +17000,
          roiMois: 9
        }
      },
      conclusionSensibilite: [
        'Projet robuste : rentable dans tous scénarios raisonnables',
        'Variable clé : Fréquentation (impact direct revenus)',
        'Coût électricité important mais gérable',
        'Intégration solaire Phase 2 sécurisera marges'
      ]
    }
  },

  strategieDeveloppement: {
    title: '8.4 Stratégie de Développement',
    
    phase1: {
      titre: 'Phase 1 (Année 1) : Consolidation',
      actions: [
        'Optimisation exploitation station pilote',
        'Constitution réserves (20% bénéfices)',
        'Collecte données fréquentation réelles',
        'Ajustement tarifs si nécessaire'
      ]
    },

    phase2: {
      titre: 'Phase 2 (Année 2) : Intégration Solaire',
      investissementFCFA: '105 000 000 - 141 000 000',
      investissementUSD: '175 000 - 235 000',
      financement: 'Bénéfices An 1 + crédit complémentaire',
      objectif: 'Réduire coût électricité de 50%',
      roiAns: '3-4'
    },

    phase3: {
      titre: 'Phase 3 (Année 3-4) : Extension',
      actions: [
        'Ouverture 2ème station Lomé (autre zone stratégique)',
        'Investissement : 60 000 000 FCFA (100 000 USD) - acquis expérience',
        'Financement : Cash-flow station 1 + crédit',
        'Objectif : Couverture 30% territoire Lomé'
      ]
    },

    phase4: {
      titre: 'Phase 4 (Année 5+) : Réseau National',
      actions: [
        'Stations villes secondaires (Kara, Sokodé, Atakpamé)',
        'Partenariats : Hôtels, stations-service existantes',
        'Franchise : Modèle réplicable pour tiers',
        'Vision : 20-30 stations à 5 ans'
      ]
    }
  }
};
