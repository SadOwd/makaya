import React, { useState, useEffect } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Car, Battery, TrendingUp, Users, DollarSign, MapPin, Star, Clock, Activity, Zap, Leaf } from 'lucide-react';
import { rideData } from '../data/rideData';
import { cieData } from '../data/cieData';
import CIEModal from '../components/CIEModal';

const MakayaRide = () => {
  const [liveUpdate, setLiveUpdate] = useState(true);
  const [selectedPeriod, setSelectedPeriod] = useState('today');
  const [showCIE, setShowCIE] = useState(false);
  const [animatedMetrics, setAnimatedMetrics] = useState({
    dailyRides: 0,
    activeDrivers: 0,
    dailyRevenue: 0,
    occupancyRate: 0
  });

  // Animation des KPIs au chargement
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setAnimatedMetrics({
        dailyRides: Math.floor(rideData.metrics.dailyRides * progress),
        activeDrivers: Math.floor(rideData.metrics.activeDrivers * progress),
        dailyRevenue: Math.floor(rideData.metrics.dailyRevenue * progress),
        occupancyRate: (rideData.metrics.occupancyRate * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedMetrics({
          dailyRides: rideData.metrics.dailyRides,
          activeDrivers: rideData.metrics.activeDrivers,
          dailyRevenue: rideData.metrics.dailyRevenue,
          occupancyRate: rideData.metrics.occupancyRate
        });
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // Simulation mise à jour en temps réel
  useEffect(() => {
    if (!liveUpdate) return;

    const interval = setInterval(() => {
      // Simulation de petites variations
      setAnimatedMetrics(prev => ({
        ...prev,
        dailyRides: prev.dailyRides + Math.floor(Math.random() * 3),
        dailyRevenue: prev.dailyRevenue + Math.floor(Math.random() * 10000)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, [liveUpdate]);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('fr-FR').format(value) + ' FCFA';
  };

  const getStatusColor = (status) => {
    const colors = {
      available: 'bg-green-500',
      occupied: 'bg-yellow-500',
      charging: 'bg-blue-500',
      maintenance: 'bg-red-500'
    };
    return colors[status] || 'bg-gray-500';
  };

  const getStatusText = (status) => {
    const texts = {
      available: 'Disponible',
      occupied: 'En course',
      charging: 'Recharge',
      maintenance: 'Maintenance'
    };
    return texts[status] || status;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-6">
      {/* Modal CIE */}
      {showCIE && <CIEModal onClose={() => setShowCIE(false)} />}
      
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
              🚕 Makaya Ride
            </h1>
            <p className="text-slate-400 text-lg">Service VTC Électrique Premium</p>
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowCIE(true)}
              className="group relative px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-500 hover:to-emerald-600 rounded-xl font-semibold transition-all shadow-lg shadow-green-500/30 hover:shadow-green-500/50 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-20 transition-opacity" />
              <div className="relative flex items-center gap-2">
                <Leaf className="w-5 h-5" />
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-white">CO₂ Évité</span>
                    <span className="text-xs px-2 py-0.5 bg-green-400/20 rounded-full text-green-200">CIE</span>
                  </div>
                  <div className="text-2xl font-bold text-white leading-tight">
                    {cieData.globalCarbonScore.co2AvoidedTotal.toFixed(1)}t
                    <span className="text-xs text-green-200 ml-1">/ an</span>
                  </div>
                </div>
              </div>
            </button>
            
            <button
              onClick={() => setLiveUpdate(!liveUpdate)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                liveUpdate 
                  ? 'bg-green-500 text-white shadow-lg shadow-green-500/50' 
                  : 'bg-slate-700 text-slate-300'
              }`}
            >
              {liveUpdate ? '🔴 LIVE' : '⏸️ PAUSED'}
            </button>
          </div>
        </div>
      </div>

      {/* KPIs Principaux */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Courses du jour */}
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:shadow-xl hover:shadow-yellow-500/10 transition-all">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-yellow-500/20 rounded-xl">
              <Activity className="w-6 h-6 text-yellow-400" />
            </div>
            <span className="text-xs text-green-400 bg-green-500/20 px-2 py-1 rounded-full">
              +12%
            </span>
          </div>
          <h3 className="text-slate-400 text-sm font-medium mb-1">Courses du jour</h3>
          <p className="text-3xl font-bold text-white">{animatedMetrics.dailyRides.toLocaleString()}</p>
          <p className="text-xs text-slate-500 mt-2">vs. 209 hier</p>
        </div>

        {/* Chauffeurs actifs */}
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:shadow-xl hover:shadow-orange-500/10 transition-all">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-orange-500/20 rounded-xl">
              <Users className="w-6 h-6 text-orange-400" />
            </div>
            <span className="text-xs text-green-400 bg-green-500/20 px-2 py-1 rounded-full">
              +5
            </span>
          </div>
          <h3 className="text-slate-400 text-sm font-medium mb-1">Chauffeurs actifs</h3>
          <p className="text-3xl font-bold text-white">{animatedMetrics.activeDrivers}/{rideData.metrics.totalFleet}</p>
          <p className="text-xs text-slate-500 mt-2">Taux d'activité: {((animatedMetrics.activeDrivers / rideData.metrics.totalFleet) * 100).toFixed(0)}%</p>
        </div>

        {/* CA du jour */}
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:shadow-xl hover:shadow-green-500/10 transition-all">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-green-500/20 rounded-xl">
              <DollarSign className="w-6 h-6 text-green-400" />
            </div>
            <span className="text-xs text-green-400 bg-green-500/20 px-2 py-1 rounded-full">
              +18%
            </span>
          </div>
          <h3 className="text-slate-400 text-sm font-medium mb-1">CA du jour</h3>
          <p className="text-2xl font-bold text-white">{formatCurrency(animatedMetrics.dailyRevenue)}</p>
          <p className="text-xs text-slate-500 mt-2">Moy/course: {formatCurrency(Math.floor(animatedMetrics.dailyRevenue / animatedMetrics.dailyRides))}</p>
        </div>

        {/* Taux d'occupation */}
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-blue-500/20 rounded-xl">
              <TrendingUp className="w-6 h-6 text-blue-400" />
            </div>
            <span className="text-xs text-green-400 bg-green-500/20 px-2 py-1 rounded-full">
              +3%
            </span>
          </div>
          <h3 className="text-slate-400 text-sm font-medium mb-1">Taux d'occupation</h3>
          <p className="text-3xl font-bold text-white">{(animatedMetrics.occupancyRate * 100).toFixed(0)}%</p>
          <div className="mt-2 w-full bg-slate-700 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${animatedMetrics.occupancyRate * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Graphique courses par heure */}
        <div className="lg:col-span-2 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Clock className="w-5 h-5 text-yellow-400" />
            Courses par heure (Aujourd'hui)
          </h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={rideData.ridesHistory}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="hour" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                labelStyle={{ color: '#94a3b8' }}
              />
              <Bar dataKey="rides" fill="#F59E0B" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Statut flotte */}
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Car className="w-5 h-5 text-yellow-400" />
            Statut Flotte
          </h3>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={rideData.fleetStats.statusBreakdown}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ status, percentage }) => `${status} ${percentage.toFixed(1)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="count"
              >
                {rideData.fleetStats.statusBreakdown.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Flotte Véhicules avec Images */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Car className="w-6 h-6 text-yellow-400" />
            Flotte Véhicules ({rideData.fleet.length} véhicules)
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rideData.fleet.map((vehicle) => (
              <div
                key={vehicle.id}
                className="group bg-slate-900/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-yellow-500/50 transition-all hover:shadow-xl hover:shadow-yellow-500/10"
              >
                {/* Image véhicule */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.model}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 flex gap-2">
                    <span className={`${getStatusColor(vehicle.status)} text-white text-xs px-3 py-1 rounded-full font-semibold`}>
                      {getStatusText(vehicle.status)}
                    </span>
                  </div>
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-white text-xs font-bold">{vehicle.category}</span>
                  </div>
                </div>

                {/* Infos véhicule */}
                <div className="p-4">
                  <h4 className="text-lg font-bold text-white mb-1">{vehicle.model}</h4>
                  <p className="text-slate-400 text-sm mb-3">{vehicle.licensePlate}</p>

                  {/* Batterie */}
                  <div className="mb-3">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-400">Batterie</span>
                      <span className="text-white font-semibold">{vehicle.battery}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all ${
                          vehicle.battery > 60 ? 'bg-green-500' : vehicle.battery > 30 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${vehicle.battery}%` }}
                      />
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Autonomie: {vehicle.range} km</p>
                  </div>

                  {/* Métriques */}
                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Chauffeur</span>
                      <span className="text-white font-semibold">{vehicle.driver}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">km aujourd'hui</span>
                      <span className="text-white font-semibold">{vehicle.kmToday} km</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">CA 24h</span>
                      <span className="text-green-400 font-semibold">{formatCurrency(vehicle.earnings24h)}</span>
                    </div>
                  </div>

                  {/* Localisation */}
                  <div className="pt-3 border-t border-slate-700">
                    <div className="flex items-center gap-2 text-xs">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span className="text-slate-400">{vehicle.location}</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">{vehicle.lastUpdate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Chauffeurs */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Star className="w-6 h-6 text-yellow-400" />
            Top Chauffeurs du Mois
          </h3>
          
          <div className="space-y-4">
            {rideData.topDrivers.map((driver, index) => (
              <div
                key={driver.id}
                className="flex items-center gap-4 bg-slate-900/50 rounded-xl p-4 border border-slate-700/50 hover:border-yellow-500/50 transition-all hover:shadow-lg hover:shadow-yellow-500/5"
              >
                {/* Rang */}
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
                  index === 0 ? 'bg-yellow-500 text-black' :
                  index === 1 ? 'bg-slate-400 text-black' :
                  index === 2 ? 'bg-orange-600 text-white' :
                  'bg-slate-700 text-slate-300'
                }`}>
                  {index + 1}
                </div>

                {/* Photo */}
                <img 
                  src={driver.photo} 
                  alt={driver.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-slate-600"
                />

                {/* Infos */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h4 className="text-lg font-bold text-white">{driver.name}</h4>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-yellow-400 font-semibold">{driver.rating}</span>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      driver.status === 'En ligne' ? 'bg-green-500/20 text-green-400' :
                      driver.status === 'En course' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-slate-500/20 text-slate-400'
                    }`}>
                      {driver.status}
                    </span>
                  </div>
                  <p className="text-sm text-slate-400">{driver.vehicle} • Membre depuis {driver.joinedDate}</p>
                </div>

                {/* Stats */}
                <div className="flex gap-8 text-center">
                  <div>
                    <p className="text-2xl font-bold text-white">{driver.ridesThisMonth}</p>
                    <p className="text-xs text-slate-400">Courses</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-400">{(driver.earnings / 1000000).toFixed(1)}M</p>
                    <p className="text-xs text-slate-400">FCFA</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Zones Chaudes */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-yellow-400" />
            Zones Chaudes - Lomé
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {rideData.hotZones.map((zone, index) => (
              <div
                key={index}
                className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50 hover:border-yellow-500/50 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-white">{zone.zone}</h4>
                    <p className="text-sm text-slate-400">{zone.rides} courses</p>
                  </div>
                  <div className={`w-3 h-3 rounded-full ${
                    zone.avgWaitTime < 5 ? 'bg-green-500' :
                    zone.avgWaitTime < 10 ? 'bg-yellow-500' :
                    'bg-red-500'
                  }`} />
                </div>
                <div className="text-xs text-slate-500">
                  Attente moy: {zone.avgWaitTime} min
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto text-center text-slate-500 text-sm">
        <p>🚕 Makaya Ride - Service VTC Électrique Premium • Made with 💚 for Sustainable Mobility</p>
      </div>
    </div>
  );
};

export default MakayaRide;
