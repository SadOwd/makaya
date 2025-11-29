// ============================================================
// MAKAYA RECHARGE - PARTIE 2/4
// Composants VueEnsemble, TypesBornes, Abonnements
// ============================================================

  // ============================================================
  // COMPOSANT: Vue d'Ensemble
  // ============================================================
  function VueEnsemble() {
    return (
      <div className="space-y-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br from-${kpi.color}-500 to-${kpi.color}-600`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-green-600">{kpi.change}</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">{kpi.label}</p>
                <p className="text-2xl font-bold text-gray-900">{kpi.value}</p>
              </div>
            );
          })}
        </div>

        {/* Résumé */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Activity className="w-6 h-6 text-blue-600" />
            Vue d'ensemble du réseau
          </h3>
          <p className="text-gray-600 mb-4">
            Le réseau Makaya Recharge continue sa croissance avec {overview.nombreStations || 0} stations 
            et {overview.abonnesActifs || 0} abonnés actifs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Stations actives</p>
              <p className="text-2xl font-bold text-blue-600">{overview.nombreStations || 0}</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Sessions/mois</p>
              <p className="text-2xl font-bold text-green-600">{overview.sessionsMensuelle || '0'}</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Énergie distribuée</p>
              <p className="text-2xl font-bold text-purple-600">{overview.energieDistribuee || '0 MWh'}</p>
            </div>
          </div>
        </div>

        {/* Graphique Revenus */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-4">Évolution des revenus</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} name="Revenus (M FCFA)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  }

  // ============================================================
  // COMPOSANT: Types de Bornes
  // ============================================================
  function TypesBornes() {
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Battery className="w-6 h-6 text-green-600" />
            Types de Bornes Disponibles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {typesBornesArray.map((borne) => (
              <div key={borne.id} className="border-2 border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{borne.nom}</h4>
                    <p className="text-sm text-gray-600">{borne.puissance}</p>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Temps de charge:</span>
                    <span className="font-semibold">{borne.tempsCharge}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tarif moyen:</span>
                    <span className="font-semibold text-green-600">{borne.tarifMoyen || 'Variable'}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Connecteur:</span>
                    <span className="font-semibold">{borne.connecteur || 'Type 2 / CCS'}</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">{borne.description || 'Idéal pour tous types de véhicules électriques'}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ============================================================
  // COMPOSANT: Abonnements
  // ============================================================
  function Abonnements() {
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Crown className="w-6 h-6 text-purple-600" />
            Formules d'Abonnement
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {abonnements.map((abo, index) => (
              <div 
                key={abo.nom} 
                className={`border-2 rounded-xl p-6 hover:shadow-xl transition-all cursor-pointer ${
                  index === 1 ? 'border-purple-500 bg-gradient-to-br from-purple-50 to-pink-50' : 'border-gray-200'
                }`}
                onClick={() => setSelectedAbonnement(abo)}
              >
                {index === 1 && (
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-purple-500 text-white text-xs font-bold rounded-full">
                      POPULAIRE
                    </span>
                  </div>
                )}
                <h4 className="font-bold text-xl mb-2">{abo.nom}</h4>
                <p className="text-3xl font-bold text-blue-600 mb-4">{abo.prix}</p>
                <ul className="space-y-3 mb-6">
                  {abo.avantages.map((av, i) => (
                    <li key={i} className="text-sm flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{av}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                  Choisir cette formule
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
