import React, { useState } from 'react';
import BusinessPlanJuridique from './pages/BusinessPlanJuridique';
import { Zap, Home, BarChart3, Scale, Radio } from 'lucide-react';
import HomePage from './pages/HomePage';
import DashboardPrincipal from './components/DashboardPrincipal';
import MakayaRide from './pages/MakayaRide';
import MakayaRideNeon from './pages/MakayaRideNeon';
import MakayaMobility from './pages/MakayaMobility';
import MakayaRecharge from './pages/MakayaRecharge';

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [showCIEModal, setShowCIEModal] = useState(false);
  const [showNeonModal, setShowNeonModal] = useState(false);

  const handleNavigation = (view) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Modal CIE
  const CIEModal = ({ onClose }) => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl max-w-2xl w-full p-8 border border-slate-700" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
              <Scale className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">CIE - Analyse Juridique</h2>
              <p className="text-slate-400 text-sm">Cadre réglementaire & conformité</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition">
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
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-slate-400 text-sm mb-1">Valeur nette</p>
              <p className="text-2xl font-bold text-green-400">523M FCFA</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4">
              <p className="text-slate-400 text-sm mb-1">ROI Juridique</p>
              <p className="text-2xl font-bold text-blue-400">157%</p>
            </div>
          </div>
          <button 
            onClick={() => {
              onClose();
              handleNavigation('businessplan');
            }}
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-lg transition"
          >
            Accéder à l'analyse CIE
          </button>
        </div>
      </div>
    </div>
  );

  // Modal Neon
  const NeonModal = ({ onClose }) => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl max-w-2xl w-full p-8 border border-orange-500/50" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/50">
              <Radio className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">NEON - Interface VTC</h2>
              <p className="text-slate-400 text-sm">Application de réservation moderne</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed">
            Découvrez l'interface NEON de Makaya Ride : une expérience de réservation VTC futuriste avec effets néon, animations fluides et design cyberpunk.
          </p>
          <div className="grid grid-cols-3 gap-4 my-6">
            <div className="bg-slate-800/50 rounded-lg p-4 text-center">
              <p className="text-3xl mb-1">🚗</p>
              <p className="text-slate-400 text-xs">3 types</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4 text-center">
              <p className="text-3xl mb-1">⚡</p>
              <p className="text-slate-400 text-xs">100% EV</p>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4 text-center">
              <p className="text-3xl mb-1">🎨</p>
              <p className="text-slate-400 text-xs">Design Neon</p>
            </div>
          </div>
          <button 
            onClick={() => {
              onClose();
              setCurrentView('ride-neon');
            }}
            className="w-full py-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition"
          >
            Ouvrir l'interface NEON
          </button>
        </div>
      </div>
    </div>
  );

  // Placeholder pour les modules en développement
  const PlaceholderModule = ({ title, description }) => (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-6">
      <div className="text-center max-w-2xl">
        <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-green-500/50">
          <Zap className="h-12 w-12 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
        <p className="text-slate-400 mb-6">{description}</p>
        <p className="text-green-400 text-sm mb-8">Module en développement...</p>
        <button
          onClick={() => handleNavigation('home')}
          className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
        >
          <Home className="h-5 w-5" />
          Retour Accueil
        </button>
      </div>
    </div>
  );

  // Render des différentes vues
  const renderView = () => {
    switch(currentView) {
      case 'home':
        return <HomePage onNavigate={handleNavigation} />;
      
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
                      className="px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-lg transition flex items-center gap-2 hover:shadow-lg hover:shadow-orange-500/50"
                    >
                      <Radio className="h-4 w-4" />
                      NEON
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
              </div>
            </nav>
            <MakayaRide />
          </div>
        );

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
                  <button
                    onClick={() => handleNavigation('ride')}
                    className="px-4 py-2 text-slate-400 hover:text-white rounded-lg transition flex items-center gap-2"
                  >
                    <Home className="h-4 w-4" />
                    Version Standard
                  </button>
                </div>
              </div>
            </nav>
            <MakayaRideNeon />
          </div>
        );
      
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
                    Accueil
                  </button>
                </div>
              </div>
            </nav>
            <MakayaMobility />
          </div>
        );
      
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
            <MakayaRecharge />
          </div>
        );
      
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
                      CIE
                    </button>
                    <button
                      onClick={() => handleNavigation('home')}
                      className="px-4 py-2 text-slate-400 hover:text-white transition flex items-center gap-2"
                    >
                      <Home className="h-4 w-4" />
                      Accueil
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
      
      default:
        return <HomePage onNavigate={handleNavigation} />;
    }
  };

  return (
    <div className="min-h-screen">
      {renderView()}
      {showCIEModal && <CIEModal onClose={() => setShowCIEModal(false)} />}
      {showNeonModal && <NeonModal onClose={() => setShowNeonModal(false)} />}
    </div>
  );
};

export default App;
