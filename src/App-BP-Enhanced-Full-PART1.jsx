// ========================================
// PARTIE 1/2 : IMPORTS ET COMPOSANTS MODAUX
// ========================================

import React, { useState } from 'react';
import BusinessPlanJuridique from './pages/BusinessPlanJuridique';
import { Zap, Home, BarChart3, Scale, Radio, Award, Sparkles, FileText, BookOpen, Settings } from 'lucide-react';
import HomePage from './pages/HomePage';
import DashboardPrincipal from './components/DashboardPrincipal';
import MakayaRide from './pages/MakayaRide';
import MakayaRideNeon from './pages/MakayaRideNeon';
import MakayaRideNeonPro from './pages/MakayaRideNeonPro';
import MakayaMobility from './pages/MakayaMobility';
import MakayaRecharge from './pages/MakayaRecharge';
import CahierChargeRecharge from './pages/CahierChargeRecharge';
import CahierCharges from './components/CahierCharges/CahierCharges';

// 🆕 NOUVEAUX COMPOSANTS - Système Unifié Tarifs
import TestSysteme from './components/TestSysteme';
import ExemplesUsage from './components/ExemplesUsageTarifs';

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [showCIEModal, setShowCIEModal] = useState(false);
  const [showNeonModal, setShowNeonModal] = useState(false);
  const [showCahierModal, setShowCahierModal] = useState(false);

  const handleNavigation = (view) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ========================================
  // MODAL CIE - Analyse Juridique
  // ========================================
  const CIEModal = ({ onClose }) => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl max-w-2xl w-full p-8 border border-slate-700 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
              <Scale className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">CIE - Analyse Juridique</h2>
              <p className="text-slate-400 text-sm">Cadre réglementaire & conformité</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed">
            Accédez à l'analyse juridique complète du projet Makaya Energy, incluant le cadre réglementaire, les obligations légales et les opportunités fiscales.
          </p>
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-slate-800/50 rounded-lg p-4 border border-green-500/20">
              <p className="text-slate-400 text-sm mb-1">Valeur nette</p>
              <p className="text-2xl font-bold text-green-400">523M FCFA</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4 border border-blue-500/20">
              <p className="text-slate-400 text-sm mb-1">ROI Juridique</p>
              <p className="text-2xl font-bold text-blue-400">157%</p>
            </div>
          </div>
          <button 
            onClick={() => {
              onClose();
              handleNavigation('businessplan');
            }}
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all"
          >
            Accéder à l'analyse CIE
          </button>
        </div>
      </div>
    </div>
  );

  // ========================================
  // MODAL NEON - Interface VTC
  // ========================================
  const NeonModal = ({ onClose }) => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl max-w-2xl w-full p-8 border border-orange-500/50 shadow-2xl shadow-orange-500/20" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/50 animate-pulse">
              <Radio className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">NEON PRO - Interface VTC</h2>
              <p className="text-slate-400 text-sm">Réservation style Uber/Bolt/Yango</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed">
            Découvrez l'interface NEON PRO de Makaya Ride : une expérience de réservation VTC professionnelle avec carte interactive, recherche intelligente de lieux, sélection de véhicules en temps réel et suivi de course.
          </p>
          <div className="grid grid-cols-3 gap-4 my-6">
            <div className="bg-slate-800/50 rounded-lg p-4 text-center border border-orange-500/20">
              <p className="text-3xl mb-1">🗺️</p>
              <p className="text-slate-400 text-xs">Carte interactive</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4 text-center border border-green-500/20">
              <p className="text-3xl mb-1">⚡</p>
              <p className="text-slate-400 text-xs">Temps réel</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4 text-center border border-blue-500/20">
              <p className="text-3xl mb-1">🎨</p>
              <p className="text-slate-400 text-xs">Design Neon</p>
            </div>
          </div>
          <button 
            onClick={() => {
              onClose();
              setCurrentView('ride-neon-pro');
            }}
            className="w-full py-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all"
          >
            Ouvrir l'interface NEON PRO
          </button>
        </div>
      </div>
    </div>
  );

  // ========================================
  // 🆕 NOUVEAU MODAL - Cahier des Charges
  // ========================================
  const CahierChargesModal = ({ onClose }) => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl max-w-2xl w-full p-8 border border-green-500/50 shadow-2xl shadow-green-500/20" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/50">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Cahier des Charges Complet</h2>
              <p className="text-slate-400 text-sm">Station de Recharge VE - Lomé, Togo</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed">
            Découvrez le cahier des charges complet de notre station de recharge pour véhicules électriques : budget détaillé, planning, spécifications techniques, modèle économique et analyse de rentabilité.
          </p>
          
          {/* Statistiques clés */}
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-slate-800/50 rounded-lg p-4 border border-blue-500/20">
              <p className="text-slate-400 text-sm mb-1">Budget Total</p>
              <p className="text-2xl font-bold text-blue-400">69,6M FCFA</p>
              <p className="text-xs text-slate-500 mt-1">≈ 116 000 USD</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4 border border-green-500/20">
              <p className="text-slate-400 text-sm mb-1">ROI Estimé</p>
              <p className="text-2xl font-bold text-green-400">&lt; 12 mois</p>
              <p className="text-xs text-slate-500 mt-1">TRI 180-200%</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4 border border-purple-500/20">
              <p className="text-slate-400 text-sm mb-1">Sections</p>
              <p className="text-2xl font-bold text-purple-400">13/13</p>
              <p className="text-xs text-slate-500 mt-1">Complètes ✅</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4 border border-orange-500/20">
              <p className="text-slate-400 text-sm mb-1">Puissance</p>
              <p className="text-2xl font-bold text-orange-400">525 kW</p>
              <p className="text-xs text-slate-500 mt-1">10 bornes</p>
            </div>
          </div>

          {/* Points clés */}
          <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700">
            <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
              <span className="text-green-400">✓</span>
              Contenu inclus
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <span className="text-green-400">•</span>
                13 sections complètes
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">•</span>
                Budget détaillé
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-400">•</span>
                Planning 28 semaines
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-400">•</span>
                Spécifications techniques
              </div>
              <div className="flex items-center gap-2">
                <span className="text-pink-400">•</span>
                Modèle économique
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">•</span>
                Analyse risques
              </div>
            </div>
          </div>

          {/* Boutons d'action */}
          <div className="flex gap-3 mt-6">
            <button 
              onClick={() => {
                onClose();
                handleNavigation('cahier-charges');
              }}
              className="flex-1 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all"
            >
              Ouvrir le Cahier des Charges
            </button>
            <button 
              onClick={() => {
                onClose();
                handleNavigation('recharge');
              }}
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all"
            >
              <Zap className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

// ========================================
// FIN PARTIE 1/2
// ========================================
