import React, { useState } from 'react';
import { Zap, Home, BarChart3 } from 'lucide-react';
import HomePage from './pages/HomePage';
import DashboardPrincipal from './components/DashboardPrincipal';
import MakayaRide from './pages/MakayaRide';
import MakayaMobility from './pages/MakayaMobility';
import MakayaRecharge from './pages/MakayaRecharge';

const App = () => {
  const [currentView, setCurrentView] = useState('home'); // home, ride, mobility, recharge, businessplan

  const handleNavigation = (view) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Placeholder pour les modules en développement
  const PlaceholderModule = ({ title, description }) => (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-6">
      <div className="text-center max-w-2xl">
        <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-green-500/50">
          <Zap className="h-12 w-12 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
        <p className="text-slate-400 mb-6">{description}</p>
        <p className="text-green-400 text-sm mb-8">✅ Module en développement...</p>
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
            <MakayaRide />
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
                      onClick={() => handleNavigation('home')}
                      className="px-4 py-2 text-slate-400 hover:text-white transition flex items-center gap-2"
                    >
                      <Home className="h-4 w-4" />
                      Accueil
                    </button>
                    <div className="px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-lg">
                      <span className="text-green-400 font-semibold text-sm">✅ Live</span>
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
    </div>
  );
};

export default App;
