// ============================================================================
// PARTIE 8 - ANNEXES TECHNIQUES ET SECTIONS COMPLÉMENTAIRES DU CAHIER DE CHARGE
// ============================================================================

        {/* Suite du Cahier de Charge - Sections Complémentaires */}
        {activeTab === 'cahier-charge' && (
          <>
            {/* Spécifications Électriques Détaillées */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-yellow-600" />
                <h3 className="text-xl font-bold text-gray-800">Annexe A - Spécifications Électriques Détaillées</h3>
              </div>

              {/* Tableau des spécifications électriques */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-100 border-b-2 border-gray-300">
                      <th className="text-left p-3 font-bold">Paramètre</th>
                      <th className="text-center p-3 font-bold">Borne AC 22kW</th>
                      <th className="text-center p-3 font-bold">Borne DC 60kW</th>
                      <th className="text-center p-3 font-bold">Borne DC 120kW</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 font-semibold">Tension d'entrée</td>
                      <td className="text-center p-3">400V AC triphasé</td>
                      <td className="text-center p-3">400V AC triphasé</td>
                      <td className="text-center p-3">400V AC triphasé</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-3 font-semibold">Tension de sortie</td>
                      <td className="text-center p-3">230V AC monophasé</td>
                      <td className="text-center p-3">150-500V DC</td>
                      <td className="text-center p-3">150-920V DC</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold">Courant max sortie</td>
                      <td className="text-center p-3">32A</td>
                      <td className="text-center p-3">125A</td>
                      <td className="text-center p-3">250A</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-3 font-semibold">Fréquence</td>
                      <td className="text-center p-3">50 Hz</td>
                      <td className="text-center p-3">50 Hz</td>
                      <td className="text-center p-3">50 Hz</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold">Rendement</td>
                      <td className="text-center p-3">≥ 94%</td>
                      <td className="text-center p-3">≥ 95%</td>
                      <td className="text-center p-3">≥ 96%</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-3 font-semibold">Facteur de puissance</td>
                      <td className="text-center p-3">≥ 0.99</td>
                      <td className="text-center p-3">≥ 0.99</td>
                      <td className="text-center p-3">≥ 0.99</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold">Protection thermique</td>
                      <td className="text-center p-3">IP54</td>
                      <td className="text-center p-3">IP54</td>
                      <td className="text-center p-3">IP55</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-3 font-semibold">Température fonct.</td>
                      <td className="text-center p-3">-20°C à +50°C</td>
                      <td className="text-center p-3">-25°C à +50°C</td>
                      <td className="text-center p-3">-25°C à +50°C</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold">Humidité</td>
                      <td className="text-center p-3">5% - 95%</td>
                      <td className="text-center p-3">5% - 95%</td>
                      <td className="text-center p-3">5% - 95%</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-3 font-semibold">Altitude max</td>
                      <td className="text-center p-3">2000m</td>
                      <td className="text-center p-3">2000m</td>
                      <td className="text-center p-3">2000m</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
                  <h4 className="font-bold text-yellow-900 mb-2">⚡ Puissance appelée</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• AC 22kW: 25 kVA par borne</li>
                    <li>• DC 60kW: 65 kVA par borne</li>
                    <li>• DC 120kW: 130 kVA par borne</li>
                    <li>• Total site: 550 kVA</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-900 mb-2">🔌 Raccordement réseau</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Type: BT 400V triphasé</li>
                    <li>• Transformateur: 630 kVA</li>
                    <li>• Câble: Cu 240 mm²</li>
                    <li>• Longueur max: 50m</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Connectique et Câbles */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-6 h-6 text-gray-600" />
                <h3 className="text-xl font-bold text-gray-800">Annexe B - Connectique et Câbles</h3>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {/* Type 2 */}
                <div className="bg-blue-50 rounded-lg p-5 border-2 border-blue-200">
                  <h4 className="font-bold text-blue-900 mb-3 text-lg">Type 2 (IEC 62196-2)</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Utilisé pour:</span>
                      <span className="font-semibold">AC 22kW</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Broches:</span>
                      <span className="font-semibold">7 pins</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Courant max:</span>
                      <span className="font-semibold">63A triphasé</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Longueur câble:</span>
                      <span className="font-semibold">5 mètres</span>
                    </div>
                    <div className="mt-3 pt-3 border-t border-blue-300">
                      <div className="font-semibold text-blue-900 mb-1">Compatible avec:</div>
                      <ul className="text-xs space-y-1">
                        <li>• Renault Zoe, Twingo E-Tech</li>
                        <li>• Tesla Model 3, Model Y</li>
                        <li>• Volkswagen ID.3, ID.4</li>
                        <li>• BMW i3, iX3</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* CCS */}
                <div className="bg-orange-50 rounded-lg p-5 border-2 border-orange-200">
                  <h4 className="font-bold text-orange-900 mb-3 text-lg">CCS (Combo 2)</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Utilisé pour:</span>
                      <span className="font-semibold">DC 60/120kW</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Broches:</span>
                      <span className="font-semibold">9 pins</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Courant max:</span>
                      <span className="font-semibold">500A DC</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Longueur câble:</span>
                      <span className="font-semibold">3 mètres</span>
                    </div>
                    <div className="mt-3 pt-3 border-t border-orange-300">
                      <div className="font-semibold text-orange-900 mb-1">Compatible avec:</div>
                      <ul className="text-xs space-y-1">
                        <li>• Audi e-tron, Q4 e-tron</li>
                        <li>• Mercedes EQC, EQA</li>
                        <li>• Porsche Taycan</li>
                        <li>• Hyundai Ioniq 5, Kia EV6</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* CHAdeMO */}
                <div className="bg-purple-50 rounded-lg p-5 border-2 border-purple-200">
                  <h4 className="font-bold text-purple-900 mb-3 text-lg">CHAdeMO</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Utilisé pour:</span>
                      <span className="font-semibold">DC 60kW</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Broches:</span>
                      <span className="font-semibold">10 pins</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Courant max:</span>
                      <span className="font-semibold">200A DC</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Longueur câble:</span>
                      <span className="font-semibold">3 mètres</span>
                    </div>
                    <div className="mt-3 pt-3 border-t border-purple-300">
                      <div className="font-semibold text-purple-900 mb-1">Compatible avec:</div>
                      <ul className="text-xs space-y-1">
                        <li>• Nissan Leaf, Ariya</li>
                        <li>• Mitsubishi Outlander PHEV</li>
                        <li>• Citroën e-C4</li>
                        <li>• Peugeot e-208, e-2008</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mt-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div className="text-sm text-gray-700">
                    <strong>Note:</strong> Tous les câbles sont conformes aux normes IEC 62196 et testés pour 10 000 cycles minimum. 
                    Remplacement préventif tous les 2 ans ou 20 000 cycles.
                  </div>
                </div>
              </div>
            </div>

            {/* Logiciel et Systèmes */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-6 h-6 text-indigo-600" />
                <h3 className="text-xl font-bold text-gray-800">Annexe C - Systèmes Logiciels et Communication</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Système de gestion */}
                <div className="space-y-4">
                  <div className="bg-indigo-50 rounded-lg p-5 border-2 border-indigo-200">
                    <h4 className="font-bold text-indigo-900 mb-3 flex items-center gap-2">
                      <Database className="w-5 h-5" />
                      Système de Gestion Centralisé
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Plateforme:</strong> Cloud AWS (redondance multi-région)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Base de données:</strong> PostgreSQL 14+ (haute disponibilité)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <span><strong>API:</strong> REST + WebSocket (temps réel)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Backup:</strong> Automatique quotidien + réplication</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-lg p-5 border-2 border-green-200">
                    <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                      <Phone className="w-5 h-5" />
                      Application Mobile
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Plateformes:</strong> iOS 14+, Android 10+</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Fonctions:</strong> Localisation, réservation, paiement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Paiement:</strong> Mobile Money, CB, Apple/Google Pay</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Historique:</strong> Sessions, factures, statistiques</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Communication et protocoles */}
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-lg p-5 border-2 border-blue-200">
                    <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                      <Activity className="w-5 h-5" />
                      Protocoles de Communication
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span><strong>OCPP 1.6J / 2.0.1:</strong> Communication borne-serveur</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span><strong>ISO 15118:</strong> Plug & Charge automatique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span><strong>MQTT:</strong> IoT et monitoring temps réel</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span><strong>4G/5G:</strong> Connectivité primaire + backup Ethernet</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-5 border-2 border-purple-200">
                    <h4 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                      <BarChart3 className="w-5 h-5" />
                      Monitoring et Analytics
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <Activity className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Temps réel:</strong> État bornes, consommation, pannes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Activity className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Alertes:</strong> SMS + Email + Push (incidents < 5min)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Activity className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Rapports:</strong> Hebdo, mensuel, annuel (auto)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Activity className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span><strong>BI:</strong> Dashboard Power BI + exports Excel/PDF</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-4 mt-6 border-l-4 border-yellow-500">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div className="text-sm text-gray-700">
                    <strong>Mise à jour OTA:</strong> Tous les logiciels et firmwares peuvent être mis à jour à distance (Over-The-Air) 
                    sans intervention physique. Planification automatique en heures creuses.
                  </div>
                </div>
              </div>
            </div>

            {/* Réglementation et Certifications */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-yellow-600" />
                <h3 className="text-xl font-bold text-gray-800">Annexe D - Certifications et Conformité Réglementaire</h3>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {/* Certifications Européennes */}
                <div className="bg-blue-50 rounded-lg p-5">
                  <h4 className="font-bold text-blue-900 mb-3 text-center">🇪🇺 Normes Européennes</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span className="font-semibold">Marquage CE</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span>Directive CEM 2014/30/UE</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span>Directive BT 2014/35/UE</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span>RoHS 2011/65/UE</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span>REACH EC 1907/2006</span>
                    </li>
                  </ul>
                </div>

                {/* Normes Techniques */}
                <div className="bg-green-50 rounded-lg p-5">
                  <h4 className="font-bold text-green-900 mb-3 text-center">⚡ Normes Techniques</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="font-semibold">IEC 61851-1</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>IEC 61851-23 (DC)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>IEC 62196-2 (Type 2)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>IEC 62196-3 (CCS)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>ISO 15118-2</span>
                    </li>
                  </ul>
                </div>

                {/* Sécurité et Qualité */}
                <div className="bg-purple-50 rounded-lg p-5">
                  <h4 className="font-bold text-purple-900 mb-3 text-center">🛡️ Sécurité & Qualité</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      <span className="font-semibold">ISO 9001:2015</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      <span>ISO 14001 (Environnement)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      <span>ISO 27001 (Cybersécurité)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      <span>RGPD (Données perso)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      <span>PCI DSS (Paiements)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg p-5 mt-6">
                <h4 className="font-bold text-orange-900 mb-3">📋 Procédures de Certification</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-semibold text-orange-900 mb-2">Avant Installation:</div>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Audit de conformité électrique</li>
                      <li>• Validation des plans par organisme agréé</li>
                      <li>• Certification des équipements</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold text-orange-900 mb-2">Après Installation:</div>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Tests de conformité sur site</li>
                      <li>• Certification finale par Bureau Veritas</li>
                      <li>• Attestation CEET de raccordement</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
