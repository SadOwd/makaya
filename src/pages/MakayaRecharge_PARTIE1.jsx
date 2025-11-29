// ============================================================
// MAKAYA RECHARGE - PARTIE 1/4
// Imports, Configuration et Données
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
  FileText,
  Download,
  Printer,
  Share2
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

const MakayaRecharge = ({ onNavigate }) => {
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

  // Données KPIs
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

  // Données graphiques
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
