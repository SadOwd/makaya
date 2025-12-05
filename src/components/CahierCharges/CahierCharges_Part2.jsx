// Suite du composant CahierCharges - Partie 2
// À fusionner avec la partie 1

  {/* Section Analyse Économique */}
  {activeTab === 'economique' && sectionDetails[5] && (
    <div className="space-y-6">
      {/* Projections 5 ans */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Projections Financières 5 Ans</h3>
        <div className="grid grid-cols-3 gap-4">
          {['annee1', 'annee3', 'annee5'].map((annee, index) => {
            const data = sectionDetails[5].projections[annee];
            const anneeNum = annee === 'annee1' ? 1 : annee === 'annee3' ? 3 : 5;
            return (
              <div key={annee} className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-lg p-4">
                <h4 className="font-bold text-lg text-gray-900 mb-3">Année {anneeNum}</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sessions/jour</span>
                    <span className="font-semibold">{data.sessions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Revenus</span>
                    <span className="font-semibold">{(data.revenus / 1000000).toFixed(1)}M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">EBITDA</span>
                    <span className={`font-semibold ${data.ebitda > 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                      {(data.ebitda / 1000000).toFixed(1)}M
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Marge EBITDA</span>
                    <span className={`font-semibold ${data.margeEbitda > 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                      {data.margeEbitda.toFixed(1)}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">ROIC</span>
                    <span className={`font-semibold ${data.roic > 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                      {data.roic.toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tarification */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Tarification HYC50 (50 kW)</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span>Public</span>
              <span className="font-bold text-emerald-600">{sectionDetails[5].tarification.hYC50.public}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span>Abonné</span>
              <span className="font-bold text-blue-600">{sectionDetails[5].tarification.hYC50.abonne}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span>B2B Flottes</span>
              <span className="font-bold text-purple-600">{sectionDetails[5].tarification.hYC50.b2b}</span>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              Session moyenne: {sectionDetails[5].tarification.hYC50.sessionMoyenne}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Tarification HYC200 (200 kW)</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span>Public</span>
              <span className="font-bold text-emerald-600">{sectionDetails[5].tarification.hYC200.public}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span>Abonné</span>
              <span className="font-bold text-blue-600">{sectionDetails[5].tarification.hYC200.abonne}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span>B2B Flottes</span>
              <span className="font-bold text-purple-600">{sectionDetails[5].tarification.hYC200.b2b}</span>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              Session moyenne: {sectionDetails[5].tarification.hYC200.sessionMoyenne}
            </div>
          </div>
        </div>
      </div>

      {/* Comparatif ABB */}
      <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-emerald-600" />
          Alpitronic vs ABB - Performance Supérieure
        </h3>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
          {Object.entries(sectionDetails[5].comparatifABB).map(([key, value]) => {
            const labels = {
              capex: 'CAPEX',
              revenusAn5: 'Revenus An 5',
              ebitdaAn5: 'EBITDA An 5',
              roicAn5: 'ROIC An 5',
              payback: 'Payback'
            };
            return (
              <div key={key} className="bg-white rounded-lg p-4">
                <h4 className="text-sm font-semibold text-gray-600 mb-2">{labels[key]}</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Alpitronic:</span>
                    <span className="font-semibold text-emerald-600">
                      {typeof value.alpitronic === 'number' ? `${value.alpitronic}M` : value.alpitronic}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>ABB:</span>
                    <span className="font-semibold">
                      {typeof value.abb === 'number' ? `${value.abb}M` : value.abb}
                    </span>
                  </div>
                  <div className="flex justify-between pt-1 border-t">
                    <span className="text-emerald-600">Δ:</span>
                    <span className="font-bold text-emerald-600">
                      {typeof value.delta === 'number' ? 
                        `${value.delta > 0 ? '+' : ''}${value.delta}${key.includes('roic') ? ' pts' : 'M'}` : 
                        value.delta
                      }
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-4 p-4 bg-emerald-100 border-l-4 border-emerald-500 rounded">
          <p className="font-semibold text-emerald-900">
            🏆 Alpitronic surpasse ABB sur TOUS les indicateurs clés!
          </p>
        </div>
      </div>
    </div>
  )}

  {/* Section Partenariats B2B */}
  {activeTab === 'partenariats' && sectionDetails[9] && (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Objectif Stratégique</h3>
        <p className="text-gray-700">{sectionDetails[9].objectif}</p>
        <div className="mt-4 inline-block bg-purple-100 px-4 py-2 rounded-full">
          <span className="text-2xl font-bold text-purple-700">{sectionDetails[9].totalB2BSecurise}</span>
          <span className="text-sm text-purple-600 ml-2">sécurisé Année 1</span>
        </div>
      </div>

      {/* Partenaires */}
      <div className="grid gap-4">
        {sectionDetails[9].partenaires.map((partenaire, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{partenaire.nom}</h3>
                <p className="text-gray-600">{partenaire.type}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                partenaire.statut === 'LOI signée' ? 'bg-green-100 text-green-700' :
                partenaire.statut.includes('négociation') ? 'bg-yellow-100 text-yellow-700' :
                'bg-blue-100 text-blue-700'
              }`}>
                {partenaire.statut}
              </span>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-3 rounded">
                <div className="text-sm text-gray-600">Véhicules</div>
                <div className="text-2xl font-bold text-gray-900">{partenaire.vehicules}</div>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <div className="text-sm text-gray-600">Volume annuel</div>
                <div className="text-xl font-bold text-emerald-600">{partenaire.volumeAnnuel}</div>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <div className="text-sm text-gray-600">Conditions</div>
                <div className="text-sm text-gray-700">{partenaire.conditions}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Avantages */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Avantages Partenariats B2B</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {sectionDetails[9].avantages.map((avantage, index) => (
            <div key={index} className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg">
              <Check className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{avantage}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )}

  {/* Section KPIs */}
  {activeTab === 'kpis' && sectionDetails[13] && (
    <div className="space-y-6">
      {/* KPIs Opérationnels */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Activity className="w-6 h-6 text-blue-600" />
          Indicateurs Opérationnels
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 px-4">KPI</th>
                <th className="text-left py-3 px-4">Cible</th>
                <th className="text-left py-3 px-4">Mesure</th>
              </tr>
            </thead>
            <tbody>
              {sectionDetails[13].operationnels.map((kpi, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-semibold">{kpi.kpi}</td>
                  <td className="py-3 px-4 text-emerald-600 font-semibold">{kpi.cible}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{kpi.mesure}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* KPIs Financiers */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <DollarSign className="w-6 h-6 text-emerald-600" />
          Indicateurs Financiers
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 px-4">KPI</th>
                <th className="text-left py-3 px-4">Cible</th>
                <th className="text-left py-3 px-4">Mesure</th>
              </tr>
            </thead>
            <tbody>
              {sectionDetails[13].financiers.map((kpi, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-semibold">{kpi.kpi}</td>
                  <td className="py-3 px-4 text-emerald-600 font-semibold">{kpi.cible}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{kpi.mesure}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* KPIs Clients */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Users className="w-6 h-6 text-purple-600" />
          Indicateurs Clients
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 px-4">KPI</th>
                <th className="text-left py-3 px-4">Cible</th>
                <th className="text-left py-3 px-4">Mesure</th>
              </tr>
            </thead>
            <tbody>
              {sectionDetails[13].clients.map((kpi, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-semibold">{kpi.kpi}</td>
                  <td className="py-3 px-4 text-purple-600 font-semibold">{kpi.cible}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{kpi.mesure}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
        <p className="text-sm text-blue-900">
          <strong>Fréquence Dashboard:</strong> {sectionDetails[13].dashboardFrequence}
        </p>
      </div>
    </div>
  )}
