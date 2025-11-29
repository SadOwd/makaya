// ============================================================================
// CAHIER DE CHARGE RECHARGE - PARTIE 6/6
// Render Principal et Export
// ============================================================================

  // Render section active
  const renderActiveSection = () => {
    switch (activeSection) {
      case 'presentation':
        return renderPresentation();
      case 'specifications':
        return renderSpecifications();
      case 'budget':
        return renderBudget();
      case 'economique':
        return renderEconomique();
      case 'risques':
        return renderRisques();
      default:
        return renderPresentation();
    }
  };

  // Render complet (toutes sections)
  const renderComplet = () => (
    <div className="space-y-12">
      {renderPresentation()}
      {renderSpecifications()}
      {renderBudget()}
      {renderEconomique()}
      {renderRisques()}
    </div>
  );

  // Render Table des Matières
  const renderTableMatieres = () => (
    <Card className="p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <BookOpen className="w-6 h-6 text-blue-600" />
        Table des Matières
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        {sections.map((section, idx) => {
          const Icon = section.icon;
          return (
            <button
              key={section.id}
              onClick={() => {
                setActiveSection(section.id);
                setViewMode('sections');
              }}
              className="flex items-start gap-4 p-4 border-2 border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all text-left"
            >
              <div className={`p-2 rounded-lg bg-${section.color}-100`}>
                <Icon className={`w-5 h-5 text-${section.color}-600`} />
              </div>
              <div className="flex-1">
                <div className="font-bold text-gray-900 mb-1">
                  {idx + 1}. {section.title}
                </div>
                <div className="text-sm text-gray-600">
                  {section.subsections.length} sous-sections
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          );
        })}
      </div>
    </Card>
  );

  // RENDER PRINCIPAL
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      {renderHeader()}

      {/* Navigation */}
      {renderNavigation()}

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Table des matières en mode sections */}
        {viewMode === 'sections' && renderTableMatieres()}

        {/* Contenu */}
        {viewMode === 'sections' ? renderActiveSection() : renderComplet()}

        {/* Footer */}
        <div className="mt-12 border-t-2 border-gray-200 pt-8">
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Document de Référence Officiel
              </h3>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Version</div>
                  <div className="font-bold text-gray-900">{projectData.version}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Date d'édition</div>
                  <div className="font-bold text-gray-900">{projectData.date}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Validité</div>
                  <div className="font-bold text-gray-900">12 mois</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Ce document constitue la base contractuelle pour les appels d'offres et la réalisation 
                du projet de station de recharge pour véhicules électriques à Lomé, Togo.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all">
                  <Download className="w-5 h-5" />
                  Télécharger PDF complet
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-300 transition-all">
                  <Printer className="w-5 h-5" />
                  Imprimer
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-300 transition-all">
                  <Share2 className="w-5 h-5" />
                  Partager
                </button>
              </div>
            </div>
          </Card>

          {/* Contact */}
          <div className="mt-8 text-center text-sm text-gray-600">
            <p>Pour toute question ou demande d'information complémentaire:</p>
            <p className="font-bold text-gray-900 mt-2">
              Touche Parfaite - MAWOUSSI Mensah
            </p>
            <p>Lomé, République Togolaise</p>
          </div>
        </div>
      </div>

      {/* Bouton retour en haut */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-110"
      >
        <ChevronRight className="w-6 h-6 transform -rotate-90" />
      </button>
    </div>
  );
};

export default CahierChargeRecharge;
