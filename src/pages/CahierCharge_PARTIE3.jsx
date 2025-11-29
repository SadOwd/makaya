// ============================================================================
// CAHIER DE CHARGE RECHARGE - PARTIE 3/6
// Navigation et Sections de Contenu (1/2)
// ============================================================================

  // Render Navigation
  const renderNavigation = () => (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-20 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        {/* Barre de recherche */}
        <div className="mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher dans le cahier de charge..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Eye className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Mode d'affichage */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('sections')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                viewMode === 'sections'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <LayoutGrid className="w-4 h-4 inline mr-2" />
              Par sections
            </button>
            <button
              onClick={() => setViewMode('complet')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                viewMode === 'complet'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <FileText className="w-4 h-4 inline mr-2" />
              Vue complète
            </button>
          </div>
        </div>

        {/* Navigation par sections */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`p-3 rounded-lg font-semibold transition-all ${
                  activeSection === section.id
                    ? `bg-${section.color}-600 text-white shadow-lg`
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-5 h-5 mx-auto mb-1" />
                <div className="text-xs">{section.title}</div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );

  // Section 1: Présentation du Projet
  const renderPresentation = () => (
    <div className="space-y-6">
      <SectionHeader
        icon={FileText}
        title="1. PRÉSENTATION DU PROJET"
        subtitle="Contexte, objectifs et caractéristiques générales"
        color="blue"
      />

      {/* 1.1 Contexte et Justification */}
      <Card className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Target className="w-6 h-6 text-blue-600" />
          1.1 Contexte et Justification
        </h3>
        <div className="prose max-w-none">
          <p className="text-gray-700 mb-4">
            Le Togo s'inscrit dans une dynamique de transition énergétique et de développement durable. 
            L'émergence progressive de véhicules électriques dans la sous-région ouest-africaine nécessite 
            la mise en place d'infrastructures de recharge adaptées et fiables.
          </p>
          <InfoBox type="info">
            Ce projet vise à créer la <strong>première station de recharge publique multi-standards à Lomé</strong>, 
            offrant des solutions de recharge semi-rapide (AC) et rapide (DC) pour répondre aux besoins variés 
            des utilisateurs de véhicules électriques.
          </InfoBox>
        </div>
      </Card>

      {/* 1.2 Objectifs du Projet */}
      <Card className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <CheckCircle2 className="w-6 h-6 text-green-600" />
          1.2 Objectifs du Projet
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Badge color="green">Principaux</Badge>
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Déployer une infrastructure de <strong>10 bornes opérationnelles</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Garantir une disponibilité de service <strong>≥ 95%</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Proposer des <strong>tarifs compétitifs</strong> pour démocratiser la mobilité électrique
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Créer un <strong>modèle économique viable et duplicable</strong>
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Badge color="blue">Secondaires</Badge>
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Contribuer à la <strong>réduction des émissions de CO₂</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Préparer l'intégration future d'<strong>énergies renouvelables</strong> (solaire)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Créer des <strong>emplois locaux</strong> (exploitation, maintenance)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Positionner le Togo comme <strong>pionnier de la mobilité électrique</strong> en Afrique de l'Ouest
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* 1.3 Localisation et Site */}
      <Card className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <MapPin className="w-6 h-6 text-purple-600" />
          1.3 Localisation et Site
        </h3>

        <InfoBox type="info">
          <strong>Emplacement:</strong> Lomé, Togo
        </InfoBox>

        <div className="mb-6">
          <h4 className="font-bold text-gray-900 mb-3">Critères de sélection du site:</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-semibold text-gray-900">Accessibilité</div>
                <div className="text-sm text-gray-600">24h/24, 7j/7</div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-semibold text-gray-900">Proximité</div>
                <div className="text-sm text-gray-600">Axes routiers principaux</div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-semibold text-gray-900">Visibilité</div>
                <div className="text-sm text-gray-600">Haute pour attirer utilisateurs</div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-semibold text-gray-900">Potentiel de trafic</div>
                <div className="text-sm text-gray-600">Centres commerciaux, zones d'activité</div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-semibold text-gray-900">Raccordement CEET</div>
                <div className="text-sm text-gray-600">Disponible à proximité</div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-semibold text-gray-900">Foncier</div>
                <div className="text-sm text-gray-600">Sécurisé (propriété ou bail long)</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
          <h4 className="font-bold text-blue-900 mb-3">Caractéristiques requises:</h4>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <div className="flex justify-between">
              <span className="text-blue-800 font-semibold">Surface minimale:</span>
              <span className="text-blue-900 font-bold">250-300 m²</span>
            </div>
            <div className="flex justify-between">
              <span className="text-blue-800 font-semibold">Accès véhicules:</span>
              <span className="text-blue-900 font-bold">Poids lourds OK</span>
            </div>
            <div className="flex justify-between">
              <span className="text-blue-800 font-semibold">Extension future:</span>
              <span className="text-blue-900 font-bold">Possible</span>
            </div>
            <div className="flex justify-between">
              <span className="text-blue-800 font-semibold">Sécurité:</span>
              <span className="text-blue-900 font-bold">Périmétrique</span>
            </div>
          </div>
        </div>
      </Card>

      {/* 1.4 Alimentation Électrique */}
      <Card className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Zap className="w-6 h-6 text-yellow-600" />
          1.4 Alimentation Électrique
        </h3>

        <div className="space-y-4">
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Building2 className="w-5 h-5 text-yellow-700" />
              <span className="font-bold text-yellow-900">Fournisseur:</span>
              <span className="text-yellow-800">CEET (Compagnie Énergie Électrique du Togo)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="border-2 border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-3">Type de raccordement:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                  <span>Réseau BT ou MT selon disponibilité</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                  <span>Alimentation triphasée <strong>400V</strong> (3 phases + neutre)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                  <span>Puissance souscrite: <strong>370-400 kW minimum</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                  <span>Abonnement professionnel</span>
                </li>
              </ul>
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-3">Configuration:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-gray-700">Tension:</span>
                  <span className="font-bold">380V triphasé + N + PE</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700">Fréquence:</span>
                  <span className="font-bold">50 Hz ± 2%</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700">Schéma terre:</span>
                  <span className="font-bold">TN-S ou TT</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700">Distance max CEET:</span>
                  <span className="font-bold">200 m (idéalement)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
