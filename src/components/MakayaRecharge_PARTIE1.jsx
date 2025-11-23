// PARTIE 1/3 - Imports, données et composants de base
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
  X
} from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart as RechartsPie, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import rechargeDataOptimized from '../data/rechargeDataOptimized';

const MakayaRecharge = () => {
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

  // Données pour les graphiques de tendances
  const revenueData = trends?.monthlyRevenue || [
    { month: 'Jan', revenue: 650, growth: 15 },
    { month: 'Fév', revenue: 720, growth: 18 },
    { month: 'Mar', revenue: 800, growth: 22 },
    { month: 'Avr', revenue: 850, growth: 20 },
    { month: 'Mai', revenue: 920, growth: 25 },
    { month: 'Juin', revenue: 950, growth: 23 }
  ];

  const utilisationData = trends?.dailyUsage || [
    { hour: '6h', sessions: 45, power: 180 },
    { hour: '9h', sessions: 120, power: 480 },
    { hour: '12h', sessions: 95, power: 380 },
    { hour: '15h', sessions: 85, power: 340 },
    { hour: '18h', sessions: 140, power: 560 },
    { hour: '21h', sessions: 110, power: 440 }
  ];

  const segmentData = marketInsights?.segments || [
    { name: 'Particuliers', value: 45, color: '#3b82f6' },
    { name: 'Entreprises', value: 30, color: '#10b981' },
    { name: 'Flottes', value: 15, color: '#f59e0b' },
    { name: 'Taxis', value: 10, color: '#8b5cf6' }
  ];

  const performanceData = trends?.bornesPerformance || [
    { type: 'Ultra-rapide', satisfaction: 95, utilisation: 88, fiabilite: 92 },
    { type: 'Rapide', satisfaction: 90, utilisation: 85, fiabilite: 90 },
    { type: 'Standard', satisfaction: 85, utilisation: 75, fiabilite: 88 },
    { type: 'Lente', satisfaction: 78, utilisation: 65, fiabilite: 85 }
  ];

  // Composant KPI Card
  const KPICard = ({ icon: Icon, label, value, change, color }) => {
    const colorClasses = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      yellow: 'from-yellow-500 to-yellow-600',
      purple: 'from-purple-500 to-purple-600'
    };

    return (
      <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm text-gray-600 mb-2">{label}</p>
            <p className="text-3xl font-bold text-gray-900 mb-2">{value}</p>
            <div className="flex items-center gap-2">
              <span className="text-green-600 text-sm font-semibold flex items-center gap-1">
                <ArrowUpRight className="w-4 h-4" />
                {change}
              </span>
              <span className="text-xs text-gray-500">vs mois dernier</span>
            </div>
          </div>
          <div className={`p-3 rounded-xl bg-gradient-to-br ${colorClasses[color]} shadow-lg`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    );
  };

  // Composant Station Card
  const StationCard = ({ station, onClick }) => (
    <div 
      onClick={() => onClick(station)}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer p-6 border-2 border-transparent hover:border-blue-500"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-blue-100 rounded-lg">
            <MapPin className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900">{station.nom}</h3>
            <p className="text-sm text-gray-600">{station.localisation}</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
          station.statut === 'Opérationnelle' 
            ? 'bg-green-100 text-green-700' 
            : 'bg-yellow-100 text-yellow-700'
        }`}>
          {station.statut}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center gap-2">
          <Battery className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-600">{station.bornesDisponibles} bornes</span>
        </div>
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-600">{station.puissanceTotale}</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <div>
          <p className="text-xs text-gray-500">Revenus mensuels</p>
          <p className="text-lg font-bold text-gray-900">{station.revenusMensuels}</p>
        </div>
        <ChevronRight className="w-5 h-5 text-gray-400" />
      </div>
    </div>
  );

  // Modal Station détaillée
  const StationModal = ({ station, onClose }) => {
    if (!station) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">{station.nom}</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6 space-y-6">
            {/* Informations générales */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <h3 className="font-bold text-gray-900">Localisation</h3>
                </div>
                <p className="text-gray-700">{station.localisation}</p>
                <p className="text-sm text-gray-600 mt-2">{station.adresseComplete}</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="w-6 h-6 text-green-600" />
                  <h3 className="font-bold text-gray-900">Performance Financière</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Revenus mensuels</span>
                    <span className="font-bold text-gray-900">{station.revenusMensuels}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">ROI</span>
                    <span className="font-bold text-green-600">{station.roi}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bornes disponibles */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bornes de Recharge</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {station.bornes?.map((borne, index) => (
                  <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-blue-500 transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Zap className={`w-5 h-5 ${borne.statut === 'Disponible' ? 'text-green-500' : 'text-orange-500'}`} />
                        <span className="font-bold">{borne.type}</span>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        borne.statut === 'Disponible' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-orange-100 text-orange-700'
                      }`}>
                        {borne.statut}
                      </span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Puissance</span>
                        <span className="font-semibold">{borne.puissance}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Temps charge</span>
                        <span className="font-semibold">{borne.tempsCharge}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tarif</span>
                        <span className="font-semibold text-blue-600">{borne.tarif}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Services & Commodités</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {station.services?.map((service, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Horaires */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-6 h-6 text-gray-700" />
                <h3 className="font-bold text-gray-900">Horaires d'ouverture</h3>
              </div>
              <p className="text-gray-700">{station.horaires}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // FIN PARTIE 1/3
  // CONTINUER AVEC PARTIE 2/3
