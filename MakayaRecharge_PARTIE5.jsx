// ============================================================================
// PARTIE 5 - PLANNING, SÉCURITÉ & NORMES
// ============================================================================

          {/* Planning de Déploiement */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-6 h-6 text-purple-600" />
              <h3 className="text-xl font-bold text-gray-800">4. Planning de Déploiement</h3>
            </div>
            <div className="space-y-3">
              {[
                { phase: 'Phase 1 - Études', duree: '2 mois', taches: 'Études de faisabilité, validation sites', color: 'blue', progress: 100 },
                { phase: 'Phase 2 - Travaux', duree: '3 mois', taches: 'Génie civil, raccordement électrique', color: 'yellow', progress: 80 },
                { phase: 'Phase 3 - Installation', duree: '2 mois', taches: 'Installation bornes, tests', color: 'orange', progress: 60 },
                { phase: 'Phase 4 - Mise en service', duree: '1 mois', taches: 'Formation, lancement commercial', color: 'green', progress: 30 }
              ].map((phase, idx) => (
                <div key={idx} className={`bg-${phase.color}-50 rounded-lg p-4`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-semibold text-gray-900">{phase.phase}</div>
                    <div className={`text-sm font-semibold text-${phase.color}-600`}>{phase.duree}</div>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">{phase.taches}</div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`bg-${phase.color}-500 h-2 rounded-full transition-all`}
                      style={{ width: `${phase.progress}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-500 mt-1 text-right">{phase.progress}% complété</div>
                </div>
              ))}
            </div>
            <div className="bg-purple-600 text-white rounded-lg p-4 mt-4 text-center">
              <div className="text-sm opacity-90">Durée Totale du Projet</div>
              <div className="text-3xl font-bold">8 mois</div>
            </div>
          </div>

          {/* Sécurité et Normes */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-bold text-gray-800">5. Sécurité & Normes</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {/* Normes Techniques */}
              <div className="bg-red-50 rounded-lg p-4">
                <h4 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Normes Techniques
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span><strong>IEC 61851:</strong> Systèmes de charge conductifs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span><strong>IEC 62196:</strong> Prises et connecteurs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span><strong>ISO 15118:</strong> Communication véhicule-borne</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span><strong>OCPP 1.6/2.0:</strong> Protocole de communication</span>
                  </li>
                </ul>
              </div>

              {/* Sécurité */}
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-semibold text-orange-900 mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Dispositifs de Sécurité
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span><strong>Protection électrique:</strong> Disjoncteurs différentiels 30mA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span><strong>Surveillance:</strong> Caméras 24/7 sur tous les sites</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span><strong>Éclairage:</strong> Zones bien éclairées pour sécurité</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span><strong>Maintenance:</strong> Contrôles périodiques obligatoires</span>
                  </li>
                </ul>
              </div>

              {/* Cybersécurité */}
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                  <Lock className="w-5 h-5" />
                  Cybersécurité
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span><strong>Chiffrement:</strong> Communications SSL/TLS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span><strong>Authentification:</strong> Multi-facteurs pour accès</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span><strong>Firewall:</strong> Protection réseau avancée</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span><strong>Audits:</strong> Tests de sécurité réguliers</span>
                  </li>
                </ul>
              </div>

              {/* Conformité */}
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Conformité Réglementaire
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span><strong>Marquage CE:</strong> Conformité européenne</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span><strong>RGPD:</strong> Protection données personnelles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span><strong>Autorisations:</strong> Permis de construire validés</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span><strong>Assurances:</strong> Couverture complète RC et dommages</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Parties Prenantes */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-indigo-600" />
              <h3 className="text-xl font-bold text-gray-800">6. Équipe & Parties Prenantes</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { 
                  role: 'Maître d\'Ouvrage', 
                  entite: 'Makaya', 
                  responsabilite: 'Financement, validation stratégique',
                  color: 'purple'
                },
                { 
                  role: 'Maître d\'Œuvre', 
                  entite: 'Bureau d\'études', 
                  responsabilite: 'Conception technique, suivi travaux',
                  color: 'blue'
                },
                { 
                  role: 'Installateur', 
                  entite: 'Entreprise certifiée', 
                  responsabilite: 'Installation, mise en service',
                  color: 'orange'
                },
                { 
                  role: 'Exploitant', 
                  entite: 'Makaya Operations', 
                  responsabilite: 'Gestion quotidienne, maintenance',
                  color: 'green'
                },
                { 
                  role: 'Fournisseur Bornes', 
                  entite: 'Fabricant certifié', 
                  responsabilite: 'Livraison équipements, garantie',
                  color: 'red'
                },
                { 
                  role: 'Fournisseur Énergie', 
                  entite: 'CEET Togo', 
                  responsabilite: 'Raccordement, fourniture électricité',
                  color: 'yellow'
                }
              ].map((partie, idx) => (
                <div key={idx} className={`bg-${partie.color}-50 rounded-lg p-4 border-2 border-${partie.color}-200`}>
                  <div className={`text-${partie.color}-900 font-bold mb-1`}>{partie.role}</div>
                  <div className={`text-${partie.color}-700 text-sm font-semibold mb-2`}>{partie.entite}</div>
                  <div className="text-xs text-gray-600">{partie.responsabilite}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Maintenance et Support */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Wrench className="w-6 h-6 text-gray-600" />
              <h3 className="text-xl font-bold text-gray-800">7. Maintenance & Support</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {/* Maintenance Préventive */}
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-3">🔧 Maintenance Préventive</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Mensuelle:</strong> Inspection visuelle, nettoyage, tests fonctionnels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Trimestrielle:</strong> Contrôle électrique, calibration, mise à jour logicielle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Annuelle:</strong> Révision complète, tests de sécurité, certification</span>
                  </li>
                </ul>
              </div>

              {/* Support Client */}
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-3">📞 Support Client</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Hotline 24/7:</strong> Support technique disponible en permanence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Application mobile:</strong> Signalement pannes, assistance en ligne</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Intervention rapide:</strong> Délai max 4h pour dépannage urgent</span>
                  </li>
                </ul>
              </div>

              {/* Monitoring */}
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-semibold text-purple-900 mb-3">📊 Monitoring & Supervision</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <Activity className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Temps réel:</strong> Surveillance état bornes, consommation, pannes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Activity className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Alertes:</strong> Notifications automatiques en cas d'anomalie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Activity className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Rapports:</strong> Statistiques hebdomadaires et mensuelles</span>
                  </li>
                </ul>
              </div>

              {/* Garanties */}
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-semibold text-orange-900 mb-3">✅ Garanties & SLA</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <Award className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Équipements:</strong> Garantie constructeur 2 ans pièces et main d'œuvre</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Disponibilité:</strong> SLA 95% minimum, compensation si non atteint</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Extension:</strong> Option garantie étendue 5 ans disponible</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Indicateurs de Performance */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-800">8. Indicateurs de Performance (KPI)</h3>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { label: 'Taux de disponibilité', valeur: '≥ 95%', icone: Activity, color: 'green' },
                { label: 'Temps moyen réparation', valeur: '≤ 4h', icone: Clock, color: 'blue' },
                { label: 'Satisfaction client', valeur: '≥ 4.5/5', icone: Star, color: 'yellow' },
                { label: 'Taux utilisation', valeur: '≥ 60%', icone: TrendingUp, color: 'purple' },
                { label: 'Énergie délivrée/mois', valeur: '≥ 10 MWh', icone: Zap, color: 'orange' },
                { label: 'Nombre sessions/jour', valeur: '≥ 50', icone: Users, color: 'indigo' },
                { label: 'Durée moyenne session', valeur: '30-45 min', icone: Clock, color: 'pink' },
                { label: 'Revenus mensuels', valeur: '≥ 10K $', icone: DollarSign, color: 'green' }
              ].map((kpi, idx) => (
                <div key={idx} className={`bg-${kpi.color}-50 rounded-lg p-4 border-2 border-${kpi.color}-200`}>
                  <kpi.icone className={`w-6 h-6 text-${kpi.color}-600 mb-2`} />
                  <div className="text-xs text-gray-600 mb-1">{kpi.label}</div>
                  <div className={`text-xl font-bold text-${kpi.color}-900`}>{kpi.valeur}</div>
                </div>
              ))}
            </div>
          </div>
