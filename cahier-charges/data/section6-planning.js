/**
 * SECTION 6 : PLANNING ET PHASAGE - VERSION COMPLÈTE
 * Cahier des Charges - Station de Recharge VE
 * 
 * Planning détaillé et phasage complet du projet
 * Fusion des parties 1, 2 et 3
 */

// Import des 3 parties
import planningPart1 from './section6-planning-part1.js';
import planningPart2 from './section6-planning-part2.js';
import planningPart3 from './section6-planning-part3.js';

// Fusion des données
export const planningPhasageData = {
  ...planningPart1,
  ...planningPart2,
  ...planningPart3
};

// Export par défaut
export default planningPhasageData;
