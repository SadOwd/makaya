// ============================================
// PARTIE 5 : CARTE INTERACTIVE
// ============================================

      {/* Carte interactive avec grille néon */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black relative">
          {/* Grille néon animée */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(20)].map((_, i) => (
              <div key={`h-${i}`} className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" style={{ top: `${i * 5}%` }} />
            ))}
            {[...Array(20)].map((_, i) => (
              <div key={`v-${i}`} className="absolute h-full w-px bg-gradient-to-b from-transparent via-cyan-500 to-transparent" style={{ left: `${i * 5}%` }} />
            ))}
          </div>

          {/* Marqueur de position actuelle */}
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500 rounded-full blur-xl animate-pulse" />
              <MapPin className="w-12 h-12 text-cyan-400 relative z-10 drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]" />
            </div>
          </div>

          {/* Marqueur du chauffeur (si trouvé) */}
          {tripStatus === 'found' && (
            <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 animate-bounce">
              <div className="relative">
                <div className="absolute inset-0 bg-pink-500 rounded-full blur-xl animate-pulse" />
                <Navigation className="w-10 h-10 text-pink-400 relative z-10" />
              </div>
            </div>
          )}
        </div>
      </div>
