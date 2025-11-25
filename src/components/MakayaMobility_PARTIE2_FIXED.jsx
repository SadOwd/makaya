  // PARTIE 2/3 - Rendu des sections

  // Section Vente
  const renderVente = () => (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Car className="w-6 h-6 text-green-400" />
          Catalogue Véhicules Électriques ({(mobilityData.vehicles || []).length} modèles)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(mobilityData.vehicles || []).map(vehicle => (
            <div key={vehicle.id} onClick={() => setSelectedVehicle(vehicle)} className="group bg-slate-900/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-green-500/50 transition-all cursor-pointer hover:shadow-xl hover:shadow-green-500/10">
              <div className="relative h-48 overflow-hidden">
                <img src={vehicle.image} alt={vehicle.model} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white text-xs font-bold">{vehicle.category}</span>
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
                  Détails
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-400" />
            Ventes mensuelles 2025
          </h3>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={mobilityData.monthlySales || []}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }} />
              <Line type="monotone" dataKey="sales" stroke="#10B981" strokeWidth={3} dot={{ fill: '#10B981', r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Car className="w-5 h-5 text-green-400" />
            Répartition par modèle
          </h3>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie 
                data={mobilityData.salesByModel || []} 
                cx="50%" 
                cy="50%" 
                labelLine={false} 
                label={({ model, percentage }) => `${model} ${(percentage || 0).toFixed(1)}%`} 
                outerRadius={90} 
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
    </div>
  );

  // Section LLD
  const renderLLD = () => (
    <div>
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Calendar className="w-6 h-6 text-green-400" />
        Formules Location Longue Durée
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {(mobilityData.lldFormulas || []).map(formula => (
          <div key={formula.id} onClick={() => setSelectedFormula(formula)} className="group bg-slate-900/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-green-500/50 transition-all cursor-pointer hover:shadow-xl hover:shadow-green-500/10">
            <div className="relative h-56 overflow-hidden">
              <img src={formula.image} alt={formula.vehicle} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute top-3 left-3 bg-gradient-to-r from-green-500 to-emerald-600 px-4 py-2 rounded-xl shadow-lg">
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
                {(formula.features || []).slice(0, 4).map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <button className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-lg transition">
                Voir détails
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Section SAV
  const renderSAV = () => (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { icon: Clock, label: 'Délai moyen', value: `${mobilityData.sav?.statistics?.avgRepairTime || 7} j`, color: 'blue' },
          { icon: Star, label: 'Satisfaction', value: `${mobilityData.sav?.statistics?.satisfactionRate || 95}%`, color: 'green' },
          { icon: Wrench, label: 'En maintenance', value: mobilityData.sav?.statistics?.vehiclesInService || 12, color: 'yellow' },
          { icon: Settings, label: 'Interventions/mois', value: mobilityData.sav?.statistics?.monthlyInterventions || 145, color: 'purple' }
        ].map((stat, idx) => (
          <div key={idx} className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
            <div className={`p-3 bg-${stat.color}-500/20 rounded-xl w-fit mb-3`}>
              <stat.icon className={`w-6 h-6 text-${stat.color}-400`} />
            </div>
            <p className="text-slate-400 text-sm mb-1">{stat.label}</p>
            <p className="text-3xl font-bold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Wrench className="w-6 h-6 text-green-400" />
        Services Maintenance & SAV
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(mobilityData.sav?.services || []).map(service => (
          <div key={service.id} className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-lg font-bold text-white mb-2">{service.name}</h3>
            <p className="text-slate-400 text-sm mb-4">{service.description}</p>
            <p className="text-sm font-semibold text-green-400">
              {typeof service.price === 'number' ? formatCurrency(service.price) : service.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  // FIN PARTIE 2/3
