  // PARTIE 3/3 - Sections de Rendu + Composant Principal

  // Composant Véhicule Certified
  const CertifiedVehicleCard = ({ vehicle, onClick }) => (
    <div 
      onClick={onClick}
      className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden border-2 border-yellow-500/30 hover:border-yellow-500 transition-all cursor-pointer hover:shadow-xl hover:shadow-yellow-500/20"
    >
      <div className="relative h-48">
        <img src={vehicle.image} alt={vehicle.model} className="w-full h-full object-cover" />
        <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-500 to-orange-500 px-4 py-2 rounded-xl shadow-lg">
          <span className="text-white font-bold flex items-center gap-2">
            <Award className="w-4 h-4" />
            Makaya Certified
          </span>
        </div>
        {vehicle.warranty && (
          <span className="absolute top-3 right-3 px-3 py-1 bg-green-500 text-white rounded-full text-xs font-bold">
            Garantie {vehicle.warranty}
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-2">{vehicle.brand} {vehicle.model}</h3>
        <p className="text-slate-400 text-sm mb-3">{vehicle.year} • {formatNumber(vehicle.mileage)} km</p>
        <div className="bg-slate-800/50 rounded-lg p-3 mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-400 text-sm">État batterie</span>
            <span className="text-green-400 font-bold">{vehicle.batteryHealth}%</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full" 
              style={{ width: `${vehicle.batteryHealth}%` }}
            ></div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold text-green-400">{formatCurrency(vehicle.price)}</p>
          <span className="text-xs text-slate-500">-{vehicle.discount}% vs neuf</span>
        </div>
      </div>
    </div>
  );

  // Section Catalogue Intelligent
  const renderCatalogueIntelligent = () => {
    const filteredVehicles = mobilityData.vehicles?.filter(v => 
      (filterCategory === 'all' || v.category === filterCategory) &&
      (searchQuery === '' || v.model.toLowerCase().includes(searchQuery.toLowerCase()) || v.brand.toLowerCase().includes(searchQuery.toLowerCase()))
    ) || [];

    return (
      <div className="space-y-8">
        {/* Barre de recherche et filtres */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex-1 min-w-[300px] relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="text"
                placeholder="Rechercher un véhicule..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-slate-500 focus:border-green-500 focus:outline-none"
              />
            </div>
            <div className="flex gap-2">
              {['all', 'Citadine', 'Berline', 'SUV', 'Utilitaire'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`px-4 py-2 rounded-lg font-semibold transition ${
                    filterCategory === cat
                      ? 'bg-green-500 text-white'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  {cat === 'all' ? 'Tous' : cat}
                </button>
              ))}
            </div>
            <button 
              onClick={() => setCompareMode(!compareMode)}
              className={`px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2 ${
                compareMode
                  ? 'bg-blue-500 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              <GitBranch className="w-5 h-5" />
              Comparer ({compareVehicles.length})
            </button>
          </div>
        </div>

        {/* Mode comparaison */}
        {compareMode && compareVehicles.length > 0 && (
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-700/50 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Comparaison ({compareVehicles.length} véhicules)</h3>
              <button 
                onClick={() => {
                  setCompareMode(false);
                  setCompareVehicles([]);
                }}
                className="text-slate-400 hover:text-white transition"
              >
                Effacer
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {compareVehicles.map(v => (
                <div key={v.id} className="bg-slate-800 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">{v.brand} {v.model}</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Prix</span>
                      <span className="text-white font-semibold">{formatCurrency(v.price)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Autonomie</span>
                      <span className="text-white font-semibold">{v.range} km</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Batterie</span>
                      <span className="text-white font-semibold">{v.battery}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Grille de véhicules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVehicles.map(vehicle => (
            <div 
              key={vehicle.id} 
              onClick={() => setSelectedVehicle(vehicle)}
              className="group bg-slate-900/50 rounded-xl overflow-hidden border border-slate-700 hover:border-green-500 transition-all cursor-pointer hover:shadow-xl hover:shadow-green-500/10"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.model} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-bold">
                    {vehicle.category}
                  </span>
                  {vehicle.electric && (
                    <span className="bg-green-500/80 px-3 py-1 rounded-full text-white text-xs font-bold flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      100% EV
                    </span>
                  )}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-white mb-1">{vehicle.brand} {vehicle.model}</h3>
                <p className="text-2xl font-bold text-green-400 mb-4">{formatCurrency(vehicle.price)}</p>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Battery className="w-4 h-4 text-green-400" />
                    <span className="text-slate-300">{vehicle.range} km</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span className="text-slate-300">{vehicle.battery}</span>
                  </div>
                </div>
                <button className="w-full py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg transition">
                  Voir détails
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Section LLD Digital
  const renderLLDDigital = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-4">Location Longue Durée 100% Digitale</h2>
        <p className="text-blue-100 text-lg mb-6">
          Construisez votre contrat en ligne • Signature électronique • Livraison en 48h
        </p>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
            <CheckCircle className="w-5 h-5" />
            <span>Durée flexible 12-60 mois</span>
          </div>
          <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
            <CheckCircle className="w-5 h-5" />
            <span>Paiement Wave/Flooz/TMoney</span>
          </div>
          <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
            <CheckCircle className="w-5 h-5" />
            <span>All-inclusive disponible</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {(mobilityData.lldFormulas || []).map(formula => (
          <div 
            key={formula.id} 
            onClick={() => setSelectedFormula(formula)}
            className="group bg-slate-900/50 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all cursor-pointer hover:shadow-xl hover:shadow-blue-500/10"
          >
            <div className="relative h-64 overflow-hidden">
              <img 
                src={formula.image} 
                alt={formula.vehicle} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-xl shadow-lg">
                <span className="text-white text-lg font-bold">Formule {formula.name}</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{formula.vehicle}</h3>
              <p className="text-3xl font-bold text-green-400 mb-4">
                {formatCurrency(formula.monthlyPrice)}
                <span className="text-lg text-slate-400">/mois</span>
              </p>
              <div className="space-y-2 mb-4">
                {formula.features?.slice(0, 4).map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition">
                Configurer mon contrat
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Section Fleet Manager B2B
  const renderFleetManager = () => {
    const fleetData = [
      {
        id: 1,
        name: 'Flotte Lomé Express',
        company: 'Transport Urbain',
        vehicles: 25,
        inService: 22,
        maintenance: 3,
        co2Saved: '18.7t',
        status: 'active'
      },
      {
        id: 2,
        name: 'Taxis Verts Togo',
        company: 'VTC Premium',
        vehicles: 18,
        inService: 16,
        maintenance: 2,
        co2Saved: '12.3t',
        status: 'active'
      },
      {
        id: 3,
        name: 'Administration Togolaise',
        company: 'Fonction Publique',
        vehicles: 45,
        inService: 42,
        maintenance: 3,
        co2Saved: '34.5t',
        status: 'active'
      }
    ];

    return (
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Fleet Manager B2B</h2>
          <p className="text-purple-100 text-lg">
            Gestion complète de votre flotte électrique professionnelle
          </p>
        </div>

        {/* KPIs Fleet */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: Car, label: 'Véhicules gérés', value: '88', color: 'blue' },
            { icon: Activity, label: 'Taux disponibilité', value: '94%', color: 'green' },
            { icon: Leaf, label: 'CO₂ évité', value: '65.5t', color: 'green' },
            { icon: DollarSign, label: 'Économies/mois', value: '12.8M', color: 'yellow' }
          ].map((kpi, idx) => (
            <div key={idx} className="bg-slate-800/50 rounded-xl p-6">
              <div className={`p-3 bg-${kpi.color}-500/20 rounded-xl w-fit mb-3`}>
                <kpi.icon className={`w-6 h-6 text-${kpi.color}-400`} />
              </div>
              <p className="text-slate-400 text-sm mb-1">{kpi.label}</p>
              <p className="text-3xl font-bold text-white">{kpi.value}</p>
            </div>
          ))}
        </div>

        {/* Flottes actives */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">Flottes Actives</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fleetData.map(fleet => (
              <FleetManagerCard key={fleet.id} fleet={fleet} onClick={() => setSelectedFleet(fleet)} />
            ))}
          </div>
        </div>

        {/* Fonctionnalités */}
        <div className="bg-slate-800/50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Fonctionnalités Incluses</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: MapPin, title: 'Suivi GPS temps réel', desc: 'Géolocalisation de tous vos véhicules' },
              { icon: Battery, title: 'État batteries', desc: 'Monitoring autonomie en direct' },
              { icon: Calendar, title: 'Maintenance prédictive', desc: 'Alertes automatiques' },
              { icon: Leaf, title: 'Tableaux ESG', desc: 'CO₂ économisé et reporting' },
              { icon: Target, title: 'Optimisation trajets', desc: 'Réduction coûts énergie' },
              { icon: Zap, title: 'Recharge programmée', desc: 'Planification automatique' }
            ].map((feature, idx) => (
              <div key={idx} className="bg-slate-900/50 rounded-lg p-5">
                <div className="p-3 bg-purple-500/20 rounded-lg w-fit mb-3">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h4 className="font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-slate-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // FIN PARTIE 3/3 - Continuer dans un fichier séparé si nécessaire
  // ou créer PARTIE 3B pour les sections restantes
