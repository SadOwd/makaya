import React, { useState } from 'react';
import { 
  presentationData,
  budgetData,
  modeleEconomiqueData,
  formaterMontant,
  calculerROI
} from '../../../cahier-charges/data/index.js';

export default function CahierCharges() {
  const [sectionActive, setSectionActive] = useState('resume');
  
  // Calculs
  const budgetTotal = budgetData.recapitulatif.totalInvestissementFCFA;
  const revenus = modeleEconomiqueData.hypothesesExploitation.revenus.an1.totalFCFA;
  const resultat = modeleEconomiqueData.hypothesesExploitation.resultat.an1.resultatNetFCFA;
  const roi = calculerROI(budgetTotal, resultat);
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* En-tête */}
      <header className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 shadow-lg">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-2">
            {presentationData.contexte.nomProjet}
          </h1>
          <p className="text-xl opacity-90">
            Cahier des Charges - Station Pilote - Version 3.0
          </p>
        </div>
      </header>
      
      {/* Bandeau Information - Station Pilote */}
      <div className="container mx-auto px-6 py-6">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg shadow-md">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4 flex-1">
              <div className="text-3xl flex-shrink-0">ℹ️</div>
              <div className="flex-1">
                <h4 className="font-bold text-blue-900 text-lg mb-2">
                  📋 Station Pilote - Projet Initial
                </h4>
                <p className="text-sm text-blue-800 mb-3 leading-relaxed">
                  Ce cahier des charges décrit le <strong>projet initial d'une station pilote</strong> de 10 bornes 
                  (budget 69,6M FCFA). Il s'agit de la phase 1 du déploiement.
                </p>
                <div className="bg-white rounded-lg p-4 mb-3">
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-gray-700 mb-2">📍 Station Pilote (Ce document):</p>
                      <ul className="space-y-1 text-gray-600">
                        <li>• 1 station</li>
                        <li>• 10 bornes (5 AC + 3 DC 60kW + 2 DC 120kW)</li>
                        <li>• Budget: 69,6M FCFA</li>
                        <li>• Puissance: 525 kW</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-green-700 mb-2">⚡ Réseau Actuel (Makaya Recharge):</p>
                      <ul className="space-y-1 text-gray-600">
                        <li>• <strong>6 stations</strong> actives</li>
                        <li>• <strong>24 bornes</strong> (22 actives)</li>
                        <li>• CA: <strong>7,37M FCFA/mois</strong></li>
                        <li>• Utilisation: <strong>78,5%</strong></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-blue-700">
                  👉 Pour consulter les données du réseau complet en opération, voir le module <strong>Makaya Recharge</strong>.
                </p>
              </div>
            </div>
            <a
              href="#recharge"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2 whitespace-nowrap text-sm font-semibold flex-shrink-0"
            >
              Voir Réseau Complet →
            </a>
          </div>
        </div>
      </div>
      
      {/* Résumé Exécutif */}
      <section className="container mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Résumé Exécutif</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <div className="text-sm text-gray-600 mb-1">Budget Total</div>
              <div className="text-2xl font-bold text-blue-600">
                {formaterMontant(budgetTotal, 'FCFA')}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {formaterMontant(Math.round(budgetTotal / 600), 'USD')}
              </div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <div className="text-sm text-gray-600 mb-1">Revenus An 1</div>
              <div className="text-2xl font-bold text-green-600">
                {formaterMontant(revenus, 'FCFA')}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {formaterMontant(Math.round(revenus / 600), 'USD')}
              </div>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
              <div className="text-sm text-gray-600 mb-1">Résultat Net An 1</div>
              <div className="text-2xl font-bold text-purple-600">
                {formaterMontant(resultat, 'FCFA')}
              </div>
              <div className="text-xs text-gray-500 mt-1">Marge : 48%</div>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
              <div className="text-sm text-gray-600 mb-1">ROI</div>
              <div className="text-2xl font-bold text-orange-600">
                {roi.formatee}
              </div>
              <div className="text-xs text-gray-500 mt-1">TRI : 180-200%</div>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="bg-white rounded-lg shadow-lg p-4 mb-6">
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'resume', label: '📊 Résumé' },
              { id: 'specifications', label: '⚡ Spécifications' },
              { id: 'budget', label: '💰 Budget' },
              { id: 'economique', label: '📈 Économique' },
              { id: 'planning', label: '📅 Planning' }
            ].map(section => (
              <button
                key={section.id}
                onClick={() => setSectionActive(section.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  sectionActive === section.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </nav>
        
        {/* Contenu */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          {sectionActive === 'resume' && <SectionResume />}
          {sectionActive === 'specifications' && <SectionSpecifications />}
          {sectionActive === 'budget' && <SectionBudget />}
          {sectionActive === 'economique' && <SectionEconomique />}
          {sectionActive === 'planning' && <SectionPlanning />}
        </div>
      </section>
    </div>
  );
}

// Composants de sections
function SectionResume() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Résumé du Projet</h2>
      <div className="prose max-w-none">
        <p className="text-lg text-gray-700">
          {presentationData.contexte.justification}
        </p>
        <h3 className="text-xl font-bold mt-6 mb-3">Objectifs Principaux</h3>
        <ul className="space-y-2">
          {presentationData.objectifs.principaux.map((obj, i) => (
            <li key={i} className="flex items-start">
              <span className="text-green-600 mr-2">✓</span>
              <span>{obj}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SectionSpecifications() {
  const { specificationsData } = require('../../../cahier-charges/data/index.js');
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Spécifications Techniques</h2>
      <div className="space-y-6">
        {/* Configuration */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-bold mb-2">Configuration Générale</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-gray-600">Total bornes :</span>
              <span className="font-bold ml-2">10</span>
            </div>
            <div>
              <span className="text-gray-600">Puissance :</span>
              <span className="font-bold ml-2">525 kW</span>
            </div>
            <div>
              <span className="text-gray-600">CEET :</span>
              <span className="font-bold ml-2">400 kW</span>
            </div>
            <div>
              <span className="text-gray-600">Load Balancing :</span>
              <span className="font-bold ml-2 text-green-600">✓</span>
            </div>
          </div>
        </div>
        
        {/* Bornes AC */}
        <div className="border rounded-lg p-4">
          <h3 className="text-lg font-bold mb-3 text-blue-600">
            Bornes AC 21kW (5 unités)
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p><strong>Puissance :</strong> 21 kW</p>
              <p><strong>Efficacité :</strong> ≥ 95%</p>
              <p><strong>Connecteur :</strong> Type 2</p>
            </div>
            <div>
              <p><strong>Temps charge 50kWh :</strong> 2h30</p>
              <p><strong>Prix :</strong> 281 400 FCFA/unité</p>
              <p><strong>Total :</strong> 1 407 000 FCFA</p>
            </div>
          </div>
        </div>
        
        {/* Bornes DC 60kW */}
        <div className="border rounded-lg p-4">
          <h3 className="text-lg font-bold mb-3 text-green-600">
            Bornes DC 60kW (3 unités)
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p><strong>Puissance :</strong> 60 kW</p>
              <p><strong>Efficacité :</strong> ≥ 94.5%</p>
              <p><strong>Connecteur :</strong> CCS2</p>
            </div>
            <div>
              <p><strong>Temps charge 50kWh :</strong> 48 min (0-80%)</p>
              <p><strong>Prix :</strong> 2 500 800 FCFA/unité</p>
              <p><strong>Total :</strong> 7 502 400 FCFA</p>
            </div>
          </div>
        </div>
        
        {/* Bornes DC 120kW */}
        <div className="border rounded-lg p-4">
          <h3 className="text-lg font-bold mb-3 text-purple-600">
            Bornes DC 120kW (2 unités)
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p><strong>Puissance :</strong> 120 kW</p>
              <p><strong>Efficacité :</strong> ≥ 94.5%</p>
              <p><strong>Connecteur :</strong> CCS2</p>
            </div>
            <div>
              <p><strong>Temps charge 50kWh :</strong> 24 min (0-80%)</p>
              <p><strong>Prix :</strong> 3 623 400 FCFA/unité</p>
              <p><strong>Total :</strong> 7 246 800 FCFA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionBudget() {
  const budget = budgetData.recapitulatif;
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Budget Détaillé</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3 text-left">Poste</th>
              <th className="border p-3 text-right">FCFA</th>
              <th className="border p-3 text-right">USD</th>
              <th className="border p-3 text-right">%</th>
            </tr>
          </thead>
          <tbody>
            {budget.repartition.map((item, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="border p-3">{item.poste}</td>
                <td className="border p-3 text-right font-mono">
                  {formaterMontant(item.fcfa, 'FCFA')}
                </td>
                <td className="border p-3 text-right font-mono">
                  {formaterMontant(item.usd, 'USD')}
                </td>
                <td className="border p-3 text-right">{item.pourcentage}%</td>
              </tr>
            ))}
            <tr className="bg-blue-100 font-bold">
              <td className="border p-3">TOTAL HT</td>
              <td className="border p-3 text-right font-mono">
                {formaterMontant(budget.totalInvestissementFCFA, 'FCFA')}
              </td>
              <td className="border p-3 text-right font-mono">
                {formaterMontant(budget.totalInvestissementUSD, 'USD')}
              </td>
              <td className="border p-3 text-right">100%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SectionEconomique() {
  const { strategieTarifaire } = modeleEconomiqueData;
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Modèle Économique</h2>
      
      <div className="space-y-6">
        {/* Tarification */}
        <div>
          <h3 className="text-xl font-bold mb-3">Tarification</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">AC 21kW</h4>
              <p className="text-2xl font-bold text-blue-600">
                {strategieTarifaire.tarificationAC.fcfa} FCFA/kWh
              </p>
              <p className="text-sm text-gray-600">
                {strategieTarifaire.tarificationAC.usd} USD/kWh
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">DC 60kW</h4>
              <p className="text-2xl font-bold text-green-600">
                {strategieTarifaire.tarificationDC60.fcfa} FCFA/kWh
              </p>
              <p className="text-sm text-gray-600">
                {strategieTarifaire.tarificationDC60.usd} USD/kWh
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">DC 120kW</h4>
              <p className="text-2xl font-bold text-purple-600">
                {strategieTarifaire.tarificationDC120.fcfa} FCFA/kWh
              </p>
              <p className="text-sm text-gray-600">
                {strategieTarifaire.tarificationDC120.usd} USD/kWh
              </p>
            </div>
          </div>
        </div>
        
        {/* Rentabilité */}
        <div>
          <h3 className="text-xl font-bold mb-3">Rentabilité</h3>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-600">ROI</p>
                <p className="text-xl font-bold text-green-600">12 mois</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">TRI</p>
                <p className="text-xl font-bold text-green-600">180-200%</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Marge Nette</p>
                <p className="text-xl font-bold text-green-600">48%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionPlanning() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Planning du Projet</h2>
      <div className="space-y-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-bold mb-2">Durée Totale</h3>
          <p className="text-xl font-bold text-blue-600">28 semaines (7 mois)</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h4 className="font-bold mb-2">Phase 0 : Études</h4>
            <p className="text-lg font-bold text-purple-600 mb-2">12 semaines</p>
            <ul className="text-sm space-y-1">
              <li>• Études techniques</li>
              <li>• Conception et plans</li>
              <li>• Autorisations</li>
              <li>• Consultation entreprises</li>
            </ul>
          </div>
          
          <div className="border rounded-lg p-4">
            <h4 className="font-bold mb-2">Phase 1 : Travaux</h4>
            <p className="text-lg font-bold text-green-600 mb-2">16 semaines</p>
            <ul className="text-sm space-y-1">
              <li>• Terrassement et fondations</li>
              <li>• Voirie et réseaux</li>
              <li>• Installation électrique</li>
              <li>• Installation bornes</li>
              <li>• Tests et mise en service</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
