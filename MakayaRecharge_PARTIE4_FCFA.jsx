// ============================================================================
// PARTIE 4 - ONGLET CAHIER DE CHARGE (PRIX EN FCFA)
// ============================================================================

      {/* Onglet Cahier de Charge */}
      {activeTab === 'cahier-charge' && (
        <div className="space-y-6">
          {/* En-tête */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                <FileText className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">Cahier de Charge</h2>
                <p className="text-blue-100 text-lg">Infrastructure de Recharge Makaya</p>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">10</div>
                <div className="text-sm text-blue-100">Bornes Totales</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">67,7M</div>
                <div className="text-sm text-blue-100">Budget Total (FCFA)</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">&lt;12</div>
                <div className="text-sm text-blue-100">Mois ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">48%</div>
                <div className="text-sm text-blue-100">Rentabilité</div>
              </div>
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Sections du Cahier de Charge</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: Target, label: 'Contexte & Objectifs', color: 'blue' },
                { icon: Zap, label: 'Spécifications Techniques', color: 'yellow' },
                { icon: Shield, label: 'Sécurité & Normes', color: 'red' },
                { icon: DollarSign, label: 'Budget & ROI', color: 'green' },
                { icon: Calendar, label: 'Planning', color: 'purple' },
                { icon: Users, label: 'Équipe & Parties', color: 'indigo' }
              ].map((section, idx) => (
                <div 
                  key={idx}
                  className={`bg-${section.color}-50 border-2 border-${section.color}-200 rounded-lg p-4 hover:shadow-md transition-all cursor-pointer`}
                >
                  <section.icon className={`w-6 h-6 text-${section.color}-600 mb-2`} />
                  <div className={`font-semibold text-${section.color}-900 text-sm`}>
                    {section.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contexte et Objectifs */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-800">1. Contexte et Objectifs</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">📍 Contexte</h4>
                <p className="text-gray-700 text-sm">
                  Développement d'une infrastructure de recharge pour véhicules électriques au Togo, 
                  dans le cadre du projet Makaya visant à promouvoir la mobilité électrique durable.
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-2">🎯 Objectifs Principaux</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Installer 10 bornes de recharge (5 AC + 5 DC) sur des sites stratégiques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Assurer un taux de disponibilité de 95% minimum</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Atteindre un ROI en moins de 12 mois avec une rentabilité de 48%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Créer une expérience utilisateur fluide et moderne</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Spécifications Techniques */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-yellow-600" />
              <h3 className="text-xl font-bold text-gray-800">2. Spécifications Techniques</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {/* Bornes AC */}
              <div className="bg-yellow-50 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-900 mb-3 flex items-center gap-2">
                  <Battery className="w-5 h-5" />
                  Bornes AC (5 unités)
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Puissance:</span>
                    <span className="font-semibold">22 kW</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Type:</span>
                    <span className="font-semibold">Type 2</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Temps charge:</span>
                    <span className="font-semibold">2-4h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Prix unitaire:</span>
                    <span className="font-semibold text-green-600">1 750 000 FCFA</span>
                  </div>
                  <div className="flex justify-between border-t pt-2 mt-2">
                    <span className="text-gray-600 font-semibold">Total:</span>
                    <span className="font-bold text-green-600">8 750 000 FCFA</span>
                  </div>
                </div>
              </div>

              {/* Bornes DC60 */}
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-semibold text-orange-900 mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Bornes DC 60kW (3 unités)
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Puissance:</span>
                    <span className="font-semibold">60 kW</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Type:</span>
                    <span className="font-semibold">CCS / CHAdeMO</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Temps charge:</span>
                    <span className="font-semibold">30-45min</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Prix unitaire:</span>
                    <span className="font-semibold text-green-600">8 750 000 FCFA</span>
                  </div>
                  <div className="flex justify-between border-t pt-2 mt-2">
                    <span className="text-gray-600 font-semibold">Total:</span>
                    <span className="font-bold text-green-600">26 250 000 FCFA</span>
                  </div>
                </div>
              </div>

              {/* Bornes DC120 */}
              <div className="bg-red-50 rounded-lg p-4">
                <h4 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Bornes DC 120kW (2 unités)
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Puissance:</span>
                    <span className="font-semibold">120 kW</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Type:</span>
                    <span className="font-semibold">CCS / CHAdeMO</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Temps charge:</span>
                    <span className="font-semibold">15-20min</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Prix unitaire:</span>
                    <span className="font-semibold text-green-600">14 600 000 FCFA</span>
                  </div>
                  <div className="flex justify-between border-t pt-2 mt-2">
                    <span className="text-gray-600 font-semibold">Total:</span>
                    <span className="font-bold text-green-600">29 200 000 FCFA</span>
                  </div>
                </div>
              </div>

              {/* Infrastructure */}
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
                  <Wrench className="w-5 h-5" />
                  Infrastructure & Installation
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Génie civil:</span>
                    <span className="font-semibold">5 840 000 FCFA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Installation:</span>
                    <span className="font-semibold">4 670 000 FCFA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Raccordement:</span>
                    <span className="font-semibold">7 010 000 FCFA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Logiciel:</span>
                    <span className="font-semibold">3 500 000 FCFA</span>
                  </div>
                  <div className="flex justify-between border-t pt-2 mt-2">
                    <span className="text-gray-600 font-semibold">Total:</span>
                    <span className="font-bold text-green-600">21 020 000 FCFA</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Budget Total */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg p-6 mt-4 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm opacity-90">Budget Total Infrastructure</div>
                  <div className="text-4xl font-bold mt-1">67 720 000 FCFA</div>
                  <div className="text-sm opacity-80 mt-1">(≈ 116 000 USD)</div>
                </div>
                <DollarSign className="w-16 h-16 opacity-20" />
              </div>
            </div>
          </div>

          {/* Analyse Économique */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-green-600" />
              <h3 className="text-xl font-bold text-gray-800">3. Analyse Économique & ROI</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-3">📊 Revenus Annuels</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Recharge AC:</span>
                    <span className="font-semibold">15 760 000 F</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Recharge DC60:</span>
                    <span className="font-semibold">31 520 000 F</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Recharge DC120:</span>
                    <span className="font-semibold">25 220 000 F</span>
                  </div>
                  <div className="flex justify-between border-t pt-2 font-bold text-blue-900">
                    <span>Total:</span>
                    <span>72 500 000 F</span>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-semibold text-orange-900 mb-3">💰 Charges Annuelles</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Électricité:</span>
                    <span className="font-semibold">26 280 000 F</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Maintenance:</span>
                    <span className="font-semibold">7 010 000 F</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Personnel:</span>
                    <span className="font-semibold">3 500 000 F</span>
                  </div>
                  <div className="flex justify-between border-t pt-2 font-bold text-orange-900">
                    <span>Total:</span>
                    <span>36 790 000 F</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-3">✅ Résultat Net</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Bénéfice net:</span>
                    <span className="font-semibold text-green-600">35 710 000 F</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Marge:</span>
                    <span className="font-semibold text-green-600">48%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ROI:</span>
                    <span className="font-semibold text-green-600">&lt; 12 mois</span>
                  </div>
                  <div className="bg-green-600 text-white rounded p-2 mt-2 text-center font-bold">
                    Très Rentable ✓
                  </div>
                </div>
              </div>
            </div>
          </div>
