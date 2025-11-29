// ============================================================
// MAKAYA RECHARGE - VERSION CORRIGÉE AVEC CAHIER DE CHARGE
// ============================================================

import React, { useState } from 'react';
import { 
  TrendingUp, 
  Battery, 
  Users, 
  DollarSign, 
  Zap, 
  MapPin,
  Clock,
  Award,
  Target,
  BarChart3,
  PieChart,
  Activity,
  Calendar,
  ChevronRight,
  Star,
  CheckCircle2,
  AlertCircle,
  Info,
  ArrowUpRight,
  ArrowDownRight,
  Sparkles,
  Shield,
  Gift,
  Crown,
  X,
  FileText  // 🆕 Ajout pour Cahier de Charge
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  PieChart as RechartsPie, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer, 
  Area, 
  AreaChart, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar 
} from 'recharts';
import rechargeDataOptimized from '../data/rechargeDataOptimized';

const MakayaRecharge = ({ onNavigate }) => {  // 🆕 Ajout du prop onNavigate
  const [activeTab, setActiveTab] = useState('vue-ensemble');
  const [selectedStation, setSelectedStation] = useState(null);
  const [selectedAbonnement, setSelectedAbonnement] = useState(null);

  // Extraction sécurisée des données
  const overview = rechargeDataOptimized?.overview || {};
  const stations = rechargeDataOptimized?.stations || [];
  const typesBornesArray = rechargeDataOptimized?.typesBornes 
    ? Object.entries(rechargeDataOptimized.typesBornes).map(([key, value]) => ({
        id: key,
        ...value
      }))
    : [];
  const abonnements = rechargeDataOptimized?.abonnements || [];
  const trends = rechargeDataOptimized?.trends || {};
  const marketInsights = rechargeDataOptimized?.marketInsights || {};

  // Données KPIs avec valeurs par défaut
  const kpis = [
    {
      icon: DollarSign,
      label: "Revenus Annuels",
      value: overview.revenusAnnuels || "0 Mds FCFA",
      change: "+23%",
      color: "blue"
    },
    {
      icon: Zap,
      label: "Sessions/jour",
      value: overview.sessionsMoyennesJour || "0",
      change: "+18%",
      color: "green"
    },
    {
      icon: Battery,
      label: "Taux Utilisation",
      value: overview.tauxUtilisation || "0%",
      change: "+5%",
      color: "yellow"
    },
    {
      icon: Users,
      label: "Abonnés Actifs",
      value: overview.abonnesActifs || "0",
      change: "+31%",
      color: "purple"
    }
  ];

  // ... (Gardez toutes les autres données : revenueData, utilisationData, segmentData, performanceData)

  // Pour ne pas alourdir, je copie juste les références
  const revenueData = trends?.monthlyRevenue || [];
  const utilisationData = trends?.dailyUsage || [];
  const segmentData = marketInsights?.segments || [];
  const performanceData = trends?.bornesPerformance || [];

  // ============================================================
  // NOTE: Toutes les autres fonctions render restent identiques
  // (renderVueEnsemble, renderTypesBornes, renderAbonnements, etc.)
  // Je les garde telles quelles du fichier backup
  // ============================================================

  // Rendu principal avec navigation par onglets
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 mb-8 text-white shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-white bg-opacity-20 rounded-xl backdrop-blur-sm">
                <Zap className="w-12 h-12" />
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-2">Makaya Recharge</h1>
                <p className="text-blue-100">Infrastructure de Recharge pour Véhicules Électriques</p>
              </div>
            </div>
            
            {/* 🆕 BOUTON CAHIER DE CHARGE */}
            {onNavigate && (
              <button
                onClick={() => onNavigate('cahier-charge')}
                className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                <FileText className="w-5 h-5" />
                Cahier de Charge
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>
          
          {/* Navigation Tabs - 🆕 AVEC CAHIER DE CHARGE */}
          <div className="flex flex-wrap gap-2 mt-6">
            {[
              { id: 'vue-ensemble', label: 'Vue d\'Ensemble', icon: BarChart3 },
              { id: 'types-bornes', label: 'Types de Bornes', icon: Battery },
              { id: 'abonnements', label: 'Abonnements', icon: Users },
              { id: 'tendances', label: 'Tendances', icon: TrendingUp },
              { id: 'insights', label: 'Insights', icon: Target },
              { id: 'cahier-charge', label: 'Cahier de Charge', icon: FileText, badge: 'NEW' }  // 🆕 NOUVEAU ONGLET
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  if (tab.id === 'cahier-charge' && onNavigate) {
                    onNavigate('cahier-charge');
                  } else {
                    setActiveTab(tab.id);
                  }
                }}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all relative ${
                  activeTab === tab.id
                    ? 'bg-white text-blue-600 shadow-lg'
                    : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
                {tab.badge && (
                  <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-green-500 text-white text-xs font-bold rounded-full animate-pulse">
                    {tab.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Contenu dynamique */}
        <div className="transition-all duration-300">
          {activeTab === 'vue-ensemble' && <VueEnsemble />}
          {activeTab === 'types-bornes' && <TypesBornes />}
          {activeTab === 'abonnements' && <Abonnements />}
          {activeTab === 'tendances' && <Tendances />}
          {activeTab === 'insights' && <Insights />}
          {/* Le cahier de charge est géré par onNavigate, pas ici */}
        </div>

        {/* Modals */}
        {selectedStation && <StationModal station={selectedStation} onClose={() => setSelectedStation(null)} />}
        {selectedAbonnement && <AbonnementModal abonnement={selectedAbonnement} onClose={() => setSelectedAbonnement(null)} />}
      </div>
    </div>
  );

  // ============================================================
  // COMPOSANTS SIMPLIFIÉS (pour ce fichier de correction)
  // Dans le vrai fichier, utilisez les versions complètes du backup
  // ============================================================

  function VueEnsemble() {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br from-${kpi.color}-500 to-${kpi.color}-600`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-green-600">{kpi.change}</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">{kpi.label}</p>
                <p className="text-2xl font-bold text-gray-900">{kpi.value}</p>
              </div>
            );
          })}
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold mb-4">Vue d'ensemble complète</h3>
          <p className="text-gray-600">
            Le réseau Makaya Recharge continue sa croissance avec {overview.nombreStations || 0} stations 
            et {overview.abonnesActifs || 0} abonnés actifs.
          </p>
        </div>
      </div>
    );
  }

  function TypesBornes() {
    return (
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-4">Types de Bornes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {typesBornesArray.map((borne) => (
            <div key={borne.id} className="border-2 border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-lg">{borne.nom}</h4>
              <p className="text-gray-600">{borne.puissance}</p>
              <p className="text-sm text-gray-500">{borne.tempsCharge}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  function Abonnements() {
    return (
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-4">Abonnements</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {abonnements.map((abo) => (
            <div key={abo.nom} className="border-2 border-gray-200 rounded-lg p-4">
              <h4 className="font-bold">{abo.nom}</h4>
              <p className="text-2xl font-bold text-blue-600">{abo.prix}</p>
              <ul className="mt-4 space-y-2">
                {abo.avantages.map((av, i) => (
                  <li key={i} className="text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    {av}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }

  function Tendances() {
    return (
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-4">Tendances</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }

  function Insights() {
    return (
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-4">Insights Marché</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold mb-2">Segments Clients</h4>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPie>
                  <Pie data={segmentData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
                    {segmentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </RechartsPie>
              </ResponsiveContainer>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-2">Prévisions 2025</h4>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600">Croissance Revenus</p>
                <p className="text-2xl font-bold text-blue-600">+35%</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-gray-600">Nouvelles Stations</p>
                <p className="text-2xl font-bold text-green-600">+12</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function StationModal({ station, onClose }) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
        <div className="bg-white rounded-xl p-6 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">{station.nom}</h3>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="space-y-2">
            <p><strong>Adresse:</strong> {station.adresse}</p>
            <p><strong>Bornes:</strong> {station.nombreBornes}</p>
            <p><strong>Disponibilité:</strong> {station.disponibilite}</p>
          </div>
        </div>
      </div>
    );
  }

  function AbonnementModal({ abonnement, onClose }) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
        <div className="bg-white rounded-xl p-6 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">{abonnement.nom}</h3>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="space-y-4">
            <p className="text-3xl font-bold text-blue-600">{abonnement.prix}</p>
            <ul className="space-y-2">
              {abonnement.avantages.map((av, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  {av}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              S'abonner
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default MakayaRecharge;
