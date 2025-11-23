import React, { useState } from 'react';
import { 
  Zap, TrendingUp, DollarSign, Users, MapPin, 
  Clock, Battery, Settings, BarChart3, AlertCircle,
  ChevronRight, X, Home, Calendar
} from 'lucide-react';
import { rechargeDataOptimized } from '../data/rechargeDataOptimized';

const MakayaRecharge = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedStation, setSelectedStation] = useState(null);

  // Extraction sécurisée des données depuis rechargeDataOptimized
  const overview = rechargeDataOptimized?.overview || {};
  const stations = rechargeDataOptimized?.stations || [];
  const abonnements = rechargeDataOptimized?.abonnements || [];
  const typesBornesObj = rechargeDataOptimized?.typesBornes || {};
  
  // Conversion de l'objet typesBornes en tableau
  const typesBornes = Object.values(typesBornesObj).filter(b => b.status !== 'non_viable_public');

  // Composant Modal Station
  const StationModal = ({ station, onClose }) => {
    if (!station) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 rounded-t-2xl">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">{station.nom}</h3>
                <div className="flex items-center gap-2 text-blue-100">
                  <MapPin className="h-4 w-4" />
                  <span>{station.zone}</span>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-lg transition"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="p-6 space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-green-50 rounded-lg p-4">
                <div className="text-green-600 text-sm mb-1">Revenus/jour</div>
                <div className="text-2xl font-bold text-slate-900">{station.revenusJournaliers?.toLocaleString() || 0} F</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="text-blue-600 text-sm mb-1">Bornes totales</div>
                <div className="text-2xl font-bold text-slate-900">{station.totalBornes || 0}</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <div className="text-purple-600 text-sm mb-1">Utilisation</div>
                <div className="text-2xl font-bold text-slate-900">{station.tauxUtilisation || 0}%</div>
              </div>
              <div className="bg-orange-50 rounded-lg p-4">
                <div className="text-orange-600 text-sm mb-1">Revenus/mois</div>
                <div className="text-2xl font-bold text-slate-900">{((station.revenusJournaliers || 0) * 30 / 1000).toFixed(1)}K F</div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-4">
              <h4 className="font-bold text-slate-900 mb-3">Composition du site</h4>
              <div className="space-y-2">
                {station.bornes && station.bornes.map((borne, idx) => (
                  <div key={idx} className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">{borne.type}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{borne.nombre} borne(s)</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        borne.status === 'actif' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-orange-100 text-orange-700'
                      }`}>
                        {borne.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-4">
              <h4 className="font-bold text-slate-900 mb-2">Type de clientèle</h4>
              <p className="text-sm text-slate-700">{station.typeClientele}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <DollarSign className="h-8 w-8 opacity-80" />
            <TrendingUp className="h-6 w-6" />
          </div>
          <div className="text-3xl font-bold mb-1">
            {((overview.revenusAnnuels || 0) / 1000000000).toFixed(1)} Mds
          </div>
          <div className="text-green-100 text-sm">Revenus Annuels</div>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <Zap className="h-8 w-8 opacity-80" />
            <Battery className="h-6 w-6" />
          </div>
          <div className="text-3xl font-bold mb-1">
            {(overview.sessionsJour || 0).toLocaleString()}
          </div>
          <div className="text-blue-100 text-sm">Sessions / Jour</div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <BarChart3 className="h-8 w-8 opacity-80" />
            <TrendingUp className="h-6 w-6" />
          </div>
          <div className="text-3xl font-bold mb-1">{overview.tauxUtilisation || 0}%</div>
          <div className="text-purple-100 text-sm">Taux Utilisation</div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <Users className="h-8 w-8 opacity-80" />
            <ChevronRight className="h-6 w-6" />
          </div>
          <div className="text-3xl font-bold mb-1">{overview.totalBornes || 0}</div>
          <div className="text-orange-100 text-sm">Bornes Actives</div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <MapPin className="h-6 w-6 text-blue-600" />
          Réseau de Stations ({stations.length})
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {stations.map((station, idx) => (
            <div 
              key={idx}
              onClick={() => setSelectedStation(station)}
              className="border border-slate-200 rounded-lg p-4 hover:shadow-lg transition cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{station.nom}</h4>
                  <p className="text-xs text-slate-600">{station.zone}</p>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                  {station.tauxUtilisation}%
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <div className="text-slate-600 text-xs">Revenus/jour</div>
                  <div className="font-bold text-green-600">{station.revenusJournaliers?.toLocaleString()} F</div>
                </div>
                <div>
                  <div className="text-slate-600 text-xs">Bornes</div>
                  <div className="font-bold text-blue-600">{station.totalBornes}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {abonnements.length > 0 && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Users className="h-6 w-6 text-purple-600" />
            Formules d'Abonnement
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {abonnements.map((abo, idx) => (
              <div 
                key={idx}
                className="border-2 border-slate-200 rounded-lg p-4 hover:border-blue-500 transition"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{abo.emoji}</span>
                  <h4 className="font-bold text-slate-900 text-sm">{abo.id}</h4>
                </div>
                <div className="text-xl font-bold text-blue-600 mb-1">
                  {abo.fraisMensuel.toLocaleString()} F
                </div>
                <div className="text-xs text-slate-600 mb-3">
                  {abo.reduction > 0 ? `${abo.reduction}% réduction` : 'Sans engagement'}
                </div>
                <div className="text-xs text-slate-500">
                  ARPU: +{abo.arpuAugmentation}%
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <div className="text-sm text-slate-600">Bénéfice Net</div>
              <div className="text-2xl font-bold text-slate-900">
                {((overview.beneficeNet || 0) / 1000000000).toFixed(2)} Mds
              </div>
            </div>
          </div>
          <div className="text-xs text-slate-600">Marge nette: {overview.margeNette || 0}%</div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <div className="text-sm text-slate-600">Clients Actifs</div>
              <div className="text-2xl font-bold text-slate-900">
                {(overview.clientsActifs || 0).toLocaleString()}
              </div>
            </div>
          </div>
          <div className="text-xs text-slate-600">Satisfaction: {overview.satisfaction || 0}/5</div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Zap className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <div className="text-sm text-slate-600">Énergie/Jour</div>
              <div className="text-2xl font-bold text-slate-900">
                {(overview.energieDistribuee || 0).toLocaleString()} kWh
              </div>
            </div>
          </div>
          <div className="text-xs text-slate-600">
            CO₂ évité: {overview.co2Evite?.annuel || 0} tonnes/an
          </div>
        </div>
      </div>
    </div>
  );

  const renderTarifs = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-4">Grille Tarifaire</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {typesBornes.map((borne, idx) => (
            <div key={idx} className="border-2 border-slate-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{borne.emoji}</span>
                <h4 className="font-bold text-slate-900 text-sm">{borne.nom.split(' - ')[0]}</h4>
              </div>
              <div className="text-2xl font-bold text-blue-600 mb-3">{borne.puissance}kW</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Tarif</span>
                  <span className="font-semibold">{borne.tarifParKWh} F/kWh</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Coût</span>
                  <span className="font-semibold text-orange-600">{borne.coutParKWh} F/kWh</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Marge</span>
                  <span className="font-semibold text-green-600">{borne.margeNette}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderBornes = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-4">Portfolio de Bornes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {typesBornes.map((borne, idx) => (
            <div key={idx} className={`border-2 rounded-lg p-6 ${
              borne.meilleurChoix ? 'border-green-500 bg-green-50' : 
              borne.performanceOptimale ? 'border-blue-500 bg-blue-50' : 
              'border-slate-200'
            }`}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{borne.emoji}</span>
                  <div>
                    <h4 className="font-bold text-slate-900">{borne.nom}</h4>
                    <p className="text-sm text-slate-600">{borne.usageCible}</p>
                  </div>
                </div>
                {borne.meilleurChoix && (
                  <span className="px-3 py-1 bg-green-500 text-white rounded-full text-xs font-bold">
                    CHAMPION ROI
                  </span>
                )}
                {borne.performanceOptimale && (
                  <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-xs font-bold">
                    OPTIMAL
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">{borne.puissance}kW</div>
                  <div className="text-xs text-slate-600">Puissance</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-1">{borne.roi}</div>
                  <div className="text-xs text-slate-600">ROI (ans)</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                <div className="bg-white rounded-lg p-3">
                  <div className="text-slate-600 mb-1">CAPEX</div>
                  <div className="font-bold">{(borne.capex / 1000000).toFixed(1)}M F</div>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <div className="text-slate-600 mb-1">Revenus/an</div>
                  <div className="font-bold text-green-600">{(borne.revenusAnnuels / 1000000).toFixed(1)}M F</div>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <div className="text-slate-600 mb-1">Marge nette</div>
                  <div className="font-bold text-purple-600">{borne.margeNette}%</div>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <div className="text-slate-600 mb-1">Bénéfice/an</div>
                  <div className="font-bold text-blue-600">{(borne.beneficeNet / 1000000).toFixed(1)}M F</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTendances = () => (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-slate-900 mb-4">Tendances & Analytics</h3>
      <div className="text-center text-slate-500 py-12">
        <BarChart3 className="h-16 w-16 mx-auto mb-4 opacity-50" />
        <p>Section en cours de développement</p>
      </div>
    </div>
  );

  const renderInsights = () => (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-slate-900 mb-4">Insights & Recommandations</h3>
      <div className="text-center text-slate-500 py-12">
        <AlertCircle className="h-16 w-16 mx-auto mb-4 opacity-50" />
        <p>Analyses prédictives à venir</p>
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', label: 'Vue d\'ensemble', icon: Home },
    { id: 'tarifs', label: 'Tarifs', icon: DollarSign },
    { id: 'bornes', label: 'Bornes', icon: Zap },
    { id: 'tendances', label: 'Tendances', icon: TrendingUp },
    { id: 'insights', label: 'Insights', icon: BarChart3 }
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'overview': return renderOverview();
      case 'tarifs': return renderTarifs();
      case 'bornes': return renderBornes();
      case 'tendances': return renderTendances();
      case 'insights': return renderInsights();
      default: return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => onNavigate && onNavigate('home')}
              className="flex items-center gap-3 hover:opacity-80 transition"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">Makaya Recharge</h1>
                <p className="text-xs text-slate-600">Réseau de Stations de Recharge</p>
              </div>
            </button>
            <button
              onClick={() => onNavigate && onNavigate('home')}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition flex items-center gap-2"
            >
              <Home className="h-4 w-4" />
              Accueil
            </button>
          </div>

          <div className="flex overflow-x-auto gap-2 pb-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition ${
                    activeTab === tab.id
                      ? 'bg-green-500 text-white shadow-lg'
                      : 'bg-white text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {renderContent()}
      </main>

      {selectedStation && (
        <StationModal 
          station={selectedStation} 
          onClose={() => setSelectedStation(null)} 
        />
      )}
    </div>
  );
};

export default MakayaRecharge;
