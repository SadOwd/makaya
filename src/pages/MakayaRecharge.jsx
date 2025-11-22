import React, { useState } from 'react';
import { 
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import { 
  Battery, Zap, MapPin, TrendingUp, DollarSign, Activity, AlertCircle, 
  CheckCircle, Clock, CreditCard, Users, Target, Lightbulb, AlertTriangle, ChevronRight, X
} from 'lucide-react';
import { rechargeDataFinal } from '../data/rechargeDataFinal';

const MakayaRecharge = () => {
  const [selectedStation, setSelectedStation] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  const { 
    overview, periodesHoraires, tarifsBornes, stations, performanceBornes,
    abonnements, kpis, alertes, insights, previsions, tendancesHoraires
  } = rechargeDataFinal;

  const formatCurrency = (value) => new Intl.NumberFormat('fr-FR').format(value) + ' FCFA';
  const formatNumber = (value) => new Intl.NumberFormat('fr-FR').format(value);

  const COLORS = { blue: '#3b82f6', green: '#10b981', yellow: '#eab308', red: '#ef4444', purple: '#8b5cf6', orange: '#f97316' };

  const tabs = [
    { id: 'overview', label: 'Vue d\'ensemble', icon: Activity },
    { id: 'tarifs', label: 'Tarification', icon: CreditCard },
    { id: 'bornes', label: 'Performance', icon: Zap },
    { id: 'tendances', label: 'Tendances', icon: Clock },
    { id: 'insights', label: 'Insights', icon: Target }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent bg-clip-text">
                Makaya Recharge
              </h1>
              <p className="text-slate-400 text-lg">Réseau Intelligent de Stations de Recharge</p>
            </div>
          </div>

          {/* Alertes */}
          {alertes.critiques && alertes.critiques.length > 0 && (
            <div className="bg-red-900/30 border-l-4 border-red-500 rounded-xl p-4 mb-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="text-red-400 flex-shrink-0 mt-1" size={24} />
                <div className="flex-1">
                  <h3 className="font-bold text-red-300 mb-2">🚨 Alertes Critiques</h3>
                  {alertes.critiques.map((alert, idx) => (
                    <div key={idx} className="text-red-200 text-sm mb-2">
                      <div className="font-semibold">{alert.message}</div>
                      <div className="text-red-300 text-xs">Impact: {alert.impact}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl p-6 border border-blue-500/30 hover:shadow-xl transition-all">
              <div className="flex items-center justify-between mb-3">
                <DollarSign className="w-8 h-8 text-blue-400" />
                <span className="text-xs bg-blue-500/30 px-2 py-1 rounded-full text-blue-300">Mensuel</span>
              </div>
              <div className="text-3xl font-bold text-white mb-1">{(overview.revenusMensuel / 1000000).toFixed(2)}M</div>
              <div className="text-blue-300 text-sm">CA FCFA/mois</div>
              <div className="mt-2 text-sm text-green-400">▲ {kpis.financiers.tauxMarge}% marge</div>
            </div>

            <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl p-6 border border-green-500/30 hover:shadow-xl transition-all">
              <div className="flex items-center justify-between mb-3">
                <Battery className="w-8 h-8 text-green-400" />
                <span className="text-xs bg-green-500/30 px-2 py-1 rounded-full text-green-300">Réseau</span>
              </div>
              <div className="text-3xl font-bold text-white mb-1">{overview.tauxUtilisation}%</div>
              <div className="text-green-300 text-sm">{overview.bornesActives}/{overview.totalBornes} bornes</div>
              <div className="mt-2 text-sm text-green-400">✓ Excellent</div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl p-6 border border-purple-500/30 hover:shadow-xl transition-all">
              <div className="flex items-center justify-between mb-3">
                <Users className="w-8 h-8 text-purple-400" />
                <span className="text-xs bg-purple-500/30 px-2 py-1 rounded-full text-purple-300">Actifs</span>
              </div>
              <div className="text-3xl font-bold text-white mb-1">{formatNumber(overview.clientsActifs)}</div>
              <div className="text-purple-300 text-sm">{overview.sessionsJour} sessions/jour</div>
              <div className="mt-2 text-sm text-purple-400">⭐ {overview.satisfaction}/5</div>
            </div>

            <div className="bg-gradient-to-br from-green-400/20 to-teal-500/20 rounded-xl p-6 border border-green-400/30 hover:shadow-xl transition-all">
              <div className="flex items-center justify-between mb-3">
                <Activity className="w-8 h-8 text-green-300" />
                <span className="text-xs bg-green-400/30 px-2 py-1 rounded-full text-green-200">Impact</span>
              </div>
              <div className="text-3xl font-bold text-white mb-1">{overview.co2Evite.mensuel}t</div>
              <div className="text-green-300 text-sm">{overview.co2Evite.annuel}t CO₂/an</div>
              <div className="mt-2 text-sm text-green-400">🌱 {Math.round(overview.co2Evite.annuel * 1.5)} arbres</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-slate-800/50 rounded-2xl p-2 mb-6 border border-slate-700/50">
          <div className="flex gap-2 overflow-x-auto">
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button 
                  key={tab.id} 
                  onClick={() => setActiveTab(tab.id)} 
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all whitespace-nowrap ${
                    activeTab === tab.id 
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg' 
                      : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />{tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="min-h-[400px]">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Périodes Tarifaires */}
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-blue-400" />Système Tarifaire
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {Object.entries(periodesHoraires).map(([key, periode]) => (
                    <div key={key} className="p-5 rounded-xl border-2 border-slate-700 hover:border-blue-500 transition-all">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="font-bold text-lg">
                          {key === 'heuresCreuses' ? '🌙 Creuses' : key === 'heuresPleines' ? '☀️ Pleines' : '🔥 Pointe'}
                        </span>
                      </div>
                      <div className="text-sm text-slate-400 mb-3">{periode.periode}</div>
                      <div className="flex justify-between mb-3">
                        <div><div className="text-2xl font-bold text-blue-400">{periode.prixMoyenKWh}</div><div className="text-xs text-slate-500">FCFA/kWh</div></div>
                        <div className="text-right"><div className="text-xl font-bold text-green-400">{periode.margePourcentage.toFixed(1)}%</div><div className="text-xs text-slate-500">marge</div></div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="bg-slate-700/50 p-2 rounded"><div className="text-slate-400">Sessions</div><div className="font-semibold">{periode.pourcentageSessions}%</div></div>
                        <div className="bg-slate-700/50 p-2 rounded"><div className="text-slate-400">Rev/j</div><div className="font-semibold">{(periode.revenuMoyen / 1000).toFixed(0)}K</div></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stations */}
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-red-400" />Réseau ({stations.length} stations)
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {stations.map((station) => (
                    <div key={station.id} onClick={() => setSelectedStation(station)} className="bg-slate-900/50 rounded-xl p-5 border border-slate-700 hover:border-blue-500 transition-all cursor-pointer">
                      <div className="flex items-start justify-between mb-4">
                        <div><h4 className="font-bold text-white text-lg">{station.nom}</h4><p className="text-sm text-slate-400">{station.localisation.zone}</p></div>
                        <div className="text-right"><div className="text-xl font-bold text-blue-400">{(station.performance.revenuJour / 1000).toFixed(1)}K</div><div className="text-xs text-slate-500">FCFA/j</div></div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">📊 {station.performance.tauxUtilisation}%</span>
                        <span className="text-slate-400">⭐ {station.performance.satisfaction}</span>
                        <ChevronRight size={18} className="text-slate-600" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance */}
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Battery className="w-6 h-6 text-green-400" />Performance Bornes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {Object.entries(performanceBornes).map(([type, data]) => (
                    <div key={type} className="bg-slate-900/50 rounded-xl p-5 border border-slate-700">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-bold">{type === 'slow7kW' ? '🐢 7kW' : type === 'fast22kW' ? '⚡ 22kW' : '🚀 50kW'}</span>
                        <span className="text-xs text-slate-500">ROI {data.ROI}ans</span>
                      </div>
                      <div className="mb-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-slate-400">Utilisation</span>
                          <span className="font-semibold text-blue-400">{data.tauxUtilisation}%</span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2">
                          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{ width: `${data.tauxUtilisation}%` }} />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="bg-slate-800/50 p-2 rounded"><div className="text-slate-400">Rev/j</div><div className="font-bold text-green-400">{(data.revenuTotal / 1000).toFixed(0)}K</div></div>
                        <div className="bg-slate-800/50 p-2 rounded"><div className="text-slate-400">Marge</div><div className="font-bold text-purple-400">{data.margePourcentage.toFixed(1)}%</div></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tarifs' && (
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <CreditCard className="w-6 h-6 text-yellow-400" />Grille Tarifaire
              </h3>
              {Object.entries(tarifsBornes).map(([type, borne]) => (
                <div key={type} className="mb-6">
                  <h4 className="text-xl font-bold mb-4">
                    {type === 'slow7kW' && '🐢 Lente 7kW'}
                    {type === 'fast22kW' && '⚡ Rapide 22kW'}
                    {type === 'ultra50kW' && '🚀 Ultra 50kW'}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {Object.entries(borne).filter(([key]) => key.includes('heures')).map(([periode, tarif]) => (
                      <div key={periode} className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                        <div className="text-sm font-semibold mb-3">
                          {periode === 'heuresCreuses' && '🌙 Creuses'}
                          {periode === 'heuresPleines' && '☀️ Pleines'}
                          {periode === 'heuresPointe' && '🔥 Pointe'}
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between"><span className="text-slate-400">Prix:</span><span className="font-bold text-blue-400">{tarif.prixKWh} FCFA</span></div>
                          <div className="flex justify-between"><span className="text-slate-400">Marge:</span><span className="font-bold text-green-400">{tarif.marge} FCFA</span></div>
                          <div className="flex justify-between border-t border-slate-700 pt-2"><span>Marge %:</span><span className="font-bold text-yellow-400">{tarif.margePct}%</span></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'bornes' && (
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-2xl font-bold mb-6">Performance Détaillée</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={[
                  { type: 'Lente 7kW', utilisation: performanceBornes.slow7kW.tauxUtilisation, revenu: performanceBornes.slow7kW.revenuTotal / 1000 },
                  { type: 'Rapide 22kW', utilisation: performanceBornes.fast22kW.tauxUtilisation, revenu: performanceBornes.fast22kW.revenuTotal / 1000 },
                  { type: 'Ultra 50kW', utilisation: performanceBornes.ultra50kW.tauxUtilisation, revenu: performanceBornes.ultra50kW.revenuTotal / 1000 }
                ]}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="type" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #3b82f6' }} />
                  <Legend />
                  <Bar dataKey="utilisation" fill={COLORS.blue} name="Util. (%)" />
                  <Bar dataKey="revenu" fill={COLORS.green} name="Rev. (K)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}

          {activeTab === 'tendances' && (
            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-2xl font-bold mb-6">Utilisation 24/7</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={tendancesHoraires}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="heure" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #3b82f6' }} />
                    <Legend />
                    <Line type="monotone" dataKey="utilisation" stroke={COLORS.blue} strokeWidth={2} name="Utilisation (%)" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-2xl font-bold mb-6">Revenus Horaires</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={tendancesHoraires}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="heure" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #10b981' }} />
                    <Bar dataKey="revenus" fill={COLORS.green} name="Revenus (FCFA)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {activeTab === 'insights' && (
            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Users className="w-6 h-6 text-purple-400" />Abonnements
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {abonnements.slice(0, 4).map((abo, idx) => (
                    <div key={idx} className="rounded-xl p-4 border-2 border-slate-700 text-center">
                      <div className="text-lg font-bold">{abo.nom.split(' - ')[0]}</div>
                      <div className="text-3xl font-bold text-blue-400 my-2">{formatNumber(abo.fraisMensuel)}</div>
                      <div className="text-xs text-slate-500">FCFA/mois</div>
                      {abo.reduction > 0 && <div className="mt-2 text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">-{abo.reduction}%</div>}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Lightbulb className="w-6 h-6 text-yellow-400" />Opportunités
                </h3>
                <div className="space-y-3">
                  {insights.opportunites.slice(0, 3).map((opp, idx) => (
                    <div key={idx} className="p-4 bg-green-900/20 border-l-4 border-green-500 rounded-lg">
                      <p className="text-slate-200 text-sm">{opp}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Target className="w-6 h-6 text-blue-400" />Actions Prioritaires
                </h3>
                <div className="space-y-4">
                  {insights.actions_recommandees.slice(0, 3).map((action, idx) => (
                    <div key={idx} className="p-4 rounded-lg border-2 border-red-500 bg-red-900/20">
                      <div className="flex justify-between items-start mb-2">
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-500/30 text-red-300">{action.priorite}</span>
                      </div>
                      <h4 className="font-bold text-white mb-3">{action.action}</h4>
                      <div className="grid grid-cols-3 gap-3 text-sm">
                        <div className="bg-slate-900/50 p-2 rounded"><div className="text-slate-400 text-xs">Invest.</div><div className="font-bold text-blue-400">{action.investissement}</div></div>
                        <div className="bg-slate-900/50 p-2 rounded"><div className="text-slate-400 text-xs">Impact</div><div className="font-bold text-green-400">{action.impact}</div></div>
                        <div className="bg-slate-900/50 p-2 rounded"><div className="text-slate-400 text-xs">Délai</div><div className="font-bold text-purple-400">{action.delai}</div></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-green-400" />Prévisions 2026
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {Object.entries(previsions).map(([key, prev]) => (
                    <div key={key} className={`p-4 rounded-lg border-2 ${key === 'scenario_realiste' ? 'border-green-500 bg-green-900/20' : 'border-slate-700'}`}>
                      <div className="font-bold mb-3">
                        {key === 'scenario_conservateur' && '🛡️ Conservateur'}
                        {key === 'scenario_realiste' && '⭐ Réaliste'}
                        {key === 'scenario_optimiste' && '🚀 Optimiste'}
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between"><span className="text-slate-400">Croissance:</span><span className="font-bold text-blue-400">+{prev.croissance}%</span></div>
                        <div className="flex justify-between"><span className="text-slate-400">Rev M+12:</span><span className="font-bold">{prev.revenuM12}M</span></div>
                        <div className="flex justify-between"><span className="text-slate-400">ROI:</span><span className="font-bold text-green-400">{prev.ROI} ans</span></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Station */}
        {selectedStation && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50" onClick={() => setSelectedStation(null)}>
            <div className="bg-slate-900 rounded-2xl max-w-2xl w-full p-6 border border-slate-700" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold">{selectedStation.nom}</h2>
                  <p className="text-slate-400">{selectedStation.localisation.adresse}</p>
                </div>
                <button onClick={() => setSelectedStation(null)} className="text-slate-400 hover:text-white">
                  <X size={24} />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-blue-900/20 p-4 rounded-lg">
                  <div className="text-sm text-slate-400 mb-1">Revenu Quotidien</div>
                  <div className="text-2xl font-bold text-blue-400">{formatCurrency(selectedStation.performance.revenuJour)}</div>
                </div>
                <div className="bg-green-900/20 p-4 rounded-lg">
                  <div className="text-sm text-slate-400 mb-1">Utilisation</div>
                  <div className="text-2xl font-bold text-green-400">{selectedStation.performance.tauxUtilisation}%</div>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-slate-400">Sessions/jour:</span><span className="font-semibold">{selectedStation.performance.sessionsJour}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Énergie/jour:</span><span className="font-semibold">{selectedStation.performance.energieJour} kWh</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Satisfaction:</span><span className="font-semibold">⭐ {selectedStation.performance.satisfaction}/5</span></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MakayaRecharge;
