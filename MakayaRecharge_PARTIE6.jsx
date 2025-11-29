// ============================================================================
// PARTIE 6 - RISQUES, OPPORTUNITÉS & CONCLUSION
// ============================================================================

          {/* Analyse des Risques */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-bold text-gray-800">9. Analyse des Risques & Mitigation</h3>
            </div>
            <div className="space-y-3">
              {[
                { 
                  risque: 'Défaillance technique des bornes',
                  probabilite: 'Moyenne',
                  impact: 'Élevé',
                  mitigation: 'Contrat maintenance préventive, stock pièces détachées, double source fournisseur',
                  color: 'orange'
                },
                { 
                  risque: 'Coupures électriques fréquentes',
                  probabilite: 'Moyenne',
                  impact: 'Élevé',
                  mitigation: 'Système de batteries de secours, générateur diesel backup, priorité raccordement réseau',
                  color: 'red'
                },
                { 
                  risque: 'Vandalisme et vol d\'équipements',
                  probabilite: 'Faible',
                  impact: 'Moyen',
                  mitigation: 'Surveillance vidéo 24/7, éclairage, agents sécurité, assurance tous risques',
                  color: 'yellow'
                },
                { 
                  risque: 'Faible adoption par les utilisateurs',
                  probabilite: 'Faible',
                  impact: 'Élevé',
                  mitigation: 'Campagne marketing agressive, tarifs promotionnels, partenariats flottes',
                  color: 'orange'
                },
                { 
                  risque: 'Retards dans les autorisations',
                  probabilite: 'Moyenne',
                  impact: 'Moyen',
                  mitigation: 'Anticipation démarches, relations autorités, plan B sur sites alternatifs',
                  color: 'yellow'
                },
                { 
                  risque: 'Augmentation coûts énergie',
                  probabilite: 'Élevée',
                  impact: 'Moyen',
                  mitigation: 'Contrats long terme avec CEET, installation panneaux solaires, ajustement tarifs',
                  color: 'red'
                }
              ].map((risque, idx) => (
                <div key={idx} className={`bg-${risque.color}-50 rounded-lg p-4 border-l-4 border-${risque.color}-500`}>
                  <div className="flex items-start justify-between mb-2">
                    <div className="font-semibold text-gray-900 flex-1">{risque.risque}</div>
                    <div className="flex gap-2">
                      <span className={`text-xs px-2 py-1 bg-${risque.color}-200 text-${risque.color}-900 rounded`}>
                        P: {risque.probabilite}
                      </span>
                      <span className={`text-xs px-2 py-1 bg-${risque.color}-200 text-${risque.color}-900 rounded`}>
                        I: {risque.impact}
                      </span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-700">
                    <span className="font-semibold">Mitigation:</span> {risque.mitigation}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Opportunités et Évolutions */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-purple-600" />
              <h3 className="text-xl font-bold text-gray-800">10. Opportunités & Évolutions Futures</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {/* Phase 2 */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-5 border-2 border-purple-200">
                <h4 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  Phase 2 - Extension (2026)
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Déploiement de 20 bornes supplémentaires dans les villes secondaires</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Installation bornes ultra-rapides 350 kW sur autoroutes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Partenariats avec centres commerciaux et hôtels</span>
                  </li>
                </ul>
              </div>

              {/* Innovation */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-5 border-2 border-blue-200">
                <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  Innovations Technologiques
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Intégration panneaux solaires pour réduire coûts énergétiques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Systèmes de stockage par batteries pour lissage consommation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Intelligence artificielle pour optimisation tarifaire dynamique</span>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-5 border-2 border-green-200">
                <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                  <Gift className="w-5 h-5" />
                  Services Additionnels
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Programme de fidélité avec récompenses et réductions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Services conciergerie: lavage, entretien pendant recharge</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Espaces lounge avec wifi, café, snacks</span>
                  </li>
                </ul>
              </div>

              {/* Expansion */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-5 border-2 border-orange-200">
                <h4 className="font-bold text-orange-900 mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Expansion Régionale
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <Globe className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Extension vers pays voisins: Bénin, Ghana, Burkina Faso</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Globe className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Réseau régional de recharge transfrontalier</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Globe className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Partenariats avec autres opérateurs africains</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Impact Environnemental */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Leaf className="w-6 h-6 text-green-600" />
              <h3 className="text-xl font-bold text-gray-800">11. Impact Environnemental & Durabilité</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 rounded-lg p-5 text-center">
                <Leaf className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-green-900 mb-1">-450 t</div>
                <div className="text-sm text-gray-600">CO₂ évité par an</div>
                <div className="text-xs text-gray-500 mt-2">vs véhicules thermiques</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-5 text-center">
                <Droplet className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-blue-900 mb-1">100%</div>
                <div className="text-sm text-gray-600">Énergie propre</div>
                <div className="text-xs text-gray-500 mt-2">Électricité renouvelable</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-5 text-center">
                <Recycle className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-purple-900 mb-1">95%</div>
                <div className="text-sm text-gray-600">Recyclage équipements</div>
                <div className="text-xs text-gray-500 mt-2">En fin de vie</div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg p-6 mt-4 text-white">
              <h4 className="font-bold text-lg mb-2">🌍 Contribution aux Objectifs de Développement Durable (ODD)</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <div className="bg-white/20 rounded p-2 text-center">
                  <div className="font-bold">ODD 7</div>
                  <div className="text-xs">Énergie propre</div>
                </div>
                <div className="bg-white/20 rounded p-2 text-center">
                  <div className="font-bold">ODD 9</div>
                  <div className="text-xs">Innovation</div>
                </div>
                <div className="bg-white/20 rounded p-2 text-center">
                  <div className="font-bold">ODD 11</div>
                  <div className="text-xs">Villes durables</div>
                </div>
                <div className="bg-white/20 rounded p-2 text-center">
                  <div className="font-bold">ODD 13</div>
                  <div className="text-xs">Climat</div>
                </div>
              </div>
            </div>
          </div>

          {/* Documentation et Ressources */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-800">12. Documentation & Ressources</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { titre: 'Manuel Technique', description: 'Spécifications détaillées des bornes et installation', icone: FileText, color: 'blue' },
                { titre: 'Guide Utilisateur', description: 'Mode d\'emploi pour les conducteurs de VE', icone: BookOpen, color: 'green' },
                { titre: 'Procédures Maintenance', description: 'Instructions complètes pour entretien et dépannage', icone: Wrench, color: 'orange' },
                { titre: 'Plans et Schémas', description: 'Plans de site, schémas électriques, architecture réseau', icone: MapPin, color: 'purple' },
                { titre: 'Contrats et Accords', description: 'Contrats fournisseurs, partenariats, assurances', icone: FileText, color: 'red' },
                { titre: 'Rapports de Tests', description: 'Résultats tests de conformité et certifications', icone: CheckCircle, color: 'green' }
              ].map((doc, idx) => (
                <div key={idx} className={`bg-${doc.color}-50 rounded-lg p-4 border-l-4 border-${doc.color}-500 hover:shadow-md transition-shadow cursor-pointer`}>
                  <div className="flex items-start gap-3">
                    <doc.icone className={`w-6 h-6 text-${doc.color}-600 flex-shrink-0 mt-1`} />
                    <div>
                      <h4 className={`font-semibold text-${doc.color}-900 mb-1`}>{doc.titre}</h4>
                      <p className="text-sm text-gray-600">{doc.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 rounded-lg p-4 mt-4 border-2 border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <Database className="w-5 h-5 text-blue-600" />
                <h4 className="font-semibold text-blue-900">Repository Documentaire</h4>
              </div>
              <p className="text-sm text-gray-700">
                Tous les documents sont disponibles sur le portail documentaire Makaya avec accès sécurisé et gestion des versions.
              </p>
            </div>
          </div>

          {/* Contacts et Support */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Phone className="w-6 h-6 text-green-600" />
              <h3 className="text-xl font-bold text-gray-800">13. Contacts & Support</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <Mail className="w-8 h-8 text-blue-600 mb-3" />
                <h4 className="font-semibold text-blue-900 mb-2">Contact Général</h4>
                <div className="text-sm space-y-1">
                  <div className="text-gray-700">📧 contact@makaya.tg</div>
                  <div className="text-gray-700">📞 +228 XX XX XX XX</div>
                  <div className="text-gray-700">🏢 Lomé, Togo</div>
                </div>
              </div>

              <div className="bg-orange-50 rounded-lg p-4">
                <Headphones className="w-8 h-8 text-orange-600 mb-3" />
                <h4 className="font-semibold text-orange-900 mb-2">Support Technique</h4>
                <div className="text-sm space-y-1">
                  <div className="text-gray-700">📧 support@makaya.tg</div>
                  <div className="text-gray-700">📞 Hotline 24/7</div>
                  <div className="text-gray-700">💬 Chat en ligne</div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-4">
                <Users className="w-8 h-8 text-green-600 mb-3" />
                <h4 className="font-semibold text-green-900 mb-2">Commercial</h4>
                <div className="text-sm space-y-1">
                  <div className="text-gray-700">📧 commercial@makaya.tg</div>
                  <div className="text-gray-700">📞 +228 XX XX XX XX</div>
                  <div className="text-gray-700">🤝 Partenariats</div>
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion et Approbation */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                <Award className="w-12 h-12" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">Conclusion</h3>
                <p className="text-blue-100 text-lg">Cahier de Charge Infrastructure Makaya Recharge</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
              <p className="text-lg mb-4">
                Ce cahier de charge définit l'ensemble des exigences techniques, économiques et opérationnelles 
                pour le déploiement de l'infrastructure de recharge Makaya au Togo.
              </p>
              <p className="text-lg mb-4">
                Le projet prévoit l'installation de <strong>10 bornes de recharge</strong> (5 AC + 3 DC60 + 2 DC120) 
                pour un investissement total de <strong>116 000 USD</strong>, avec un retour sur investissement 
                attendu en <strong>moins de 12 mois</strong> et une rentabilité de <strong>48%</strong>.
              </p>
              <p className="text-lg">
                L'infrastructure répond aux normes internationales les plus strictes et s'inscrit dans une 
                démarche de développement durable et de transition énergétique.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-sm opacity-90 mb-1">Date d'élaboration</div>
                <div className="font-bold text-lg">Novembre 2025</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-sm opacity-90 mb-1">Version</div>
                <div className="font-bold text-lg">1.0</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-sm opacity-90 mb-1">Validité</div>
                <div className="font-bold text-lg">2025-2026</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-sm opacity-90 mb-1">Statut</div>
                <div className="font-bold text-lg flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Approuvé
                </div>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex gap-4 justify-center">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 font-semibold">
              <Download className="w-5 h-5" />
              Télécharger PDF
            </button>
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 font-semibold">
              <Share2 className="w-5 h-5" />
              Partager
            </button>
            <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2 font-semibold">
              <FileText className="w-5 h-5" />
              Imprimer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MakayaRecharge;
