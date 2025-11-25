  // PARTIE 4/4 - Sections Restantes + Rendu Principal

  // Section SAV 2.0
  const renderSAV = () => {
    const savServices = [
      { 
        id: 1, 
        name: 'Diagnostic à distance', 
        description: 'Analyse OBD via application mobile', 
        price: 15000, 
        icon: '📡',
        remote: true,
        duration: 'Immédiat'
      },
      { 
        id: 2, 
        name: 'Intervention mobile', 
        description: 'Technicien se déplace à domicile', 
        price: 45000, 
        icon: '🚐',
        duration: '2-4h'
      },
      { 
        id: 3, 
        name: 'Maintenance prédictive', 
        description: 'Alertes préventives automatiques', 
        price: 25000, 
        icon: '⚙️',
        duration: 'Continu'
      },
      { 
        id: 4, 
        name: 'Révision complète', 
        description: 'Check-up 150 points de contrôle', 
        price: 85000, 
        icon: '🔧',
        duration: '1 jour'
      },
      { 
        id: 5, 
        name: 'Remplacement batterie', 
        description: 'Installation nouvelle batterie certifiée', 
        price: 'Sur devis', 
        icon: '🔋',
        duration: '2-3 jours'
      },
      { 
        id: 6, 
        name: 'Mise à jour logicielle', 
        description: 'OTA ou en atelier', 
        price: 35000, 
        icon: '💾',
        remote: true,
        duration: '30-60 min'
      }
    ];

    return (
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">SAV Nouvelle Génération</h2>
          <p className="text-orange-100 text-lg mb-6">
            Diagnostic à distance • Intervention mobile • Délai réduit à 72h
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
              <Radio className="w-5 h-5" />
              <span>Diagnostic OBD</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
              <Truck className="w-5 h-5" />
              <span>Service mobile</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg">
              <Clock className="w-5 h-5" />
              <span>72h max</span>
            </div>
          </div>
        </div>

        {/* Stats SAV */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: Clock, label: 'Délai moyen', value: '3 jours', color: 'blue' },
            { icon: Star, label: 'Satisfaction', value: '96%', color: 'green' },
            { icon: Wrench, label: 'En service', value: (mobilityData.sav?.statistics?.vehiclesInService || 12), color: 'yellow' },
            { icon: Settings, label: 'Interventions/mois', value: (mobilityData.sav?.statistics?.monthlyInterventions || 145), color: 'purple' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-slate-800/50 rounded-xl p-6">
              <div className={`p-3 bg-${stat.color}-500/20 rounded-xl w-fit mb-3`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-400`} />
              </div>
              <p className="text-slate-400 text-sm mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-white">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Services */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">Nos Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savServices.map(service => (
              <SAVServiceCard key={service.id} service={service} onClick={() => setSelectedService(service)} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Section Marketplace
  const renderMarketplace = () => {
    const pieces = [
      { id: 1, name: 'Batterie 60kWh', compatibility: 'BYD Dolphin', price: 4500000, image: '/api/placeholder/400/300', inStock: true, delivery: '48h' },
      { id: 2, name: 'Pneus EV Michelin', compatibility: 'Tous modèles', price: 245000, image: '/api/placeholder/400/300', inStock: true, delivery: '24h' },
      { id: 3, name: 'Chargeur embarqué 11kW', compatibility: 'Tesla Model 3', price: 580000, image: '/api/placeholder/400/300', inStock: true, delivery: '72h' },
      { id: 4, name: 'Câble Type 2', compatibility: 'Universel', price: 85000, image: '/api/placeholder/400/300', inStock: true, delivery: '24h' },
      { id: 5, name: 'Wallbox 7.4kW', compatibility: 'Installation incluse', price: 350000, image: '/api/placeholder/400/300', inStock: true, delivery: '7j' },
      { id: 6, name: 'Kit sécurité', compatibility: 'Tous véhicules', price: 45000, image: '/api/placeholder/400/300', inStock: true, delivery: '24h' }
    ];

    return (
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Marketplace Pièces Détachées</h2>
          <p className="text-indigo-100 text-lg">
            Premium & Classique • Livraison rapide • Compatibilité vérifiée
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pieces.map(piece => (
            <MarketplacePieceCard key={piece.id} piece={piece} onAddToCart={() => console.log('Added', piece.name)} />
          ))}
        </div>
      </div>
    );
  };

  // Section Makaya Certified
  const renderCertified = () => {
    const certifiedVehicles = [
      { 
        id: 1, 
        brand: 'BYD', 
        model: 'Dolphin', 
        year: 2023, 
        mileage: 15000, 
        price: 18500000, 
        batteryHealth: 96, 
        warranty: '12 mois', 
        discount: 35, 
        image: '/api/placeholder/400/300' 
      },
      { 
        id: 2, 
        brand: 'Tesla', 
        model: 'Model 3', 
        year: 2022, 
        mileage: 28000, 
        price: 24000000, 
        batteryHealth: 92, 
        warranty: '18 mois', 
        discount: 38, 
        image: '/api/placeholder/400/300' 
      },
      { 
        id: 3, 
        brand: 'Nissan', 
        model: 'Leaf', 
        year: 2023, 
        mileage: 12000, 
        price: 16200000, 
        batteryHealth: 98, 
        warranty: '24 mois', 
        discount: 32, 
        image: '/api/placeholder/400/300' 
      }
    ];

    return (
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
            <Award className="w-10 h-10" />
            Programme Makaya Certified
          </h2>
          <p className="text-yellow-100 text-lg mb-6">
            Véhicules électriques d'occasion garantis • 150 points de contrôle • Historique batterie transparent
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/20 rounded-lg p-4">
              <p className="text-3xl font-bold mb-1">150+</p>
              <p className="text-sm">Points de contrôle</p>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <p className="text-3xl font-bold mb-1">6-24 mois</p>
              <p className="text-sm">Garantie</p>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <p className="text-3xl font-bold mb-1">234</p>
              <p className="text-sm">Véhicules disponibles</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifiedVehicles.map(vehicle => (
            <CertifiedVehicleCard key={vehicle.id} vehicle={vehicle} onClick={() => setSelectedCertified(vehicle)} />
          ))}
        </div>
      </div>
    );
  };

  // Section Bundles
  const renderBundles = () => {
    const bundles = [
      {
        id: 1,
        name: 'Pack Particulier',
        vehicle: 'BYD Dolphin',
        price: 21500000,
        items: ['Véhicule neuf', 'Wallbox 7.4kW', 'Installation incluse', 'App Makaya', '1 an recharge -20%'],
        image: '/api/placeholder/400/300',
        badge: 'Populaire'
      },
      {
        id: 2,
        name: 'Pack Entreprise',
        vehicle: 'Tesla Model 3 (x5)',
        price: 145000000,
        items: ['5 véhicules', '5 bornes 22kW', 'Logiciel Fleet Manager', 'Maintenance 3 ans', 'Formation équipe'],
        image: '/api/placeholder/400/300',
        badge: 'B2B'
      },
      {
        id: 3,
        name: 'Pack Long-Terme',
        vehicle: 'Nissan Leaf',
        monthly: 280000,
        items: ['LLD 48 mois', 'Recharge illimitée Makaya', 'Maintenance incluse', 'Assurance tous risques', 'Véhicule de courtoisie'],
        image: '/api/placeholder/400/300',
        badge: 'All-Inclusive'
      }
    ];

    return (
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Bundles EV + Recharge</h2>
          <p className="text-green-100 text-lg">
            Offres intégrées véhicule + infrastructure • Solution clé en main
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bundles.map(bundle => (
            <div key={bundle.id} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border-2 border-green-500/30 hover:border-green-500 transition-all">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{bundle.name}</h3>
                <span className="px-3 py-1 bg-green-500 text-white rounded-full text-xs font-bold">
                  {bundle.badge}
                </span>
              </div>
              <p className="text-slate-300 mb-4">{bundle.vehicle}</p>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-6">
                <p className="text-3xl font-bold text-green-400">
                  {bundle.monthly ? `${formatCurrency(bundle.monthly)}/mois` : formatCurrency(bundle.price)}
                </p>
              </div>
              <div className="space-y-2 mb-6">
                {bundle.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <button className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg hover:shadow-lg transition">
                Commander le pack
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Section Analytics
  const renderAnalytics = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-4">Centre de Données & Analytics</h2>
        <p className="text-purple-100 text-lg">
          Insights temps réel • Analyses prédictives • Référence régionale
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-slate-800/50 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-6">Ventes mensuelles 2025</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mobilityData.monthlySales}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }} />
              <Line type="monotone" dataKey="sales" stroke="#10B981" strokeWidth={3} dot={{ fill: '#10B981', r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-slate-800/50 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-6">Répartition par modèle</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie 
                data={mobilityData.salesByModel} 
                cx="50%" 
                cy="50%" 
                labelLine={false} 
                label={({ model, percentage }) => `${model} ${percentage?.toFixed(1) || 0}%`} 
                outerRadius={100} 
                dataKey="sales"
              >
                {(mobilityData.salesByModel || []).map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={['#10B981', '#3B82F6', '#F59E0B', '#8B5CF6', '#EF4444', '#EC4899'][index % 6]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Autonomie moyenne réelle', value: '342 km', icon: Battery },
          { label: 'Pannes/1000 véhicules', value: '2.3', icon: AlertCircle },
          { label: 'Satisfaction SAV', value: '96%', icon: Star },
          { label: 'ROI moyen LLD', value: '18 mois', icon: TrendingUp }
        ].map((metric, idx) => (
          <div key={idx} className="bg-slate-800/50 rounded-xl p-6">
            <div className="p-3 bg-purple-500/20 rounded-xl w-fit mb-3">
              <metric.icon className="w-6 h-6 text-purple-400" />
            </div>
            <p className="text-slate-400 text-sm mb-1">{metric.label}</p>
            <p className="text-3xl font-bold text-white">{metric.value}</p>
          </div>
        ))}
      </div>
    </div>
  );

  // Rendu principal
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-6">
      {/* Modals */}
      {selectedVehicle && <VehicleModalEnriched vehicle={selectedVehicle} onClose={() => setSelectedVehicle(null)} />}
      {selectedFormula && <LLDModalDigital formula={selectedFormula} onClose={() => setSelectedFormula(null)} />}
      
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg">
            <Car className="w-10 h-10 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
              Makaya Mobility
            </h1>
            <p className="text-slate-400 text-lg">
              Vente EV • LLD Digital • Fleet Manager • SAV 2.0 • Marketplace • Certified
            </p>
          </div>
        </div>
      </div>

      {/* KPIs enrichis */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {kpisEnriched.map((kpi, idx) => (
          <div key={idx} className={`bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:shadow-xl hover:shadow-${kpi.color}-500/10 transition-all`}>
            <div className={`p-3 bg-${kpi.color}-500/20 rounded-xl w-fit mb-3`}>
              <kpi.icon className={`w-6 h-6 text-${kpi.color}-400`} />
            </div>
            <h3 className="text-slate-400 text-sm font-medium mb-1">{kpi.label}</h3>
            <p className="text-3xl font-bold text-white">{kpi.value}{kpi.suffix || ''}</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-green-400 text-sm font-semibold">{kpi.change}</span>
              <span className="text-xs text-slate-500">{kpi.detail}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex gap-2 overflow-x-auto pb-2 border-b border-slate-700">
          {mainTabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button 
                key={tab.id} 
                onClick={() => setActiveTab(tab.id)} 
                className={`flex items-center gap-2 px-6 py-3 font-semibold whitespace-nowrap transition-all rounded-t-lg ${
                  activeTab === tab.id 
                    ? 'text-green-400 bg-slate-800 border-b-2 border-green-400' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Contenu dynamique */}
      <div className="max-w-7xl mx-auto">
        {activeTab === 'catalogue' && renderCatalogueIntelligent()}
        {activeTab === 'lld' && renderLLDDigital()}
        {activeTab === 'fleet' && renderFleetManager()}
        {activeTab === 'sav' && renderSAV()}
        {activeTab === 'marketplace' && renderMarketplace()}
        {activeTab === 'certified' && renderCertified()}
        {activeTab === 'bundles' && renderBundles()}
        {activeTab === 'analytics' && renderAnalytics()}
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto text-center text-slate-500 text-sm mt-12 pt-8 border-t border-slate-800">
        <p className="mb-2">🚗 Makaya Mobility Premium - La référence mobilité électrique du Togo</p>
        <p className="text-xs">Made with 💚 for Sustainable Mobility • API Connect disponible</p>
      </div>
    </div>
  );
};

export default MakayaMobility;

// FIN PARTIE 4/4
