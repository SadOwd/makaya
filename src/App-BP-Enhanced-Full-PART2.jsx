// ========================================
// PARTIE 2/2 : RENDER VIEWS ET EXPORT
// ========================================

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
                      <h1 className="text-xl font-bold text-gray-900">Cahier des Charges</h1>
                      <p className="text-xs text-gray-500">Station Recharge VE - Lomé</p>
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

// ========================================
// FIN PARTIE 2/2
// ========================================
