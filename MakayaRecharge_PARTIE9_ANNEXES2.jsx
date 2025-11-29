// ============================================================================
// PARTIE 9 - ANNEXES COMPLÉMENTAIRES (Installation, Formation, Exploitation)
// ============================================================================

            {/* Procédures d'Installation */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Wrench className="w-6 h-6 text-orange-600" />
                <h3 className="text-xl font-bold text-gray-800">Annexe E - Procédures d'Installation</h3>
              </div>

              <div className="space-y-4">
                {/* Étape 1 */}
                <div className="bg-blue-50 rounded-lg p-5 border-l-4 border-blue-500">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-blue-900 mb-2">Préparation du Site</h4>
                      <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                        <div>
                          <div className="font-semibold mb-1">Travaux de génie civil:</div>
                          <ul className="space-y-1 text-xs">
                            <li>• Terrassement: 2m × 2m × 0.5m par borne</li>
                            <li>• Fondation béton: 1.5m × 1.5m × 0.4m</li>
                            <li>• Massif d'ancrage: 4 tiges Ø16mm</li>
                            <li>• Tranchées câbles: 0.8m prof × 0.4m larg</li>
                          </ul>
                        </div>
                        <div>
                          <div className="font-semibold mb-1">Aménagements:</div>
                          <ul className="space-y-1 text-xs">
                            <li>• Marquage au sol: Places de 2.5m × 5m</li>
                            <li>• Signalétique verticale: Panneaux VE</li>
                            <li>• Éclairage: 300 lux minimum</li>
                            <li>• Drainage: Pente 2% vers évacuation</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Étape 2 */}
                <div className="bg-green-50 rounded-lg p-5 border-l-4 border-green-500">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-green-900 mb-2">Installation Électrique</h4>
                      <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                        <div>
                          <div className="font-semibold mb-1">Raccordement réseau:</div>
                          <ul className="space-y-1 text-xs">
                            <li>• Transformateur HTA/BT 630 kVA</li>
                            <li>• Tableau général BT (TGBT)</li>
                            <li>• Disjoncteur général 800A</li>
                            <li>• Câbles Cu 240mm² isolés 1kV</li>
                          </ul>
                        </div>
                        <div>
                          <div className="font-semibold mb-1">Protection:</div>
                          <ul className="space-y-1 text-xs">
                            <li>• Disjoncteur différentiel 30mA Type A</li>
                            <li>• Parafoudre Type 1+2</li>
                            <li>• Mise à la terre: Ω < 30Ω</li>
                            <li>• Coffrets de proximité IP44</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Étape 3 */}
                <div className="bg-purple-50 rounded-lg p-5 border-l-4 border-purple-500">
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-purple-900 mb-2">Montage et Raccordement Bornes</h4>
                      <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                        <div>
                          <div className="font-semibold mb-1">Installation mécanique:</div>
                          <ul className="space-y-1 text-xs">
                            <li>• Fixation sur massif béton (4 boulons M16)</li>
                            <li>• Niveau et verticalité (±2°)</li>
                            <li>• Passage des câbles par soubassement</li>
                            <li>• Étanchéité entrées câbles IP54/IP55</li>
                          </ul>
                        </div>
                        <div>
                          <div className="font-semibold mb-1">Raccordements:</div>
                          <ul className="space-y-1 text-xs">
                            <li>• Alimentation électrique + vérif polarité</li>
                            <li>• Réseau data 4G/Ethernet RJ45</li>
                            <li>• Tests isolement (>500MΩ)</li>
                            <li>• Serrage couples normalisés</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Étape 4 */}
                <div className="bg-orange-50 rounded-lg p-5 border-l-4 border-orange-500">
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                      4
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-orange-900 mb-2">Tests et Mise en Service</h4>
                      <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                        <div>
                          <div className="font-semibold mb-1">Tests électriques:</div>
                          <ul className="space-y-1 text-xs">
                            <li>• Continuité conducteurs protection</li>
                            <li>• Résistance isolement (>500MΩ)</li>
                            <li>• Déclenchement différentiel 30mA</li>
                            <li>• Charge test à 100% puissance (2h)</li>
                          </ul>
                        </div>
                        <div>
                          <div className="font-semibold mb-1">Tests fonctionnels:</div>
                          <ul className="space-y-1 text-xs">
                            <li>• Communication OCPP avec serveur</li>
                            <li>• Authentification RFID/App</li>
                            <li>• Cycle complet de recharge</li>
                            <li>• Arrêt d'urgence et sécurités</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 rounded-lg p-4 mt-6 border-l-4 border-red-500">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                  <div className="text-sm text-gray-700">
                    <strong>Délais d'installation:</strong> Prévoir 4 à 6 semaines par site (études + travaux + tests). 
                    Les travaux ne peuvent débuter qu'après obtention des autorisations CEET et permis de construire.
                  </div>
                </div>
              </div>
            </div>

            {/* Formation et Support */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-800">Annexe F - Programme de Formation</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Formation Technique */}
                <div className="bg-blue-50 rounded-lg p-5 border-2 border-blue-200">
                  <h4 className="font-bold text-blue-900 mb-4 text-lg flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    Formation Technique (3 jours)
                  </h4>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="font-semibold text-blue-800 mb-1 text-sm">Jour 1 - Fondamentaux</div>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>• Architecture système et composants</li>
                        <li>• Principes de la recharge AC/DC</li>
                        <li>• Normes et sécurité électrique</li>
                        <li>• Fonctionnement des bornes (théorie)</li>
                      </ul>
                    </div>

                    <div>
                      <div className="font-semibold text-blue-800 mb-1 text-sm">Jour 2 - Pratique</div>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>• Manipulation des bornes</li>
                        <li>• Procédures de maintenance préventive</li>
                        <li>• Diagnostic et résolution pannes simples</li>
                        <li>• Utilisation du logiciel de gestion</li>
                      </ul>
                    </div>

                    <div>
                      <div className="font-semibold text-blue-800 mb-1 text-sm">Jour 3 - Avancé</div>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>• Paramétrage et configuration avancée</li>
                        <li>• Gestion des incidents complexes</li>
                        <li>• Mise à jour firmware OTA</li>
                        <li>• Certification et évaluation finale</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-100 rounded p-3 mt-4 text-xs">
                    <strong>Public:</strong> Techniciens de maintenance  
                    <br/><strong>Participants:</strong> 4-6 personnes max  
                    <br/><strong>Certification:</strong> Valide 3 ans
                  </div>
                </div>

                {/* Formation Exploitation */}
                <div className="bg-green-50 rounded-lg p-5 border-2 border-green-200">
                  <h4 className="font-bold text-green-900 mb-4 text-lg flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    Formation Exploitation (2 jours)
                  </h4>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="font-semibold text-green-800 mb-1 text-sm">Jour 1 - Gestion Opérationnelle</div>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>• Plateforme de gestion centralisée</li>
                        <li>• Monitoring temps réel des bornes</li>
                        <li>• Gestion des utilisateurs et abonnements</li>
                        <li>• Tarification et facturation</li>
                      </ul>
                    </div>

                    <div>
                      <div className="font-semibold text-green-800 mb-1 text-sm">Jour 2 - Service Client</div>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>• Procédures support client (hotline)</li>
                        <li>• Gestion des réclamations</li>
                        <li>• Reporting et KPIs</li>
                        <li>• Cas pratiques et mise en situation</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-green-100 rounded p-3 mt-4 text-xs">
                    <strong>Public:</strong> Équipe exploitation et support  
                    <br/><strong>Participants:</strong> 6-10 personnes  
                    <br/><strong>Rafraîchissement:</strong> Annuel
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-5 mt-6 border-2 border-purple-200">
                <h4 className="font-bold text-purple-900 mb-3">📚 Support et Documentation</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="font-semibold text-purple-800 mb-2">Documents fournis:</div>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li>• Manuels techniques (FR)</li>
                      <li>• Guides d'utilisation</li>
                      <li>• Procédures maintenance</li>
                      <li>• Fiches de dépannage</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold text-purple-800 mb-2">Support continu:</div>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li>• Hotline technique 24/7</li>
                      <li>• Portail web FAQ</li>
                      <li>• Vidéos tutorielles</li>
                      <li>• Webinaires trimestriels</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold text-purple-800 mb-2">Assistance sur site:</div>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li>• 1 semaine post-installation</li>
                      <li>• Visite semestrielle</li>
                      <li>• Intervention < 24h si panne</li>
                      <li>• Audit annuel gratuit</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Plan d'Exploitation */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold text-gray-800">Annexe G - Plan d'Exploitation</h3>
              </div>

              <div className="space-y-6">
                {/* Organisation */}
                <div className="bg-green-50 rounded-lg p-5">
                  <h4 className="font-bold text-green-900 mb-4">👥 Organisation de l'Équipe</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="font-semibold text-green-800 mb-2">Équipe Technique (4 pers.)</div>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5"></div>
                          <div>
                            <div className="font-semibold">Chef Technique (1)</div>
                            <div className="text-xs">Supervision, planification, reporting</div>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5"></div>
                          <div>
                            <div className="font-semibold">Techniciens Maintenance (2)</div>
                            <div className="text-xs">Préventif, curatif, dépannage</div>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5"></div>
                          <div>
                            <div className="font-semibold">Agent Nettoyage (1 mi-temps)</div>
                            <div className="text-xs">Entretien sites, propreté</div>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <div className="font-semibold text-green-800 mb-2">Équipe Exploitation (3 pers.)</div>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></div>
                          <div>
                            <div className="font-semibold">Responsable Exploitation (1)</div>
                            <div className="text-xs">Gestion globale, stratégie, KPIs</div>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></div>
                          <div>
                            <div className="font-semibold">Chargés Support Client (2)</div>
                            <div className="text-xs">Hotline, réclamations, assistance</div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Planning type */}
                <div className="bg-blue-50 rounded-lg p-5">
                  <h4 className="font-bold text-blue-900 mb-4">📅 Planning Type Hebdomadaire</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-blue-100">
                          <th className="text-left p-2 font-semibold">Jour</th>
                          <th className="text-left p-2 font-semibold">Maintenance</th>
                          <th className="text-left p-2 font-semibold">Support</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">Lundi</td>
                          <td className="p-2 text-xs">Inspection visuelle toutes bornes</td>
                          <td className="p-2 text-xs">Traitement tickets J-1</td>
                        </tr>
                        <tr className="border-b bg-blue-50">
                          <td className="p-2 font-semibold">Mardi</td>
                          <td className="p-2 text-xs">Maintenance préventive (sites 1-3)</td>
                          <td className="p-2 text-xs">Appels sortants satisfaction</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">Mercredi</td>
                          <td className="p-2 text-xs">Maintenance préventive (sites 4-6)</td>
                          <td className="p-2 text-xs">Formation utilisateurs</td>
                        </tr>
                        <tr className="border-b bg-blue-50">
                          <td className="p-2 font-semibold">Jeudi</td>
                          <td className="p-2 text-xs">Tests fonctionnels, mises à jour</td>
                          <td className="p-2 text-xs">Traitement réclamations</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">Vendredi</td>
                          <td className="p-2 text-xs">Nettoyage complet + stock pièces</td>
                          <td className="p-2 text-xs">Reporting hebdomadaire</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Astreintes */}
                <div className="bg-orange-50 rounded-lg p-5">
                  <h4 className="font-bold text-orange-900 mb-3">🚨 Astreintes et Interventions d'Urgence</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-semibold text-orange-800 mb-2">Organisation astreintes:</div>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>• Permanence 24/7 (rotation équipe technique)</li>
                        <li>• Niveau 1: Hotline (diagnostic à distance)</li>
                        <li>• Niveau 2: Intervention sur site si nécessaire</li>
                        <li>• Délai intervention: < 4h ouvrées, < 8h nuit/WE</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-semibold text-orange-800 mb-2">Criticité interventions:</div>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>• <span className="text-red-600 font-bold">P1 Critique:</span> Site entier HS → < 2h</li>
                        <li>• <span className="text-orange-600 font-bold">P2 Majeur:</span> 1 borne DC HS → < 4h</li>
                        <li>• <span className="text-yellow-600 font-bold">P3 Mineur:</span> 1 borne AC HS → < 8h</li>
                        <li>• <span className="text-green-600 font-bold">P4 Info:</span> Maintenance → Planifié</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stock et Pièces de Rechange */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-purple-600" />
                <h3 className="text-xl font-bold text-gray-800">Annexe H - Stock et Pièces de Rechange</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Stock minimal */}
                <div className="bg-purple-50 rounded-lg p-5">
                  <h4 className="font-bold text-purple-900 mb-4">📦 Stock Minimal Requis</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="font-semibold text-purple-800 mb-2">Consommables:</div>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>• Câbles Type 2: 2 unités de rechange</li>
                        <li>• Câbles CCS: 1 unité de rechange</li>
                        <li>• Câbles CHAdeMO: 1 unité de rechange</li>
                        <li>• Cartes RFID: Stock 100 unités</li>
                      </ul>
                    </div>

                    <div>
                      <div className="font-semibold text-purple-800 mb-2">Pièces critiques:</div>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>• Contacteurs puissance: 2 de chaque type</li>
                        <li>• Modules communication 4G: 2 unités</li>
                        <li>• Écrans tactiles: 1 par type de borne</li>
                        <li>• Lecteurs RFID: 2 unités</li>
                      </ul>
                    </div>

                    <div>
                      <div className="font-semibold text-purple-800 mb-2">Électronique:</div>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>• Cartes électroniques: 1 par référence</li>
                        <li>• Fusibles assortiment complet</li>
                        <li>• Disjoncteurs 32A, 63A, 125A: 2 chacun</li>
                        <li>• Câbles de liaison: Assortiment 50m</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-purple-100 rounded p-3 mt-4 text-xs">
                    <strong>Valeur stock:</strong> ~8 500 000 FCFA  
                    <br/><strong>Renouvellement:</strong> Automatique si <30% stock
                  </div>
                </div>

                {/* Gestion stock */}
                <div className="bg-blue-50 rounded-lg p-5">
                  <h4 className="font-bold text-blue-900 mb-4">📊 Gestion du Stock</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="font-semibold text-blue-800 mb-2">Procédures:</div>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>• Inventaire mensuel complet</li>
                        <li>• Traçabilité entrées/sorties (logiciel)</li>
                        <li>• Contrôle qualité à réception</li>
                        <li>• Conditions stockage (T°, humidité)</li>
                      </ul>
                    </div>

                    <div>
                      <div className="font-semibold text-blue-800 mb-2">Fournisseurs:</div>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>• Fournisseur principal: Stock J+2</li>
                        <li>• Fournisseur backup: Stock J+5</li>
                        <li>• Import direct fabricant: Stock J+30</li>
                        <li>• Contrat cadre maintenance 5 ans</li>
                      </ul>
                    </div>

                    <div>
                      <div className="font-semibold text-blue-800 mb-2">Garanties:</div>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>• Bornes complètes: 2 ans pièces + MO</li>
                        <li>• Pièces de rechange: 1 an minimum</li>
                        <li>• Extension garantie: Option 5 ans (10%)</li>
                        <li>• Échange standard disponible < 48h</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-100 rounded p-3 mt-4 text-xs">
                    <strong>Logiciel de gestion:</strong> ERP intégré  
                    <br/><strong>Alertes:</strong> Auto si seuil critique atteint
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
