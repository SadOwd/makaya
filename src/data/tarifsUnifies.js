// 💰 MAKAYA RECHARGE - TARIFS UNIFIÉS
// ============================================================
// SOURCE DE VÉRITÉ UNIQUE pour TOUS les tarifs
// Combinaison des tarifs marketing ET techniques
// ============================================================

import { TYPES_BORNES } from './typesBornesReference';

// 📅 PÉRIODES HORAIRES
export const PERIODES = {
  CREUSES: {
    id: 'heuresCreuses',
    nom: 'Heures Creuses',
    periode: '22h-6h',
    duree: 8,
    emoji: '🌙',
    couleur: '#3b82f6',
    description: 'Période optimale avec coûts énergétiques minimums',
    coutAchatCEET: 74  // FCFA/kWh - Tarif CEET officiel
  },
  PLEINES: {
    id: 'heuresPleines',
    nom: 'Heures Pleines',
    periode: '6h-18h',
    duree: 12,
    emoji: '☀️',
    couleur: '#f59e0b',
    description: 'Période standard forte demande',
    coutAchatCEET: 82  // FCFA/kWh
  },
  POINTE: {
    id: 'heuresPointe',
    nom: 'Heures Pointe',
    periode: '18h-22h',
    duree: 4,
    emoji: '🔥',
    couleur: '#ef4444',
    description: 'Période premium demande maximale',
    coutAchatCEET: 115  // FCFA/kWh
  }
};

// 💰 GRILLE TARIFAIRE COMPLÈTE - SOURCE UNIQUE DE VÉRITÉ
export const tarifsUnifies = {
  // Métadonnées
  version: '2.0',
  dateMAJ: '2025-11-26',
  validiteDebut: '2025-01-01',
  validiteFin: '2025-12-31',
  devise: 'FCFA',

  // ⚡ TARIFS PAR TYPE DE BORNE ET PÉRIODE
  grilleTarifaire: {
    // ========================================
    // AC 7kW - CHARGE LENTE
    // ========================================
    [TYPES_BORNES.AC_7KW.id]: {
      heuresCreuses: {
        periode: PERIODES.CREUSES.periode,
        periodeNom: PERIODES.CREUSES.nom,
        tarifClient: 180,           // FCFA/kWh - CE QUE LE CLIENT PAIE
        coutAchat: 74,              // FCFA/kWh - Achat CEET
        coutExploitation: 12,       // FCFA/kWh - Maintenance, personnel, etc.
        marge: 94,                  // FCFA/kWh - Marge brute
        margePct: 127.0,            // % marge
        description: 'Idéal pour charge nocturne, économie maximale vs thermique',
        economieVsThermique: 35.6,  // %
        coutKmElec: 28.8,           // FCFA/km (180×16kWh/100km)
        coutKmThermique: 44.5,      // FCFA/km référence
        recommendePour: ['Résidentiel nuit', 'Parking longue durée']
      },
      heuresPleines: {
        periode: PERIODES.PLEINES.periode,
        periodeNom: PERIODES.PLEINES.nom,
        tarifClient: 210,
        coutAchat: 82,
        coutExploitation: 12,
        marge: 116,
        margePct: 141.5,
        description: 'Charge journée, très compétitif',
        economieVsThermique: 24.7,
        coutKmElec: 33.6,
        coutKmThermique: 44.5,
        recommendePour: ['Parking bureau', 'Centres commerciaux']
      },
      heuresPointe: {
        periode: PERIODES.POINTE.periode,
        periodeNom: PERIODES.POINTE.nom,
        tarifClient: 260,
        coutAchat: 115,
        coutExploitation: 12,
        marge: 133,
        margePct: 115.7,
        description: 'Charge soir, léger premium',
        economieVsThermique: 6.5,
        coutKmElec: 41.6,
        coutKmThermique: 44.5,
        recommendePour: ['Retour travail', 'Soirée']
      }
    },

    // ========================================
    // AC 22kW - CHARGE RAPIDE
    // ========================================
    [TYPES_BORNES.AC_22KW.id]: {
      heuresCreuses: {
        periode: PERIODES.CREUSES.periode,
        periodeNom: PERIODES.CREUSES.nom,
        tarifClient: 180,           // MÊME PRIX que 7kW pour simplicité client
        coutAchat: 74,
        coutExploitation: 15,       // Légèrement plus élevé
        marge: 91,
        margePct: 123.0,
        description: 'Charge rapide nuit avec tarif avantageux',
        economieVsThermique: 35.6,
        coutKmElec: 28.8,
        coutKmThermique: 44.5,
        recommendePour: ['VTC/Taxi nuit', 'Flottes']
      },
      heuresPleines: {
        periode: PERIODES.PLEINES.periode,
        periodeNom: PERIODES.PLEINES.nom,
        tarifClient: 210,
        coutAchat: 82,
        coutExploitation: 15,
        marge: 113,
        margePct: 137.8,
        description: 'Standard pro, bon compromis vitesse/prix',
        economieVsThermique: 24.7,
        coutKmElec: 33.6,
        coutKmThermique: 44.5,
        recommendePour: ['Commercial journée', 'Flottes VTC']
      },
      heuresPointe: {
        periode: PERIODES.POINTE.periode,
        periodeNom: PERIODES.POINTE.nom,
        tarifClient: 260,
        coutAchat: 115,
        coutExploitation: 15,
        marge: 130,
        margePct: 113.0,
        description: 'Charge rapide soir, service premium',
        economieVsThermique: 6.5,
        coutKmElec: 41.6,
        coutKmThermique: 44.5,
        recommendePour: ['Urgence soir', 'Service rapide']
      }
    },

    // ========================================
    // DC 50kW - CHARGE ULTRA-RAPIDE
    // ========================================
    [TYPES_BORNES.DC_50KW.id]: {
      heuresCreuses: {
        periode: PERIODES.CREUSES.periode,
        periodeNom: PERIODES.CREUSES.nom,
        tarifClient: 200,
        coutAchat: 74,
        coutExploitation: 18,       // Plus élevé (refroidissement, maintenance DC)
        marge: 108,
        margePct: 145.9,
        description: 'Ultra-rapide nuit, excellent rapport',
        economieVsThermique: 27.9,
        coutKmElec: 32.0,
        coutKmThermique: 44.5,
        recommendePour: ['Taxi 24/7', 'Flottes intensives']
      },
      heuresPleines: {
        periode: PERIODES.PLEINES.periode,
        periodeNom: PERIODES.PLEINES.nom,
        tarifClient: 230,
        coutAchat: 82,
        coutExploitation: 18,
        marge: 130,
        margePct: 158.5,
        description: 'Ultra-rapide journée, bon compromis',
        economieVsThermique: 17.3,
        coutKmElec: 36.8,
        coutKmThermique: 44.5,
        recommendePour: ['Express journée', 'Hubs transport']
      },
      heuresPointe: {
        periode: PERIODES.POINTE.periode,
        periodeNom: PERIODES.POINTE.nom,
        tarifClient: 285,
        coutAchat: 115,
        coutExploitation: 18,
        marge: 152,
        margePct: 132.2,
        description: 'Ultra-rapide urgence, tarif premium',
        economieVsThermique: -2.5,  // Légèrement plus cher que thermique
        coutKmElec: 45.6,
        coutKmThermique: 44.5,
        noteSpeciale: 'Prix premium justifié par rapidité (40min vs 6h)',
        recommendePour: ['Urgence absolue', 'Service express']
      }
    },

    // ========================================
    // DC 150kW - CHARGE PREMIUM
    // ========================================
    [TYPES_BORNES.DC_150KW.id]: {
      heuresCreuses: {
        periode: PERIODES.CREUSES.periode,
        periodeNom: PERIODES.CREUSES.nom,
        tarifClient: 220,
        coutAchat: 74,
        coutExploitation: 25,       // Plus élevé (équipement haute puissance)
        marge: 121,
        margePct: 163.5,
        description: 'Premium nuit, meilleur rapport vitesse/prix',
        economieVsThermique: 20.7,
        coutKmElec: 35.2,
        coutKmThermique: 44.5,
        recommendePour: ['VIP nuit', 'Véhicules premium']
      },
      heuresPleines: {
        periode: PERIODES.PLEINES.periode,
        periodeNom: PERIODES.PLEINES.nom,
        tarifClient: 250,
        coutAchat: 82,
        coutExploitation: 25,
        marge: 143,
        margePct: 174.4,
        description: 'Premium journée, service haut de gamme',
        economieVsThermique: 10.1,
        coutKmElec: 40.0,
        coutKmThermique: 44.5,
        recommendePour: ['Business', 'Longue distance']
      },
      heuresPointe: {
        periode: PERIODES.POINTE.periode,
        periodeNom: PERIODES.POINTE.nom,
        tarifClient: 310,
        coutAchat: 115,
        coutExploitation: 25,
        marge: 170,
        margePct: 147.8,
        description: 'Premium express, service VIP ultra-rapide',
        economieVsThermique: -11.5,  // Plus cher mais 20min vs 6h
        coutKmElec: 49.6,
        coutKmThermique: 44.5,
        noteSpeciale: 'Premium justifié: charge complète en 20 minutes',
        recommendePour: ['VIP urgent', 'Corridors autoroutiers']
      }
    }
  },

  // 📊 TARIFS MOYENS CALCULÉS (pour affichage simplifié)
  tarifsMoyens: {
    [TYPES_BORNES.AC_7KW.id]: 217,      // Moyenne des 3 périodes
    [TYPES_BORNES.AC_22KW.id]: 217,
    [TYPES_BORNES.DC_50KW.id]: 238,
    [TYPES_BORNES.DC_150KW.id]: 260
  }
};

// 🔧 UTILITAIRES TARIFS
export const TarifsUtils = {
  /**
   * Obtient le tarif d'une borne pour une période donnée
   * @param {string} borneId - ID de la borne
   * @param {string} periodeId - ID de la période
   * @returns {Object|null} - Objet tarif complet
   */
  getTarif: (borneId, periodeId) => {
    return tarifsUnifies.grilleTarifaire[borneId]?.[periodeId] || null;
  },

  /**
   * Calcule le coût d'une session de recharge
   * @param {string} borneId
   * @param {string} periodeId
   * @param {number} kWh - Quantité d'énergie
   * @returns {Object} - Détails du coût
   */
  calculerCoutSession: (borneId, periodeId, kWh) => {
    const tarif = TarifsUtils.getTarif(borneId, periodeId);
    if (!tarif) return null;

    const coutClient = tarif.tarifClient * kWh;
    const coutTotal = (tarif.coutAchat + tarif.coutExploitation) * kWh;
    const benefice = tarif.marge * kWh;

    return {
      kWh,
      tarifUnitaire: tarif.tarifClient,
      coutClient,
      coutTotal,
      benefice,
      margePct: tarif.margePct,
      formatted: {
        coutClient: `${Math.round(coutClient).toLocaleString()} FCFA`,
        benefice: `${Math.round(benefice).toLocaleString()} FCFA`
      }
    };
  },

  /**
   * Compare les coûts entre différentes bornes/périodes
   * @param {Array} options - [{borneId, periodeId, kWh}]
   * @returns {Array} - Résultats triés par coût
   */
  comparerOptions: (options) => {
    return options
      .map(opt => ({
        ...opt,
        cout: TarifsUtils.calculerCoutSession(opt.borneId, opt.periodeId, opt.kWh)
      }))
      .sort((a, b) => a.cout.coutClient - b.cout.coutClient);
  },

  /**
   * Trouve la meilleure option tarifaire
   * @param {number} kWh
   * @param {number} tempsDisponible - heures
   * @returns {Object} - Meilleure recommandation
   */
  recommanderMeilleureOption: (kWh, tempsDisponible) => {
    const options = [];
    
    Object.keys(tarifsUnifies.grilleTarifaire).forEach(borneId => {
      Object.keys(tarifsUnifies.grilleTarifaire[borneId]).forEach(periodeId => {
        const borne = Object.values(TYPES_BORNES).find(b => b.id === borneId);
        if (!borne) return;

        const tempsNecessaire = kWh / (borne.puissance * 0.9);
        if (tempsNecessaire <= tempsDisponible) {
          const cout = TarifsUtils.calculerCoutSession(borneId, periodeId, kWh);
          options.push({
            borneId,
            periodeId,
            borne: borne.nomAffichage,
            periode: tarifsUnifies.grilleTarifaire[borneId][periodeId].periodeNom,
            tempsNecessaire,
            cout
          });
        }
      });
    });

    return options.sort((a, b) => a.cout.coutClient - b.cout.coutClient)[0] || null;
  },

  /**
   * Calcule l'économie vs thermique
   * @param {string} borneId
   * @param {string} periodeId
   * @param {number} distanceKm
   * @param {number} consoKWh100km - Défaut 16
   * @returns {Object} - Comparaison détaillée
   */
  calculerEconomieVsThermique: (borneId, periodeId, distanceKm, consoKWh100km = 16) => {
    const tarif = TarifsUtils.getTarif(borneId, periodeId);
    if (!tarif) return null;

    const kWhNecessaire = (distanceKm * consoKWh100km) / 100;
    const coutElec = tarif.tarifClient * kWhNecessaire;
    const coutThermique = tarif.coutKmThermique * distanceKm;
    const economie = coutThermique - coutElec;
    const economiePct = ((economie / coutThermique) * 100);

    return {
      distanceKm,
      kWhNecessaire: Math.round(kWhNecessaire * 10) / 10,
      coutElec: Math.round(coutElec),
      coutThermique: Math.round(coutThermique),
      economie: Math.round(economie),
      economiePct: Math.round(economiePct * 10) / 10,
      coutKmElec: Math.round((coutElec / distanceKm) * 10) / 10,
      coutKmThermique: tarif.coutKmThermique,
      formatted: {
        economie: `${Math.round(economie).toLocaleString()} FCFA`,
        economiePct: `${economiePct > 0 ? '+' : ''}${Math.round(economiePct)}%`
      }
    };
  },

  /**
   * Obtient tous les tarifs d'une borne
   * @param {string} borneId
   * @returns {Object} - Tous les tarifs de la borne
   */
  getTarifsBorne: (borneId) => {
    return tarifsUnifies.grilleTarifaire[borneId] || null;
  },

  /**
   * Liste toutes les périodes d'une borne triées par prix
   * @param {string} borneId
   * @param {boolean} ascending - Ordre croissant
   * @returns {Array}
   */
  getPeriodesTriees: (borneId, ascending = true) => {
    const tarifs = TarifsUtils.getTarifsBorne(borneId);
    if (!tarifs) return [];

    const array = Object.entries(tarifs).map(([key, value]) => ({
      periodeId: key,
      ...value
    }));

    return array.sort((a, b) => 
      ascending 
        ? a.tarifClient - b.tarifClient 
        : b.tarifClient - a.tarifClient
    );
  }
};

// Export par défaut
export default tarifsUnifies;
