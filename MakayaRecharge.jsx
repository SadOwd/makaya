// ============================================================================
// PARTIE 1 - IMPORTS, CONFIGURATION ET DONNÉES (VERSION COMPLÈTE)
// ============================================================================

import React, { useState } from 'react';
import { 
  Zap, TrendingUp, DollarSign, Users, MapPin, 
  Clock, Battery, Settings, BarChart3, AlertCircle,
  ChevronRight, X, Home, Calendar, ArrowUp, ArrowDown,
  Target, Award, ThumbsUp, Lightbulb, TrendingDown,
  Activity, Percent, CheckCircle, AlertTriangle, Star,
  FileText, Shield, Wrench, Lock, BookOpen, Phone,
  Mail, Headphones, Database, Download, Share2,
  Sparkles, Rocket, Gift, Globe, Leaf, Droplet, Recycle,
  Building
} from 'lucide-react';

const MakayaRecharge = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedStation, setSelectedStation] = useState(null);
  const [selectedAbonnement, setSelectedAbonnement] = useState(null);

  // Définition des onglets (avec nouvel onglet Tarifs)
  const tabs = [
    { id: 'overview', label: 'Vue d\'ensemble', icon: Home },
    { id: 'types', label: 'Types de Bornes', icon: Battery },
    { id: 'tarifs', label: 'Tarifs', icon: DollarSign },
    { id: 'insights', label: 'Insights', icon: BarChart3 },
    { id: 'cahier-charge', label: 'Cahier de Charge', icon: FileText }
  ];

  // Statistiques de recharge
  const chargingStats = {
    total: 10,
    active: 10,
    utilizationRate: 85.4,
    monthlyRevenue: 10350
  };

  // Données des bornes (avec prix en FCFA et USD)
  const bornesData = [
    {
      type: 'Borne AC 22kW',
      power: '22 kW',
      count: 5,
      chargeTime: '2-4h',
      price: '3 000 $',
      priceFCFA: '1 750 000 F',
      icon: Battery,
      gradient: 'from-blue-500 to-blue-700',
      description: 'Charge normale pour usage quotidien',
      features: [
        'Connecteur Type 2',
        'Compatible tous véhicules',
        'Idéal stationnement longue durée',
        'Coût d\'installation réduit'
      ]
    },
    {
      type: 'Borne DC 60kW',
      power: '60 kW',
      count: 3,
      chargeTime: '30-45min',
      price: '15 000 $',
      priceFCFA: '8 750 000 F',
      icon: Zap,
      gradient: 'from-orange-500 to-red-600',
      description: 'Charge rapide pour transit',
      features: [
        'Connecteurs CCS et CHAdeMO',
        'Charge rapide 80% en 30min',
        'Stations-service, centres commerciaux',
        'Gestion intelligente de la puissance'
      ]
    },
    {
      type: 'Borne DC 120kW',
      power: '120 kW',
      count: 2,
      chargeTime: '15-20min',
      price: '25 000 $',
      priceFCFA: '14 600 000 F',
      icon: Zap,
      gradient: 'from-purple-600 to-pink-600',
      description: 'Charge ultra-rapide premium',
      features: [
        'Technologie de pointe',
        'Charge complète en 20min',
        'Axes autoroutiers',
        'Refroidissement liquide'
      ]
    }
  ];

  // Composant StatCard
  const StatCard = ({ icon: Icon, label, value, bgColor, description }) => (
    <div className={`${bgColor} rounded-xl p-6 text-white shadow-lg`}>
      <div className="flex items-center justify-between mb-4">
        <Icon className="w-10 h-10 opacity-80" />
        <div className="text-3xl font-bold">{value}</div>
      </div>
      <div className="text-sm font-semibold mb-1">{label}</div>
      <div className="text-xs opacity-80">{description}</div>
    </div>
  );

  // Composant QuickStat
  const QuickStat = ({ icon: Icon, label, value }) => (
    <div className="bg-white rounded-lg p-4 border-2 border-gray-200">
      <div className="flex items-center gap-3">
        <div className="bg-blue-50 p-2 rounded-lg">
          <Icon className="w-5 h-5 text-blue-600" />
        </div>
        <div>
          <div className="text-2xl font-bold text-gray-900">{value}</div>
          <div className="text-xs text-gray-600">{label}</div>
        </div>
      </div>
    </div>
  );
// ============================================================================
// PARTIE 2 - COMPOSANTS VISUELS AVANCÉS
// ============================================================================

  // Composant InfoCard pour affichage d'information
  const InfoCard = ({ icon: Icon, title, value, description, color = 'blue' }) => (
    <div className={`bg-${color}-50 rounded-lg p-4 border-2 border-${color}-200 hover:shadow-md transition-all`}>
      <div className="flex items-start gap-3">
        <div className={`bg-${color}-100 p-2 rounded-lg`}>
          <Icon className={`w-6 h-6 text-${color}-600`} />
        </div>
        <div className="flex-1">
          <h4 className={`font-semibold text-${color}-900 mb-1`}>{title}</h4>
          {value && <div className={`text-2xl font-bold text-${color}-700 mb-1`}>{value}</div>}
          {description && <p className="text-sm text-gray-600">{description}</p>}
        </div>
      </div>
    </div>
  );

  // Composant LocationCard
  const LocationCard = ({ name, address, type, status }) => {
    const statusColors = {
      'Opérationnel': 'green',
      'En construction': 'yellow',
      'Planifié': 'blue'
    };
    const statusColor = statusColors[status] || 'gray';

    return (
      <div className="bg-white rounded-lg p-4 border-2 border-gray-200 hover:shadow-md transition-all">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-blue-600" />
            <h4 className="font-semibold text-gray-900">{name}</h4>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-semibold bg-${statusColor}-100 text-${statusColor}-700`}>
            {status}
          </span>
        </div>
        <p className="text-sm text-gray-600 mb-2">{address}</p>
        <div className="flex items-center gap-2 text-sm">
          <Building className="w-4 h-4 text-gray-500" />
          <span className="text-gray-700">{type}</span>
        </div>
      </div>
    );
  };

  // Badge animé "NEW"
  const PulsingBadge = ({ text = "NEW" }) => (
    <span className="relative inline-flex items-center">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full px-2 py-1 text-xs font-bold bg-red-500 text-white">
        {text}
      </span>
    </span>
  );
// ============================================================================
// PARTIE 3 - NAVIGATION ET GESTION DES ONGLETS (PRIX EN FCFA)
// ============================================================================

  return (
    <div className="min-h-screen bg-gray-50">
      {/* En-tête principal */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                <Zap className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Makaya Recharge</h1>
                <p className="text-blue-100">Infrastructure de Recharge pour Véhicules Électriques</p>
              </div>
            </div>
            {onNavigate && (
              <button
                onClick={() => onNavigate('cahier-charge')}
                className="px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-2 font-semibold shadow-lg"
              >
                <FileText className="w-5 h-5" />
                Cahier de Charge
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Navigation par onglets */}
      <div className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex items-center gap-2 px-6 py-4 font-semibold transition-all whitespace-nowrap
                    ${isActive 
                      ? 'bg-blue-600 text-white border-b-4 border-blue-800' 
                      : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                  {tab.id === 'cahier-charge' && (
                    <PulsingBadge />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Onglet Vue d'ensemble */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Statistiques Clés */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                icon={Zap}
                label="Bornes Totales"
                value={chargingStats.total}
                bgColor="bg-blue-500"
                description="Installation complète"
              />
              <StatCard
                icon={Activity}
                label="Bornes Actives"
                value={chargingStats.active}
                bgColor="bg-green-500"
                description="Opérationnelles 24/7"
              />
              <StatCard
                icon={TrendingUp}
                label="Taux d'Utilisation"
                value={`${chargingStats.utilizationRate}%`}
                bgColor="bg-purple-500"
                description="Performance optimale"
              />
              <StatCard
                icon={DollarSign}
                label="Revenus Mensuels"
                value={`${(chargingStats.monthlyRevenue * 584).toLocaleString()} F`}
                bgColor="bg-emerald-500"
                description="Croissance continue"
              />
            </div>

            {/* Distribution des Bornes */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Battery className="w-7 h-7 text-blue-600" />
                Distribution des Bornes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {bornesData.map((borne, index) => (
                  <div key={index} className={`bg-gradient-to-br ${borne.gradient} rounded-lg p-6 text-white shadow-lg`}>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold">{borne.type}</h3>
                      <borne.icon className="w-8 h-8 opacity-80" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm opacity-90">Puissance</span>
                        <span className="font-bold">{borne.power}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm opacity-90">Quantité</span>
                        <span className="font-bold">{borne.count}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm opacity-90">Temps de charge</span>
                        <span className="font-bold">{borne.chargeTime}</span>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t border-white/30">
                        <span className="text-sm opacity-90">Prix unitaire</span>
                        <span className="font-bold text-lg">{borne.priceFCFA}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Statistiques rapides */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <QuickStat icon={Users} label="Utilisateurs actifs" value="850+" />
              <QuickStat icon={Zap} label="Sessions/jour" value="120+" />
              <QuickStat icon={Clock} label="Disponibilité" value="95%" />
              <QuickStat icon={TrendingUp} label="Croissance" value="+32%" />
            </div>

            {/* Projets de Budget */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <DollarSign className="w-7 h-7 text-green-600" />
                Analyse Budgétaire
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">Investissement Initial</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Bornes AC (5x)</span>
                      <span className="font-bold text-blue-900">8 750 000 F</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Bornes DC60 (3x)</span>
                      <span className="font-bold text-blue-900">26 250 000 F</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Bornes DC120 (2x)</span>
                      <span className="font-bold text-blue-900">29 200 000 F</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Infrastructure</span>
                      <span className="font-bold text-blue-900">21 020 000 F</span>
                    </div>
                    <div className="border-t-2 border-blue-300 pt-3 flex justify-between">
                      <span className="font-bold text-blue-900">Total</span>
                      <span className="font-bold text-2xl text-blue-600">85 220 000 F</span>
                    </div>
                    <div className="text-xs text-gray-500 text-right">(≈ 146 000 USD)</div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-4">Rentabilité Annuelle</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Revenus annuels</span>
                      <span className="font-bold text-green-900">72 500 000 F</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Charges annuelles</span>
                      <span className="font-bold text-red-600">-36 790 000 F</span>
                    </div>
                    <div className="border-t-2 border-green-300 pt-3 flex justify-between">
                      <span className="font-bold text-green-900">Bénéfice net</span>
                      <span className="font-bold text-2xl text-green-600">35 710 000 F</span>
                    </div>
                    <div className="bg-green-600 text-white rounded-lg p-3 mt-4 text-center">
                      <div className="text-sm mb-1">Retour sur investissement</div>
                      <div className="text-2xl font-bold">&lt; 12 mois</div>
                      <div className="text-sm mt-1">Rentabilité: 48%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Onglet Types de Bornes */}
        {activeTab === 'types' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Types de Bornes de Recharge</h2>
              <div className="space-y-6">
                {bornesData.map((borne, index) => (
                  <div key={index} className={`bg-gradient-to-r ${borne.gradient} rounded-lg p-6 text-white`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <borne.icon className="w-10 h-10" />
                          <div>
                            <h3 className="text-2xl font-bold">{borne.type}</h3>
                            <p className="text-sm opacity-90">{borne.description}</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div>
                            <div className="text-sm opacity-80">Puissance</div>
                            <div className="text-xl font-bold">{borne.power}</div>
                          </div>
                          <div>
                            <div className="text-sm opacity-80">Quantité</div>
                            <div className="text-xl font-bold">{borne.count}</div>
                          </div>
                          <div>
                            <div className="text-sm opacity-80">Temps charge</div>
                            <div className="text-xl font-bold">{borne.chargeTime}</div>
                          </div>
                          <div>
                            <div className="text-sm opacity-80">Prix unitaire</div>
                            <div className="text-xl font-bold">{borne.priceFCFA}</div>
                          </div>
                        </div>

                        <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                          <h4 className="font-semibold mb-2">Caractéristiques techniques</h4>
                          <ul className="space-y-1 text-sm">
                            {borne.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Onglet Insights */}
        {activeTab === 'insights' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <TrendingUp className="w-7 h-7 text-purple-600" />
                Analyses & Insights
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <InfoCard
                  icon={Battery}
                  title="Performance Énergétique"
                  value="95%"
                  description="Taux de disponibilité des bornes sur le dernier mois"
                  color="green"
                />
                <InfoCard
                  icon={Users}
                  title="Satisfaction Client"
                  value="4.8/5"
                  description="Note moyenne basée sur 1,250 avis clients"
                  color="blue"
                />
                <InfoCard
                  icon={Clock}
                  title="Temps Moyen"
                  value="38 min"
                  description="Durée moyenne d'une session de recharge"
                  color="purple"
                />
                <InfoCard
                  icon={Zap}
                  title="Énergie Délivrée"
                  value="12.5 MWh"
                  description="Total mensuel d'énergie distribuée"
                  color="yellow"
                />
              </div>

              <div className="mt-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-4">🎯 Objectifs & Projections</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-3xl font-bold mb-1">+45%</div>
                    <div className="text-sm">Croissance attendue Q4</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-3xl font-bold mb-1">20+</div>
                    <div className="text-sm">Nouvelles bornes en 2026</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-3xl font-bold mb-1">3 villes</div>
                    <div className="text-sm">Expansion régionale</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Localisations */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <MapPin className="w-7 h-7 text-red-600" />
                Sites d'Installation
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <LocationCard
                  name="Centre Commercial Lomé"
                  address="Boulevard du 13 Janvier, Lomé"
                  type="Centre commercial"
                  status="Opérationnel"
                />
                <LocationCard
                  name="Hôtel Sarakawa"
                  address="Avenue Sarakawa, Lomé"
                  type="Hôtellerie"
                  status="Opérationnel"
                />
                <LocationCard
                  name="Station Total Tokoin"
                  address="Rue de Tokoin, Lomé"
                  type="Station-service"
                  status="En construction"
                />
                <LocationCard
                  name="Aéroport de Lomé"
                  address="Route de l'Aéroport, Lomé"
                  type="Aéroport"
                  status="Planifié"
                />
                <LocationCard
                  name="Université de Lomé"
                  address="Campus universitaire, Lomé"
                  type="Établissement public"
                  status="Planifié"
                />
                <LocationCard
                  name="Zone Industrielle"
                  address="Zone Portuaire, Lomé"
                  type="Zone industrielle"
                  status="Planifié"
                />
              </div>
            </div>
          </div>
        )}
// ============================================================================
// PARTIE 4 - ONGLET CAHIER DE CHARGE (PRIX EN FCFA)
// ============================================================================

      {/* Onglet Cahier de Charge */}
      {activeTab === 'cahier-charge' && (
        <div className="space-y-6">
          {/* En-tête */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                <FileText className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">Cahier de Charge</h2>
                <p className="text-blue-100 text-lg">Infrastructure de Recharge Makaya</p>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">10</div>
                <div className="text-sm text-blue-100">Bornes Totales</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">67,7M</div>
                <div className="text-sm text-blue-100">Budget Total (FCFA)</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">&lt;12</div>
                <div className="text-sm text-blue-100">Mois ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">48%</div>
                <div className="text-sm text-blue-100">Rentabilité</div>
              </div>
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Sections du Cahier de Charge</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: Target, label: 'Contexte & Objectifs', color: 'blue' },
                { icon: Zap, label: 'Spécifications Techniques', color: 'yellow' },
                { icon: Shield, label: 'Sécurité & Normes', color: 'red' },
                { icon: DollarSign, label: 'Budget & ROI', color: 'green' },
                { icon: Calendar, label: 'Planning', color: 'purple' },
                { icon: Users, label: 'Équipe & Parties', color: 'indigo' }
              ].map((section, idx) => (
                <div 
                  key={idx}
                  className={`bg-${section.color}-50 border-2 border-${section.color}-200 rounded-lg p-4 hover:shadow-md transition-all cursor-pointer`}
                >
                  <section.icon className={`w-6 h-6 text-${section.color}-600 mb-2`} />
                  <div className={`font-semibold text-${section.color}-900 text-sm`}>
                    {section.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contexte et Objectifs */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-800">1. Contexte et Objectifs</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">📍 Contexte</h4>
                <p className="text-gray-700 text-sm">
                  Développement d'une infrastructure de recharge pour véhicules électriques au Togo, 
                  dans le cadre du projet Makaya visant à promouvoir la mobilité électrique durable.
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-2">🎯 Objectifs Principaux</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Installer 10 bornes de recharge (5 AC + 5 DC) sur des sites stratégiques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Assurer un taux de disponibilité de 95% minimum</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Atteindre un ROI en moins de 12 mois avec une rentabilité de 48%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Créer une expérience utilisateur fluide et moderne</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Spécifications Techniques */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-yellow-600" />
              <h3 className="text-xl font-bold text-gray-800">2. Spécifications Techniques</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {/* Bornes AC */}
              <div className="bg-yellow-50 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-900 mb-3 flex items-center gap-2">
                  <Battery className="w-5 h-5" />
                  Bornes AC (5 unités)
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Puissance:</span>
                    <span className="font-semibold">22 kW</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Type:</span>
                    <span className="font-semibold">Type 2</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Temps charge:</span>
                    <span className="font-semibold">2-4h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Prix unitaire:</span>
                    <span className="font-semibold text-green-600">1 750 000 FCFA</span>
                  </div>
                  <div className="flex justify-between border-t pt-2 mt-2">
                    <span className="text-gray-600 font-semibold">Total:</span>
                    <span className="font-bold text-green-600">8 750 000 FCFA</span>
                  </div>
                </div>
              </div>

              {/* Bornes DC60 */}
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-semibold text-orange-900 mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Bornes DC 60kW (3 unités)
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Puissance:</span>
                    <span className="font-semibold">60 kW</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Type:</span>
                    <span className="font-semibold">CCS / CHAdeMO</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Temps charge:</span>
                    <span className="font-semibold">30-45min</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Prix unitaire:</span>
                    <span className="font-semibold text-green-600">8 750 000 FCFA</span>
                  </div>
                  <div className="flex justify-between border-t pt-2 mt-2">
                    <span className="text-gray-600 font-semibold">Total:</span>
                    <span className="font-bold text-green-600">26 250 000 FCFA</span>
                  </div>
                </div>
              </div>

              {/* Bornes DC120 */}
              <div className="bg-red-50 rounded-lg p-4">
                <h4 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Bornes DC 120kW (2 unités)
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Puissance:</span>
                    <span className="font-semibold">120 kW</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Type:</span>
                    <span className="font-semibold">CCS / CHAdeMO</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Temps charge:</span>
                    <span className="font-semibold">15-20min</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Prix unitaire:</span>
                    <span className="font-semibold text-green-600">14 600 000 FCFA</span>
                  </div>
                  <div className="flex justify-between border-t pt-2 mt-2">
                    <span className="text-gray-600 font-semibold">Total:</span>
                    <span className="font-bold text-green-600">29 200 000 FCFA</span>
                  </div>
                </div>
              </div>

              {/* Infrastructure */}
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
                  <Wrench className="w-5 h-5" />
                  Infrastructure & Installation
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Génie civil:</span>
                    <span className="font-semibold">5 840 000 FCFA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Installation:</span>
                    <span className="font-semibold">4 670 000 FCFA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Raccordement:</span>
                    <span className="font-semibold">7 010 000 FCFA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Logiciel:</span>
                    <span className="font-semibold">3 500 000 FCFA</span>
                  </div>
                  <div className="flex justify-between border-t pt-2 mt-2">
                    <span className="text-gray-600 font-semibold">Total:</span>
                    <span className="font-bold text-green-600">21 020 000 FCFA</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Budget Total */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg p-6 mt-4 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm opacity-90">Budget Total Infrastructure</div>
                  <div className="text-4xl font-bold mt-1">67 720 000 FCFA</div>
                  <div className="text-sm opacity-80 mt-1">(≈ 116 000 USD)</div>
                </div>
                <DollarSign className="w-16 h-16 opacity-20" />
              </div>
            </div>
          </div>

          {/* Analyse Économique */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-green-600" />
              <h3 className="text-xl font-bold text-gray-800">3. Analyse Économique & ROI</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-3">📊 Revenus Annuels</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Recharge AC:</span>
                    <span className="font-semibold">15 760 000 F</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Recharge DC60:</span>
                    <span className="font-semibold">31 520 000 F</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Recharge DC120:</span>
                    <span className="font-semibold">25 220 000 F</span>
                  </div>
                  <div className="flex justify-between border-t pt-2 font-bold text-blue-900">
                    <span>Total:</span>
                    <span>72 500 000 F</span>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-semibold text-orange-900 mb-3">💰 Charges Annuelles</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Électricité:</span>
                    <span className="font-semibold">26 280 000 F</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Maintenance:</span>
                    <span className="font-semibold">7 010 000 F</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Personnel:</span>
                    <span className="font-semibold">3 500 000 F</span>
                  </div>
                  <div className="flex justify-between border-t pt-2 font-bold text-orange-900">
                    <span>Total:</span>
                    <span>36 790 000 F</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-3">✅ Résultat Net</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Bénéfice net:</span>
                    <span className="font-semibold text-green-600">35 710 000 F</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Marge:</span>
                    <span className="font-semibold text-green-600">48%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ROI:</span>
                    <span className="font-semibold text-green-600">&lt; 12 mois</span>
                  </div>
                  <div className="bg-green-600 text-white rounded p-2 mt-2 text-center font-bold">
                    Très Rentable ✓
                  </div>
                </div>
              </div>
            </div>
          </div>
// ============================================================================
// PARTIE 5 - PLANNING, SÉCURITÉ & NORMES
// ============================================================================

          {/* Planning de Déploiement */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-6 h-6 text-purple-600" />
              <h3 className="text-xl font-bold text-gray-800">4. Planning de Déploiement</h3>
            </div>
            <div className="space-y-3">
              {[
                { phase: 'Phase 1 - Études', duree: '2 mois', taches: 'Études de faisabilité, validation sites', color: 'blue', progress: 100 },
                { phase: 'Phase 2 - Travaux', duree: '3 mois', taches: 'Génie civil, raccordement électrique', color: 'yellow', progress: 80 },
                { phase: 'Phase 3 - Installation', duree: '2 mois', taches: 'Installation bornes, tests', color: 'orange', progress: 60 },
                { phase: 'Phase 4 - Mise en service', duree: '1 mois', taches: 'Formation, lancement commercial', color: 'green', progress: 30 }
              ].map((phase, idx) => (
                <div key={idx} className={`bg-${phase.color}-50 rounded-lg p-4`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-semibold text-gray-900">{phase.phase}</div>
                    <div className={`text-sm font-semibold text-${phase.color}-600`}>{phase.duree}</div>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">{phase.taches}</div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`bg-${phase.color}-500 h-2 rounded-full transition-all`}
                      style={{ width: `${phase.progress}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-500 mt-1 text-right">{phase.progress}% complété</div>
                </div>
              ))}
            </div>
            <div className="bg-purple-600 text-white rounded-lg p-4 mt-4 text-center">
              <div className="text-sm opacity-90">Durée Totale du Projet</div>
              <div className="text-3xl font-bold">8 mois</div>
            </div>
          </div>

          {/* Sécurité et Normes */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-bold text-gray-800">5. Sécurité & Normes</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {/* Normes Techniques */}
              <div className="bg-red-50 rounded-lg p-4">
                <h4 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Normes Techniques
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span><strong>IEC 61851:</strong> Systèmes de charge conductifs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span><strong>IEC 62196:</strong> Prises et connecteurs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span><strong>ISO 15118:</strong> Communication véhicule-borne</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span><strong>OCPP 1.6/2.0:</strong> Protocole de communication</span>
                  </li>
                </ul>
              </div>

              {/* Sécurité */}
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-semibold text-orange-900 mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Dispositifs de Sécurité
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span><strong>Protection électrique:</strong> Disjoncteurs différentiels 30mA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span><strong>Surveillance:</strong> Caméras 24/7 sur tous les sites</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span><strong>Éclairage:</strong> Zones bien éclairées pour sécurité</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span><strong>Maintenance:</strong> Contrôles périodiques obligatoires</span>
                  </li>
                </ul>
              </div>

              {/* Cybersécurité */}
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                  <Lock className="w-5 h-5" />
                  Cybersécurité
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span><strong>Chiffrement:</strong> Communications SSL/TLS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span><strong>Authentification:</strong> Multi-facteurs pour accès</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span><strong>Firewall:</strong> Protection réseau avancée</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span><strong>Audits:</strong> Tests de sécurité réguliers</span>
                  </li>
                </ul>
              </div>

              {/* Conformité */}
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Conformité Réglementaire
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span><strong>Marquage CE:</strong> Conformité européenne</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span><strong>RGPD:</strong> Protection données personnelles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span><strong>Autorisations:</strong> Permis de construire validés</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span><strong>Assurances:</strong> Couverture complète RC et dommages</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Parties Prenantes */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-indigo-600" />
              <h3 className="text-xl font-bold text-gray-800">6. Équipe & Parties Prenantes</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { 
                  role: 'Maître d\'Ouvrage', 
                  entite: 'Makaya', 
                  responsabilite: 'Financement, validation stratégique',
                  color: 'purple'
                },
                { 
                  role: 'Maître d\'Œuvre', 
                  entite: 'Bureau d\'études', 
                  responsabilite: 'Conception technique, suivi travaux',
                  color: 'blue'
                },
                { 
                  role: 'Installateur', 
                  entite: 'Entreprise certifiée', 
                  responsabilite: 'Installation, mise en service',
                  color: 'orange'
                },
                { 
                  role: 'Exploitant', 
                  entite: 'Makaya Operations', 
                  responsabilite: 'Gestion quotidienne, maintenance',
                  color: 'green'
                },
                { 
                  role: 'Fournisseur Bornes', 
                  entite: 'Fabricant certifié', 
                  responsabilite: 'Livraison équipements, garantie',
                  color: 'red'
                },
                { 
                  role: 'Fournisseur Énergie', 
                  entite: 'CEET Togo', 
                  responsabilite: 'Raccordement, fourniture électricité',
                  color: 'yellow'
                }
              ].map((partie, idx) => (
                <div key={idx} className={`bg-${partie.color}-50 rounded-lg p-4 border-2 border-${partie.color}-200`}>
                  <div className={`text-${partie.color}-900 font-bold mb-1`}>{partie.role}</div>
                  <div className={`text-${partie.color}-700 text-sm font-semibold mb-2`}>{partie.entite}</div>
                  <div className="text-xs text-gray-600">{partie.responsabilite}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Maintenance et Support */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Wrench className="w-6 h-6 text-gray-600" />
              <h3 className="text-xl font-bold text-gray-800">7. Maintenance & Support</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {/* Maintenance Préventive */}
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-3">🔧 Maintenance Préventive</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Mensuelle:</strong> Inspection visuelle, nettoyage, tests fonctionnels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Trimestrielle:</strong> Contrôle électrique, calibration, mise à jour logicielle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Annuelle:</strong> Révision complète, tests de sécurité, certification</span>
                  </li>
                </ul>
              </div>

              {/* Support Client */}
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-3">📞 Support Client</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Hotline 24/7:</strong> Support technique disponible en permanence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Application mobile:</strong> Signalement pannes, assistance en ligne</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Intervention rapide:</strong> Délai max 4h pour dépannage urgent</span>
                  </li>
                </ul>
              </div>

              {/* Monitoring */}
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-semibold text-purple-900 mb-3">📊 Monitoring & Supervision</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <Activity className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Temps réel:</strong> Surveillance état bornes, consommation, pannes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Activity className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Alertes:</strong> Notifications automatiques en cas d'anomalie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Activity className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Rapports:</strong> Statistiques hebdomadaires et mensuelles</span>
                  </li>
                </ul>
              </div>

              {/* Garanties */}
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-semibold text-orange-900 mb-3">✅ Garanties & SLA</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <Award className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Équipements:</strong> Garantie constructeur 2 ans pièces et main d'œuvre</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Disponibilité:</strong> SLA 95% minimum, compensation si non atteint</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Extension:</strong> Option garantie étendue 5 ans disponible</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Indicateurs de Performance */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-800">8. Indicateurs de Performance (KPI)</h3>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { label: 'Taux de disponibilité', valeur: '≥ 95%', icone: Activity, color: 'green' },
                { label: 'Temps moyen réparation', valeur: '≤ 4h', icone: Clock, color: 'blue' },
                { label: 'Satisfaction client', valeur: '≥ 4.5/5', icone: Star, color: 'yellow' },
                { label: 'Taux utilisation', valeur: '≥ 60%', icone: TrendingUp, color: 'purple' },
                { label: 'Énergie délivrée/mois', valeur: '≥ 10 MWh', icone: Zap, color: 'orange' },
                { label: 'Nombre sessions/jour', valeur: '≥ 50', icone: Users, color: 'indigo' },
                { label: 'Durée moyenne session', valeur: '30-45 min', icone: Clock, color: 'pink' },
                { label: 'Revenus mensuels', valeur: '≥ 10K $', icone: DollarSign, color: 'green' }
              ].map((kpi, idx) => (
                <div key={idx} className={`bg-${kpi.color}-50 rounded-lg p-4 border-2 border-${kpi.color}-200`}>
                  <kpi.icone className={`w-6 h-6 text-${kpi.color}-600 mb-2`} />
                  <div className="text-xs text-gray-600 mb-1">{kpi.label}</div>
                  <div className={`text-xl font-bold text-${kpi.color}-900`}>{kpi.valeur}</div>
                </div>
              ))}
            </div>
          </div>
// ============================================================================
// PARTIE 6 - RISQUES, OPPORTUNITÉS & CONCLUSION
// ============================================================================

          {/* Analyse des Risques */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-bold text-gray-800">9. Analyse des Risques & Mitigation</h3>
            </div>
            <div className="space-y-3">
              {[
                { 
                  risque: 'Défaillance technique des bornes',
                  probabilite: 'Moyenne',
                  impact: 'Élevé',
                  mitigation: 'Contrat maintenance préventive, stock pièces détachées, double source fournisseur',
                  color: 'orange'
                },
                { 
                  risque: 'Coupures électriques fréquentes',
                  probabilite: 'Moyenne',
                  impact: 'Élevé',
                  mitigation: 'Système de batteries de secours, générateur diesel backup, priorité raccordement réseau',
                  color: 'red'
                },
                { 
                  risque: 'Vandalisme et vol d\'équipements',
                  probabilite: 'Faible',
                  impact: 'Moyen',
                  mitigation: 'Surveillance vidéo 24/7, éclairage, agents sécurité, assurance tous risques',
                  color: 'yellow'
                },
                { 
                  risque: 'Faible adoption par les utilisateurs',
                  probabilite: 'Faible',
                  impact: 'Élevé',
                  mitigation: 'Campagne marketing agressive, tarifs promotionnels, partenariats flottes',
                  color: 'orange'
                },
                { 
                  risque: 'Retards dans les autorisations',
                  probabilite: 'Moyenne',
                  impact: 'Moyen',
                  mitigation: 'Anticipation démarches, relations autorités, plan B sur sites alternatifs',
                  color: 'yellow'
                },
                { 
                  risque: 'Augmentation coûts énergie',
                  probabilite: 'Élevée',
                  impact: 'Moyen',
                  mitigation: 'Contrats long terme avec CEET, installation panneaux solaires, ajustement tarifs',
                  color: 'red'
                }
              ].map((risque, idx) => (
                <div key={idx} className={`bg-${risque.color}-50 rounded-lg p-4 border-l-4 border-${risque.color}-500`}>
                  <div className="flex items-start justify-between mb-2">
                    <div className="font-semibold text-gray-900 flex-1">{risque.risque}</div>
                    <div className="flex gap-2">
                      <span className={`text-xs px-2 py-1 bg-${risque.color}-200 text-${risque.color}-900 rounded`}>
                        P: {risque.probabilite}
                      </span>
                      <span className={`text-xs px-2 py-1 bg-${risque.color}-200 text-${risque.color}-900 rounded`}>
                        I: {risque.impact}
                      </span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-700">
                    <span className="font-semibold">Mitigation:</span> {risque.mitigation}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Opportunités et Évolutions */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-purple-600" />
              <h3 className="text-xl font-bold text-gray-800">10. Opportunités & Évolutions Futures</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {/* Phase 2 */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-5 border-2 border-purple-200">
                <h4 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  Phase 2 - Extension (2026)
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Déploiement de 20 bornes supplémentaires dans les villes secondaires</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Installation bornes ultra-rapides 350 kW sur autoroutes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Partenariats avec centres commerciaux et hôtels</span>
                  </li>
                </ul>
              </div>

              {/* Innovation */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-5 border-2 border-blue-200">
                <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  Innovations Technologiques
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Intégration panneaux solaires pour réduire coûts énergétiques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Systèmes de stockage par batteries pour lissage consommation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Intelligence artificielle pour optimisation tarifaire dynamique</span>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-5 border-2 border-green-200">
                <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                  <Gift className="w-5 h-5" />
                  Services Additionnels
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Programme de fidélité avec récompenses et réductions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Services conciergerie: lavage, entretien pendant recharge</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Espaces lounge avec wifi, café, snacks</span>
                  </li>
                </ul>
              </div>

              {/* Expansion */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-5 border-2 border-orange-200">
                <h4 className="font-bold text-orange-900 mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Expansion Régionale
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <Globe className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Extension vers pays voisins: Bénin, Ghana, Burkina Faso</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Globe className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Réseau régional de recharge transfrontalier</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Globe className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Partenariats avec autres opérateurs africains</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Impact Environnemental */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Leaf className="w-6 h-6 text-green-600" />
              <h3 className="text-xl font-bold text-gray-800">11. Impact Environnemental & Durabilité</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 rounded-lg p-5 text-center">
                <Leaf className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-green-900 mb-1">-450 t</div>
                <div className="text-sm text-gray-600">CO₂ évité par an</div>
                <div className="text-xs text-gray-500 mt-2">vs véhicules thermiques</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-5 text-center">
                <Droplet className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-blue-900 mb-1">100%</div>
                <div className="text-sm text-gray-600">Énergie propre</div>
                <div className="text-xs text-gray-500 mt-2">Électricité renouvelable</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-5 text-center">
                <Recycle className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-purple-900 mb-1">95%</div>
                <div className="text-sm text-gray-600">Recyclage équipements</div>
                <div className="text-xs text-gray-500 mt-2">En fin de vie</div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg p-6 mt-4 text-white">
              <h4 className="font-bold text-lg mb-2">🌍 Contribution aux Objectifs de Développement Durable (ODD)</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <div className="bg-white/20 rounded p-2 text-center">
                  <div className="font-bold">ODD 7</div>
                  <div className="text-xs">Énergie propre</div>
                </div>
                <div className="bg-white/20 rounded p-2 text-center">
                  <div className="font-bold">ODD 9</div>
                  <div className="text-xs">Innovation</div>
                </div>
                <div className="bg-white/20 rounded p-2 text-center">
                  <div className="font-bold">ODD 11</div>
                  <div className="text-xs">Villes durables</div>
                </div>
                <div className="bg-white/20 rounded p-2 text-center">
                  <div className="font-bold">ODD 13</div>
                  <div className="text-xs">Climat</div>
                </div>
              </div>
            </div>
          </div>

          {/* Documentation et Ressources */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-800">12. Documentation & Ressources</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { titre: 'Manuel Technique', description: 'Spécifications détaillées des bornes et installation', icone: FileText, color: 'blue' },
                { titre: 'Guide Utilisateur', description: 'Mode d\'emploi pour les conducteurs de VE', icone: BookOpen, color: 'green' },
                { titre: 'Procédures Maintenance', description: 'Instructions complètes pour entretien et dépannage', icone: Wrench, color: 'orange' },
                { titre: 'Plans et Schémas', description: 'Plans de site, schémas électriques, architecture réseau', icone: MapPin, color: 'purple' },
                { titre: 'Contrats et Accords', description: 'Contrats fournisseurs, partenariats, assurances', icone: FileText, color: 'red' },
                { titre: 'Rapports de Tests', description: 'Résultats tests de conformité et certifications', icone: CheckCircle, color: 'green' }
              ].map((doc, idx) => (
                <div key={idx} className={`bg-${doc.color}-50 rounded-lg p-4 border-l-4 border-${doc.color}-500 hover:shadow-md transition-shadow cursor-pointer`}>
                  <div className="flex items-start gap-3">
                    <doc.icone className={`w-6 h-6 text-${doc.color}-600 flex-shrink-0 mt-1`} />
                    <div>
                      <h4 className={`font-semibold text-${doc.color}-900 mb-1`}>{doc.titre}</h4>
                      <p className="text-sm text-gray-600">{doc.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 rounded-lg p-4 mt-4 border-2 border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <Database className="w-5 h-5 text-blue-600" />
                <h4 className="font-semibold text-blue-900">Repository Documentaire</h4>
              </div>
              <p className="text-sm text-gray-700">
                Tous les documents sont disponibles sur le portail documentaire Makaya avec accès sécurisé et gestion des versions.
              </p>
            </div>
          </div>

          {/* Contacts et Support */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Phone className="w-6 h-6 text-green-600" />
              <h3 className="text-xl font-bold text-gray-800">13. Contacts & Support</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <Mail className="w-8 h-8 text-blue-600 mb-3" />
                <h4 className="font-semibold text-blue-900 mb-2">Contact Général</h4>
                <div className="text-sm space-y-1">
                  <div className="text-gray-700">📧 contact@makaya.tg</div>
                  <div className="text-gray-700">📞 +228 XX XX XX XX</div>
                  <div className="text-gray-700">🏢 Lomé, Togo</div>
                </div>
              </div>

              <div className="bg-orange-50 rounded-lg p-4">
                <Headphones className="w-8 h-8 text-orange-600 mb-3" />
                <h4 className="font-semibold text-orange-900 mb-2">Support Technique</h4>
                <div className="text-sm space-y-1">
                  <div className="text-gray-700">📧 support@makaya.tg</div>
                  <div className="text-gray-700">📞 Hotline 24/7</div>
                  <div className="text-gray-700">💬 Chat en ligne</div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-4">
                <Users className="w-8 h-8 text-green-600 mb-3" />
                <h4 className="font-semibold text-green-900 mb-2">Commercial</h4>
                <div className="text-sm space-y-1">
                  <div className="text-gray-700">📧 commercial@makaya.tg</div>
                  <div className="text-gray-700">📞 +228 XX XX XX XX</div>
                  <div className="text-gray-700">🤝 Partenariats</div>
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion et Approbation */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                <Award className="w-12 h-12" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">Conclusion</h3>
                <p className="text-blue-100 text-lg">Cahier de Charge Infrastructure Makaya Recharge</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
              <p className="text-lg mb-4">
                Ce cahier de charge définit l'ensemble des exigences techniques, économiques et opérationnelles 
                pour le déploiement de l'infrastructure de recharge Makaya au Togo.
              </p>
              <p className="text-lg mb-4">
                Le projet prévoit l'installation de <strong>10 bornes de recharge</strong> (5 AC + 3 DC60 + 2 DC120) 
                pour un investissement total de <strong>116 000 USD</strong>, avec un retour sur investissement 
                attendu en <strong>moins de 12 mois</strong> et une rentabilité de <strong>48%</strong>.
              </p>
              <p className="text-lg">
                L'infrastructure répond aux normes internationales les plus strictes et s'inscrit dans une 
                démarche de développement durable et de transition énergétique.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-sm opacity-90 mb-1">Date d'élaboration</div>
                <div className="font-bold text-lg">Novembre 2025</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-sm opacity-90 mb-1">Version</div>
                <div className="font-bold text-lg">1.0</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-sm opacity-90 mb-1">Validité</div>
                <div className="font-bold text-lg">2025-2026</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-sm opacity-90 mb-1">Statut</div>
                <div className="font-bold text-lg flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Approuvé
                </div>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex gap-4 justify-center">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 font-semibold">
              <Download className="w-5 h-5" />
              Télécharger PDF
            </button>
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 font-semibold">
              <Share2 className="w-5 h-5" />
              Partager
            </button>
            <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2 font-semibold">
              <FileText className="w-5 h-5" />
              Imprimer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MakayaRecharge;
// ============================================================================
// PARTIE 7 - ONGLET TARIFS COMPLET
// ============================================================================

        {/* Onglet Tarifs */}
        {activeTab === 'tarifs' && (
          <div className="space-y-6">
            {/* En-tête Tarifs */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-8 text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                  <DollarSign className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">Grille Tarifaire</h2>
                  <p className="text-green-100 text-lg">Tarification par segment et par période</p>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 mt-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">230 F</div>
                  <div className="text-sm text-green-100">Tarif Moyen/kWh</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">19.2%</div>
                  <div className="text-sm text-green-100">Marge Nette</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">600</div>
                  <div className="text-sm text-green-100">Sessions/mois</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">35%</div>
                  <div className="text-sm text-green-100">Marge Brute</div>
                </div>
              </div>
            </div>

            {/* Grille Tarifaire par Segment */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">💰 Tarification par Segment Client</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100 border-b-2 border-gray-300">
                      <th className="text-left p-4 font-bold">Segment Client</th>
                      <th className="text-center p-4 font-bold">Heures Creuses<br/><span className="text-xs font-normal">(23h-6h)</span></th>
                      <th className="text-center p-4 font-bold">Heures Pleines<br/><span className="text-xs font-normal">(6h-18h)</span></th>
                      <th className="text-center p-4 font-bold">Heures Pointe<br/><span className="text-xs font-normal">(18h-23h)</span></th>
                      <th className="text-center p-4 font-bold">Marge Nette</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Chauffeurs Ride */}
                    <tr className="border-b border-gray-200 hover:bg-green-50">
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <div>
                            <div className="font-bold text-gray-900">Chauffeurs Ride</div>
                            <div className="text-xs text-gray-600">Super-préférentiel - 20% volume</div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center p-4">
                        <div className="text-2xl font-bold text-green-600">160 F</div>
                        <div className="text-xs text-gray-500">/kWh</div>
                      </td>
                      <td className="text-center p-4">
                        <div className="text-2xl font-bold text-green-600">190 F</div>
                        <div className="text-xs text-gray-500">/kWh</div>
                      </td>
                      <td className="text-center p-4">
                        <div className="text-2xl font-bold text-green-600">240 F</div>
                        <div className="text-xs text-gray-500">/kWh</div>
                      </td>
                      <td className="text-center p-4">
                        <div className="text-xl font-bold text-green-600">28.3%</div>
                      </td>
                    </tr>

                    {/* Clients LLD */}
                    <tr className="border-b border-gray-200 hover:bg-blue-50">
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <div>
                            <div className="font-bold text-gray-900">Clients LLD</div>
                            <div className="text-xs text-gray-600">Préférentiel - 10% volume</div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center p-4">
                        <div className="text-2xl font-bold text-blue-600">145 F</div>
                        <div className="text-xs text-gray-500">/kWh</div>
                      </td>
                      <td className="text-center p-4">
                        <div className="text-2xl font-bold text-blue-600">175 F</div>
                        <div className="text-xs text-gray-500">/kWh</div>
                      </td>
                      <td className="text-center p-4">
                        <div className="text-2xl font-bold text-blue-600">220 F</div>
                        <div className="text-xs text-gray-500">/kWh</div>
                      </td>
                      <td className="text-center p-4">
                        <div className="text-xl font-bold text-blue-600">21.5%</div>
                      </td>
                    </tr>

                    {/* Clients Externes */}
                    <tr className="border-b border-gray-200 hover:bg-yellow-50 bg-yellow-50/50">
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div>
                            <div className="font-bold text-gray-900">Clients Externes</div>
                            <div className="text-xs text-gray-600">Standard - 70% volume ⭐</div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center p-4">
                        <div className="text-2xl font-bold text-yellow-600">200 F</div>
                        <div className="text-xs text-gray-500">/kWh</div>
                      </td>
                      <td className="text-center p-4">
                        <div className="text-2xl font-bold text-yellow-600">230 F</div>
                        <div className="text-xs text-gray-500">/kWh</div>
                      </td>
                      <td className="text-center p-4">
                        <div className="text-2xl font-bold text-yellow-600">285 F</div>
                        <div className="text-xs text-gray-500">/kWh</div>
                      </td>
                      <td className="text-center p-4">
                        <div className="text-xl font-bold text-yellow-600">35.4%</div>
                      </td>
                    </tr>

                    {/* Réservation Premium */}
                    <tr className="border-b border-gray-200 hover:bg-red-50">
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div>
                            <div className="font-bold text-gray-900">Réservation Premium</div>
                            <div className="text-xs text-gray-600">+10% sur tarif standard</div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center p-4">
                        <div className="text-2xl font-bold text-red-600">220 F</div>
                        <div className="text-xs text-gray-500">/kWh</div>
                      </td>
                      <td className="text-center p-4">
                        <div className="text-2xl font-bold text-red-600">255 F</div>
                        <div className="text-xs text-gray-500">/kWh</div>
                      </td>
                      <td className="text-center p-4">
                        <div className="text-2xl font-bold text-red-600">315 F</div>
                        <div className="text-xs text-gray-500">/kWh</div>
                      </td>
                      <td className="text-center p-4">
                        <div className="text-xl font-bold text-red-600">41.2%</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div className="text-sm text-gray-700">
                    <strong>Note:</strong> Tarif moyen pondéré: 227.5 FCFA/kWh | Mix réel: 70% Externes, 20% Ride, 10% LLD
                  </div>
                </div>
              </div>
            </div>

            {/* Comparaison avec Véhicules Thermiques */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">🚗 Comparaison Véhicule Électrique vs Thermique</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-lg p-6 border-2 border-green-200">
                  <h4 className="font-bold text-green-900 mb-4 text-lg">⚡ Véhicule Électrique (Makaya)</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Heures Creuses:</span>
                      <div className="text-right">
                        <div className="font-bold text-green-600">28.8 F/km</div>
                        <div className="text-xs text-green-600">-39.5% 🎉</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Heures Pleines:</span>
                      <div className="text-right">
                        <div className="font-bold text-green-600">36.8 F/km</div>
                        <div className="text-xs text-green-600">-22.7% 🎉</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Heures Pointe:</span>
                      <div className="text-right">
                        <div className="font-bold text-yellow-600">51.3 F/km</div>
                        <div className="text-xs text-yellow-600">+7.7%</div>
                      </div>
                    </div>
                    <div className="border-t-2 border-green-300 pt-3 flex justify-between items-center">
                      <span className="font-bold text-gray-900">Moyenne:</span>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">36.5 F/km</div>
                        <div className="text-xs text-green-600">-23.3% économie</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 rounded-lg p-6 border-2 border-red-200">
                  <h4 className="font-bold text-red-900 mb-4 text-lg">⛽ Véhicule Thermique (Essence)</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Consommation:</span>
                      <div className="font-bold text-red-600">6L/100km</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Prix essence:</span>
                      <div className="font-bold text-red-600">795 F/L</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Entretien:</span>
                      <div className="font-bold text-red-600">+12 F/km</div>
                    </div>
                    <div className="border-t-2 border-red-300 pt-3 flex justify-between items-center">
                      <span className="font-bold text-gray-900">Coût total:</span>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-red-600">47.6 F/km</div>
                        <div className="text-xs text-red-600">Référence</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg p-6 mt-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm opacity-90">Économie Annuelle (20 000 km/an)</div>
                    <div className="text-4xl font-bold mt-1">222 000 FCFA</div>
                    <div className="text-sm opacity-80 mt-1">Soit 18 500 F/mois d'économies !</div>
                  </div>
                  <TrendingDown className="w-16 h-16 opacity-20" />
                </div>
              </div>
            </div>

            {/* Projection Financière */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">📊 Projection Financière (1 Borne)</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-purple-100 to-blue-100 border-b-2 border-purple-300">
                      <th className="text-left p-4 font-bold">Année</th>
                      <th className="text-center p-4 font-bold">Taux Occupation</th>
                      <th className="text-center p-4 font-bold">Sessions/an</th>
                      <th className="text-center p-4 font-bold">CA (M FCFA)</th>
                      <th className="text-center p-4 font-bold">EBITDA<br/><span className="text-xs font-normal">Marge %</span></th>
                      <th className="text-center p-4 font-bold">Bénéfice Net<br/><span className="text-xs font-normal">Marge %</span></th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { annee: '2026', taux: '60%', sessions: '7 200', sessionsMonth: '600/m', ca: '57.3', ebitda: '21.1', ebitdaMargin: '36.9%', benefice: '11.0', beneficeMargin: '19.2%', color: 'blue' },
                      { annee: '2027', taux: '75%', sessions: '9 000', sessionsMonth: '750/m', ca: '71.6', ebitda: '29.3', ebitdaMargin: '40.9%', benefice: '19.2', beneficeMargin: '26.8%', color: 'green' },
                      { annee: '2028', taux: '85%', sessions: '10 200', sessionsMonth: '850/m', ca: '81.2', ebitda: '34.8', ebitdaMargin: '42.8%', benefice: '24.7', beneficeMargin: '30.4%', color: 'yellow', roi: true },
                      { annee: '2029', taux: '90%', sessions: '10 800', sessionsMonth: '900/m', ca: '86.1', ebitda: '37.4', ebitdaMargin: '43.5%', benefice: '27.3', beneficeMargin: '31.7%', color: 'orange' },
                      { annee: '2030', taux: '95%', sessions: '11 400', sessionsMonth: '950/m', ca: '90.9', ebitda: '40.4', ebitdaMargin: '44.4%', benefice: '30.3', beneficeMargin: '33.3%', color: 'purple' }
                    ].map((row, idx) => (
                      <tr key={idx} className={`border-b border-gray-200 hover:bg-${row.color}-50`}>
                        <td className="p-4 font-bold">{row.annee}</td>
                        <td className="text-center p-4">
                          <div className={`text-lg font-bold text-${row.color}-600`}>{row.taux}</div>
                        </td>
                        <td className="text-center p-4">
                          <div className="font-bold">{row.sessions}</div>
                          <div className="text-xs text-gray-500">({row.sessionsMonth})</div>
                        </td>
                        <td className="text-center p-4">
                          <div className="text-lg font-bold text-gray-900">{row.ca} M</div>
                        </td>
                        <td className="text-center p-4">
                          <div className="font-bold text-green-600">{row.ebitda} M</div>
                          <div className="text-xs text-green-600">{row.ebitdaMargin}</div>
                        </td>
                        <td className="text-center p-4">
                          <div className="font-bold text-blue-600">{row.benefice} M</div>
                          <div className="text-xs text-blue-600">{row.beneficeMargin}</div>
                          {row.roi && (
                            <div className="text-xs font-bold text-red-600 mt-1">ROI ✅</div>
                          )}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-gradient-to-r from-green-100 to-emerald-100 font-bold">
                      <td className="p-4">CUMUL 5 ANS</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">48 600</td>
                      <td className="text-center p-4 text-xl">387 M</td>
                      <td className="text-center p-4 text-xl text-green-600">163 M</td>
                      <td className="text-center p-4 text-xl text-blue-600">112.6 M</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
                  <div className="text-sm text-gray-600 mb-1">ROI (Retour sur Investissement)</div>
                  <div className="text-3xl font-bold text-green-600">2.7 ans</div>
                  <div className="text-xs text-gray-500 mt-1">32 mois - Excellent</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
                  <div className="text-sm text-gray-600 mb-1">TRI (Taux Rendement Interne)</div>
                  <div className="text-3xl font-bold text-blue-600">38.5%</div>
                  <div className="text-xs text-gray-500 mt-1">Très attractif</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 border-2 border-purple-200">
                  <div className="text-sm text-gray-600 mb-1">Seuil de Rentabilité</div>
                  <div className="text-3xl font-bold text-purple-600">412</div>
                  <div className="text-xs text-gray-500 mt-1">sessions/mois (+46% marge)</div>
                </div>
              </div>
            </div>

            {/* Stratégie de Prix en 3 Phases */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">🎯 Stratégie de Prix en 3 Phases</h3>
              <div className="space-y-4">
                {[
                  {
                    phase: 'Phase 1: Lancement',
                    periode: 'Mois 1-6',
                    objectif: 'Construire base clients',
                    prix: 'Externes: 210 F/kWh (-9%)',
                    promo: '1ère recharge gratuite (15 kWh max)',
                    impact: '-4.2M revenus | +42% adoption',
                    color: 'blue'
                  },
                  {
                    phase: 'Phase 2: Croissance',
                    periode: 'Mois 7-18',
                    objectif: 'Atteindre capacité optimale',
                    prix: 'Externes: 230 F/kWh (optimal)',
                    promo: 'Fidélité: -5% après 10 recharges',
                    impact: 'Marge 35.4% | 85% occupation',
                    color: 'green'
                  },
                  {
                    phase: 'Phase 3: Maturité',
                    periode: 'Mois 19+',
                    objectif: 'Maximiser rentabilité',
                    prix: 'Externes: 230-250 F/kWh',
                    promo: 'Tarif dynamique selon occupation',
                    impact: 'Marge 38-42% | AI optimization',
                    color: 'purple'
                  }
                ].map((phase, idx) => (
                  <div key={idx} className={`bg-${phase.color}-50 rounded-lg p-5 border-l-4 border-${phase.color}-500`}>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className={`text-lg font-bold text-${phase.color}-900`}>{phase.phase}</h4>
                        <div className="text-sm text-gray-600">{phase.periode}</div>
                      </div>
                      <div className={`px-3 py-1 bg-${phase.color}-100 rounded-full text-xs font-semibold text-${phase.color}-700`}>
                        {phase.objectif}
                      </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-3 text-sm">
                      <div>
                        <div className="text-gray-600 text-xs">Prix:</div>
                        <div className="font-semibold">{phase.prix}</div>
                      </div>
                      <div>
                        <div className="text-gray-600 text-xs">Promotion:</div>
                        <div className="font-semibold">{phase.promo}</div>
                      </div>
                      <div>
                        <div className="text-gray-600 text-xs">Impact:</div>
                        <div className="font-semibold">{phase.impact}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer avec Validation */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
              <div className="text-center">
                <CheckCircle className="w-16 h-16 mx-auto mb-4 opacity-80" />
                <h3 className="text-2xl font-bold mb-2">✅ Tarifs Validés et Rentables</h3>
                <p className="text-blue-100 mb-6">Grille tarifaire optimisée pour une rentabilité maximale</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-2xl font-bold">19.2%</div>
                    <div className="text-xs">Marge Année 1</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-2xl font-bold">+46%</div>
                    <div className="text-xs">Marge Sécurité</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-2xl font-bold">2.7 ans</div>
                    <div className="text-xs">ROI</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-2xl font-bold">-23%</div>
                    <div className="text-xs">vs Thermique</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
// ============================================================================
// PARTIE 8 - ANNEXES TECHNIQUES ET SECTIONS COMPLÉMENTAIRES DU CAHIER DE CHARGE
// ============================================================================

        {/* Suite du Cahier de Charge - Sections Complémentaires */}
        {activeTab === 'cahier-charge' && (
          <>
            {/* Spécifications Électriques Détaillées */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-yellow-600" />
                <h3 className="text-xl font-bold text-gray-800">Annexe A - Spécifications Électriques Détaillées</h3>
              </div>

              {/* Tableau des spécifications électriques */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-100 border-b-2 border-gray-300">
                      <th className="text-left p-3 font-bold">Paramètre</th>
                      <th className="text-center p-3 font-bold">Borne AC 22kW</th>
                      <th className="text-center p-3 font-bold">Borne DC 60kW</th>
                      <th className="text-center p-3 font-bold">Borne DC 120kW</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 font-semibold">Tension d'entrée</td>
                      <td className="text-center p-3">400V AC triphasé</td>
                      <td className="text-center p-3">400V AC triphasé</td>
                      <td className="text-center p-3">400V AC triphasé</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-3 font-semibold">Tension de sortie</td>
                      <td className="text-center p-3">230V AC monophasé</td>
                      <td className="text-center p-3">150-500V DC</td>
                      <td className="text-center p-3">150-920V DC</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold">Courant max sortie</td>
                      <td className="text-center p-3">32A</td>
                      <td className="text-center p-3">125A</td>
                      <td className="text-center p-3">250A</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-3 font-semibold">Fréquence</td>
                      <td className="text-center p-3">50 Hz</td>
                      <td className="text-center p-3">50 Hz</td>
                      <td className="text-center p-3">50 Hz</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold">Rendement</td>
                      <td className="text-center p-3">≥ 94%</td>
                      <td className="text-center p-3">≥ 95%</td>
                      <td className="text-center p-3">≥ 96%</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-3 font-semibold">Facteur de puissance</td>
                      <td className="text-center p-3">≥ 0.99</td>
                      <td className="text-center p-3">≥ 0.99</td>
                      <td className="text-center p-3">≥ 0.99</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold">Protection thermique</td>
                      <td className="text-center p-3">IP54</td>
                      <td className="text-center p-3">IP54</td>
                      <td className="text-center p-3">IP55</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-3 font-semibold">Température fonct.</td>
                      <td className="text-center p-3">-20°C à +50°C</td>
                      <td className="text-center p-3">-25°C à +50°C</td>
                      <td className="text-center p-3">-25°C à +50°C</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold">Humidité</td>
                      <td className="text-center p-3">5% - 95%</td>
                      <td className="text-center p-3">5% - 95%</td>
                      <td className="text-center p-3">5% - 95%</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-3 font-semibold">Altitude max</td>
                      <td className="text-center p-3">2000m</td>
                      <td className="text-center p-3">2000m</td>
                      <td className="text-center p-3">2000m</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
                  <h4 className="font-bold text-yellow-900 mb-2">⚡ Puissance appelée</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• AC 22kW: 25 kVA par borne</li>
                    <li>• DC 60kW: 65 kVA par borne</li>
                    <li>• DC 120kW: 130 kVA par borne</li>
                    <li>• Total site: 550 kVA</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-900 mb-2">🔌 Raccordement réseau</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Type: BT 400V triphasé</li>
                    <li>• Transformateur: 630 kVA</li>
                    <li>• Câble: Cu 240 mm²</li>
                    <li>• Longueur max: 50m</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Connectique et Câbles */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-6 h-6 text-gray-600" />
                <h3 className="text-xl font-bold text-gray-800">Annexe B - Connectique et Câbles</h3>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {/* Type 2 */}
                <div className="bg-blue-50 rounded-lg p-5 border-2 border-blue-200">
                  <h4 className="font-bold text-blue-900 mb-3 text-lg">Type 2 (IEC 62196-2)</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Utilisé pour:</span>
                      <span className="font-semibold">AC 22kW</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Broches:</span>
                      <span className="font-semibold">7 pins</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Courant max:</span>
                      <span className="font-semibold">63A triphasé</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Longueur câble:</span>
                      <span className="font-semibold">5 mètres</span>
                    </div>
                    <div className="mt-3 pt-3 border-t border-blue-300">
                      <div className="font-semibold text-blue-900 mb-1">Compatible avec:</div>
                      <ul className="text-xs space-y-1">
                        <li>• Renault Zoe, Twingo E-Tech</li>
                        <li>• Tesla Model 3, Model Y</li>
                        <li>• Volkswagen ID.3, ID.4</li>
                        <li>• BMW i3, iX3</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* CCS */}
                <div className="bg-orange-50 rounded-lg p-5 border-2 border-orange-200">
                  <h4 className="font-bold text-orange-900 mb-3 text-lg">CCS (Combo 2)</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Utilisé pour:</span>
                      <span className="font-semibold">DC 60/120kW</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Broches:</span>
                      <span className="font-semibold">9 pins</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Courant max:</span>
                      <span className="font-semibold">500A DC</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Longueur câble:</span>
                      <span className="font-semibold">3 mètres</span>
                    </div>
                    <div className="mt-3 pt-3 border-t border-orange-300">
                      <div className="font-semibold text-orange-900 mb-1">Compatible avec:</div>
                      <ul className="text-xs space-y-1">
                        <li>• Audi e-tron, Q4 e-tron</li>
                        <li>• Mercedes EQC, EQA</li>
                        <li>• Porsche Taycan</li>
                        <li>• Hyundai Ioniq 5, Kia EV6</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* CHAdeMO */}
                <div className="bg-purple-50 rounded-lg p-5 border-2 border-purple-200">
                  <h4 className="font-bold text-purple-900 mb-3 text-lg">CHAdeMO</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Utilisé pour:</span>
                      <span className="font-semibold">DC 60kW</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Broches:</span>
                      <span className="font-semibold">10 pins</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Courant max:</span>
                      <span className="font-semibold">200A DC</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Longueur câble:</span>
                      <span className="font-semibold">3 mètres</span>
                    </div>
                    <div className="mt-3 pt-3 border-t border-purple-300">
                      <div className="font-semibold text-purple-900 mb-1">Compatible avec:</div>
                      <ul className="text-xs space-y-1">
                        <li>• Nissan Leaf, Ariya</li>
                        <li>• Mitsubishi Outlander PHEV</li>
                        <li>• Citroën e-C4</li>
                        <li>• Peugeot e-208, e-2008</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mt-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div className="text-sm text-gray-700">
                    <strong>Note:</strong> Tous les câbles sont conformes aux normes IEC 62196 et testés pour 10 000 cycles minimum. 
                    Remplacement préventif tous les 2 ans ou 20 000 cycles.
                  </div>
                </div>
              </div>
            </div>

            {/* Logiciel et Systèmes */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-6 h-6 text-indigo-600" />
                <h3 className="text-xl font-bold text-gray-800">Annexe C - Systèmes Logiciels et Communication</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Système de gestion */}
                <div className="space-y-4">
                  <div className="bg-indigo-50 rounded-lg p-5 border-2 border-indigo-200">
                    <h4 className="font-bold text-indigo-900 mb-3 flex items-center gap-2">
                      <Database className="w-5 h-5" />
                      Système de Gestion Centralisé
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Plateforme:</strong> Cloud AWS (redondance multi-région)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Base de données:</strong> PostgreSQL 14+ (haute disponibilité)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <span><strong>API:</strong> REST + WebSocket (temps réel)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Backup:</strong> Automatique quotidien + réplication</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-lg p-5 border-2 border-green-200">
                    <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                      <Phone className="w-5 h-5" />
                      Application Mobile
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Plateformes:</strong> iOS 14+, Android 10+</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Fonctions:</strong> Localisation, réservation, paiement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Paiement:</strong> Mobile Money, CB, Apple/Google Pay</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Historique:</strong> Sessions, factures, statistiques</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Communication et protocoles */}
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-lg p-5 border-2 border-blue-200">
                    <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                      <Activity className="w-5 h-5" />
                      Protocoles de Communication
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span><strong>OCPP 1.6J / 2.0.1:</strong> Communication borne-serveur</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span><strong>ISO 15118:</strong> Plug & Charge automatique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span><strong>MQTT:</strong> IoT et monitoring temps réel</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span><strong>4G/5G:</strong> Connectivité primaire + backup Ethernet</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-5 border-2 border-purple-200">
                    <h4 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                      <BarChart3 className="w-5 h-5" />
                      Monitoring et Analytics
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <Activity className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Temps réel:</strong> État bornes, consommation, pannes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Activity className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Alertes:</strong> SMS + Email + Push (incidents < 5min)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Activity className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Rapports:</strong> Hebdo, mensuel, annuel (auto)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Activity className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span><strong>BI:</strong> Dashboard Power BI + exports Excel/PDF</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-4 mt-6 border-l-4 border-yellow-500">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div className="text-sm text-gray-700">
                    <strong>Mise à jour OTA:</strong> Tous les logiciels et firmwares peuvent être mis à jour à distance (Over-The-Air) 
                    sans intervention physique. Planification automatique en heures creuses.
                  </div>
                </div>
              </div>
            </div>

            {/* Réglementation et Certifications */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-yellow-600" />
                <h3 className="text-xl font-bold text-gray-800">Annexe D - Certifications et Conformité Réglementaire</h3>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {/* Certifications Européennes */}
                <div className="bg-blue-50 rounded-lg p-5">
                  <h4 className="font-bold text-blue-900 mb-3 text-center">🇪🇺 Normes Européennes</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span className="font-semibold">Marquage CE</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span>Directive CEM 2014/30/UE</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span>Directive BT 2014/35/UE</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span>RoHS 2011/65/UE</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span>REACH EC 1907/2006</span>
                    </li>
                  </ul>
                </div>

                {/* Normes Techniques */}
                <div className="bg-green-50 rounded-lg p-5">
                  <h4 className="font-bold text-green-900 mb-3 text-center">⚡ Normes Techniques</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="font-semibold">IEC 61851-1</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>IEC 61851-23 (DC)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>IEC 62196-2 (Type 2)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>IEC 62196-3 (CCS)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>ISO 15118-2</span>
                    </li>
                  </ul>
                </div>

                {/* Sécurité et Qualité */}
                <div className="bg-purple-50 rounded-lg p-5">
                  <h4 className="font-bold text-purple-900 mb-3 text-center">🛡️ Sécurité & Qualité</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      <span className="font-semibold">ISO 9001:2015</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      <span>ISO 14001 (Environnement)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      <span>ISO 27001 (Cybersécurité)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      <span>RGPD (Données perso)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      <span>PCI DSS (Paiements)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg p-5 mt-6">
                <h4 className="font-bold text-orange-900 mb-3">📋 Procédures de Certification</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-semibold text-orange-900 mb-2">Avant Installation:</div>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Audit de conformité électrique</li>
                      <li>• Validation des plans par organisme agréé</li>
                      <li>• Certification des équipements</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold text-orange-900 mb-2">Après Installation:</div>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Tests de conformité sur site</li>
                      <li>• Certification finale par Bureau Veritas</li>
                      <li>• Attestation CEET de raccordement</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
// ============================================================================
// PARTIE 9 - ANNEXES COMPLÉMENTAIRES (Installation, Formation, Exploitation)
// ============================================================================

            {/* Procédures d'Installation */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Wrench className="w-6 h-6 text-orange-600" />
                <h3 className="text-xl font-bold text-gray-800">Annexe E - Procédures d'Installation</h3>
              </div>

              <div className="space-y-4">
                {/* Étape 1 */}
                <div className="bg-blue-50 rounded-lg p-5 border-l-4 border-blue-500">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-blue-900 mb-2">Préparation du Site</h4>
                      <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                        <div>
                          <div className="font-semibold mb-1">Travaux de génie civil:</div>
                          <ul className="space-y-1 text-xs">
                            <li>• Terrassement: 2m × 2m × 0.5m par borne</li>
                            <li>• Fondation béton: 1.5m × 1.5m × 0.4m</li>
                            <li>• Massif d'ancrage: 4 tiges Ø16mm</li>
                            <li>• Tranchées câbles: 0.8m prof × 0.4m larg</li>
                          </ul>
                        </div>
                        <div>
                          <div className="font-semibold mb-1">Aménagements:</div>
                          <ul className="space-y-1 text-xs">
                            <li>• Marquage au sol: Places de 2.5m × 5m</li>
                            <li>• Signalétique verticale: Panneaux VE</li>
                            <li>• Éclairage: 300 lux minimum</li>
                            <li>• Drainage: Pente 2% vers évacuation</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Étape 2 */}
                <div className="bg-green-50 rounded-lg p-5 border-l-4 border-green-500">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-green-900 mb-2">Installation Électrique</h4>
                      <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                        <div>
                          <div className="font-semibold mb-1">Raccordement réseau:</div>
                          <ul className="space-y-1 text-xs">
                            <li>• Transformateur HTA/BT 630 kVA</li>
                            <li>• Tableau général BT (TGBT)</li>
                            <li>• Disjoncteur général 800A</li>
                            <li>• Câbles Cu 240mm² isolés 1kV</li>
                          </ul>
                        </div>
                        <div>
                          <div className="font-semibold mb-1">Protection:</div>
                          <ul className="space-y-1 text-xs">
                            <li>• Disjoncteur différentiel 30mA Type A</li>
                            <li>• Parafoudre Type 1+2</li>
                            <li>• Mise à la terre: Ω < 30Ω</li>
                            <li>• Coffrets de proximité IP44</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Étape 3 */}
                <div className="bg-purple-50 rounded-lg p-5 border-l-4 border-purple-500">
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-purple-900 mb-2">Montage et Raccordement Bornes</h4>
                      <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                        <div>
                          <div className="font-semibold mb-1">Installation mécanique:</div>
                          <ul className="space-y-1 text-xs">
                            <li>• Fixation sur massif béton (4 boulons M16)</li>
                            <li>• Niveau et verticalité (±2°)</li>
                            <li>• Passage des câbles par soubassement</li>
                            <li>• Étanchéité entrées câbles IP54/IP55</li>
                          </ul>
                        </div>
                        <div>
                          <div className="font-semibold mb-1">Raccordements:</div>
                          <ul className="space-y-1 text-xs">
                            <li>• Alimentation électrique + vérif polarité</li>
                            <li>• Réseau data 4G/Ethernet RJ45</li>
                            <li>• Tests isolement (>500MΩ)</li>
                            <li>• Serrage couples normalisés</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Étape 4 */}
                <div className="bg-orange-50 rounded-lg p-5 border-l-4 border-orange-500">
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                      4
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-orange-900 mb-2">Tests et Mise en Service</h4>
                      <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                        <div>
                          <div className="font-semibold mb-1">Tests électriques:</div>
                          <ul className="space-y-1 text-xs">
                            <li>• Continuité conducteurs protection</li>
                            <li>• Résistance isolement (>500MΩ)</li>
                            <li>• Déclenchement différentiel 30mA</li>
                            <li>• Charge test à 100% puissance (2h)</li>
                          </ul>
                        </div>
                        <div>
                          <div className="font-semibold mb-1">Tests fonctionnels:</div>
                          <ul className="space-y-1 text-xs">
                            <li>• Communication OCPP avec serveur</li>
                            <li>• Authentification RFID/App</li>
                            <li>• Cycle complet de recharge</li>
                            <li>• Arrêt d'urgence et sécurités</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 rounded-lg p-4 mt-6 border-l-4 border-red-500">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                  <div className="text-sm text-gray-700">
                    <strong>Délais d'installation:</strong> Prévoir 4 à 6 semaines par site (études + travaux + tests). 
                    Les travaux ne peuvent débuter qu'après obtention des autorisations CEET et permis de construire.
                  </div>
                </div>
              </div>
            </div>

            {/* Formation et Support */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-800">Annexe F - Programme de Formation</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Formation Technique */}
                <div className="bg-blue-50 rounded-lg p-5 border-2 border-blue-200">
                  <h4 className="font-bold text-blue-900 mb-4 text-lg flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    Formation Technique (3 jours)
                  </h4>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="font-semibold text-blue-800 mb-1 text-sm">Jour 1 - Fondamentaux</div>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>• Architecture système et composants</li>
                        <li>• Principes de la recharge AC/DC</li>
                        <li>• Normes et sécurité électrique</li>
                        <li>• Fonctionnement des bornes (théorie)</li>
                      </ul>
                    </div>

                    <div>
                      <div className="font-semibold text-blue-800 mb-1 text-sm">Jour 2 - Pratique</div>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>• Manipulation des bornes</li>
                        <li>• Procédures de maintenance préventive</li>
                        <li>• Diagnostic et résolution pannes simples</li>
                        <li>• Utilisation du logiciel de gestion</li>
                      </ul>
                    </div>

                    <div>
                      <div className="font-semibold text-blue-800 mb-1 text-sm">Jour 3 - Avancé</div>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>• Paramétrage et configuration avancée</li>
                        <li>• Gestion des incidents complexes</li>
                        <li>• Mise à jour firmware OTA</li>
                        <li>• Certification et évaluation finale</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-100 rounded p-3 mt-4 text-xs">
                    <strong>Public:</strong> Techniciens de maintenance  
                    <br/><strong>Participants:</strong> 4-6 personnes max  
                    <br/><strong>Certification:</strong> Valide 3 ans
                  </div>
                </div>

                {/* Formation Exploitation */}
                <div className="bg-green-50 rounded-lg p-5 border-2 border-green-200">
                  <h4 className="font-bold text-green-900 mb-4 text-lg flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    Formation Exploitation (2 jours)
                  </h4>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="font-semibold text-green-800 mb-1 text-sm">Jour 1 - Gestion Opérationnelle</div>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>• Plateforme de gestion centralisée</li>
                        <li>• Monitoring temps réel des bornes</li>
                        <li>• Gestion des utilisateurs et abonnements</li>
                        <li>• Tarification et facturation</li>
                      </ul>
                    </div>

                    <div>
                      <div className="font-semibold text-green-800 mb-1 text-sm">Jour 2 - Service Client</div>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>• Procédures support client (hotline)</li>
                        <li>• Gestion des réclamations</li>
                        <li>• Reporting et KPIs</li>
                        <li>• Cas pratiques et mise en situation</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-green-100 rounded p-3 mt-4 text-xs">
                    <strong>Public:</strong> Équipe exploitation et support  
                    <br/><strong>Participants:</strong> 6-10 personnes  
                    <br/><strong>Rafraîchissement:</strong> Annuel
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-5 mt-6 border-2 border-purple-200">
                <h4 className="font-bold text-purple-900 mb-3">📚 Support et Documentation</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="font-semibold text-purple-800 mb-2">Documents fournis:</div>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li>• Manuels techniques (FR)</li>
                      <li>• Guides d'utilisation</li>
                      <li>• Procédures maintenance</li>
                      <li>• Fiches de dépannage</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold text-purple-800 mb-2">Support continu:</div>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li>• Hotline technique 24/7</li>
                      <li>• Portail web FAQ</li>
                      <li>• Vidéos tutorielles</li>
                      <li>• Webinaires trimestriels</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold text-purple-800 mb-2">Assistance sur site:</div>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li>• 1 semaine post-installation</li>
                      <li>• Visite semestrielle</li>
                      <li>• Intervention < 24h si panne</li>
                      <li>• Audit annuel gratuit</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Plan d'Exploitation */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold text-gray-800">Annexe G - Plan d'Exploitation</h3>
              </div>

              <div className="space-y-6">
                {/* Organisation */}
                <div className="bg-green-50 rounded-lg p-5">
                  <h4 className="font-bold text-green-900 mb-4">👥 Organisation de l'Équipe</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="font-semibold text-green-800 mb-2">Équipe Technique (4 pers.)</div>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5"></div>
                          <div>
                            <div className="font-semibold">Chef Technique (1)</div>
                            <div className="text-xs">Supervision, planification, reporting</div>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5"></div>
                          <div>
                            <div className="font-semibold">Techniciens Maintenance (2)</div>
                            <div className="text-xs">Préventif, curatif, dépannage</div>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5"></div>
                          <div>
                            <div className="font-semibold">Agent Nettoyage (1 mi-temps)</div>
                            <div className="text-xs">Entretien sites, propreté</div>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <div className="font-semibold text-green-800 mb-2">Équipe Exploitation (3 pers.)</div>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></div>
                          <div>
                            <div className="font-semibold">Responsable Exploitation (1)</div>
                            <div className="text-xs">Gestion globale, stratégie, KPIs</div>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></div>
                          <div>
                            <div className="font-semibold">Chargés Support Client (2)</div>
                            <div className="text-xs">Hotline, réclamations, assistance</div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Planning type */}
                <div className="bg-blue-50 rounded-lg p-5">
                  <h4 className="font-bold text-blue-900 mb-4">📅 Planning Type Hebdomadaire</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-blue-100">
                          <th className="text-left p-2 font-semibold">Jour</th>
                          <th className="text-left p-2 font-semibold">Maintenance</th>
                          <th className="text-left p-2 font-semibold">Support</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">Lundi</td>
                          <td className="p-2 text-xs">Inspection visuelle toutes bornes</td>
                          <td className="p-2 text-xs">Traitement tickets J-1</td>
                        </tr>
                        <tr className="border-b bg-blue-50">
                          <td className="p-2 font-semibold">Mardi</td>
                          <td className="p-2 text-xs">Maintenance préventive (sites 1-3)</td>
                          <td className="p-2 text-xs">Appels sortants satisfaction</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">Mercredi</td>
                          <td className="p-2 text-xs">Maintenance préventive (sites 4-6)</td>
                          <td className="p-2 text-xs">Formation utilisateurs</td>
                        </tr>
                        <tr className="border-b bg-blue-50">
                          <td className="p-2 font-semibold">Jeudi</td>
                          <td className="p-2 text-xs">Tests fonctionnels, mises à jour</td>
                          <td className="p-2 text-xs">Traitement réclamations</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2 font-semibold">Vendredi</td>
                          <td className="p-2 text-xs">Nettoyage complet + stock pièces</td>
                          <td className="p-2 text-xs">Reporting hebdomadaire</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Astreintes */}
                <div className="bg-orange-50 rounded-lg p-5">
                  <h4 className="font-bold text-orange-900 mb-3">🚨 Astreintes et Interventions d'Urgence</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-semibold text-orange-800 mb-2">Organisation astreintes:</div>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>• Permanence 24/7 (rotation équipe technique)</li>
                        <li>• Niveau 1: Hotline (diagnostic à distance)</li>
                        <li>• Niveau 2: Intervention sur site si nécessaire</li>
                        <li>• Délai intervention: < 4h ouvrées, < 8h nuit/WE</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-semibold text-orange-800 mb-2">Criticité interventions:</div>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>• <span className="text-red-600 font-bold">P1 Critique:</span> Site entier HS → < 2h</li>
                        <li>• <span className="text-orange-600 font-bold">P2 Majeur:</span> 1 borne DC HS → < 4h</li>
                        <li>• <span className="text-yellow-600 font-bold">P3 Mineur:</span> 1 borne AC HS → < 8h</li>
                        <li>• <span className="text-green-600 font-bold">P4 Info:</span> Maintenance → Planifié</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stock et Pièces de Rechange */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-purple-600" />
                <h3 className="text-xl font-bold text-gray-800">Annexe H - Stock et Pièces de Rechange</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Stock minimal */}
                <div className="bg-purple-50 rounded-lg p-5">
                  <h4 className="font-bold text-purple-900 mb-4">📦 Stock Minimal Requis</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="font-semibold text-purple-800 mb-2">Consommables:</div>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>• Câbles Type 2: 2 unités de rechange</li>
                        <li>• Câbles CCS: 1 unité de rechange</li>
                        <li>• Câbles CHAdeMO: 1 unité de rechange</li>
                        <li>• Cartes RFID: Stock 100 unités</li>
                      </ul>
                    </div>

                    <div>
                      <div className="font-semibold text-purple-800 mb-2">Pièces critiques:</div>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>• Contacteurs puissance: 2 de chaque type</li>
                        <li>• Modules communication 4G: 2 unités</li>
                        <li>• Écrans tactiles: 1 par type de borne</li>
                        <li>• Lecteurs RFID: 2 unités</li>
                      </ul>
                    </div>

                    <div>
                      <div className="font-semibold text-purple-800 mb-2">Électronique:</div>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>• Cartes électroniques: 1 par référence</li>
                        <li>• Fusibles assortiment complet</li>
                        <li>• Disjoncteurs 32A, 63A, 125A: 2 chacun</li>
                        <li>• Câbles de liaison: Assortiment 50m</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-purple-100 rounded p-3 mt-4 text-xs">
                    <strong>Valeur stock:</strong> ~8 500 000 FCFA  
                    <br/><strong>Renouvellement:</strong> Automatique si <30% stock
                  </div>
                </div>

                {/* Gestion stock */}
                <div className="bg-blue-50 rounded-lg p-5">
                  <h4 className="font-bold text-blue-900 mb-4">📊 Gestion du Stock</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="font-semibold text-blue-800 mb-2">Procédures:</div>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>• Inventaire mensuel complet</li>
                        <li>• Traçabilité entrées/sorties (logiciel)</li>
                        <li>• Contrôle qualité à réception</li>
                        <li>• Conditions stockage (T°, humidité)</li>
                      </ul>
                    </div>

                    <div>
                      <div className="font-semibold text-blue-800 mb-2">Fournisseurs:</div>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>• Fournisseur principal: Stock J+2</li>
                        <li>• Fournisseur backup: Stock J+5</li>
                        <li>• Import direct fabricant: Stock J+30</li>
                        <li>• Contrat cadre maintenance 5 ans</li>
                      </ul>
                    </div>

                    <div>
                      <div className="font-semibold text-blue-800 mb-2">Garanties:</div>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>• Bornes complètes: 2 ans pièces + MO</li>
                        <li>• Pièces de rechange: 1 an minimum</li>
                        <li>• Extension garantie: Option 5 ans (10%)</li>
                        <li>• Échange standard disponible < 48h</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-100 rounded p-3 mt-4 text-xs">
                    <strong>Logiciel de gestion:</strong> ERP intégré  
                    <br/><strong>Alertes:</strong> Auto si seuil critique atteint
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default MakayaRecharge;