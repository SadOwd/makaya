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
