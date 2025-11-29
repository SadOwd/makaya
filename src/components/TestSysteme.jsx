// 🧪 TEST RAPIDE - Vérification du système unifié
// ============================================
// Copier ce fichier dans src/components/ et l'importer dans App.jsx pour tester
// ============================================

import React from 'react';
import { useTarifsBornes } from '../hooks/useTarifsBornes';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';

const TestSysteme = () => {
  const {
    getBorne,
    getTarif,
    calculerCoutSession,
    calculerEconomieVsThermique,
    formaterMontant,
    listerBornes,
    simulerSession
  } = useTarifsBornes();

  const tests = [];
  let testsReussis = 0;
  let testsEchoues = 0;

  // Helper pour ajouter un test
  const ajouterTest = (nom, condition, message) => {
    const reussi = condition();
    if (reussi) testsReussis++;
    else testsEchoues++;
    
    tests.push({
      nom,
      reussi,
      message: reussi ? '✓ Réussi' : `✗ Échec: ${message}`
    });
  };

  // ========================================
  // TESTS TYPES DE BORNES
  // ========================================
  
  // Test 1: Accès avec différents identifiants
  ajouterTest(
    'Compatibilité identifiants',
    () => {
      const b1 = getBorne('slow7kW');
      const b2 = getBorne('AC');
      const b3 = getBorne('AC_7KW');
      return b1 && b2 && b3 && b1.id === b2.id && b2.id === b3.id;
    },
    'Les identifiants ne retournent pas la même borne'
  );

  // Test 2: Toutes les bornes sont accessibles
  ajouterTest(
    'Liste complète des bornes',
    () => {
      const bornes = listerBornes();
      return bornes.length === 4; // AC_7KW, AC_22KW, DC_50KW, DC_150KW
    },
    'Nombre de bornes incorrect'
  );

  // Test 3: Informations borne complètes
  ajouterTest(
    'Données borne complètes',
    () => {
      const borne = getBorne('AC_22KW');
      return (
        borne &&
        borne.nomAffichage &&
        borne.puissance > 0 &&
        borne.icon &&
        borne.couleur
      );
    },
    'Données de borne incomplètes'
  );

  // ========================================
  // TESTS TARIFS
  // ========================================

  // Test 4: Accès aux tarifs
  ajouterTest(
    'Accès tarif par borne et période',
    () => {
      const tarif = getTarif('AC_22KW', 'heuresPleines');
      return tarif && tarif.tarifClient > 0;
    },
    'Tarif non accessible ou invalide'
  );

  // Test 5: Cohérence des tarifs (creuses < pleines < pointe)
  ajouterTest(
    'Cohérence progressive des tarifs',
    () => {
      const creuses = getTarif('AC_22KW', 'heuresCreuses');
      const pleines = getTarif('AC_22KW', 'heuresPleines');
      const pointe = getTarif('AC_22KW', 'heuresPointe');
      return (
        creuses.tarifClient < pleines.tarifClient &&
        pleines.tarifClient < pointe.tarifClient
      );
    },
    'Tarifs ne suivent pas la progression attendue'
  );

  // Test 6: Marges cohérentes
  ajouterTest(
    'Marges positives',
    () => {
      const tarif = getTarif('DC_50KW', 'heuresPleines');
      return tarif.marge > 0 && tarif.margePct > 0;
    },
    'Marges négatives ou nulles'
  );

  // ========================================
  // TESTS CALCULS
  // ========================================

  // Test 7: Calcul coût session
  ajouterTest(
    'Calcul coût de session',
    () => {
      const cout = calculerCoutSession('AC_22KW', 'heuresPleines', 42);
      return (
        cout &&
        cout.coutClient > 0 &&
        cout.benefice > 0 &&
        cout.kWh === 42
      );
    },
    'Calcul de coût incorrect'
  );

  // Test 8: Calcul économie vs thermique
  ajouterTest(
    'Calcul économie vs thermique',
    () => {
      const economie = calculerEconomieVsThermique('AC_7KW', 'heuresCreuses', 100, 16);
      return (
        economie &&
        economie.coutElec > 0 &&
        economie.coutThermique > 0 &&
        economie.economie !== undefined
      );
    },
    'Calcul d\'économie incorrect'
  );

  // Test 9: Formatage montant
  ajouterTest(
    'Formatage des montants',
    () => {
      const format = formaterMontant(12345);
      return format.includes('12') && format.includes('345') && format.includes('FCFA');
    },
    'Formatage incorrect'
  );

  // Test 10: Simulation complète
  ajouterTest(
    'Simulation de session complète',
    () => {
      const sim = simulerSession({
        borneId: 'DC_50KW',
        periodeId: 'heuresPleines',
        kWh: 45,
        distanceKm: 280
      });
      return (
        sim &&
        sim.borne &&
        sim.periode &&
        sim.energie &&
        sim.temps &&
        sim.cout &&
        sim.formatted
      );
    },
    'Simulation incomplète'
  );

  // ========================================
  // TESTS EDGE CASES
  // ========================================

  // Test 11: Identifiant invalide
  ajouterTest(
    'Gestion identifiant invalide',
    () => {
      const borne = getBorne('borne_inexistante');
      return borne === null;
    },
    'Ne retourne pas null pour identifiant invalide'
  );

  // Test 12: Période invalide
  ajouterTest(
    'Gestion période invalide',
    () => {
      const tarif = getTarif('AC_22KW', 'periode_inexistante');
      return tarif === null;
    },
    'Ne retourne pas null pour période invalide'
  );

  // ========================================
  // AFFICHAGE DES RÉSULTATS
  // ========================================

  const pourcentageReussite = ((testsReussis / tests.length) * 100).toFixed(0);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            🧪 Test du Système Unifié
          </h1>
          <p className="text-gray-600">
            Vérification de tous les composants : types de bornes, tarifs et calculs
          </p>
        </div>

        {/* Résumé */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-4">
            <div className="text-sm text-gray-600 mb-1">Tests Total</div>
            <div className="text-3xl font-bold text-blue-600">{tests.length}</div>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <div className="text-sm text-gray-600 mb-1">Réussis</div>
            <div className="text-3xl font-bold text-green-600">{testsReussis}</div>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <div className="text-sm text-gray-600 mb-1">Échoués</div>
            <div className="text-3xl font-bold text-red-600">{testsEchoues}</div>
          </div>
        </div>

        {/* Barre de progression */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-lg font-semibold">Taux de réussite</span>
            <span className="text-2xl font-bold text-blue-600">{pourcentageReussite}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div 
              className={`h-4 rounded-full transition-all ${
                pourcentageReussite >= 90 ? 'bg-green-500' :
                pourcentageReussite >= 70 ? 'bg-yellow-500' :
                'bg-red-500'
              }`}
              style={{ width: `${pourcentageReussite}%` }}
            />
          </div>
        </div>

        {/* Liste des tests */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Détails des Tests</h2>
          <div className="space-y-3">
            {tests.map((test, idx) => (
              <div 
                key={idx}
                className={`p-4 rounded-lg border-2 ${
                  test.reussi 
                    ? 'border-green-200 bg-green-50' 
                    : 'border-red-200 bg-red-50'
                }`}
              >
                <div className="flex items-start gap-3">
                  {test.reussi ? (
                    <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
                  ) : (
                    <XCircle className="text-red-600 flex-shrink-0" size={24} />
                  )}
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800 mb-1">
                      Test {idx + 1}: {test.nom}
                    </div>
                    <div className={`text-sm ${test.reussi ? 'text-green-700' : 'text-red-700'}`}>
                      {test.message}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statut final */}
        <div className={`mt-6 p-6 rounded-xl border-2 ${
          testsEchoues === 0 
            ? 'bg-green-50 border-green-500' 
            : 'bg-yellow-50 border-yellow-500'
        }`}>
          <div className="flex items-center gap-3">
            {testsEchoues === 0 ? (
              <>
                <CheckCircle className="text-green-600" size={32} />
                <div>
                  <div className="font-bold text-green-800 text-lg">
                    ✅ Tous les tests sont passés !
                  </div>
                  <div className="text-green-700 text-sm">
                    Le système est prêt à être utilisé en production.
                  </div>
                </div>
              </>
            ) : (
              <>
                <AlertCircle className="text-yellow-600" size={32} />
                <div>
                  <div className="font-bold text-yellow-800 text-lg">
                    ⚠️ Certains tests ont échoué
                  </div>
                  <div className="text-yellow-700 text-sm">
                    Veuillez vérifier les erreurs ci-dessus avant le déploiement.
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Exemples de valeurs */}
        {testsReussis > 0 && (
          <div className="mt-6 bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              📊 Exemples de Valeurs Réelles
            </h3>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded">
                <div className="font-semibold mb-2">AC 22kW - Heures Pleines</div>
                <div className="text-sm space-y-1">
                  <div>Tarif client: {getTarif('AC_22KW', 'heuresPleines')?.tarifClient} FCFA/kWh</div>
                  <div>Coût 42 kWh: {formaterMontant(getTarif('AC_22KW', 'heuresPleines')?.tarifClient * 42)}</div>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded">
                <div className="font-semibold mb-2">DC 50kW - Heures Creuses</div>
                <div className="text-sm space-y-1">
                  <div>Tarif client: {getTarif('DC_50KW', 'heuresCreuses')?.tarifClient} FCFA/kWh</div>
                  <div>Marge: {getTarif('DC_50KW', 'heuresCreuses')?.margePct.toFixed(1)}%</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestSysteme;
