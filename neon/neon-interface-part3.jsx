// ============================================
// PARTIE 3 : STRUCTURE PRINCIPALE ET CANVAS
// ============================================

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Canvas pour les particules néon */}
      <canvas id="neon-canvas" className="absolute inset-0 pointer-events-none opacity-30" />
      
      {/* Header avec menu et notifications */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
        <div className="flex items-center justify-between p-4">
          <button onClick={() => setMenuOpen(true)} className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all">
            <Menu className="w-6 h-6 text-cyan-400" />
          </button>
          
          <div className="text-2xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-pulse">
              NEON RIDE
            </span>
          </div>
          
          <button className="relative p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all">
            <Bell className="w-6 h-6 text-cyan-400" />
            {notifications > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-pink-500 rounded-full text-xs flex items-center justify-center text-white font-bold animate-bounce">
                {notifications}
              </span>
            )}
          </button>
        </div>
      </header>
