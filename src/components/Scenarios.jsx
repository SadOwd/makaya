import React, { useState } from 'react';
import { TrendingUp, TrendingDown, AlertCircle, CheckCircle2, Target } from 'lucide-react';

const Scenarios = () => {
  const [compareMode, setCompareMode] = useState(false);
  const [selectedScenarios, setSelectedScenarios] = useState(['base']);

  const scenariosData = {
    conservateur: {
      name: 'Conservateur',
      probability: 15,
      color: 'orange',
      description: 'Hypothèses prudentes avec ralentissement marché',
      assumptions: [
        'Volumes -30% vs base case',
        'Valeur résiduelle 42% (vs 55%)',
        'Bonus LLD rejeté par gouvernement',
        'Délai agrément AT2ER +6 mois',
        'Concurrence internationale arrive 2028'
      ],
      kpis2030: {
        vehicles: 450,
        ca: 33.2,
        ebitda: 14.6,
        marge: 44,
        clients: 380,
        bornes: 380,
        marketShare: 19
      },
      risks: [
        { name: 'Adoption lente VE', impact: 'Élevé', probability: 'Moyenne' },
        { name: 'Valeur résiduelle basse', impact: 'Élevé', probability: 'Moyenne' },
        { name: 'Retard réglementaire', impact: 'Moyen', probability: 'Élevée' }
      ]
    },
    base: {
      name: 'Base',
      probability: 70,
      color: 'green',
      description: 'Hypothèses réalistes basées sur études marché',
      assumptions: [
        'Croissance 72% CAGR 2026-2030',
        'Valeur résiduelle 55% confirmée',
        'Agrément AT2ER Q2 2026',
        'Part marché 23% en 2030',
        'Break-even cash Q3 2027'
      ],
      kpis2030: {
        vehicles: 650,
        ca: 39.77,
        ebitda: 18.67,
        marge: 46.9,
        clients: 550,
        bornes: 500,
        marketShare: 23
      },
      risks: [
        { name: 'Concurrence locale', impact: 'Moyen', probability: 'Moyenne' },
        { name: 'Défaut paiements', impact: 'Faible', probability: 'Faible' },
        { name: 'Délestages CEET', impact: 'Moyen', probability: 'Moyenne' }
      ]
    },
    optimiste: {
      name: 'Optimiste',
      probability: 15,
      color: 'blue',
      description: 'Scénario favorable avec accélération adoption',
      assumptions: [
        'Expansion Bénin anticipée 2029',
        'Tarif V2G 200 FCFA/kWh (vs 175)',
        'Programme Pioneers 100 VIP (vs 50)',
        'Partenariat BYD renforcé',
        'Subventions PSTMET doublées'
      ],
      kpis2030: {
        vehicles: 850,
        ca: 46.8,
        ebitda: 23.4,
        marge: 50,
        clients: 720,
        bornes: 650,
        marketShare: 28
      },
      risks: [
        { name: 'Surcapacité', impact: 'Moyen', probability: 'Faible' },
        { name: 'Tensions supply chain', impact: 'Faible', probability: 'Moyenne' }
      ]
    }
  };

  const ComparisonTable = () => {
    const metrics = [
      { key: 'vehicles', label: 'Véhicules parc', unit: '' },
      { key: 'ca', label: 'CA 2030', unit: 'Md FCFA' },
      { key: 'ebitda', label: 'EBITDA 2030', unit: 'Md FCFA' },
      { key: 'marge', label: 'Marge EBITDA', unit: '%' },
      { key: 'clients', label: 'Clients actifs', unit: '' },
      { key: 'bornes', label: 'Bornes réseau', unit: '' },
      { key: 'marketShare', label: 'Part de marché', unit: '%' }
    ];

    return (
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Métrique
                </th>
                {selectedScenarios.map(scenario => (
                  <th key={scenario} className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {scenariosData[scenario].name}
                  </th>
                ))}
                {selectedScenarios.length > 1 && (
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Écart
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {metrics.map(metric => {
                const values = selectedScenarios.map(s => scenariosData[s].kpis2030[metric.key]);
                const delta = values.length > 1 ? ((values[1] - values[0]) / values[0] * 100).toFixed(1) : null;

                return (
                  <tr key={metric.key} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {metric.label}
                    </td>
                    {values.map((value, idx) => (
                      <td key={idx} className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                        <span className="font-semibold">{value}</span>
                        {metric.unit && <span className="text-gray-500 ml-1">{metric.unit}</span>}
                      </td>
                    ))}
                    {delta && (
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                        <span className={`inline-flex items-center gap-1 font-medium ${
                          parseFloat(delta) > 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {parseFloat(delta) > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                          {delta}%
                        </span>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const ScenarioCard = ({ scenarioKey, data, isSelected, onToggle }) => {
    const colorClasses = {
      orange: 'border-orange-500 bg-orange-50',
      green: 'border-green-500 bg-green-50',
      blue: 'border-blue-500 bg-blue-50'
    };

    const iconColorClasses = {
      orange: 'text-orange-600',
      green: 'text-green-600',
      blue: 'text-blue-600'
    };

    return (
      <div 
        onClick={() => compareMode && onToggle(scenarioKey)}
        className={`bg-white rounded-lg shadow-sm border-2 transition-all ${
          isSelected ? colorClasses[data.color] : 'border-gray-200'
        } ${compareMode ? 'cursor-pointer hover:shadow-md' : ''}`}
      >
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{data.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${colorClasses[data.color]}`}>
                    {data.name}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2">{data.description}</p>
            </div>
            <div className="text-right ml-4">
              <div className={`text-2xl font-bold ${iconColorClasses[data.color]}`}>
                {data.probability}%
              </div>
              <div className="text-xs text-gray-500">Probabilité</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4 pt-4 border-t border-gray-200">
            <div>
              <div className="text-2xl font-bold text-gray-900">{data.kpis2030.vehicles}</div>
              <div className="text-xs text-gray-600">Véhicules</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{data.kpis2030.ca}Md</div>
              <div className="text-xs text-gray-600">CA 2030</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{data.kpis2030.marge}%</div>
              <div className="text-xs text-gray-600">Marge EBITDA</div>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Hypothèses clés</h4>
            <ul className="space-y-1">
              {data.assumptions.slice(0, 3).map((assumption, idx) => (
                <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                  <span className={`${iconColorClasses[data.color]} mt-0.5`}>•</span>
                  {assumption}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Risques principaux</h4>
            <div className="space-y-2">
              {data.risks.map((risk, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs">
                  <span className="text-gray-700">{risk.name}</span>
                  <div className="flex gap-2">
                    <span className={`px-2 py-1 rounded-full ${
                      risk.impact === 'Élevé' ? 'bg-red-100 text-red-700' :
                      risk.impact === 'Moyen' ? 'bg-orange-100 text-orange-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {risk.impact}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const toggleScenario = (scenario) => {
    if (selectedScenarios.includes(scenario)) {
      if (selectedScenarios.length > 1) {
        setSelectedScenarios(selectedScenarios.filter(s => s !== scenario));
      }
    } else {
      if (selectedScenarios.length < 3) {
        setSelectedScenarios([...selectedScenarios, scenario]);
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Analyse Scénarios</h2>
            <p className="text-gray-600 mt-1">Comparaison des projections selon 3 scénarios</p>
          </div>
          <button
            onClick={() => {
              setCompareMode(!compareMode);
              if (!compareMode) setSelectedScenarios(['base']);
            }}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              compareMode 
                ? 'bg-green-600 text-white hover:bg-green-700' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {compareMode ? 'Désactiver' : 'Activer'} la comparaison
          </button>
        </div>
      </div>

      {compareMode && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="font-semibold text-blue-900">Mode comparaison activé</h4>
              <p className="text-sm text-blue-700 mt-1">
                Cliquez sur les scénarios pour les comparer (max 3). 
                {selectedScenarios.length} scénario{selectedScenarios.length > 1 ? 's' : ''} sélectionné{selectedScenarios.length > 1 ? 's' : ''}.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {Object.entries(scenariosData).map(([key, data]) => (
          <ScenarioCard
            key={key}
            scenarioKey={key}
            data={data}
            isSelected={selectedScenarios.includes(key)}
            onToggle={toggleScenario}
          />
        ))}
      </div>

      {compareMode && selectedScenarios.length > 1 && (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900">Comparaison détaillée</h3>
          <ComparisonTable />
        </div>
      )}

      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg shadow-sm p-6">
        <div className="flex items-start gap-3">
          <Target className="w-6 h-6 text-green-600 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Recommandations Stratégiques</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                <span><strong>Scenario Base</strong> est le plus probable (70%) et doit servir de référence pour les décisions</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                <span>Prévoir des <strong>plans de contingence</strong> basés sur le scénario conservateur</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                <span>Le scénario optimiste reste <strong>atteignable</strong> avec partenariats stratégiques renforcés</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                <span>Monitoring mensuel des KPIs pour <strong>ajuster la trajectoire</strong> en temps réel</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scenarios;
