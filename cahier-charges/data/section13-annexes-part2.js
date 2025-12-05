/**
 * SECTION 13 : ANNEXES TECHNIQUES - PARTIE 2/3
 * Cahier des Charges - Station de Recharge VE
 * 
 * Tableaux de référence, formules de calcul et données techniques
 * NOTE: Fusionner avec parties 1 et 3 pour obtenir la section complète
 */

export const annexesTechniquesData_Part2 = {
  // ============================================================================
  // 4. TABLEAUX DE DIMENSIONNEMENT ÉLECTRIQUE
  // ============================================================================
  dimensionnementElectrique: {
    titre: "Tableaux de Dimensionnement Électrique",
    
    calculsPuissance: {
      titre: "Calculs de Puissance de la Station",
      
      puissanceInstallee: {
        description: "Somme puissances nominales toutes bornes",
        calcul: [
          { type: "Bornes AC 21kW", nombre: 5, puissanceUnitaire: 21, total: 105 },
          { type: "Bornes DC 60kW", nombre: 3, puissanceUnitaire: 60, total: 180 },
          { type: "Bornes DC 120kW", nombre: 2, puissanceUnitaire: 120, total: 240 }
        ],
        total: 525,
        unite: "kW"
      },
      
      coefficientSimultaneite: {
        description: "Probabilité que toutes bornes fonctionnent simultanément à puissance max",
        valeur: 0.7,
        justification: "Basé sur retour expérience stations similaires",
        source: "Étude AVERE France 2023"
      },
      
      puissanceReelle: {
        description: "Puissance maximale réelle attendue",
        formule: "Puissance installée × Coefficient simultanéité",
        calcul: "525 kW × 0.7 = 367.5 kW",
        valeur: 367.5,
        unite: "kW"
      },
      
      puissanceSouscrite: {
        description: "Puissance souscrite auprès CEET",
        valeur: 400,
        unite: "kW",
        justification: [
          "Puissance réelle : 367.5 kW",
          "Marge sécurité : 32.5 kW (9%)",
          "Couverture pointes exceptionnelles",
          "Prise en compte pertes (TGBT, câbles) : ~5%"
        ]
      },
      
      courantNominal: {
        description: "Courant nominal triphasé 400V",
        formule: "P (kW) / (√3 × U × cos φ)",
        calcul: "400 / (1.732 × 0.4 × 0.95) = 608 A",
        valeur: 608,
        unite: "A",
        disjoncteurGeneral: "800 A (arrondi supérieur standard)"
      }
    },
    
    sectionsCables: {
      titre: "Sections de Câbles Recommandées",
      note: "Calculs selon NF C 15-100, mode pose enterré, température sol 25°C",
      
      cables: [
        {
          liaison: "CEET → TGBT",
          longueur: "25 m",
          courant: "608 A",
          chuteTension: "< 1%",
          sectionCalculee: "185 mm²",
          sectionRetenue: "4 × 240 mm²",
          type: "Cu isolé PR 0.6/1 kV",
          poseEnterree: "Fourreaux Ø160 mm",
          justification: "Intensité + chute tension + échauffement"
        },
        {
          liaison: "TGBT → Borne AC 21kW",
          longueur: "15-30 m (moyenne 24m)",
          courant: "30 A (par borne)",
          chuteTension: "< 3%",
          sectionCalculee: "6 mm²",
          sectionRetenue: "4 × 25 mm² + terre 16 mm²",
          type: "Cu isolé PR 0.6/1 kV",
          poseEnterree: "Fourreaux Ø75 mm",
          justification: "Surdimensionnement pour pertes minimales"
        },
        {
          liaison: "TGBT → Borne DC 60kW",
          longueur: "20-35 m (moyenne 27m)",
          courant: "87 A (par borne)",
          chuteTension: "< 3%",
          sectionCalculee: "35 mm²",
          sectionRetenue: "4 × 95 mm² + terre 50 mm²",
          type: "Cu isolé PR 0.6/1 kV",
          poseEnterree: "Fourreaux Ø110 mm",
          justification: "Puissance élevée + longueur"
        },
        {
          liaison: "TGBT → Borne DC 120kW",
          longueur: "25-35 m (moyenne 30m)",
          courant: "174 A (par borne)",
          chuteTension: "< 3%",
          sectionCalculee: "95 mm²",
          sectionRetenue: "4 × 185 mm² + terre 95 mm²",
          type: "Cu isolé PR 0.6/1 kV",
          poseEnterree: "Fourreaux Ø140 mm",
          justification: "Très haute puissance"
        },
        {
          liaison: "Conducteur de terre (ceinture)",
          specification: "Cu nu 50 mm²",
          longueur: "150 m",
          piquetsTerre: "12 × Ø20mm × 2m",
          resistanceObjectif: "< 5 Ω (max 10 Ω)",
          norme: "NF C 15-100"
        }
      ]
    },
    
    protections: {
      titre: "Protections Électriques Requises",
      
      dispositifs: [
        {
          emplacement: "Départ TGBT vers borne AC",
          disjoncteur: "40 A courbe C",
          differentiel: "Type B 30 mA",
          parafoudre: "Type 2 (20 kA)",
          contacteur: "40 A (commande à distance)",
          justification: "NF C 15-100 art. 771"
        },
        {
          emplacement: "Départ TGBT vers borne DC 60kW",
          disjoncteur: "125 A courbe C",
          differentiel: "Type B 300 mA",
          parafoudre: "Type 2 (40 kA)",
          contacteur: "125 A",
          justification: "IEC 61851-23"
        },
        {
          emplacement: "Départ TGBT vers borne DC 120kW",
          disjoncteur: "250 A courbe C",
          differentiel: "Type B 300 mA",
          parafoudre: "Type 2 (40 kA)",
          contacteur: "250 A",
          justification: "IEC 61851-23"
        },
        {
          emplacement: "Disjoncteur général TGBT",
          type: "Disjoncteur tétrapolaire",
          calibre: "800 A",
          pouvoirCoupure: "50 kA",
          selectivite: "S (sélectif)",
          norme: "IEC 60947-2"
        }
      ]
    },
    
    bilanPuissance: {
      titre: "Bilan de Puissance Détaillé",
      
      scenarios: [
        {
          scenario: "Utilisation faible (30%)",
          description: "3 bornes actives simultanément",
          detail: [
            { borne: "1 × AC 21kW", puissance: 21 },
            { borne: "1 × DC 60kW", puissance: 60 },
            { borne: "1 × DC 120kW", puissance: 120 }
          ],
          totalBornes: 201,
          pertesTGBT: 3,
          pertesCables: 6,
          puissanceAppeleeReseau: 210,
          tauxUtilisation: "52.5% de 400 kW",
          heuresTypiques: "Nuit, jours ouvrés matin/après-midi"
        },
        {
          scenario: "Utilisation moyenne (50%)",
          description: "5 bornes actives simultanément",
          detail: [
            { borne: "2 × AC 21kW", puissance: 42 },
            { borne: "2 × DC 60kW", puissance: 120 },
            { borne: "1 × DC 120kW", puissance: 120 }
          ],
          totalBornes: 282,
          pertesTGBT: 4.2,
          pertesCables: 8.5,
          puissanceAppeleeReseau: 295,
          tauxUtilisation: "73.8% de 400 kW",
          heuresTypiques: "Midi, début soirée semaine"
        },
        {
          scenario: "Utilisation élevée (70%)",
          description: "7 bornes actives simultanément",
          detail: [
            { borne: "3 × AC 21kW", puissance: 63 },
            { borne: "2 × DC 60kW", puissance: 120 },
            { borne: "2 × DC 120kW", puissance: 240 }
          ],
          totalBornes: 423,
          loadBalancing: "Limitation à 367 kW (coef 0.7)",
          puissanceEffective: 367,
          pertesTGBT: 5.5,
          pertesCables: 11,
          puissanceAppeleeReseau: 383.5,
          tauxUtilisation: "95.9% de 400 kW",
          heuresTypiques: "Pointe week-end, soirées"
        },
        {
          scenario: "Saturation (100%)",
          description: "Toutes 10 bornes actives",
          detail: [
            { borne: "5 × AC 21kW", puissance: 105 },
            { borne: "3 × DC 60kW", puissance: 180 },
            { borne: "2 × DC 120kW", puissance: 240 }
          ],
          totalBornes: 525,
          loadBalancing: "ACTIF - Limitation stricte 367 kW",
          repartition: [
            "Priorité bornes DC 120kW : 2 × 120 = 240 kW",
            "Puis DC 60kW : 3 × 42 = 126 kW (réduit de 60 à 42)",
            "Reste AC : 367 - 366 = 1 kW (quasi arrêt AC)"
          ],
          puissanceEffective: 367,
          pertesTGBT: 5.5,
          pertesCables: 11,
          puissanceAppeleeReseau: 383.5,
          tauxUtilisation: "95.9% de 400 kW",
          note: "Situation rare, gérée par load balancing intelligent"
        }
      ]
    }
  },

  // ============================================================================
  // 5. FORMULES DE CALCUL
  // ============================================================================
  formulesCalcul: {
    titre: "Formules de Calcul Essentielles",
    
    electriques: [
      {
        nom: "Puissance triphasée",
        formule: "P (kW) = √3 × U (kV) × I (A) × cos φ",
        variables: {
          P: "Puissance active (kW)",
          U: "Tension composée (0.4 kV pour 400V)",
          I: "Courant ligne (A)",
          cosφ: "Facteur de puissance (0.95 typique)"
        },
        exemple: "P = 1.732 × 0.4 × 608 × 0.95 = 400 kW"
      },
      {
        nom: "Courant triphasé",
        formule: "I (A) = P (kW) / (√3 × U (kV) × cos φ)",
        exemple: "I = 400 / (1.732 × 0.4 × 0.95) = 608 A"
      },
      {
        nom: "Chute de tension",
        formule: "ΔU (%) = (ρ × L × I) / (S × U) × 100",
        variables: {
          ρ: "Résistivité cuivre = 0.023 Ω.mm²/m (20°C)",
          L: "Longueur câble (m)",
          I: "Courant (A)",
          S: "Section câble (mm²)",
          U: "Tension (V)"
        },
        limite: "< 3% pour circuits terminaux, < 1% pour alimentation générale"
      },
      {
        nom: "Section minimale câble",
        formule: "S (mm²) = (ρ × L × I) / (ΔU × U)",
        note: "Vérifier aussi courant admissible selon mode de pose"
      },
      {
        nom: "Résistance de terre",
        formule: "R (Ω) = ρ / L (pour piquet)",
        variables: {
          ρ: "Résistivité sol (Ω.m) : 50-100 typique Lomé",
          L: "Longueur piquet (m)"
        },
        formuleReseau: "1/R_total = 1/R1 + 1/R2 + ... + 1/Rn (résistances en parallèle)"
      },
      {
        nom: "Énergie délivrée",
        formule: "E (kWh) = P (kW) × t (h)",
        exemple: "Charge 50 kWh en 50 min à 60kW : 60 × (50/60) = 50 kWh"
      },
      {
        nom: "Temps de charge",
        formule: "t (h) = E_batterie (kWh) × % charge / P_borne (kW)",
        exemple: "Batterie 60 kWh, charge 20-80% (36 kWh) sur 60kW : t = 36/60 = 0.6h = 36 min"
      },
      {
        nom: "Autonomie véhicule",
        formule: "Autonomie (km) = Capacité_batterie (kWh) / Consommation (kWh/100km) × 100",
        exemple: "60 kWh / 15 kWh/100km × 100 = 400 km"
      }
    ],
    
    financieres: [
      {
        nom: "Retour sur Investissement (ROI)",
        formule: "ROI (années) = Investissement_initial / Bénéfice_net_annuel",
        exemple: "69 586 200 FCFA / 81 336 000 FCFA = 0.86 an ≈ 10 mois",
        interpretation: "< 1 an = excellent"
      },
      {
        nom: "Valeur Actuelle Nette (VAN)",
        formule: "VAN = Σ [Flux_année_n / (1 + r)^n] - Investissement_initial",
        variables: {
          r: "Taux actualisation (10% typique)",
          n: "Année (0 à durée projet)"
        },
        interpretation: "VAN > 0 = projet rentable"
      },
      {
        nom: "Taux de Rentabilité Interne (TRI)",
        definition: "Taux d'actualisation qui annule la VAN",
        formule: "VAN(TRI) = 0",
        calcul: "Itératif (Excel IRR ou solveur)",
        interpretation: "TRI > taux d'actualisation = projet rentable"
      },
      {
        nom: "Seuil de rentabilité",
        formule: "Seuil (kWh/mois) = Charges_fixes_mensuelles / Marge_unitaire",
        exemple: "6 300 000 FCFA/mois / 250 FCFA/kWh = 25 200 kWh/mois",
        interpretation: "Point mort exploitation"
      },
      {
        nom: "Taux de marge",
        formule: "Taux_marge (%) = (Prix_vente - Coût_revient) / Prix_vente × 100",
        exemple: "(400 - 120) / 400 × 100 = 70% (DC 60kW)"
      }
    ],
    
    exploitation: [
      {
        nom: "Taux d'utilisation",
        formule: "Taux (%) = Énergie_délivrée / Énergie_max_théorique × 100",
        energieMaxTheorique: "Puissance_installée × 24h × 365j",
        exemple: "430 700 kWh / (525 × 24 × 365) = 9.4%"
      },
      {
        nom: "Disponibilité",
        formule: "Disponibilité (%) = Temps_opérationnel / Temps_total × 100",
        objectif: "≥ 95%"
      },
      {
        nom: "MTBF (Mean Time Between Failures)",
        formule: "MTBF (h) = Temps_total_fonctionnement / Nombre_pannes",
        objectif: "> 720 h (1 mois)"
      },
      {
        nom: "MTTR (Mean Time To Repair)",
        formule: "MTTR (h) = Temps_total_réparations / Nombre_interventions",
        objectif: "< 4 h"
      }
    ]
  },

  // ============================================================================
  // 6. TABLES DE CONVERSION
  // ============================================================================
  tablesConversion: {
    titre: "Tables de Conversion d'Unités",
    
    puissanceEnergie: [
      { de: "1 kW", vers: "1000 W" },
      { de: "1 kWh", vers: "3 600 000 J (joules)" },
      { de: "1 kWh", vers: "860 kcal" },
      { de: "1 MWh", vers: "1000 kWh" }
    ],
    
    electrique: [
      { de: "1 A", vers: "1000 mA" },
      { de: "1 kV", vers: "1000 V" },
      { de: "1 Ω", vers: "1 V/A" },
      { de: "400V triphasé", vers: "230V phase-neutre" }
    ],
    
    monetaire: [
      { taux: "1 USD", equivalent: "600 FCFA", note: "Taux projet" },
      { taux: "1 EUR", equivalent: "656 FCFA", note: "Indicatif, variable" }
    ],
    
    longueur: [
      { de: "1 m", vers: "100 cm" },
      { de: "1 km", vers: "1000 m" },
      { de: "1 pouce", vers: "2.54 cm" }
    ],
    
    surface: [
      { de: "1 m²", vers: "10 000 cm²" },
      { de: "1 hectare", vers: "10 000 m²" }
    ],
    
    volume: [
      { de: "1 m³", vers: "1000 L" },
      { de: "1 L", vers: "1 dm³" }
    ],
    
    temps: [
      { de: "1 h", vers: "60 min", vers2: "3600 s" },
      { de: "1 semaine", vers: "7 jours", vers2: "168 h" },
      { de: "1 mois", vers: "30 jours (moyenne)", vers2: "720 h" },
      { de: "1 an", vers: "365 jours", vers2: "8760 h" }
    ]
  },

  // ============================================================================
  // 7. DONNÉES CLIMATIQUES LOMÉ
  // ============================================================================
  donneesClimatiques: {
    titre: "Données Climatiques - Lomé, Togo",
    
    temperatures: [
      { mois: "Janvier", min: 23, max: 31, moyenne: 27 },
      { mois: "Février", min: 25, max: 32, moyenne: 28.5 },
      { mois: "Mars", min: 25, max: 32, moyenne: 28.5 },
      { mois: "Avril", min: 25, max: 32, moyenne: 28.5 },
      { mois: "Mai", min: 24, max: 31, moyenne: 27.5 },
      { mois: "Juin", min: 23, max: 29, moyenne: 26 },
      { mois: "Juillet", min: 23, max: 28, moyenne: 25.5 },
      { mois: "Août", min: 23, max: 28, moyenne: 25.5 },
      { mois: "Septembre", min: 23, max: 29, moyenne: 26 },
      { mois: "Octobre", min: 24, max: 30, moyenne: 27 },
      { mois: "Novembre", min: 24, max: 31, moyenne: 27.5 },
      { mois: "Décembre", min: 23, max: 31, moyenne: 27 }
    ],
    
    precipitations: {
      annuelles: "800-900 mm",
      saisonPluies: [
        { periode: "Avril - Juillet", cumul: "500-600 mm" },
        { periode: "Septembre - Octobre", cumul: "150-200 mm" }
      ],
      saisonSeche: "Novembre - Mars",
      intensiteMax: "80 mm/h (pluie décennale)",
      note: "Important pour dimensionnement drainage"
    },
    
    humidite: {
      moyenne: "70-80 %",
      min: "60% (saison sèche)",
      max: "95% (saison pluies)",
      noteEquipements: "Protection IP54 suffisante"
    },
    
    ensoleillement: {
      annuel: "2600-2800 h",
      moyenneJournaliere: "7-8 h",
      periodeOptimale: "Novembre - Mars (saison sèche)",
      note: "Excellent potentiel solaire Phase 2"
    },
    
    vent: {
      vitesseMoyenne: "10-15 km/h",
      directionDominante: "Sud-Ouest (océan)",
      tempetes: "Rares, vents < 80 km/h",
      noteStructures: "Pas de contraintes particulières"
    },
    
    implicationsProjet: [
      "Températures stables 25-32°C : OK pour bornes (-25 à +50°C)",
      "Humidité élevée : Protection IP54 adaptée",
      "Saison pluies : Drainage dimensionné pluie décennale",
      "Pas de gel : Pas de précautions antigel",
      "Ensoleillement fort : Potentiel solaire excellent"
    ]
  }
};

// Export par défaut
export default annexesTechniquesData_Part2;
