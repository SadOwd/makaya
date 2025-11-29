// ============================================================
// MAKAYA RECHARGE - PARTIE 3/4
// Composants Tendances, Insights et Cahier de Charge
// ============================================================

  // ============================================================
  // COMPOSANT: Tendances
  // ============================================================
  function Tendances() {
    return (
      <div className="space-y-6">
        {/* Graphique Utilisation */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-green-600" />
            Utilisation Quotidienne
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={utilisationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hour" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sessions" fill="#3b82f6" name="Sessions" />
                <Bar dataKey="power" fill="#10b981" name="Puissance (kW)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Performance Bornes */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-4">Performance par Type de Borne</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={performanceData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="type" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} />
                <Radar name="Satisfaction" dataKey="satisfaction" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                <Radar name="Utilisation" dataKey="utilisation" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                <Radar name="Fiabilité" dataKey="fiabilite" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.6} />
                <Legend />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  }

  // ============================================================
  // COMPOSANT: Insights
  // ============================================================
  function Insights() {
    return (
      <div className="space-y-6">
        {/* Segments Clients */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Target className="w-6 h-6 text-indigo-600" />
            Segments de Clientèle
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPie>
                  <Pie 
                    data={segmentData} 
                    dataKey="value" 
                    nameKey="name" 
                    cx="50%" 
                    cy="50%" 
                    outerRadius={80}
                    label
                  >
                    {segmentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </RechartsPie>
              </ResponsiveContainer>
            </div>
            <div>
              <h4 className="font-bold mb-4">Répartition détaillée:</h4>
              <div className="space-y-3">
                {segmentData.map((segment) => (
                  <div key={segment.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded" style={{ backgroundColor: segment.color }}></div>
                      <span className="font-semibold">{segment.name}</span>
                    </div>
                    <span className="text-lg font-bold">{segment.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Prévisions 2025 */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-purple-600" />
            Prévisions 2025
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <p className="text-sm text-gray-600 mb-2">Croissance Revenus</p>
              <p className="text-3xl font-bold text-blue-600">+35%</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <p className="text-sm text-gray-600 mb-2">Nouvelles Stations</p>
              <p className="text-3xl font-bold text-green-600">+12</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl">
              <p className="text-sm text-gray-600 mb-2">Abonnés Projetés</p>
              <p className="text-3xl font-bold text-yellow-600">8,500</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
              <p className="text-sm text-gray-600 mb-2">Part de Marché</p>
              <p className="text-3xl font-bold text-purple-600">42%</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ============================================================
  // COMPOSANT: Cahier de Charge (Résumé intégré)
  // ============================================================
  function CahierCharge() {
    return (
      <div className="space-y-6">
        {/* Header Cahier de Charge */}
        <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-xl p-8 text-white">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-3xl font-bold mb-2">📋 Cahier de Charge</h2>
              <p className="text-blue-100">Station de Recharge Électrique - Lomé, Togo</p>
            </div>
            <div className="flex gap-3">
              <button className="p-3 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                <Download className="w-5 h-5" />
              </button>
              <button className="p-3 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                <Printer className="w-5 h-5" />
              </button>
              <button className="p-3 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold">10</div>
              <div className="text-sm text-blue-100">Bornes</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold">525 kW</div>
              <div className="text-sm text-blue-100">Puissance</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold">116k USD</div>
              <div className="text-sm text-blue-100">Budget</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold">&lt; 12 mois</div>
              <div className="text-sm text-blue-100">ROI</div>
            </div>
          </div>
        </div>

        {/* Sections principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Spécifications */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Battery className="w-6 h-6 text-green-600" />
              Spécifications Techniques
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-bold text-gray-900">5 × Bornes AC 21kW</h4>
                <p className="text-sm text-gray-600">Charge semi-rapide (2-3h)</p>
                <p className="text-xs text-gray-500 mt-1">Prix: 2 345 USD</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold text-gray-900">3 × Bornes DC 60kW</h4>
                <p className="text-sm text-gray-600">Charge rapide (45-50min)</p>
                <p className="text-xs text-gray-500 mt-1">Prix: 12 504 USD</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-bold text-gray-900">2 × Bornes DC 120kW</h4>
                <p className="text-sm text-gray-600">Charge ultra-rapide (20-25min)</p>
                <p className="text-xs text-gray-500 mt-1">Prix: 12 078 USD</p>
              </div>
            </div>
          </div>

          {/* Budget */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <DollarSign className="w-6 h-6 text-blue-600" />
              Budget Détaillé
            </h3>
            <div className="space-y-3">
              {[
                { label: 'Équipements recharge', montant: '28 097', pourcent: 24, color: 'blue' },
                { label: 'Infrastructure électrique', montant: '30 180', pourcent: 26, color: 'green' },
                { label: 'Génie civil', montant: '33 300', pourcent: 29, color: 'purple' },
                { label: 'Supervision/gestion', montant: '12 250', pourcent: 10, color: 'yellow' },
                { label: 'Autres', montant: '12 150', pourcent: 11, color: 'red' }
              ].map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold">{item.label}</span>
                    <span className="text-gray-600">{item.montant} USD ({item.pourcent}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`bg-${item.color}-500 h-2 rounded-full`}
                      style={{ width: `${item.pourcent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
              <div className="pt-3 border-t-2 border-gray-200">
                <div className="flex justify-between">
                  <span className="font-bold text-lg">TOTAL</span>
                  <span className="font-bold text-lg text-blue-600">115 977 USD</span>
                </div>
              </div>
            </div>
          </div>

          {/* Modèle Économique */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-emerald-600" />
              Modèle Économique
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Revenus Année 1</p>
                <p className="text-3xl font-bold text-green-600">284 700 USD</p>
                <p className="text-xs text-gray-500 mt-1">34 sessions/jour • 1 180 kWh/j</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Résultat Net An 1</p>
                <p className="text-3xl font-bold text-blue-600">135 560 USD</p>
                <p className="text-xs text-gray-500 mt-1">Marge: 48%</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">ROI</p>
                <p className="text-3xl font-bold text-purple-600">&lt; 12 mois</p>
                <p className="text-xs text-gray-500 mt-1">TRI: 180-200%</p>
              </div>
            </div>
          </div>

          {/* Planning */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Clock className="w-6 h-6 text-orange-600" />
              Planning de Réalisation
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm">Études et autorisations</p>
                  <p className="text-xs text-gray-600">Semaines 1-4</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm">Génie civil</p>
                  <p className="text-xs text-gray-600">Semaines 5-8</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm">Livraison équipements</p>
                  <p className="text-xs text-gray-600">Semaines 9-13</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  4
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm">Installation & tests</p>
                  <p className="text-xs text-gray-600">Semaines 14-20</p>
                </div>
              </div>
              <div className="pt-3 border-t-2 border-gray-200">
                <p className="font-bold text-center text-lg text-blue-600">
                  Total: 16-20 semaines
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bouton vers version complète */}
        {onNavigate && (
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Version complète du Cahier de Charge</h4>
                <p className="text-gray-600">
                  Consultez les 13 sections détaillées avec spécifications techniques, normes, 
                  garanties et documentation complète.
                </p>
              </div>
              <button
                onClick={() => onNavigate('cahier-charge')}
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                <FileText className="w-6 h-6" />
                Ouvrir
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
