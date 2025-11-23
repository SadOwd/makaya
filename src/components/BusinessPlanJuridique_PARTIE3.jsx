// 🔋 MAKAYA - BUSINESS PLAN JURIDIQUE - PARTIE 3/3 (FIN)
// À copier-coller APRÈS la partie 2 (suite de renderDocuments)

  // ========== RENDER MAIN ==========
  
  const renderContent = () => {
    switch(activeSection) {
      case 'overview':
        return renderOverview();
      case 'reglementation':
        return renderReglementation();
      case 'propositions':
        return renderPropositions();
      case 'risques':
        return renderRisques();
      case 'budget':
        return renderBudget();
      case 'protection':
        return renderProtection();
      case 'certifications':
        return renderCertifications();
      case 'documents':
        return renderDocuments();
      default:
        return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => onNavigate && onNavigate('home')}
              className="flex items-center gap-3 hover:opacity-80 transition"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <Scale className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">Makaya Energy</h1>
                <p className="text-xs text-slate-600">Business Plan - Section Juridique</p>
              </div>
            </button>
            <button
              onClick={() => onNavigate && onNavigate('home')}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition flex items-center gap-2"
            >
              <Home className="h-4 w-4" />
              Accueil
            </button>
          </div>

          {/* Section Tabs */}
          <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition ${
                    activeSection === section.id
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-white text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {section.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {renderContent()}

        {/* Footer Info */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-1">35 pages</div>
              <div className="text-sm text-slate-600">Documentation complète</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-1">124 docs</div>
              <div className="text-sm text-slate-600">Data room due diligence</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-1">100%</div>
              <div className="text-sm text-slate-600">Production-ready</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Prêt pour l'investissement institutionnel</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Le cadre juridique de Makaya constitue un actif stratégique majeur, créant une valeur nette de 523M FCFA 
            sur 3 ans avec un ROI de 157%. Recommandation favorable pour investissement.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button 
              onClick={() => setActiveSection('documents')}
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-xl transition flex items-center gap-2"
            >
              <Download className="h-5 w-5" />
              Télécharger Documentation
            </button>
            <button 
              onClick={() => onNavigate && onNavigate('businessplan')}
              className="px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-lg transition flex items-center gap-2"
            >
              <BarChart className="h-5 w-5" />
              Voir Business Plan Complet
            </button>
          </div>
        </div>

        {/* Metadata */}
        <div className="mt-8 text-center text-sm text-slate-500">
          <p>Section Juridique & Réglementaire - Version 2.0</p>
          <p>Dernière mise à jour : 22 Novembre 2025</p>
          <p className="mt-2">
            © 2025 Makaya Energy - Tous droits réservés | 
            <a href="mailto:legal@makaya-energy.tg" className="text-blue-600 hover:underline ml-1">Contact Juridique</a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default BusinessPlanJuridique;
