import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, DollarSign, Users, Zap, AlertTriangle, CheckCircle, Download, FileText, Calendar, Target, Award, Shield, Activity, ArrowUp, ArrowDown, Crown } from 'lucide-react';
import { businessPlanData } from '../data/businessPlanEnrichedData';

const DashboardPrincipal = () => {
  const [liveUpdate, setLiveUpdate] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  const data = businessPlanData;

  const formatCurrency = (value) => new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 0 }).format(value) + ' FCFA';
  const formatNumber = (value, decimals = 0) => new Intl.NumberFormat('fr-FR', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }).format(value);

  const getTrendIcon = (value) => value > 0 ? <ArrowUp className="w-4 h-4 text-green-400" /> : <ArrowDown className="w-4 h-4 text-red-400" />;
  const getTrendColor = (value) => value > 0 ? 'text-green-400 bg-green-500/10' : 'text-red-400 bg-red-500/10';

  const tabs = [
    { id: 'overview', label: 'Vue Globale', icon: Activity },
    { id: 'repartition', label: 'Répartition CA', icon: DollarSign },
    { id: 'alertes', label: 'Alertes & Risques', icon: AlertTriangle },
    { id: 'scenarios', label: 'Scénarios', icon: Target },
    { id: 'roadmap', label: 'Roadmap', icon: Calendar },
    { id: 'export', label: 'Export', icon: Download }
  ];

  const MetricCard = ({ icon: Icon, title, value, unit, subtitle, trend, gradient, comparison }) => (
    <div className={`relative bg-gradient-to-br ${gradient} backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:scale-105 transition-all duration-300 hover:shadow-2xl group`}>
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-white/10 rounded-xl"><Icon className="w-6 h-6 text-white" /></div>
        {trend !== undefined && <span className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${getTrendColor(trend)}`}>{getTrendIcon(trend)}{Math.abs(trend)}%</span>}
      </div>
      <h3 className="text-slate-300 text-sm font-medium mb-1">{title}</h3>
      <p className="text-4xl font-bold text-white mb-2">{value} {unit && <span className="text-xl">{unit}</span>}</p>
      {subtitle && <p className="text-xs text-slate-300">{subtitle}</p>}
      {comparison && <div className="mt-3 pt-3 border-t border-white/10"><p className="text-xs text-slate-400">vs Prévision: <span className={comparison.ecart < 0 ? 'text-red-400 font-semibold' : 'text-green-400 font-semibold'}>{comparison.ecart}%</span></p></div>}
    </div>
  );

  const AlertCard = ({ alert }) => {
    const severity = { critical: { bg: 'from-red-900/30', border: 'border-red-500/50', iconColor: 'text-red-500', badge: 'bg-red-500/20 text-red-400' }, warning: { bg: 'from-orange-900/30', border: 'border-orange-500/50', iconColor: 'text-orange-500', badge: 'bg-orange-500/20 text-orange-400' } };
    const style = severity[alert.severite];
    return (
      <div className={`bg-gradient-to-br ${style.bg} rounded-xl p-6 border ${style.border}`}>
        <div className="flex items-start gap-4">
          <AlertTriangle className={`w-7 h-7 ${style.iconColor}`} />
          <div className="flex-1">
            <div className="flex items-start justify-between mb-3">
              <div><h4 className="text-xl font-bold text-white mb-1">{alert.titre}</h4><span className={`text-xs px-2 py-1 rounded-full font-semibold ${style.badge}`}>{alert.type}</span></div>
              <span className="text-xs text-slate-400">{alert.dateDetection}</span>
            </div>
            <p className="text-slate-300 mb-4">{alert.description}</p>
            {alert.actions && <div><p className="text-sm font-semibold text-slate-200 mb-2">Actions:</p><ul className="space-y-1">{alert.actions.map((a, i) => <li key={i} className="text-sm text-slate-300 flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />{a}</li>)}</ul></div>}
          </div>
        </div>
      </div>
    );
  };

  const handleExport = (format) => alert(`Export ${format} en cours...\nFonctionnalité disponible prochainement.`);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6">
      <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 mb-6 border border-white/10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-bold text-white mb-2 flex items-center gap-3">📊 Business Plan Global<span className="px-4 py-1 rounded-full text-lg bg-blue-500/20 text-blue-400 font-semibold">Série A</span></h1>
            <p className="text-slate-300 text-lg">{data.overview.nom} • {data.overview.slogan}</p>
            <div className="flex items-center gap-4 mt-3">
              <span className="text-sm text-slate-400">Valuation: <span className="text-white font-semibold">{formatCurrency(data.overview.valuation)}</span></span>
              <span>•</span>
              <span className="text-sm text-slate-400">Levée: <span className="text-blue-400 font-semibold">{data.overview.levee.avancement}%</span></span>
            </div>
          </div>
          <button onClick={() => setLiveUpdate(!liveUpdate)} className={`px-6 py-3 rounded-xl font-semibold transition ${liveUpdate ? 'bg-green-500/20 text-green-400' : 'bg-slate-500/20 text-slate-400'}`}>{liveUpdate ? '🟢 LIVE' : '⚫ PAUSE'}</button>
        </div>
      </div>

      <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-2xl mb-6 border border-white/10">
        <div className="flex gap-2 p-2 overflow-x-auto">
          {tabs.map(tab => {
            const Icon = tab.icon;
            return <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold transition-all whitespace-nowrap ${activeTab === tab.id ? 'bg-blue-500/20 text-blue-400' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}><Icon className="w-4 h-4" />{tab.label}</button>;
          })}
        </div>
      </div>

      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard icon={DollarSign} title="CA Annuel" value={formatNumber(data.globalMetrics.ca.annuel / 1000000)} unit="M" subtitle={`Mensuel: ${formatNumber(data.globalMetrics.ca.mensuel / 1000000)}M`} gradient="from-blue-700/80 to-blue-800/80" trend={data.globalMetrics.ca.ecart} comparison={{ ecart: data.globalMetrics.ca.ecart }} />
            <MetricCard icon={Users} title="Clients Actifs" value={formatNumber(data.globalMetrics.clients.actifs)} subtitle={`+${data.globalMetrics.clients.nouveaux30j} ce mois`} gradient="from-green-700/80 to-green-800/80" trend={12.5} />
            <MetricCard icon={Zap} title="Flotte" value={data.globalMetrics.vehicules.flotte} subtitle={`Utilisation: ${data.globalMetrics.vehicules.utilisation}%`} gradient="from-purple-700/80 to-purple-800/80" trend={8.2} />
            <MetricCard icon={Award} title="EBITDA" value={formatNumber(data.globalMetrics.financier.ebitda / 1000000)} unit="M" subtitle={`Marge: ${data.globalMetrics.financier.marge}%`} gradient="from-yellow-700/80 to-yellow-800/80" trend={5.3} />
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-8 border border-white/10">
            <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3"><Activity className="w-8 h-8 text-blue-400" />Contribution par Domaine</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {[
                { name: 'Makaya Ride', emoji: '🚕', data: data.ride, color: 'orange' },
                { name: 'Makaya Mobility', emoji: '🚗', data: data.mobility, color: 'green' },
                { name: 'Makaya Recharge', emoji: '⚡', data: data.recharge, color: 'yellow' }
              ].map(domain => (
                <div key={domain.name} className={`bg-gradient-to-br from-${domain.color}-900/30 to-${domain.color}-800/30 rounded-2xl p-6 border border-${domain.color}-500/30 hover:scale-105 transition-all`}>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-white">{domain.emoji} {domain.name}</h4>
                    <span className={`text-3xl font-bold text-${domain.color}-400`}>{domain.data.contributions.pourcentageCA}%</span>
                  </div>
                  <div className="space-y-3">
                    <div><p className="text-xs text-slate-400">CA Annuel</p><p className="text-2xl font-bold text-white">{formatNumber(domain.data.ca.annuel / 1000000)}M</p></div>
                    <div><p className="text-xs text-slate-400">Marge Nette</p><p className="text-lg font-bold text-green-400">{domain.data.contributions.margeNette}%</p></div>
                    <div className="pt-3 border-t border-white/10"><p className="text-xs text-slate-400">Écart prévision</p><p className={`text-lg font-bold ${domain.data.ca.ecart < 0 ? 'text-red-400' : 'text-green-400'}`}>{domain.data.ca.ecart}%</p></div>
                  </div>
                </div>
              ))}
            </div>

            <ResponsiveContainer width="100%" height={350}>
              <AreaChart data={data.tendancesCA}>
                <defs>
                  <linearGradient id="colorRide" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#f97316" stopOpacity={0.8}/><stop offset="95%" stopColor="#f97316" stopOpacity={0}/></linearGradient>
                  <linearGradient id="colorMobility" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/><stop offset="95%" stopColor="#10b981" stopOpacity={0}/></linearGradient>
                  <linearGradient id="colorRecharge" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#eab308" stopOpacity={0.8}/><stop offset="95%" stopColor="#eab308" stopOpacity={0}/></linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="mois" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '2px solid #3b82f6', borderRadius: '12px' }} />
                <Legend />
                <Area type="monotone" dataKey="ride" stroke="#f97316" fill="url(#colorRide)" name="Ride" />
                <Area type="monotone" dataKey="mobility" stroke="#10b981" fill="url(#colorMobility)" name="Mobility" />
                <Area type="monotone" dataKey="recharge" stroke="#eab308" fill="url(#colorRecharge)" name="Recharge" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {activeTab === 'repartition' && (
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-8 border border-white/10">
          <h3 className="text-3xl font-bold text-white mb-6">📊 Répartition CA</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie data={data.repartitionCA} dataKey="valeur" nameKey="domaine" cx="50%" cy="50%" outerRadius={120} label={(e) => `${e.part}%`}>
                  {data.repartitionCA.map((entry, i) => <Cell key={i} fill={entry.couleur} />)}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-4">
              {data.repartitionCA.map(d => (
                <div key={d.domaine} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-bold text-white">{d.domaine}</h4>
                    <span className="text-2xl font-bold" style={{ color: d.couleur }}>{d.part}%</span>
                  </div>
                  <p className="text-slate-300">{formatCurrency(d.valeur)}</p>
                  <div className="w-full bg-slate-700 rounded-full h-2 mt-3">
                    <div className="h-2 rounded-full" style={{ width: `${d.part}%`, backgroundColor: d.couleur }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'alertes' && (
        <div className="space-y-6">
          <div><h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><AlertTriangle className="w-6 h-6 text-red-500" />Alertes Critiques</h3><div className="space-y-4">{data.alertes.critiques.map(a => <AlertCard key={a.id} alert={a} />)}</div></div>
          <div><h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><AlertTriangle className="w-6 h-6 text-orange-500" />Avertissements</h3><div className="space-y-4">{data.alertes.warnings.map(a => <AlertCard key={a.id} alert={a} />)}</div></div>
        </div>
      )}

      {activeTab === 'scenarios' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {Object.entries(data.scenarios).map(([key, s]) => (
            <div key={key} className={`bg-gradient-to-br ${key === 'realiste' ? 'from-blue-900/30 border-blue-500/50' : key === 'optimiste' ? 'from-green-900/30 border-green-500/50' : 'from-slate-900/30 border-slate-500/50'} rounded-2xl p-6 border`}>
              <div className="flex items-center justify-between mb-4"><h3 className="text-2xl font-bold text-white">{s.nom}</h3>{key === 'realiste' && <Crown className="w-8 h-8 text-yellow-400" />}</div>
              <div className="space-y-2">
                <div className="flex justify-between"><span className="text-slate-300">CA 2026:</span><span className="text-white font-bold">{formatNumber(s.projections2026.ca / 1000000)}M</span></div>
                <div className="flex justify-between"><span className="text-slate-300">EBITDA:</span><span className="text-white font-bold">{formatNumber(s.projections2026.ebitda / 1000000)}M</span></div>
                <div className="flex justify-between"><span className="text-slate-300">Part marché:</span><span className="text-white font-bold">{s.projections2026.partDeMarche}%</span></div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'roadmap' && (
        <div className="space-y-6">
          {Object.entries(data.roadmap).map(([key, q]) => (
            <div key={key} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">{q.periode}</h3>
                <span className="px-4 py-2 rounded-xl bg-blue-500/20 text-blue-400 font-semibold">Budget: {formatNumber(q.budget / 1000000)}M</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {q.priorites.map((p, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                    <div className="flex items-start justify-between mb-2">
                      <p className="text-white font-semibold">{p.item}</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${p.status === 'en_cours' ? 'bg-blue-500/20 text-blue-400' : 'bg-slate-500/20 text-slate-400'}`}>{p.status.replace('_', ' ')}</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2"><div className="bg-blue-500 h-2 rounded-full" style={{ width: `${p.completion}%` }} /></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'export' && (
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-8 border border-white/10">
          <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3"><Download className="w-8 h-8 text-blue-400" />Exporter les Données</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.exports.disponibles.map((exp, i) => (
              <button key={i} onClick={() => handleExport(exp.format)} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800/70 transition-all text-left">
                <FileText className="w-12 h-12 text-blue-400 mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">{exp.format}</h4>
                <p className="text-sm text-slate-400 mb-1">{exp.type}</p>
                <p className="text-xs text-slate-500">{exp.taille}</p>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardPrincipal;