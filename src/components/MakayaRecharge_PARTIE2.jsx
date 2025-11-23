  // PARTIE 2/3 - Modal Abonnement et sections de rendu

  // Composant Modal Abonnement
  const AbonnementModal = ({ abonnement, onClose }) => {
    if (!abonnement) return null;

    const IconBadge = abonnement.type === 'Premium' ? Crown : 
                     abonnement.type === 'Business' ? Award :
                     abonnement.type === 'Famille' ? Users :
                     abonnement.type === 'Etudiant' ? Star : Shield;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-6 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white bg-opacity-20 rounded-xl backdrop-blur-sm">
                  <IconBadge className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{abonnement.type}</h2>
                  <p className="text-blue-100">{abonnement.description}</p>
                </div>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-all">
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Pricing */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
              <div className="inline-block mb-4">
                <span className="text-5xl font-bold text-gray-900">{abonnement.prix}</span>
                <span className="text-gray-600 ml-2">/ mois</span>
              </div>
              {abonnement.economies && (
                <div className="flex items-center justify-center gap-2 text-green-600 font-semibold">
                  <Gift className="w-5 h-5" />
                  <span>Économisez {abonnement.economies}</span>
                </div>
              )}
            </div>

            {/* Avantages principaux */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-yellow-500" />
                Avantages Inclus
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {abonnement.avantages?.map((avantage, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-4">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{avantage}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Détails de l'offre */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-blue-600" />
                  <h3 className="font-bold text-gray-900">Recharge</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600">Sessions mensuelles</p>
                    <p className="text-xl font-bold text-gray-900">{abonnement.sessionsIncl || 'Illimité'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Réduction sur recharge</p>
                    <p className="text-xl font-bold text-green-600">{abonnement.reduction || '-20%'}</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-purple-600" />
                  <h3 className="font-bold text-gray-900">Services</h3>
                </div>
                <div className="space-y-2">
                  {abonnement.servicesExtras?.map((service, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-500" />
                      <span className="text-sm text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bornes accessibles */}
            {abonnement.bornesType && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Battery className="w-6 h-6 text-green-600" />
                  Bornes Accessibles
                </h3>
                <div className="grid md:grid-cols-3 gap-3">
                  {abonnement.bornesType.map((type, index) => (
                    <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                      <Zap className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <p className="font-semibold text-gray-900">{type}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Stats utilisateurs */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Popularité & Satisfaction</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">{abonnement.utilisateurs || '1,200'}</p>
                  <p className="text-sm text-gray-600 mt-1">Abonnés</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-600">{abonnement.satisfaction || '94%'}</p>
                  <p className="text-sm text-gray-600 mt-1">Satisfaction</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">{abonnement.avis || '4.8'}/5</p>
                </div>
              </div>
            </div>

            {/* Call to action */}
            <div className="flex gap-4">
              <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold hover:shadow-lg transition-all">
                Souscrire Maintenant
              </button>
              <button className="px-6 py-4 border-2 border-gray-300 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 transition-all">
                Comparer
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Section Vue d'Ensemble
  const renderVueEnsemble = () => (
    <div className="space-y-8">
      {/* KPIs */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Indicateurs Clés de Performance</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi, index) => (
            <KPICard key={index} {...kpi} />
          ))}
        </div>
      </div>

      {/* Graphique Revenus */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Évolution des Revenus</h3>
          <div className="flex items-center gap-2 text-green-600">
            <TrendingUp className="w-5 h-5" />
            <span className="font-semibold">+23% ce mois</span>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={revenueData}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }}
            />
            <Area type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Stations actives */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Stations de Recharge</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stations.map((station) => (
            <StationCard key={station.id} station={station} onClick={setSelectedStation} />
          ))}
        </div>
      </div>
    </div>
  );

  // Section Types de Bornes
  const renderTypesBornes = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-4">Types de Bornes de Recharge</h2>
        <p className="text-blue-100">
          Découvrez notre gamme complète de bornes adaptées à tous les besoins
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {typesBornesArray.map((borne) => (
          <div key={borne.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{borne.type}</h3>
                  <p className="text-sm text-gray-600">{borne.puissance}</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                ROI: {borne.roi}
              </span>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Temps de charge</p>
                    <p className="font-bold text-gray-900">{borne.tempsCharge}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Prix installation</p>
                    <p className="font-bold text-gray-900">{borne.investissement}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Tarif/kWh</p>
                    <p className="font-bold text-blue-600">{borne.tarifkWh}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Revenus/mois</p>
                    <p className="font-bold text-green-600">{borne.revenusMensuels}</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-700 mb-2">Cas d'usage:</p>
                <div className="flex flex-wrap gap-2">
                  {borne.casUsage?.map((cas, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">
                      {cas}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // FIN PARTIE 2/3
  // CONTINUER AVEC PARTIE 3/3
