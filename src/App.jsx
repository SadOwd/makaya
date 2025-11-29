import React, { useState } from 'react';
import { 
  TrendingUp, DollarSign, Users, Target, AlertTriangle, Calendar, 
  FileText, StickyNote, Edit2, Save, Download, Car, Zap, Battery,
  Award, Sparkles
} from 'lucide-react';

// Import Recharge components
import RechargeMain from './components/Recharge/RechargeMain';
import DashboardPrincipal from './components/DashboardPrincipal';
import Scenarios from './components/Scenarios';
import Risks from './components/Risks';
import Roadmap from './components/Roadmap';
import Export from './components/Export';

// 🆕 NOUVEAUX COMPOSANTS - Système Unifié Tarifs
import TestSysteme from './components/TestSysteme';
import ExemplesUsage from './components/ExemplesUsageTarifs';

function App() {
  const [activeSection, setActiveSection] = useState('recharge');
  const [editMode, setEditMode] = useState(false);

  const sections = {
    testTarifs: { title: 'Test Système', icon: Award },
    exemplesTarifs: { title: 'Exemples Tarifs', icon: Sparkles },
    recharge: { title: 'Makaya Recharge', icon: Zap },
    dashboard: { title: 'Dashboard Global', icon: TrendingUp },
    scenarios: { title: 'Scénarios', icon: Target },
    risks: { title: 'Risques', icon: AlertTriangle },
    roadmap: { title: 'Roadmap', icon: Calendar },
    export: { title: 'Export', icon: Download }
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'testTarifs':
        return <TestSysteme />;
      
      case 'exemplesTarifs':
        return <ExemplesUsage />;
      
      case 'recharge':
        return <RechargeMain />;
      
      case 'dashboard':
        return <DashboardPrincipal />;
      
      case 'scenarios':
        return <Scenarios />;
      
      case 'risks':
        return <Risks />;
      
      case 'roadmap':
        return <Roadmap />;
      
      case 'export':
        return <Export />;
      
      default:
        return <RechargeMain />;
    }
  };

  const SectionIcon = sections[activeSection].icon;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
              <Battery size={40} />
              MAKAYA ENERGY
            </h1>
            <p className="text-blue-100">Plateforme E-Mobility Complète | Togo - Afrique de l'Ouest</p>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={() => setEditMode(!editMode)} 
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                editMode ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {editMode ? <><Save size={18} />Sauvegarder</> : <><Edit2 size={18} />Modifier</>}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white shadow-md sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex overflow-x-auto gap-2 py-4">
            {Object.entries(sections).map(([key, section]) => {
              const Icon = section.icon;
              return (
                <button 
                  key={key} 
                  onClick={() => setActiveSection(key)} 
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                    activeSection === key 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">{section.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto p-6">
        {renderContent()}
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white mt-12 p-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-300 mb-2">Makaya Energy Togo SA</p>
          <p className="text-gray-400 text-sm">Pionnier de la mobilité électrique durable au Togo</p>
          <div className="mt-4 flex justify-center gap-8 text-sm text-gray-500">
            <div>
              <div className="text-white font-bold text-lg">6</div>
              <div>Stations</div>
            </div>
            <div>
              <div className="text-white font-bold text-lg">24</div>
              <div>Bornes</div>
            </div>
            <div>
              <div className="text-white font-bold text-lg">3,847</div>
              <div>Clients</div>
            </div>
            <div>
              <div className="text-white font-bold text-lg">1,008t</div>
              <div>CO₂ évité/an</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
