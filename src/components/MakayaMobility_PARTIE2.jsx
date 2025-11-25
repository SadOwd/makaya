            // PARTIE 2/3 - Suite Modal Véhicule + Composants Additionnels

            {/* Équipements et options */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-white mb-4">Équipements de série</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {vehicle.features?.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-slate-800/30 rounded-lg p-3 hover:bg-slate-800/50 transition">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommandation usage */}
            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-700/50 rounded-xl p-6 mb-8">
              <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-400" />
                Recommandé pour
              </h4>
              <div className="flex flex-wrap gap-2">
                {vehicle.recommendedFor?.map((usage, idx) => (
                  <span key={idx} className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold">
                    {usage}
                  </span>
                )) || (
                  <>
                    <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold">Usage urbain</span>
                    <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold">Longue distance</span>
                    <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold">Familles</span>
                  </>
                )}
              </div>
            </div>

            {/* Actions finales */}
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition">
                <Share2 className="w-5 h-5" />
                Partager
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition">
                <Download className="w-5 h-5" />
                Télécharger fiche
              </button>
              <button 
                onClick={() => {
                  if (compareVehicles.length < 3 && !compareVehicles.find(v => v.id === vehicle.id)) {
                    setCompareVehicles([...compareVehicles, vehicle]);
                  }
                }}
                className="flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition"
              >
                <GitBranch className="w-5 h-5" />
                Comparer
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition">
                <Phone className="w-5 h-5" />
                Essai routier
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Composant Modal LLD Digital
  const LLDModalDigital = ({ formula, onClose }) => {
    if (!formula) return null;
    const [duration, setDuration] = useState(36);
    const [mileage, setMileage] = useState(20000);
    const [options, setOptions] = useState({
      insurance: true,
      maintenance: true,
      charging: false
    });

    const calculateMonthly = () => {
      let base = formula.monthlyPrice || 250000;
      if (options.insurance) base += 35000;
      if (options.maintenance) base += 25000;
      if (options.charging) base += 45000;
      return base;
    };

    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl max-w-5xl w-full max-h-[95vh] overflow-y-auto border border-slate-700" onClick={(e) => e.stopPropagation()}>
          <div className="relative h-72">
            <img src={formula.image} alt={formula.vehicle} className="w-full h-full object-cover" />
            <button onClick={onClose} className="absolute top-4 right-4 w-12 h-12 bg-black/70 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-black/90 transition">
              <X className="w-6 h-6" />
            </button>
            <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-xl rounded-xl px-6 py-4">
              <h3 className="text-3xl font-bold text-white mb-2">Formule {formula.name}</h3>
              <p className="text-slate-300 text-lg">{formula.vehicle}</p>
            </div>
          </div>

          <div className="p-8">
            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-700/50 rounded-xl p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold text-white">Votre mensualité</h4>
                <p className="text-4xl font-bold text-green-400">{formatCurrency(calculateMonthly())}</p>
              </div>
              <p className="text-slate-300 text-sm">Configuration personnalisée selon vos besoins</p>
            </div>

            {/* Configurateur durée */}
            <div className="mb-8">
              <label className="text-white font-semibold mb-3 block">Durée du contrat</label>
              <div className="grid grid-cols-4 gap-3">
                {[12, 24, 36, 48, 60].map(d => (
                  <button
                    key={d}
                    onClick={() => setDuration(d)}
                    className={`py-3 rounded-lg font-semibold transition ${
                      duration === d
                        ? 'bg-green-500 text-white'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    {d} mois
                  </button>
                ))}
              </div>
            </div>

            {/* Configurateur kilométrage */}
            <div className="mb-8">
              <label className="text-white font-semibold mb-3 block">Kilométrage annuel</label>
              <div className="grid grid-cols-4 gap-3">
                {[10000, 15000, 20000, 25000, 30000].map(km => (
                  <button
                    key={km}
                    onClick={() => setMileage(km)}
                    className={`py-3 rounded-lg font-semibold transition ${
                      mileage === km
                        ? 'bg-green-500 text-white'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    {formatNumber(km)} km
                  </button>
                ))}
              </div>
            </div>

            {/* Options */}
            <div className="mb-8">
              <h4 className="text-white font-semibold mb-4">Options incluses</h4>
              <div className="space-y-3">
                {[
                  { key: 'insurance', label: 'Assurance tous risques', price: 35000, icon: Shield },
                  { key: 'maintenance', label: 'Maintenance complète', price: 25000, icon: Wrench },
                  { key: 'charging', label: 'Recharge illimitée Makaya', price: 45000, icon: Zap }
                ].map(option => (
                  <button
                    key={option.key}
                    onClick={() => setOptions({...options, [option.key]: !options[option.key]})}
                    className={`w-full flex items-center justify-between p-4 rounded-lg transition ${
                      options[option.key]
                        ? 'bg-green-500/20 border-2 border-green-500'
                        : 'bg-slate-800 border-2 border-slate-700 hover:border-slate-600'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${options[option.key] ? 'bg-green-500' : 'bg-slate-700'}`}>
                        <option.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-white font-semibold">{option.label}</span>
                    </div>
                    <span className="text-slate-300">+{formatCurrency(option.price)}/mois</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Services inclus */}
            <div className="mb-8">
              <h4 className="text-white font-semibold mb-4">Services inclus de base</h4>
              <div className="grid grid-cols-2 gap-3">
                {formula.features?.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-300">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button className="flex-1 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg hover:shadow-lg transition flex items-center justify-center gap-2">
                <FileText className="w-5 h-5" />
                Signer électroniquement
              </button>
              <button className="px-6 py-4 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition">
                Télécharger devis
              </button>
            </div>

            <p className="text-slate-500 text-xs text-center mt-4">
              🎯 Délai de traitement: 48h • Signature électronique • Paiement Wave/Flooz/TMoney
            </p>
          </div>
        </div>
      </div>
    );
  };

  // Composant Fleet Manager
  const FleetManagerCard = ({ fleet, onClick }) => (
    <div 
      onClick={onClick}
      className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 hover:border-blue-500 cursor-pointer transition-all hover:shadow-xl hover:shadow-blue-500/10"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-blue-500/20 rounded-xl">
            <Briefcase className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">{fleet.name}</h3>
            <p className="text-slate-400 text-sm">{fleet.company}</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
          fleet.status === 'active' 
            ? 'bg-green-500/20 text-green-400' 
            : 'bg-yellow-500/20 text-yellow-400'
        }`}>
          {fleet.status === 'active' ? 'Actif' : 'En attente'}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <p className="text-slate-400 text-xs mb-1">Véhicules</p>
          <p className="text-2xl font-bold text-white">{fleet.vehicles}</p>
        </div>
        <div>
          <p className="text-slate-400 text-xs mb-1">En service</p>
          <p className="text-2xl font-bold text-green-400">{fleet.inService}</p>
        </div>
        <div>
          <p className="text-slate-400 text-xs mb-1">Maintenance</p>
          <p className="text-2xl font-bold text-orange-400">{fleet.maintenance || 0}</p>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-slate-700">
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <Leaf className="w-4 h-4 text-green-400" />
          <span>CO₂ économisé: {fleet.co2Saved || '12.5t'}</span>
        </div>
        <ChevronRight className="w-5 h-5 text-slate-500" />
      </div>
    </div>
  );

  // Composant SAV 2.0 Service
  const SAVServiceCard = ({ service, onClick }) => (
    <div 
      onClick={onClick}
      className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-green-500 transition-all cursor-pointer hover:shadow-xl"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="text-5xl">{service.icon}</div>
        {service.remote && (
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-bold flex items-center gap-1">
            <Radio className="w-3 h-3" />
            À distance
          </span>
        )}
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{service.name}</h3>
      <p className="text-slate-400 text-sm mb-4">{service.description}</p>
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold text-green-400">
          {typeof service.price === 'number' ? formatCurrency(service.price) : service.price}
        </p>
        <span className="text-xs text-slate-500">{service.duration || '2-4h'}</span>
      </div>
    </div>
  );

  // Composant Marketplace Pièce
  const MarketplacePieceCard = ({ piece, onAddToCart }) => (
    <div className="bg-slate-900/50 rounded-xl overflow-hidden border border-slate-700 hover:border-green-500 transition-all hover:shadow-xl">
      <div className="relative h-48">
        <img src={piece.image} alt={piece.name} className="w-full h-full object-cover" />
        {piece.inStock && (
          <span className="absolute top-3 right-3 px-3 py-1 bg-green-500 text-white rounded-full text-xs font-bold">
            En stock
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-white mb-1">{piece.name}</h3>
        <p className="text-slate-400 text-sm mb-3">{piece.compatibility}</p>
        <div className="flex items-center justify-between mb-4">
          <p className="text-2xl font-bold text-green-400">{formatCurrency(piece.price)}</p>
          {piece.delivery && (
            <div className="flex items-center gap-1 text-xs text-slate-400">
              <Truck className="w-4 h-4" />
              <span>{piece.delivery}</span>
            </div>
          )}
        </div>
        <button 
          onClick={() => onAddToCart(piece)}
          className="w-full py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-lg transition flex items-center justify-center gap-2"
        >
          <ShoppingCart className="w-4 h-4" />
          Ajouter au panier
        </button>
      </div>
    </div>
  );

  // FIN PARTIE 2/3
  // CONTINUER AVEC PARTIE 3/3
