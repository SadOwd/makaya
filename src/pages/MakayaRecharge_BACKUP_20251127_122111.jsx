// ============================================================
// MAKAYA RECHARGE - PARTIE 1/3
// Imports, Configuration, Données et Composants de Base
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
  X
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

  // ============================================================
  // COMPOSANT: KPI Card
  // ============================================================
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

  // ============================================================
  // COMPOSANT: Station Card
  // ============================================================
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

  // ============================================================
  // COMPOSANT: Modal Station (Détails complets)
  // ============================================================
  const StationModal = ({ station, onClose }) => {
    if (!station) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">{station.nom}</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-all">
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

  // ============================================================
  
  // ============================================================

  
  // Composant Modal Abonnement
  const AbonnementModal = ({ abonnement, onClose }) => {
    if (!abonnement) return null;

    const IconBadge = abonnement.type === 'Premium' ? Crown : 
                     abonnement.type === 'Business' ? Award :
                     abonnement.type === 'Famille' ? Users :
                     abonnement.type === 'Etudiant' ? Star : Shield;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-6 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white bg-opacity-20 rounded-xl backdrop-blur-sm">
                  <IconBadge className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{abonnement.type}</h2>
                  <p className="text-blue-100">{abonnement.description}</p>
                </div>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-all">
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Pricing */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
              <div className="inline-block mb-4">
                <span className="text-5xl font-bold text-gray-900">{abonnement.prix}</span>
                <span className="text-gray-600 ml-2">/ mois</span>
              </div>
              {abonnement.economies && (
                <div className="flex items-center justify-center gap-2 text-green-600 font-semibold">
                  <Gift className="w-5 h-5" />
                  <span>Économisez {abonnement.economies}</span>
                </div>
              )}
            </div>

            {/* Avantages principaux */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-yellow-500" />
                Avantages Inclus
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {abonnement.avantages?.map((avantage, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-4">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{avantage}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Détails de l'offre */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-blue-600" />
                  <h3 className="font-bold text-gray-900">Recharge</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600">Sessions mensuelles</p>
                    <p className="text-xl font-bold text-gray-900">{abonnement.sessionsIncl || 'Illimité'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Réduction sur recharge</p>
                    <p className="text-xl font-bold text-green-600">{abonnement.reduction || '-20%'}</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-purple-600" />
                  <h3 className="font-bold text-gray-900">Services</h3>
                </div>
                <div className="space-y-2">
                  {abonnement.servicesExtras?.map((service, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-500" />
                      <span className="text-sm text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bornes accessibles */}
            {abonnement.bornesType && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Battery className="w-6 h-6 text-green-600" />
                  Bornes Accessibles
                </h3>
                <div className="grid md:grid-cols-3 gap-3">
                  {abonnement.bornesType.map((type, index) => (
                    <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                      <Zap className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <p className="font-semibold text-gray-900">{type}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Stats utilisateurs */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Popularité & Satisfaction</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">{abonnement.utilisateurs || '1,200'}</p>
                  <p className="text-sm text-gray-600 mt-1">Abonnés</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-600">{abonnement.satisfaction || '94%'}</p>
                  <p className="text-sm text-gray-600 mt-1">Satisfaction</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">{abonnement.avis || '4.8'}/5</p>
                </div>
              </div>
            </div>

            {/* Call to action */}
            <div className="flex gap-4">
              <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold hover:shadow-lg transition-all">
                Souscrire Maintenant
              </button>
              <button className="px-6 py-4 border-2 border-gray-300 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 transition-all">
                Comparer
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Section Vue d'Ensemble
  const renderVueEnsemble = () => (
    <div className="space-y-8">
      {/* KPIs */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Indicateurs Clés de Performance</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi, index) => (
            <KPICard key={index} {...kpi} />
          ))}
        </div>
      </div>

      {/* Graphique Revenus */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Évolution des Revenus</h3>
          <div className="flex items-center gap-2 text-green-600">
            <TrendingUp className="w-5 h-5" />
            <span className="font-semibold">+23% ce mois</span>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={revenueData}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }}
            />
            <Area type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Stations actives */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Stations de Recharge</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stations.map((station) => (
            <StationCard key={station.id} station={station} onClick={setSelectedStation} />
          ))}
        </div>
      </div>
    </div>
  );

  // Section Types de Bornes
  const renderTypesBornes = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-4">Types de Bornes de Recharge</h2>
        <p className="text-blue-100">
          Découvrez notre gamme complète de bornes adaptées à tous les besoins
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {typesBornesArray.map((borne) => (
          <div key={borne.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{borne.type}</h3>
                  <p className="text-sm text-gray-600">{borne.puissance}</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                ROI: {borne.roi}
              </span>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Temps de charge</p>
                    <p className="font-bold text-gray-900">{borne.tempsCharge}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Prix installation</p>
                    <p className="font-bold text-gray-900">{borne.investissement}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Tarif/kWh</p>
                    <p className="font-bold text-blue-600">{borne.tarifkWh}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Revenus/mois</p>
                    <p className="font-bold text-green-600">{borne.revenusMensuels}</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-700 mb-2">Cas d'usage:</p>
                <div className="flex flex-wrap gap-2">
                  {borne.casUsage?.map((cas, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">
                      {cas}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  
  // CONTINUER AVEC PARTIE 3/3

  
  // Section Abonnements
  const renderAbonnements = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-4">Nos Abonnements</h2>
        <p className="text-purple-100">
          Choisissez la formule qui correspond à vos besoins de recharge
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {abonnements.map((abo) => {
          const IconType = abo.type === 'Premium' ? Crown : 
                          abo.type === 'Business' ? Award :
                          abo.type === 'Famille' ? Users :
                          abo.type === 'Etudiant' ? Star : Shield;

          return (
            <div 
              key={abo.id}
              onClick={() => setSelectedAbonnement(abo)}
              className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all cursor-pointer border-2 ${
                abo.populaire ? 'border-yellow-400 relative' : 'border-transparent hover:border-purple-500'
              }`}
            >
              {abo.populaire && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    POPULAIRE
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className={`inline-flex p-4 rounded-2xl mb-4 ${
                  abo.populaire ? 'bg-gradient-to-br from-yellow-400 to-orange-500' :
                  'bg-gradient-to-br from-blue-500 to-purple-600'
                }`}>
                  <IconType className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{abo.type}</h3>
                <p className="text-gray-600 text-sm mb-4">{abo.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{abo.prix}</span>
                  <span className="text-gray-600">/mois</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {abo.avantages?.slice(0, 4).map((avantage, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{avantage}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedAbonnement(abo);
                }}
                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  abo.populaire 
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:shadow-lg' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Voir les détails
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );

  // Section Tendances
  const renderTendances = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-4">Tendances & Analyses</h2>
        <p className="text-green-100">
          Suivez l'évolution de votre activité en temps réel
        </p>
      </div>

      {/* Utilisation quotidienne */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Activity className="w-6 h-6 text-green-600" />
          Utilisation Quotidienne
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={utilisationData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="hour" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }}
            />
            <Legend />
            <Bar dataKey="sessions" fill="#10b981" name="Sessions" radius={[8, 8, 0, 0]} />
            <Bar dataKey="power" fill="#3b82f6" name="Puissance (kW)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Performance des bornes */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Target className="w-6 h-6 text-blue-600" />
          Performance par Type de Borne
        </h3>
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart data={performanceData}>
            <PolarGrid stroke="#e5e7eb" />
            <PolarAngleAxis dataKey="type" stroke="#6b7280" />
            <PolarRadiusAxis stroke="#6b7280" />
            <Radar name="Satisfaction" dataKey="satisfaction" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
            <Radar name="Utilisation" dataKey="utilisation" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
            <Radar name="Fiabilité" dataKey="fiabilite" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.3} />
            <Legend />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* KPIs de tendance */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="w-8 h-8 text-blue-600" />
            <span className="text-green-600 font-bold text-sm flex items-center gap-1">
              <ArrowUpRight className="w-4 h-4" />
              +18%
            </span>
          </div>
          <h4 className="text-sm text-gray-600 mb-2">Croissance Sessions</h4>
          <p className="text-3xl font-bold text-gray-900">+1,245</p>
          <p className="text-xs text-gray-600 mt-2">Cette semaine vs précédente</p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <Battery className="w-8 h-8 text-green-600" />
            <span className="text-green-600 font-bold text-sm flex items-center gap-1">
              <ArrowUpRight className="w-4 h-4" />
              +5%
            </span>
          </div>
          <h4 className="text-sm text-gray-600 mb-2">Taux d'Occupation</h4>
          <p className="text-3xl font-bold text-gray-900">76%</p>
          <p className="text-xs text-gray-600 mt-2">Moyenne sur 7 jours</p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <Users className="w-8 h-8 text-purple-600" />
            <span className="text-green-600 font-bold text-sm flex items-center gap-1">
              <ArrowUpRight className="w-4 h-4" />
              +31%
            </span>
          </div>
          <h4 className="text-sm text-gray-600 mb-2">Nouveaux Abonnés</h4>
          <p className="text-3xl font-bold text-gray-900">+287</p>
          <p className="text-xs text-gray-600 mt-2">Ce mois</p>
        </div>
      </div>
    </div>
  );

  // Section Insights
  const renderInsights = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-4">Insights du Marché</h2>
        <p className="text-indigo-100">
          Analyses approfondies et prévisions stratégiques
        </p>
      </div>

      {/* Segmentation marché */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <PieChart className="w-6 h-6 text-indigo-600" />
          Segmentation du Marché
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <ResponsiveContainer width="100%" height={300}>
            <RechartsPie>
              <Pie
                data={segmentData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name} ${value}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {segmentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </RechartsPie>
          </ResponsiveContainer>

          <div className="space-y-4">
            {segmentData.map((segment, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: segment.color }}></div>
                  <span className="font-semibold text-gray-900">{segment.name}</span>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-900">{segment.value}%</p>
                  <p className="text-xs text-gray-600">du marché</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Insights clés */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-600 rounded-lg">
              <Info className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Opportunité de Croissance</h4>
              <p className="text-gray-700 text-sm mb-3">
                Le segment des flottes commerciales montre un potentiel de croissance de 45% avec l'adoption croissante des véhicules électriques dans le transport professionnel.
              </p>
              <span className="text-xs text-blue-600 font-semibold">Recommandation: Développer des offres B2B dédiées</span>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-600 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-green-600 rounded-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Heures de Pointe Identifiées</h4>
              <p className="text-gray-700 text-sm mb-3">
                Les plages 8h-10h et 17h-19h représentent 60% de l'utilisation quotidienne. Optimisation tarifaire recommandée pour lisser la demande.
              </p>
              <span className="text-xs text-green-600 font-semibold">Action: Implémenter tarification dynamique</span>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-600 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-yellow-600 rounded-lg">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Zone à Développer</h4>
              <p className="text-gray-700 text-sm mb-3">
                Le quartier d'Adidogomé affiche une forte demande non satisfaite avec seulement 2 stations pour 15,000 résidents. ROI estimé à 180% sur 3 ans.
              </p>
              <span className="text-xs text-yellow-600 font-semibold">Priorité: Extension réseau dans cette zone</span>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-600 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-purple-600 rounded-lg">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Satisfaction Clients</h4>
              <p className="text-gray-700 text-sm mb-3">
                Score NPS de 72 (excellent). Les clients valorisent particulièrement la rapidité de charge et la disponibilité des bornes. Temps d'attente moyen: 3 min.
              </p>
              <span className="text-xs text-purple-600 font-semibold">Force: Expérience utilisateur optimale</span>
            </div>
          </div>
        </div>
      </div>

      {/* Prévisions */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Calendar className="w-6 h-6 text-indigo-600" />
          Prévisions 2025
        </h3>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
            <p className="text-sm text-gray-600 mb-2">Croissance Revenus</p>
            <p className="text-3xl font-bold text-blue-600">+35%</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
            <p className="text-sm text-gray-600 mb-2">Nouvelles Stations</p>
            <p className="text-3xl font-bold text-green-600">+12</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl">
            <p className="text-sm text-gray-600 mb-2">Abonnés Projetés</p>
            <p className="text-3xl font-bold text-yellow-600">8,500</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
            <p className="text-sm text-gray-600 mb-2">Part de Marché</p>
            <p className="text-3xl font-bold text-purple-600">42%</p>
          </div>
        </div>
      </div>
    </div>
  );

  // Rendu principal avec navigation par onglets
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 mb-8 text-white shadow-2xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-4 bg-white bg-opacity-20 rounded-xl backdrop-blur-sm">
              <Zap className="w-12 h-12" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">Makaya Recharge</h1>
              <p className="text-blue-100">Infrastructure de Recharge pour Véhicules Électriques</p>
            </div>
          </div>
          
          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 mt-6">
            {[
              { id: 'vue-ensemble', label: 'Vue d\'Ensemble', icon: BarChart3 },
              { id: 'types-bornes', label: 'Types de Bornes', icon: Battery },
              { id: 'abonnements', label: 'Abonnements', icon: Users },
              { id: 'tendances', label: 'Tendances', icon: TrendingUp },
              { id: 'insights', label: 'Insights', icon: Target }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-white text-blue-600 shadow-lg'
                    : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Contenu dynamique */}
        <div className="transition-all duration-300">
          {activeTab === 'vue-ensemble' && renderVueEnsemble()}
          {activeTab === 'types-bornes' && renderTypesBornes()}
          {activeTab === 'abonnements' && renderAbonnements()}
          {activeTab === 'tendances' && renderTendances()}
          {activeTab === 'insights' && renderInsights()}
        </div>

        {/* Modals */}
        {selectedStation && <StationModal station={selectedStation} onClose={() => setSelectedStation(null)} />}
        {selectedAbonnement && <AbonnementModal abonnement={selectedAbonnement} onClose={() => setSelectedAbonnement(null)} />}
      </div>
    </div>
  );
};

export default MakayaRecharge;

// FIN PARTIE 3/3