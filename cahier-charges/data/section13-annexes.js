/**
 * SECTION 13 : ANNEXES TECHNIQUES - VERSION COMPLÈTE
 * Cahier des Charges - Station de Recharge VE
 * 
 * Annexes techniques complètes du projet
 * Fusion des parties 1, 2 et 3
 */

// Import des 3 parties
import annexesPart1 from './section13-annexes-part1.js';
import annexesPart2 from './section13-annexes-part2.js';
import annexesPart3 from './section13-annexes-part3.js';

// Fusion des données
export const annexesTechniquesData = {
  ...annexesPart1,
  ...annexesPart2,
  ...annexesPart3
};

// Export par défaut
export default annexesTechniquesData;
