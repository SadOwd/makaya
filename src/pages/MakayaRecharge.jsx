import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Battery, Zap, MapPin, TrendingUp, DollarSign, Activity, AlertCircle, CheckCircle, Clock, Calendar, ArrowLeft, Info, CreditCard, TrendingDown } from 'lucide-react';
import { rechargeData } from '../data/rechargeData';

const MakayaRecharge = () => {
  const [selectedStation, setSelectedStation] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  const formatCurrency = (value) => new Intl.NumberFormat('fr-FR').format(value) + ' FCFA';
  const formatNumber = (value) => new Intl.NumberFormat('fr-FR').format(value);

  const getStatusColor = (status) => {
    const colors = { operational: 'bg-green-500', maintenance: 'bg-yellow-500', 'hors-service': 'bg-red-500' };
    return colors[status] || 'bg-gray-500';
  };

  const getStatusText = (status) => {
    const texts = { operational: 'Opérationnelle', maintenance: 'Maintenance', 'hors-service': 'Hors service' };
    return texts[status] || status;
  };

  const getPeriodeColor = (periode) => {
    const colors = { Creuses: 'bg-blue-500/20 text-blue-400 border-blue-500/50', Pleines: 'bg-green-500/20 text-green-400 border-green-500/50', Pointe: 'bg-orange-500/20 text-orange-400 border-orange-500/50' };
    return colors[periode] || 'bg-slate-500/20 text-slate-400';
  };

  const tabs = [
    { id: 'overview', label: 'Vue d\'ensemble', icon: Activity },
    { id: 'tarifs', label: 'Tarification', icon: CreditCard },
    { id: 'bornes', label: 'Types de Bornes', icon: Zap },
    { id: 'expansion', label: 'Expansion', icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <a href="/" className="p-2 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 transition"><ArrowLeft className="w-5 h-5" /></a>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">⚡ Makaya Recharge</h1>
              <p className="text-slate-400 text-lg">Réseau de Bornes de Recharge Électrique</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-slate-800/50 rounded-2xl p-2 mb-6">
          <div className="flex gap-2 overflow-x-auto">
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition-all whitespace-nowrap ${activeTab === tab.id ? 'bg-yellow-500/20 text-yellow-400' : 'text-slate-400 hover:text-white'}`}>
                  <Icon className="w-4 h-4" />{tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* KPIs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-6 border border-slate-700/50 hover:shadow-xl transition-all">
                <div className="p-3 bg-yellow-500/20 rounded-xl w-fit mb-3"><MapPin className="w-6 h-6 text-yellow-400" /></div>
                <h3 className="text-slate-400 text-sm mb-1">Stations</h3>
                <p className="text-3xl font-bold">{rechargeData.networkMetrics.totalStations}</p>
              </div>
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-6 border border-slate-700/50 hover:shadow-xl transition-all">
                <div className="p-3 bg-green-500/20 rounded-xl w-fit mb-3"><Zap className="w-6 h-6 text-green-400" /></div>
                <h3 className="text-slate-400 text-sm mb-1">Bornes Actives</h3>
                <p className="text-3xl font-bold">{rechargeData.networkMetrics.bornesActives}/{rechargeData.networkMetrics.totalBornes}</p>
              </div>
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-6 border border-slate-700/50 hover:shadow-xl transition-all">
                <div className="p-3 bg-blue-500/20 rounded-xl w-fit mb-3"><Activity className="w-6 h-6 text-blue-400" /></div>
                <h3 className="text-slate-400 text-sm mb-1">Utilisation</h3>
                <p className="text-3xl font-bold">{rechargeData.networkMetrics.tauxUtilisationMoyen}%</p>
              </div>
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-6 border border-slate-700/50 hover:shadow-xl transition-all">
                <div className="p-3 bg-purple-500/20 rounded-xl w-fit mb-3"><DollarSign className="w-6 h-6 text-purple-400" /></div>
                <h3 className="text-slate-400 text-sm mb-1">CA Mensuel</h3>
                <p className="text-3xl font-bold">{formatNumber(rechargeData.networkMetrics.revenusMois / 1000000)}M</p>
              </div>
            </div>

            {/* Stations */}
            <div className="bg-slate-800/50 rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-6">Stations de Recharge</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rechargeData.stations.map(station => (
                  <div key={station.id} className="bg-slate-900/50 rounded-xl p-5 border border-slate-700/50 hover:border-yellow-500/50 transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-bold text-white">{station.name}</h4>
                        <p className="text-sm text-slate-400">{station.location.address}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(station.status)}`}></span>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Bornes:</span>
                        <span className="text-white font-semibold">{station.bornesDisponibles}/{station.bornes}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Utilisation:</span>
                        <span className="text-green-400 font-semibold">{station.utilisation}%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">CA 24h:</span>
                        <span className="text-purple-400 font-semibold">{formatCurrency(station.revenus24h)}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {station.typesBornes.map((type, i) => (
                        <span key={i} className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-400">{type.type} x{type.count}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Graphique Utilisation */}
            <div className="bg-slate-800/50 rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-6">Utilisation Horaire (Aujourd'hui)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={rechargeData.hourlyUsage}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="hour" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #eab308' }} />
                  <Bar dataKey="sessions" fill="#eab308" name="Sessions" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* TARIFS */}
        {activeTab === 'tarifs' && (
          <div className="space-y-6">
            {/* Grille Tarifaire */}
            <div className="bg-slate-800/50 rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2"><CreditCard className="w-6 h-6 text-yellow-400" />Grille Tarifaire par Période</h3>
              
              {/* Périodes */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-900/30 rounded-xl p-5 border border-blue-500/30">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-blue-400">Heures Creuses</h4>
                    <Clock className="w-6 h-6 text-blue-400" />
                  </div>
                  <p className="text-sm text-slate-300 mb-4">{rechargeData.tarifPeriodes.creuses.heures}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between"><span className="text-slate-400">Achat électricité:</span><span className="text-white font-bold">80 FCFA/kWh</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">AC (7/22kW):</span><span className="text-green-400 font-bold">150 FCFA/kWh</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">DC 50kW:</span><span className="text-green-400 font-bold">200 FCFA/kWh</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">DC 150kW:</span><span className="text-green-400 font-bold">250 FCFA/kWh</span></div>
                  </div>
                </div>

                <div className="bg-green-900/30 rounded-xl p-5 border border-green-500/30">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-green-400">Heures Pleines</h4>
                    <Activity className="w-6 h-6 text-green-400" />
                  </div>
                  <p className="text-sm text-slate-300 mb-4">{rechargeData.tarifPeriodes.pleines.heures}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between"><span className="text-slate-400">Achat électricité:</span><span className="text-white font-bold">95 FCFA/kWh</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">AC (7/22kW):</span><span className="text-green-400 font-bold">200 FCFA/kWh</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">DC 50kW:</span><span className="text-green-400 font-bold">250 FCFA/kWh</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">DC 150kW:</span><span className="text-green-400 font-bold">300 FCFA/kWh</span></div>
                  </div>
                </div>

                <div className="bg-orange-900/30 rounded-xl p-5 border border-orange-500/30">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-orange-400">Heures Pointe</h4>
                    <TrendingUp className="w-6 h-6 text-orange-400" />
                  </div>
                  <p className="text-sm text-slate-300 mb-4">{rechargeData.tarifPeriodes.pointe.heures}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between"><span className="text-slate-400">Achat électricité:</span><span className="text-white font-bold">110 FCFA/kWh</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">AC (7/22kW):</span><span className="text-green-400 font-bold">250 FCFA/kWh</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">DC 50kW:</span><span className="text-green-400 font-bold">300 FCFA/kWh</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">DC 150kW:</span><span className="text-green-400 font-bold">350 FCFA/kWh</span></div>
                  </div>
                </div>
              </div>

              {/* Marges Détaillées */}
              <div className="bg-slate-900/50 rounded-xl p-6 mb-6">
                <h4 className="text-xl font-bold mb-4">Marges par Type et Période</h4>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left py-3 px-4 text-slate-400">Type Borne</th>
                        <th className="text-left py-3 px-4 text-slate-400">Période</th>
                        <th className="text-right py-3 px-4 text-slate-400">Achat</th>
                        <th className="text-right py-3 px-4 text-slate-400">Vente</th>
                        <th className="text-right py-3 px-4 text-slate-400">Marge</th>
                        <th className="text-right py-3 px-4 text-slate-400">Marge %</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(rechargeData.tarification.marges).map(([key, marge]) => (
                        <tr key={key} className="border-b border-slate-800 hover:bg-slate-800/30">
                          <td className="py-3 px-4 text-white font-semibold">{key.replace(/_/g, ' ')}</td>
                          <td className="py-3 px-4"><span className={`px-2 py-1 rounded-full text-xs ${getPeriodeColor(key.includes('creuses') ? 'Creuses' : key.includes('pleines') ? 'Pleines' : 'Pointe')}`}>{key.includes('creuses') ? 'Creuses' : key.includes('pleines') ? 'Pleines' : 'Pointe'}</span></td>
                          <td className="py-3 px-4 text-right text-slate-300">{marge.achat} FCFA</td>
                          <td className="py-3 px-4 text-right text-blue-400 font-bold">{marge.vente} FCFA</td>
                          <td className="py-3 px-4 text-right text-green-400 font-bold">{marge.marge} FCFA</td>
                          <td className="py-3 px-4 text-right text-yellow-400 font-bold">{marge.margePercent}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Exemples */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {rechargeData.tarification.exemples.map((ex, i) => (
                  <div key={i} className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-xl p-5 border border-yellow-500/30">
                    <h5 className="font-bold text-white mb-3">{ex.scenario}</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between"><span className="text-slate-400">kWh:</span><span className="text-white">{ex.kwh} kWh</span></div>
                      <div className="flex justify-between"><span className="text-slate-400">Coût achat:</span><span className="text-red-400">{formatCurrency(ex.coutAchat)}</span></div>
                      <div className="flex justify-between"><span className="text-slate-400">Tarif client:</span><span className="text-blue-400 font-bold">{formatCurrency(ex.tarifClient)}</span></div>
                      <div className="flex justify-between border-t border-slate-700 pt-2"><span className="text-slate-300 font-semibold">Marge:</span><span className="text-green-400 font-bold">{formatCurrency(ex.marge)}</span></div>
                      <div className="flex justify-between"><span className="text-slate-300 font-semibold">Marge %:</span><span className="text-yellow-400 font-bold">{ex.margePercent}%</span></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Revenus Mensuels */}
              <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-500/30">
                <h4 className="text-xl font-bold mb-4 text-green-400">Revenus Mensuels par Période</h4>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-slate-900/50 rounded-lg p-4">
                    <p className="text-sm text-slate-400 mb-1">Heures Creuses</p>
                    <p className="text-2xl font-bold text-blue-400">{formatNumber(rechargeData.tarification.revenusMensuels.creuses / 1000000, 1)}M</p>
                    <p className="text-xs text-slate-500">{((rechargeData.tarification.revenusMensuels.creuses / rechargeData.tarification.revenusMensuels.total) * 100).toFixed(0)}%</p>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-4">
                    <p className="text-sm text-slate-400 mb-1">Heures Pleines</p>
                    <p className="text-2xl font-bold text-green-400">{formatNumber(rechargeData.tarification.revenusMensuels.pleines / 1000000, 1)}M</p>
                    <p className="text-xs text-slate-500">{((rechargeData.tarification.revenusMensuels.pleines / rechargeData.tarification.revenusMensuels.total) * 100).toFixed(0)}%</p>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-4">
                    <p className="text-sm text-slate-400 mb-1">Heures Pointe</p>
                    <p className="text-2xl font-bold text-orange-400">{formatNumber(rechargeData.tarification.revenusMensuels.pointe / 1000000, 1)}M</p>
                    <p className="text-xs text-slate-500">{((rechargeData.tarification.revenusMensuels.pointe / rechargeData.tarification.revenusMensuels.total) * 100).toFixed(0)}%</p>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-4">
                    <p className="text-sm text-slate-400 mb-1">Total Mensuel</p>
                    <p className="text-2xl font-bold text-white">{formatNumber(rechargeData.tarification.revenusMensuels.total / 1000000, 1)}M</p>
                    <p className="text-xs text-green-400">Marge: {rechargeData.tarification.revenusMensuels.margeNettePercent}%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* BORNES */}
        {activeTab === 'bornes' && (
          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-6">Types de Bornes Disponibles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {rechargeData.borneTypes.map((borne, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50 hover:border-yellow-500/50 transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-2xl font-bold text-white mb-1">{borne.type}</h4>
                        <p className="text-sm text-slate-400">{borne.usage}</p>
                      </div>
                      <Zap className="w-8 h-8 text-yellow-400" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Puissance:</span>
                        <span className="text-white font-bold">{borne.puissance} kW</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Temps charge:</span>
                        <span className="text-blue-400 font-semibold">{borne.tempsCharge}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Coût installation:</span>
                        <span className="text-orange-400 font-semibold">{formatCurrency(borne.coutInstallation)}</span>
                      </div>
                      <div className="flex justify-between border-t border-slate-700 pt-3">
                        <span className="text-slate-300 font-semibold">Tarif client:</span>
                        <span className="text-green-400 font-bold">{borne.tarifClient} FCFA/kWh</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance par Type */}
            <div className="bg-slate-800/50 rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-6">Performance par Type de Borne</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={rechargeData.performanceByType}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="type" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #eab308' }} />
                  <Legend />
                  <Bar dataKey="utilisation" fill="#eab308" name="Utilisation (%)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* EXPANSION */}
        {activeTab === 'expansion' && (
          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-6">Planning Expansion 2026</h3>
              <div className="space-y-6">
                {rechargeData.expansionPlan.map((phase, i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
                    <h4 className="text-xl font-bold text-yellow-400 mb-4">{phase.phase}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {phase.stations.map((station, j) => (
                        <div key={j} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h5 className="font-bold text-white">{station.name}</h5>
                              <p className="text-sm text-slate-400">{station.location}</p>
                            </div>
                            <span className={`text-xs px-2 py-1 rounded-full ${station.status === 'Planifié' ? 'bg-blue-500/20 text-blue-400' : station.status === 'Étude' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-slate-500/20 text-slate-400'}`}>{station.status}</span>
                          </div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between"><span className="text-slate-400">Bornes:</span><span className="text-white">{station.bornes}</span></div>
                            <div className="flex justify-between"><span className="text-slate-400">Budget:</span><span className="text-green-400 font-bold">{formatCurrency(station.budget)}</span></div>
                          </div>
                          <div className="mt-3 flex flex-wrap gap-1">
                            {station.types.map((type, k) => (
                              <span key={k} className="text-xs px-2 py-1 rounded bg-blue-500/10 text-blue-400">{type}</span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MakayaRecharge;