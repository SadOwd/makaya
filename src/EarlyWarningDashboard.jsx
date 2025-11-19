import React, { useState } from 'react';
import { 
  TrendingUp, Users, DollarSign, Target, Calendar, 
  AlertTriangle, FileText, Calculator, Zap, Shield,
  Award, CheckCircle, Clock, ArrowRight, TrendingDown,
  BarChart3, PieChart, LineChart, Activity, Sparkles,
  Rocket, Star, Trophy, BadgeCheck, ChevronRight,
  MapPin, Phone, Mail, Building2, Flame, Leaf, Download,
  Bell, RefreshCw, AlertCircle, XCircle
} from 'lucide-react';

// Import du Early Warning System
const EarlyWarningDashboard = () => {
  const [currentPeriod, setCurrentPeriod] = useState('2027-Q2');
  const [isLive, setIsLive] = useState(true);

  // Données Monte Carlo simplifiées
  const monteCarloBaseline = {
    '2027-Q2': { volumesCumulés: 156, caTotal: 1.94, ebitdaMarge: 0.43, tauxLLD: 0.46 },
    '2027-Q3': { volumesCumulés: 219, caTotal: 2.78, ebitdaMarge: 0.44, tauxLLD: 0.47 },
    '2027-Q4': { volumesCumulés: 305, caTotal: 4.12, ebitdaMarge: 0.46, tauxLLD: 0.48 },
  };

  const indicators = [
    { id: 'volumesCumulés', name: 'Volumes VE', icon: '🚗', unit: 'unités' },
    { id: 'caTotal', name: 'CA Total', icon: '💰', unit: 'Md FCFA' },
    { id: 'ebitdaMarge', name: 'Marge EBITDA', icon: '📊', unit: '%' },
    { id: 'tauxLLD', name: 'Taux LLD', icon: '🔄', unit: '%' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <Activity className={`w-10 h-10 ${isLive ? 'text-green-400 animate-pulse' : 'text-slate-500'}`} />
            <div>
              <h2 className="text-2xl font-bold text-white">Early Warning System</h2>
              <p className="text-slate-400 text-sm">Surveillance en temps réel vs Monte Carlo</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsLive(!isLive)}
              className={`px-4 py-2 rounded-lg font-semibold transition flex items-center gap-2 ${
                isLive ? 'bg-green-600 hover:bg-green-700' : 'bg-slate-700 hover:bg-slate-600'
              } text-white`}
            >
              <RefreshCw className={`w-4 h-4 ${isLive ? 'animate-spin' : ''}`} />
              <span>{isLive ? 'LIVE' : 'PAUSED'}</span>
            </button>
            <select
              value={currentPeriod}
              onChange={(e) => setCurrentPeriod(e.target.value)}
              className="bg-slate-700 text-white px-4 py-2 rounded-lg border border-slate-600"
            >
              {Object.keys(monteCarloBaseline).map(period => (
                <option key={period} value={period}>{period}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Score Santé */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-slate-900 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-400 text-sm">Score Santé Global</span>
              <Target className="w-5 h-5 text-green-400" />
            </div>
            <div className="text-4xl font-bold text-green-400 mb-1">87%</div>
            <div className="text-sm font-semibold text-green-400">Excellent</div>
            <div className="w-full h-2 bg-slate-700 rounded-full mt-2 overflow-hidden">
              <div className="h-full bg-green-400" style={{ width: '87%' }} />
            </div>
          </div>

          <div className="bg-slate-900 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-400 text-sm">Alertes Actives</span>
              <Bell className="w-5 h-5 text-orange-400" />
            </div>
            <div className="text-4xl font-bold text-white mb-1">2</div>
            <div className="text-sm text-slate-400">1 critique, 1 warning</div>
          </div>

          <div className="bg-slate-900 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-400 text-sm">Dernière MAJ</span>
              <Calendar className="w-5 h-5 text-blue-400" />
            </div>
            <div className="text-xl font-bold text-white mb-1">
              {new Date().toLocaleTimeString('fr-FR')}
            </div>
            <div className="text-sm text-slate-400">Période: {currentPeriod}</div>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {indicators.map((indicator, idx) => {
          const baseline = monteCarloBaseline[currentPeriod][indicator.id];
          const actual = baseline * (0.9 + Math.random() * 0.2);
          const deviation = ((actual - baseline) / baseline) * 100;
          const status = Math.abs(deviation) > 15 ? 'critical' : Math.abs(deviation) > 10 ? 'warning' : 'ok';

          return (
            <div
              key={indicator.id}
              className={`bg-slate-800 rounded-xl p-5 border-2 transition-all ${
                status === 'critical' ? 'border-red-500' :
                status === 'warning' ? 'border-orange-500' :
                'border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl">{indicator.icon}</span>
                {status === 'ok' && <CheckCircle className="w-6 h-6 text-green-400" />}
                {status === 'warning' && <AlertCircle className="w-6 h-6 text-orange-400" />}
                {status === 'critical' && <XCircle className="w-6 h-6 text-red-400" />}
              </div>

              <h3 className="text-sm font-semibold text-slate-400 mb-2">{indicator.name}</h3>

              <div className="flex items-baseline gap-2 mb-2">
                <div className="text-3xl font-bold text-white">
                  {indicator.unit === '%' ? (actual * 100).toFixed(1) + '%' : actual.toFixed(2)}
                </div>
                <div className={`text-sm font-semibold ${deviation > 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {deviation > 0 ? '▲' : '▼'} {Math.abs(deviation).toFixed(1)}%
                </div>
              </div>

              <div className="text-xs text-slate-500 mb-3">
                vs {indicator.unit === '%' ? (baseline * 100).toFixed(1) + '%' : baseline.toFixed(2)} (Monte Carlo)
              </div>

              <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all ${
                    status === 'critical' ? 'bg-red-500' :
                    status === 'warning' ? 'bg-orange-500' :
                    'bg-green-500'
                  }`}
                  style={{ width: `${Math.min(100, (actual / baseline) * 100)}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Alerte Critique */}
      <div className="bg-gradient-to-r from-red-950 to-orange-950 border border-red-800 rounded-xl p-6">
        <div className="flex items-center mb-4">
          <AlertTriangle className="w-6 h-6 text-red-400 mr-3 animate-pulse" />
          <h3 className="text-xl font-bold text-white">🚨 Alerte Critique</h3>
        </div>
        <div className="bg-black bg-opacity-40 rounded-lg p-4 border-l-4 border-red-500">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">📊</span>
                <h4 className="text-lg font-bold text-white">Marge EBITDA</h4>
                <span className="ml-3 px-3 py-1 rounded-full text-xs font-bold bg-red-600 text-white">
                  CRITIQUE
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4 text-sm mb-3">
                <div>
                  <span className="text-slate-400">Réel:</span>
                  <span className="ml-2 font-mono text-white font-bold">38.5%</span>
                </div>
                <div>
                  <span className="text-slate-400">Attendu:</span>
                  <span className="ml-2 font-mono text-slate-300">43.0%</span>
                </div>
                <div>
                  <span className="text-slate-400">Écart:</span>
                  <span className="ml-2 font-mono font-bold text-red-400">-10.5%</span>
                </div>
              </div>
              <div className="bg-slate-900 rounded p-3">
                <div className="text-xs font-bold text-yellow-400 mb-1">📋 PLAN D'ACTION:</div>
                <div className="text-sm text-slate-200">
                  Réduction OPEX -10%, renégociation fournisseurs sous 48h
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simulation What-If */}
      <div className="bg-gradient-to-br from-purple-950 to-indigo-950 rounded-xl p-6 border border-purple-700">
        <h3 className="text-xl font-bold text-white mb-4">🔮 Simulation "What-If"</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-black bg-opacity-40 rounded p-4">
            <h4 className="font-bold text-purple-200 mb-3">📉 Si Écarts Persistent</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-purple-300">EBITDA 2030:</span>
                <span className="text-red-400 font-mono font-bold">14.2 Md</span>
              </div>
              <div className="flex justify-between">
                <span className="text-purple-300">vs Baseline:</span>
                <span className="text-red-400 font-mono">-22%</span>
              </div>
            </div>
          </div>

          <div className="bg-black bg-opacity-40 rounded p-4">
            <h4 className="font-bold text-blue-200 mb-3">⚡ Corrections Partielles</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-blue-300">EBITDA 2030:</span>
                <span className="text-yellow-400 font-mono font-bold">16.8 Md</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-300">vs Baseline:</span>
                <span className="text-yellow-400 font-mono">-8%</span>
              </div>
            </div>
          </div>

          <div className="bg-black bg-opacity-40 rounded p-4">
            <h4 className="font-bold text-green-200 mb-3">✅ Corrections Complètes</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-green-300">EBITDA 2030:</span>
                <span className="text-green-400 font-mono font-bold">19.2 Md</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-300">vs Baseline:</span>
                <span className="text-green-400 font-mono">+3%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarlyWarningDashboard;
