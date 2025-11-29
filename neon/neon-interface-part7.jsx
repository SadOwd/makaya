// ============================================
// PARTIE 7 : ÉTATS DE RECHERCHE ET CHAUFFEUR TROUVÉ
// ============================================

        {/* État SEARCHING - Recherche en cours */}
        {tripStatus === 'searching' && (
          <div className="bg-gradient-to-t from-black via-gray-900/95 to-transparent backdrop-blur-xl border-t border-cyan-500/30 rounded-t-3xl p-8 text-center">
            <div className="relative w-24 h-24 mx-auto mb-6">
              <div className="absolute inset-0 border-4 border-cyan-500/30 rounded-full animate-ping" />
              <div className="absolute inset-0 border-4 border-t-cyan-500 border-r-purple-500 border-b-pink-500 border-l-cyan-500 rounded-full animate-spin" />
            </div>
            <h3 className="text-white text-2xl font-bold mb-2">Recherche en cours...</h3>
            <p className="text-gray-400">Nous trouvons le meilleur chauffeur pour vous</p>
          </div>
        )}

        {/* État FOUND - Chauffeur trouvé */}
        {tripStatus === 'found' && driverInfo && (
          <div className="bg-gradient-to-t from-black via-gray-900/95 to-transparent backdrop-blur-xl border-t border-cyan-500/30 rounded-t-3xl shadow-2xl shadow-cyan-500/20">
            <div className="p-6">
              {/* Informations du chauffeur */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                  <User className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-xl font-bold">{driverInfo.name}</h3>
                  <div className="flex items-center gap-2 mb-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-cyan-400 font-bold">{driverInfo.rating}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{driverInfo.car} • {driverInfo.plate}</p>
                </div>
                <div className="text-right">
                  <div className="text-cyan-400 text-3xl font-bold">{driverInfo.eta}</div>
                  <div className="text-gray-400 text-sm">d'attente</div>
                </div>
              </div>

              {/* Boutons d'action */}
              <div className="flex gap-3">
                <button className="flex-1 py-3 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-cyan-400 font-bold hover:bg-cyan-500/20 transition-all">
                  Appeler
                </button>
                <button className="flex-1 py-3 bg-pink-500/10 border border-pink-500/30 rounded-xl text-pink-400 font-bold hover:bg-pink-500/20 transition-all">
                  Message
                </button>
                <button className="flex-1 py-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 font-bold hover:bg-red-500/20 transition-all">
                  Annuler
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NeonUberInterface;
