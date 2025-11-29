// ============================================
// PARTIE 6 : PANNEAU DE RECHERCHE (État Idle)
// ============================================

      {/* Panneau principal en bas de l'écran */}
      <div className="absolute bottom-0 left-0 right-0 z-40">
        {/* État IDLE - Recherche de trajet */}
        {tripStatus === 'idle' && (
          <div className="bg-gradient-to-t from-black via-gray-900/95 to-transparent backdrop-blur-xl border-t border-cyan-500/30 rounded-t-3xl shadow-2xl shadow-cyan-500/20">
            <div className="p-6 space-y-4">
              <h2 className="text-white text-2xl font-bold mb-4">Où allez-vous ?</h2>
              
              {/* Champ adresse de départ */}
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400" />
                <input
                  type="text"
                  placeholder="Adresse de départ"
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all"
                />
              </div>

              {/* Champ destination */}
              <div className="relative">
                <Navigation className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-pink-400" />
                <input
                  type="text"
                  placeholder="Destination"
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-pink-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all"
                />
              </div>

              {/* Options de service */}
              <div className="grid grid-cols-3 gap-3 mt-6">
                {[
                  { name: 'Eco', price: '15€', time: '5 min', color: 'cyan' },
                  { name: 'Confort', price: '22€', time: '3 min', color: 'purple' },
                  { name: 'Premium', price: '35€', time: '2 min', color: 'pink' }
                ].map((option, i) => (
                  <button key={i} className={`p-4 rounded-xl bg-${option.color}-500/10 border border-${option.color}-500/30 hover:bg-${option.color}-500/20 hover:border-${option.color}-500/50 transition-all group`}>
                    <Zap className={`w-6 h-6 text-${option.color}-400 mb-2 mx-auto`} />
                    <div className={`text-${option.color}-400 font-bold`}>{option.name}</div>
                    <div className="text-white text-sm">{option.price}</div>
                    <div className="text-gray-400 text-xs">{option.time}</div>
                  </button>
                ))}
              </div>

              {/* Bouton de recherche */}
              <button
                onClick={simulateTrip}
                className="w-full py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl text-white font-bold text-lg shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-105 transition-all"
              >
                Rechercher un chauffeur
              </button>
            </div>
          </div>
        )}
