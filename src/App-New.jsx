import React, { useState } from 'react';
import { 
  BarChart3, TrendingUp, DollarSign, Users, Zap, 
  Calculator, Target, MapPin, AlertTriangle, Download,
  ArrowUpRight, Battery
} from 'lucide-react';

// Import des composants
import Scenarios from './components/Scenarios';
import Roadmap from './components/Roadmap';
import Risks from './components/Risks';
import Export from './components/Export';

const App = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedYear, setSelectedYear] = useState(2030);
  const [scenario, setScenario] = useState('base');

  // Données financières par scénario
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
    conservateur: {
      vehicles: 450,
      clients: 380,
      bornes: 380,
      employees: 140,
      marketShare: 19
    },
    base: {
      vehicles: 650,
      clients: 550,
      bornes: 500,
      employees: 200,
      marketShare: 23
    },
    optimiste: {
      vehicles: 850,
      clients: 720,
      bornes: 650,
      employees: 280,
      marketShare: 28
    }
  };

  // Composant Dashboard
  const Dashboard = () => {
    const data = financialData[scenario][selectedYear];
    const kpis = kpis2030[scenario];

    return (
      <div className="space-y-6">
        {/* Header avec sélecteurs */}
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
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              >
                <option value="conservateur">Conservateur</option>
                <option value="base">Base</option>
                <option value="optimiste">Optimiste</option>
              </select>
              <select 
                value={selectedYear}
                onChange={(e) => setSelectedYear(Number(e.target.value))}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              >
                {[2026, 2027, 2028, 2029, 2030].map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Scénario badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium">
            <Target className="w-4 h-4" />
            Scénario {scenario.charAt(0).toUpperCase() + scenario.slice(1)}
          </div>
        </div>

        {/* KPIs Principaux */}
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
            value={selectedYear === 2030 ? kpis.vehicles : Math.round(kpis.vehicles * (selectedYear - 2025) / 5)}
            subtitle="Parc actif"
            icon={Battery}
            trend="+89%"
            color="purple"
          />
          <KPICard
            title="Part de Marché"
            value={`${selectedYear === 2030 ? kpis.marketShare : Math.round(kpis.marketShare * (selectedYear - 2025) / 5)}%`}
            subtitle="Togo premium"
            icon={Target}
            trend="+12pp"
            color="orange"
          />
        </div>

        {/* Graphiques */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Évolution CA & EBITDA */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-green-600" />
              Évolution CA & EBITDA
            </h3>
            <RevenueChart scenario={scenario} />
          </div>

          {/* Mix Revenus */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-green-600" />
              Mix Revenus 2030
            </h3>
            <RevenueMixChart />
          </div>
        </div>

        {/* Métriques Opérationnelles */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Métriques Opérationnelles 2030</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <MetricBadge label="Clients" value={kpis.clients} />
            <MetricBadge label="Bornes" value={kpis.bornes} />
            <MetricBadge label="Employés" value={kpis.employees} />
            <MetricBadge label="NPS" value="85" />
            <MetricBadge label="Churn" value="<3%" />
            <MetricBadge label="LTV/CAC" value="13.2x" />
          </div>
        </div>

        {/* Alertes & Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AlertCard
            type="success"
            title="Break-even atteint"
            message="Cash-flow positif confirmé Q3 2027"
          />
          <AlertCard
            type="warning"
            title="Point d'attention"
            message="Valeur résiduelle 55% - Monitoring requis"
          />
        </div>
      </div>
    );
  };

  // Composant KPI Card
  const KPICard = ({ title, value, subtitle, icon: Icon, trend, color }) => {
    const colorClasses = {
      blue: 'bg-blue-50 text-blue-600',
      green: 'bg-green-50 text-green-600',
      purple: 'bg-purple-50 text-purple-600',
      orange: 'bg-orange-50 text-orange-600'
    };

    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-lg ${colorClasses[color]}`}>
            <Icon className="w-6 h-6" />
          </div>
          {trend && (
            <span className="text-sm font-medium text-green-600 flex items-center gap-1">
              <ArrowUpRight className="w-4 h-4" />
              {trend}
            </span>
          )}
        </div>
        <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
        <p className="text-sm text-gray-600 mt-1">{title}</p>
        {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
      </div>
    );
  };

  // Composant graphique revenus
  const RevenueChart = ({ scenario }) => {
    const data = financialData[scenario];
    const years = Object.keys(data);
    const maxCA = Math.max(...years.map(y => data[y].ca));

    return (
      <div className="space-y-3">
        {years.map(year => {
          const yearData = data[year];
          const caPercent = (yearData.ca / maxCA) * 100;
          const ebitdaPercent = (yearData.ebitda / maxCA) * 100;

          return (
            <div key={year} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-gray-700">{year}</span>
                <div className="flex gap-4 text-xs">
                  <span className="text-blue-600">CA: {yearData.ca} Md</span>
                  <span className="text-green-600">EBITDA: {yearData.ebitda} Md</span>
                </div>
              </div>
              <div className="relative h-8 bg-gray-100 rounded-lg overflow-hidden">
                <div 
                  className="absolute left-0 top-0 h-full bg-blue-500 opacity-50 transition-all"
                  style={{ width: `${caPercent}%` }}
                />
                <div 
                  className="absolute left-0 top-0 h-full bg-green-500 transition-all"
                  style={{ width: `${ebitdaPercent}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  // Composant Mix Revenus
  const RevenueMixChart = () => {
    const revenueStreams = [
      { name: 'LLD Véhicules', value: 67.5, color: 'bg-blue-500' },
      { name: 'Fleet Flex', value: 6.5, color: 'bg-green-500' },
      { name: 'Ventes Directes', value: 22.6, color: 'bg-purple-500' },
      { name: 'Bornes', value: 3.8, color: 'bg-orange-500' },
      { name: 'Services', value: 2.6, color: 'bg-pink-500' }
    ];

    return (
      <div className="space-y-3">
        {revenueStreams.map(stream => (
          <div key={stream.name} className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-gray-700">{stream.name}</span>
              <span className="text-gray-600">{stream.value}%</span>
            </div>
            <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className={`h-full ${stream.color} transition-all`}
                style={{ width: `${stream.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Composant Metric Badge
  const MetricBadge = ({ label, value }) => (
    <div className="text-center p-3 bg-gray-50 rounded-lg">
      <div className="text-2xl font-bold text-gray-900">{value}</div>
      <div className="text-xs text-gray-600 mt-1">{label}</div>
    </div>
  );

  // Composant Alert Card
  const AlertCard = ({ type, title, message }) => {
    const config = {
      success: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        iconColor: 'text-green-600'
      },
      warning: {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        iconColor: 'text-orange-600'
      }
    };

    const { bg, border, iconColor } = config[type];

    return (
      <div className={`${bg} border ${border} rounded-lg p-4`}>
        <div className="flex items-start gap-3">
          <AlertTriangle className={`w-5 h-5 ${iconColor} mt-0.5`} />
          <div>
            <h4 className="font-semibold text-gray-900">{title}</h4>
            <p className="text-sm text-gray-600 mt-1">{message}</p>
          </div>
        </div>
      </div>
    );
  };

  // Composant Simulateur
  const Simulator = () => {
    const [simInputs, setSimInputs] = useState({
      vehicles: 5,
      duration: 48,
      vehicleType: 'business',
      services: ['maintenance', 'insurance', 'charging']
    });

    const vehicleTypes = {
      essential: { name: 'Essential', price: 14.2, margin: 18 },
      business: { name: 'Business', price: 17.8, margin: 28 },
      premium: { name: 'Premium', price: 24.5, margin: 35 }
    };

    const calculateResults = () => {
      const type = vehicleTypes[simInputs.vehicleType];
      const monthlyRevenue = simInputs.vehicles * 2.2;
      const totalRevenue = monthlyRevenue * simInputs.duration;
      const ebitda = totalRevenue * (type.margin / 100);
      
      return {
        monthlyRevenue: monthlyRevenue.toFixed(2),
        totalRevenue: totalRevenue.toFixed(2),
        ebitda: ebitda.toFixed(2),
        margin: type.margin,
        ltv: (totalRevenue * 0.45).toFixed(2)
      };
    };

    const results = calculateResults();

    return (
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Simulateur Unit Economics</h2>
          <p className="text-gray-600">Calculez la rentabilité d'un contrat client</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Inputs */}
          <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Calculator className="w-5 h-5 text-green-600" />
              Paramètres du Contrat
            </h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombre de véhicules
              </label>
              <input
                type="number"
                value={simInputs.vehicles}
                onChange={(e) => setSimInputs({...simInputs, vehicles: Number(e.target.value)})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                min="1"
                max="100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Durée (mois)
              </label>
              <select
                value={simInputs.duration}
                onChange={(e) => setSimInputs({...simInputs, duration: Number(e.target.value)})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
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
                {Object.entries(vehicleTypes).map(([key, type]) => (
                  <label key={key} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="vehicleType"
                      value={key}
                      checked={simInputs.vehicleType === key}
                      onChange={(e) => setSimInputs({...simInputs, vehicleType: e.target.value})}
                      className="text-green-600 focus:ring-green-500"
                    />
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{type.name}</div>
                      <div className="text-sm text-gray-600">Marge {type.margin}%</div>
                    </div>
                    <div className="text-sm font-medium text-gray-900">{type.price}M FCFA</div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Résultats */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                Résultats Financiers
              </h3>
              
              <div className="space-y-4">
                <ResultRow label="Revenu mensuel" value={`${results.monthlyRevenue}M`} highlight />
                <ResultRow label="Revenu total" value={`${results.totalRevenue}M`} />
                <ResultRow label="EBITDA" value={`${results.ebitda}M`} subtext={`Marge ${results.margin}%`} />
                <ResultRow label="LTV estimée" value={`${results.ltv}M`} />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Métriques Clés</h4>
              <div className="grid grid-cols-2 gap-4">
                <MetricCard label="ROI Client" value="156%" />
                <MetricCard label="Payback" value="18 mois" />
                <MetricCard label="LTV/CAC" value="13.2x" />
                <MetricCard label="Churn" value="2.8%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ResultRow = ({ label, value, subtext, highlight }) => (
    <div className={`flex items-center justify-between py-3 border-b border-gray-200 last:border-0 ${highlight ? 'text-lg font-semibold' : ''}`}>
      <span className="text-gray-700">{label}</span>
      <div className="text-right">
        <div className="text-gray-900 font-bold">{value}</div>
        {subtext && <div className="text-xs text-gray-600">{subtext}</div>}
      </div>
    </div>
  );

  const MetricCard = ({ label, value }) => (
    <div className="text-center p-3 bg-gray-50 rounded-lg">
      <div className="text-xl font-bold text-gray-900">{value}</div>
      <div className="text-xs text-gray-600 mt-1">{label}</div>
    </div>
  );

  // Navigation
  const Navigation = () => {
    const navItems = [
      { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
      { id: 'simulator', label: 'Simulateur', icon: Calculator },
      { id: 'scenarios', label: 'Scénarios', icon: Target },
      { id: 'roadmap', label: 'Roadmap', icon: MapPin },
      { id: 'risks', label: 'Risques', icon: AlertTriangle },
      { id: 'export', label: 'Export', icon: Download }
    ];

    return (
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Zap className="w-8 h-8 text-green-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Makaya Energy</h1>
                <p className="text-xs text-gray-600">Business Plan v4.0</p>
              </div>
            </div>
            
            <div className="flex gap-1">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    activeTab === item.id
                      ? 'bg-green-50 text-green-700 font-medium'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    );
  };

  // Rendu principal
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
    </div>
  );
};

export default App;
