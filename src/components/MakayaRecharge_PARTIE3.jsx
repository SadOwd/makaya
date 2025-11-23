  // PARTIE 3/3 - Sections Abonnements, Tendances, Insights et Rendu Principal

  // Section Abonnements
  const renderAbonnements = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-4">Nos Abonnements</h2>
        <p className="text-purple-100">
          Choisissez la formule qui correspond à vos besoins de recharge
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {abonnements.map((abo) => {
          const IconType = abo.type === 'Premium' ? Crown : 
                          abo.type === 'Business' ? Award :
                          abo.type === 'Famille' ? Users :
                          abo.type === 'Etudiant' ? Star : Shield;

          return (
            <div 
              key={abo.id}
              onClick={() => setSelectedAbonnement(abo)}
              className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all cursor-pointer border-2 ${
                abo.populaire ? 'border-yellow-400 relative' : 'border-transparent hover:border-purple-500'
              }`}
            >
              {abo.populaire && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    POPULAIRE
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className={`inline-flex p-4 rounded-2xl mb-4 ${
                  abo.populaire ? 'bg-gradient-to-br from-yellow-400 to-orange-500' :
                  'bg-gradient-to-br from-blue-500 to-purple-600'
                }`}>
                  <IconType className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{abo.type}</h3>
                <p className="text-gray-600 text-sm mb-4">{abo.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{abo.prix}</span>
                  <span className="text-gray-600">/mois</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {abo.avantages?.slice(0, 4).map((avantage, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{avantage}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedAbonnement(abo);
                }}
                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  abo.populaire 
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:shadow-lg' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Voir les détails
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );

  // Section Tendances
  const renderTendances = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-4">Tendances & Analyses</h2>
        <p className="text-green-100">
          Suivez l'évolution de votre activité en temps réel
        </p>
      </div>

      {/* Utilisation quotidienne */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Activity className="w-6 h-6 text-green-600" />
          Utilisation Quotidienne
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={utilisationData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="hour" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }}
            />
            <Legend />
            <Bar dataKey="sessions" fill="#10b981" name="Sessions" radius={[8, 8, 0, 0]} />
            <Bar dataKey="power" fill="#3b82f6" name="Puissance (kW)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Performance des bornes */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Target className="w-6 h-6 text-blue-600" />
          Performance par Type de Borne
        </h3>
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart data={performanceData}>
            <PolarGrid stroke="#e5e7eb" />
            <PolarAngleAxis dataKey="type" stroke="#6b7280" />
            <PolarRadiusAxis stroke="#6b7280" />
            <Radar name="Satisfaction" dataKey="satisfaction" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
            <Radar name="Utilisation" dataKey="utilisation" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
            <Radar name="Fiabilité" dataKey="fiabilite" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.3} />
            <Legend />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* KPIs de tendance */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="w-8 h-8 text-blue-600" />
            <span className="text-green-600 font-bold text-sm flex items-center gap-1">
              <ArrowUpRight className="w-4 h-4" />
              +18%
            </span>
          </div>
          <h4 className="text-sm text-gray-600 mb-2">Croissance Sessions</h4>
          <p className="text-3xl font-bold text-gray-900">+1,245</p>
          <p className="text-xs text-gray-600 mt-2">Cette semaine vs précédente</p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <Battery className="w-8 h-8 text-green-600" />
            <span className="text-green-600 font-bold text-sm flex items-center gap-1">
              <ArrowUpRight className="w-4 h-4" />
              +5%
            </span>
          </div>
          <h4 className="text-sm text-gray-600 mb-2">Taux d'Occupation</h4>
          <p className="text-3xl font-bold text-gray-900">76%</p>
          <p className="text-xs text-gray-600 mt-2">Moyenne sur 7 jours</p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <Users className="w-8 h-8 text-purple-600" />
            <span className="text-green-600 font-bold text-sm flex items-center gap-1">
              <ArrowUpRight className="w-4 h-4" />
              +31%
            </span>
          </div>
          <h4 className="text-sm text-gray-600 mb-2">Nouveaux Abonnés</h4>
          <p className="text-3xl font-bold text-gray-900">+287</p>
          <p className="text-xs text-gray-600 mt-2">Ce mois</p>
        </div>
      </div>
    </div>
  );

  // Section Insights
  const renderInsights = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-4">Insights du Marché</h2>
        <p className="text-indigo-100">
          Analyses approfondies et prévisions stratégiques
        </p>
      </div>

      {/* Segmentation marché */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <PieChart className="w-6 h-6 text-indigo-600" />
          Segmentation du Marché
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <ResponsiveContainer width="100%" height={300}>
            <RechartsPie>
              <Pie
                data={segmentData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name} ${value}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {segmentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </RechartsPie>
          </ResponsiveContainer>

          <div className="space-y-4">
            {segmentData.map((segment, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: segment.color }}></div>
                  <span className="font-semibold text-gray-900">{segment.name}</span>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-900">{segment.value}%</p>
                  <p className="text-xs text-gray-600">du marché</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Insights clés */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-600 rounded-lg">
              <Info className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Opportunité de Croissance</h4>
              <p className="text-gray-700 text-sm mb-3">
                Le segment des flottes commerciales montre un potentiel de croissance de 45% avec l'adoption croissante des véhicules électriques dans le transport professionnel.
              </p>
              <span className="text-xs text-blue-600 font-semibold">Recommandation: Développer des offres B2B dédiées</span>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-600 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-green-600 rounded-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Heures de Pointe Identifiées</h4>
              <p className="text-gray-700 text-sm mb-3">
                Les plages 8h-10h et 17h-19h représentent 60% de l'utilisation quotidienne. Optimisation tarifaire recommandée pour lisser la demande.
              </p>
              <span className="text-xs text-green-600 font-semibold">Action: Implémenter tarification dynamique</span>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-600 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-yellow-600 rounded-lg">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Zone à Développer</h4>
              <p className="text-gray-700 text-sm mb-3">
                Le quartier d'Adidogomé affiche une forte demande non satisfaite avec seulement 2 stations pour 15,000 résidents. ROI estimé à 180% sur 3 ans.
              </p>
              <span className="text-xs text-yellow-600 font-semibold">Priorité: Extension réseau dans cette zone</span>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-600 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-purple-600 rounded-lg">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Satisfaction Clients</h4>
              <p className="text-gray-700 text-sm mb-3">
                Score NPS de 72 (excellent). Les clients valorisent particulièrement la rapidité de charge et la disponibilité des bornes. Temps d'attente moyen: 3 min.
              </p>
              <span className="text-xs text-purple-600 font-semibold">Force: Expérience utilisateur optimale</span>
            </div>
          </div>
        </div>
      </div>

      {/* Prévisions */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Calendar className="w-6 h-6 text-indigo-600" />
          Prévisions 2025
        </h3>
        <div className="grid md:grid-cols-4 gap-4">
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

  // Rendu principal avec navigation par onglets
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 mb-8 text-white shadow-2xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-4 bg-white bg-opacity-20 rounded-xl backdrop-blur-sm">
              <Zap className="w-12 h-12" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">Makaya Recharge</h1>
              <p className="text-blue-100">Infrastructure de Recharge pour Véhicules Électriques</p>
            </div>
          </div>
          
          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 mt-6">
            {[
              { id: 'vue-ensemble', label: 'Vue d\'Ensemble', icon: BarChart3 },
              { id: 'types-bornes', label: 'Types de Bornes', icon: Battery },
              { id: 'abonnements', label: 'Abonnements', icon: Users },
              { id: 'tendances', label: 'Tendances', icon: TrendingUp },
              { id: 'insights', label: 'Insights', icon: Target }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-white text-blue-600 shadow-lg'
                    : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Contenu dynamique */}
        <div className="transition-all duration-300">
          {activeTab === 'vue-ensemble' && renderVueEnsemble()}
          {activeTab === 'types-bornes' && renderTypesBornes()}
          {activeTab === 'abonnements' && renderAbonnements()}
          {activeTab === 'tendances' && renderTendances()}
          {activeTab === 'insights' && renderInsights()}
        </div>

        {/* Modals */}
        {selectedStation && <StationModal station={selectedStation} onClose={() => setSelectedStation(null)} />}
        {selectedAbonnement && <AbonnementModal abonnement={selectedAbonnement} onClose={() => setSelectedAbonnement(null)} />}
      </div>
    </div>
  );
};

export default MakayaRecharge;

// FIN PARTIE 3/3
