import React, { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';
import { Leaf, TrendingDown, TrendingUp, Award, AlertTriangle, Download, X, Zap, Target, Users, MapPin, Calendar, FileText, BarChart3, Wind, Droplet, Sun, CloudRain, ThermometerSun, Activity, CheckCircle, XCircle, AlertCircle, ArrowUp, ArrowDown, Minus, Star, Trophy, Medal, Crown, Shield, Sparkles } from 'lucide-react';
import { cieData } from '../data/cieData';

const CIEModal = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [animatedScore, setAnimatedScore] = useState(0);
  const [liveUpdate, setLiveUpdate] = useState(true);

  useEffect(() => {
    let start = 0;
    const end = cieData.globalCarbonScore.score;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setAnimatedScore(end);
        clearInterval(timer);
      } else {
        setAnimatedScore(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!liveUpdate) return;
    const interval = setInterval(() => {
      // Simulation mise à jour temps réel
    }, 3000);
    return () => clearInterval(interval);
  }, [liveUpdate]);

  const formatNumber = (num, decimals = 0) => {
    return new Intl.NumberFormat('fr-FR', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }).format(num);
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('fr-FR').format(value) + ' FCFA';
  };

  const tabs = [
    { id: 'overview', label: 'Vue d\'ensemble', icon: BarChart3, color: 'green' },
    { id: 'forecast', label: 'Prévisions 36 mois', icon: TrendingUp, color: 'blue' },
    { id: 'vehicles', label: 'Performance Véhicules', icon: Zap, color: 'purple' },
    { id: 'drivers', label: 'Top Chauffeurs Éco', icon: Users, color: 'yellow' },
    { id: 'zones', label: 'Heatmap Zones', icon: MapPin, color: 'red' },
    { id: 'anomalies', label: 'Alertes & Anomalies', icon: AlertTriangle, color: 'orange' }
  ];

  const getGradeColor = (grade) => {
    const colors = { 'A+': 'text-green-400', 'A': 'text-green-500', 'B': 'text-yellow-400', 'C': 'text-orange-400', 'D': 'text-red-400' };
    return colors[grade] || 'text-slate-400';
  };

  const getGradeBg = (grade) => {
    const colors = { 'A+': 'bg-green-500/20', 'A': 'bg-green-500/20', 'B': 'bg-yellow-500/20', 'C': 'bg-orange-500/20', 'D': 'bg-red-500/20' };
    return colors[grade] || 'bg-slate-500/20';
  };

  const MetricCard = ({ icon: Icon, title, value, unit, subtitle, trend, gradient, sparkle }) => (
    <div className={`relative bg-gradient-to-br ${gradient} backdrop-blur-xl rounded-2xl p-6 border border-green-500/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/30 group overflow-hidden`}>
      {sparkle && <div className="absolute top-2 right-2"><Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" /></div>}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 bg-white/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6 text-white" />
          </div>
          {trend && (
            <span className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full font-semibold ${trend.startsWith('+') ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
              {trend.startsWith('+') ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
              {trend}
            </span>
          )}
        </div>
        <h3 className="text-slate-300 text-sm font-medium mb-1">{title}</h3>
        <p className="text-4xl font-bold text-white mb-2">{value} <span className="text-xl">{unit}</span></p>
        {subtitle && <p className="text-xs text-green-200">{subtitle}</p>}
      </div>
    </div>
  );

  const VehicleCard = ({ vehicle }) => (
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-5 border border-green-500/20 hover:border-green-500/50 transition-all hover:shadow-xl">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="text-lg font-bold text-white flex items-center gap-2">
            {vehicle.vehicle}
            {vehicle.rank <= 3 && <Crown className="w-5 h-5 text-yellow-400" />}
          </h4>
          <p className="text-sm text-slate-400">{vehicle.model}</p>
        </div>
        <div className={`px-3 py-1 rounded-full text-sm font-bold ${getGradeColor(vehicle.grade)} ${getGradeBg(vehicle.grade)}`}>
          {vehicle.grade}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div><p className="text-xs text-slate-400 mb-1">CO₂ évité</p><p className="text-xl font-bold text-green-400">{formatNumber(vehicle.co2Avoided, 1)}t</p></div>
        <div><p className="text-xs text-slate-400 mb-1">Efficacité</p><p className="text-xl font-bold text-blue-400">{formatNumber(vehicle.efficiency, 1)} kWh</p></div>
        <div><p className="text-xs text-slate-400 mb-1">Distance</p><p className="text-xl font-bold text-purple-400">{formatNumber(vehicle.totalKm)} km</p></div>
        <div><p className="text-xs text-slate-400 mb-1">Courses</p><p className="text-xl font-bold text-yellow-400">{formatNumber(vehicle.totalTrips)}</p></div>
      </div>
      <div className="w-full bg-slate-700 rounded-full h-2">
        <div className="bg-gradient-to-r from-green-500 to-emerald-400 h-2 rounded-full transition-all duration-1000" style={{ width: `${vehicle.score}%` }} />
      </div>
      <p className="text-xs text-slate-400 mt-2 text-center">Score: {vehicle.score}/100</p>
    </div>
  );

  const DriverCard = ({ driver }) => (
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-5 border border-yellow-500/20 hover:border-yellow-500/50 transition-all hover:shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-full blur-3xl" />
      <div className="relative">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative">
            <img src={driver.photo} alt={driver.name} className="w-16 h-16 rounded-full border-2 border-yellow-500/50" />
            {driver.rank === 1 && <div className="absolute -top-1 -right-1 bg-yellow-500 rounded-full p-1"><Crown className="w-4 h-4 text-white" /></div>}
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-white">#{driver.rank} {driver.name}</h4>
            <div className="flex items-center gap-2 mt-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-yellow-400 font-semibold">{driver.ecoScore}/100</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${getGradeBg(driver.grade)} ${getGradeColor(driver.grade)}`}>{driver.grade}</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 mb-3">
          <div className="text-center"><p className="text-xs text-slate-400">CO₂</p><p className="text-lg font-bold text-green-400">{formatNumber(driver.co2Avoided, 1)}t</p></div>
          <div className="text-center"><p className="text-xs text-slate-400">Courses</p><p className="text-lg font-bold text-blue-400">{driver.totalTrips}</p></div>
          <div className="text-center"><p className="text-xs text-slate-400">Efficacité</p><p className="text-lg font-bold text-purple-400">{formatNumber(driver.avgEfficiency, 1)}</p></div>
        </div>
      </div>
    </div>
  );

  const ZoneCard = ({ zone }) => (
    <div className={`bg-gradient-to-br ${zone.activity === 'Très Élevée' ? 'from-red-900/30 to-orange-900/30 border-red-500/30' : 'from-green-900/30 to-emerald-900/30 border-green-500/30'} rounded-xl p-5 border hover:scale-105 transition-all`}>
      <div className="flex items-start justify-between mb-3">
        <div><h4 className="text-lg font-bold text-white">{zone.zone}</h4><p className="text-sm text-slate-400">{zone.district}</p></div>
        <div className={`px-3 py-1 rounded-full text-xs font-bold ${zone.activity === 'Très Élevée' ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'}`}>{zone.activity}</div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div><p className="text-xs text-slate-400">CO₂</p><p className="text-xl font-bold text-green-400">{formatNumber(zone.co2Avoided, 1)}t</p></div>
        <div><p className="text-xs text-slate-400">Courses</p><p className="text-xl font-bold text-blue-400">{zone.totalTrips}</p></div>
      </div>
    </div>
  );

  const AnomalyCard = ({ anomaly }) => {
    const Icon = anomaly.severity === 'critical' ? XCircle : AlertCircle;
    const colors = { critical: { bg: 'from-red-900/30', border: 'border-red-500/50', text: 'text-red-400' }, warning: { bg: 'from-orange-900/30', border: 'border-orange-500/50', text: 'text-orange-400' } };
    const style = colors[anomaly.severity];
    return (
      <div className={`bg-gradient-to-br ${style.bg} rounded-xl p-5 border ${style.border}`}>
        <div className="flex items-start gap-4">
          <Icon className={`w-6 h-6 ${style.text} flex-shrink-0`} />
          <div className="flex-1">
            <h4 className="text-lg font-bold text-white mb-2">{anomaly.title}</h4>
            <p className="text-sm text-slate-300 mb-3">{anomaly.description}</p>
            <span className="text-xs text-slate-400">Véhicule: <span className="text-white font-semibold">{anomaly.vehicle}</span></span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-gradient-to-br from-green-950/98 via-slate-900/98 to-black/98 rounded-3xl max-w-[95vw] w-full max-h-[95vh] overflow-y-auto border border-green-500/30 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-green-800/95 via-emerald-900/95 to-green-800/95 backdrop-blur-xl border-b border-green-500/30 p-6 z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-green-500 blur-2xl opacity-50 animate-pulse" />
                <div className="relative p-3 bg-green-500/20 rounded-2xl border border-green-500/50">
                  <Leaf className="w-10 h-10 text-green-400" />
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-white flex items-center gap-3">
                  Carbon Intelligence Engine
                  <span className={`px-4 py-1 rounded-full text-2xl font-bold ${getGradeColor(cieData.globalCarbonScore.grade)} ${getGradeBg(cieData.globalCarbonScore.grade)} animate-pulse`}>
                    {cieData.globalCarbonScore.grade}
                  </span>
                </h2>
                <p className="text-green-200">🌿 Système de gestion environnementale • Makaya Ride</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => setLiveUpdate(!liveUpdate)} className={`px-4 py-2 rounded-xl font-semibold ${liveUpdate ? 'bg-green-500/20 text-green-400' : 'bg-slate-500/20 text-slate-400'}`}>
                {liveUpdate ? '🟢 LIVE' : '⚫ PAUSE'}
              </button>
              <button onClick={onClose} className="w-12 h-12 bg-red-500/20 hover:bg-red-500/40 rounded-full flex items-center justify-center text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="sticky top-[100px] bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-xl border-b border-green-500/20 px-6 z-10">
          <div className="flex gap-2 overflow-x-auto">
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-2 px-5 py-3 font-semibold transition-all whitespace-nowrap ${activeTab === tab.id ? 'text-green-400 border-b-2 border-green-400' : 'text-slate-400 hover:text-white'}`}>
                  <Icon className="w-4 h-4" />{tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="relative bg-gradient-to-r from-green-600 via-emerald-700 to-green-600 rounded-3xl p-10 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <p className="text-green-100 mb-3 text-lg">Score Carbone Dynamique Global</p>
                      <div className="flex items-baseline gap-6">
                        <h3 className="text-8xl font-bold">{animatedScore}</h3>
                        <span className="text-5xl font-bold">/100</span>
                        <span className="text-3xl px-6 py-2 rounded-2xl bg-white/20 font-bold">{cieData.globalCarbonScore.grade}</span>
                      </div>
                    </div>
                    <Award className="w-32 h-32 text-yellow-300" />
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    <div className="bg-white/10 backdrop-blur rounded-2xl p-5"><p className="text-green-100 text-sm mb-2">Tendance</p><p className="text-3xl font-bold">{cieData.globalCarbonScore.trend}</p></div>
                    <div className="bg-white/10 backdrop-blur rounded-2xl p-5"><p className="text-green-100 text-sm mb-2">Objectif</p><p className="text-3xl font-bold">{cieData.globalCarbonScore.targetAchievement}%</p></div>
                    <div className="bg-white/10 backdrop-blur rounded-2xl p-5"><p className="text-green-100 text-sm mb-2">CO₂ annuel</p><p className="text-3xl font-bold">{formatNumber(cieData.globalCarbonScore.co2AvoidedTotal, 1)}t</p></div>
                    <div className="bg-white/10 backdrop-blur rounded-2xl p-5"><p className="text-green-100 text-sm mb-2">Arbres</p><p className="text-3xl font-bold">{formatNumber(cieData.globalCarbonScore.co2AvoidedTotal * 50)}</p></div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-6">
                <MetricCard icon={TrendingDown} title="CO₂ Aujourd'hui" value={formatNumber(cieData.realTimeData.co2AvoidedToday / 1000, 2)} unit="t" subtitle={`🌳 ${cieData.realTimeData.equivalentTrees} arbres`} gradient="from-green-700/80 to-emerald-800/80" trend="+8.2%" sparkle />
                <MetricCard icon={Zap} title="Kilomètres" value={formatNumber(cieData.realTimeData.totalKmToday)} unit="km" subtitle={`⚡ ${cieData.realTimeData.activeVehicles}/6 actifs`} gradient="from-blue-700/80 to-cyan-800/80" trend="+5.1%" />
                <MetricCard icon={Target} title="Efficacité" value={formatNumber(cieData.realTimeData.avgEfficiency, 1)} unit="kWh" subtitle="🎯 vs 16.0 nominal" gradient="from-purple-700/80 to-indigo-800/80" trend="+3.1%" />
                <MetricCard icon={Leaf} title="Énergie Verte" value={formatNumber(cieData.realTimeData.totalKwHToday)} unit="kWh" subtitle="💚 100% propre" gradient="from-emerald-700/80 to-green-800/80" sparkle />
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-8 border border-green-500/20">
                <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3"><TrendingUp className="w-8 h-8 text-green-400" />Évolution CO₂ Évité</h3>
                <ResponsiveContainer width="100%" height={350}>
                  <AreaChart data={cieData.monthlyTrends}>
                    <defs>
                      <linearGradient id="colorCO2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="month" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '2px solid #10b981', borderRadius: '12px' }} />
                    <Area type="monotone" dataKey="co2Avoided" stroke="#10B981" strokeWidth={3} fill="url(#colorCO2)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {/* FORECAST */}
          {activeTab === 'forecast' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-3xl p-8 border border-blue-500/30">
                <h3 className="text-3xl font-bold text-white mb-6">📈 Prévisions 12-36 mois</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={cieData.forecast}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="month" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '2px solid #3b82f6', borderRadius: '12px' }} />
                    <Legend />
                    <Line type="monotone" dataKey="co2Forecast" stroke="#3b82f6" strokeWidth={3} name="CO₂ prévu (t)" />
                    <Line type="monotone" dataKey="kmForecast" stroke="#10b981" strokeWidth={3} name="Km prévus" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {/* VEHICLES */}
          {activeTab === 'vehicles' && (
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">🚗 Performance Véhicules</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cieData.vehiclePerformance.map(v => <VehicleCard key={v.vehicle} vehicle={v} />)}
              </div>
            </div>
          )}

          {/* DRIVERS */}
          {activeTab === 'drivers' && (
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">🏆 Top Chauffeurs Éco-responsables</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cieData.topDrivers.map(d => <DriverCard key={d.name} driver={d} />)}
              </div>
            </div>
          )}

          {/* ZONES */}
          {activeTab === 'zones' && (
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">🗺️ Heatmap Zones Lomé</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cieData.zoneHeatmap.map(z => <ZoneCard key={z.zone} zone={z} />)}
              </div>
            </div>
          )}

          {/* ANOMALIES */}
          {activeTab === 'anomalies' && (
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">⚠️ Alertes & Anomalies</h3>
              <div className="space-y-4">
                {cieData.anomalies.map((a, i) => <AnomalyCard key={i} anomaly={a} />)}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-green-500/20 p-6 bg-slate-900/50">
          <div className="flex items-center justify-between">
            <p className="text-slate-400 text-sm">🌿 CIE v1.0 • Mis à jour: {new Date().toLocaleString('fr-FR')}</p>
            <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-lg flex items-center gap-2">
              <Download className="w-4 h-4" />Exporter PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CIEModal;