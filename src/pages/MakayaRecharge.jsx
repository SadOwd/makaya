import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Battery, Zap, MapPin, TrendingUp, DollarSign, Activity, AlertCircle, CheckCircle, Clock, Calendar } from 'lucide-react';
import { rechargeData } from '../data/rechargeData';

const MakayaRecharge = () => {
  const [selectedStation, setSelectedStation] = useState(null);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('fr-FR').format(value) + ' FCFA';
  };

  const getStatusColor = (status) => {
    const colors = {
      operational: 'bg-green-500',
      maintenance: 'bg-yellow-500',
      'hors-service': 'bg-red-500'
    };
    return colors[status] || 'bg-gray-500';
  };

  const getStatusText = (status) => {
    const texts = {
      operational: 'Opérationnelle',
      maintenance: 'Maintenance',
      'hors-service': 'Hors service'
    };
    return texts[status] || status;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent bg-clip-text">
          ⚡ Makaya Recharge
        </h1>
        <p className="text-slate-400 text-lg">Réseau de Bornes de Recharge Électrique</p>
      </div>

      {/* KPIs Principaux */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all">
          <div className="p-3 bg-blue-500/20 rounded-xl w-fit mb-3">
            <MapPin className="w-6 h-6 text-blue-400" />
          </div>
          <h3 className="text-slate-400 text-sm font-medium mb-1">Stations actives</h3>
          <p className="text-3xl font-bold text-white">{rechargeData.networkMetrics.totalStations}</p>
          <p className="text-xs text-slate-500 mt-2">Sur Lomé et environs</p>
        </div>

        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all">
          <div className="p-3 bg-cyan-500/20 rounded-xl w-fit mb-3">
            <Battery className="w-6 h-6 text-cyan-400" />
          </div>
          <h3 className="text-slate-400 text-sm font-medium mb-1">Bornes disponibles</h3>
          <p className="text-3xl font-bold text-white">{rechargeData.networkMetrics.bornesActives}/{rechargeData.networkMetrics.totalBornes}</p>
          <p className="text-xs text-slate-500 mt-2">Taux disponibilité: {((rechargeData.networkMetrics.bornesActives / rechargeData.networkMetrics.totalBornes) * 100).toFixed(0)}%</p>
        </div>

        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:shadow-xl hover:shadow-green-500/10 transition-all">
          <div className="p-3 bg-green-500/20 rounded-xl w-fit mb-3">
            <Zap className="w-6 h-6 text-green-400" />
          </div>
          <h3 className="text-slate-400 text-sm font-medium mb-1">kWh distribués (mois)</h3>
          <p className="text-3xl font-bold text-white">{(rechargeData.networkMetrics.kwhDistribuesMois / 1000).toFixed(1)}k</p>
          <p className="text-xs text-slate-500 mt-2">Aujourd'hui: {rechargeData.networkMetrics.kwhDistribuesAujourdhui} kWh</p>
        </div>

        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:shadow-xl hover:shadow-yellow-500/10 transition-all">
          <div className="p-3 bg-yellow-500/20 rounded-xl w-fit mb-3">
            <DollarSign className="w-6 h-6 text-yellow-400" />
          </div>
          <h3 className="text-slate-400 text-sm font-medium mb-1">Revenus (mois)</h3>
          <p className="text-2xl font-bold text-white">{(rechargeData.networkMetrics.revenusMois / 1000000).toFixed(2)}M</p>
          <p className="text-xs text-slate-500 mt-2">FCFA • Aujourd'hui: {formatCurrency(rechargeData.networkMetrics.revenusAujourdhui)}</p>
        </div>
      </div>

      {/* Graphiques */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Activity className="w-5 h-5 text-blue-400" />
            Utilisation horaire (Aujourd'hui)
          </h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={rechargeData.hourlyUsage}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="hour" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                formatter={(value, name) => {
                  if (name === 'sessions') return [value + ' sessions', 'Sessions'];
                  if (name === 'kwh') return [value + ' kWh', 'Énergie'];
                  return [value, name];
                }}
              />
              <Bar dataKey="sessions" fill="#3B82F6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-400" />
            Évolution mensuelle
          </h3>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={rechargeData.monthlyTrends}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                formatter={(value, name) => {
                  if (name === 'kwh') return [(value/1000).toFixed(1) + 'k kWh', 'Énergie'];
                  if (name === 'sessions') return [value + ' sessions', 'Sessions'];
                  return [value, name];
                }}
              />
              <Line type="monotone" dataKey="kwh" stroke="#10B981" strokeWidth={3} dot={{ fill: '#10B981', r: 5 }} />
              <Line type="monotone" dataKey="sessions" stroke="#3B82F6" strokeWidth={2} dot={{ fill: '#3B82F6', r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Sessions en cours */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Activity className="w-6 h-6 text-blue-400" />
            Sessions de Recharge en Cours ({rechargeData.activeSessions.length})
          </h3>
          
          <div className="space-y-4">
            {rechargeData.activeSessions.map(session => (
              <div key={session.id} className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50 hover:border-blue-500/50 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-white">{session.vehicle}</h4>
                    <p className="text-sm text-slate-400">{session.station} • {session.borne}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-blue-400">{session.progression}%</p>
                    <p className="text-xs text-slate-400">Début: {session.debut}</p>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-400">{session.kwhDelivered.toFixed(1)} / {session.kwhTarget.toFixed(1)} kWh</span>
                    <span className="text-white">{session.dureeEstimee - Math.floor(session.dureeEstimee * session.progression / 100)} min restantes</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-cyan-600 h-2 rounded-full transition-all"
                      style={{ width: `${session.progression}%` }}
                    />
                  </div>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Coût estimé</span>
                  <span className="text-green-400 font-semibold">{formatCurrency(session.cout)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Liste des Stations */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-blue-400" />
            Réseau de Stations ({rechargeData.stations.length})
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rechargeData.stations.map(station => (
              <div
                key={station.id}
                onClick={() => setSelectedStation(station)}
                className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{station.name}</h4>
                    <p className="text-sm text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {station.location.address}
                    </p>
                  </div>
                  <span className={`${getStatusColor(station.status)} text-white text-xs px-3 py-1 rounded-full font-semibold`}>
                    {getStatusText(station.status)}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                    <p className="text-2xl font-bold text-white">{station.bornes}</p>
                    <p className="text-xs text-slate-400">Bornes</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                    <p className="text-2xl font-bold text-green-400">{station.bornesDisponibles}</p>
                    <p className="text-xs text-slate-400">Disponibles</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                    <p className="text-2xl font-bold text-blue-400">{station.utilisation}%</p>
                    <p className="text-xs text-slate-400">Utilisation</p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  {station.typesBornes.map((type, idx) => (
                    <div key={idx} className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">{type.type}</span>
                      <span className="text-white font-semibold">×{type.count}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-700 grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-slate-400">kWh/24h</p>
                    <p className="text-white font-semibold">{station.kwh24h}</p>
                  </div>
                  <div>
                    <p className="text-slate-400">Revenus/24h</p>
                    <p className="text-green-400 font-semibold">{formatCurrency(station.revenus24h)}</p>
                  </div>
                </div>

                {station.maintenance && (
                  <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                    <p className="text-yellow-400 text-sm font-semibold mb-1">Maintenance en cours</p>
                    <p className="text-slate-300 text-xs">{station.maintenance.type}</p>
                    <p className="text-slate-400 text-xs mt-1">Fin prévue: {station.maintenance.finPrevue}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Planning Expansion */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-green-400" />
            Planning d'Expansion 2026
          </h3>
          
          <div className="space-y-6">
            {rechargeData.expansionPlan.map((phase, idx) => (
              <div key={idx} className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
                <h4 className="text-xl font-bold text-white mb-4">{phase.phase}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {phase.stations.map((station, sidx) => (
                    <div key={sidx} className="bg-slate-800/50 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h5 className="text-lg font-bold text-white">{station.name}</h5>
                          <p className="text-sm text-slate-400">{station.location}</p>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                          station.status === 'Planifié' ? 'bg-blue-500/20 text-blue-400' :
                          station.status === 'Étude' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-slate-500/20 text-slate-400'
                        }`}>
                          {station.status}
                        </span>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-400">Bornes</span>
                          <span className="text-white font-semibold">{station.bornes}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Budget</span>
                          <span className="text-green-400 font-semibold">{(station.budget / 1000000).toFixed(0)}M FCFA</span>
                        </div>
                        <div className="text-slate-400">
                          {station.types.join(' • ')}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto text-center text-slate-500 text-sm">
        <p>⚡ Makaya Recharge - Réseau de Bornes Électriques • Made with 💚 for Sustainable Mobility</p>
      </div>
    </div>
  );
};

export default MakayaRecharge;
