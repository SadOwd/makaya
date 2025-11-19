import React, { useState } from 'react';
import { Calendar, CheckCircle2, Circle, Clock, AlertTriangle, Milestone } from 'lucide-react';

const Roadmap = () => {
  const [selectedQuarter, setSelectedQuarter] = useState('Q1-2026');
  const [viewMode, setViewMode] = useState('timeline');

  const roadmapData = {
    '2025-Q4': {
      title: 'Q4 2025 - PRE-SEED',
      status: 'in-progress',
      completion: 75,
      milestones: [
        { 
          id: 1, 
          name: 'Fondation juridique', 
          status: 'completed',
          tasks: [
            'Création Makaya Energy SA (RCCM)',
            '3 filiales structurées (LLD, Énergie, Infrastructure)',
            'Statuts validés et enregistrés'
          ]
        },
        { 
          id: 2, 
          name: 'Traction commerciale', 
          status: 'completed',
          tasks: [
            '3 LOI signées (50 VE, 322M pipeline)',
            '50 Pioneers identifiés & scorés',
            'Pipeline 400 prospects qualifiés'
          ]
        },
        { 
          id: 3, 
          name: 'Partenariats stratégiques', 
          status: 'in-progress',
          tasks: [
            'BYD: Exclusivité Togo 5 ans ✓',
            'BAD: Term sheet dette 8,5 Md ✓',
            'CEET: MoU tarif V2G (en cours)',
            'REFEP: Convention formation (en signature)'
          ]
        },
        { 
          id: 4, 
          name: 'Levée Série A', 
          status: 'in-progress',
          tasks: [
            'Roadshow investisseurs (8 fonds contactés)',
            'Due diligence 2 fonds (avancée)',
            'Closing prévu décembre 2025'
          ]
        }
      ],
      budget: 850,
      budgetUsed: 640,
      team: 8
    },
    'Q1-2026': {
      title: 'Q1 2026 - IGNITION 🔥',
      status: 'planned',
      completion: 0,
      milestones: [
        { 
          id: 1, 
          name: 'Janvier 2026', 
          status: 'planned',
          tasks: [
            'Closing Série A (5 Md) ✅',
            'Signature bail showroom Lomé (1 200 m²)',
            'Commande 80 VE BYD (livraison mars)',
            'Recrutement: 8 commerciaux + 4 techniciens'
          ]
        },
        { 
          id: 2, 
          name: 'Février 2026', 
          status: 'planned',
          tasks: [
            'Dépôt dossiers agréments AT2ER (3 licences)',
            'Signature accords foncier 15 sites bornes Lomé',
            'Commande équipements 25 bornes DC 50kW',
            'Lancement programme Pioneers (event 50 VIP)'
          ]
        },
        { 
          id: 3, 
          name: 'Mars 2026', 
          status: 'planned',
          tasks: [
            'Inauguration showroom (Présence Président) 🎉',
            'Livraison premiers 30 VE (Pioneers prioritaires)',
            'Installation 10 premières bornes (zones premium)',
            'Campagne marketing "Les 50 du Futur"'
          ]
        }
      ],
      objectives: {
        contracts: 35,
        ca: '85M',
        bornes: 10,
        team: 25
      },
      budget: 1650,
      keyRisks: ['Délai agrément AT2ER', 'Livraison VE retardée']
    },
    'Q2-2026': {
      title: 'Q2 2026 - ACCELERATION',
      status: 'planned',
      completion: 0,
      milestones: [
        { 
          id: 1, 
          name: 'Avril 2026', 
          status: 'planned',
          tasks: [
            'Livraison 50 VE additionnels (parc total: 80)',
            'Ouverture atelier SAV Lomé (8 postes)',
            'Installation 15 bornes additionnelles (total: 25)',
            'Lancement app mobile (iOS/Android v1.0)'
          ]
        },
        { 
          id: 2, 
          name: 'Mai 2026', 
          status: 'planned',
          tasks: [
            'Certification ISO 9001 (qualité service)',
            'Partenariat assurance: NSIA (co-brandé)',
            'Programme franchisés bornes: 20 sélectionnés',
            'Expansion commerciale: Bureau Kara'
          ]
        },
        { 
          id: 3, 
          name: 'Juin 2026', 
          status: 'planned',
          tasks: [
            'Bilan 6 mois: Board meeting investisseurs',
            'Ajustements stratégiques (feedback clients)',
            'Recrutement CMO (marketing national)',
            'Préparation marchés publics (PSTMET)'
          ]
        }
      ],
      objectives: {
        contracts: 65,
        ca: '420M',
        nps: 75,
        bornes: 35
      },
      budget: 1200
    },
    'Q3-2026': {
      title: 'Q3 2026 - SCALE',
      status: 'planned',
      completion: 0,
      milestones: [
        { 
          id: 1, 
          name: 'Juillet 2026', 
          status: 'planned',
          tasks: [
            'Réception agréments AT2ER (3/3) ✅',
            'Activation avantages fiscaux (IS 15%)',
            'Tirage dette BAD: 3 Md (1ère tranche)',
            'Commande 70 VE additionnels (parc: 150)'
          ]
        },
        { 
          id: 2, 
          name: 'Août 2026', 
          status: 'planned',
          tasks: [
            'Lancement Fleet Flex (multi-véhicules)',
            'Signature 1er contrat public (Ministère)',
            'Extension réseau: 40 bornes opérationnelles',
            'Partenariat REFEP: Formation 150 femmes'
          ]
        },
        { 
          id: 3, 
          name: 'Septembre 2026', 
          status: 'planned',
          tasks: [
            'Événement "Makaya Day" (salon mobilité)',
            'Showcase 12 mois (testimonials clients)',
            'Annonce expansion 2027: Couverture nationale',
            'Préparation Série B (teaser 2028)'
          ]
        }
      ],
      objectives: {
        contracts: 95,
        ca: '1150M',
        breakeven: 'Atteint ✅',
        bornes: 75
      },
      budget: 800
    },
    'Q4-2026': {
      title: 'Q4 2026 - CONSOLIDATION',
      status: 'planned',
      completion: 0,
      milestones: [
        { 
          id: 1, 
          name: 'Octobre 2026', 
          status: 'planned',
          tasks: [
            'Audit financier année 1 (Big 4)',
            'Optimisation opérations (feedback 12 mois)',
            'Lancement services annexes (Fleet Intel, Solar)',
            'Négociations partenariat GAC/Lexus'
          ]
        },
        { 
          id: 2, 
          name: 'Novembre 2026', 
          status: 'planned',
          tasks: [
            'Participation COP (pavillon Makaya)',
            'Annonce: 1 000 t CO2 évitées',
            'Recrutement Head of Customer Success',
            'Préparation budget 2027 (×2.7 croissance)'
          ]
        },
        { 
          id: 3, 
          name: 'Décembre 2026', 
          status: 'planned',
          tasks: [
            'Bilan annuel: 150 VE, 4.55 Md CA ✅',
            'Board annuel: Approbation plan 2027',
            'Distributions bonus équipe (10% profits)',
            'Célébration: Champion Startup Année'
          ]
        }
      ],
      objectives: {
        contracts: 150,
        ca: '4.55Md',
        ebitda: '820M',
        bornes: 130
      },
      budget: 500
    }
  };

  const StatusBadge = ({ status }) => {
    const config = {
      completed: { bg: 'bg-green-100', text: 'text-green-700', icon: CheckCircle2, label: 'Complété' },
      'in-progress': { bg: 'bg-blue-100', text: 'text-blue-700', icon: Clock, label: 'En cours' },
      planned: { bg: 'bg-gray-100', text: 'text-gray-700', icon: Circle, label: 'Planifié' },
      'at-risk': { bg: 'bg-orange-100', text: 'text-orange-700', icon: AlertTriangle, label: 'À risque' }
    };

    const { bg, text, icon: Icon, label } = config[status];

    return (
      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${bg} ${text}`}>
        <Icon className="w-3.5 h-3.5" />
        {label}
      </span>
    );
  };

  const ProgressBar = ({ completion }) => (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-600">Avancement</span>
        <span className="font-semibold text-gray-900">{completion}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-green-500 transition-all duration-500"
          style={{ width: `${completion}%` }}
        />
      </div>
    </div>
  );

  const TimelineView = ({ quarterKey, data }) => (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg shadow-sm p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{data.title}</h3>
            <StatusBadge status={data.status} />
          </div>
          <div className="text-right">
            {data.budget && (
              <div className="text-sm">
                <span className="text-gray-600">Budget: </span>
                <span className="font-bold text-gray-900">{data.budget}M FCFA</span>
              </div>
            )}
            {data.budgetUsed && (
              <div className="text-xs text-gray-500 mt-1">
                Utilisé: {data.budgetUsed}M ({Math.round(data.budgetUsed/data.budget*100)}%)
              </div>
            )}
          </div>
        </div>
        
        {data.completion > 0 && <ProgressBar completion={data.completion} />}
      </div>

      <div className="space-y-4">
        {data.milestones.map((milestone, idx) => (
          <div key={milestone.id} className="relative">
            {idx < data.milestones.length - 1 && (
              <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gray-200" />
            )}
            
            <div className="flex gap-4">
              <div className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                milestone.status === 'completed' ? 'bg-green-100' :
                milestone.status === 'in-progress' ? 'bg-blue-100' :
                'bg-gray-100'
              }`}>
                {milestone.status === 'completed' ? (
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                ) : milestone.status === 'in-progress' ? (
                  <Clock className="w-6 h-6 text-blue-600" />
                ) : (
                  <Circle className="w-6 h-6 text-gray-400" />
                )}
              </div>

              <div className="flex-1 bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">{milestone.name}</h4>
                  <StatusBadge status={milestone.status} />
                </div>
                
                <ul className="space-y-2">
                  {milestone.tasks.map((task, taskIdx) => (
                    <li key={taskIdx} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className={`flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 ${
                        task.includes('✓') || task.includes('✅') ? 'bg-green-500' : 'bg-gray-300'
                      }`} />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {data.objectives && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Milestone className="w-5 h-5 text-green-600" />
            Objectifs du trimestre
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(data.objectives).map(([key, value]) => (
              <div key={key} className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-900">{value}</div>
                <div className="text-xs text-gray-600 mt-1 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {data.keyRisks && (
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5" />
            <div className="flex-1">
              <h4 className="font-semibold text-orange-900 mb-2">Points d'attention</h4>
              <ul className="space-y-1">
                {data.keyRisks.map((risk, idx) => (
                  <li key={idx} className="text-sm text-orange-700">• {risk}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Roadmap Exécution</h2>
            <p className="text-gray-600 mt-1">Plan détaillé 2025-2026</p>
          </div>
          <div className="flex gap-4">
            <select 
              value={selectedQuarter}
              onChange={(e) => setSelectedQuarter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            >
              {Object.keys(roadmapData).map(quarter => (
                <option key={quarter} value={quarter}>
                  {roadmapData[quarter].title.split(' - ')[0]}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <TimelineView 
        quarterKey={selectedQuarter} 
        data={roadmapData[selectedQuarter]} 
      />

      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Points Clés 2026</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4">
            <div className="text-3xl font-bold text-green-600">Q3 2027</div>
            <div className="text-sm text-gray-600 mt-1">Break-even cash-flow</div>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div className="text-3xl font-bold text-blue-600">150</div>
            <div className="text-sm text-gray-600 mt-1">Véhicules livrés 2026</div>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div className="text-3xl font-bold text-purple-600">130</div>
            <div className="text-sm text-gray-600 mt-1">Bornes opérationnelles</div>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div className="text-3xl font-bold text-orange-600">4.55Md</div>
            <div className="text-sm text-gray-600 mt-1">CA 2026 (FCFA)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
