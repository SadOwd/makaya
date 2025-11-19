import React, { useState } from 'react';
import { AlertTriangle, Shield, TrendingDown, CheckCircle2, XCircle, MinusCircle } from 'lucide-react';

const Risks = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRisk, setSelectedRisk] = useState(null);

  const riskCategories = {
    financial: { name: 'Financier', color: 'red' },
    operational: { name: 'Opérationnel', color: 'orange' },
    market: { name: 'Marché', color: 'blue' },
    regulatory: { name: 'Réglementaire', color: 'purple' },
    strategic: { name: 'Stratégique', color: 'green' }
  };

  const risksData = [
    {
      id: 1,
      category: 'financial',
      name: 'Valeur résiduelle véhicules',
      description: 'Hypothèse 55% valeur résiduelle à 48 mois pourrait ne pas se réaliser si marché VE occasion s\'effondre',
      impact: 'Élevé',
      impactScore: 9,
      probability: 'Moyenne',
      probabilityScore: 5,
      financialImpact: '-6.5 Md EBITDA si 40% vs 55%',
      status: 'mitigated',
      mitigations: [
        {
          action: 'Rachat prioritaire client',
          detail: 'Proposition 90% valeur marché + bonus -1M nouveau contrat',
          effectiveness: 'Élevée',
          coverage: '35% volumes'
        },
        {
          action: 'Marché occasion local',
          detail: 'Showroom certifié + garantie 12 mois, prix 65% neuf',
          effectiveness: 'Élevée',
          coverage: '40% volumes'
        },
        {
          action: 'Export sous-région',
          detail: 'Partenariats Nigeria/Ghana/Bénin, prix 75% local',
          effectiveness: 'Moyenne',
          coverage: '15% volumes'
        }
      ],
      monitoring: 'Trimestriel - Prix occasion marchés comparables',
      residualRisk: 'Faible'
    },
    {
      id: 2,
      category: 'regulatory',
      name: 'Délais agrément AT2ER',
      description: '3 agréments requis (production, distribution, trading). Délai procédure 6-12 mois avec bureaucratie.',
      impact: 'Moyen',
      impactScore: 6,
      probability: 'Moyenne',
      probabilityScore: 6,
      financialImpact: 'Retard lancement 3-6 mois + perte avantages fiscaux',
      status: 'in-progress',
      mitigations: [
        {
          action: 'Dossiers déposés Q4 2025',
          detail: 'Anticipation maximale avec documentation complète',
          effectiveness: 'Élevée',
          coverage: '100%'
        },
        {
          action: 'Cabinet conseil spécialisé',
          detail: 'Avocat expert AT2ER mandaté pour suivi dossiers',
          effectiveness: 'Élevée',
          coverage: '100%'
        },
        {
          action: 'Relations institutionnelles',
          detail: 'Advisor ex-Ministre facilite interactions',
          effectiveness: 'Moyenne',
          coverage: '100%'
        }
      ],
      monitoring: 'Hebdomadaire - Statut dossiers AT2ER',
      residualRisk: 'Faible'
    },
    {
      id: 3,
      category: 'market',
      name: 'Concurrence multinationale',
      description: 'Bolloré, Uber ou acteur chinois entre marché Togo avec capital illimité → guerre prix',
      impact: 'Moyen',
      impactScore: 7,
      probability: 'Faible',
      probabilityScore: 3,
      financialImpact: 'Pression marges -15% + ralentissement croissance',
      status: 'monitored',
      mitigations: [
        {
          action: 'Barrières réglementaires',
          detail: 'Non-éligibilité marchés publics (capital étranger) + IS 27% vs 15%',
          effectiveness: 'Élevée',
          coverage: '35% CA'
        },
        {
          action: 'Infrastructure (3-5 ans)',
          detail: '500 bornes réseau + accords foncier exclusivité 15 ans',
          effectiveness: 'Élevée',
          coverage: '100%'
        },
        {
          action: 'Brand ancrage local',
          detail: '"Champion togolais" vs "néocolonialisme" perception',
          effectiveness: 'Moyenne',
          coverage: '100%'
        },
        {
          action: 'Lock-in clients',
          detail: 'Écosystème intégré → switching cost élevé',
          effectiveness: 'Élevée',
          coverage: '72% CA'
        }
      ],
      monitoring: 'Mensuel - Veille marché entrants',
      residualRisk: 'Faible'
    },
    {
      id: 4,
      category: 'financial',
      name: 'Défaillances paiements clients',
      description: 'Hypothèse 2% impayés optimiste pour Afrique. Si récession → 8% = -2.4 Md CA 2030',
      impact: 'Moyen',
      impactScore: 6,
      probability: 'Faible',
      probabilityScore: 4,
      financialImpact: '-12.8% EBITDA si impayés ×4',
      status: 'mitigated',
      mitigations: [
        {
          action: 'Scoring IA clients',
          detail: '12 critères financiers → rejet 18% dossiers',
          effectiveness: 'Élevée',
          coverage: '100%'
        },
        {
          action: 'Garanties robustes',
          detail: 'Dépôt 3 mois + caution dirigeant + prélèvement auto',
          effectiveness: 'Élevée',
          coverage: '100%'
        },
        {
          action: 'Reprise véhicule immédiate',
          detail: 'GPS tracking + blocage démarrage si impayé >15j',
          effectiveness: 'Très élevée',
          coverage: '100%'
        }
      ],
      monitoring: 'Mensuel - Taux impayés + scoring clients',
      residualRisk: 'Faible'
    },
    {
      id: 5,
      category: 'operational',
      name: 'Délestages CEET',
      description: '6h/jour moyenne coupures électriques → impact recharge véhicules + satisfaction clients',
      impact: 'Moyen',
      impactScore: 5,
      probability: 'Élevée',
      probabilityScore: 7,
      financialImpact: 'Insatisfaction clients + coûts groupes secours',
      status: 'mitigated',
      mitigations: [
        {
          action: 'Bornes avec batteries tampons',
          detail: 'Stockage 200 kWh par borne → autonomie 8h',
          effectiveness: 'Élevée',
          coverage: '50 bornes propres'
        },
        {
          action: 'Recharge intelligente',
          detail: 'Planification pendant heures disponibles (app)',
          effectiveness: 'Moyenne',
          coverage: '100%'
        },
        {
          action: 'Partenariat CEET',
          detail: 'Priorité alimentation sites Makaya (négocié)',
          effectiveness: 'Moyenne',
          coverage: '50 bornes'
        }
      ],
      monitoring: 'Quotidien - Disponibilité réseau CEET',
      residualRisk: 'Moyen'
    },
    {
      id: 6,
      category: 'strategic',
      name: 'Obsolescence tech batteries',
      description: 'Batteries solid-state arrivent 2028 → VE actuels obsolètes, valeur résiduelle -60%',
      impact: 'Élevé',
      impactScore: 8,
      probability: 'Très faible',
      probabilityScore: 2,
      financialImpact: 'Catastrophique si réalisé (-18 Md EBITDA cumulé)',
      status: 'monitored',
      mitigations: [
        {
          action: 'Veille technologique active',
          detail: 'CTO + BYD advisor monitoring innovations',
          effectiveness: 'Moyenne',
          coverage: '100%'
        },
        {
          action: 'Clauses contractuelles BYD',
          detail: 'Upgrade batteries gratuit si breakthrough + rachat 60%',
          effectiveness: 'Élevée',
          coverage: '80% parc'
        },
        {
          action: 'Diversification marques',
          detail: 'GAC, Lexus, Tesla ajoutés 2027+ (pas mono-BYD)',
          effectiveness: 'Moyenne',
          coverage: '100%'
        }
      ],
      monitoring: 'Trimestriel - Roadmaps constructeurs',
      residualRisk: 'Très faible'
    },
    {
      id: 7,
      category: 'strategic',
      name: 'Instabilité politique Togo',
      description: 'Coup d\'État, émeutes, dévaluation FCFA → impossibilité opérer',
      impact: 'Élevé',
      impactScore: 10,
      probability: 'Très faible',
      probabilityScore: 2,
      financialImpact: 'Catastrophique (perte 80% actifs)',
      status: 'mitigated',
      mitigations: [
        {
          action: 'Assurance risque politique (MIGA)',
          detail: 'Couvre 90% pertes expropriation/guerre, prime 1.2%',
          effectiveness: 'Très élevée',
          coverage: '90%'
        },
        {
          action: 'Diversification géographique rapide',
          detail: 'Bénin 2031, Ghana 2032 → 3 pays = risk spread',
          effectiveness: 'Élevée',
          coverage: 'Post-2031'
        },
        {
          action: 'Liquidité actifs',
          detail: 'VE revendables sous-région en <72h si crise',
          effectiveness: 'Moyenne',
          coverage: '100%'
        }
      ],
      monitoring: 'Mensuel - Indicateurs stabilité',
      residualRisk: 'Très faible'
    }
  ];

  const impactLevels = {
    'Très faible': { color: 'green', bg: 'bg-green-100', text: 'text-green-700' },
    'Faible': { color: 'green', bg: 'bg-green-100', text: 'text-green-700' },
    'Moyen': { color: 'orange', bg: 'bg-orange-100', text: 'text-orange-700' },
    'Élevé': { color: 'red', bg: 'bg-red-100', text: 'text-red-700' },
    'Très élevé': { color: 'red', bg: 'bg-red-100', text: 'text-red-700' }
  };

  const statusConfig = {
    'mitigated': { label: 'Mitigé', icon: CheckCircle2, color: 'green' },
    'in-progress': { label: 'En cours', icon: MinusCircle, color: 'blue' },
    'monitored': { label: 'Surveillé', icon: AlertTriangle, color: 'orange' },
    'critical': { label: 'Critique', icon: XCircle, color: 'red' }
  };

  const getRiskScore = (risk) => risk.impactScore * risk.probabilityScore;

  const filteredRisks = risksData.filter(risk => selectedCategory === 'all' || risk.category === selectedCategory);

  const RiskMatrix = () => {
    const matrix = Array(5).fill(null).map(() => Array(5).fill([]));
    
    risksData.forEach(risk => {
      const x = risk.probabilityScore - 1;
      const y = 5 - risk.impactScore;
      if (x >= 0 && x < 5 && y >= 0 && y < 5) {
        matrix[y][x] = [...matrix[y][x], risk];
      }
    });

    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Matrice des Risques</h3>
        <div className="grid grid-cols-6 gap-1">
          <div></div>
          {[1,2,3,4,5].map(i => (
            <div key={i} className="text-center text-xs font-medium text-gray-600 pb-2">P{i}</div>
          ))}
          {matrix.map((row, y) => (
            <React.Fragment key={y}>
              <div className="flex items-center justify-end pr-2 text-xs font-medium text-gray-600">I{5-y}</div>
              {row.map((cell, x) => {
                const severity = (x+1) * (5-y);
                const bgColor = severity >= 16 ? 'bg-red-100' : severity >= 9 ? 'bg-orange-100' : 'bg-green-100';
                return (
                  <div key={x} className={`${bgColor} p-2 rounded min-h-[60px] text-xs`}>
                    {cell.map(risk => (
                      <div 
                        key={risk.id}
                        onClick={() => setSelectedRisk(risk)}
                        className="cursor-pointer mb-1 px-1 py-0.5 bg-white rounded shadow-sm hover:shadow-md transition-shadow"
                      >
                        {risk.id}
                      </div>
                    ))}
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
        <div className="flex gap-4 mt-4 text-xs text-gray-600">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-green-100 rounded"></div>
            <span>Faible (1-8)</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-orange-100 rounded"></div>
            <span>Moyen (9-15)</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-red-100 rounded"></div>
            <span>Élevé (16-25)</span>
          </div>
        </div>
      </div>
    );
  };

  const RiskCard = ({ risk }) => {
    const category = riskCategories[risk.category];
    const status = statusConfig[risk.status];
    const riskScore = getRiskScore(risk);
    const [expanded, setExpanded] = useState(false);

    return (
      <div className="bg-white rounded-lg shadow-sm border-2 border-gray-200 hover:border-gray-300 transition-all">
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{risk.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full bg-${category.color}-100 text-${category.color}-700`}>
                    {category.name}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2">{risk.description}</p>
            </div>
            <div className="flex flex-col items-end gap-2 ml-4">
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                status.color === 'green' ? 'bg-green-100 text-green-700' : 
                status.color === 'blue' ? 'bg-blue-100 text-blue-700' : 
                status.color === 'orange' ? 'bg-orange-100 text-orange-700' : 
                'bg-red-100 text-red-700'
              }`}>
                <status.icon className="w-3 h-3 inline mr-1" />
                {status.label}
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">{riskScore}</div>
                <div className="text-xs text-gray-500">Score risque</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-t border-gray-200 pt-4">
            <div>
              <div className="text-xs text-gray-500 mb-1">Impact</div>
              <span className={`px-2 py-1 rounded text-xs font-medium ${impactLevels[risk.impact].bg} ${impactLevels[risk.impact].text}`}>
                {risk.impact}
              </span>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">Probabilité</div>
              <span className={`px-2 py-1 rounded text-xs font-medium ${impactLevels[risk.probability].bg} ${impactLevels[risk.probability].text}`}>
                {risk.probability}
              </span>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">Risque résiduel</div>
              <span className={`px-2 py-1 rounded text-xs font-medium ${impactLevels[risk.residualRisk] ? impactLevels[risk.residualRisk].bg + ' ' + impactLevels[risk.residualRisk].text : 'bg-gray-100 text-gray-700'}`}>
                {risk.residualRisk}
              </span>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
            <div className="text-xs font-medium text-red-900 mb-1">Impact financier</div>
            <div className="text-sm text-red-700">{risk.financialImpact}</div>
          </div>

          <div className="mb-4">
            <div className="text-sm font-medium text-gray-900 mb-2">
              Mitigations ({risk.mitigations.length})
            </div>
            <div className="space-y-2">
              {risk.mitigations.slice(0, expanded ? undefined : 2).map((mitigation, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm">
                  <Shield className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{mitigation.action}</div>
                    {expanded && (
                      <>
                        <div className="text-xs text-gray-600 mt-1">{mitigation.detail}</div>
                        <div className="flex gap-2 mt-1">
                          <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded">
                            Efficacité: {mitigation.effectiveness}
                          </span>
                          <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded">
                            Couverture: {mitigation.coverage}
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full py-2 text-sm font-medium text-green-600 hover:text-green-700"
          >
            {expanded ? 'Voir moins' : 'Voir plus'}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Gestion des Risques</h2>
            <p className="text-gray-600 mt-1">Identification, évaluation et mitigation</p>
          </div>
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
          >
            <option value="all">Toutes les catégories</option>
            {Object.entries(riskCategories).map(([key, cat]) => (
              <option key={key} value={key}>{cat.name}</option>
            ))}
          </select>
        </div>
      </div>

      <RiskMatrix />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredRisks.map(risk => (
          <RiskCard key={risk.id} risk={risk} />
        ))}
      </div>

      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Synthèse Risques</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-gray-900">{risksData.length}</div>
            <div className="text-sm text-gray-600 mt-1">Risques identifiés</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-green-600">
              {risksData.filter(r => r.status === 'mitigated').length}
            </div>
            <div className="text-sm text-gray-600 mt-1">Mitigés</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-blue-600">
              {risksData.filter(r => r.status === 'in-progress').length}
            </div>
            <div className="text-sm text-gray-600 mt-1">En cours</div>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-orange-600">
              {risksData.filter(r => r.status === 'monitored').length}
            </div>
            <div className="text-sm text-gray-600 mt-1">Surveillés</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Risks;
