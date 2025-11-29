// ============================================================================
// CAHIER DE CHARGE RECHARGE - PARTIE 4/6
// Sections de Contenu (2/2) - Spécifications et Infrastructure
// ============================================================================

  // Section 2: Spécifications Techniques
  const renderSpecifications = () => (
    <div className="space-y-6">
      <SectionHeader
        icon={Settings}
        title="2. SPÉCIFICATIONS TECHNIQUES DÉTAILLÉES"
        subtitle="Configuration des bornes et architecture électrique"
        color="indigo"
      />

      {/* Configuration Générale */}
      <Card className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <LayoutGrid className="w-6 h-6 text-indigo-600" />
          2.1 Configuration Générale de la Station
        </h3>

        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border-2 border-indigo-200 rounded-lg p-6 mb-6">
          <div className="text-center mb-4">
            <div className="text-4xl font-bold text-indigo-900 mb-2">10 Points de Recharge</div>
            <div className="text-lg text-indigo-700">Capacité totale simultanée</div>
          </div>
        </div>

        <DataTable
          headers={['Type', 'Quantité', 'Puissance unitaire', 'Puissance totale', 'Usage principal']}
          rows={[
            ['Bornes AC', '5', '21 kW', '105 kW', 'Charge semi-rapide (2-3h)'],
            ['Bornes DC 60kW', '3', '60 kW', '180 kW', 'Charge rapide standard (45-50min)'],
            ['Bornes DC 120kW', '2', '120 kW', '240 kW', 'Charge ultra-rapide (20-25min)'],
            ['TOTAL', '10', '-', '525 kW', '-']
          ]}
        />

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="text-sm text-blue-700 mb-1">Puissance max théorique</div>
            <div className="text-2xl font-bold text-blue-900">525 kW</div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="text-sm text-green-700 mb-1">Puissance réelle (coef. 0.7)</div>
            <div className="text-2xl font-bold text-green-900">367.5 kW</div>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <div className="text-sm text-purple-700 mb-1">Abonnement CEET</div>
            <div className="text-2xl font-bold text-purple-900">370-400 kW</div>
          </div>
        </div>
      </Card>

      {/* Bornes AC 21kW */}
      <Card className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Plug className="w-6 h-6 text-green-600" />
          2.2 Bornes AC 21kW (5 Unités)
        </h3>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Badge color="green">Modèle</Badge>
              DL-A0121KW (ShenZhen Dawn)
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span className="text-gray-700">Puissance nominale:</span>
                <span className="font-bold">21 kW</span>
              </div>
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span className="text-gray-700">Tension entrée:</span>
                <span className="font-bold">AC 220V mono</span>
              </div>
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span className="text-gray-700">Courant sortie:</span>
                <span className="font-bold">0-80A ajustable</span>
              </div>
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span className="text-gray-700">Efficacité:</span>
                <span className="font-bold">≥ 95%</span>
              </div>
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span className="text-gray-700">Protection:</span>
                <span className="font-bold">IP54</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-3">Temps de charge estimés:</h4>
            <div className="space-y-3">
              <div className="border-2 border-green-200 rounded-lg p-3">
                <div className="font-semibold text-green-900 mb-2">Batterie 50 kWh:</div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>0% → 80%:</span>
                    <span className="font-bold text-green-700">~1h50</span>
                  </div>
                  <div className="flex justify-between">
                    <span>0% → 100%:</span>
                    <span className="font-bold text-green-700">~2h30</span>
                  </div>
                </div>
              </div>
              <div className="border-2 border-blue-200 rounded-lg p-3">
                <div className="font-semibold text-blue-900 mb-2">Batterie 75 kWh (SUV):</div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>0% → 80%:</span>
                    <span className="font-bold text-blue-700">~2h50</span>
                  </div>
                  <div className="flex justify-between">
                    <span>0% → 100%:</span>
                    <span className="font-bold text-blue-700">~3h45</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
          <h4 className="font-bold text-green-900 mb-3">Usage optimal:</h4>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="flex items-center gap-2 text-sm text-green-800">
              <CheckCircle2 className="w-4 h-4" />
              Stationnements semi-prolongés (2-4h)
            </div>
            <div className="flex items-center gap-2 text-sm text-green-800">
              <CheckCircle2 className="w-4 h-4" />
              Centres commerciaux, cinémas
            </div>
            <div className="flex items-center gap-2 text-sm text-green-800">
              <CheckCircle2 className="w-4 h-4" />
              Parkings publics, gares routières
            </div>
            <div className="flex items-center gap-2 text-sm text-green-800">
              <CheckCircle2 className="w-4 h-4" />
              Bureaux et lieux de travail
            </div>
          </div>
        </div>
      </Card>

      {/* Bornes DC 60kW */}
      <Card className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Battery className="w-6 h-6 text-blue-600" />
          2.3 Bornes DC 60kW (3 Unités)
        </h3>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Badge color="blue">Modèle</Badge>
              DC-FCA60KW (ShenZhen Dawn)
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span className="text-gray-700">Puissance nominale:</span>
                <span className="font-bold">60 kW</span>
              </div>
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span className="text-gray-700">Tension entrée:</span>
                <span className="font-bold">AC 380V triphasé ±15%</span>
              </div>
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span className="text-gray-700">Sortie DC:</span>
                <span className="font-bold">200-1000V / 0-250A</span>
              </div>
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span className="text-gray-700">Efficacité:</span>
                <span className="font-bold">≥ 94.5%</span>
              </div>
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span className="text-gray-700">Protection:</span>
                <span className="font-bold">IP54 / IK10</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-3">Temps de charge estimés:</h4>
            <div className="space-y-3">
              <div className="border-2 border-blue-200 rounded-lg p-3">
                <div className="font-semibold text-blue-900 mb-2">Batterie 50 kWh:</div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>10% → 80%:</span>
                    <span className="font-bold text-blue-700">~42 min</span>
                  </div>
                  <div className="flex justify-between">
                    <span>0% → 100%:</span>
                    <span className="font-bold text-blue-700">~65 min</span>
                  </div>
                </div>
              </div>
              <div className="border-2 border-indigo-200 rounded-lg p-3">
                <div className="font-semibold text-indigo-900 mb-2">Batterie 75 kWh (SUV):</div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>10% → 80%:</span>
                    <span className="font-bold text-indigo-700">~63 min</span>
                  </div>
                  <div className="flex justify-between">
                    <span>0% → 100%:</span>
                    <span className="font-bold text-indigo-700">~95 min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <InfoBox type="info">
          <strong>Connecteurs recommandés:</strong> CCS2 (Combo Type 2 + DC) pour compatibilité maximale au Togo et en Afrique.
          Prix: 4 168 USD/unité (standard international)
        </InfoBox>
      </Card>

      {/* Bornes DC 120kW */}
      <Card className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Zap className="w-6 h-6 text-purple-600" />
          2.4 Bornes DC 120kW (2 Unités) - Premium
        </h3>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Badge color="purple">Modèle</Badge>
              DC-FCA120KW (ShenZhen Dawn)
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span className="text-gray-700">Puissance nominale:</span>
                <span className="font-bold">120 kW</span>
              </div>
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span className="text-gray-700">Sortie DC:</span>
                <span className="font-bold">200-1000V / 0-250A</span>
              </div>
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span className="text-gray-700">Puissance constante:</span>
                <span className="font-bold">120 kW (200-480V)</span>
              </div>
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span className="text-gray-700">Efficacité:</span>
                <span className="font-bold">≥ 94.5%</span>
              </div>
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span className="text-gray-700">Refroidissement:</span>
                <span className="font-bold">Air forcé renforcé</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-3">Temps de charge ultra-rapide:</h4>
            <div className="space-y-3">
              <div className="border-2 border-purple-200 rounded-lg p-3 bg-purple-50">
                <div className="font-semibold text-purple-900 mb-2">Batterie 50 kWh:</div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>10% → 80%:</span>
                    <span className="font-bold text-purple-700">~21 min</span>
                  </div>
                  <div className="flex justify-between">
                    <span>0% → 100%:</span>
                    <span className="font-bold text-purple-700">~40 min</span>
                  </div>
                </div>
              </div>
              <div className="border-2 border-indigo-200 rounded-lg p-3 bg-indigo-50">
                <div className="font-semibold text-indigo-900 mb-2">Batterie 100 kWh:</div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>10% → 80%:</span>
                    <span className="font-bold text-indigo-700">~42 min</span>
                  </div>
                  <div className="flex justify-between">
                    <span>0% → 100%:</span>
                    <span className="font-bold text-indigo-700">~75 min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4">
          <h4 className="font-bold text-purple-900 mb-3">Véhicules compatibles haute puissance:</h4>
          <div className="grid md:grid-cols-3 gap-2 text-sm">
            <div className="flex items-center gap-2 text-purple-800">
              <Car className="w-4 h-4" />
              Tesla Model 3/Y/S/X
            </div>
            <div className="flex items-center gap-2 text-purple-800">
              <Car className="w-4 h-4" />
              Porsche Taycan
            </div>
            <div className="flex items-center gap-2 text-purple-800">
              <Car className="w-4 h-4" />
              Hyundai Ioniq 5/6
            </div>
            <div className="flex items-center gap-2 text-purple-800">
              <Car className="w-4 h-4" />
              Kia EV6
            </div>
            <div className="flex items-center gap-2 text-purple-800">
              <Car className="w-4 h-4" />
              Mercedes EQS, EQE
            </div>
            <div className="flex items-center gap-2 text-purple-800">
              <Car className="w-4 h-4" />
              BMW iX, i4
            </div>
          </div>
        </div>
      </Card>

      {/* Architecture Électrique */}
      <Card className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <CircuitBoard className="w-6 h-6 text-orange-600" />
          2.5 Architecture Électrique Globale
        </h3>

        <div className="space-y-4">
          <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-4">
            <h4 className="font-bold text-orange-900 mb-3">Calcul Puissance:</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-orange-800">Puissance installée totale:</span>
                <span className="font-bold text-orange-900">525 kW</span>
              </div>
              <div className="flex justify-between">
                <span className="text-orange-800">Coefficient de simultanéité:</span>
                <span className="font-bold text-orange-900">0.7</span>
              </div>
              <div className="flex justify-between">
                <span className="text-orange-800">Puissance pratique:</span>
                <span className="font-bold text-orange-900">367.5 kW</span>
              </div>
              <div className="flex justify-between">
                <span className="text-orange-800">Marge sécurité 10%:</span>
                <span className="font-bold text-orange-900">404 kW</span>
              </div>
              <div className="flex justify-between border-t-2 border-orange-300 pt-2 mt-2">
                <span className="text-orange-900 font-bold">→ Abonnement CEET:</span>
                <span className="font-bold text-orange-900 text-lg">400 kW</span>
              </div>
            </div>
          </div>

          <InfoBox type="warning">
            <strong>Système Load Balancing recommandé:</strong> Gestion dynamique de la charge pour éviter 
            le dépassement de puissance souscrite lors de pics de consommation simultanée. Répartition 
            intelligente entre bornes actives.
          </InfoBox>
        </div>
      </Card>
    </div>
  );
