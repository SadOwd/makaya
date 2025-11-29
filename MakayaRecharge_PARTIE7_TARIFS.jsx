// ============================================================================
// PARTIE 7 - ONGLET TARIFS COMPLET
// ============================================================================

        {/* Onglet Tarifs */}
        {activeTab === 'tarifs' && (
          <div className="space-y-6">
            {/* En-tête Tarifs */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-8 text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                  <DollarSign className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">Grille Tarifaire</h2>
                  <p className="text-green-100 text-lg">Tarification par segment et par période</p>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 mt-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">230 F</div>
                  <div className="text-sm text-green-100">Tarif Moyen/kWh</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">19.2%</div>
                  <div className="text-sm text-green-100">Marge Nette</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">600</div>
                  <div className="text-sm text-green-100">Sessions/mois</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">35%</div>
                  <div className="text-sm text-green-100">Marge Brute</div>
                </div>
              </div>
            </div>

            {/* Grille Tarifaire par Segment */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">💰 Tarification par Segment Client</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100 border-b-2 border-gray-300">
                      <th className="text-left p-4 font-bold">Segment Client</th>
                      <th className="text-center p-4 font-bold">Heures Creuses<br/><span className="text-xs font-normal">(23h-6h)</span></th>
                      <th className="text-center p-4 font-bold">Heures Pleines<br/><span className="text-xs font-normal">(6h-18h)</span></th>
                      <th className="text-center p-4 font-bold">Heures Pointe<br/><span className="text-xs font-normal">(18h-23h)</span></th>
                      <th className="text-center p-4 font-bold">Marge Nette</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Chauffeurs Ride */}
                    <tr className="border-b border-gray-200 hover:bg-green-50">
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <div>
                            <div className="font-bold text-gray-900">Chauffeurs Ride</div>
                            <div className="text-xs text-gray-600">Super-préférentiel - 20% volume</div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center p-4">
                        <div className="text-2xl font-bold text-green-600">160 F</div>
                        <div className="text-xs text-gray-500">/kWh</div>
                      </td>
                      <td className="text-center p-4">
                        <div className="text-2xl font-bold text-green-600">190 F</div>
                        <div className="text-xs text-gray-500">/kWh</div>
                      </td>
                      <td className="text-center p-4">
                        <div className="text-2xl font-bold text-green-600">240 F</div>
                        <div className="text-xs text-gray-500">/kWh</div>
                      </td>
                      <td className="text-center p-4">
                        <div className="text-xl font-bold text-green-600">28.3%</div>
                      </td>
                    </tr>

                    {/* Clients LLD */}
                    <tr className="border-b border-gray-200 hover:bg-blue-50">
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <div>
                            <div className="font-bold text-gray-900">Clients LLD</div>
                            <div className="text-xs text-gray-600">Préférentiel - 10% volume</div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center p-4">
                        <div className="text-2xl font-bold text-blue-600">145 F</div>
                        <div className="text-xs text-gray-500">/kWh</div>
                      </td>
                      <td className="text-center p-4">
                        <div className="text-2xl font-bold text-blue-600">175 F</div>
                        <div className="text-xs text-gray-500">/kWh</div>
                      </td>
                      <td className="text-center p-4">
                        <div className="text-2xl font-bold text-blue-600">220 F</div>
                        <div className="text-xs text-gray-500">/kWh</div>
                      </td>
                      <td className="text-center p-4">
                        <div className="text-xl font-bold text-blue-600">21.5%</div>
                      </td>
                    </tr>

                    {/* Clients Externes */}
                    <tr className="border-b border-gray-200 hover:bg-yellow-50 bg-yellow-50/50">
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div>
                            <div className="font-bold text-gray-900">Clients Externes</div>
                            <div className="text-xs text-gray-600">Standard - 70% volume ⭐</div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center p-4">
                        <div className="text-2xl font-bold text-yellow-600">200 F</div>
                        <div className="text-xs text-gray-500">/kWh</div>
                      </td>
                      <td className="text-center p-4">
                        <div className="text-2xl font-bold text-yellow-600">230 F</div>
                        <div className="text-xs text-gray-500">/kWh</div>
                      </td>
                      <td className="text-center p-4">
                        <div className="text-2xl font-bold text-yellow-600">285 F</div>
                        <div className="text-xs text-gray-500">/kWh</div>
                      </td>
                      <td className="text-center p-4">
                        <div className="text-xl font-bold text-yellow-600">35.4%</div>
                      </td>
                    </tr>

                    {/* Réservation Premium */}
                    <tr className="border-b border-gray-200 hover:bg-red-50">
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div>
                            <div className="font-bold text-gray-900">Réservation Premium</div>
                            <div className="text-xs text-gray-600">+10% sur tarif standard</div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center p-4">
                        <div className="text-2xl font-bold text-red-600">220 F</div>
                        <div className="text-xs text-gray-500">/kWh</div>
                      </td>
                      <td className="text-center p-4">
                        <div className="text-2xl font-bold text-red-600">255 F</div>
                        <div className="text-xs text-gray-500">/kWh</div>
                      </td>
                      <td className="text-center p-4">
                        <div className="text-2xl font-bold text-red-600">315 F</div>
                        <div className="text-xs text-gray-500">/kWh</div>
                      </td>
                      <td className="text-center p-4">
                        <div className="text-xl font-bold text-red-600">41.2%</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div className="text-sm text-gray-700">
                    <strong>Note:</strong> Tarif moyen pondéré: 227.5 FCFA/kWh | Mix réel: 70% Externes, 20% Ride, 10% LLD
                  </div>
                </div>
              </div>
            </div>

            {/* Comparaison avec Véhicules Thermiques */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">🚗 Comparaison Véhicule Électrique vs Thermique</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-lg p-6 border-2 border-green-200">
                  <h4 className="font-bold text-green-900 mb-4 text-lg">⚡ Véhicule Électrique (Makaya)</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Heures Creuses:</span>
                      <div className="text-right">
                        <div className="font-bold text-green-600">28.8 F/km</div>
                        <div className="text-xs text-green-600">-39.5% 🎉</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Heures Pleines:</span>
                      <div className="text-right">
                        <div className="font-bold text-green-600">36.8 F/km</div>
                        <div className="text-xs text-green-600">-22.7% 🎉</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Heures Pointe:</span>
                      <div className="text-right">
                        <div className="font-bold text-yellow-600">51.3 F/km</div>
                        <div className="text-xs text-yellow-600">+7.7%</div>
                      </div>
                    </div>
                    <div className="border-t-2 border-green-300 pt-3 flex justify-between items-center">
                      <span className="font-bold text-gray-900">Moyenne:</span>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">36.5 F/km</div>
                        <div className="text-xs text-green-600">-23.3% économie</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 rounded-lg p-6 border-2 border-red-200">
                  <h4 className="font-bold text-red-900 mb-4 text-lg">⛽ Véhicule Thermique (Essence)</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Consommation:</span>
                      <div className="font-bold text-red-600">6L/100km</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Prix essence:</span>
                      <div className="font-bold text-red-600">795 F/L</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Entretien:</span>
                      <div className="font-bold text-red-600">+12 F/km</div>
                    </div>
                    <div className="border-t-2 border-red-300 pt-3 flex justify-between items-center">
                      <span className="font-bold text-gray-900">Coût total:</span>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-red-600">47.6 F/km</div>
                        <div className="text-xs text-red-600">Référence</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg p-6 mt-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm opacity-90">Économie Annuelle (20 000 km/an)</div>
                    <div className="text-4xl font-bold mt-1">222 000 FCFA</div>
                    <div className="text-sm opacity-80 mt-1">Soit 18 500 F/mois d'économies !</div>
                  </div>
                  <TrendingDown className="w-16 h-16 opacity-20" />
                </div>
              </div>
            </div>

            {/* Projection Financière */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">📊 Projection Financière (1 Borne)</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-purple-100 to-blue-100 border-b-2 border-purple-300">
                      <th className="text-left p-4 font-bold">Année</th>
                      <th className="text-center p-4 font-bold">Taux Occupation</th>
                      <th className="text-center p-4 font-bold">Sessions/an</th>
                      <th className="text-center p-4 font-bold">CA (M FCFA)</th>
                      <th className="text-center p-4 font-bold">EBITDA<br/><span className="text-xs font-normal">Marge %</span></th>
                      <th className="text-center p-4 font-bold">Bénéfice Net<br/><span className="text-xs font-normal">Marge %</span></th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { annee: '2026', taux: '60%', sessions: '7 200', sessionsMonth: '600/m', ca: '57.3', ebitda: '21.1', ebitdaMargin: '36.9%', benefice: '11.0', beneficeMargin: '19.2%', color: 'blue' },
                      { annee: '2027', taux: '75%', sessions: '9 000', sessionsMonth: '750/m', ca: '71.6', ebitda: '29.3', ebitdaMargin: '40.9%', benefice: '19.2', beneficeMargin: '26.8%', color: 'green' },
                      { annee: '2028', taux: '85%', sessions: '10 200', sessionsMonth: '850/m', ca: '81.2', ebitda: '34.8', ebitdaMargin: '42.8%', benefice: '24.7', beneficeMargin: '30.4%', color: 'yellow', roi: true },
                      { annee: '2029', taux: '90%', sessions: '10 800', sessionsMonth: '900/m', ca: '86.1', ebitda: '37.4', ebitdaMargin: '43.5%', benefice: '27.3', beneficeMargin: '31.7%', color: 'orange' },
                      { annee: '2030', taux: '95%', sessions: '11 400', sessionsMonth: '950/m', ca: '90.9', ebitda: '40.4', ebitdaMargin: '44.4%', benefice: '30.3', beneficeMargin: '33.3%', color: 'purple' }
                    ].map((row, idx) => (
                      <tr key={idx} className={`border-b border-gray-200 hover:bg-${row.color}-50`}>
                        <td className="p-4 font-bold">{row.annee}</td>
                        <td className="text-center p-4">
                          <div className={`text-lg font-bold text-${row.color}-600`}>{row.taux}</div>
                        </td>
                        <td className="text-center p-4">
                          <div className="font-bold">{row.sessions}</div>
                          <div className="text-xs text-gray-500">({row.sessionsMonth})</div>
                        </td>
                        <td className="text-center p-4">
                          <div className="text-lg font-bold text-gray-900">{row.ca} M</div>
                        </td>
                        <td className="text-center p-4">
                          <div className="font-bold text-green-600">{row.ebitda} M</div>
                          <div className="text-xs text-green-600">{row.ebitdaMargin}</div>
                        </td>
                        <td className="text-center p-4">
                          <div className="font-bold text-blue-600">{row.benefice} M</div>
                          <div className="text-xs text-blue-600">{row.beneficeMargin}</div>
                          {row.roi && (
                            <div className="text-xs font-bold text-red-600 mt-1">ROI ✅</div>
                          )}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-gradient-to-r from-green-100 to-emerald-100 font-bold">
                      <td className="p-4">CUMUL 5 ANS</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">48 600</td>
                      <td className="text-center p-4 text-xl">387 M</td>
                      <td className="text-center p-4 text-xl text-green-600">163 M</td>
                      <td className="text-center p-4 text-xl text-blue-600">112.6 M</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
                  <div className="text-sm text-gray-600 mb-1">ROI (Retour sur Investissement)</div>
                  <div className="text-3xl font-bold text-green-600">2.7 ans</div>
                  <div className="text-xs text-gray-500 mt-1">32 mois - Excellent</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                  <div className="text-sm text-gray-600 mb-1">TRI (Taux Rendement Interne)</div>
                  <div className="text-3xl font-bold text-blue-600">38.5%</div>
                  <div className="text-xs text-gray-500 mt-1">Très attractif</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
                  <div className="text-sm text-gray-600 mb-1">Seuil de Rentabilité</div>
                  <div className="text-3xl font-bold text-purple-600">412</div>
                  <div className="text-xs text-gray-500 mt-1">sessions/mois (+46% marge)</div>
                </div>
              </div>
            </div>

            {/* Stratégie de Prix en 3 Phases */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">🎯 Stratégie de Prix en 3 Phases</h3>
              <div className="space-y-4">
                {[
                  {
                    phase: 'Phase 1: Lancement',
                    periode: 'Mois 1-6',
                    objectif: 'Construire base clients',
                    prix: 'Externes: 210 F/kWh (-9%)',
                    promo: '1ère recharge gratuite (15 kWh max)',
                    impact: '-4.2M revenus | +42% adoption',
                    color: 'blue'
                  },
                  {
                    phase: 'Phase 2: Croissance',
                    periode: 'Mois 7-18',
                    objectif: 'Atteindre capacité optimale',
                    prix: 'Externes: 230 F/kWh (optimal)',
                    promo: 'Fidélité: -5% après 10 recharges',
                    impact: 'Marge 35.4% | 85% occupation',
                    color: 'green'
                  },
                  {
                    phase: 'Phase 3: Maturité',
                    periode: 'Mois 19+',
                    objectif: 'Maximiser rentabilité',
                    prix: 'Externes: 230-250 F/kWh',
                    promo: 'Tarif dynamique selon occupation',
                    impact: 'Marge 38-42% | AI optimization',
                    color: 'purple'
                  }
                ].map((phase, idx) => (
                  <div key={idx} className={`bg-${phase.color}-50 rounded-lg p-5 border-l-4 border-${phase.color}-500`}>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className={`text-lg font-bold text-${phase.color}-900`}>{phase.phase}</h4>
                        <div className="text-sm text-gray-600">{phase.periode}</div>
                      </div>
                      <div className={`px-3 py-1 bg-${phase.color}-100 rounded-full text-xs font-semibold text-${phase.color}-700`}>
                        {phase.objectif}
                      </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-3 text-sm">
                      <div>
                        <div className="text-gray-600 text-xs">Prix:</div>
                        <div className="font-semibold">{phase.prix}</div>
                      </div>
                      <div>
                        <div className="text-gray-600 text-xs">Promotion:</div>
                        <div className="font-semibold">{phase.promo}</div>
                      </div>
                      <div>
                        <div className="text-gray-600 text-xs">Impact:</div>
                        <div className="font-semibold">{phase.impact}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer avec Validation */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
              <div className="text-center">
                <CheckCircle className="w-16 h-16 mx-auto mb-4 opacity-80" />
                <h3 className="text-2xl font-bold mb-2">✅ Tarifs Validés et Rentables</h3>
                <p className="text-blue-100 mb-6">Grille tarifaire optimisée pour une rentabilité maximale</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-2xl font-bold">19.2%</div>
                    <div className="text-xs">Marge Année 1</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-2xl font-bold">+46%</div>
                    <div className="text-xs">Marge Sécurité</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-2xl font-bold">2.7 ans</div>
                    <div className="text-xs">ROI</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-2xl font-bold">-23%</div>
                    <div className="text-xs">vs Thermique</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
