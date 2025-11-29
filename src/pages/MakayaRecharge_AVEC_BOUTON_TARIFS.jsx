// 🆕 BOUTON TARIFS UNIFIÉ - À ajouter dans MakayaRecharge
// Copier ce code dans votre fichier MakayaRecharge.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Si vous utilisez React Router
// OU si vous utilisez le système de navigation de App-BP-Enhanced-Full:
// Passez onNavigate en props depuis App-BP-Enhanced-Full
import CahierChargeRecharge from './CahierChargeRecharge';


const MakayaRecharge = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('vue-ensemble');
  {activeTab === 'cahier-charge' && <CahierChargeRecharge />}

  // Fonction pour naviguer vers les tarifs
  const goToTarifs = () => {
    // Si vous utilisez le système de App-BP-Enhanced-Full
    if (onNavigate) {
      onNavigate('exemples-tarifs');
    } else {
      // Sinon utiliser le hash
      window.location.hash = 'exemples-tarifs';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header avec bouton Tarifs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Makaya Recharge</h1>
              <p className="text-gray-600 text-sm">Réseau de bornes électriques</p>
            </div>
            
            {/* 🆕 BOUTON TARIFS */}
            <div className="flex items-center gap-3">
              <button
                onClick={goToTarifs}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 group"
              >
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Voir Tarifs Unifiés</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Bouton Test Système (optionnel) */}
              <button
                onClick={() => {
                  if (onNavigate) {
                    onNavigate('test-tarifs');
                  } else {
                    window.location.hash = 'test-tarifs';
                  }
                }}
                className="flex items-center gap-2 px-4 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all"
              >
                <Award className="w-5 h-5" />
                <span>Test Système</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs avec badge Nouveau */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-2 py-4 overflow-x-auto">
            <button
              onClick={() => setActiveTab('vue-ensemble')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'vue-ensemble'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <BarChart3 className="w-5 h-5" />
              Vue d'ensemble
            </button>

            <button
              onClick={() => setActiveTab('stations')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'stations'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <MapPin className="w-5 h-5" />
              Stations
            </button>

            <button
              onClick={() => setActiveTab('tarifs')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all relative ${
                activeTab === 'tarifs'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <DollarSign className="w-5 h-5" />
              Tarifs
              {/* Badge Nouveau */}
              <span className="absolute -top-1 -right-1 px-2 py-0.5 bg-green-500 text-white text-xs font-bold rounded-full animate-pulse">
                NEW
              </span>
            </button>

            <button
              onClick={() => setActiveTab('abonnements')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'abonnements'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Crown className="w-5 h-5" />
              Abonnements
            </button>
          </div>
        </div>
      </div>

      {/* Contenu */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        {activeTab === 'tarifs' && (
          <TarifsUnifiesSection onNavigate={onNavigate} />
        )}
        
        {/* Autres tabs... */}
      </div>
    </div>
  );
};

// 🆕 NOUVELLE SECTION TARIFS UNIFIÉS
const TarifsUnifiesSection = ({ onNavigate }) => {
  return (
    <div className="space-y-6">
      {/* En-tête */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">💰 Système de Tarification Unifié</h2>
            <p className="text-green-100">
              Nouvelle grille tarifaire optimisée et cohérente pour tous les types de bornes
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold">4</div>
            <div className="text-sm text-green-100">Types de bornes</div>
          </div>
        </div>
      </div>

      {/* Cards d'accès rapide */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Voir Tarifs Complets */}
        <div
          onClick={() => {
            if (onNavigate) {
              onNavigate('exemples-tarifs');
            } else {
              window.location.hash = 'exemples-tarifs';
            }
          }}
          className="group cursor-pointer bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-green-500 hover:shadow-xl transition-all"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-green-500 group-hover:translate-x-1 transition-all" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            📊 Grille Tarifaire Complète
          </h3>
          <p className="text-gray-600 mb-4">
            Consultez tous les tarifs par type de borne (AC 7kW, AC 22kW, DC 50kW, DC 150kW) 
            et par période (creuses, pleines, pointe)
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-semibold">
              5 exemples interactifs
            </span>
            <span className="text-gray-500">Avec calculateur</span>
          </div>
        </div>

        {/* Tester le Système */}
        <div
          onClick={() => {
            if (onNavigate) {
              onNavigate('test-tarifs');
            } else {
              window.location.hash = 'test-tarifs';
            }
          }}
          className="group cursor-pointer bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            🧪 Test du Système
          </h3>
          <p className="text-gray-600 mb-4">
            Vérifiez que le nouveau système de tarification fonctionne correctement 
            avec 12 tests automatiques
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-semibold">
              12 tests auto
            </span>
            <span className="text-gray-500">Validation complète</span>
          </div>
        </div>
      </div>

      {/* Aperçu des tarifs */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          ⚡ Aperçu des Tarifs par Type de Borne
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* AC 7kW */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
            <div className="text-2xl mb-2">🐢</div>
            <h4 className="font-bold text-gray-900 mb-2">AC 7kW</h4>
            <p className="text-sm text-gray-600 mb-3">Charge Lente</p>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Creuses:</span>
                <span className="font-bold text-green-600">180 FCFA/kWh</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Pleines:</span>
                <span className="font-bold text-blue-600">210 FCFA/kWh</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Pointe:</span>
                <span className="font-bold text-orange-600">260 FCFA/kWh</span>
              </div>
            </div>
          </div>

          {/* AC 22kW */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-200">
            <div className="text-2xl mb-2">⚡</div>
            <h4 className="font-bold text-gray-900 mb-2">AC 22kW</h4>
            <p className="text-sm text-gray-600 mb-3">Charge Rapide</p>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Creuses:</span>
                <span className="font-bold text-green-600">180 FCFA/kWh</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Pleines:</span>
                <span className="font-bold text-blue-600">210 FCFA/kWh</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Pointe:</span>
                <span className="font-bold text-orange-600">260 FCFA/kWh</span>
              </div>
            </div>
          </div>

          {/* DC 50kW */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-4 border border-orange-200">
            <div className="text-2xl mb-2">🚀</div>
            <h4 className="font-bold text-gray-900 mb-2">DC 50kW</h4>
            <p className="text-sm text-gray-600 mb-3">Ultra-Rapide</p>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Creuses:</span>
                <span className="font-bold text-green-600">200 FCFA/kWh</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Pleines:</span>
                <span className="font-bold text-blue-600">230 FCFA/kWh</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Pointe:</span>
                <span className="font-bold text-orange-600">285 FCFA/kWh</span>
              </div>
            </div>
          </div>

          {/* DC 150kW */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-200">
            <div className="text-2xl mb-2">⚡⚡</div>
            <h4 className="font-bold text-gray-900 mb-2">DC 150kW</h4>
            <p className="text-sm text-gray-600 mb-3">Premium</p>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Creuses:</span>
                <span className="font-bold text-green-600">220 FCFA/kWh</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Pleines:</span>
                <span className="font-bold text-blue-600">250 FCFA/kWh</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Pointe:</span>
                <span className="font-bold text-orange-600">310 FCFA/kWh</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bouton voir détails */}
        <div className="mt-6 text-center">
          <button
            onClick={() => {
              if (onNavigate) {
                onNavigate('exemples-tarifs');
              } else {
                window.location.hash = 'exemples-tarifs';
              }
            }}
            className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all inline-flex items-center gap-2"
          >
            <span>Voir tous les détails et calculateurs</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Avantages du système unifié */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          ✨ Avantages du Système Unifié
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Cohérence Totale</h4>
              <p className="text-sm text-gray-600">
                Tarifs identiques affichés partout dans l'application
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Calculs Automatiques</h4>
              <p className="text-sm text-gray-600">
                Coûts et économies calculés précisément
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Mise à Jour Facile</h4>
              <p className="text-sm text-gray-600">
                Modifier un tarif une fois, appliqué partout
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakayaRecharge;
