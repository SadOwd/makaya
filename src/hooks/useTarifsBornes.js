// 🎣 MAKAYA RECHARGE - HOOK REACT PERSONNALISÉ
// ============================================================
// Hook React pour utilisation facile des types de bornes et tarifs
// Usage: const { getBorne, getTarif, calculerCout } = useTarifsBornes();
// ============================================================

import { useMemo } from 'react';
import { TYPES_BORNES, TypesBornesUtils } from '../data/typesBornesReference';
import { tarifsUnifies, TarifsUtils, PERIODES } from '../data/tarifsUnifies';

/**
 * Hook personnalisé pour gérer les types de bornes et tarifs
 * @returns {Object} - Ensemble de fonctions et données utiles
 */
export const useTarifsBornes = () => {
  // Mémoïser les données pour éviter recalculs
  const bornesDisponibles = useMemo(() => Object.values(TYPES_BORNES), []);
  const periodesDisponibles = useMemo(() => Object.values(PERIODES), []);

  /**
   * 🔌 FONCTIONS TYPES DE BORNES
   */
  
  const getBorne = (identifier) => TypesBornesUtils.getBorne(identifier);
  const getNomAffichage = (identifier) => TypesBornesUtils.getNomAffichage(identifier);
  const getCouleur = (identifier) => TypesBornesUtils.getCouleur(identifier);
  
  const listerBornes = (type = null) => {
    if (type === 'AC') return TypesBornesUtils.getBornesAC();
    if (type === 'DC') return TypesBornesUtils.getBornesDC();
    return bornesDisponibles;
  };

  const calculerTempsCharge = (identifier, kWh) => {
    return TypesBornesUtils.calculerTempsCharge(identifier, kWh);
  };

  const recommanderBorne = (kWh, tempsDisponible) => {
    return TypesBornesUtils.recommanderBorne(kWh, tempsDisponible);
  };

  /**
   * 💰 FONCTIONS TARIFS
   */

  const getTarif = (borneId, periodeId) => {
    const borne = getBorne(borneId);
    if (!borne) return null;
    return TarifsUtils.getTarif(borne.id, periodeId);
  };

  const getTarifsBorne = (borneId) => {
    const borne = getBorne(borneId);
    if (!borne) return null;
    return TarifsUtils.getTarifsBorne(borne.id);
  };

  const calculerCoutSession = (borneId, periodeId, kWh) => {
    const borne = getBorne(borneId);
    if (!borne) return null;
    return TarifsUtils.calculerCoutSession(borne.id, periodeId, kWh);
  };

  const calculerEconomieVsThermique = (borneId, periodeId, distanceKm, consoKWh100km = 16) => {
    const borne = getBorne(borneId);
    if (!borne) return null;
    return TarifsUtils.calculerEconomieVsThermique(borne.id, periodeId, distanceKm, consoKWh100km);
  };

  const comparerOptions = (options) => {
    const normalizedOptions = options.map(opt => {
      const borne = getBorne(opt.borneId);
      return { ...opt, borneId: borne?.id || opt.borneId };
    });
    return TarifsUtils.comparerOptions(normalizedOptions);
  };

  const recommanderMeilleureOption = (kWh, tempsDisponible) => {
    return TarifsUtils.recommanderMeilleureOption(kWh, tempsDisponible);
  };

  /**
   * 🎨 FONCTIONS D'AFFICHAGE
   */

  const formaterMontant = (montant) => {
    return `${Math.round(montant).toLocaleString('fr-FR')} FCFA`;
  };

  const formaterPourcentage = (valeur, decimales = 1) => {
    const signe = valeur >= 0 ? '+' : '';
    return `${signe}${valeur.toFixed(decimales)}%`;
  };

  const getBadgePeriode = (periodeId) => {
    const periode = periodesDisponibles.find(p => p.id === periodeId);
    return periode ? `${periode.emoji} ${periode.nom}` : periodeId;
  };

  const getCSSPeriode = (periodeId) => {
    const cssMap = {
      heuresCreuses: 'bg-blue-100 text-blue-700 border-blue-300',
      heuresPleines: 'bg-orange-100 text-orange-700 border-orange-300',
      heuresPointe: 'bg-red-100 text-red-700 border-red-300'
    };
    return cssMap[periodeId] || 'bg-gray-100 text-gray-700';
  };

  /**
   * 📊 FONCTIONS ANALYTIQUES
   */

  const getStatistiquesBorne = (borneId) => {
    const borne = getBorne(borneId);
    if (!borne) return null;

    const tarifs = getTarifsBorne(borneId);
    if (!tarifs) return null;

    const tarifMoyen = Object.values(tarifs).reduce((sum, t) => sum + t.tarifClient, 0) / Object.values(tarifs).length;
    const margeMoyenne = Object.values(tarifs).reduce((sum, t) => sum + t.margePct, 0) / Object.values(tarifs).length;
    const tarifMin = Math.min(...Object.values(tarifs).map(t => t.tarifClient));
    const tarifMax = Math.max(...Object.values(tarifs).map(t => t.tarifClient));

    return {
      borne: borne.nomAffichage,
      puissance: borne.puissance,
      tarifMoyen: Math.round(tarifMoyen),
      margeMoyenne: Math.round(margeMoyenne * 10) / 10,
      tarifMin,
      tarifMax,
      ecartTarif: tarifMax - tarifMin,
      tempsChargeMoyen: borne.tempsChargeMoyen
    };
  };

  const comparerBornesPourPeriode = (periodeId) => {
    return bornesDisponibles.map(borne => {
      const tarif = getTarif(borne.id, periodeId);
      return {
        borne: borne.nomAffichage,
        borneId: borne.id,
        puissance: borne.puissance,
        icon: borne.icon,
        tarif: tarif?.tarifClient || 0,
        marge: tarif?.margePct || 0,
        economieVsThermique: tarif?.economieVsThermique || 0
      };
    }).sort((a, b) => a.tarif - b.tarif);
  };

  /**
   * 🎯 SIMULATION DE SESSION
   */

  const simulerSession = ({ borneId, periodeId, kWh, distanceKm = null }) => {
    const borne = getBorne(borneId);
    if (!borne) return null;

    const tarif = getTarif(borneId, periodeId);
    if (!tarif) return null;

    const temps = calculerTempsCharge(borneId, kWh);
    const cout = calculerCoutSession(borneId, periodeId, kWh);
    const economie = distanceKm ? calculerEconomieVsThermique(borneId, periodeId, distanceKm) : null;

    return {
      borne: {
        nom: borne.nomAffichage,
        puissance: borne.puissance,
        type: borne.type,
        icon: borne.icon
      },
      periode: {
        nom: tarif.periodeNom,
        horaire: tarif.periode
      },
      energie: {
        kWh,
        distanceKm,
        autonomieGagnee: distanceKm || Math.round((kWh / 16) * 100)
      },
      temps,
      cout,
      economie,
      formatted: {
        nom: `${borne.icon} ${borne.nomAffichage}`,
        temps: temps?.formatted || 'N/A',
        cout: formaterMontant(cout?.coutClient || 0),
        economie: economie ? formaterMontant(economie.economie) : 'N/A'
      }
    };
  };

  // 🎁 Retour de toutes les fonctions
  return {
    bornesDisponibles,
    periodesDisponibles,
    TYPES_BORNES,
    PERIODES,
    getBorne,
    getNomAffichage,
    getCouleur,
    listerBornes,
    calculerTempsCharge,
    recommanderBorne,
    getTarif,
    getTarifsBorne,
    calculerCoutSession,
    calculerEconomieVsThermique,
    comparerOptions,
    recommanderMeilleureOption,
    formaterMontant,
    formaterPourcentage,
    getBadgePeriode,
    getCSSPeriode,
    getStatistiquesBorne,
    comparerBornesPourPeriode,
    simulerSession
  };
};

export default useTarifsBornes;
