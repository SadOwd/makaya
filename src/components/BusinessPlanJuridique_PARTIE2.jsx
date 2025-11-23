// 🔋 MAKAYA - BUSINESS PLAN JURIDIQUE - PARTIE 2/3
// À copier-coller APRÈS la partie 1 (suite de renderPropositions)

  // ========== RENDER RISQUES ==========
  
  const renderRisques = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">Matrice Risques & Mitigation</h3>

      <div className="space-y-4">
        {risques.map((risque, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <AlertTriangle className={`h-6 w-6 ${
                    risque.impact === 'Critique' ? 'text-red-600' : 'text-orange-600'
                  }`} />
                  <h4 className="text-lg font-bold text-slate-900">{risque.nom}</h4>
                </div>
                <div className="flex gap-4 text-sm">
                  <div>
                    <span className="text-slate-600">Probabilité : </span>
                    <span className="font-semibold">{risque.prob}%</span>
                  </div>
                  <div>
                    <span className="text-slate-600">Impact : </span>
                    <span className={`font-semibold ${
                      risque.impact === 'Critique' ? 'text-red-600' : 'text-orange-600'
                    }`}>{risque.impact}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600">{risque.cout}M</div>
                <div className="text-xs text-slate-600">Coût mitigation</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-5 w-5 text-blue-600" />
                <span className="font-semibold text-slate-900">Stratégie de Mitigation</span>
              </div>
              <p className="text-sm text-slate-700">{risque.mitigation}</p>
            </div>

            <div className="mt-4">
              <div className="text-xs text-slate-600 mb-2">Niveau de couverture : {risque.couverture}%</div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full"
                  style={{ width: `${risque.couverture}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-500 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="h-8 w-8 text-green-600" />
          <h4 className="text-xl font-bold text-slate-900">Couverture Globale : &gt;85%</h4>
        </div>
        <p className="text-slate-700">
          Tous les risques majeurs sont mitigés avec des stratégies éprouvées et des budgets alloués. 
          La combinaison assurances + lobbying + sur-conformité offre une protection multicouche.
        </p>
      </div>
    </div>
  );

  // ========== RENDER BUDGET ==========
  
  const renderBudget = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">Budget Juridique & ROI</h3>

      {/* Budget Triennal */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 text-white">
          <h4 className="text-xl font-bold">Budget Triennal 2025-2027</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Année</th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-slate-700">Conseil</th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-slate-700">Audits</th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-slate-700">Lobbying</th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-slate-700">Assurances</th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-slate-700 bg-blue-50">TOTAL</th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-slate-700 bg-green-50">% CA</th>
              </tr>
            </thead>
            <tbody>
              {budgetJuridique.map((budget, i) => (
                <tr key={i} className="border-t border-slate-200 hover:bg-slate-50">
                  <td className="px-4 py-3 font-bold text-slate-900">{budget.annee}</td>
                  <td className="px-4 py-3 text-right text-slate-600">{budget.conseil}M</td>
                  <td className="px-4 py-3 text-right text-slate-600">{budget.audits}M</td>
                  <td className="px-4 py-3 text-right text-slate-600">{budget.lobbying}M</td>
                  <td className="px-4 py-3 text-right text-slate-600">{budget.assurances}M</td>
                  <td className="px-4 py-3 text-right font-bold text-blue-600 bg-blue-50">{budget.total}M</td>
                  <td className="px-4 py-3 text-right font-semibold text-green-600 bg-green-50">{budget.pctCA}%</td>
                </tr>
              ))}
              <tr className="border-t-2 border-slate-300 bg-slate-100 font-bold">
                <td className="px-4 py-3">TOTAL 3 ANS</td>
                <td className="px-4 py-3 text-right">39M</td>
                <td className="px-4 py-3 text-right">63M</td>
                <td className="px-4 py-3 text-right">45M</td>
                <td className="px-4 py-3 text-right">27M</td>
                <td className="px-4 py-3 text-right text-blue-700 bg-blue-100">219M</td>
                <td className="px-4 py-3 text-right text-green-700 bg-green-100">0.68%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ROI */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-sm opacity-90 mb-1">ROI Juridique Global</div>
              <div className="text-5xl font-bold">157%</div>
            </div>
            <TrendingUp className="h-16 w-16 opacity-50" />
          </div>
          <div className="text-sm opacity-90">
            Chaque FCFA investi génère <strong>2.57 FCFA</strong> de valeur
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-sm opacity-90 mb-1">Budget Moyen Annuel</div>
              <div className="text-5xl font-bold">73M</div>
            </div>
            <BarChart className="h-16 w-16 opacity-50" />
          </div>
          <div className="text-sm opacity-90">
            Représente <strong>0.68%</strong> du chiffre d'affaires moyen
          </div>
        </div>
      </div>

      {/* Répartition Budget */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h4 className="text-lg font-bold text-slate-900 mb-4">Répartition du Budget Total (219M FCFA)</h4>
        <div className="space-y-3">
          {[
            { label: "Audits & Certifications", value: 63, color: "blue" },
            { label: "Lobbying & Influence", value: 45, color: "purple" },
            { label: "Conseil Juridique", value: 39, color: "indigo" },
            { label: "Assurances", value: 27, color: "green" },
            { label: "Compliance & DPO", value: 26, color: "orange" },
            { label: "Contentieux", value: 15, color: "red" },
            { label: "Propriété Intellectuelle", value: 4, color: "pink" }
          ].map((item, i) => {
            const pct = ((item.value / 219) * 100).toFixed(1);
            return (
              <div key={i}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-slate-700">{item.label}</span>
                  <span className="text-sm font-bold text-slate-900">{item.value}M ({pct}%)</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full bg-${item.color}-500`}
                    style={{ width: `${pct}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  // ========== RENDER PROTECTION ==========
  
  const renderProtection = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">Protection Investisseurs</h3>

      {/* 3 Options de Sortie */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <Building className="h-6 w-6 text-green-600" />
          </div>
          <h4 className="text-lg font-bold text-slate-900 mb-2">Option 1 : Acquisition</h4>
          <p className="text-sm text-slate-600 mb-4">
            Rachat par acteur stratégique (Total, Bolloré, Engie)
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-600">Valorisation 2028</span>
              <span className="font-bold">2.5Mds FCFA</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Multiple</span>
              <span className="font-bold text-green-600">2.87×</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">TRI</span>
              <span className="font-bold text-green-600">42%/an</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <TrendingUp className="h-6 w-6 text-blue-600" />
          </div>
          <h4 className="text-lg font-bold text-slate-900 mb-2">Option 2 : IPO BRVM</h4>
          <p className="text-sm text-slate-600 mb-4">
            Introduction en bourse BRVM Abidjan
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-600">Capitalisation</span>
              <span className="font-bold">2.8Mds FCFA</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Flottant</span>
              <span className="font-bold text-blue-600">25%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Timeline</span>
              <span className="font-bold text-blue-600">Q4 2028</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <Users className="h-6 w-6 text-purple-600" />
          </div>
          <h4 className="text-lg font-bold text-slate-900 mb-2">Option 3 : MBO</h4>
          <p className="text-sm text-slate-600 mb-4">
            Rachat par le management (LBO)
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-600">Financement LBO</span>
              <span className="font-bold">80% emprunt</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Remboursement</span>
              <span className="font-bold text-purple-600">7 ans</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Cash-flow annuel</span>
              <span className="font-bold text-purple-600">180M</span>
            </div>
          </div>
        </div>
      </div>

      {/* Clauses de Protection */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Shield className="h-6 w-6 text-blue-600" />
          Clauses de Protection
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-slate-200 bg-slate-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <h5 className="font-bold text-slate-900">Tag-Along</h5>
            </div>
            <p className="text-sm text-slate-600">
              Droit de sortie conjointe : les minoritaires peuvent vendre aux mêmes conditions que les majoritaires
            </p>
          </div>

          <div className="border border-slate-200 bg-slate-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <h5 className="font-bold text-slate-900">Drag-Along</h5>
            </div>
            <p className="text-sm text-slate-600">
              Si offre acceptée par 75% du capital, les minoritaires sont obligés de vendre (évite blocage)
            </p>
          </div>

          <div className="border border-slate-200 bg-slate-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <h5 className="font-bold text-slate-900">Liquidité 5 ans</h5>
            </div>
            <p className="text-sm text-slate-600">
              Si aucune liquidité sous 5 ans, rachat des actions à valeur d'expertise indépendante
            </p>
          </div>

          <div className="border border-slate-200 bg-slate-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <h5 className="font-bold text-slate-900">Anti-Dilution</h5>
            </div>
            <p className="text-sm text-slate-600">
              Protection contre la dilution en cas d'augmentation de capital à valorisation inférieure
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-500 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-3">
          <Lock className="h-8 w-8 text-blue-600" />
          <h4 className="text-xl font-bold text-slate-900">Protection Multicouche</h4>
        </div>
        <p className="text-slate-700 mb-4">
          Les investisseurs bénéficient d'une protection juridique complète à 4 niveaux : contractuelle (clauses), 
          financière (valorisation garantie), temporelle (liquidité 5 ans), et stratégique (3 options de sortie).
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white rounded-lg p-3">
            <div className="text-2xl font-bold text-blue-600">4</div>
            <div className="text-xs text-slate-600">Clauses Protection</div>
          </div>
          <div className="bg-white rounded-lg p-3">
            <div className="text-2xl font-bold text-green-600">3</div>
            <div className="text-xs text-slate-600">Options Sortie</div>
          </div>
          <div className="bg-white rounded-lg p-3">
            <div className="text-2xl font-bold text-purple-600">5</div>
            <div className="text-xs text-slate-600">Ans Liquidité</div>
          </div>
          <div className="bg-white rounded-lg p-3">
            <div className="text-2xl font-bold text-orange-600">2.5Mds</div>
            <div className="text-xs text-slate-600">Valorisation 2028</div>
          </div>
        </div>
      </div>
    </div>
  );

  // ========== RENDER CERTIFICATIONS ==========
  
  const renderCertifications = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">Certifications & Conformité</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, i) => (
          <div 
            key={i} 
            className={`bg-white rounded-xl shadow-lg p-6 border-l-4 ${
              cert.statut === 'actif' ? 'border-green-500' : 'border-yellow-500'
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  {cert.statut === 'actif' ? (
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  ) : (
                    <Clock className="h-6 w-6 text-yellow-600" />
                  )}
                  <h4 className="text-lg font-bold text-slate-900">{cert.nom}</h4>
                </div>
                <p className="text-sm text-slate-600 mb-2">{cert.description}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                cert.statut === 'actif' 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-yellow-100 text-yellow-700'
              }`}>
                {cert.statut === 'actif' ? 'ACTIF' : 'PRÉVU'}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-xs text-slate-600 mb-1">Date cible</div>
                <div className="font-semibold text-slate-900">{cert.date}</div>
              </div>
              <div>
                <div className="text-xs text-slate-600 mb-1">Coût</div>
                <div className="font-semibold text-slate-900">{cert.cout}M FCFA</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 border border-blue-200">
              <div className="text-xs text-slate-600 mb-1">Avantage</div>
              <div className="font-semibold text-blue-700">{cert.avantage}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-500 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <Award className="h-8 w-8 text-green-600" />
          <h4 className="text-xl font-bold text-slate-900">Calendrier Certifications</h4>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <div className="w-24 text-sm font-semibold text-slate-700">Q3 2025</div>
            <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500" style={{width: '33%'}}></div>
            </div>
            <div className="text-sm text-slate-600">ISO 9001</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-24 text-sm font-semibold text-slate-700">Q2 2026</div>
            <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-green-500" style={{width: '66%'}}></div>
            </div>
            <div className="text-sm text-slate-600">ISO 14001</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-24 text-sm font-semibold text-slate-700">Q4 2026</div>
            <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-purple-500" style={{width: '100%'}}></div>
            </div>
            <div className="text-sm text-slate-600">ISO 45001</div>
          </div>
        </div>
      </div>
    </div>
  );

  // ========== RENDER DOCUMENTS ==========
  
  const renderDocuments = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">Documentation & Due Diligence</h3>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-500 rounded-xl p-6 mb-6">
        <div className="flex items-center gap-3 mb-3">
          <BookOpen className="h-8 w-8 text-blue-600" />
          <h4 className="text-xl font-bold text-slate-900">Documents Disponibles</h4>
        </div>
        <p className="text-slate-700">
          Data room virtuelle complète avec <strong>124 documents</strong> organisés en 7 dossiers pour due diligence investisseurs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { titre: "Section Juridique Complète", pages: "35 pages", icon: FileText, color: "blue" },
          { titre: "Guide d'Intégration", pages: "8 pages", icon: BookOpen, color: "green" },
          { titre: "Synthèse 1 Page", pages: "1 page", icon: FileCheck, color: "purple" },
          { titre: "Conformité Réglementaire", docs: "45 docs", icon: Shield, color: "orange" },
          { titre: "Propriété Intellectuelle", docs: "12 docs", icon: Lock, color: "pink" },
          { titre: "Contrats Structurants", docs: "28 docs", icon: FileSignature, color: "indigo" },
          { titre: "Assurances", docs: "8 docs", icon: Shield, color: "red" },
          { titre: "Gouvernance & Compliance", docs: "15 docs", icon: CheckCircle, color: "teal" }
        ].map((doc, i) => (
          <div key={i} className={`bg-white rounded-lg shadow p-4 border-l-4 border-${doc.color}-500`}>
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-10 h-10 bg-${doc.color}-100 rounded-lg flex items-center justify-center`}>
                <doc.icon className={`h-5 w-5 text-${doc.color}-600`} />
              </div>
              <div className="flex-1">
                <h5 className="font-bold text-slate-900 text-sm">{doc.titre}</h5>
                <p className="text-xs text-slate-600">{doc.pages || doc.docs}</p>
              </div>
            </div>
            <button className="w-full mt-2 px-3 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm font-medium text-slate-700 flex items-center justify-center gap-2 transition">
              <Download className="h-4 w-4" />
              Télécharger
            </button>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h4 className="text-lg font-bold text-slate-900 mb-4">Accès Rapide</h4>
        <div className="space-y-2">
          {[
            { nom: "SECTION_JURIDIQUE_COMPLETE.md", taille: "~25,000 mots" },
            { nom: "GUIDE_INTEGRATION_JURIDIQUE.md", taille: "~4,000 mots" },
            { nom: "SYNTHESE_JURIDIQUE_1PAGE.md", taille: "~1,000 mots" },
            { nom: "RECAPITULATIF_PROJET_JURIDIQUE.md", taille: "~3,000 mots" }
          ].map((file, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-blue-600" />
                <div>
                  <div className="font-medium text-slate-900 text-sm">{file.nom}</div>
                  <div className="text-xs text-slate-600">{file.taille}</div>
                </div>
              </div>
              <button className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded text-xs font-medium flex items-center gap-1">
                <ExternalLink className="h-3 w-3" />
                Ouvrir
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
