import React, { useState } from 'react';
import { Download, FileText, Presentation, FileSpreadsheet, CheckCircle2, Loader2 } from 'lucide-react';

const Export = () => {
  const [selectedFormat, setSelectedFormat] = useState('pitch');
  const [selectedSections, setSelectedSections] = useState({
    executive: true,
    market: true,
    business: true,
    financial: true,
    roadmap: true,
    risks: true,
    team: true,
    appendix: false
  });
  const [generating, setGenerating] = useState(false);

  const exportFormats = {
    pitch: {
      name: 'Pitch Deck',
      icon: Presentation,
      description: '15-20 slides PowerPoint pour investisseurs',
      size: '~3 MB',
      duration: '10 min présentation',
      color: 'blue'
    },
    executive: {
      name: 'Executive Summary',
      icon: FileText,
      description: 'Document synthétique 5-8 pages PDF',
      size: '~1 MB',
      duration: '15 min lecture',
      color: 'green'
    },
    complete: {
      name: 'Business Plan Complet',
      icon: FileText,
      description: 'Rapport détaillé 60-80 pages avec annexes',
      size: '~8 MB',
      duration: '2-3h lecture',
      color: 'purple'
    },
    financial: {
      name: 'Modèle Financier',
      icon: FileSpreadsheet,
      description: 'Fichier Excel avec projections 2026-2035',
      size: '~2 MB',
      duration: 'Interactif',
      color: 'orange'
    }
  };

  const sections = {
    executive: 'Executive Summary',
    market: 'Analyse de Marché',
    business: 'Modèle d\'Affaires',
    financial: 'Projections Financières',
    roadmap: 'Roadmap d\'Exécution',
    risks: 'Analyse des Risques',
    team: 'Équipe & Gouvernance',
    appendix: 'Annexes Techniques'
  };

  const toggleSection = (section) => {
    setSelectedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleExport = async () => {
    setGenerating(true);
    
    // Simulation de génération
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Ici vous implémenteriez la vraie logique d'export
    const selectedCount = Object.values(selectedSections).filter(Boolean).length;
    console.log(`Génération ${selectedFormat} avec ${selectedCount} sections`);
    
    setGenerating(false);
    alert(`Document ${exportFormats[selectedFormat].name} généré avec succès !`);
  };

  const FormatCard = ({ formatKey, format }) => {
    const Icon = format.icon;
    const isSelected = selectedFormat === formatKey;
    
    return (
      <div
        onClick={() => setSelectedFormat(formatKey)}
        className={`relative cursor-pointer rounded-lg border-2 transition-all ${
          isSelected 
            ? `border-${format.color}-500 bg-${format.color}-50` 
            : 'border-gray-200 hover:border-gray-300 bg-white'
        }`}
      >
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className={`p-3 rounded-lg ${isSelected ? `bg-${format.color}-100` : 'bg-gray-100'}`}>
              <Icon className={`w-6 h-6 ${isSelected ? `text-${format.color}-600` : 'text-gray-600'}`} />
            </div>
            {isSelected && (
              <CheckCircle2 className={`w-6 h-6 text-${format.color}-600`} />
            )}
          </div>
          
          <h3 className="text-lg font-bold text-gray-900 mb-2">{format.name}</h3>
          <p className="text-sm text-gray-600 mb-4">{format.description}</p>
          
          <div className="space-y-2 text-xs text-gray-500">
            <div className="flex items-center justify-between">
              <span>Taille estimée</span>
              <span className="font-medium text-gray-700">{format.size}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Durée</span>
              <span className="font-medium text-gray-700">{format.duration}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Export Documents</h2>
            <p className="text-gray-600 mt-1">Générez vos documents de présentation</p>
          </div>
        </div>
      </div>

      {/* Formats disponibles */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Choisissez un format</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(exportFormats).map(([key, format]) => (
            <FormatCard key={key} formatKey={key} format={format} />
          ))}
        </div>
      </div>

      {/* Sélection des sections */}
      {(selectedFormat === 'executive' || selectedFormat === 'complete') && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Sections à inclure</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {Object.entries(sections).map(([key, label]) => (
              <label key={key} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="checkbox"
                  checked={selectedSections[key]}
                  onChange={() => toggleSection(key)}
                  className="w-5 h-5 text-green-600 rounded focus:ring-2 focus:ring-green-500"
                />
                <span className="text-sm font-medium text-gray-900">{label}</span>
              </label>
            ))}
          </div>
          <div className="mt-4 text-sm text-gray-600">
            {Object.values(selectedSections).filter(Boolean).length} / {Object.keys(sections).length} sections sélectionnées
          </div>
        </div>
      )}

      {/* Prévisualisation */}
      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Prévisualisation</h3>
        <div className="bg-white rounded-lg p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-4 border-b">
              <div>
                <div className="text-xl font-bold text-gray-900">
                  {exportFormats[selectedFormat].name}
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  Format: {selectedFormat === 'financial' ? 'XLSX' : 'PDF'}
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-600">
                  {exportFormats[selectedFormat].size}
                </div>
                <div className="text-xs text-gray-500">Taille estimée</div>
              </div>
            </div>

            {selectedFormat === 'pitch' && (
              <div className="space-y-2 text-sm">
                <div className="font-medium text-gray-900">Contenu du Pitch Deck :</div>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li>Vision & Problème (slides 1-3)</li>
                  <li>Solution Makaya Energy (slides 4-6)</li>
                  <li>Marché & Opportunité (slides 7-9)</li>
                  <li>Modèle d'Affaires (slides 10-12)</li>
                  <li>Projections Financières (slides 13-15)</li>
                  <li>Équipe & Ask (slides 16-18)</li>
                </ul>
              </div>
            )}

            {selectedFormat === 'executive' && (
              <div className="space-y-2 text-sm">
                <div className="font-medium text-gray-900">Sections incluses :</div>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(selectedSections)
                    .filter(([, selected]) => selected)
                    .map(([key]) => (
                      <span key={key} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                        {sections[key]}
                      </span>
                    ))}
                </div>
              </div>
            )}

            {selectedFormat === 'complete' && (
              <div className="space-y-2 text-sm">
                <div className="font-medium text-gray-900">Document complet incluant :</div>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li>Analyse détaillée du marché Togo/Afrique de l'Ouest</li>
                  <li>Stratégie commerciale et go-to-market</li>
                  <li>Modèle financier 2026-2035 (3 scénarios)</li>
                  <li>Plan opérationnel et roadmap</li>
                  <li>Analyse complète des risques</li>
                  <li>Annexes techniques (specs véhicules, contrats)</li>
                </ul>
              </div>
            )}

            {selectedFormat === 'financial' && (
              <div className="space-y-2 text-sm">
                <div className="font-medium text-gray-900">Feuilles Excel :</div>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li>Hypothèses & Paramètres</li>
                  <li>P&L Détaillé 2026-2035</li>
                  <li>Cash-Flow & Bilans</li>
                  <li>Unit Economics par offre</li>
                  <li>Sensibilités & Scénarios</li>
                  <li>Valorisation & Returns</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bouton d'export */}
      <div className="flex justify-center">
        <button
          onClick={handleExport}
          disabled={generating}
          className="flex items-center gap-3 px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-lg font-semibold shadow-lg hover:shadow-xl"
        >
          {generating ? (
            <>
              <Loader2 className="w-6 h-6 animate-spin" />
              Génération en cours...
            </>
          ) : (
            <>
              <Download className="w-6 h-6" />
              Générer {exportFormats[selectedFormat].name}
            </>
          )}
        </button>
      </div>

      {/* Informations complémentaires */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <FileText className="w-5 h-5 text-blue-600 mt-0.5" />
          <div className="flex-1">
            <h4 className="font-semibold text-blue-900 mb-2">Notes importantes</h4>
            <ul className="space-y-1 text-sm text-blue-700">
              <li>• Les documents générés sont personnalisables dans un éditeur après export</li>
              <li>• Le modèle financier Excel inclut toutes les formules et permet l'édition</li>
              <li>• Les graphiques et tableaux sont générés dynamiquement à partir des données</li>
              <li>• Tous les documents respectent les standards professionnels investisseurs</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Historique des exports */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Exports récents</h3>
        <div className="space-y-3">
          {[
            { date: '15 Nov 2025 14:30', format: 'Pitch Deck', size: '2.8 MB' },
            { date: '14 Nov 2025 09:15', format: 'Executive Summary', size: '1.2 MB' },
            { date: '12 Nov 2025 16:45', format: 'Modèle Financier', size: '2.1 MB' }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-gray-600" />
                <div>
                  <div className="font-medium text-gray-900">{item.format}</div>
                  <div className="text-xs text-gray-500">{item.date}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">{item.size}</span>
                <button className="px-3 py-1 text-sm text-green-600 hover:bg-green-50 rounded">
                  Télécharger
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Export;
