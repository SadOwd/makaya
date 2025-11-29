// ============================================================================
// PARTIE 3 - NAVIGATION ET GESTION DES ONGLETS (PRIX EN FCFA)
// ============================================================================

  return (
    <div className="min-h-screen bg-gray-50">
      {/* En-tête principal */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                <Zap className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Makaya Recharge</h1>
                <p className="text-blue-100">Infrastructure de Recharge pour Véhicules Électriques</p>
              </div>
            </div>
            {onNavigate && (
              <button
                onClick={() => onNavigate('cahier-charge')}
                className="px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-2 font-semibold shadow-lg"
              >
                <FileText className="w-5 h-5" />
                Cahier de Charge
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Navigation par onglets */}
      <div className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex items-center gap-2 px-6 py-4 font-semibold transition-all whitespace-nowrap
                    ${isActive 
                      ? 'bg-blue-600 text-white border-b-4 border-blue-800' 
                      : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                  {tab.id === 'cahier-charge' && (
                    <PulsingBadge />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Onglet Vue d'ensemble */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Statistiques Clés */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                icon={Zap}
                label="Bornes Totales"
                value={chargingStats.total}
                bgColor="bg-blue-500"
                description="Installation complète"
              />
              <StatCard
                icon={Activity}
                label="Bornes Actives"
                value={chargingStats.active}
                bgColor="bg-green-500"
                description="Opérationnelles 24/7"
              />
              <StatCard
                icon={TrendingUp}
                label="Taux d'Utilisation"
                value={`${chargingStats.utilizationRate}%`}
                bgColor="bg-purple-500"
                description="Performance optimale"
              />
              <StatCard
                icon={DollarSign}
                label="Revenus Mensuels"
                value={`${(chargingStats.monthlyRevenue * 584).toLocaleString()} F`}
                bgColor="bg-emerald-500"
                description="Croissance continue"
              />
            </div>

            {/* Distribution des Bornes */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Battery className="w-7 h-7 text-blue-600" />
                Distribution des Bornes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {bornesData.map((borne, index) => (
                  <div key={index} className={`bg-gradient-to-br ${borne.gradient} rounded-lg p-6 text-white shadow-lg`}>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold">{borne.type}</h3>
                      <borne.icon className="w-8 h-8 opacity-80" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm opacity-90">Puissance</span>
                        <span className="font-bold">{borne.power}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm opacity-90">Quantité</span>
                        <span className="font-bold">{borne.count}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm opacity-90">Temps de charge</span>
                        <span className="font-bold">{borne.chargeTime}</span>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t border-white/30">
                        <span className="text-sm opacity-90">Prix unitaire</span>
                        <span className="font-bold text-lg">{borne.priceFCFA}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Statistiques rapides */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <QuickStat icon={Users} label="Utilisateurs actifs" value="850+" />
              <QuickStat icon={Zap} label="Sessions/jour" value="120+" />
              <QuickStat icon={Clock} label="Disponibilité" value="95%" />
              <QuickStat icon={TrendingUp} label="Croissance" value="+32%" />
            </div>

            {/* Projets de Budget */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <DollarSign className="w-7 h-7 text-green-600" />
                Analyse Budgétaire
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">Investissement Initial</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Bornes AC (5x)</span>
                      <span className="font-bold text-blue-900">8 750 000 F</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Bornes DC60 (3x)</span>
                      <span className="font-bold text-blue-900">26 250 000 F</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Bornes DC120 (2x)</span>
                      <span className="font-bold text-blue-900">29 200 000 F</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Infrastructure</span>
                      <span className="font-bold text-blue-900">21 020 000 F</span>
                    </div>
                    <div className="border-t-2 border-blue-300 pt-3 flex justify-between">
                      <span className="font-bold text-blue-900">Total</span>
                      <span className="font-bold text-2xl text-blue-600">85 220 000 F</span>
                    </div>
                    <div className="text-xs text-gray-500 text-right">(≈ 146 000 USD)</div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-4">Rentabilité Annuelle</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Revenus annuels</span>
                      <span className="font-bold text-green-900">72 500 000 F</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Charges annuelles</span>
                      <span className="font-bold text-red-600">-36 790 000 F</span>
                    </div>
                    <div className="border-t-2 border-green-300 pt-3 flex justify-between">
                      <span className="font-bold text-green-900">Bénéfice net</span>
                      <span className="font-bold text-2xl text-green-600">35 710 000 F</span>
                    </div>
                    <div className="bg-green-600 text-white rounded-lg p-3 mt-4 text-center">
                      <div className="text-sm mb-1">Retour sur investissement</div>
                      <div className="text-2xl font-bold">&lt; 12 mois</div>
                      <div className="text-sm mt-1">Rentabilité: 48%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Onglet Types de Bornes */}
        {activeTab === 'types' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Types de Bornes de Recharge</h2>
              <div className="space-y-6">
                {bornesData.map((borne, index) => (
                  <div key={index} className={`bg-gradient-to-r ${borne.gradient} rounded-lg p-6 text-white`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <borne.icon className="w-10 h-10" />
                          <div>
                            <h3 className="text-2xl font-bold">{borne.type}</h3>
                            <p className="text-sm opacity-90">{borne.description}</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div>
                            <div className="text-sm opacity-80">Puissance</div>
                            <div className="text-xl font-bold">{borne.power}</div>
                          </div>
                          <div>
                            <div className="text-sm opacity-80">Quantité</div>
                            <div className="text-xl font-bold">{borne.count}</div>
                          </div>
                          <div>
                            <div className="text-sm opacity-80">Temps charge</div>
                            <div className="text-xl font-bold">{borne.chargeTime}</div>
                          </div>
                          <div>
                            <div className="text-sm opacity-80">Prix unitaire</div>
                            <div className="text-xl font-bold">{borne.priceFCFA}</div>
                          </div>
                        </div>

                        <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                          <h4 className="font-semibold mb-2">Caractéristiques techniques</h4>
                          <ul className="space-y-1 text-sm">
                            {borne.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Onglet Insights */}
        {activeTab === 'insights' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <TrendingUp className="w-7 h-7 text-purple-600" />
                Analyses & Insights
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <InfoCard
                  icon={Battery}
                  title="Performance Énergétique"
                  value="95%"
                  description="Taux de disponibilité des bornes sur le dernier mois"
                  color="green"
                />
                <InfoCard
                  icon={Users}
                  title="Satisfaction Client"
                  value="4.8/5"
                  description="Note moyenne basée sur 1,250 avis clients"
                  color="blue"
                />
                <InfoCard
                  icon={Clock}
                  title="Temps Moyen"
                  value="38 min"
                  description="Durée moyenne d'une session de recharge"
                  color="purple"
                />
                <InfoCard
                  icon={Zap}
                  title="Énergie Délivrée"
                  value="12.5 MWh"
                  description="Total mensuel d'énergie distribuée"
                  color="yellow"
                />
              </div>

              <div className="mt-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-4">🎯 Objectifs & Projections</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-3xl font-bold mb-1">+45%</div>
                    <div className="text-sm">Croissance attendue Q4</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-3xl font-bold mb-1">20+</div>
                    <div className="text-sm">Nouvelles bornes en 2026</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-3xl font-bold mb-1">3 villes</div>
                    <div className="text-sm">Expansion régionale</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Localisations */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <MapPin className="w-7 h-7 text-red-600" />
                Sites d'Installation
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <LocationCard
                  name="Centre Commercial Lomé"
                  address="Boulevard du 13 Janvier, Lomé"
                  type="Centre commercial"
                  status="Opérationnel"
                />
                <LocationCard
                  name="Hôtel Sarakawa"
                  address="Avenue Sarakawa, Lomé"
                  type="Hôtellerie"
                  status="Opérationnel"
                />
                <LocationCard
                  name="Station Total Tokoin"
                  address="Rue de Tokoin, Lomé"
                  type="Station-service"
                  status="En construction"
                />
                <LocationCard
                  name="Aéroport de Lomé"
                  address="Route de l'Aéroport, Lomé"
                  type="Aéroport"
                  status="Planifié"
                />
                <LocationCard
                  name="Université de Lomé"
                  address="Campus universitaire, Lomé"
                  type="Établissement public"
                  status="Planifié"
                />
                <LocationCard
                  name="Zone Industrielle"
                  address="Zone Portuaire, Lomé"
                  type="Zone industrielle"
                  status="Planifié"
                />
              </div>
            </div>
          </div>
        )}
