// ========================================
// PARTIE 1/2 : IMPORTS ET COMPOSANTS MODAUX
// Updated: 2025-12-04 - Force Reload
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



  // Render des différentes vues
  const renderView = () => {
    switch(currentView) {
      case 'home':
        return <HomePage onNavigate={handleNavigation} />;
      
      // ========================================
      // 🆕 CAHIER DES CHARGES COMPLET (NOUVEAU)
      // ========================================
      case 'cahier-charges':
        return (
          <div className="min-h-screen bg-gray-50">
            {/* Header avec navigation améliorée */}
            <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
              <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handleNavigation('home')}
                    className="flex items-center gap-3 hover:opacity-80 transition"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h1 className="text-xl font-bold text-gray-900">Cahier des Charges - Station Pilote</h1>
                      <p className="text-xs text-gray-500">Projet Initial • 1 Station • 10 Bornes • 69.6M FCFA</p>
                    </div>
                  </button>
                  
                  {/* Boutons d'action */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleNavigation('recharge')}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition flex items-center gap-2"
                    >
                      <Zap className="h-4 w-4" />
                      <span className="hidden md:inline">Recharge</span>
                    </button>
                    <button
                      onClick={() => setShowCahierModal(true)}
                      className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition flex items-center gap-2"
                    >
                      <Settings className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleNavigation('home')}
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition flex items-center gap-2"
                    >
                      <Home className="h-4 w-4" />
                      <span className="hidden md:inline">Accueil</span>
                    </button>
                  </div>
                </div>
              </div>
            </nav>
            
            {/* Contenu du cahier des charges */}
            <CahierCharges />
          </div>
        );
      
      // ========================================
      // SYSTÈME TARIFS - TEST
      // ========================================
      case 'test-tarifs':
        return (
          <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
            <nav className="sticky top-0 z-50 bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-xl border-b border-slate-700/50 shadow-2xl">
              <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handleNavigation('home')}
                    className="flex items-center gap-3 hover:opacity-80 transition"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h1 className="text-xl font-bold text-white">Test Système</h1>
                      <p className="text-xs text-slate-400">Vérification Types & Tarifs</p>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavigation('home')}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition flex items-center gap-2"
                  >
                    <Home className="h-4 w-4" />
                    Accueil
                  </button>
                </div>
              </div>
            </nav>
            <TestSysteme />
          </div>
        );
      
      // ========================================
      // SYSTÈME TARIFS - EXEMPLES
      // ========================================
      case 'exemples-tarifs':
        return (
          <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
            <nav className="sticky top-0 z-50 bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-xl border-b border-slate-700/50 shadow-2xl">
              <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handleNavigation('home')}
                    className="flex items-center gap-3 hover:opacity-80 transition"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h1 className="text-xl font-bold text-white">Exemples Tarifs</h1>
                      <p className="text-xs text-slate-400">Guide d'utilisation</p>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavigation('home')}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition flex items-center gap-2"
                  >
                    <Home className="h-4 w-4" />
                    Accueil
                  </button>
                </div>
              </div>
            </nav>
            <ExemplesUsage />
          </div>
        );
      
      // ========================================
      // CAHIER DE CHARGE RECHARGE (ANCIEN)
      // ========================================
      case 'cahier-charge':
        return (
          <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
            <nav className="sticky top-0 z-50 bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-xl border-b border-slate-700/50 shadow-2xl">
              <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handleNavigation('home')}
                    className="flex items-center gap-3 hover:opacity-80 transition"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h1 className="text-xl font-bold text-white">Cahier de Charge</h1>
                      <p className="text-xs text-slate-400">Station Recharge Lomé</p>
                    </div>
                  </button>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleNavigation('cahier-charges')}
                      className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition flex items-center gap-2"
                    >
                      <BookOpen className="h-4 w-4" />
                      <span className="hidden md:inline">Nouveau CDC</span>
                    </button>
                    <button
                      onClick={() => handleNavigation('recharge')}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition flex items-center gap-2"
                    >
                      <Zap className="h-4 w-4" />
                      <span className="hidden md:inline">Recharge</span>
                    </button>
                    <button
                      onClick={() => handleNavigation('home')}
                      className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition flex items-center gap-2"
                    >
                      <Home className="h-4 w-4" />
                      <span className="hidden md:inline">Accueil</span>
                    </button>
                  </div>
                </div>
              </div>
            </nav>
            <CahierChargeRecharge onNavigate={handleNavigation} />
          </div>
        );
      
      // ========================================
      // MAKAYA RIDE - STANDARD
      // ========================================
      case 'ride':
        return (
          <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
            <nav className="sticky top-0 z-50 bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-xl border-b border-slate-700/50 shadow-2xl">
              <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handleNavigation('home')}
                    className="flex items-center gap-3 hover:opacity-80 transition"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h1 className="text-xl font-bold text-white">Makaya Ride</h1>
                      <p className="text-xs text-slate-400">VTC Électrique</p>
                    </div>
                  </button>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setShowNeonModal(true)}
                      className="px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-lg transition flex items-center gap-2 hover:shadow-lg hover:shadow-orange-500/50 animate-pulse"
                    >
                      <Radio className="h-4 w-4" />
                      <span className="hidden md:inline">NEON PRO</span>
                    </button>
                    <button
                      onClick={() => handleNavigation('home')}
                      className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition flex items-center gap-2"
                    >
                      <Home className="h-4 w-4" />
                      <span className="hidden md:inline">Accueil</span>
                    </button>
                  </div>
                </div>
              </div>
            </nav>
            <MakayaRide />
          </div>
        );

      // ========================================
      // MAKAYA RIDE - NEON
      // ========================================
      case 'ride-neon':
        return (
          <div className="min-h-screen" style={{ backgroundColor: '#12121e' }}>
            <nav className="sticky top-0 z-50 border-b border-gray-800" style={{ backgroundColor: '#1a1a2c' }}>
              <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handleNavigation('home')}
                    className="flex items-center gap-3 hover:opacity-80 transition"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/50">
                      <Radio className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h1 className="text-xl font-bold" style={{ color: 'hsl(30, 90%, 60%)' }}>Makaya Ride NEON</h1>
                      <p className="text-xs text-slate-400">Interface Futuriste</p>
                    </div>
                  </button>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleNavigation('ride-neon-pro')}
                      className="px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-lg transition"
                    >
                      <span className="hidden md:inline">PRO</span>
                    </button>
                    <button
                      onClick={() => handleNavigation('ride')}
                      className="px-4 py-2 text-slate-400 hover:text-white rounded-lg transition flex items-center gap-2"
                    >
                      <span className="hidden md:inline">Standard</span>
                    </button>
                  </div>
                </div>
              </div>
            </nav>
            <MakayaRideNeon />
          </div>
        );

      // ========================================
      // MAKAYA RIDE - NEON PRO
      // ========================================
      case 'ride-neon-pro':
        return (
          <div className="min-h-screen" style={{ backgroundColor: '#0A0A14' }}>
            <nav className="sticky top-0 z-50 border-b border-gray-800" style={{ backgroundColor: '#13131F' }}>
              <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handleNavigation('home')}
                    className="flex items-center gap-3 hover:opacity-80 transition"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/50 animate-pulse">
                      <Radio className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h1 className="text-xl font-bold" style={{ color: '#FF6B35' }}>Makaya Ride NEON PRO</h1>
                      <p className="text-xs text-slate-400">Interface Premium Style Uber</p>
                    </div>
                  </button>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleNavigation('ride')}
                      className="px-4 py-2 text-slate-400 hover:text-white rounded-lg transition"
                    >
                      <span className="hidden md:inline">Standard</span>
                    </button>
                    <button
                      onClick={() => handleNavigation('home')}
                      className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition flex items-center gap-2"
                    >
                      <Home className="h-4 w-4" />
                      <span className="hidden md:inline">Accueil</span>
                    </button>
                  </div>
                </div>
              </div>
            </nav>
            <MakayaRideNeonPro />
          </div>
        );
      
      // ========================================
      // MAKAYA MOBILITY
      // ========================================
      case 'mobility':
        return (
          <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
            <nav className="sticky top-0 z-50 bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-xl border-b border-slate-700/50 shadow-2xl">
              <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handleNavigation('home')}
                    className="flex items-center gap-3 hover:opacity-80 transition"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h1 className="text-xl font-bold text-white">Makaya Mobility</h1>
                      <p className="text-xs text-slate-400">Vente EV • LLD • SAV</p>
                    </div>
                  </button>
                  <button
                    onClick={() => handleNavigation('home')}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition flex items-center gap-2"
                  >
                    <Home className="h-4 w-4" />
                    <span className="hidden md:inline">Accueil</span>
                  </button>
                </div>
              </div>
            </nav>
            <MakayaMobility />
          </div>
        );
      
      // ========================================
      // MAKAYA RECHARGE
      // ========================================
      case 'recharge':
        return (
          <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
            <nav className="sticky top-0 z-50 bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-xl border-b border-slate-700/50 shadow-2xl">
              <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handleNavigation('home')}
                    className="flex items-center gap-3 hover:opacity-80 transition"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h1 className="text-xl font-bold text-white">Makaya Recharge</h1>
                      <p className="text-xs text-slate-400">Réseau de Bornes</p>
                    </div>
                  </button>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleNavigation('cahier-charges')}
                      className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition flex items-center gap-2"
                    >
                      <BookOpen className="h-4 w-4" />
                      <span className="hidden md:inline">Cahier des Charges</span>
                    </button>
                    <button
                      onClick={() => handleNavigation('home')}
                      className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition flex items-center gap-2"
                    >
                      <Home className="h-4 w-4" />
                      <span className="hidden md:inline">Accueil</span>
                    </button>
                  </div>
                </div>
              </div>
            </nav>
            <MakayaRecharge onNavigate={handleNavigation} />
          </div>
        );
      
      // ========================================
      // BUSINESS PLAN
      // ========================================
      case 'businessplan':
        return (
          <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
            <nav className="sticky top-0 z-50 bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-xl border-b border-slate-700/50 shadow-2xl">
              <div className="max-w-[1920px] mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handleNavigation('home')}
                    className="flex items-center gap-3 hover:opacity-80 transition"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h1 className="text-xl font-bold text-white">Makaya Energy</h1>
                      <p className="text-xs text-slate-400">Business Plan 2026-2030</p>
                    </div>
                  </button>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setShowCIEModal(true)}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg transition flex items-center gap-2 hover:shadow-lg"
                    >
                      <Scale className="h-4 w-4" />
                      <span className="hidden md:inline">CIE</span>
                    </button>
                    <button
                      onClick={() => handleNavigation('home')}
                      className="px-4 py-2 text-slate-400 hover:text-white transition flex items-center gap-2"
                    >
                      <Home className="h-4 w-4" />
                      <span className="hidden md:inline">Accueil</span>
                    </button>
                    <div className="px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-lg">
                      <span className="text-green-400 font-semibold text-sm">Live</span>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <main className="max-w-[1920px] mx-auto px-6 py-8">
              <DashboardPrincipal />
            </main>
          </div>
        );
      
      // ========================================
      // DEFAULT - HOME
      // ========================================
      default:
        return <HomePage onNavigate={handleNavigation} />;
    }
  };

  // ========================================
  // RETURN PRINCIPAL
  // ========================================
  return (
    <div className="min-h-screen">
      {renderView()}
      {showCIEModal && <CIEModal onClose={() => setShowCIEModal(false)} />}
      {showNeonModal && <NeonModal onClose={() => setShowNeonModal(false)} />}
      {showCahierModal && <CahierChargesModal onClose={() => setShowCahierModal(false)} />}
    </div>
  );
};

export default App;