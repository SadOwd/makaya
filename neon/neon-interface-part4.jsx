// ============================================
// PARTIE 4 : MENU LATÉRAL
// ============================================

      {/* Menu latéral glissant */}
      <div className={`fixed inset-0 z-50 transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
        <div className="absolute left-0 top-0 bottom-0 w-80 bg-gradient-to-br from-gray-900 via-gray-800 to-black border-r border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
          <div className="p-6">
            {/* Profil utilisateur */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Jean Dupont</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-cyan-400 text-sm">4.8</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setMenuOpen(false)} className="p-2 hover:bg-cyan-500/10 rounded-lg transition-all">
                <X className="w-6 h-6 text-cyan-400" />
              </button>
            </div>

            {/* Navigation du menu */}
            <nav className="space-y-2">
              {[
                { icon: Clock, label: 'Mes trajets', badge: null },
                { icon: CreditCard, label: 'Paiements', badge: null },
                { icon: Gift, label: 'Promotions', badge: '2' },
                { icon: Shield, label: 'Sécurité', badge: null },
                { icon: TrendingUp, label: 'Statistiques', badge: null },
                { icon: Settings, label: 'Paramètres', badge: null }
              ].map((item, i) => (
                <button key={i} className="w-full flex items-center justify-between p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20 hover:bg-cyan-500/10 hover:border-cyan-500/40 transition-all group">
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                    <span className="text-white group-hover:text-cyan-300">{item.label}</span>
                  </div>
                  {item.badge ? (
                    <span className="px-2 py-1 bg-pink-500 rounded-full text-xs text-white">{item.badge}</span>
                  ) : (
                    <ChevronRight className="w-5 h-5 text-cyan-400/50 group-hover:text-cyan-400" />
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
