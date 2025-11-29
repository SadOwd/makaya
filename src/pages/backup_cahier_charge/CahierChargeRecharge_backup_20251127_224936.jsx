import React, { useState } from 'react';
import { 
  FileText, ChevronDown, ChevronRight, Download, Printer, Search,
  Building2, Zap, HardHat, Shield, TrendingUp, Calendar, 
  DollarSign, AlertTriangle, Users, Award, BookOpen, MapPin,
  Battery, Gauge, ThermometerSun, Network, Lock, Eye,
  CheckCircle2, XCircle, Info, AlertCircle, Settings,
  Activity, BarChart3, Target, Layers, FileCheck, Wrench,
  Lightbulb, Archive, ClipboardList, ArrowRight
} from 'lucide-react';

const CahierChargeRecharge = () => {
  const [activeSection, setActiveSection] = useState('presentation');
  const [expandedSections, setExpandedSections] = useState(['presentation']);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleSection = (section) => {
    if (expandedSections.includes(section)) {
      setExpandedSections(expandedSections.filter(s => s !== section));
    } else {
      setExpandedSections([...expandedSections, section]);
    }
  };

  // Structure du cahier de charges
  const sections = [
    {
      id: 'presentation',
      title: '1. Présentation du Projet',
      icon: FileText,
      color: 'blue',
      subsections: [
        { id: 'contexte', title: 'Contexte et Justification' },
        { id: 'objectifs', title: 'Objectifs du Projet' },
        { id: 'localisation', title: 'Localisation et Site' },
        { id: 'alimentation', title: 'Alimentation Électrique' }
      ]
    },
    {
      id: 'specifications',
      title: '2. Spécifications Techniques',
      icon: Settings,
      color: 'purple',
      subsections: [
        { id: 'config-generale', title: 'Configuration Générale' },
        { id: 'bornes-ac', title: 'Bornes AC 21kW' },
        { id: 'bornes-dc-60', title: 'Bornes DC 60kW' },
        { id: 'bornes-dc-120', title: 'Bornes DC 120kW' },
        { id: 'architecture', title: 'Architecture Électrique' }
      ]
    },
    {
      id: 'infrastructure',
      title: '3. Infrastructure & Génie Civil',
      icon: HardHat,
      color: 'orange',
      subsections: [
        { id: 'genie-civil', title: 'Génie Civil' },
        { id: 'signaletique', title: 'Signalétique' },
        { id: 'securite', title: 'Sécurité et Surveillance' }
      ]
    },
    {
      id: 'normes',
      title: '4. Normes et Réglementations',
      icon: Shield,
      color: 'red',
      subsections: [
        { id: 'normes-elec', title: 'Normes Électriques' },
        { id: 'reglementations', title: 'Réglementations Locales' },
        { id: 'certifications', title: 'Certifications' }
      ]
    },
    {
      id: 'performances',
      title: '5. Performances et Garanties',
      icon: Award,
      color: 'green',
      subsections: [
        { id: 'perf-techniques', title: 'Performances Techniques' },
        { id: 'garanties', title: 'Garanties Fabricants' },
        { id: 'assurances', title: 'Assurances' }
      ]
    },
    {
      id: 'planning',
      title: '6. Planning et Phasage',
      icon: Calendar,
      color: 'indigo',
      subsections: [
        { id: 'phase1', title: 'Phase 1: Démarrage (Sans Solaire)' },
        { id: 'phase2', title: 'Phase 2: Intégration Solaire' },
        { id: 'chemin-critique', title: 'Chemin Critique' }
      ]
    },
    {
      id: 'budget',
      title: '7. Estimation Budgétaire',
      icon: DollarSign,
      color: 'emerald',
      subsections: [
        { id: 'equipements', title: 'Coût des Équipements' },
        { id: 'infrastructure-elec', title: 'Infrastructure Électrique' },
        { id: 'genie-civil-cout', title: 'Génie Civil' },
        { id: 'total', title: 'Budget Total' }
      ]
    },
    {
      id: 'economique',
      title: '8. Modèle Économique',
      icon: TrendingUp,
      color: 'teal',
      subsections: [
        { id: 'tarification', title: 'Stratégie Tarifaire' },
        { id: 'previsions', title: 'Prévisions d\'Exploitation' },
        { id: 'rentabilite', title: 'Analyse de Rentabilité' },
        { id: 'financement', title: 'Options de Financement' }
      ]
    },
    {
      id: 'risques',
      title: '9. Gestion des Risques',
      icon: AlertTriangle,
      color: 'yellow',
      subsections: [
        { id: 'identification', title: 'Identification des Risques' },
        { id: 'matrice', title: 'Matrice des Risques' },
        { id: 'continuite', title: 'Plan de Continuité' }
      ]
    },
    {
      id: 'prestataires',
      title: '10. Sélection Prestataires',
      icon: Users,
      color: 'pink',
      subsections: [
        { id: 'appel-offres', title: 'Procédure Appel d\'Offres' },
        { id: 'qualifications', title: 'Qualifications Requises' },
        { id: 'criteres', title: 'Critères d\'Attribution' }
      ]
    },
    {
      id: 'livrables',
      title: '11. Livrables et Documentation',
      icon: BookOpen,
      color: 'cyan',
      subsections: [
        { id: 'etudes', title: 'Livrables Phase Études' },
        { id: 'realisation', title: 'Livrables Réalisation' },
        { id: 'exploitation', title: 'Documentation Exploitation' },
        { id: 'formation', title: 'Formation Personnel' }
      ]
    },
    {
      id: 'contractuel',
      title: '12. Conditions Contractuelles',
      icon: FileCheck,
      color: 'violet',
      subsections: [
        { id: 'modalites', title: 'Modalités Générales' },
        { id: 'paiements', title: 'Modalités de Paiement' },
        { id: 'garanties-contrat', title: 'Garanties Contractuelles' },
        { id: 'reception', title: 'Réception et Protocoles' }
      ]
    },
    {
      id: 'annexes',
      title: '13. Annexes Techniques',
      icon: Archive,
      color: 'gray',
      subsections: [
        { id: 'schemas', title: 'Schémas Électriques' },
        { id: 'plans', title: 'Plans Type' },
        { id: 'tableaux', title: 'Tableaux de Référence' },
        { id: 'glossaire', title: 'Glossaire Technique' }
      ]
    }
  ];

  // Contenu détaillé par section
  const renderContent = () => {
    switch(activeSection) {
      case 'presentation':
        return <PresentationContent />;
      case 'contexte':
        return <ContexteContent />;
      case 'objectifs':
        return <ObjectifsContent />;
      case 'localisation':
        return <LocalisationContent />;
      case 'alimentation':
        return <AlimentationContent />;
      case 'specifications':
        return <SpecificationsContent />;
      case 'config-generale':
        return <ConfigGeneraleContent />;
      case 'bornes-ac':
        return <BornesACContent />;
      case 'bornes-dc-60':
        return <BornesDC60Content />;
      case 'bornes-dc-120':
        return <BornesDC120Content />;
      case 'architecture':
        return <ArchitectureContent />;
      case 'infrastructure':
        return <InfrastructureContent />;
      case 'genie-civil':
        return <GenieCivilContent />;
      case 'signaletique':
        return <SignaletiqueContent />;
      case 'securite':
        return <SecuriteContent />;
      case 'normes':
        return <NormesContent />;
      case 'budget':
        return <BudgetContent />;
      case 'equipements':
        return <EquipementsContent />;
      case 'total':
        return <BudgetTotalContent />;
      case 'economique':
        return <EconomiqueContent />;
      case 'tarification':
        return <TarificationContent />;
      case 'previsions':
        return <PrevisionsContent />;
      case 'rentabilite':
        return <RentabiliteContent />;
      case 'risques':
        return <RisquesContent />;
      case 'planning':
        return <PlanningContent />;
      case 'phase1':
        return <Phase1Content />;
      case 'annexes':
        return <AnnexesContent />;
      default:
        return <PresentationContent />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <FileText className="w-10 h-10" />
                <div>
                  <h1 className="text-3xl font-bold">Cahier des Charges Complet</h1>
                  <p className="text-blue-100 mt-1">Station de Recharge pour Véhicules Électriques</p>
                </div>
              </div>
              <div className="flex items-center gap-6 mt-4 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Lomé, Togo</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Version 2.0 - 27 Nov 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  <span>Touche Parfaite (MAWOUSSI Mensah)</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
                <Download className="w-5 h-5" />
                Télécharger PDF
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition-colors font-semibold">
                <Printer className="w-5 h-5" />
                Imprimer
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Barre de recherche et statistiques */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex-1 max-w-md relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher dans le cahier de charges..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center gap-6 ml-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">10</div>
                <div className="text-xs text-gray-600">Bornes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">525kW</div>
                <div className="text-xs text-gray-600">Puissance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">$115K</div>
                <div className="text-xs text-gray-600">Budget</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">&lt;12</div>
                <div className="text-xs text-gray-600">Mois ROI</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Layout principal */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Menu latéral */}
          <div className="col-span-3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-6">
              <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200">
                <h2 className="font-bold text-gray-900 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-blue-600" />
                  Table des Matières
                </h2>
              </div>
              <div className="max-h-[calc(100vh-200px)] overflow-y-auto">
                {sections.map((section) => {
                  const Icon = section.icon;
                  const isExpanded = expandedSections.includes(section.id);
                  const isActive = activeSection === section.id;
                  
                  return (
                    <div key={section.id} className="border-b border-gray-100 last:border-0">
                      <button
                        onClick={() => {
                          toggleSection(section.id);
                          setActiveSection(section.id);
                        }}
                        className={`w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors ${
                          isActive ? `bg-${section.color}-50 border-l-4 border-${section.color}-600` : ''
                        }`}
                      >
                        <Icon className={`w-5 h-5 text-${section.color}-600 flex-shrink-0`} />
                        <span className="flex-1 text-left text-sm font-medium text-gray-900">
                          {section.title}
                        </span>
                        {isExpanded ? (
                          <ChevronDown className="w-4 h-4 text-gray-400" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        )}
                      </button>
                      
                      {/* Sous-sections */}
                      {isExpanded && section.subsections && (
                        <div className="bg-gray-50">
                          {section.subsections.map((sub) => (
                            <button
                              key={sub.id}
                              onClick={() => setActiveSection(sub.id)}
                              className={`w-full text-left px-4 py-2 pl-12 text-sm hover:bg-gray-100 transition-colors ${
                                activeSection === sub.id ? 'text-blue-600 font-semibold bg-blue-50' : 'text-gray-700'
                              }`}
                            >
                              {sub.title}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contenu principal */}
          <div className="col-span-9">
            <div className="bg-white rounded-xl shadow-lg p-8">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// COMPOSANTS DE CONTENU DÉTAILLÉS
// ============================================================================

const PresentationContent = () => (
  <div className="space-y-8">
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
        <FileText className="w-8 h-8 text-blue-600" />
        Présentation du Projet
      </h2>
      <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-6"></div>
    </div>

    {/* Vue d'ensemble */}
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <Target className="w-6 h-6 text-blue-600" />
        Vue d'Ensemble
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="text-sm text-gray-600 mb-1">Localisation</div>
          <div className="font-bold text-gray-900 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-blue-600" />
            Lomé, République du Togo
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="text-sm text-gray-600 mb-1">Maître d'Ouvrage</div>
          <div className="font-bold text-gray-900">Touche Parfaite</div>
          <div className="text-sm text-gray-600">MAWOUSSI Mensah</div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="text-sm text-gray-600 mb-1">Type de Projet</div>
          <div className="font-bold text-gray-900">Infrastructure Publique</div>
          <div className="text-sm text-gray-600">Recharge Véhicules Électriques</div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="text-sm text-gray-600 mb-1">Version Document</div>
          <div className="font-bold text-gray-900">Version 2.0</div>
          <div className="text-sm text-gray-600">27 Novembre 2025</div>
        </div>
      </div>
    </div>

    {/* Contexte */}
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Contexte et Justification</h3>
      <div className="prose max-w-none text-gray-700 space-y-4">
        <p>
          Le Togo s'inscrit dans une dynamique de <strong className="text-blue-600">transition énergétique</strong> et 
          de développement durable. L'émergence progressive de véhicules électriques dans la sous-région ouest-africaine 
          nécessite la mise en place d'infrastructures de recharge adaptées et fiables.
        </p>
        <p>
          Ce projet vise à créer la <strong className="text-green-600">première station de recharge publique multi-standards</strong> à 
          Lomé, capitale du Togo, offrant à la fois des solutions de recharge semi-rapide (AC) et rapide (DC) pour répondre 
          aux besoins variés des utilisateurs de véhicules électriques.
        </p>
      </div>
    </div>

    {/* Objectifs principaux */}
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-green-50 rounded-xl p-6 border border-green-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
            <Target className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-bold text-gray-900">Objectifs Principaux</h3>
        </div>
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">Déployer <strong>10 bornes opérationnelles</strong></span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">Services recharge <strong>AC et DC</strong></span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">Disponibilité <strong>≥ 95%</strong></span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">Tarifs <strong>compétitifs</strong></span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">Modèle économique <strong>viable et duplicable</strong></span>
          </li>
        </ul>
      </div>

      <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
            <Lightbulb className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-bold text-gray-900">Objectifs Secondaires</h3>
        </div>
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">Réduction émissions <strong>CO₂</strong></span>
          </li>
          <li className="flex items-start gap-2">
            <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">Intégration future <strong>énergies renouvelables</strong></span>
          </li>
          <li className="flex items-start gap-2">
            <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">Création <strong>emplois locaux</strong></span>
          </li>
          <li className="flex items-start gap-2">
            <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">Togo pionnier <strong>mobilité électrique</strong></span>
          </li>
        </ul>
      </div>
    </div>

    {/* Chiffres clés */}
    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
      <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Chiffres Clés du Projet</h3>
      <div className="grid grid-cols-4 gap-4">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
            <Battery className="w-8 h-8 text-white" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">10</div>
          <div className="text-sm text-gray-600">Bornes de recharge</div>
          <div className="text-xs text-gray-500 mt-1">5 AC + 5 DC</div>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">525</div>
          <div className="text-sm text-gray-600">kW installés</div>
          <div className="text-xs text-gray-500 mt-1">370kW réels</div>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
            <DollarSign className="w-8 h-8 text-white" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">$115K</div>
          <div className="text-sm text-gray-600">Investissement</div>
          <div className="text-xs text-gray-500 mt-1">Phase 1</div>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">&lt;12</div>
          <div className="text-sm text-gray-600">Mois ROI</div>
          <div className="text-xs text-gray-500 mt-1">Très rentable</div>
        </div>
      </div>
    </div>
  </div>
);

// Composant Contexte détaillé
const ContexteContent = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-gray-900 mb-6">Contexte et Justification</h2>
    
    <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Situation Actuelle au Togo</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="w-5 h-5 text-green-600" />
            <h4 className="font-bold text-gray-900">Dynamique Positive</h4>
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Transition énergétique en cours</li>
            <li>• Engagement développement durable</li>
            <li>• Volonté politique favorable</li>
            <li>• Cadre réglementaire en évolution</li>
          </ul>
        </div>
        <div className="bg-white rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="w-5 h-5 text-orange-600" />
            <h4 className="