// PARTIE 1/3 - Imports, État et Composants de Base COMPLET
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
  const [activeTab, setActiveTab] = useState('vente');
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedFormula, setSelectedFormula] = useState(null);

  // Utilitaires
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('fr-FR').format(value) + ' FCFA';
  };

  // Navigation
  const tabs = [
    { id: 'vente', label: 'Vente EV', icon: Car },
    { id: 'lld', label: 'LLD', icon: Calendar },
    { id: 'sav', label: 'SAV', icon: Wrench }
  ];

  // Composant Modal Véhicule
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
              <h4 className="text-xl font-bold text-white mb-4">Équipements</h4>
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

  // Composant Modal Formule
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

  // FIN PARTIE 1/3
