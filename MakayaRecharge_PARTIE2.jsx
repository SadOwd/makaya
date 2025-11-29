// ============================================================================
// PARTIE 2 - COMPOSANTS VISUELS AVANCÉS
// ============================================================================

  // Composant InfoCard pour affichage d'information
  const InfoCard = ({ icon: Icon, title, value, description, color = 'blue' }) => (
    <div className={`bg-${color}-50 rounded-lg p-4 border-2 border-${color}-200 hover:shadow-md transition-all`}>
      <div className="flex items-start gap-3">
        <div className={`bg-${color}-100 p-2 rounded-lg`}>
          <Icon className={`w-6 h-6 text-${color}-600`} />
        </div>
        <div className="flex-1">
          <h4 className={`font-semibold text-${color}-900 mb-1`}>{title}</h4>
          {value && <div className={`text-2xl font-bold text-${color}-700 mb-1`}>{value}</div>}
          {description && <p className="text-sm text-gray-600">{description}</p>}
        </div>
      </div>
    </div>
  );

  // Composant LocationCard
  const LocationCard = ({ name, address, type, status }) => {
    const statusColors = {
      'Opérationnel': 'green',
      'En construction': 'yellow',
      'Planifié': 'blue'
    };
    const statusColor = statusColors[status] || 'gray';

    return (
      <div className="bg-white rounded-lg p-4 border-2 border-gray-200 hover:shadow-md transition-all">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-blue-600" />
            <h4 className="font-semibold text-gray-900">{name}</h4>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-semibold bg-${statusColor}-100 text-${statusColor}-700`}>
            {status}
          </span>
        </div>
        <p className="text-sm text-gray-600 mb-2">{address}</p>
        <div className="flex items-center gap-2 text-sm">
          <Building className="w-4 h-4 text-gray-500" />
          <span className="text-gray-700">{type}</span>
        </div>
      </div>
    );
  };

  // Badge animé "NEW"
  const PulsingBadge = ({ text = "NEW" }) => (
    <span className="relative inline-flex items-center">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full px-2 py-1 text-xs font-bold bg-red-500 text-white">
        {text}
      </span>
    </span>
  );
