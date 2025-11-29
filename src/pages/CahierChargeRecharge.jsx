// ============================================================================
// CAHIER DE CHARGE RECHARGE - PARTIE 1/6
// Imports et Configuration Initiale
// ============================================================================

import React, { useState } from 'react';
import {
  FileText,
  MapPin,
  Zap,
  DollarSign,
  Shield,
  Clock,
  TrendingUp,
  AlertTriangle,
  Users,
  Settings,
  BookOpen,
  ChevronDown,
  ChevronRight,
  Download,
  Printer,
  Share2,
  CheckCircle2,
  Info,
  BarChart3,
  Building2,
  Wrench,
  Scale,
  Award,
  Target,
  Battery,
  Plug,
  Server,
  Network,
  Eye,
  Lock,
  Flame,
  Droplet,
  Wind,
  Sun,
  Moon,
  Car,
  Gauge,
  CircuitBoard,
  HardDrive,
  Radio,
  Wifi,
  Activity,
  Package,
  Truck,
  FileCheck,
  Briefcase,
  Calculator,
  TrendingDown,
  PieChart,
  LayoutGrid
} from 'lucide-react';

const CahierChargeRecharge = () => {
  const [activeSection, setActiveSection] = useState('presentation');
  const [expandedSubsections, setExpandedSubsections] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('sections'); // 'sections' ou 'complet'

  // Toggle subsection
  const toggleSubsection = (key) => {
    setExpandedSubsections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Structure complète du cahier de charge
  const sections = [
    {
      id: 'presentation',
      title: 'Présentation du Projet',
      icon: FileText,
      color: 'blue',
      subsections: [
        'Contexte et Justification',
        'Objectifs du Projet',
        'Localisation et Site',
        'Alimentation Électrique'
      ]
    },
    {
      id: 'specifications',
      title: 'Spécifications Techniques',
      icon: Settings,
      color: 'indigo',
      subsections: [
        'Configuration Générale',
        'Bornes AC 21kW',
        'Bornes DC 60kW',
        'Bornes DC 120kW',
        'Architecture Électrique'
      ]
    },
    {
      id: 'infrastructure',
      title: 'Infrastructure & Génie Civil',
      icon: Building2,
      color: 'purple',
      subsections: [
        'Génie Civil',
        'Infrastructure Électrique',
        'Signalétique',
        'Sécurité et Surveillance'
      ]
    },
    {
      id: 'normes',
      title: 'Normes et Réglementations',
      icon: Scale,
      color: 'green',
      subsections: [
        'Normes Électriques IEC',
        'Normes Chinoises GB/T',
        'Réglementations Locales',
        'Certifications'
      ]
    },
    {
      id: 'performances',
      title: 'Performances et Garanties',
      icon: Award,
      color: 'yellow',
      subsections: [
        'Performances Techniques',
        'Garanties Fabricants',
        'Garanties Installation',
        'Assurances'
      ]
    },
    {
      id: 'planning',
      title: 'Planning et Phasage',
      icon: Clock,
      color: 'orange',
      subsections: [
        'Phase 1: Sans Solaire',
        'Phase 2: Intégration Solaire',
        'Chemin Critique',
        'Organisation Chantier'
      ]
    },
    {
      id: 'budget',
      title: 'Estimation Budgétaire',
      icon: Calculator,
      color: 'red',
      subsections: [
        'Équipements de Recharge',
        'Infrastructure Électrique',
        'Génie Civil',
        'Supervision et Gestion',
        'Budget Total'
      ]
    },
    {
      id: 'economique',
      title: 'Modèle Économique',
      icon: TrendingUp,
      color: 'emerald',
      subsections: [
        'Stratégie Tarifaire',
        'Hypothèses Exploitation',
        'Analyse Rentabilité',
        'Financement'
      ]
    },
    {
      id: 'risques',
      title: 'Gestion des Risques',
      icon: AlertTriangle,
      color: 'amber',
      subsections: [
        'Risques Techniques',
        'Risques Commerciaux',
        'Risques Financiers',
        'Plan Continuité'
      ]
    },
    {
      id: 'selection',
      title: 'Sélection Prestataires',
      icon: Users,
      color: 'cyan',
      subsections: [
        'Procédure Appel Offres',
        'Qualifications Requises',
        'Critères Attribution',
        'Négociations'
      ]
    },
    {
      id: 'livrables',
      title: 'Livrables et Documentation',
      icon: BookOpen,
      color: 'pink',
      subsections: [
        'Phase Études',
        'Phase Réalisation',
        'Phase Exploitation',
        'Documentation Réglementaire'
      ]
    },
    {
      id: 'contractuel',
      title: 'Conditions Contractuelles',
      icon: FileCheck,
      color: 'violet',
      subsections: [
        'Modalités Générales',
        'Modalités de Paiement',
        'Garanties et Assurances',
        'Réception et Garanties'
      ]
    },
    {
      id: 'annexes',
      title: 'Annexes Techniques',
      icon: Package,
      color: 'slate',
      subsections: [
        'Schémas Électriques',
        'Plans Type',
        'Tableaux de Référence',
        'Glossaire Technique'
      ]
    }
  ];

  // Données du projet
  const projectData = {
    titre: "STATION DE RECHARGE POUR VÉHICULES ÉLECTRIQUES",
    lieu: "Lomé, République Togolaise",
    version: "2.0",
    date: "27 Novembre 2025",
    maitreOuvrage: "MAKAYA MOBILITY",
    type: "Infrastructure de recharge publique pour véhicules électriques"
  };

  const statsGenerales = {
    bornes: 10,
    puissanceTotal: '525 kW',
    investissement: '115 000 USD',
    roi: '< 12 mois',
    disponibilite: '≥ 95%',
    revenus_an1: '285 000 USD',
    marge_an1: '48%'
  };
// Composant Card réutilisable
  const Card = ({ children, className = '' }) => (
    <div className={`bg-white rounded-xl shadow-lg border border-gray-200 ${className}`}>
      {children}
    </div>
  );

  // Composant Badge
  const Badge = ({ children, color = 'blue' }) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-700',
      green: 'bg-green-100 text-green-700',
      yellow: 'bg-yellow-100 text-yellow-700',
      red: 'bg-red-100 text-red-700',
      purple: 'bg-purple-100 text-purple-700',
      indigo: 'bg-indigo-100 text-indigo-700',
      orange: 'bg-orange-100 text-orange-700',
      emerald: 'bg-emerald-100 text-emerald-700',
      cyan: 'bg-cyan-100 text-cyan-700',
      pink: 'bg-pink-100 text-pink-700',
      violet: 'bg-violet-100 text-violet-700',
      amber: 'bg-amber-100 text-amber-700',
      slate: 'bg-slate-100 text-slate-700'
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${colors[color]}`}>
        {children}
      </span>
    );
  };

  // Composant StatCard
  const StatCard = ({ icon: Icon, label, value, color = 'blue', trend }) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600',
      red: 'from-red-500 to-red-600',
      indigo: 'from-indigo-500 to-indigo-600'
    };

    return (
      <Card className="p-6 hover:shadow-xl transition-shadow">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm text-gray-600 font-medium mb-2">{label}</p>
            <p className="text-3xl font-bold text-gray-900">{value}</p>
            {trend && (
              <div className="mt-2 flex items-center gap-1">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="text-sm text-green-600 font-semibold">{trend}</span>
              </div>
            )}
          </div>
          <div className={`p-3 rounded-lg bg-gradient-to-br ${colors[color]}`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>
      </Card>
    );
  };

  // Composant SectionHeader
  const SectionHeader = ({ icon: Icon, title, subtitle, color = 'blue' }) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      indigo: 'from-indigo-500 to-indigo-600',
      purple: 'from-purple-500 to-purple-600',
      green: 'from-green-500 to-green-600',
      yellow: 'from-yellow-500 to-yellow-600',
      orange: 'from-orange-500 to-orange-600',
      red: 'from-red-500 to-red-600',
      emerald: 'from-emerald-500 to-emerald-600',
      cyan: 'from-cyan-500 to-cyan-600',
      pink: 'from-pink-500 to-pink-600',
      violet: 'from-violet-500 to-violet-600',
      amber: 'from-amber-500 to-amber-600',
      slate: 'from-slate-500 to-slate-600'
    };

    return (
      <div className={`bg-gradient-to-r ${colors[color]} p-6 rounded-xl mb-6`}>
        <div className="flex items-center gap-4">
          <div className="p-3 bg-white/20 rounded-lg">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">{title}</h2>
            {subtitle && <p className="text-white/90 text-sm">{subtitle}</p>}
          </div>
        </div>
      </div>
    );
  };

  // Composant InfoBox
  const InfoBox = ({ type = 'info', children }) => {
    const styles = {
      info: 'bg-blue-50 border-blue-200 text-blue-800',
      warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
      success: 'bg-green-50 border-green-200 text-green-800',
      danger: 'bg-red-50 border-red-200 text-red-800'
    };

    const icons = {
      info: Info,
      warning: AlertTriangle,
      success: CheckCircle2,
      danger: AlertTriangle
    };

    const Icon = icons[type];

    return (
      <div className={`p-4 rounded-lg border-2 ${styles[type]} mb-4`}>
        <div className="flex items-start gap-3">
          <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
          <div className="text-sm">{children}</div>
        </div>
      </div>
    );
  };

  // Composant DataTable
  const DataTable = ({ headers, rows }) => (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            {headers.map((header, idx) => (
              <th key={idx} className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
              {row.map((cell, cellIdx) => (
                <td key={cellIdx} className="px-4 py-3 text-sm text-gray-900">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  // Render Header
  const renderHeader = () => (
    <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* En-tête principal */}
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
            <span className="text-sm font-semibold">Version {projectData.version} - {projectData.date}</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">{projectData.titre}</h1>
          <div className="flex items-center justify-center gap-3 text-xl mb-4">
            <MapPin className="w-6 h-6" />
            <span>{projectData.lieu}</span>
          </div>
          <p className="text-lg opacity-90">{projectData.type}</p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <Building2 className="w-5 h-5" />
            <span className="font-semibold">Maître d'ouvrage: {projectData.maitreOuvrage}</span>
          </div>
        </div>

        {/* Stats rapides */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mt-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <Zap className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">{statsGenerales.bornes}</div>
            <div className="text-sm opacity-90">Bornes</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <Battery className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">{statsGenerales.puissanceTotal}</div>
            <div className="text-sm opacity-90">Puissance</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <DollarSign className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">{statsGenerales.investissement}</div>
            <div className="text-sm opacity-90">Investissement</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <Clock className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">{statsGenerales.roi}</div>
            <div className="text-sm opacity-90">ROI</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <Activity className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">{statsGenerales.disponibilite}</div>
            <div className="text-sm opacity-90">Disponibilité</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <TrendingUp className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">{statsGenerales.revenus_an1}</div>
            <div className="text-sm opacity-90">Revenus An 1</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <PieChart className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">{statsGenerales.marge_an1}</div>
            <div className="text-sm opacity-90">Marge An 1</div>
          </div>
        </div>

        {/* Barre d'actions */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all">
            <Download className="w-5 h-5" />
            Télécharger PDF
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all">
            <Printer className="w-5 h-5" />
            Imprimer
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all">
            <Share2 className="w-5 h-5" />
            Partager
          </button>
        </div>
      </div>
    </div>
  );
// Render Navigation
  const renderNavigation = () => (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-20 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        {/* Barre de recherche */}
        <div className="mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher dans le cahier de charge..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Eye className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Mode d'affichage */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('sections')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                viewMode === 'sections'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <LayoutGrid className="w-4 h-4 inline mr-2" />
              Par sections
            </button>
            <button
              onClick={() => setViewMode('complet')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                viewMode === 'complet'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <FileText className="w-4 h-4 inline mr-2" />
              Vue complète
            </button>
          </div>
        </div>

        {/* Navigation par sections */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`p-3 rounded-lg font-semibold transition-all ${
                  activeSection === section.id
                    ? `bg-${section.color}-600 text-white shadow-lg`
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-5 h-5 mx-auto mb-1" />
                <div className="text-xs">{section.title}</div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );

  // Section 1: Présentation du Projet
  const renderPresentation = () => (
    <div className="space-y-6">
      <SectionHeader
        icon={FileText}
        title="1. PRÉSENTATION DU PROJET"
        subtitle="Contexte, objectifs et caractéristiques générales"
        color="blue"
      />

      {/* 1.1 Contexte et Justification */}
      <Card className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Target className="w-6 h-6 text-blue-600" />
          1.1 Contexte et Justification
        </h3>
        <div className="prose max-w-none">
          <p className="text-gray-700 mb-4">
            Le Togo s'inscrit dans une dynamique de transition énergétique et de développement durable. 
            L'émergence progressive de véhicules électriques dans la sous-région ouest-africaine nécessite 
            la mise en place d'infrastructures de recharge adaptées et fiables.
          </p>
          <InfoBox type="info">
            Ce projet vise à créer la <strong>première station de recharge publique multi-standards à Lomé</strong>, 
            offrant des solutions de recharge semi-rapide (AC) et rapide (DC) pour répondre aux besoins variés 
            des utilisateurs de véhicules électriques.
          </InfoBox>
        </div>
      </Card>

      {/* 1.2 Objectifs du Projet */}
      <Card className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <CheckCircle2 className="w-6 h-6 text-green-600" />
          1.2 Objectifs du Projet
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Badge color="green">Principaux</Badge>
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Déployer une infrastructure de <strong>10 bornes opérationnelles</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Garantir une disponibilité de service <strong>≥ 95%</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Proposer des <strong>tarifs compétitifs</strong> pour démocratiser la mobilité électrique
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Créer un <strong>modèle économique viable et duplicable</strong>
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Badge color="blue">Secondaires</Badge>
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Contribuer à la <strong>réduction des émissions de CO₂</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Préparer l'intégration future d'<strong>énergies renouvelables</strong> (solaire)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Créer des <strong>emplois locaux</strong> (exploitation, maintenance)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Positionner le Togo comme <strong>pionnier de la mobilité électrique</strong> en Afrique de l'Ouest
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* 1.3 Localisation et Site */}
      <Card className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <MapPin className="w-6 h-6 text-purple-600" />
          1.3 Localisation et Site
        </h3>

        <InfoBox type="info">
          <strong>Emplacement:</strong> Lomé, Togo
        </InfoBox>

        <div className="mb-6">
          <h4 className="font-bold text-gray-900 mb-3">Critères de sélection du site:</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-semibold text-gray-900">Accessibilité</div>
                <div className="text-sm text-gray-600">24h/24, 7j/7</div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-semibold text-gray-900">Proximité</div>
                <div className="text-sm text-gray-600">Axes routiers principaux</div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-semibold text-gray-900">Visibilité</div>
                <div className="text-sm text-gray-600">Haute pour attirer utilisateurs</div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-semibold text-gray-900">Potentiel de trafic</div>
                <div className="text-sm text-gray-600">Centres commerciaux, zones d'activité</div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-semibold text-gray-900">Raccordement CEET</div>
                <div className="text-sm text-gray-600">Disponible à proximité</div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-semibold text-gray-900">Foncier</div>
                <div className="text-sm text-gray-600">Sécurisé (propriété ou bail long)</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
          <h4 className="font-bold text-blue-900 mb-3">Caractéristiques requises:</h4>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <div className="flex justify-between">
              <span className="text-blue-800 font-semibold">Surface minimale:</span>
              <span className="text-blue-900 font-bold">250-300 m²</span>
            </div>
            <div className="flex justify-between">
              <span className="text-blue-800 font-semibold">Accès véhicules:</span>
              <span className="text-blue-900 font-bold">Poids lourds OK</span>
            </div>
            <div className="flex justify-between">
              <span className="text-blue-800 font-semibold">Extension future:</span>
              <span className="text-blue-900 font-bold">Possible</span>
            </div>
            <div className="flex justify-between">
              <span className="text-blue-800 font-semibold">Sécurité:</span>
              <span className="text-blue-900 font-bold">Périmétrique</span>
            </div>
          </div>
        </div>
      </Card>

      {/* 1.4 Alimentation Électrique */}
      <Card className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Zap className="w-6 h-6 text-yellow-600" />
          1.4 Alimentation Électrique
        </h3>

        <div className="space-y-4">
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Building2 className="w-5 h-5 text-yellow-700" />
              <span className="font-bold text-yellow-900">Fournisseur:</span>
              <span className="text-yellow-800">CEET (Compagnie Énergie Électrique du Togo)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="border-2 border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-3">Type de raccordement:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                  <span>Réseau BT ou MT selon disponibilité</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                  <span>Alimentation triphasée <strong>400V</strong> (3 phases + neutre)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                  <span>Puissance souscrite: <strong>370-400 kW minimum</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                  <span>Abonnement professionnel</span>
                </li>
              </ul>
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-3">Configuration:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-gray-700">Tension:</span>
                  <span className="font-bold">380V triphasé + N + PE</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700">Fréquence:</span>
                  <span className="font-bold">50 Hz ± 2%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700">Schéma terre:</span>
                  <span className="font-bold">TN-S ou TT</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700">Distance max CEET:</span>
                  <span className="font-bold">200 m (idéalement)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
// Section 2: Spécifications Techniques
  const renderSpecifications = () => (
    <div className="space-y-6">
      <SectionHeader
        icon={Settings}
        title="2. SPÉCIFICATIONS TECHNIQUES DÉTAILLÉES"
        subtitle="Configuration des bornes et architecture électrique"
        color="indigo"
      />

      {/* Configuration Générale */}
      <Card className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <LayoutGrid className="w-6 h-6 text-indigo-600" />
          2.1 Configuration Générale de la Station
        </h3>

        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border-2 border-indigo-200 rounded-lg p-6 mb-6">
          <div className="text-center mb-4">
            <div className="text-4xl font-bold text-indigo-900 mb-2">10 Points de Recharge</div>
            <div className="text-lg text-indigo-700">Capacité totale simultanée</div>
          </div>
        </div>

        <DataTable
          headers={['Type', 'Quantité', 'Puissance unitaire', 'Puissance totale', 'Usage principal']}
          rows={[
            ['Bornes AC', '5', '21 kW', '105 kW', 'Charge semi-rapide (2-3h)'],
            ['Bornes DC 60kW', '3', '60 kW', '180 kW', 'Charge rapide standard (45-50min)'],
            ['Bornes DC 120kW', '2', '120 kW', '240 kW', 'Charge ultra-rapide (20-25min)'],
            ['TOTAL', '10', '-', '525 kW', '-']
          ]}
        />

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="text-sm text-blue-700 mb-1">Puissance max théorique</div>
            <div className="text-2xl font-bold text-blue-900">525 kW</div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="text-sm text-green-700 mb-1">Puissance réelle (coef. 0.7)</div>
            <div className="text-2xl font-bold text-green-900">367.5 kW</div>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <div className="text-sm text-purple-700 mb-1">Abonnement CEET</div>
            <div className="text-2xl font-bold text-purple-900">370-400 kW</div>
          </div>
        </div>
      </Card>

      {/* Bornes AC 21kW */}
      <Card className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Plug className="w-6 h-6 text-green-600" />
          2.2 Bornes AC 21kW (5 Unités)
        </h3>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Badge color="green">Modèle</Badge>
              DL-A0121KW (ShenZhen Dawn)
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span className="text-gray-700">Puissance nominale:</span>
                <span className="font-bold">21 kW</span>
              </div>
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span className="text-gray-700">Tension entrée:</span>
                <span className="font-bold">AC 220V mono</span>
              </div>
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span className="text-gray-700">Courant sortie:</span>
                <span className="font-bold">0-80A ajustable</span>
              </div>
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span className="text-gray-700">Efficacité:</span>
                <span className="font-bold">≥ 95%</span>
              </div>
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span className="text-gray-700">Protection:</span>
                <span className="font-bold">IP54</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-3">Temps de charge estimés:</h4>
            <div className="space-y-3">
              <div className="border-2 border-green-200 rounded-lg p-3">
                <div className="font-semibold text-green-900 mb-2">Batterie 50 kWh:</div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>0% → 80%:</span>
                    <span className="font-bold text-green-700">~1h50</span>
                  </div>
                  <div className="flex justify-between">
                    <span>0% → 100%:</span>
                    <span className="font-bold text-green-700">~2h30</span>
                  </div>
                </div>
              </div>
              <div className="border-2 border-blue-200 rounded-lg p-3">
                <div className="font-semibold text-blue-900 mb-2">Batterie 75 kWh (SUV):</div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>0% → 80%:</span>
                    <span className="font-bold text-blue-700">~2h50</span>
                  </div>
                  <div className="flex justify-between">
                    <span>0% → 100%:</span>
                    <span className="font-bold text-blue-700">~3h45</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
          <h4 className="font-bold text-green-900 mb-3">Usage optimal:</h4>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="flex items-center gap-2 text-sm text-green-800">
              <CheckCircle2 className="w-4 h-4" />
              Stationnements semi-prolongés (2-4h)
            </div>
            <div className="flex items-center gap-2 text-sm text-green-800">
              <CheckCircle2 className="w-4 h-4" />
              Centres commerciaux, cinémas
            </div>
            <div className="flex items-center gap-2 text-sm text-green-800">
              <CheckCircle2 className="w-4 h-4" />
              Parkings publics, gares routières
            </div>
            <div className="flex items-center gap-2 text-sm text-green-800">
              <CheckCircle2 className="w-4 h-4" />
              Bureaux et lieux de travail
            </div>
          </div>
        </div>
      </Card>

      {/* Bornes DC 60kW */}
      <Card className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Battery className="w-6 h-6 text-blue-600" />
          2.3 Bornes DC 60kW (3 Unités)
        </h3>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Badge color="blue">Modèle</Badge>
              DC-FCA60KW (ShenZhen Dawn)
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span className="text-gray-700">Puissance nominale:</span>
                <span className="font-bold">60 kW</span>
              </div>
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span className="text-gray-700">Tension entrée:</span>
                <span className="font-bold">AC 380V triphasé ±15%</span>
              </div>
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span className="text-gray-700">Sortie DC:</span>
                <span className="font-bold">200-1000V / 0-250A</span>
              </div>
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span className="text-gray-700">Efficacité:</span>
                <span className="font-bold">≥ 94.5%</span>
              </div>
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span className="text-gray-700">Protection:</span>
                <span className="font-bold">IP54 / IK10</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-3">Temps de charge estimés:</h4>
            <div className="space-y-3">
              <div className="border-2 border-blue-200 rounded-lg p-3">
                <div className="font-semibold text-blue-900 mb-2">Batterie 50 kWh:</div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>10% → 80%:</span>
                    <span className="font-bold text-blue-700">~42 min</span>
                  </div>
                  <div className="flex justify-between">
                    <span>0% → 100%:</span>
                    <span className="font-bold text-blue-700">~65 min</span>
                  </div>
                </div>
              </div>
              <div className="border-2 border-indigo-200 rounded-lg p-3">
                <div className="font-semibold text-indigo-900 mb-2">Batterie 75 kWh (SUV):</div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>10% → 80%:</span>
                    <span className="font-bold text-indigo-700">~63 min</span>
                  </div>
                  <div className="flex justify-between">
                    <span>0% → 100%:</span>
                    <span className="font-bold text-indigo-700">~95 min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <InfoBox type="info">
          <strong>Connecteurs recommandés:</strong> CCS2 (Combo Type 2 + DC) pour compatibilité maximale au Togo et en Afrique.
          Prix: 4 168 USD/unité (standard international)
        </InfoBox>
      </Card>

      {/* Bornes DC 120kW */}
      <Card className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Zap className="w-6 h-6 text-purple-600" />
          2.4 Bornes DC 120kW (2 Unités) - Premium
        </h3>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Badge color="purple">Modèle</Badge>
              DC-FCA120KW (ShenZhen Dawn)
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span className="text-gray-700">Puissance nominale:</span>
                <span className="font-bold">120 kW</span>
              </div>
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span className="text-gray-700">Sortie DC:</span>
                <span className="font-bold">200-1000V / 0-250A</span>
              </div>
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span className="text-gray-700">Puissance constante:</span>
                <span className="font-bold">120 kW (200-480V)</span>
              </div>
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span className="text-gray-700">Efficacité:</span>
                <span className="font-bold">≥ 94.5%</span>
              </div>
              <div className="flex justify-between p-2 bg-gray-50 rounded">
                <span className="text-gray-700">Refroidissement:</span>
                <span className="font-bold">Air forcé renforcé</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-3">Temps de charge ultra-rapide:</h4>
            <div className="space-y-3">
              <div className="border-2 border-purple-200 rounded-lg p-3 bg-purple-50">
                <div className="font-semibold text-purple-900 mb-2">Batterie 50 kWh:</div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>10% → 80%:</span>
                    <span className="font-bold text-purple-700">~21 min</span>
                  </div>
                  <div className="flex justify-between">
                    <span>0% → 100%:</span>
                    <span className="font-bold text-purple-700">~40 min</span>
                  </div>
                </div>
              </div>
              <div className="border-2 border-indigo-200 rounded-lg p-3 bg-indigo-50">
                <div className="font-semibold text-indigo-900 mb-2">Batterie 100 kWh:</div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>10% → 80%:</span>
                    <span className="font-bold text-indigo-700">~42 min</span>
                  </div>
                  <div className="flex justify-between">
                    <span>0% → 100%:</span>
                    <span className="font-bold text-indigo-700">~75 min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4">
          <h4 className="font-bold text-purple-900 mb-3">Véhicules compatibles haute puissance:</h4>
          <div className="grid md:grid-cols-3 gap-2 text-sm">
            <div className="flex items-center gap-2 text-purple-800">
              <Car className="w-4 h-4" />
              Tesla Model 3/Y/S/X
            </div>
            <div className="flex items-center gap-2 text-purple-800">
              <Car className="w-4 h-4" />
              Porsche Taycan
            </div>
            <div className="flex items-center gap-2 text-purple-800">
              <Car className="w-4 h-4" />
              Hyundai Ioniq 5/6
            </div>
            <div className="flex items-center gap-2 text-purple-800">
              <Car className="w-4 h-4" />
              Kia EV6
            </div>
            <div className="flex items-center gap-2 text-purple-800">
              <Car className="w-4 h-4" />
              Mercedes EQS, EQE
            </div>
            <div className="flex items-center gap-2 text-purple-800">
              <Car className="w-4 h-4" />
              BMW iX, i4
            </div>
          </div>
        </div>
      </Card>

      {/* Architecture Électrique */}
      <Card className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <CircuitBoard className="w-6 h-6 text-orange-600" />
          2.5 Architecture Électrique Globale
        </h3>

        <div className="space-y-4">
          <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-4">
            <h4 className="font-bold text-orange-900 mb-3">Calcul Puissance:</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-orange-800">Puissance installée totale:</span>
                <span className="font-bold text-orange-900">525 kW</span>
              </div>
              <div className="flex justify-between">
                <span className="text-orange-800">Coefficient de simultanéité:</span>
                <span className="font-bold text-orange-900">0.7</span>
              </div>
              <div className="flex justify-between">
                <span className="text-orange-800">Puissance pratique:</span>
                <span className="font-bold text-orange-900">367.5 kW</span>
              </div>
              <div className="flex justify-between">
                <span className="text-orange-800">Marge sécurité 10%:</span>
                <span className="font-bold text-orange-900">404 kW</span>
              </div>
              <div className="flex justify-between border-t-2 border-orange-300 pt-2 mt-2">
                <span className="text-orange-900 font-bold">→ Abonnement CEET:</span>
                <span className="font-bold text-orange-900 text-lg">400 kW</span>
              </div>
            </div>
          </div>

          <InfoBox type="warning">
            <strong>Système Load Balancing recommandé:</strong> Gestion dynamique de la charge pour éviter 
            le dépassement de puissance souscrite lors de pics de consommation simultanée. Répartition 
            intelligente entre bornes actives.
          </InfoBox>
        </div>
      </Card>
    </div>
  );
// Section 7: Budget
  const renderBudget = () => (
    <div className="space-y-6">
      <SectionHeader
        icon={Calculator}
        title="7. ESTIMATION BUDGÉTAIRE DÉTAILLÉE"
        subtitle="Investissement Phase 1 - Sans solaire"
        color="red"
      />

      {/* Budget Total */}
      <Card className="p-6">
        <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl p-8 mb-6">
          <div className="text-center">
            <div className="text-sm font-semibold opacity-90 mb-2">INVESTISSEMENT TOTAL PHASE 1</div>
            <div className="text-6xl font-bold mb-4">115 977 USD</div>
            <div className="text-lg">Arrondi: ~116 000 USD</div>
            <div className="text-sm opacity-90 mt-2">Fourchette: 110 000 - 120 000 USD</div>
          </div>
        </div>

        {/* Répartition budgétaire */}
        <h3 className="text-xl font-bold text-gray-900 mb-4">Répartition budgétaire:</h3>
        <div className="space-y-3">
          {[
            { poste: 'Équipements recharge', montant: 28097, pourcent: 24, color: 'blue' },
            { poste: 'Infrastructure électrique', montant: 30180, pourcent: 26, color: 'yellow' },
            { poste: 'Génie civil', montant: 33300, pourcent: 29, color: 'green' },
            { poste: 'Supervision/gestion', montant: 12250, pourcent: 10, color: 'purple' },
            { poste: 'Installation/mise en service', montant: 17600, pourcent: 15, color: 'indigo' },
            { poste: 'Transport/logistique', montant: 5600, pourcent: 5, color: 'orange' },
            { poste: 'Études/autorisations', montant: 5600, pourcent: 5, color: 'pink' },
            { poste: 'Éclairage/sécurité', montant: 5950, pourcent: 5, color: 'cyan' },
            { poste: 'Divers/imprévus', montant: 13400, pourcent: 11, color: 'red' }
          ].map((item, idx) => {
            const colors = {
              blue: 'bg-blue-500',
              yellow: 'bg-yellow-500',
              green: 'bg-green-500',
              purple: 'bg-purple-500',
              indigo: 'bg-indigo-500',
              orange: 'bg-orange-500',
              pink: 'bg-pink-500',
              cyan: 'bg-cyan-500',
              red: 'bg-red-500'
            };
            return (
              <div key={idx} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-900">{item.poste}</span>
                  <div className="text-right">
                    <div className="font-bold text-gray-900">{item.montant.toLocaleString()} USD</div>
                    <div className="text-sm text-gray-600">{item.pourcent}%</div>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`${colors[item.color]} h-2 rounded-full`}
                    style={{ width: `${item.pourcent}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Détail Équipements */}
      <Card className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Package className="w-6 h-6 text-blue-600" />
          7.1 Coût des Équipements de Recharge
        </h3>

        <DataTable
          headers={['Élément', 'Prix unitaire', 'Quantité', 'Total USD']}
          rows={[
            ['Borne AC 21kW', '469 USD', '5', '2 345'],
            ['Poteaux montage AC', '150 USD', '5', '750'],
            ['Borne DC 60kW CCS2', '4 168 USD', '3', '12 504'],
            ['Borne DC 120kW CCS2', '6 039 USD', '2', '12 078'],
            ['Accessoires fixation', '-', '-', '420'],
            ['', '', 'TOTAL', '28 097']
          ]}
        />
      </Card>

      {/* Phase 2 Solaire */}
      <Card className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Sun className="w-6 h-6 text-yellow-600" />
          Phase 2: Intégration Solaire (6-12 mois après)
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-2 border-yellow-200 rounded-lg p-4 bg-yellow-50">
            <h4 className="font-bold text-yellow-900 mb-3">Option A - Sans stockage</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-yellow-800">Panneaux 250 kWc:</span>
                <span className="font-bold">75-100k USD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-yellow-800">Onduleurs hybrides:</span>
                <span className="font-bold">40-50k USD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-yellow-800">Structure + Install:</span>
                <span className="font-bold">50-70k USD</span>
              </div>
              <div className="flex justify-between border-t-2 border-yellow-300 pt-2 mt-2">
                <span className="font-bold text-yellow-900">TOTAL:</span>
                <span className="font-bold text-yellow-900">175-235k USD</span>
              </div>
              <div className="flex justify-between border-t border-yellow-300 pt-2 mt-2">
                <span className="text-yellow-800">ROI supplémentaire:</span>
                <span className="font-bold text-green-700">3-4 ans</span>
              </div>
              <div className="flex justify-between">
                <span className="text-yellow-800">Couverture besoins:</span>
                <span className="font-bold">50-60%</span>
              </div>
            </div>
          </div>

          <div className="border-2 border-green-200 rounded-lg p-4 bg-green-50">
            <h4 className="font-bold text-green-900 mb-3">Option B - Avec batteries (Optimal)</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-green-800">Option A (base):</span>
                <span className="font-bold">175-235k USD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-800">Batteries 300 kWh:</span>
                <span className="font-bold">60-90k USD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-800">Installation:</span>
                <span className="font-bold">5-10k USD</span>
              </div>
              <div className="flex justify-between border-t-2 border-green-300 pt-2 mt-2">
                <span className="font-bold text-green-900">TOTAL:</span>
                <span className="font-bold text-green-900">240-335k USD</span>
              </div>
              <div className="flex justify-between border-t border-green-300 pt-2 mt-2">
                <span className="text-green-800">ROI batteries:</span>
                <span className="font-bold text-green-700">5-7 ans</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-800">Couverture besoins:</span>
                <span className="font-bold">80-95%</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );

  // Section 8: Modèle Économique
  const renderEconomique = () => (
    <div className="space-y-6">
      <SectionHeader
        icon={TrendingUp}
        title="8. MODÈLE ÉCONOMIQUE ET RENTABILITÉ"
        subtitle="Stratégie tarifaire et analyse financière"
        color="emerald"
      />

      {/* Stratégie Tarifaire */}
      <Card className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <DollarSign className="w-6 h-6 text-emerald-600" />
          8.1 Stratégie Tarifaire
        </h3>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="border-2 border-green-200 rounded-lg p-4 bg-green-50">
            <div className="text-center">
              <Plug className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-sm text-green-700 mb-1">AC 21kW</div>
              <div className="text-3xl font-bold text-green-900">300</div>
              <div className="text-sm text-green-700">FCFA/kWh</div>
              <div className="text-xs text-green-600 mt-2">(~0.50 USD/kWh)</div>
            </div>
          </div>

          <div className="border-2 border-blue-200 rounded-lg p-4 bg-blue-50">
            <div className="text-center">
              <Battery className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-sm text-blue-700 mb-1">DC 60kW</div>
              <div className="text-3xl font-bold text-blue-900">400</div>
              <div className="text-sm text-blue-700">FCFA/kWh</div>
              <div className="text-xs text-blue-600 mt-2">(~0.67 USD/kWh)</div>
            </div>
          </div>

          <div className="border-2 border-purple-200 rounded-lg p-4 bg-purple-50">
            <div className="text-center">
              <Zap className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-sm text-purple-700 mb-1">DC 120kW</div>
              <div className="text-3xl font-bold text-purple-900">500</div>
              <div className="text-sm text-purple-700">FCFA/kWh</div>
              <div className="text-xs text-purple-600 mt-2">(~0.83 USD/kWh)</div>
            </div>
          </div>
        </div>

        <InfoBox type="info">
          <strong>Justification tarifaire:</strong> Coefficient multiplicateur 2.5-5× sur le coût CEET 
          (120 FCFA/kWh) pour couvrir investissement, exploitation, maintenance et dégager une marge rentable.
        </InfoBox>
      </Card>

      {/* Revenus Prévisionnels */}
      <Card className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-green-600" />
          8.2 Revenus et Rentabilité Prévisionnels
        </h3>

        <div className="space-y-4">
          {/* Année 1 */}
          <div className="border-2 border-green-200 rounded-lg p-6 bg-green-50">
            <h4 className="font-bold text-green-900 mb-4 text-lg">Année 1 (Montée en charge):</h4>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-sm text-green-700 mb-2">Fréquentation:</div>
                <ul className="space-y-1 text-sm">
                  <li className="flex justify-between">
                    <span>Sessions/jour:</span>
                    <span className="font-bold">34</span>
                  </li>
                  <li className="flex justify-between">
                    <span>kWh/jour:</span>
                    <span className="font-bold">1 180</span>
                  </li>
                  <li className="flex justify-between">
                    <span>kWh annuel:</span>
                    <span className="font-bold">430 700</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="text-sm text-green-700 mb-2">Résultats:</div>
                <ul className="space-y-1 text-sm">
                  <li className="flex justify-between">
                    <span>Revenus:</span>
                    <span className="font-bold text-green-900">284 700 USD</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Coûts exploit:</span>
                    <span className="font-bold text-red-700">-126 140 USD</span>
                  </li>
                  <li className="flex justify-between border-t border-green-300 pt-1 mt-1">
                    <span className="font-bold">Résultat net:</span>
                    <span className="font-bold text-green-900">135 560 USD</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Marge nette:</span>
                    <span className="font-bold text-green-900">48%</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-green-600 text-white rounded-lg p-4 text-center">
              <div className="text-sm mb-1">ROI (Retour sur Investissement)</div>
              <div className="text-4xl font-bold">12 mois</div>
            </div>
          </div>

          {/* Année 2-3 */}
          <div className="border-2 border-blue-200 rounded-lg p-6 bg-blue-50">
            <h4 className="font-bold text-blue-900 mb-4 text-lg">Années 2-3 (Croissance):</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-sm text-blue-700 mb-2">Sessions/jour</div>
                <div className="text-3xl font-bold text-blue-900">49</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-blue-700 mb-2">Revenus annuels</div>
                <div className="text-3xl font-bold text-blue-900">408 800 USD</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-blue-700 mb-2">Résultat net</div>
                <div className="text-3xl font-bold text-blue-900">223 470 USD</div>
              </div>
            </div>
          </div>

          {/* TRI et VAN */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border-2 border-purple-200 rounded-lg p-4 bg-purple-50 text-center">
              <div className="text-sm text-purple-700 mb-2">TRI (Taux Rendement Interne)</div>
              <div className="text-5xl font-bold text-purple-900">180-200%</div>
              <div className="text-sm text-purple-600 mt-2">Exceptionnel</div>
            </div>
            <div className="border-2 border-indigo-200 rounded-lg p-4 bg-indigo-50 text-center">
              <div className="text-sm text-indigo-700 mb-2">VAN (Taux 10%)</div>
              <div className="text-5xl font-bold text-indigo-900">750 000 USD</div>
              <div className="text-sm text-indigo-600 mt-2">Très positif</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );

  // Section 9: Gestion des Risques
  const renderRisques = () => (
    <div className="space-y-6">
      <SectionHeader
        icon={AlertTriangle}
        title="9. GESTION DES RISQUES"
        subtitle="Identification, évaluation et mitigation"
        color="amber"
      />

      {/* Matrice des Risques */}
      <Card className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Matrice des risques principaux:</h3>

        <div className="space-y-3">
          {[
            {
              risque: 'Adoption VE lente',
              prob: 'Moyenne',
              impact: 'Élevé',
              criticite: 'Élevée',
              color: 'red',
              mitigation: 'Partenariats concessionnaires, promotions, B2B flottes'
            },
            {
              risque: 'Instabilité réseau CEET',
              prob: 'Élevée',
              impact: 'Moyen',
              criticite: 'Élevée',
              color: 'orange',
              mitigation: 'Protections robustes, Phase 2 solaire+batteries'
            },
            {
              risque: 'Hausse coût électricité',
              prob: 'Moyenne',
              impact: 'Élevé',
              criticite: 'Élevée',
              color: 'orange',
              mitigation: 'Indexation tarifs, intégration solaire prioritaire'
            },
            {
              risque: 'Défaillance équipements',
              prob: 'Moyenne',
              impact: 'Élevé',
              criticite: 'Moyenne',
              color: 'yellow',
              mitigation: 'Garanties étendues, stock pièces, maintenance préventive'
            },
            {
              risque: 'Vandalisme',
              prob: 'Moyenne',
              impact: 'Moyen',
              criticite: 'Moyenne',
              color: 'yellow',
              mitigation: 'Vidéosurveillance, éclairage, conception anti-vandalisme'
            },
            {
              risque: 'Retards autorisations',
              prob: 'Moyenne',
              impact: 'Moyen',
              criticite: 'Moyenne',
              color: 'yellow',
              mitigation: 'Dépôt anticipé, relances proactives'
            }
          ].map((item, idx) => {
            const colors = {
              red: 'border-red-300 bg-red-50',
              orange: 'border-orange-300 bg-orange-50',
              yellow: 'border-yellow-300 bg-yellow-50'
            };
            return (
              <div key={idx} className={`border-2 ${colors[item.color]} rounded-lg p-4`}>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="font-bold text-gray-900 mb-1">{item.risque}</div>
                    <div className="text-sm text-gray-700">{item.mitigation}</div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Badge color={item.color === 'red' ? 'red' : item.color === 'orange' ? 'orange' : 'yellow'}>
                      {item.prob}
                    </Badge>
                    <Badge color={item.color === 'red' ? 'red' : item.color === 'orange' ? 'orange' : 'yellow'}>
                      Impact: {item.impact}
                    </Badge>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
// Render section active
  const renderActiveSection = () => {
    switch (activeSection) {
      case 'presentation':
        return renderPresentation();
      case 'specifications':
        return renderSpecifications();
      case 'budget':
        return renderBudget();
      case 'economique':
        return renderEconomique();
      case 'risques':
        return renderRisques();
      default:
        return renderPresentation();
    }
  };

  // Render complet (toutes sections)
  const renderComplet = () => (
    <div className="space-y-12">
      {renderPresentation()}
      {renderSpecifications()}
      {renderBudget()}
      {renderEconomique()}
      {renderRisques()}
    </div>
  );

  // Render Table des Matières
  const renderTableMatieres = () => (
    <Card className="p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <BookOpen className="w-6 h-6 text-blue-600" />
        Table des Matières
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        {sections.map((section, idx) => {
          const Icon = section.icon;
          return (
            <button
              key={section.id}
              onClick={() => {
                setActiveSection(section.id);
                setViewMode('sections');
              }}
              className="flex items-start gap-4 p-4 border-2 border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all text-left"
            >
              <div className={`p-2 rounded-lg bg-${section.color}-100`}>
                <Icon className={`w-5 h-5 text-${section.color}-600`} />
              </div>
              <div className="flex-1">
                <div className="font-bold text-gray-900 mb-1">
                  {idx + 1}. {section.title}
                </div>
                <div className="text-sm text-gray-600">
                  {section.subsections.length} sous-sections
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          );
        })}
      </div>
    </Card>
  );

  // RENDER PRINCIPAL
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      {renderHeader()}

      {/* Navigation */}
      {renderNavigation()}

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Table des matières en mode sections */}
        {viewMode === 'sections' && renderTableMatieres()}

        {/* Contenu */}
        {viewMode === 'sections' ? renderActiveSection() : renderComplet()}

        {/* Footer */}
        <div className="mt-12 border-t-2 border-gray-200 pt-8">
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Document de Référence Officiel
              </h3>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Version</div>
                  <div className="font-bold text-gray-900">{projectData.version}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Date d'édition</div>
                  <div className="font-bold text-gray-900">{projectData.date}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Validité</div>
                  <div className="font-bold text-gray-900">12 mois</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Ce document constitue la base contractuelle pour les appels d'offres et la réalisation 
                du projet de station de recharge pour véhicules électriques à Lomé, Togo.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all">
                  <Download className="w-5 h-5" />
                  Télécharger PDF complet
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-300 transition-all">
                  <Printer className="w-5 h-5" />
                  Imprimer
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-300 transition-all">
                  <Share2 className="w-5 h-5" />
                  Partager
                </button>
              </div>
            </div>
          </Card>

          {/* Contact */}
          <div className="mt-8 text-center text-sm text-gray-600">
            <p>Pour toute question ou demande d'information complémentaire:</p>
            <p className="font-bold text-gray-900 mt-2">
              MAKAYA MOBILITY
            </p>
            <p>Lomé, République Togolaise</p>
          </div>
        </div>
      </div>

      {/* Bouton retour en haut */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-110"
      >
        <ChevronRight className="w-6 h-6 transform -rotate-90" />
      </button>
    </div>
  );
};

export default CahierChargeRecharge;

