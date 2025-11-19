import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Zap, DollarSign, Users, Target, Shield, Award, Globe, Battery, AlertTriangle, Download, Edit2, Save, Plus, Trash2, Calculator, FileText, Building2, Car } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const [editMode, setEditMode] = useState(false);
  
  const [companyData, setCompanyData] = useState({
    name: 'Makaya E-Mobility Togo SA',
    tagline: 'Leader de la mobilite electrique en Afrique de Ouest',
    targetCA: 59.4,
    targetVehicles: 4050,
    targetChargers: 215,
    marketShare: '60-70%'
  });

  // Données concurrence
  const [competitors] = useState([
    { name: 'CFAO Mobility', marques: 'Toyota, Citroen, Suzuki', segment: 'Premium/Volume', forces: 95, ev: 5, infrastructure: 10, software: 5, color: '#ef4444' },
    { name: 'Japan Motors', marques: 'Nissan, Peugeot, Foton', segment: 'Multi-marques', forces: 85, ev: 10, infrastructure: 5, software: 5, color: '#f59e0b' },
    { name: 'MIG Motors', marques: 'Kia, Mercedes, Mitsubishi', segment: 'Premium/Volume', forces: 90, ev: 8, infrastructure: 8, software: 10, color: '#eab308' },
    { name: 'SINOCAR', marques: 'BYD, Great Wall, Haval', segment: 'Chinois/EV', forces: 70, ev: 60, infrastructure: 20, software: 15, color: '#84cc16' },
    { name: 'SADA Motors', marques: 'Chery, Jetour, JAC', segment: 'Chinois', forces: 65, ev: 25, infrastructure: 10, software: 5, color: '#22c55e' },
    { name: 'Makaya E-Mobility', marques: 'EV Focus', segment: 'E-Mobility', forces: 40, ev: 95, infrastructure: 85, software: 90, color: '#3b82f6' }
  ]);

  const [barriersData] = useState([
    { barrier: 'Exclusivites constructeurs', impact: 95, difficulty: 60, timeline: '0-6 mois' },
    { barrier: 'PPP Infrastructure CEET', impact: 90, difficulty: 70, timeline: '3-12 mois' },
    { barrier: 'Sites strategiques', impact: 85, difficulty: 40, timeline: '0-12 mois' },
    { barrier: 'Normalisation technique', impact: 80, difficulty: 80, timeline: '6-18 mois' },
    { barrier: 'Plateforme logicielle', impact: 95, difficulty: 90, timeline: '12-24 mois' },
    { barrier: 'Reseau DC rapide', impact: 90, difficulty: 75, timeline: '12-36 mois' },
    { barrier: 'Financement exclusif', impact: 75, difficulty: 50, timeline: '6-12 mois' },
    { barrier: 'Formation EV Technicians', impact: 70, difficulty: 40, timeline: '6-18 mois' }
  ]);

  const [swotData] = useState({
    forces: [
      'Premier entrant marche EV vierge',
      'Acces modeles EV economiques Chine/Asie',
      'Ecosysteme complet: EV + bornes + maintenance + leasing',
      'Reseaux institutionnels solides acces B2G',
      'Agilite strategique adaptation rapide',
      'Modele multi-revenus stabilite financiere'
    ],
    faiblesses: [
      'Infrastructures recharge limitees initialement',
      'Marche tres sensible au prix',
      'Main-oeuvre technique locale rare',
      'Difficulte financer stocks EV importants',
      'Dependance politiques publiques exonerations'
    ],
    opportunites: [
      'Explosion marche EV bas prix 6-10k euro',
      'Taxis/motos/trois-roues ROI rapide',
      'Etat modernisation flottes contrats structurants',
      'Partenariats strategiques internationaux',
      'Subventions avantages fiscaux 2025-2030',
      'Croissance reseau recharge revenus recurrents'
    ],
    menaces: [
      'Entree tardive constructeurs majeurs BYD Changan',
      'Volatilite prix fret disponibilite modeles',
      'Instabilite reglementaire douanes taxes',
      'Marche occasion thermique agressif prix',
      'Risques reputationnels problemes techniques',
      'Concurrence reseaux prives recharge'
    ]
  });

  const [marketData, setMarketData] = useState([
    { year: '2025', ev: 100, projection: 150 },
    { year: '2026', ev: 400, projection: 550 },
    { year: '2027', ev: 800, projection: 1350 },
    { year: '2028', ev: 1200, projection: 2550 },
    { year: '2029', ev: 1500, projection: 4050 }
  ]);

  const [revenueData] = useState([
    { year: '2025', ventes: 1575, bornes: 360, recharge: 87, services: 8, leasing: 72 },
    { year: '2026', ventes: 4200, bornes: 960, recharge: 319, services: 36, leasing: 192 },
    { year: '2027', ventes: 8400, bornes: 1800, recharge: 784, services: 84, leasing: 384 },
    { year: '2028', ventes: 12600, bornes: 2640, recharge: 1481, services: 168, leasing: 576 },
    { year: '2029', ventes: 15750, bornes: 3600, recharge: 2348, services: 288, leasing: 720 }
  ]);

  const [segmentData, setSegmentData] = useState([
    { name: 'Particuliers', tam: 7975, sam: 1595, som: 200, priority: 'Haute', color: '#3b82f6' },
    { name: 'Taxis/VTC', tam: 2900, sam: 1740, som: 435, priority: 'Haute', color: '#10b981' },
    { name: 'Societes privees', tam: 1740, sam: 870, som: 165, priority: 'Haute', color: '#f59e0b' },
    { name: 'Etat', tam: 725, sam: 435, som: 75, priority: 'Haute', color: '#8b5cf6' },
    { name: 'ONG', tam: 435, sam: 260, som: 50, priority: 'Moyenne', color: '#ec4899' }
  ]);

  const [risks, setRisks] = useState([
    { id: 1, risk: 'Cadre legal EV', impact: 5, prob: 4, mitigation: 'Proposer draft decret + PPP CEET', status: 'En cours' },
    { id: 2, risk: 'Infrastructure CEET', impact: 5, prob: 4, mitigation: 'Etude capacite + batteries tampon', status: 'Planifie' },
    { id: 3, risk: 'Adoption lente', impact: 4, prob: 4, mitigation: 'Campagnes ciblees + leasing', status: 'En cours' },
    { id: 4, risk: 'Financement', impact: 5, prob: 3, mitigation: 'Mix equity/dette/subventions', status: 'En cours' },
    { id: 5, risk: 'Supply chain', impact: 4, prob: 3, mitigation: 'Contrats exclusifs constructeurs', status: 'Planifie' }
  ]);

  const [milestones, setMilestones] = useState([
    { id: 1, phase: 'Q1-Q2 2025', title: 'Lancement pilote', tasks: '5 sites AC/DC + 20 VE', status: 'A venir', budget: '250k' },
    { id: 2, phase: 'Q3-Q4 2025', title: 'Extension reseau', tasks: '15 sites supplementaires', status: 'A venir', budget: '400k' },
    { id: 3, phase: '2026', title: 'Deploiement flottes', tasks: 'Contrats B2B + 200 VE', status: 'A venir', budget: '1.2M' },
    { id: 4, phase: '2027', title: 'Couverture nationale', tasks: '150 bornes + corridors', status: 'A venir', budget: '1.5M' },
    { id: 5, phase: '2028-2029', title: 'Consolidation', tasks: 'Optimisation + expansion', status: 'A venir', budget: '2M' }
  ]);

  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  const sections = {
    overview: { title: 'Vue ensemble', icon: Globe },
    market: { title: 'Analyse marche', icon: TrendingUp },
    competition: { title: 'Concurrence', icon: Award },
    financial: { title: 'Finances', icon: DollarSign },
    risks: { title: 'Risques', icon: Shield },
    milestones: { title: 'Jalons', icon: Target },
    notes: { title: 'Notes', icon: FileText }
  };

  const updateMarketData = (index, field, value) => {
    const updated = [...marketData];
    updated[index][field] = parseFloat(value) || 0;
    setMarketData(updated);
  };

  const updateSegment = (index, field, value) => {
    const updated = [...segmentData];
    updated[index][field] = field === 'name' || field === 'priority' ? value : (parseFloat(value) || 0);
    setSegmentData(updated);
  };

  const addRisk = () => {
    setRisks([...risks, {
      id: Date.now(),
      risk: 'Nouveau risque',
      impact: 3,
      prob: 3,
      mitigation: 'Plan de mitigation',
      status: 'A definir'
    }]);
  };

  const updateRisk = (id, field, value) => {
    setRisks(risks.map(r => r.id === id ? { ...r, [field]: value } : r));
  };

  const deleteRisk = (id) => {
    setRisks(risks.filter(r => r.id !== id));
  };

  const addMilestone = () => {
    setMilestones([...milestones, {
      id: Date.now(),
      phase: 'Nouvelle phase',
      title: 'Titre',
      tasks: 'Taches',
      status: 'A venir',
      budget: '0'
    }]);
  };

  const updateMilestone = (id, field, value) => {
    setMilestones(milestones.map(m => m.id === id ? { ...m, [field]: value } : m));
  };

  const deleteMilestone = (id) => {
    setMilestones(milestones.filter(m => m.id !== id));
  };

  const addNote = () => {
    if (newNote.trim()) {
      setNotes([...notes, { id: Date.now(), text: newNote, date: new Date().toLocaleDateString() }]);
      setNewNote('');
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(n => n.id !== id));
  };

  const exportData = () => {
    const exportObj = {
      companyData,
      marketData,
      revenueData,
      segmentData,
      risks,
      milestones,
      notes,
      exportDate: new Date().toISOString()
    };
    const dataStr = JSON.stringify(exportObj, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `makaya-bp-${Date.now()}.json`;
    link.click();
  };

  const calculateTotalRevenue = (year) => {
    const data = revenueData.find(r => r.year === year);
    if (!data) return 0;
    return data.ventes + data.bornes + data.recharge + data.services + data.leasing;
  };

  const renderContent = () => {
    // SECTION CONCURRENCE - NOUVELLE
    if (activeSection === 'competition') {
      return (
        <div className="space-y-6">
          {/* Radar Chart Comparison */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Comparaison capacites EV (Radar)</h3>
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={competitors}>
                <PolarGrid />
                <PolarAngleAxis dataKey="name" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} />
                <Radar name="Forces actuelles" dataKey="forces" stroke="#ef4444" fill="#ef4444" fillOpacity={0.3} />
                <Radar name="Capacite EV" dataKey="ev" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.5} />
                <Radar name="Infrastructure" dataKey="infrastructure" stroke="#10b981" fill="#10b981" fillOpacity={0.4} />
                <Radar name="Software" dataKey="software" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.4} />
                <Legend />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Tableau Concurrents */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Mapping concurrentiel detaille</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-3 text-left font-semibold">Concessionnaire</th>
                    <th className="p-3 text-left font-semibold">Marques</th>
                    <th className="p-3 text-left font-semibold">Segment</th>
                    <th className="p-3 text-center font-semibold">Force actuelle</th>
                    <th className="p-3 text-center font-semibold">Capacite EV</th>
                    <th className="p-3 text-center font-semibold">Infra</th>
                    <th className="p-3 text-center font-semibold">Software</th>
                  </tr>
                </thead>
                <tbody>
                  {competitors.map((comp, idx) => (
                    <tr key={idx} className="border-b hover:bg-gray-50">
                      <td className="p-3">
                        <div className="font-semibold" style={{color: comp.color}}>{comp.name}</div>
                      </td>
                      <td className="p-3 text-gray-600">{comp.marques}</td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-gray-100 rounded text-xs">{comp.segment}</span>
                      </td>
                      <td className="p-3 text-center">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-red-500 h-2 rounded-full" style={{width: `${comp.forces}%`}}></div>
                        </div>
                        <span className="text-xs text-gray-600">{comp.forces}%</span>
                      </td>
                      <td className="p-3 text-center">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: `${comp.ev}%`}}></div>
                        </div>
                        <span className="text-xs text-gray-600">{comp.ev}%</span>
                      </td>
                      <td className="p-3 text-center">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: `${comp.infrastructure}%`}}></div>
                        </div>
                        <span className="text-xs text-gray-600">{comp.infrastructure}%</span>
                      </td>
                      <td className="p-3 text-center">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-orange-500 h-2 rounded-full" style={{width: `${comp.software}%`}}></div>
                        </div>
                        <span className="text-xs text-gray-600">{comp.software}%</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 8 Barrieres a l'entree */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-gray-800">8 Barrieres a entree strategiques</h3>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={barriersData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 100]} />
                <YAxis dataKey="barrier" type="category" width={180} />
                <Tooltip />
                <Legend />
                <Bar dataKey="impact" fill="#3b82f6" name="Impact strategique" />
                <Bar dataKey="difficulty" fill="#ef4444" name="Difficulte mise en place" />
              </BarChart>
            </ResponsiveContainer>
            
            <div className="mt-4 grid md:grid-cols-2 gap-3">
              {barriersData.map((b, idx) => (
                <div key={idx} className="p-3 bg-blue-50 rounded border-l-4 border-blue-500">
                  <div className="font-semibold text-sm text-gray-800">{idx + 1}. {b.barrier}</div>
                  <div className="text-xs text-gray-600 mt-1">
                    Impact: {b.impact}% | Difficulte: {b.difficulty}% | Timeline: {b.timeline}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SWOT Analysis */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Analyse SWOT - Makaya E-Mobility</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                <h4 className="font-bold text-green-800 mb-3">FORCES (Strengths)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  {swotData.forces.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">+</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                <h4 className="font-bold text-red-800 mb-3">FAIBLESSES (Weaknesses)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  {swotData.faiblesses.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">-</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-bold text-blue-800 mb-3">OPPORTUNITES (Opportunities)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  {swotData.opportunites.map((o, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">★</span>
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                <h4 className="font-bold text-purple-800 mb-3">MENACES (Threats)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  {swotData.menaces.map((m, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">⚠</span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Conclusion Strategique */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg">
            <h4 className="font-bold text-xl mb-4">Conclusion Strategique - Devenir operateur national par defaut</h4>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">1</div>
                <div className="text-sm">Exclusivites constructeurs PPP banques</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">2</div>
                <div className="text-sm">Reseau DC implante avant 2027</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">3</div>
                <div className="text-sm">Plateforme logicielle propriétaire certifiee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">4</div>
                <div className="text-sm">Normes nationales alignees sur vision</div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Les autres sections restent inchangées... (overview, market, financial, etc.)
    return null;
  };

  const SectionIcon = sections[activeSection].icon;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold mb-2">MAKAYA E-Mobility</h1>
            <p className="text-blue-100">Business Plan 2025-2030 | Togo - Afrique de Ouest</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setEditMode(!editMode)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                editMode ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {editMode ? <><Save size={18} /> Sauvegarder</> : <><Edit2 size={18} /> Modifier</>}
            </button>
            <button
              onClick={exportData}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700"
            >
              <Download size={18} />
              Exporter
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white shadow-md sticky top-0 z-10">
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
        <div className="flex items-center gap-3 mb-6">
          <SectionIcon size={32} className="text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-800">{sections[activeSection].title}</h2>
        </div>
        {renderContent()}
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white mt-12 p-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-300 mb-2">Makaya E-Mobility Togo SA</p>
          <p className="text-gray-400 text-sm">Pionnier de la mobilite electrique durable au Togo</p>
          <div className="mt-4 text-sm text-gray-500">
            Business Plan 2025-2030 | Confidentiel
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
