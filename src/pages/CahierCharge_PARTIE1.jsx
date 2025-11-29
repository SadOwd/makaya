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
    maitreOuvrage: "Touche Parfaite (MAWOUSSI Mensah)",
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
