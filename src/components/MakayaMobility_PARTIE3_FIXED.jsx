  // PARTIE 3/3 - Rendu principal

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-6">
      {selectedVehicle && <VehicleModal vehicle={selectedVehicle} onClose={() => setSelectedVehicle(null)} />}
      {selectedFormula && <FormulaModal formula={selectedFormula} onClose={() => setSelectedFormula(null)} />}
      
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
          🚗 Makaya Mobility
        </h1>
        <p className="text-slate-400 text-lg">Vente EV • Location Longue Durée • Service Après-Vente</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { 
            icon: Car, 
            label: 'Véhicules vendus', 
            value: mobilityData.metrics?.vehiclesSold || 127, 
            suffix: '', 
            detail: 'Depuis début 2025', 
            color: 'green' 
          },
          { 
            icon: Calendar, 
            label: 'Contrats LLD actifs', 
            value: mobilityData.metrics?.lldContracts || 89, 
            suffix: '', 
            detail: 'Flotte louée', 
            color: 'blue' 
          },
          { 
            icon: DollarSign, 
            label: 'CA Total', 
            value: ((mobilityData.metrics?.totalRevenue || 4200000000) / 1000000000).toFixed(2), 
            suffix: ' Md', 
            detail: 'FCFA (2025)', 
            color: 'yellow' 
          },
          { 
            icon: Star, 
            label: 'Satisfaction client', 
            value: mobilityData.metrics?.avgSatisfaction || 4.7, 
            suffix: '/5', 
            detail: 'Note moyenne', 
            color: 'purple' 
          }
        ].map((kpi, idx) => (
          <div key={idx} className={`bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:shadow-xl hover:shadow-${kpi.color}-500/10 transition-all`}>
            <div className={`p-3 bg-${kpi.color}-500/20 rounded-xl w-fit mb-3`}>
              <kpi.icon className={`w-6 h-6 text-${kpi.color}-400`} />
            </div>
            <h3 className="text-slate-400 text-sm font-medium mb-1">{kpi.label}</h3>
            <p className="text-3xl font-bold text-white">{kpi.value}{kpi.suffix}</p>
            <p className="text-xs text-slate-500 mt-2">{kpi.detail}</p>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex gap-4 border-b border-slate-700">
          {tabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button 
                key={tab.id} 
                onClick={() => setActiveTab(tab.id)} 
                className={`flex items-center gap-2 px-6 py-3 font-semibold transition-all ${
                  activeTab === tab.id 
                    ? 'text-green-400 border-b-2 border-green-400' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {activeTab === 'vente' && renderVente()}
        {activeTab === 'lld' && renderLLD()}
        {activeTab === 'sav' && renderSAV()}
      </div>

      <div className="max-w-7xl mx-auto text-center text-slate-500 text-sm mt-8">
        <p>🚗 Makaya Mobility - Vente EV • LLD • SAV • Made with 💚 for Sustainable Mobility</p>
      </div>
    </div>
  );
};

export default MakayaMobility;

// FIN PARTIE 3/3
