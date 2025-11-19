import React, { useState } from 'react';
import { 
  BarChart3, TrendingUp, DollarSign, Battery, Zap, 
  Download, Calculator, PieChart, Target, 
  AlertTriangle, CheckCircle, ArrowUpRight, Calendar,
  Shield, FileText, Settings
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedYear, setSelectedYear] = useState(2030);
  const [scenario, setScenario] = useState('base');

  const financialData = {
    conservateur: {
      2026: { ca: 3.8, ebitda: 0.68, marge: 18 },
      2027: { ca: 8.2, ebitda: 2.1, marge: 25.6 },
      2028: { ca: 15.5, ebitda: 4.8, marge: 31 },
      2029: { ca: 23.8, ebitda: 8.5, marge: 35.7 },
      2030: { ca: 33.2, ebitda: 14.6, marge: 44 }
    },
    base: {
      2026: { ca: 4.55, ebitda: 0.82, marge: 18 },
      2027: { ca: 9.76, ebitda: 2.58, marge: 26.4 },
      2028: { ca: 18.59, ebitda: 6.14, marge: 33 },
      2029: { ca: 28.67, ebitda: 11.28, marge: 39.3 },
      2030: { ca: 39.77, ebitda: 18.67, marge: 46.9 }
    },
    optimiste: {
      2026: { ca: 5.2, ebitda: 0.94, marge: 18 },
      2027: { ca: 11.5, ebitda: 3.1, marge: 27 },
      2028: { ca: 21.8, ebitda: 7.6, marge: 35 },
      2029: { ca: 33.5, ebitda: 14.1, marge: 42 },
      2030: { ca: 46.8, ebitda: 23.4, marge: 50 }
    }
  };

  const kpis2030 = {
    conservateur: { vehicles: 450, clients: 380, bornes: 380, employees: 140, marketShare: 19 },
    base: { vehicles: 650, clients: 550, bornes: 500, employees: 200, marketShare: 23 },
    optimiste: { vehicles: 850, clients: 720, bornes: 650, employees: 280, marketShare: 28 }
  };

  const Navigation = () => {
    const navItems = [
      { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
      { id: 'simulator', label: 'Simulateur', icon: Calculator },
      { id: 'scenarios', label: 'Scénarios', icon: Target },
      { id: 'roadmap', label: 'Roadmap', icon: Calendar },
      { id: 'risks', label: 'Risques', icon: AlertTriangle },
      { id: 'export', label: 'Export', icon: Download }
    ];

    return (
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Makaya Energy</h1>
                <p className="text-xs text-gray-600">Business Plan v4.0</p>
              </div>
            </div>
            
            <div className="flex gap-1">
              {navItems.map(item => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      activeTab === item.id
                        ? 'bg-green-50 text-green-700 font-medium'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    );
  };

  const Dashboard = () => {
    const data = financialData[scenario][selectedYear];
    const kpis = kpis2030[scenario];
    const currentYearRatio = (selectedYear - 2025) / 5;

    const KPICard = ({ title, value, subtitle, icon, trend, color }) => {
      const Icon = icon;
      const colorStyles = {
        blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: '#3B82F6' },
        green: { bg: 'bg-green-50', text: 'text-green-600', border: '#10B981' },
        purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: '#8B5CF6' },
        orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: '#F97316' }
      };
      const styles = colorStyles[color];

      return (
        <div className="bg-white rounded-lg shadow-sm p-6 border-l-4" style={{ borderLeftColor: styles.border }}>
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-lg ${styles.bg}`}>
              <Icon className={`w-6 h-6 ${styles.text}`} />
            </div>
            {trend && (
              <span className="text-sm font-medium text-green-600 flex items-center gap-1">
                <ArrowUpRight className="w-4 h-4" />
                {trend}
              </span>
            )}
          </div>
          <h3 className="text-3xl font-bold text-gray-900">{value}</h3>
          <p className="text-sm text-gray-600 mt-1">{title}</p>
          {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
        </div>
      );
    };

    return (
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Dashboard Financier</h2>
              <p className="text-gray-600 mt-1">Vue d'ensemble des projections Makaya Energy</p>
            </div>
            <div className="flex gap-4">
              <select 
                value={scenario}
                onChange={(e) => setScenario(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              >
                <option value="conservateur">Conservateur</option>
                <option value="base">Base</option>
                <option value="optimiste">Optimiste</option>
              </select>
              <select 
                value={selectedYear}
                onChange={(e) => setSelectedYear(Number(e.target.value))}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              >
                {[2026, 2027, 2028, 2029, 2030].map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium">
            <Target className="w-4 h-4" />
            Scénario {scenario.charAt(0).toUpperCase() + scenario.slice(1)}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard
            title="Chiffre d'Affaires"
            value={`${data.ca} Md`}
            subtitle="FCFA"
            icon={DollarSign}
            trend="+114%"
            color="blue"
          />
          <KPICard
            title="EBITDA"
            value={`${data.ebitda} Md`}
            subtitle={`Marge ${data.marge}%`}
            icon={TrendingUp}
            trend="+158%"
            color="green"
          />
          <KPICard
            title="Véhicules"
            value={Math.round(kpis.vehicles * currentYearRatio)}
            subtitle="Parc actif"
            icon={Battery}
            trend="+89%"
            color="purple"
          />
          <KPICard
            title="Part de Marché"
            value={`${Math.round(kpis.marketShare * currentYearRatio)}%`}
            subtitle="Togo premium"
            icon={Target}
            trend="+12pp"
            color="orange"
          />
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Métriques Opérationnelles 2030</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: 'Clients', value: kpis.clients },
              { label: 'Bornes', value: kpis.bornes },
              { label: 'Employés', value: kpis.employees },
              { label: 'NPS', value: '85' },
              { label: 'Churn', value: '<3%' },
              { label: 'LTV/CAC', value: '13.2x' }
            ].map(metric => (
              <div key={metric.label} className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                <div className="text-xs text-gray-600 mt-1">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-green-900">Break-even atteint</h4>
                <p className="text-sm text-green-700 mt-1">Cash-flow positif confirmé Q3 2027</p>
              </div>
            </div>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-orange-900">Point d'attention</h4>
                <p className="text-sm text-orange-700 mt-1">Valeur résiduelle 55% - Monitoring requis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Simulator = () => {
    const [inputs, setInputs] = useState({
      vehicles: 5,
      duration: 48,
      vehicleType: 'business'
    });

    const vehicleTypes = {
      essential: { name: 'Essential', price: 14.2, margin: 18 },
      business: { name: 'Business', price: 17.8, margin: 28 },
      premium: { name: 'Premium', price: 24.5, margin: 35 }
    };

    const type = vehicleTypes[inputs.vehicleType];
    const monthlyRevenue = (inputs.vehicles * 2.2).toFixed(2);
    const totalRevenue = (monthlyRevenue * inputs.duration).toFixed(2);
    const ebitda = (totalRevenue * (type.margin / 100)).toFixed(2);
    const ltv = (totalRevenue * 0.45).toFixed(2);

    return (
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Simulateur Unit Economics</h2>
          <p className="text-gray-600">Calculez la rentabilité d'un contrat client</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Calculator className="w-5 h-5 text-green-600" />
              Paramètres du Contrat
            </h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombre de véhicules: {inputs.vehicles}
              </label>
              <input
                type="range"
                value={inputs.vehicles}
                onChange={(e) => setInputs({...inputs, vehicles: Number(e.target.value)})}
                className="w-full"
                min="1"
                max="100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Durée (mois)
              </label>
              <select
                value={inputs.duration}
                onChange={(e) => setInputs({...inputs, duration: Number(e.target.value)})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              >
                <option value={36}>36 mois</option>
                <option value={48}>48 mois</option>
                <option value={60}>60 mois</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type de véhicule
              </label>
              <div className="space-y-2">
                {Object.entries(vehicleTypes).map(([key, t]) => (
                  <label key={key} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="vehicleType"
                      value={key}
                      checked={inputs.vehicleType === key}
                      onChange={(e) => setInputs({...inputs, vehicleType: e.target.value})}
                      className="text-green-600"
                    />
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{t.name}</div>
                      <div className="text-sm text-gray-600">Marge {t.margin}%</div>
                    </div>
                    <div className="text-sm font-medium text-gray-900">{t.price}M FCFA</div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                Résultats Financiers
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-200 text-lg font-semibold">
                  <span className="text-gray-700">Revenu mensuel</span>
                  <div className="text-gray-900 font-bold">{monthlyRevenue}M</div>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-700">Revenu total</span>
                  <div className="text-gray-900 font-bold">{totalRevenue}M</div>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-700">EBITDA</span>
                  <div className="text-right">
                    <div className="text-gray-900 font-bold">{ebitda}M</div>
                    <div className="text-xs text-gray-600">Marge {type.margin}%</div>
                  </div>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-gray-700">LTV estimée</span>
                  <div className="text-gray-900 font-bold">{ltv}M</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Métriques Clés</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'ROI Client', value: '156%' },
                  { label: 'Payback', value: '18 mois' },
                  { label: 'LTV/CAC', value: '13.2x' },
                  { label: 'Churn', value: '2.8%' }
                ].map(m => (
                  <div key={m.label} className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-xl font-bold text-gray-900">{m.value}</div>
                    <div className="text-xs text-gray-600 mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Scenarios = () => {
    const scenarios = [
      {
        name: 'Conservateur',
        probability: 15,
        borderColor: 'border-orange-200',
        vehicles: 450,
        ca: 33.2,
        marge: 44,
        description: 'Hypothèses prudentes avec ralentissement marché'
      },
      {
        name: 'Base',
        probability: 70,
        borderColor: 'border-green-200',
        vehicles: 650,
        ca: 39.77,
        marge: 46.9,
        description: 'Hypothèses réalistes basées sur études marché'
      },
      {
        name: 'Optimiste',
        probability: 15,
        borderColor: 'border-blue-200',
        vehicles: 850,
        ca: 46.8,
        marge: 50,
        description: 'Scénario favorable avec accélération adoption'
      }
    ];

    return (
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900">Analyse Scénarios</h2>
          <p className="text-gray-600 mt-1">Comparaison des projections selon 3 scénarios</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {scenarios.map((s, idx) => (
            <div key={idx} className={`bg-white rounded-lg shadow-sm border-2 ${s.borderColor} p-6`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">{s.name}</h3>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">{s.probability}%</div>
                  <div className="text-xs text-gray-500">Probabilité</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">{s.description}</p>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                <div>
                  <div className="text-xl font-bold text-gray-900">{s.vehicles}</div>
                  <div className="text-xs text-gray-600">Véhicules</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900">{s.ca}Md</div>
                  <div className="text-xs text-gray-600">CA 2030</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900">{s.marge}%</div>
                  <div className="text-xs text-gray-600">Marge</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg shadow-sm p-6">
          <div className="flex items-start gap-3">
            <Target className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Recommandations Stratégiques</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Scénario Base est le plus probable (70%) et doit servir de référence pour les décisions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Prévoir des plans de contingence basés sur le scénario conservateur</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Le scénario optimiste reste atteignable avec partenariats stratégiques renforcés</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Roadmap = () => {
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900">Roadmap Exécution</h2>
          <p className="text-gray-600 mt-1">Plan détaillé 2025-2026</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-gray-600">Roadmap en cours de développement...</p>
        </div>
      </div>
    );
  };

  const Risks = () => {
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900">Gestion des Risques</h2>
          <p className="text-gray-600 mt-1">Identification et mitigation</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-gray-600">Analyse des risques en cours de développement...</p>
        </div>
      </div>
    );
  };

  const Export = () => {
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900">Export Business Plan</h2>
          <p className="text-gray-600 mt-1">Génération de documents</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-gray-600">Fonctionnalité d'export en cours de développement...</p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'simulator' && <Simulator />}
        {activeTab === 'scenarios' && <Scenarios />}
        {activeTab === 'roadmap' && <Roadmap />}
        {activeTab === 'risks' && <Risks />}
        {activeTab === 'export' && <Export />}
      </main>

      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-green-600" />
              <span>© 2025 Makaya Energy - Business Plan v4.0</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="hover:text-green-600 cursor-pointer">Documentation</span>
              <span className="hover:text-green-600 cursor-pointer">Contact</span>
              <span className="hover:text-green-600 cursor-pointer">Support</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
