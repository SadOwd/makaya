import React, { useState, useEffect } from 'react';
import { 
  Zap, Battery, TrendingUp, AlertCircle, MapPin, Clock,
  DollarSign, Users, Award, Activity, ChevronRight, Info
} from 'lucide-react';
import { rechargeDataFinal } from '../../data/rechargeDataFinal';

const RechargeDashboard = () => {
  const [selectedStation, setSelectedStation] = useState(null);
  const [selectedPeriod, setSelectedPeriod] = useState('heuresPleines');
  const [isLive, setIsLive] = useState(true);

  const { overview, periodesHoraires, stations, kpis, alertes, performanceBornes } = rechargeDataFinal;

  // Simulate real-time updates
  useEffect(() => {
    if (!isLive) return;
    
    const interval = setInterval(() => {
      // Real-time update simulation
      console.log('Updating live data...');
    }, 30000);

    return () => clearInterval(interval);
  }, [isLive]);

  return (
    <div className="space-y-6">
      {/* Header with Live Toggle */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
            <Zap className="text-blue-600" size={36} />
            Makaya Recharge - Dashboard
          </h2>
          <p className="text-gray-600 mt-1">Réseau intelligent de stations de recharge</p>
        </div>
        <button
          onClick={() => setIsLive(!isLive)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
            isLive 
              ? 'bg-green-600 text-white hover:bg-green-700' 
              : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
          }`}
        >
          <Activity size={18} />
          {isLive ? 'LIVE' : 'PAUSE'}
        </button>
      </div>

      {/* Alertes Actives */}
      {alertes.critiques.length > 0 && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
          <div className="flex items-start gap-3">
            <AlertCircle className="text-red-600 flex-shrink-0" size={24} />
            <div className="flex-1">
              <h3 className="font-bold text-red-800 mb-2">🚨 Alerte Critique</h3>
              {alertes.critiques.map((alert, idx) => (
                <div key={idx} className="text-red-700 text-sm mb-2">
                  <div className="font-semibold">{alert.message}</div>
                  <div className="text-red-600">Impact: {alert.impact}</div>
                  <div className="text-red-600">Action: {alert.action}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* KPIs Principaux */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <DollarSign size={32} />
            <span className="text-xs bg-blue-400 px-2 py-1 rounded">CA Mensuel</span>
          </div>
          <div className="text-3xl font-bold mb-1">
            {(overview.revenusMensuel / 1000000).toFixed(2)}M
          </div>
          <div className="text-blue-100 text-sm">FCFA/mois</div>
          <div className="mt-3 text-sm">
            <span className="text-green-300">▲ {kpis.financiers.tauxMarge}%</span> marge
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <Battery size={32} />
            <span className="text-xs bg-green-400 px-2 py-1 rounded">Utilisation</span>
          </div>
          <div className="text-3xl font-bold mb-1">
            {overview.tauxUtilisation}%
          </div>
          <div className="text-green-100 text-sm">{overview.bornesActives}/{overview.totalBornes} bornes actives</div>
          <div className="mt-3 text-sm">
            <span className="text-green-300">✓ Excellent</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <Users size={32} />
            <span className="text-xs bg-purple-400 px-2 py-1 rounded">Clients</span>
          </div>
          <div className="text-3xl font-bold mb-1">
            {overview.clientsActifs.toLocaleString()}
          </div>
          <div className="text-purple-100 text-sm">{overview.sessionsJour} sessions/jour</div>
          <div className="mt-3 text-sm">
            <span className="text-purple-300">⭐ {overview.satisfaction}/5</span> satisfaction
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-400 to-teal-500 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <Activity size={32} />
            <span className="text-xs bg-green-300 px-2 py-1 rounded">CO₂ Évité</span>
          </div>
          <div className="text-3xl font-bold mb-1">
            {overview.co2Evite.mensuel}t
          </div>
          <div className="text-green-100 text-sm">{overview.co2Evite.annuel}t/an</div>
          <div className="mt-3 text-sm">
            <span className="text-green-200">🌱 {Math.round(overview.co2Evite.annuel * 1.5)} arbres</span>
          </div>
        </div>
      </div>

      {/* Périodes Tarifaires */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Clock size={24} className="text-blue-600" />
          Système Tarifaire par Période
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(periodesHoraires).map(([key, periode]) => (
            <button
              key={key}
              onClick={() => setSelectedPeriod(key)}
              className={`p-4 rounded-lg border-2 transition-all ${
                selectedPeriod === key
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Clock size={20} className={
                  key === 'heuresCreuses' ? 'text-blue-600' :
                  key === 'heuresPleines' ? 'text-orange-600' :
                  'text-red-600'
                } />
                <span className="font-bold text-gray-800">
                  {key === 'heuresCreuses' ? '🌙 Heures Creuses' :
                   key === 'heuresPleines' ? '☀️ Heures Pleines' :
                   '🔥 Heures Pointe'}
                </span>
              </div>
              <div className="text-sm text-gray-600 mb-2">{periode.periode}</div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">{periode.prixMoyenKWh}</div>
                  <div className="text-xs text-gray-500">FCFA/kWh</div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-green-600">{periode.margePourcentage.toFixed(1)}%</div>
                  <div className="text-xs text-gray-500">marge</div>
                </div>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                <div className="bg-gray-50 p-2 rounded">
                  <div className="text-gray-600">Sessions</div>
                  <div className="font-semibold">{periode.pourcentageSessions}%</div>
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <div className="text-gray-600">Revenu/j</div>
                  <div className="font-semibold">{(periode.revenuMoyen / 1000).toFixed(0)}K</div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {selectedPeriod && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>💡 Stratégie:</strong> {periodesHoraires[selectedPeriod].description}
            </p>
          </div>
        )}
      </div>

      {/* Performance par Type de Borne */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Battery size={24} className="text-green-600" />
          Performance par Type de Borne
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(performanceBornes).map(([type, data]) => (
            <div key={type} className="border-2 border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-gray-800">
                  {type === 'slow7kW' ? '🐢 Lente 7kW' :
                   type === 'fast22kW' ? '⚡ Rapide 22kW' :
                   '🚀 Ultra 50kW'}
                </span>
                <span className="text-sm text-gray-500">ROI {data.ROI} ans</span>
              </div>

              <div className="space-y-2 mb-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Utilisation</span>
                  <span className="font-semibold text-blue-600">{data.tauxUtilisation}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all"
                    style={{ width: `${data.tauxUtilisation}%` }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-gray-50 p-2 rounded">
                  <div className="text-gray-600">Revenu/jour</div>
                  <div className="font-bold text-green-600">{(data.revenuTotal / 1000).toFixed(0)}K</div>
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <div className="text-gray-600">Marge</div>
                  <div className="font-bold text-purple-600">{data.margePourcentage.toFixed(1)}%</div>
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <div className="text-gray-600">Sessions/j</div>
                  <div className="font-semibold">{data.nombreSessions}</div>
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <div className="text-gray-600">Satisfaction</div>
                  <div className="font-semibold">⭐ {data.satisfactionClient}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carte des Stations */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <MapPin size={24} className="text-red-600" />
          Réseau de Stations ({stations.length})
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {stations.map((station) => (
            <div
              key={station.id}
              onClick={() => setSelectedStation(station)}
              className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                selectedStation?.id === station.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-bold text-gray-800">{station.nom}</h4>
                  <p className="text-sm text-gray-600">{station.localisation.zone}</p>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-blue-600">
                    {(station.performance.revenuJour / 1000).toFixed(1)}K
                  </div>
                  <div className="text-xs text-gray-500">FCFA/jour</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-3">
                {station.bornes.map((borne, idx) => (
                  <div key={idx} className="bg-gray-50 p-2 rounded text-center">
                    <div className="text-xs text-gray-600">{borne.type}</div>
                    <div className="font-bold text-sm">{borne.nombre}×</div>
                    <div className={`text-xs ${borne.statut === 'actif' ? 'text-green-600' : 'text-orange-600'}`}>
                      {borne.statut}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-4">
                  <span className="text-gray-600">
                    📊 {station.performance.tauxUtilisation}%
                  </span>
                  <span className="text-gray-600">
                    ⭐ {station.performance.satisfaction}
                  </span>
                </div>
                <ChevronRight size={20} className="text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Warnings */}
      {alertes.warnings.length > 0 && (
        <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-lg">
          <div className="flex items-start gap-3">
            <Info className="text-orange-600 flex-shrink-0" size={24} />
            <div className="flex-1">
              <h3 className="font-bold text-orange-800 mb-2">⚠️ Avertissements</h3>
              {alertes.warnings.map((warning, idx) => (
                <div key={idx} className="text-orange-700 text-sm mb-2">
                  <div className="font-semibold">{warning.message}</div>
                  <div className="text-orange-600">Recommandation: {warning.recommandation}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Détail Station (Modal-like) */}
      {selectedStation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedStation(null)}>
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{selectedStation.nom}</h2>
                <p className="text-gray-600">{selectedStation.localisation.adresse}</p>
              </div>
              <button
                onClick={() => setSelectedStation(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Revenu Quotidien</div>
                <div className="text-2xl font-bold text-blue-600">
                  {selectedStation.performance.revenuJour.toLocaleString()} FCFA
                </div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Utilisation</div>
                <div className="text-2xl font-bold text-green-600">
                  {selectedStation.performance.tauxUtilisation}%
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="font-bold text-gray-800 mb-2">Bornes Installées</h3>
              <div className="space-y-2">
                {selectedStation.bornes.map((borne, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <div>
                      <span className="font-semibold">{borne.nombre}× {borne.type}</span>
                      <span className={`ml-3 px-2 py-1 rounded text-xs ${
                        borne.statut === 'actif' 
                          ? 'bg-green-200 text-green-800' 
                          : 'bg-orange-200 text-orange-800'
                      }`}>
                        {borne.statut}
                      </span>
                    </div>
                    <span className="text-sm text-gray-600">{borne.utilisation}% util.</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-gray-600 mb-1">Sessions/jour</div>
                <div className="font-semibold">{selectedStation.performance.sessionsJour}</div>
              </div>
              <div>
                <div className="text-gray-600 mb-1">Clients moyens</div>
                <div className="font-semibold">{selectedStation.performance.clientsMoyens}</div>
              </div>
              <div>
                <div className="text-gray-600 mb-1">Énergie/jour</div>
                <div className="font-semibold">{selectedStation.performance.energieJour} kWh</div>
              </div>
              <div>
                <div className="text-gray-600 mb-1">Satisfaction</div>
                <div className="font-semibold">⭐ {selectedStation.performance.satisfaction}/5</div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-blue-50 rounded">
              <div className="text-sm text-gray-600 mb-1">Clientèle Type</div>
              <div className="font-semibold text-gray-800">{selectedStation.typeClientele}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RechargeDashboard;
