#!/usr/bin/env node

/**
 * Script de fusion des parties de l'interface NEON
 * Fusionne automatiquement les 7 parties en un fichier complet
 */

const fs = require('fs');
const path = require('path');

// Configuration
const PARTS_DIR = 'C:\\Users\\mmawo\\Desktop';
const OUTPUT_FILE = path.join(PARTS_DIR, 'neon-interface-complete.jsx');
const NUM_PARTS = 7;

console.log('🚀 Démarrage de la fusion des fichiers NEON Interface...\n');

// Fonction pour lire un fichier
function readPart(partNumber) {
  const filePath = path.join(PARTS_DIR, `neon-interface-part${partNumber}.jsx`);
  try {
    if (!fs.existsSync(filePath)) {
      console.error(`❌ Erreur: Le fichier ${filePath} n'existe pas`);
      return null;
    }
    const content = fs.readFileSync(filePath, 'utf8');
    console.log(`✅ Partie ${partNumber} lue avec succès (${content.length} caractères)`);
    return content;
  } catch (error) {
    console.error(`❌ Erreur lors de la lecture de la partie ${partNumber}:`, error.message);
    return null;
  }
}

// Fonction principale de fusion
function mergeFiles() {
  let mergedContent = '';
  let hasError = false;

  // Lire toutes les parties
  for (let i = 1; i <= NUM_PARTS; i++) {
    const content = readPart(i);
    if (content === null) {
      hasError = true;
      break;
    }
    
    // Retirer les commentaires de séparation pour éviter les doublons
    let cleanContent = content.replace(/\/\/ ={40,}\n\/\/ PARTIE \d+.*\n\/\/ ={40,}\n\n/g, '');
    
    // Ajouter le contenu
    mergedContent += cleanContent;
    
    // Ajouter un saut de ligne entre les parties (sauf la dernière)
    if (i < NUM_PARTS) {
      mergedContent += '\n';
    }
  }

  if (hasError) {
    console.error('\n❌ Fusion interrompue en raison d\'erreurs');
    return false;
  }

  // Écrire le fichier fusionné
  try {
    fs.writeFileSync(OUTPUT_FILE, mergedContent, 'utf8');
    console.log(`\n✨ Fusion réussie!`);
    console.log(`📄 Fichier créé: ${OUTPUT_FILE}`);
    console.log(`📊 Taille totale: ${mergedContent.length} caractères`);
    console.log(`📦 Lignes totales: ${mergedContent.split('\n').length}`);
    return true;
  } catch (error) {
    console.error(`\n❌ Erreur lors de l'écriture du fichier fusionné:`, error.message);
    return false;
  }
}

// Fonction pour vérifier l'intégrité du code
function validateCode(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Vérifications basiques
    const checks = {
      'Import React': content.includes('import React'),
      'Déclaration du composant': content.includes('const NeonUberInterface'),
      'Export': content.includes('export default NeonUberInterface'),
      'Return JSX': content.includes('return ('),
      'Canvas': content.includes('canvas id="neon-canvas"'),
      'Menu latéral': content.includes('menuOpen'),
      'États de trajet': content.includes('tripStatus'),
    };

    console.log('\n🔍 Validation du code:');
    let allValid = true;
    for (const [check, passed] of Object.entries(checks)) {
      console.log(`${passed ? '✅' : '❌'} ${check}`);
      if (!passed) allValid = false;
    }

    return allValid;
  } catch (error) {
    console.error('❌ Erreur lors de la validation:', error.message);
    return false;
  }
}

// Exécution principale
console.log('═'.repeat(50));
console.log('   SCRIPT DE FUSION - NEON INTERFACE UBER');
console.log('═'.repeat(50));
console.log();

const success = mergeFiles();

if (success) {
  console.log('\n' + '═'.repeat(50));
  const isValid = validateCode(OUTPUT_FILE);
  console.log('═'.repeat(50));
  
  if (isValid) {
    console.log('\n🎉 Processus terminé avec succès!');
    console.log('💡 Vous pouvez maintenant utiliser le fichier:');
    console.log(`   ${OUTPUT_FILE}`);
  } else {
    console.log('\n⚠️  Fusion terminée mais des vérifications ont échoué');
    console.log('   Veuillez vérifier manuellement le fichier généré');
  }
} else {
  console.log('\n💥 La fusion a échoué. Vérifiez les erreurs ci-dessus.');
}

console.log();
