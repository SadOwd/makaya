// ============================================================================
// CAHIER DE CHARGE RECHARGE - PARTIE 2/6
// Composants Visuels et Header
// ============================================================================

  // Composant Card réutilisable
  const Card = ({ children, className = '' }) => (
    <div className={`bg-white rounded-xl shadow-lg border border-gray-200 ${className}`}>
      {children}
    </div>
  );

  // Composant Badge
  const Badge = ({ children, color = 'blue' }) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-700',
      green: 'bg-green-100 text-green-700',
      yellow: 'bg-yellow-100 text-yellow-700',
      red: 'bg-red-100 text-red-700',
      purple: 'bg-purple-100 text-purple-700',
      indigo: 'bg-indigo-100 text-indigo-700',
      orange: 'bg-orange-100 text-orange-700',
      emerald: 'bg-emerald-100 text-emerald-700',
      cyan: 'bg-cyan-100 text-cyan-700',
      pink: 'bg-pink-100 text-pink-700',
      violet: 'bg-violet-100 text-violet-700',
      amber: 'bg-amber-100 text-amber-700',
      slate: 'bg-slate-100 text-slate-700'
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${colors[color]}`}>
        {children}
      </span>
    );
  };

  // Composant StatCard
  const StatCard = ({ icon: Icon, label, value, color = 'blue', trend }) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600',
      red: 'from-red-500 to-red-600',
      indigo: 'from-indigo-500 to-indigo-600'
    };

    return (
      <Card className="p-6 hover:shadow-xl transition-shadow">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm text-gray-600 font-medium mb-2">{label}</p>
            <p className="text-3xl font-bold text-gray-900">{value}</p>
            {trend && (
              <div className="mt-2 flex items-center gap-1">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="text-sm text-green-600 font-semibold">{trend}</span>
              </div>
            )}
          </div>
          <div className={`p-3 rounded-lg bg-gradient-to-br ${colors[color]}`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>
      </Card>
    );
  };

  // Composant SectionHeader
  const SectionHeader = ({ icon: Icon, title, subtitle, color = 'blue' }) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      indigo: 'from-indigo-500 to-indigo-600',
      purple: 'from-purple-500 to-purple-600',
      green: 'from-green-500 to-green-600',
      yellow: 'from-yellow-500 to-yellow-600',
      orange: 'from-orange-500 to-orange-600',
      red: 'from-red-500 to-red-600',
      emerald: 'from-emerald-500 to-emerald-600',
      cyan: 'from-cyan-500 to-cyan-600',
      pink: 'from-pink-500 to-pink-600',
      violet: 'from-violet-500 to-violet-600',
      amber: 'from-amber-500 to-amber-600',
      slate: 'from-slate-500 to-slate-600'
    };

    return (
      <div className={`bg-gradient-to-r ${colors[color]} p-6 rounded-xl mb-6`}>
        <div className="flex items-center gap-4">
          <div className="p-3 bg-white/20 rounded-lg">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">{title}</h2>
            {subtitle && <p className="text-white/90 text-sm">{subtitle}</p>}
          </div>
        </div>
      </div>
    );
  };

  // Composant InfoBox
  const InfoBox = ({ type = 'info', children }) => {
    const styles = {
      info: 'bg-blue-50 border-blue-200 text-blue-800',
      warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
      success: 'bg-green-50 border-green-200 text-green-800',
      danger: 'bg-red-50 border-red-200 text-red-800'
    };

    const icons = {
      info: Info,
      warning: AlertTriangle,
      success: CheckCircle2,
      danger: AlertTriangle
    };

    const Icon = icons[type];

    return (
      <div className={`p-4 rounded-lg border-2 ${styles[type]} mb-4`}>
        <div className="flex items-start gap-3">
          <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
          <div className="text-sm">{children}</div>
        </div>
      </div>
    );
  };

  // Composant DataTable
  const DataTable = ({ headers, rows }) => (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            {headers.map((header, idx) => (
              <th key={idx} className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
              {row.map((cell, cellIdx) => (
                <td key={cellIdx} className="px-4 py-3 text-sm text-gray-900">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  // Render Header
  const renderHeader = () => (
    <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* En-tête principal */}
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
            <span className="text-sm font-semibold">Version {projectData.version} - {projectData.date}</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">{projectData.titre}</h1>
          <div className="flex items-center justify-center gap-3 text-xl mb-4">
            <MapPin className="w-6 h-6" />
            <span>{projectData.lieu}</span>
          </div>
          <p className="text-lg opacity-90">{projectData.type}</p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <Building2 className="w-5 h-5" />
            <span className="font-semibold">Maître d'ouvrage: {projectData.maitreOuvrage}</span>
          </div>
        </div>

        {/* Stats rapides */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mt-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <Zap className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">{statsGenerales.bornes}</div>
            <div className="text-sm opacity-90">Bornes</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <Battery className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">{statsGenerales.puissanceTotal}</div>
            <div className="text-sm opacity-90">Puissance</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <DollarSign className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">{statsGenerales.investissement}</div>
            <div className="text-sm opacity-90">Investissement</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <Clock className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">{statsGenerales.roi}</div>
            <div className="text-sm opacity-90">ROI</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <Activity className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">{statsGenerales.disponibilite}</div>
            <div className="text-sm opacity-90">Disponibilité</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <TrendingUp className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">{statsGenerales.revenus_an1}</div>
            <div className="text-sm opacity-90">Revenus An 1</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <PieChart className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">{statsGenerales.marge_an1}</div>
            <div className="text-sm opacity-90">Marge An 1</div>
          </div>
        </div>

        {/* Barre d'actions */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all">
            <Download className="w-5 h-5" />
            Télécharger PDF
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all">
            <Printer className="w-5 h-5" />
            Imprimer
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all">
            <Share2 className="w-5 h-5" />
            Partager
          </button>
        </div>
      </div>
    </div>
  );
