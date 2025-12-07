// Fonctions render pour CahierCharges

export const renderHYC50Premium = (SpecRow) => (
  <div className="space-y-8">
    {/* Header Premium */}
    <div className="relative bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 text-white rounded-2xl p-10 shadow-2xl overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
      <div className="relative z-10 flex items-center justify-between flex-wrap gap-6">
        <div className="flex-1">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-semibold mb-4">
            SÉRIE 2 • ALL-IN-ONE SYSTEM
          </div>
          <h2 className="text-5xl font-black mb-3 tracking-tight">Alpitronic HYC50</h2>
          <p className="text-2xl opacity-90 font-medium mb-6">Borne Murale DC 50 kW</p>
          <div className="flex gap-3 flex-wrap">
            {[
              {label: '50 kW / 2×25 kW', icon: '⚡'},
              {label: 'Efficacité 97%', icon: '📈'},
              {label: '<50 dBA', icon: '🔇'},
              {label: 'EMC Classe B', icon: '🏘️'}
            ].map((badge, i) => (
              <span key={i} className="bg-white/20 backdrop-blur-md px-5 py-3 rounded-xl text-sm font-semibold border border-white/30">
                {badge.icon} {badge.label}
              </span>
            ))}
          </div>
        </div>
        <div className="w-32 h-32 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-2xl">
          <span className="text-7xl">⚡</span>
        </div>
      </div>
    </div>

    {/* Performance Hero */}
    <div className="grid md:grid-cols-4 gap-5">
      {[
        {value: '97%', label: 'Efficacité Max', sub: 'Pleine charge', color: 'emerald'},
        {value: '0.99', label: 'Facteur Puissance', sub: 'Qualité réseau', color: 'blue'},
        {value: '25W', label: 'Veille', sub: 'Ultra-économe', color: 'purple'},
        {value: '<5%', label: 'THDi', sub: 'Harmoniques faibles', color: 'orange'}
      ].map((stat, i) => (
        <div key={i} className={`bg-gradient-to-br from-${stat.color}-50 to-${stat.color}-100 rounded-xl p-6 border-2 border-${stat.color}-200 text-center shadow-lg hover:shadow-xl transition-all`}>
          <div className={`text-4xl font-black text-${stat.color}-600 mb-2`}>{stat.value}</div>
          <div className="text-sm font-bold text-gray-700 mb-1">{stat.label}</div>
          <div className="text-xs text-gray-500">{stat.sub}</div>
        </div>
      ))}
    </div>

    {/* Specs Premium */}
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-2xl">⚡</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Spécifications Sortie</h3>
        </div>
        <div className="space-y-3">
          <SpecRow label="Puissance maximale" value="50 kW" highlight />
          <SpecRow label="Interfaces de charge" value="CCS2, CHAdeMO" />
          <SpecRow label="Granularité" value="25 kW (2 ports)" highlight />
          <SpecRow label="Plage tension DC" value="150 - 1000 Vdc" />
          <SpecRow label="Courant max CCS2" value="150 A" highlight />
          <SpecRow label="Longueurs câbles" value="4,45 m / 7,5 m / 10 m" />
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-2xl">🔌</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Spécifications Entrée</h3>
        </div>
        <div className="space-y-3">
          <SpecRow label="Tension AC nominale" value="400 V (-15%/+10%)" highlight />
          <SpecRow label="Courant AC maximal" value="90 A (RMS)" />
          <SpecRow label="Fréquence" value="50 / 60 Hz" />
          <SpecRow label="Type de réseau" value="TN-C, TN-S, TN-C-S, TT" />
          <SpecRow label="Facteur de puissance" value="> 0,99 à pleine charge" highlight />
          <SpecRow label="THDi" value="< 5% à pleine charge" />
        </div>
        <div className="mt-5 p-5 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl border-2 border-emerald-300 text-center">
          <div className="text-3xl font-black text-emerald-600 mb-1">97%</div>
          <div className="text-sm font-semibold text-gray-700">Efficacité Maximale</div>
        </div>
      </div>
    </div>

    {/* Physical Characteristics */}
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-white rounded-2xl shadow-xl p-6 border border-purple-100">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-3xl">🌡️</span>
          <h3 className="text-lg font-bold text-purple-900">Conditions Opération</h3>
        </div>
        <div className="space-y-2 text-sm">
          {[
            {label: 'Température', value: '-30°C à +55°C', hl: true},
            {label: 'Altitude max', value: '≤ 4000 m a.s.l.', hl: false},
            {label: 'Humidité', value: '10-95% (non-cond.)', hl: false},
            {label: 'Protection', value: 'IP54 / IK10', hl: true},
            {label: 'Installation', value: 'Intérieur/Extérieur', hl: false},
            {label: 'Niveau sonore', value: '<50 dBA (silencieux)', hl: true}
          ].map((item, i) => (
            <div key={i} className={`flex justify-between p-3 rounded-lg ${item.hl ? 'bg-purple-50 font-semibold border border-purple-200' : 'bg-gray-50'}`}>
              <span>{item.label}</span>
              <span className={item.hl ? 'text-purple-600' : ''}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-6 border border-orange-100">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-3xl">📐</span>
          <h3 className="text-lg font-bold text-orange-900">Dimensions & Poids</h3>
        </div>
        <div className="space-y-3 text-sm">
          <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
            <div className="font-bold mb-2">Dimensions</div>
            <div className="text-2xl font-black text-orange-600">1300 × 520 × 250</div>
            <div className="text-xs text-gray-500 mt-1">H × L × P (mm)</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="font-bold mb-2">Poids</div>
            <div className="text-2xl font-black text-gray-700">95 - 145 kg</div>
            <div className="text-xs text-gray-500 mt-1">Selon configuration</div>
          </div>
          <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
            <div className="font-bold text-xs mb-2">Type Installation</div>
            <div className="text-xs space-y-1">
              <div>✓ Montage mural</div>
              <div>✓ Sur socle (optionnel)</div>
              <div>✓ Fondation béton disponible</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-6 border border-red-100">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-3xl">🛡️</span>
          <h3 className="text-lg font-bold text-red-900">Protections & Normes</h3>
        </div>
        <div className="space-y-3 text-xs">
          <div className="bg-red-50 rounded-lg p-3 border border-red-200">
            <div className="font-bold mb-1">Protection Foudre</div>
            <div>Type 1 + 2 + 3 SPD intégrée coordonnée</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="font-bold mb-1">Compatibilité EMC</div>
            <div>Classe A & B (IEC 61851-21-2:2018)</div>
            <div className="text-emerald-600 font-semibold mt-2">✓ Certifié zones résidentielles</div>
          </div>
          <div className="bg-red-50 rounded-lg p-3 border border-red-200">
            <div className="font-bold mb-1">Protocoles Standards</div>
            <div>IEC 61851-23, ISO 15118-2, DIN 70121</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="font-bold mb-1">Catégorie Surtension</div>
            <div>OVC III (DIN EN 60664-1)</div>
          </div>
        </div>
      </div>
    </div>

    {/* Options */}
    <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
          <span className="text-2xl">📦</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900">Options & Fonctionnalités</h3>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="font-bold text-sm mb-4 text-gray-700 uppercase tracking-wider">Interface & Gestion</h4>
          <ul className="space-y-3 text-sm">
            {[
              'Écran tactile 10,1" haute résolution',
              'Interface multilingue (27 langues)',
              'Gestion à distance & diagnostics',
              'Mises à jour OTA (Over-The-Air)',
              'RFID (ISO14443A/B, ISO18092)'
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                <span className="text-emerald-500 text-lg">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm mb-4 text-gray-700 uppercase tracking-wider">Options Disponibles</h4>
          <ul className="space-y-3 text-sm">
            {[
              'Branding personnalisé (panneau frontal)',
              'Système paiement CB/QR-Code',
              'Comptage certifié MID/Eichrecht',
              'Gestion câbles optimisée (ressort/support)',
              'Paramétrage niveaux bruit jour/nuit'
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors">
                <span className="text-blue-500 text-lg">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);
