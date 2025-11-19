import React, { useState, useEffect } from 'react';
import { Leaf, TrendingDown, Car, Zap, Calculator, X } from 'lucide-react';

const CO2Modal = ({ onClose, fleetKmData }) => {
  const [fleetData, setFleetData] = useState({
    totalVehicles: 52,
    monthlyKmPerVehicle: 7500,
    averageConsumptionElectric: 16, // kWh/100km
    averageConsumptionThermal: 7.5, // L/100km
    electricityEmissionFactor: 0.52, // kg CO2/kWh (Togo)
    fuelEmissionFactor: 2.31, // kg CO2/L essence
    fuelPrice: 820, // FCFA/L
    electricityPrice: 150, // FCFA/kWh
    monthsOfOperation: 12
  });

  const [results, setResults] = useState({
    co2Avoided: 0,
    co2Electric: 0,
    co2Thermal: 0,
    costSavings: 0,
    equivalentTrees: 0,
    equivalentFlights: 0
  });

  useEffect(() => {
    calculateCO2Impact();
  }, [fleetData]);

  const calculateCO2Impact = () => {
    const totalKmAnnual = fleetData.totalVehicles * fleetData.monthlyKmPerVehicle * fleetData.monthsOfOperation;
    
    const electricityConsumed = (totalKmAnnual / 100) * fleetData.averageConsumptionElectric;
    const co2Electric = electricityConsumed * fleetData.electricityEmissionFactor;
    
    const fuelConsumed = (totalKmAnnual / 100) * fleetData.averageConsumptionThermal;
    const co2Thermal = fuelConsumed * fleetData.fuelEmissionFactor;
    
    const co2Avoided = co2Thermal - co2Electric;
    
    const electricityCost = electricityConsumed * fleetData.electricityPrice;
    const fuelCost = fuelConsumed * fleetData.fuelPrice;
    const costSavings = fuelCost - electricityCost;
    
    const equivalentTrees = Math.round(co2Avoided / 20);
    const equivalentFlights = Math.round(co2Avoided / 1100);

    setResults({
      co2Avoided: co2Avoided / 1000,
      co2Electric: co2Electric / 1000,
      co2Thermal: co2Thermal / 1000,
      costSavings: costSavings / 1000000,
      equivalentTrees,
      equivalentFlights,
      totalKmAnnual,
      electricityConsumed,
      fuelConsumed
    });
  };

  const formatNumber = (num, decimals = 0) => {
    return new Intl.NumberFormat('fr-FR', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    }).format(num);
  };

  const MetricCard = ({ icon: Icon, title, value, unit, subtitle, gradient }) => (
    <div className={`bg-gradient-to-br ${gradient} backdrop-blur-xl rounded-2xl p-6 border border-green-500/20`}>
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-white/10 rounded-xl">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
      <h3 className="text-slate-300 text-sm font-medium mb-1">{title}</h3>
      <p className="text-4xl font-bold text-white mb-2">
        {value} <span className="text-xl">{unit}</span>
      </p>
      {subtitle && <p className="text-xs text-green-200">{subtitle}</p>}
    </div>
  );

  const InputField = ({ label, value, onChange, unit, help }) => (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-green-300">{label}</label>
      <div className="flex gap-2">
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
          className="flex-1 px-3 py-2 bg-slate-800/50 border border-green-500/30 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-white"
          step="0.01"
        />
        <span className="px-3 py-2 bg-slate-800/50 border border-green-500/30 rounded-lg text-sm text-slate-300 whitespace-nowrap">
          {unit}
        </span>
      </div>
      {help && <p className="text-xs text-slate-400">{help}</p>}
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div 
        className="bg-gradient-to-br from-green-900/95 via-slate-900/95 to-black/95 rounded-2xl max-w-7xl w-full max-h-[90vh] overflow-y-auto border border-green-500/30 shadow-2xl shadow-green-500/20" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-green-800/90 to-emerald-900/90 backdrop-blur-xl border-b border-green-500/30 p-6 z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-500/20 rounded-xl">
                <Leaf className="w-8 h-8 text-green-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">Impact Environnemental</h2>
                <p className="text-green-200">Calculateur CO₂ évité - Flotte VTC 100% Électrique</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 bg-red-500/20 hover:bg-red-500/30 rounded-full flex items-center justify-center text-white transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Métriques principales */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              icon={TrendingDown}
              title="CO₂ Évité Annuellement"
              value={formatNumber(results.co2Avoided, 1)}
              unit="tonnes"
              subtitle={`vs ${formatNumber(results.co2Thermal, 1)}t émises (thermique)`}
              gradient="from-green-700/80 to-emerald-800/80"
            />
            
            <MetricCard
              icon={Leaf}
              title="Équivalent Arbres"
              value={formatNumber(results.equivalentTrees)}
              unit="arbres"
              subtitle="Plantés et maintenus 1 an"
              gradient="from-emerald-700/80 to-green-800/80"
            />
            
            <MetricCard
              icon={Zap}
              title="Économies Annuelles"
              value={formatNumber(results.costSavings, 2)}
              unit="M FCFA"
              subtitle="Électricité vs Essence"
              gradient="from-blue-700/80 to-cyan-800/80"
            />
            
            <MetricCard
              icon={Car}
              title="Distance Parcourue"
              value={formatNumber(results.totalKmAnnual / 1000000, 1)}
              unit="M km"
              subtitle={`${fleetData.totalVehicles} véhicules actifs`}
              gradient="from-purple-700/80 to-indigo-800/80"
            />
          </div>

          {/* Méthodologie */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-green-500/20">
            <div className="flex items-center gap-2 mb-4">
              <Calculator className="text-green-400" size={24} />
              <h3 className="text-xl font-bold text-white">Méthodologie de Calcul</h3>
            </div>
            
            <div className="bg-green-900/30 border-l-4 border-green-500 p-4 mb-6 rounded-r-lg">
              <p className="text-sm text-slate-300 leading-relaxed">
                Le calcul du CO₂ évité compare les émissions de notre flotte électrique aux émissions qu'aurait générées une flotte thermique équivalente. 
                Pour les véhicules électriques, nous comptabilisons les émissions liées à la production d'électricité selon le mix énergétique togolais 
                (0,52 kg CO₂/kWh incluant hydroélectricité et fossiles). Pour les thermiques, facteur standard essence 2,31 kg CO₂/L.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <div className="bg-green-900/20 rounded-xl p-4 border border-green-500/20">
                <h4 className="font-semibold text-green-400 mb-3">Émissions Électriques</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Consommation:</span>
                    <span className="font-medium text-white">{formatNumber(results.electricityConsumed)} kWh</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Facteur émission:</span>
                    <span className="font-medium text-white">{fleetData.electricityEmissionFactor} kg/kWh</span>
                  </div>
                  <div className="flex justify-between border-t border-green-500/20 pt-2">
                    <span className="text-slate-400">Total CO₂:</span>
                    <span className="font-bold text-green-400">{formatNumber(results.co2Electric, 1)} t</span>
                  </div>
                </div>
              </div>

              <div className="bg-red-900/20 rounded-xl p-4 border border-red-500/20">
                <h4 className="font-semibold text-red-400 mb-3">Émissions Thermiques</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Consommation:</span>
                    <span className="font-medium text-white">{formatNumber(results.fuelConsumed)} L</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Facteur émission:</span>
                    <span className="font-medium text-white">{fleetData.fuelEmissionFactor} kg/L</span>
                  </div>
                  <div className="flex justify-between border-t border-red-500/20 pt-2">
                    <span className="text-slate-400">Total CO₂:</span>
                    <span className="font-bold text-red-400">{formatNumber(results.co2Thermal, 1)} t</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-900/20 rounded-xl p-4 border border-blue-500/20">
                <h4 className="font-semibold text-blue-400 mb-3">Réduction Nette</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Différence:</span>
                    <span className="font-medium text-white">{formatNumber(results.co2Thermal - results.co2Electric, 1)} t</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Réduction:</span>
                    <span className="font-medium text-white">{formatNumber(((results.co2Thermal - results.co2Electric) / results.co2Thermal * 100), 1)}%</span>
                  </div>
                  <div className="flex justify-between border-t border-blue-500/20 pt-2">
                    <span className="text-slate-400">CO₂ évité:</span>
                    <span className="font-bold text-blue-400">{formatNumber(results.co2Avoided, 1)} t</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Formules */}
            <div className="bg-slate-800/50 rounded-xl p-4 border border-green-500/20">
              <h4 className="font-semibold text-green-400 mb-3">Formules Appliquées</h4>
              <div className="space-y-2 text-sm font-mono text-slate-300">
                <div className="bg-slate-900/50 p-3 rounded border border-green-500/10">
                  <span className="text-green-400">CO₂_électrique</span> = (km_total / 100) × conso_kWh × facteur_émission_électricité
                </div>
                <div className="bg-slate-900/50 p-3 rounded border border-red-500/10">
                  <span className="text-red-400">CO₂_thermique</span> = (km_total / 100) × conso_L × facteur_émission_essence
                </div>
                <div className="bg-slate-900/50 p-3 rounded border border-blue-500/10">
                  <span className="text-blue-400">CO₂_évité</span> = CO₂_thermique - CO₂_électrique
                </div>
              </div>
            </div>
          </div>

          {/* Paramètres simulation */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-green-500/20">
            <h3 className="text-xl font-bold text-white mb-4">Paramètres de Simulation</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <InputField
                label="Nombre de véhicules"
                value={fleetData.totalVehicles}
                onChange={(v) => setFleetData({...fleetData, totalVehicles: v})}
                unit="véhicules"
              />
              
              <InputField
                label="Kilométrage mensuel moyen"
                value={fleetData.monthlyKmPerVehicle}
                onChange={(v) => setFleetData({...fleetData, monthlyKmPerVehicle: v})}
                unit="km/véh"
                help="Par véhicule actif"
              />
              
              <InputField
                label="Période d'exploitation"
                value={fleetData.monthsOfOperation}
                onChange={(v) => setFleetData({...fleetData, monthsOfOperation: v})}
                unit="mois"
              />
              
              <InputField
                label="Consommation électrique"
                value={fleetData.averageConsumptionElectric}
                onChange={(v) => setFleetData({...fleetData, averageConsumptionElectric: v})}
                unit="kWh/100km"
                help="BYD en conditions réelles"
              />
              
              <InputField
                label="Consommation thermique"
                value={fleetData.averageConsumptionThermal}
                onChange={(v) => setFleetData({...fleetData, averageConsumptionThermal: v})}
                unit="L/100km"
                help="Essence équivalent"
              />
              
              <InputField
                label="Facteur émission électricité"
                value={fleetData.electricityEmissionFactor}
                onChange={(v) => setFleetData({...fleetData, electricityEmissionFactor: v})}
                unit="kg CO₂/kWh"
                help="Mix Togo (CEET)"
              />
            </div>
          </div>

          {/* Impact concret */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-6 text-white">
            <h3 className="text-2xl font-bold mb-4">Impact Environnemental Concret</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <div className="text-4xl font-bold mb-2">{formatNumber(results.equivalentTrees)}</div>
                <div className="text-sm opacity-90">Arbres plantés et maintenus 1 an</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <div className="text-4xl font-bold mb-2">{formatNumber(results.equivalentFlights)}</div>
                <div className="text-sm opacity-90">Vols Paris-NY évités</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4">
                <div className="text-4xl font-bold mb-2">{formatNumber(results.co2Avoided * 1000 / 3.7)}</div>
                <div className="text-sm opacity-90">Émissions togolaises annuelles évitées</div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-sm text-slate-500">
            <p>Calculs basés sur les standards GIEC et facteurs d'émission IEA 2024</p>
            <p className="mt-1">Sources: CEET (mix énergétique), ADEME (facteurs), constructeurs (consommations)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CO2Modal;
