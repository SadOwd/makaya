// 🔌 MAKAYA RECHARGE - RÉFÉRENCE UNIQUE DES TYPES DE BORNES
// ============================================================
// Ce fichier est la SOURCE DE VÉRITÉ pour tous les types de bornes
// Utilisé par TOUS les composants et fichiers de données
// ============================================================

export const TYPES_BORNES = {
  // ⚡ BORNE AC 7kW - Charge Lente
  AC_7KW: {
    id: 'AC_7KW',
    nomTechnique: 'slow7kW',        // Utilisé dans rechargeDataFinal.js
    nomMarketing: 'AC',              // Utilisé dans tarifsOptimises.js
    nomAffichage: 'Charge Lente AC 7kW',
    puissance: 7,                    // kW
    puissanceMax: 7.4,
    type: 'AC',                      // Courant alternatif
    icon: '🐢',
    emoji: '🔌',
    couleur: '#10b981',              // Vert
    description: 'Charge lente idéale pour stationnement longue durée (nuit, bureau)',
    useCases: [
      'Stationnement résidentiel nocturne',
      'Parking bureau (8h)',
      'Centres commerciaux',
      'Hôtels et restaurants'
    ],
    tempsChargeMoyen: 6,             // heures pour 42 kWh
    tempsCharge80: 5,                // heures pour atteindre 80%
    clienteleCible: 'Résidentiel, longue durée',
    avantages: [
      'Coût le plus bas',
      'Doux pour la batterie',
      'Installation simple'
    ],
    specifications: {
      connecteur: 'Type 2 (Mennekes)',
      tension: '230V monophasé',
      courantMax: '32A',
      norme: 'IEC 62196-2',
      protection: 'IP54',
      cable: 'Fixe 5m ou prise'
    }
  },

  // ⚡⚡ BORNE AC 22kW - Charge Rapide
  AC_22KW: {
    id: 'AC_22KW',
    nomTechnique: 'fast22kW',
    nomMarketing: 'AC',
    nomAffichage: 'Charge Rapide AC 22kW',
    puissance: 22,
    puissanceMax: 22,
    type: 'AC',
    icon: '⚡',
    emoji: '🔋',
    couleur: '#3b82f6',              // Bleu
    description: 'Charge rapide pour usage quotidien et professionnel',
    useCases: [
      'Flottes commerciales VTC/Taxi',
      'Entreprises',
      'Stations-service',
      'Parkings publics'
    ],
    tempsChargeMoyen: 2.5,           // heures pour 55 kWh
    tempsCharge80: 2,
    clienteleCible: 'Commercial, VTC, flottes',
    avantages: [
      'Bon compromis vitesse/coût',
      'Largement compatible',
      'Infrastructure existante'
    ],
    specifications: {
      connecteur: 'Type 2 (Mennekes)',
      tension: '400V triphasé',
      courantMax: '32A par phase',
      norme: 'IEC 62196-2',
      protection: 'IP54',
      cable: 'Fixe 5m'
    }
  },

  // 🚀 BORNE DC 50kW - Charge Ultra-Rapide
  DC_50KW: {
    id: 'DC_50KW',
    nomTechnique: 'ultra50kW',
    nomMarketing: 'DC50',
    nomAffichage: 'Charge Ultra-Rapide DC 50kW',
    puissance: 50,
    puissanceMax: 60,
    type: 'DC',                      // Courant continu
    icon: '🚀',
    emoji: '⚡',
    couleur: '#f59e0b',              // Orange
    description: 'Charge ultra-rapide pour usage intensif et express',
    useCases: [
      'Stations autoroute',
      'Hubs transport',
      'Flottes intensives',
      'Charge express'
    ],
    tempsChargeMoyen: 0.8,           // heures (48 min) pour 40 kWh
    tempsCharge80: 0.67,             // 40 minutes
    clienteleCible: 'Express, premium, haute intensité',
    avantages: [
      'Charge très rapide',
      'Rotation élevée',
      'Revenus maximisés'
    ],
    specifications: {
      connecteur: 'CCS Combo 2 + CHAdeMO',
      tension: '200-500V DC',
      courantMax: '125A',
      norme: 'IEC 62196-3',
      protection: 'IP54',
      cable: 'Fixe refroidi'
    }
  },

  // 🚀🚀 BORNE DC 150kW - Charge Premium
  DC_150KW: {
    id: 'DC_150KW',
    nomTechnique: 'ultra150kW',
    nomMarketing: 'DC150',
    nomAffichage: 'Charge Ultra-Rapide DC 150kW',
    puissance: 150,
    puissanceMax: 150,
    type: 'DC',
    icon: '⚡⚡',
    emoji: '🔥',
    couleur: '#ef4444',              // Rouge
    description: 'Charge premium ultra-rapide pour véhicules haute performance',
    useCases: [
      'Véhicules premium (Tesla, BYD Seal)',
      'Corridors longue distance',
      'Hubs majeurs',
      'Service VIP'
    ],
    tempsChargeMoyen: 0.33,          // heures (20 min) pour 50 kWh
    tempsCharge80: 0.25,             // 15 minutes
    clienteleCible: 'Premium, longue distance, VIP',
    avantages: [
      'Charge ultra-rapide',
      'Expérience premium',
      'Différenciation marché'
    ],
    specifications: {
      connecteur: 'CCS Combo 2',
      tension: '200-920V DC',
      courantMax: '200A',
      norme: 'IEC 62196-3',
      protection: 'IP54',
      cable: 'Fixe refroidi actif'
    }
  }
};

// 🔧 UTILITAIRES - Fonctions helper
export const TypesBornesUtils = {
  /**
   * Trouve une borne par n'importe quel identifiant
   * @param {string} identifier - Peut être id, nomTechnique, nomMarketing
   * @returns {Object|null} - Objet borne ou null
   */
  getBorne: (identifier) => {
    if (!identifier) return null;
    
    return Object.values(TYPES_BORNES).find(borne => 
      borne.id === identifier ||
      borne.nomTechnique === identifier ||
      borne.nomMarketing === identifier ||
      borne.nomAffichage === identifier
    ) || null;
  },

  /**
   * Obtient le nom d'affichage d'une borne
   * @param {string} identifier - N'importe quel identifiant
   * @returns {string} - Nom formaté avec icône
   */
  getNomAffichage: (identifier) => {
    const borne = TypesBornesUtils.getBorne(identifier);
    return borne ? `${borne.icon} ${borne.nomAffichage}` : identifier;
  },

  /**
   * Obtient la couleur d'une borne
   * @param {string} identifier
   * @returns {string} - Code couleur hex
   */
  getCouleur: (identifier) => {
    const borne = TypesBornesUtils.getBorne(identifier);
    return borne?.couleur || '#6b7280';
  },

  /**
   * Liste toutes les bornes AC
   * @returns {Array} - Tableau des bornes AC
   */
  getBornesAC: () => {
    return Object.values(TYPES_BORNES).filter(b => b.type === 'AC');
  },

  /**
   * Liste toutes les bornes DC
   * @returns {Array} - Tableau des bornes DC
   */
  getBornesDC: () => {
    return Object.values(TYPES_BORNES).filter(b => b.type === 'DC');
  },

  /**
   * Trie les bornes par puissance
   * @param {boolean} ascending - Ordre croissant si true
   * @returns {Array} - Bornes triées
   */
  getBornesTriees: (ascending = true) => {
    const bornes = Object.values(TYPES_BORNES);
    return bornes.sort((a, b) => 
      ascending ? a.puissance - b.puissance : b.puissance - a.puissance
    );
  },

  /**
   * Calcule le temps de charge estimé
   * @param {string} identifier - ID de la borne
   * @param {number} kWhNecessaire - kWh à charger
   * @param {number} efficacite - Efficacité (0-1), défaut 0.9
   * @returns {Object} - {heures, minutes, formatted}
   */
  calculerTempsCharge: (identifier, kWhNecessaire, efficacite = 0.9) => {
    const borne = TypesBornesUtils.getBorne(identifier);
    if (!borne) return null;

    const heures = kWhNecessaire / (borne.puissance * efficacite);
    const minutes = Math.round(heures * 60);
    
    return {
      heures: heures,
      minutes: minutes,
      formatted: minutes < 60 
        ? `${minutes} min` 
        : `${Math.floor(heures)}h ${minutes % 60}min`
    };
  },

  /**
   * Recommande le type de borne selon le besoin
   * @param {number} kWh - Énergie nécessaire
   * @param {number} tempsDisponible - Temps dispo en heures
   * @returns {Object} - Borne recommandée
   */
  recommanderBorne: (kWh, tempsDisponible) => {
    const bornes = TypesBornesUtils.getBornesTriees(true);
    
    for (const borne of bornes) {
      const temps = TypesBornesUtils.calculerTempsCharge(borne.id, kWh);
      if (temps && temps.heures <= tempsDisponible) {
        return borne;
      }
    }
    
    return bornes[bornes.length - 1]; // La plus rapide si rien ne convient
  },

  /**
   * Compare deux types de bornes
   * @param {string} id1
   * @param {string} id2
   * @returns {Object} - Comparaison détaillée
   */
  comparerBornes: (id1, id2) => {
    const borne1 = TypesBornesUtils.getBorne(id1);
    const borne2 = TypesBornesUtils.getBorne(id2);
    
    if (!borne1 || !borne2) return null;

    return {
      borne1: borne1.nomAffichage,
      borne2: borne2.nomAffichage,
      differencePuissance: borne2.puissance - borne1.puissance,
      ratioVitesse: borne2.puissance / borne1.puissance,
      tempsGagne: borne1.tempsChargeMoyen - borne2.tempsChargeMoyen
    };
  }
};

// 🎨 CONSTANTES UTILES
export const CATEGORIES_BORNES = {
  LENTE: ['AC_7KW'],
  RAPIDE: ['AC_22KW', 'DC_50KW'],
  ULTRA_RAPIDE: ['DC_150KW']
};

export const TYPES_COURANT = {
  AC: ['AC_7KW', 'AC_22KW'],
  DC: ['DC_50KW', 'DC_150KW']
};

// Export par défaut
export default TYPES_BORNES;
