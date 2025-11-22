import React, { useState } from 'react';
import { Users, TrendingUp, Target, Lightbulb, AlertTriangle, CheckCircle } from 'lucide-react';
import { rechargeDataFinal } from '../../data/rechargeDataFinal';

const RechargeInsights = () => {
  const [selectedAbonnement, setSelectedAbonnement] = useState(null);
  
  const { abonnements, insights, objectifs, previsions } = rechargeDataFinal;

  return (
    <div className="space-y-6">
      {/* Abonnements */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Users size={24} className="text-purple-600" />
          Formules d'Abonnement
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {abonnements.map((abo, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedAbonnement(abo)}
              className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                abo.type === 'intensif' 
                  ? 'border-purple-500 bg-gradient-to-br from-purple-50 to-pink-50'
                  : abo.type === 'moyen'
                  ? 'border-blue-500 bg-blue-50'
                  : abo.type === 'leger'
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-300 bg-gray-50'
              } hover:shadow-lg`}
            >
              <div className="text-center mb-3">
                <div className="text-2xl font-bold text-gray-800">{abo.nom.split(' - ')[0]}</div>
                <div className="text-sm text-gray-600">{abo.nom.split(' - ')[1]}</div>
              </div>

              <div className="text-center mb-3">
                <div className="text-3xl font-bold text-blue-600">
                  {abo.fraisMensuel.toLocaleString()}
                </div>
                <div className="text-xs text-gray-500">FCFA/mois</div>
                {abo.reduction > 0 && (
                  <div className="mt-1 inline-block px-2 py-1 bg-green-200 text-green-800 rounded text-xs font-semibold">
                    -{abo.reduction}% réduction
                  </div>
                )}
              </div>

              <div className="space-y-2 mb-3">
                {abo.avantages.map((avantage, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs">
                    <CheckCircle size={14} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{avantage}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-gray-200">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-600">Utilisateurs</span>
                  <span className="font-semibold">{abo.utilisateurs.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Revenu moy.</span>
                  <span className="font-semibold text-green-600">
                    {(abo.revenuMoyen / 1000).toFixed(1)}K
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <div className="text-sm text-gray-700">
            <strong>💡 Total:</strong> {abonnements.reduce((sum, a) => sum + a.utilisateurs, 0).toLocaleString()} clients actifs
            • Revenu mensuel abonnements: {(abonnements.reduce((sum, a) => sum + (a.utilisateurs * a.revenuMoyen), 0) / 1000000).toFixed(2)}M FCFA
          </div>
        </div>
      </div>

      {/* Opportunités */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Lightbulb size={24} className="text-yellow-600" />
          Opportunités Majeures
        </h3>

        <div className="space-y-3">
          {insights.opportunites.map((opp, idx) => (
            <div key={idx} className="p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                <div className="flex-1">
                  <p className="text-gray-800">{opp}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Risques */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <AlertTriangle size={24} className="text-red-600" />
          Risques Identifiés
        </h3>

        <div className="space-y-3">
          {insights.risques.map((risk, idx) => (
            <div key={idx} className="p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-red-600 flex-shrink-0" size={20} />
                <div className="flex-1">
                  <p className="text-gray-800">{risk}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Actions Recommandées */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Target size={24} className="text-blue-600" />
          Actions Recommandées (Priorisées)
        </h3>

        <div className="space-y-4">
          {insights.actions_recommandees.map((action, idx) => (
            <div key={idx} className={`p-4 rounded-lg border-2 ${
              action.priorite === 'Haute' 
                ? 'border-red-500 bg-red-50'
                : action.priorite === 'Moyenne'
                ? 'border-orange-500 bg-orange-50'
                : 'border-blue-500 bg-blue-50'
            }`}>
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      action.priorite === 'Haute'
                        ? 'bg-red-200 text-red-800'
                        : action.priorite === 'Moyenne'
                        ? 'bg-orange-200 text-orange-800'
                        : 'bg-blue-200 text-blue-800'
                    }`}>
                      {action.priorite}
                    </span>
                    <span className="text-sm text-gray-600">Délai: {action.delai}</span>
                  </div>
                  <h4 className="font-bold text-gray-800">{action.action}</h4>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mt-3">
                <div className="bg-white p-2 rounded">
                  <div className="text-xs text-gray-600">Investissement</div>
                  <div className="font-bold text-blue-600">{action.investissement}</div>
                </div>
                <div className="bg-white p-2 rounded">
                  <div className="text-xs text-gray-600">Impact</div>
                  <div className="font-bold text-green-600">{action.impact}</div>
                </div>
                <div className="bg-white p-2 rounded">
                  <div className="text-xs text-gray-600">ROI</div>
                  <div className="font-bold text-purple-600">{action.delai}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Objectifs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.entries(objectifs).map(([key, obj]) => (
          <div key={key} className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl shadow-lg p-6">
            <div className="text-sm mb-2 opacity-90">
              {key === 'court_terme' ? '🎯 Court Terme' :
               key === 'moyen_terme' ? '📊 Moyen Terme' :
               '🚀 Long Terme'}
            </div>
            <div className="font-bold mb-3">{obj.periode}</div>
            <div className="space-y-2">
              {obj.cibles.slice(0, 3).map((cible, idx) => (
                <div key={idx} className="text-sm bg-white bg-opacity-20 p-2 rounded">
                  <div className="font-semibold">{cible.objectif}</div>
                  {cible.actuel !== undefined && (
                    <div className="text-xs opacity-90">
                      {cible.actuel} → {cible.cible}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Prévisions 2026 */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <TrendingUp size={24} className="text-green-600" />
          Prévisions 2026
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(previsions).map(([key, prev]) => (
            <div key={key} className={`p-4 rounded-lg border-2 ${
              key === 'scenario_realiste'
                ? 'border-green-500 bg-green-50'
                : key === 'scenario_optimiste'
                ? 'border-blue-500 bg-blue-50'
                : 'border-orange-500 bg-orange-50'
            }`}>
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-gray-800">
                  {key === 'scenario_conservateur' ? '🛡️ Conservateur' :
                   key === 'scenario_realiste' ? '⭐ Réaliste' :
                   '🚀 Optimiste'}
                </span>
                <span className={`text-xs px-2 py-1 rounded ${
                  prev.risque === 'faible' ? 'bg-green-200 text-green-800' :
                  prev.risque === 'modéré' ? 'bg-orange-200 text-orange-800' :
                  'bg-red-200 text-red-800'
                }`}>
                  Risque {prev.risque}
                </span>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Croissance</span>
                  <span className="font-bold text-blue-600">+{prev.croissance}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Revenus M+12</span>
                  <span className="font-bold">{prev.revenuM12}M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Revenus M+24</span>
                  <span className="font-bold">{prev.revenuM24}M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Investissement</span>
                  <span className="font-bold text-purple-600">{prev.investissementRequis}M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">ROI</span>
                  <span className="font-bold text-green-600">{prev.ROI} ans</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
          <p className="text-sm text-gray-700">
            <strong>⭐ Recommandation:</strong> Le scénario réaliste (+15% croissance) offre le meilleur équilibre 
            risque/rendement avec un ROI de 3.6 ans et un investissement maîtrisé de 78M FCFA.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RechargeInsights;
