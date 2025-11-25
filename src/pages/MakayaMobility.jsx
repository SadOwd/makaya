import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Car, Zap, Battery, Wrench, DollarSign, TrendingUp, CheckCircle, Clock, Star, Calendar, Settings, X } from 'lucide-react';
import { mobilityData } from '../data/mobilityData';

const MakayaMobility = () => {
  const [activeTab, setActiveTab] = useState('vente');
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedFormula, setSelectedFormula] = useState(null);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('fr-FR').format(value) + ' FCFA';
  };

  const tabs = [
    { id: 'vente', label: 'Vente EV', icon: Car },
    { id: 'lld', label: 'LLD', icon: Calendar },
    { id: 'sav', label: 'SAV', icon: Wrench }
  ];

  const VehicleModal = ({ vehicle, onClose }) => {
    if (!vehicle) return null;
    return (
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
        <div className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700" onClick={(e) => e.stopPropagation()}>
          <div className="relative h-80">
            <img src={vehicle.image} alt={vehicle.model} className="w-full h-full object-cover" />
            <button onClick={onClose} className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-black/70 transition">
              <X className="w-6 h-6" />
            </button>
            <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-xl rounded-xl px-4 py-2">
              <h3 className="text-2xl font-bold text-white">{vehicle.brand} {vehicle.model}</h3>
              <p className="text-slate-300">{vehicle.category}</p>
            </div>
          </div>
          <div className="p-8">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-slate-400 text-sm mb-1">Prix</p>
                <p className="text-3xl font-bold text-green-400">{formatCurrency(vehicle.price)}</p>
                <p className="text-slate-500 text-sm">${vehicle.priceUSD?.toLocaleString() || '0'} USD</p>
              </div>
              <div className="flex gap-3">
                <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-lg transition">
                  Demander un devis
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { icon: Battery, value: `${vehicle.range} km`, label: 'Autonomie', color: 'text-green-400' },
                { icon: Zap, value: vehicle.battery, label: 'Batterie', color: 'text-yellow-400' },
                { icon: TrendingUp, value: vehicle.acceleration, label: '0-100 km/h', color: 'text-blue-400' },
                { icon: Car, value: vehicle.power, label: 'Puissance', color: 'text-purple-400' }
              ].map((spec, idx) => (
                <div key={idx} className="bg-slate-800/50 rounded-xl p-4 text-center">
                  <spec.icon className={`w-6 h-6 ${spec.color} mx-auto mb-2`} />
                  <p className="text-2xl font-bold text-white">{spec.value}</p>
                  <p className="text-xs text-slate-400">{spec.label}</p>
                </div>
              ))}
            </div>
            <div className="mb-8">
              <h4 className="text-xl font-bold text-white mb-4">Equipements</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {vehicle.features?.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-300">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const FormulaModal = ({ formula, onClose }) => {
    if (!formula) return null;
    return (
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
        <div className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700" onClick={(e) => e.stopPropagation()}>
          <div className="relative h-64">
            <img src={formula.image} alt={formula.vehicle} className="w-full h-full object-cover" />
            <button onClick={onClose} className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-black/70 transition">
              <X className="w-6 h-6" />
            </button>
            <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-xl rounded-xl px-4 py-2">
              <h3 className="text-2xl font-bold text-white">Formule {formula.name}</h3>
              <p className="text-slate-300">{formula.vehicle}</p>
            </div>
          </div>
          <div className="p-8">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-slate-400 text-sm mb-1">Prix mensuel</p>
                <p className="text-4xl font-bold text-green-400">{formatCurrency(formula.monthlyPrice)}</p>
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-lg transition">
                Souscrire
              </button>
            </div>
            <div className="mb-8">
              <h4 className="text-xl font-bold text-white mb-4">Services inclus</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {formula.features?.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-300">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-6">
      {selectedVehicle && <VehicleModal vehicle={selectedVehicle} onClose={() => setSelectedVehicle(null)} />}
      {selectedFormula && <FormulaModal formula={selectedFormula} onClose={() => setSelectedFormula(null)} />}
      
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
          Makaya Mobility
        </h1>
        <p className="text-slate-400 text-lg">Vente EV - Location Longue Duree - Service Apres-Vente</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { icon: Car, label: 'Vehicules vendus', value: mobilityData.metrics?.vehiclesSold || 127, suffix: '', detail: 'Depuis debut 2025', color: 'green' },
          { icon: Calendar, label: 'Contrats LLD actifs', value: mobilityData.metrics?.lldContracts || 89, suffix: '', detail: 'Flotte louee', color: 'blue' },
          { icon: DollarSign, label: 'CA Total', value: ((mobilityData.metrics?.totalRevenue || 4200000000) / 1000000000).toFixed(2), suffix: ' Md', detail: 'FCFA (2025)', color: 'yellow' },
          { icon: Star, label: 'Satisfaction client', value: mobilityData.metrics?.avgSatisfaction || 4.7, suffix: '/5', detail: 'Note moyenne', color: 'purple' }
        ].map((kpi, idx) => (
          <div key={idx} className={`bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:shadow-xl transition-all`}>
            <div className={`p-3 bg-${kpi.color}-500/20 rounded-xl w-fit mb-3`}>
              <kpi.icon className={`w-6 h-6 text-${kpi.color}-400`} />
            </div>
            <h3 className="text-slate-400 text-sm font-medium mb-1">{kpi.label}</h3>
            <p className="text-3xl font-bold text-white">{kpi.value}{kpi.suffix}</p>
            <p className="text-xs text-slate-500 mt-2">{kpi.detail}</p>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex gap-4 border-b border-slate-700">
          {tabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-2 px-6 py-3 font-semibold transition-all ${activeTab === tab.id ? 'text-green-400 border-b-2 border-green-400' : 'text-slate-400 hover:text-white'}`}>
                <Icon className="w-5 h-5" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {activeTab === 'vente' && (
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Car className="w-6 h-6 text-green-400" />
                Catalogue Vehicules Electriques ({(mobilityData.vehicles || []).length} modeles)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(mobilityData.vehicles || []).map(vehicle => (
                  <div key={vehicle.id} onClick={() => setSelectedVehicle(vehicle)} className="group bg-slate-900/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-green-500/50 transition-all cursor-pointer hover:shadow-xl hover:shadow-green-500/10">
                    <div className="relative h-48 overflow-hidden">
                      <img src={vehicle.image} alt={vehicle.model} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-white text-xs font-bold">{vehicle.category}</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-white mb-1">{vehicle.brand} {vehicle.model}</h3>
                      <p className="text-2xl font-bold text-green-400 mb-4">{formatCurrency(vehicle.price)}</p>
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Battery className="w-4 h-4 text-green-400" />
                          <span className="text-slate-300">{vehicle.range} km</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Zap className="w-4 h-4 text-yellow-400" />
                          <span className="text-slate-300">{vehicle.battery}</span>
                        </div>
                      </div>
                      <button className="w-full py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg transition">Details</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  Ventes mensuelles 2025
                </h3>
                <ResponsiveContainer width="100%" height={280}>
                  <LineChart data={mobilityData.monthlySales || []}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="month" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }} />
                    <Line type="monotone" dataKey="sales" stroke="#10B981" strokeWidth={3} dot={{ fill: '#10B981', r: 5 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Car className="w-5 h-5 text-green-400" />
                  Repartition par modele
                </h3>
                <ResponsiveContainer width="100%" height={280}>
                  <PieChart>
                    <Pie data={mobilityData.salesByModel || []} cx="50%" cy="50%" labelLine={false} label={({ model, percentage }) => `${model} ${(percentage || 0).toFixed(1)}%`} outerRadius={90} dataKey="sales">
                      {(mobilityData.salesByModel || []).map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={['#10B981', '#3B82F6', '#F59E0B', '#8B5CF6', '#EF4444', '#EC4899'][index % 6]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'lld' && (
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Calendar className="w-6 h-6 text-green-400" />
              Formules Location Longue Duree
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(mobilityData.lldFormulas || []).map(formula => (
                <div key={formula.id} onClick={() => setSelectedFormula(formula)} className="group bg-slate-900/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-green-500/50 transition-all cursor-pointer hover:shadow-xl hover:shadow-green-500/10">
                  <div className="relative h-56 overflow-hidden">
                    <img src={formula.image} alt={formula.vehicle} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-green-500 to-emerald-600 px-4 py-2 rounded-xl shadow-lg">
                      <span className="text-white text-lg font-bold">Formule {formula.name}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{formula.vehicle}</h3>
                    <p className="text-3xl font-bold text-green-400 mb-4">{formatCurrency(formula.monthlyPrice)}<span className="text-lg text-slate-400">/mois</span></p>
                    <div className="space-y-2 mb-4">
                      {(formula.features || []).slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <button className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-lg transition">Voir details</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'sav' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {[
                { icon: Clock, label: 'Delai moyen', value: `${mobilityData.sav?.statistics?.avgRepairTime || 7} j`, color: 'blue' },
                { icon: Star, label: 'Satisfaction', value: `${mobilityData.sav?.statistics?.satisfactionRate || 95}%`, color: 'green' },
                { icon: Wrench, label: 'En maintenance', value: mobilityData.sav?.statistics?.vehiclesInService || 12, color: 'yellow' },
                { icon: Settings, label: 'Interventions/mois', value: mobilityData.sav?.statistics?.monthlyInterventions || 145, color: 'purple' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
                  <div className={`p-3 bg-${stat.color}-500/20 rounded-xl w-fit mb-3`}>
                    <stat.icon className={`w-6 h-6 text-${stat.color}-400`} />
                  </div>
                  <p className="text-slate-400 text-sm mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Wrench className="w-6 h-6 text-green-400" />
              Services Maintenance & SAV
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(mobilityData.sav?.services || []).map(service => (
                <div key={service.id} className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-slate-400 text-sm mb-4">{service.description}</p>
                  <p className="text-sm font-semibold text-green-400">{typeof service.price === 'number' ? formatCurrency(service.price) : service.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto text-center text-slate-500 text-sm mt-8">
        <p>Makaya Mobility - Vente EV - LLD - SAV - Made with love for Sustainable Mobility</p>
      </div>
    </div>
  );
};

export default MakayaMobility;
