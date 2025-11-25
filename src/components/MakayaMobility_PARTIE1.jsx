// PARTIE 1/3 - Imports, État et Composants de Base
import React, { useState } from 'react';
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area
} from 'recharts';
import { 
  Car, Zap, Battery, Wrench, DollarSign, TrendingUp, CheckCircle, Clock, Star, FileText, Calendar, Settings,
  Package, Shield, Globe, Users, MapPin, Phone, Mail, Award, Target, BarChart3, PieChart as PieIcon,
  Truck, CreditCard, ShoppingCart, Filter, Search, ChevronRight, X, Play, Pause, RotateCw,
  AlertCircle, Info, Leaf, TrendingDown, Activity, Cpu, Radio, Tool, Box, Smartphone,
  Share2, Download, Eye, Edit, Trash2, Plus, Minus, Check, ArrowRight, ExternalLink,
  Layers, GitBranch, Briefcase, Home, Building, Factory, Sparkles, Crown, Gift, Database
} from 'lucide-react';
import { mobilityData } from '../data/mobilityData';

const MakayaMobility = () => {
  // État principal
  const [activeTab, setActiveTab] = useState('catalogue');
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedFormula, setSelectedFormula] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [compareMode, setCompareMode] = useState(false);
  const [compareVehicles, setCompareVehicles] = useState([]);
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFleet, setSelectedFleet] = useState(null);
  const [showCalculator, setShowCalculator] = useState(false);
  const [selectedCertified, setSelectedCertified] = useState(null);

  // Utilitaires
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('fr-FR').format(value) + ' FCFA';
  };

  const formatNumber = (value) => {
    return new Intl.NumberFormat('fr-FR').format(value);
  };

  // Navigation principale
  const mainTabs = [
    { id: 'catalogue', label: 'Catalogue Intelligent', icon: Car },
    { id: 'lld', label: 'LLD 100% Digital', icon: Calendar },
    { id: 'fleet', label: 'Fleet Manager B2B', icon: Briefcase },
    { id: 'sav', label: 'SAV 2.0', icon: Wrench },
    { id: 'marketplace', label: 'Marketplace Pièces', icon: Package },
    { id: 'certified', label: 'Makaya Certified', icon: Award },
    { id: 'bundles', label: 'Bundles EV+Recharge', icon: Zap },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 }
  ];

  // Données enrichies
  const kpisEnriched = [
    { 
      icon: Car, 
      label: 'Véhicules vendus', 
      value: mobilityData.metrics?.vehiclesSold || 127,
      change: '+23%',
      detail: 'vs mois dernier',
      color: 'green' 
    },
    { 
      icon: Calendar, 
      label: 'Contrats LLD actifs', 
      value: mobilityData.metrics?.lldContracts || 89,
      change: '+18%',
      detail: 'Flotte louée',
      color: 'blue' 
    },
    { 
      icon: DollarSign, 
      label: 'CA Total', 
      value: ((mobilityData.metrics?.totalRevenue || 4200000000) / 1000000000).toFixed(2) + ' Md',
      change: '+31%',
      detail: 'FCFA (2025)',
      color: 'yellow' 
    },
    { 
      icon: Star, 
      label: 'Satisfaction client', 
      value: mobilityData.metrics?.avgSatisfaction || 4.7,
      suffix: '/5',
      change: '+0.3',
      detail: 'Note moyenne',
      color: 'purple' 
    },
    {
      icon: Leaf,
      label: 'CO₂ Économisé',
      value: '1,847',
      suffix: ' tonnes',
      change: '+45%',
      detail: 'Cette année',
      color: 'green'
    },
    {
      icon: Users,
      label: 'Clients Makaya+',
      value: '3,421',
      change: '+52%',
      detail: 'Programme fidélité',
      color: 'purple'
    },
    {
      icon: Package,
      label: 'Pièces vendues',
      value: '8,945',
      change: '+28%',
      detail: 'Via marketplace',
      color: 'orange'
    },
    {
      icon: Shield,
      label: 'Véhicules certifiés',
      value: '234',
      change: '+67%',
      detail: 'Occasion garantie',
      color: 'blue'
    }
  ];

  // Composant Modal Véhicule Enrichi
  const VehicleModalEnriched = ({ vehicle, onClose }) => {
    if (!vehicle) return null;
    const [selectedColor, setSelectedColor] = useState(vehicle.colors?.[0] || 'Blanc');
    const [showEconomyCalc, setShowEconomyCalc] = useState(false);
    const [viewing3D, setViewing3D] = useState(false);

    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl max-w-6xl w-full max-h-[95vh] overflow-y-auto border border-slate-700" onClick={(e) => e.stopPropagation()}>
          {/* Header avec image et 3D viewer */}
          <div className="relative h-96">
            <img 
              src={vehicle.image} 
              alt={vehicle.model} 
              className={`w-full h-full object-cover transition-all ${viewing3D ? 'opacity-50' : 'opacity-100'}`}
            />
            {viewing3D && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <div className="text-white text-center">
                  <RotateCw className="w-16 h-16 animate-spin mx-auto mb-4" />
                  <p className="text-lg font-semibold">Vue 3D Interactive</p>
                  <p className="text-sm text-slate-300">Rotation 360° du véhicule</p>
                </div>
              </div>
            )}
            <button 
              onClick={onClose} 
              className="absolute top-4 right-4 w-12 h-12 bg-black/70 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-black/90 transition"
            >
              <X className="w-6 h-6" />
            </button>
            <button 
              onClick={() => setViewing3D(!viewing3D)}
              className="absolute top-4 left-4 px-4 py-2 bg-black/70 backdrop-blur rounded-full text-white font-semibold hover:bg-black/90 transition flex items-center gap-2"
            >
              <Eye className="w-5 h-5" />
              {viewing3D ? 'Vue Photo' : 'Vue 3D'}
            </button>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-black/80 backdrop-blur-xl rounded-xl px-6 py-4 flex items-center justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-1">{vehicle.brand} {vehicle.model}</h3>
                  <p className="text-slate-300">{vehicle.category}</p>
                </div>
                <div className="flex items-center gap-3">
                  {vehicle.electric && (
                    <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-bold flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      100% Électrique
                    </span>
                  )}
                  {vehicle.new && (
                    <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-bold flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Nouveau
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Prix et actions */}
            <div className="flex flex-wrap items-end justify-between gap-4 mb-8 pb-8 border-b border-slate-700">
              <div>
                <p className="text-slate-400 text-sm mb-2">Prix de vente</p>
                <p className="text-4xl font-bold text-green-400">{formatCurrency(vehicle.price)}</p>
                <p className="text-slate-500 text-sm mt-1">${vehicle.priceUSD?.toLocaleString() || '0'} USD</p>
                {vehicle.lldMonthly && (
                  <p className="text-slate-400 text-sm mt-2">
                    Ou <span className="text-blue-400 font-semibold">{formatCurrency(vehicle.lldMonthly)}/mois</span> en LLD
                  </p>
                )}
              </div>
              <div className="flex flex-wrap gap-3">
                <button 
                  onClick={() => setShowEconomyCalc(!showEconomyCalc)}
                  className="px-6 py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition flex items-center gap-2"
                >
                  <DollarSign className="w-5 h-5" />
                  Calculer économies
                </button>
                <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Simuler LLD
                </button>
                <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg hover:shadow-lg transition flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Commander
                </button>
              </div>
            </div>

            {/* Calculateur d'économie */}
            {showEconomyCalc && (
              <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-700/50 rounded-xl p-6 mb-8">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Leaf className="w-6 h-6 text-green-400" />
                  Économies Carburant vs Électrique
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <p className="text-slate-400 text-sm mb-1">Économie annuelle</p>
                    <p className="text-3xl font-bold text-green-400">-1.8M FCFA</p>
                    <p className="text-xs text-slate-500 mt-1">vs thermique (20,000 km/an)</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <p className="text-slate-400 text-sm mb-1">Coût électricité/km</p>
                    <p className="text-3xl font-bold text-blue-400">45 FCFA</p>
                    <p className="text-xs text-slate-500 mt-1">vs 180 FCFA essence</p>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <p className="text-slate-400 text-sm mb-1">ROI sur 5 ans</p>
                    <p className="text-3xl font-bold text-yellow-400">-9M FCFA</p>
                    <p className="text-xs text-slate-500 mt-1">Économies totales</p>
                  </div>
                </div>
              </div>
            )}

            {/* Sélection couleur */}
            {vehicle.colors && vehicle.colors.length > 0 && (
              <div className="mb-8">
                <h4 className="text-lg font-bold text-white mb-4">Couleurs disponibles</h4>
                <div className="flex flex-wrap gap-3">
                  {vehicle.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-lg font-semibold transition ${
                        selectedColor === color
                          ? 'bg-green-500 text-white'
                          : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Spécifications techniques */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-white mb-4">Caractéristiques Techniques</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Battery, value: `${vehicle.range} km`, label: 'Autonomie WLTP', color: 'text-green-400' },
                  { icon: Zap, value: vehicle.battery, label: 'Batterie', color: 'text-yellow-400' },
                  { icon: TrendingUp, value: vehicle.acceleration, label: '0-100 km/h', color: 'text-blue-400' },
                  { icon: Car, value: vehicle.power, label: 'Puissance', color: 'text-purple-400' },
                  { icon: Clock, value: vehicle.charging || '40 min', label: 'Charge rapide', color: 'text-orange-400' },
                  { icon: Leaf, value: vehicle.co2Saved || '2.4t/an', label: 'CO₂ économisé', color: 'text-green-400' },
                  { icon: Award, value: vehicle.warranty || '5 ans', label: 'Garantie', color: 'text-blue-400' },
                  { icon: Shield, value: vehicle.batteryWarranty || '8 ans', label: 'Garantie batterie', color: 'text-purple-400' }
                ].map((spec, idx) => (
                  <div key={idx} className="bg-slate-800/50 rounded-xl p-4 text-center hover:bg-slate-800 transition">
                    <spec.icon className={`w-7 h-7 ${spec.color} mx-auto mb-2`} />
                    <p className="text-2xl font-bold text-white mb-1">{spec.value}</p>
                    <p className="text-xs text-slate-400">{spec.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FIN PARTIE 1/3 */}
            {/* CONTINUER AVEC PARTIE 2/3 */}
