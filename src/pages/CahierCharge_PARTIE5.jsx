// ============================================================================
// CAHIER DE CHARGE RECHARGE - PARTIE 5/6
// Budget, Économique et Risques
// ============================================================================

  // Section 7: Budget
  const renderBudget = () => (
    <div className="space-y-6">
      <SectionHeader
        icon={Calculator}
        title="7. ESTIMATION BUDGÉTAIRE DÉTAILLÉE"
        subtitle="Investissement Phase 1 - Sans solaire"
        color="red"
      />

      {/* Budget Total */}
      <Card className="p-6">
        <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl p-8 mb-6">
          <div className="text-center">
            <div className="text-sm font-semibold opacity-90 mb-2">INVESTISSEMENT TOTAL PHASE 1</div>
            <div className="text-6xl font-bold mb-4">115 977 USD</div>
            <div className="text-lg">Arrondi: ~116 000 USD</div>
            <div className="text-sm opacity-90 mt-2">Fourchette: 110 000 - 120 000 USD</div>
          </div>
        </div>

        {/* Répartition budgétaire */}
        <h3 className="text-xl font-bold text-gray-900 mb-4">Répartition budgétaire:</h3>
        <div className="space-y-3">
          {[
            { poste: 'Équipements recharge', montant: 28097, pourcent: 24, color: 'blue' },
            { poste: 'Infrastructure électrique', montant: 30180, pourcent: 26, color: 'yellow' },
            { poste: 'Génie civil', montant: 33300, pourcent: 29, color: 'green' },
            { poste: 'Supervision/gestion', montant: 12250, pourcent: 10, color: 'purple' },
            { poste: 'Installation/mise en service', montant: 17600, pourcent: 15, color: 'indigo' },
            { poste: 'Transport/logistique', montant: 5600, pourcent: 5, color: 'orange' },
            { poste: 'Études/autorisations', montant: 5600, pourcent: 5, color: 'pink' },
            { poste: 'Éclairage/sécurité', montant: 5950, pourcent: 5, color: 'cyan' },
            { poste: 'Divers/imprévus', montant: 13400, pourcent: 11, color: 'red' }
          ].map((item, idx) => {
            const colors = {
              blue: 'bg-blue-500',
              yellow: 'bg-yellow-500',
              green: 'bg-green-500',
              purple: 'bg-purple-500',
              indigo: 'bg-indigo-500',
              orange: 'bg-orange-500',
              pink: 'bg-pink-500',
              cyan: 'bg-cyan-500',
              red: 'bg-red-500'
            };
            return (
              <div key={idx} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-900">{item.poste}</span>
                  <div className="text-right">
                    <div className="font-bold text-gray-900">{item.montant.toLocaleString()} USD</div>
                    <div className="text-sm text-gray-600">{item.pourcent}%</div>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`${colors[item.color]} h-2 rounded-full`}
                    style={{ width: `${item.pourcent}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Détail Équipements */}
      <Card className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Package className="w-6 h-6 text-blue-600" />
          7.1 Coût des Équipements de Recharge
        </h3>

        <DataTable
          headers={['Élément', 'Prix unitaire', 'Quantité', 'Total USD']}
          rows={[
            ['Borne AC 21kW', '469 USD', '5', '2 345'],
            ['Poteaux montage AC', '150 USD', '5', '750'],
            ['Borne DC 60kW CCS2', '4 168 USD', '3', '12 504'],
            ['Borne DC 120kW CCS2', '6 039 USD', '2', '12 078'],
            ['Accessoires fixation', '-', '-', '420'],
            ['', '', 'TOTAL', '28 097']
          ]}
        />
      </Card>

      {/* Phase 2 Solaire */}
      <Card className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Sun className="w-6 h-6 text-yellow-600" />
          Phase 2: Intégration Solaire (6-12 mois après)
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-2 border-yellow-200 rounded-lg p-4 bg-yellow-50">
            <h4 className="font-bold text-yellow-900 mb-3">Option A - Sans stockage</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-yellow-800">Panneaux 250 kWc:</span>
                <span className="font-bold">75-100k USD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-yellow-800">Onduleurs hybrides:</span>
                <span className="font-bold">40-50k USD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-yellow-800">Structure + Install:</span>
                <span className="font-bold">50-70k USD</span>
              </div>
              <div className="flex justify-between border-t-2 border-yellow-300 pt-2 mt-2">
                <span className="font-bold text-yellow-900">TOTAL:</span>
                <span className="font-bold text-yellow-900">175-235k USD</span>
              </div>
              <div className="flex justify-between border-t border-yellow-300 pt-2 mt-2">
                <span className="text-yellow-800">ROI supplémentaire:</span>
                <span className="font-bold text-green-700">3-4 ans</span>
              </div>
              <div className="flex justify-between">
                <span className="text-yellow-800">Couverture besoins:</span>
                <span className="font-bold">50-60%</span>
              </div>
            </div>
          </div>

          <div className="border-2 border-green-200 rounded-lg p-4 bg-green-50">
            <h4 className="font-bold text-green-900 mb-3">Option B - Avec batteries (Optimal)</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-green-800">Option A (base):</span>
                <span className="font-bold">175-235k USD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-800">Batteries 300 kWh:</span>
                <span className="font-bold">60-90k USD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-800">Installation:</span>
                <span className="font-bold">5-10k USD</span>
              </div>
              <div className="flex justify-between border-t-2 border-green-300 pt-2 mt-2">
                <span className="font-bold text-green-900">TOTAL:</span>
                <span className="font-bold text-green-900">240-335k USD</span>
              </div>
              <div className="flex justify-between border-t border-green-300 pt-2 mt-2">
                <span className="text-green-800">ROI batteries:</span>
                <span className="font-bold text-green-700">5-7 ans</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-800">Couverture besoins:</span>
                <span className="font-bold">80-95%</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );

  // Section 8: Modèle Économique
  const renderEconomique = () => (
    <div className="space-y-6">
      <SectionHeader
        icon={TrendingUp}
        title="8. MODÈLE ÉCONOMIQUE ET RENTABILITÉ"
        subtitle="Stratégie tarifaire et analyse financière"
        color="emerald"
      />

      {/* Stratégie Tarifaire */}
      <Card className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <DollarSign className="w-6 h-6 text-emerald-600" />
          8.1 Stratégie Tarifaire
        </h3>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="border-2 border-green-200 rounded-lg p-4 bg-green-50">
            <div className="text-center">
              <Plug className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-sm text-green-700 mb-1">AC 21kW</div>
              <div className="text-3xl font-bold text-green-900">300</div>
              <div className="text-sm text-green-700">FCFA/kWh</div>
              <div className="text-xs text-green-600 mt-2">(~0.50 USD/kWh)</div>
            </div>
          </div>

          <div className="border-2 border-blue-200 rounded-lg p-4 bg-blue-50">
            <div className="text-center">
              <Battery className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-sm text-blue-700 mb-1">DC 60kW</div>
              <div className="text-3xl font-bold text-blue-900">400</div>
              <div className="text-sm text-blue-700">FCFA/kWh</div>
              <div className="text-xs text-blue-600 mt-2">(~0.67 USD/kWh)</div>
            </div>
          </div>

          <div className="border-2 border-purple-200 rounded-lg p-4 bg-purple-50">
            <div className="text-center">
              <Zap className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-sm text-purple-700 mb-1">DC 120kW</div>
              <div className="text-3xl font-bold text-purple-900">500</div>
              <div className="text-sm text-purple-700">FCFA/kWh</div>
              <div className="text-xs text-purple-600 mt-2">(~0.83 USD/kWh)</div>
            </div>
          </div>
        </div>

        <InfoBox type="info">
          <strong>Justification tarifaire:</strong> Coefficient multiplicateur 2.5-5× sur le coût CEET 
          (120 FCFA/kWh) pour couvrir investissement, exploitation, maintenance et dégager une marge rentable.
        </InfoBox>
      </Card>

      {/* Revenus Prévisionnels */}
      <Card className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-green-600" />
          8.2 Revenus et Rentabilité Prévisionnels
        </h3>

        <div className="space-y-4">
          {/* Année 1 */}
          <div className="border-2 border-green-200 rounded-lg p-6 bg-green-50">
            <h4 className="font-bold text-green-900 mb-4 text-lg">Année 1 (Montée en charge):</h4>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-sm text-green-700 mb-2">Fréquentation:</div>
                <ul className="space-y-1 text-sm">
                  <li className="flex justify-between">
                    <span>Sessions/jour:</span>
                    <span className="font-bold">34</span>
                  </li>
                  <li className="flex justify-between">
                    <span>kWh/jour:</span>
                    <span className="font-bold">1 180</span>
                  </li>
                  <li className="flex justify-between">
                    <span>kWh annuel:</span>
                    <span className="font-bold">430 700</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="text-sm text-green-700 mb-2">Résultats:</div>
                <ul className="space-y-1 text-sm">
                  <li className="flex justify-between">
                    <span>Revenus:</span>
                    <span className="font-bold text-green-900">284 700 USD</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Coûts exploit:</span>
                    <span className="font-bold text-red-700">-126 140 USD</span>
                  </li>
                  <li className="flex justify-between border-t border-green-300 pt-1 mt-1">
                    <span className="font-bold">Résultat net:</span>
                    <span className="font-bold text-green-900">135 560 USD</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Marge nette:</span>
                    <span className="font-bold text-green-900">48%</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-green-600 text-white rounded-lg p-4 text-center">
              <div className="text-sm mb-1">ROI (Retour sur Investissement)</div>
              <div className="text-4xl font-bold">< 12 mois</div>
            </div>
          </div>

          {/* Année 2-3 */}
          <div className="border-2 border-blue-200 rounded-lg p-6 bg-blue-50">
            <h4 className="font-bold text-blue-900 mb-4 text-lg">Années 2-3 (Croissance):</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-sm text-blue-700 mb-2">Sessions/jour</div>
                <div className="text-3xl font-bold text-blue-900">49</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-blue-700 mb-2">Revenus annuels</div>
                <div className="text-3xl font-bold text-blue-900">408 800 USD</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-blue-700 mb-2">Résultat net</div>
                <div className="text-3xl font-bold text-blue-900">223 470 USD</div>
              </div>
            </div>
          </div>

          {/* TRI et VAN */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border-2 border-purple-200 rounded-lg p-4 bg-purple-50 text-center">
              <div className="text-sm text-purple-700 mb-2">TRI (Taux Rendement Interne)</div>
              <div className="text-5xl font-bold text-purple-900">180-200%</div>
              <div className="text-sm text-purple-600 mt-2">Exceptionnel</div>
            </div>
            <div className="border-2 border-indigo-200 rounded-lg p-4 bg-indigo-50 text-center">
              <div className="text-sm text-indigo-700 mb-2">VAN (Taux 10%)</div>
              <div className="text-5xl font-bold text-indigo-900">750 000 USD</div>
              <div className="text-sm text-indigo-600 mt-2">Très positif</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );

  // Section 9: Gestion des Risques
  const renderRisques = () => (
    <div className="space-y-6">
      <SectionHeader
        icon={AlertTriangle}
        title="9. GESTION DES RISQUES"
        subtitle="Identification, évaluation et mitigation"
        color="amber"
      />

      {/* Matrice des Risques */}
      <Card className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Matrice des risques principaux:</h3>

        <div className="space-y-3">
          {[
            {
              risque: 'Adoption VE lente',
              prob: 'Moyenne',
              impact: 'Élevé',
              criticite: 'Élevée',
              color: 'red',
              mitigation: 'Partenariats concessionnaires, promotions, B2B flottes'
            },
            {
              risque: 'Instabilité réseau CEET',
              prob: 'Élevée',
              impact: 'Moyen',
              criticite: 'Élevée',
              color: 'orange',
              mitigation: 'Protections robustes, Phase 2 solaire+batteries'
            },
            {
              risque: 'Hausse coût électricité',
              prob: 'Moyenne',
              impact: 'Élevé',
              criticite: 'Élevée',
              color: 'orange',
              mitigation: 'Indexation tarifs, intégration solaire prioritaire'
            },
            {
              risque: 'Défaillance équipements',
              prob: 'Moyenne',
              impact: 'Élevé',
              criticite: 'Moyenne',
              color: 'yellow',
              mitigation: 'Garanties étendues, stock pièces, maintenance préventive'
            },
            {
              risque: 'Vandalisme',
              prob: 'Moyenne',
              impact: 'Moyen',
              criticite: 'Moyenne',
              color: 'yellow',
              mitigation: 'Vidéosurveillance, éclairage, conception anti-vandalisme'
            },
            {
              risque: 'Retards autorisations',
              prob: 'Moyenne',
              impact: 'Moyen',
              criticite: 'Moyenne',
              color: 'yellow',
              mitigation: 'Dépôt anticipé, relances proactives'
            }
          ].map((item, idx) => {
            const colors = {
              red: 'border-red-300 bg-red-50',
              orange: 'border-orange-300 bg-orange-50',
              yellow: 'border-yellow-300 bg-yellow-50'
            };
            return (
              <div key={idx} className={`border-2 ${colors[item.color]} rounded-lg p-4`}>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="font-bold text-gray-900 mb-1">{item.risque}</div>
                    <div className="text-sm text-gray-700">{item.mitigation}</div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Badge color={item.color === 'red' ? 'red' : item.color === 'orange' ? 'orange' : 'yellow'}>
                      {item.prob}
                    </Badge>
                    <Badge color={item.color === 'red' ? 'red' : item.color === 'orange' ? 'orange' : 'yellow'}>
                      Impact: {item.impact}
                    </Badge>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
