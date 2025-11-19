// Configuration de l'application Makaya Energy

export const APP_CONFIG = {
  // Informations générales
  appName: 'Makaya Energy BP',
  version: '4.0',
  lastUpdate: '15 Novembre 2025',
  
  // Paramètres par défaut
  defaultScenario: 'base',
  defaultYear: 2030,
  
  // Scénarios disponibles
  scenarios: {
    conservateur: {
      name: 'Conservateur',
      probability: 15,
      description: 'Hypothèses prudentes avec ralentissement marché'
    },
    base: {
      name: 'Base',
      probability: 70,
      description: 'Hypothèses réalistes basées sur études marché'
    },
    optimiste: {
      name: 'Optimiste',
      probability: 15,
      description: 'Scénario favorable avec accélération adoption'
    }
  },
  
  // Années de projection
  projectionYears: [2026, 2027, 2028, 2029, 2030],
  
  // Paramètres d'export
  export: {
    formats: ['pitch', 'executive', 'complete', 'financial'],
    defaultFormat: 'pitch'
  },
  
  // Couleurs thème
  theme: {
    primary: '#10b981',     // Vert Makaya
    secondary: '#3b82f6',   // Bleu
    success: '#22c55e',
    warning: '#f59e0b',
    danger: '#ef4444',
    info: '#06b6d4'
  },
  
  // Catégories de risques
  riskCategories: {
    financial: { name: 'Financier', color: 'red' },
    operational: { name: 'Opérationnel', color: 'orange' },
    market: { name: 'Marché', color: 'blue' },
    regulatory: { name: 'Réglementaire', color: 'purple' },
    strategic: { name: 'Stratégique', color: 'green' }
  },
  
  // Contacts
  contacts: {
    email: 'contact@makaya-energy.tg',
    phone: '+228 XX XX XX XX',
    address: 'Lomé, Togo'
  },
  
  // Features flags
  features: {
    enableExport: true,
    enableSimulator: true,
    enableScenarios: true,
    enableRoadmap: true,
    enableRisks: true,
    enableCollaboration: false, // À venir
    enableNotifications: false  // À venir
  }
};

export default APP_CONFIG;
