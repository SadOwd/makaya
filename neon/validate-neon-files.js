#!/usr/bin/env node

/**
 * Script de validation de l'intégrité des fichiers NEON Interface
 * Vérifie que tous les fichiers nécessaires sont présents et valides
 */

const fs = require('fs');
const path = require('path');

const BASE_DIR = 'C:\\Users\\mmawo\\Desktop';

const FILES_TO_CHECK = [
  {
    name: 'neon-interface-part1.jsx',
    type: 'code',
    required: true,
    checks: ['import React', 'useState', 'useRef']
  },
  {
    name: 'neon-interface-part2.jsx',
    type: 'code',
    required: true,
    checks: ['useEffect', 'canvas', 'animate']
  },
  {
    name: 'neon-interface-part3.jsx',
    type: 'code',
    required: true,
    checks: ['return', 'canvas id="neon-canvas"', 'header']
  },
  {
    name: 'neon-interface-part4.jsx',
    type: 'code',
    required: true,
    checks: ['menu', 'menuOpen', 'User']
  },
  {
    name: 'neon-interface-part5.jsx',
    type: 'code',
    required: true,
    checks: ['MapPin', 'Navigation', 'Array(20)']
  },
  {
    name: 'neon-interface-part6.jsx',
    type: 'code',
    required: true,
    checks: ['tripStatus', 'idle', 'simulateTrip']
  },
  {
    name: 'neon-interface-part7.jsx',
    type: 'code',
    required: true,
    checks: ['searching', 'found', 'export default']
  },
  {
    name: 'merge-neon-interface.js',
    type: 'script',
    required: true,
    checks: ['NUM_PARTS', 'mergeFiles', 'validateCode']
  },
  {
    name: 'fusion-neon.bat',
    type: 'script',
    required: true,
    checks: ['node', 'merge-neon-interface']
  },
  {
    name: 'index-demo.html',
    type: 'demo',
    required: true,
    checks: ['<!DOCTYPE html>', 'React', 'NeonUberInterface']
  },
  {
    name: 'README-NEON-INTERFACE.md',
    type: 'doc',
    required: true,
    checks: ['NEON', 'Fonctionnalités', 'Utilisation']
  },
  {
    name: 'GUIDE-CUSTOMISATION.md',
    type: 'doc',
    required: true,
    checks: ['Personnaliser', 'Couleurs', 'Animations']
  },
  {
    name: 'RECAP-FICHIERS.txt',
    type: 'doc',
    required: true,
    checks: ['RÉCAPITULATIF', 'Liste Complète']
  },
  {
    name: 'DEMARRAGE-RAPIDE.txt',
    type: 'doc',
    required: true,
    checks: ['DÉMARRAGE RAPIDE', 'ÉTAPE']
  }
];

console.log('╔════════════════════════════════════════════════════════════════╗');
console.log('║                                                                ║');
console.log('║        🔍 VALIDATION DE L\'INTÉGRITÉ DES FICHIERS 🔍          ║');
console.log('║                  NEON RIDE Interface                           ║');
console.log('║                                                                ║');
console.log('╚════════════════════════════════════════════════════════════════╝');
console.log();

let totalFiles = 0;
let validFiles = 0;
let missingFiles = 0;
let invalidFiles = 0;

const results = {
  code: { total: 0, valid: 0 },
  script: { total: 0, valid: 0 },
  demo: { total: 0, valid: 0 },
  doc: { total: 0, valid: 0 }
};

function checkFile(fileInfo) {
  const filePath = path.join(BASE_DIR, fileInfo.name);
  totalFiles++;
  results[fileInfo.type].total++;

  console.log(`\n📄 Vérification: ${fileInfo.name}`);
  console.log('─'.repeat(60));

  // Vérifier l'existence
  if (!fs.existsSync(filePath)) {
    console.log('❌ ERREUR: Fichier manquant');
    missingFiles++;
    return false;
  }
  console.log('✅ Fichier trouvé');

  // Lire le contenu
  let content;
  try {
    content = fs.readFileSync(filePath, 'utf8');
    console.log(`✅ Contenu lu (${content.length} caractères)`);
  } catch (error) {
    console.log(`❌ ERREUR de lecture: ${error.message}`);
    invalidFiles++;
    return false;
  }

  // Vérifier le contenu minimum
  if (content.length < 100) {
    console.log('⚠️  AVERTISSEMENT: Fichier très petit (< 100 caractères)');
  }

  // Vérifications spécifiques
  let allChecksPassed = true;
  console.log('\n🔍 Vérifications du contenu:');
  
  for (const check of fileInfo.checks) {
    const found = content.includes(check);
    if (found) {
      console.log(`   ✅ "${check}" trouvé`);
    } else {
      console.log(`   ❌ "${check}" manquant`);
      allChecksPassed = false;
    }
  }

  if (allChecksPassed) {
    console.log('\n🎉 Toutes les vérifications passées !');
    validFiles++;
    results[fileInfo.type].valid++;
    return true;
  } else {
    console.log('\n⚠️  Certaines vérifications ont échoué');
    invalidFiles++;
    return false;
  }
}

// Exécuter les vérifications
console.log('🚀 Démarrage de la validation...\n');

FILES_TO_CHECK.forEach(fileInfo => {
  checkFile(fileInfo);
});

// Afficher le résumé
console.log('\n\n');
console.log('╔════════════════════════════════════════════════════════════════╗');
console.log('║                      📊 RÉSUMÉ                                 ║');
console.log('╚════════════════════════════════════════════════════════════════╝');
console.log();

console.log('📈 STATISTIQUES GLOBALES:');
console.log('─'.repeat(60));
console.log(`   Fichiers totaux:      ${totalFiles}`);
console.log(`   ✅ Fichiers valides:  ${validFiles}`);
console.log(`   ❌ Fichiers manquants: ${missingFiles}`);
console.log(`   ⚠️  Fichiers invalides: ${invalidFiles}`);
console.log();

console.log('📂 PAR CATÉGORIE:');
console.log('─'.repeat(60));
for (const [type, stats] of Object.entries(results)) {
  const percentage = stats.total > 0 ? ((stats.valid / stats.total) * 100).toFixed(1) : 0;
  const status = stats.valid === stats.total ? '✅' : '⚠️';
  console.log(`   ${status} ${type.padEnd(10)}: ${stats.valid}/${stats.total} (${percentage}%)`);
}
console.log();

// Score global
const globalPercentage = ((validFiles / totalFiles) * 100).toFixed(1);
console.log('🎯 SCORE GLOBAL:');
console.log('─'.repeat(60));

if (globalPercentage === 100) {
  console.log('   🌟🌟🌟 100% - PARFAIT ! 🌟🌟🌟');
  console.log('   Tous les fichiers sont présents et valides.');
  console.log('   Vous pouvez procéder à la fusion !');
} else if (globalPercentage >= 90) {
  console.log(`   ✅ ${globalPercentage}% - EXCELLENT`);
  console.log('   La plupart des fichiers sont valides.');
  console.log('   Vérifiez les erreurs ci-dessus.');
} else if (globalPercentage >= 70) {
  console.log(`   ⚠️  ${globalPercentage}% - BON`);
  console.log('   Plusieurs fichiers nécessitent votre attention.');
} else {
  console.log(`   ❌ ${globalPercentage}% - ATTENTION`);
  console.log('   De nombreux fichiers sont manquants ou invalides.');
  console.log('   Régénérez les fichiers manquants.');
}

console.log();

// Recommandations
if (missingFiles > 0 || invalidFiles > 0) {
  console.log('💡 RECOMMANDATIONS:');
  console.log('─'.repeat(60));
  
  if (missingFiles > 0) {
    console.log('   1. Régénérez les fichiers manquants');
    console.log('   2. Vérifiez le chemin: ' + BASE_DIR);
  }
  
  if (invalidFiles > 0) {
    console.log('   3. Vérifiez le contenu des fichiers invalides');
    console.log('   4. Assurez-vous qu\'ils n\'ont pas été modifiés');
  }
  
  console.log();
}

console.log('✨ Validation terminée !\n');

// Code de sortie
process.exit(validFiles === totalFiles ? 0 : 1);
