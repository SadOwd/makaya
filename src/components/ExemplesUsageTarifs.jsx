// 📘 GUIDE D'UTILISATION - Hook useTarifsBornes
// ============================================================
// Exemples pratiques d'utilisation du hook personnalisé
// ============================================================

import React, { useState } from 'react';
import { useTarifsBornes } from '../hooks/useTarifsBornes';
import { Battery, Zap, Clock, DollarSign } from 'lucide-react';

// ========================================
// EXEMPLE 1: Afficher les infos d'une borne
// ========================================
const ExempleAffichageBorne = () => {
  const { getBorne, getNomAffichage, getCouleur } = useTarifsBornes();

  // Fonctionne avec N'IMPORTE QUEL identifiant !
  const borne1 = getBorne('slow7kW');      // Nom technique
  const borne2 = getBorne('AC');           // Nom marketing
  const borne3 = getBorne('AC_7KW');       // ID officiel
  
  // Tous retournent LA MÊME borne !
  
  return (
    <div className="p-4">
      <h3 className="text-xl font-bold mb-4">Informations Borne</h3>
      
      <div className="bg-white rounded-lg p-4 shadow">
        <h4 className="font-semibold text-lg mb-2">
          {getNomAffichage('slow7kW')}
        </h4>
        
        <div className="space-y-2">
          <p><strong>Puissance:</strong> {borne1.puissance} kW</p>
          <p><strong>Type:</strong> {borne1.type}</p>
          <p><strong>Temps charge moyen:</strong> {borne1.tempsChargeMoyen}h</p>
          <p><strong>Clientèle cible:</strong> {borne1.clienteleCible}</p>
        </div>

        <div 
          className="mt-4 p-3 rounded"
          style={{ backgroundColor: getCouleur('slow7kW') + '20' }}
        >
          <p className="text-sm">{borne1.description}</p>
        </div>
      </div>
    </div>
  );
};

// ========================================
// EXEMPLE 2: Afficher les tarifs d'une borne
// ========================================
const ExempleTarifsBorne = () => {
  const { getTarifsBorne, formaterMontant, getBadgePeriode } = useTarifsBornes();

  const tarifs = getTarifsBorne('fast22kW');  // ou 'AC' ou 'AC_22KW'

  return (
    <div className="p-4">
      <h3 className="text-xl font-bold mb-4">Grille Tarifaire</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.entries(tarifs).map(([periode, tarif]) => (
          <div key={periode} className="bg-white rounded-lg p-4 shadow">
            <div className="text-center mb-3">
              <div className="text-2xl mb-1">{getBadgePeriode(periode)}</div>
              <div className="text-sm text-gray-600">{tarif.periode}</div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Prix client:</span>
                <span className="font-bold text-green-600">
                  {tarif.tarifClient} FCFA/kWh
                </span>
              </div>
              
              <div className="flex justify-between">
                <span>Marge:</span>
                <span className="font-bold text-blue-600">
                  {tarif.margePct.toFixed(1)}%
                </span>
              </div>

              <div className="flex justify-between">
                <span>Économie:</span>
                <span className="font-bold text-purple-600">
                  {tarif.economieVsThermique}%
                </span>
              </div>
            </div>

            <div className="mt-3 p-2 bg-gray-50 rounded text-xs">
              {tarif.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ========================================
// EXEMPLE 3: Calculateur de coût de recharge
// ========================================
const CalculateurRecharge = () => {
  const { 
    listerBornes, 
    calculerCoutSession,
    calculerTempsCharge,
    formaterMontant 
  } = useTarifsBornes();

  const [kWh, setKWh] = useState(42);
  const [borneSelectionnee, setBorneSelectionnee] = useState('AC_22KW');
  const [periodeSelectionnee, setPeriodeSelectionnee] = useState('heuresPleines');

  const cout = calculerCoutSession(borneSelectionnee, periodeSelectionnee, kWh);
  const temps = calculerTempsCharge(borneSelectionnee, kWh);

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <DollarSign className="text-green-600" />
        Calculateur de Recharge
      </h3>

      {/* Sélection type de borne */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Type de borne:</label>
        <select 
          value={borneSelectionnee}
          onChange={(e) => setBorneSelectionnee(e.target.value)}
          className="w-full p-2 border rounded"
        >
          {listerBornes().map(borne => (
            <option key={borne.id} value={borne.id}>
              {borne.icon} {borne.nomAffichage} - {borne.puissance}kW
            </option>
          ))}
        </select>
      </div>

      {/* Sélection période */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Période:</label>
        <div className="grid grid-cols-3 gap-2">
          {['heuresCreuses', 'heuresPleines', 'heuresPointe'].map(periode => (
            <button
              key={periode}
              onClick={() => setPeriodeSelectionnee(periode)}
              className={`p-2 rounded font-semibold ${
                periodeSelectionnee === periode
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {periode === 'heuresCreuses' ? '🌙 Creuses' :
               periode === 'heuresPleines' ? '☀️ Pleines' : '🔥 Pointe'}
            </button>
          ))}
        </div>
      </div>

      {/* Quantité d'énergie */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">
          Énergie à charger: {kWh} kWh
        </label>
        <input
          type="range"
          min="10"
          max="100"
          value={kWh}
          onChange={(e) => setKWh(Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-gray-500">
          <span>10 kWh</span>
          <span>100 kWh</span>
        </div>
      </div>

      {/* Résultats */}
      {cout && temps && (
        <div className="mt-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="text-green-600" size={20} />
                <span className="text-sm text-gray-600">Coût Total</span>
              </div>
              <div className="text-2xl font-bold text-green-600">
                {formaterMontant(cout.coutClient)}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {cout.tarifUnitaire} FCFA/kWh
              </div>
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="text-blue-600" size={20} />
                <span className="text-sm text-gray-600">Durée</span>
              </div>
              <div className="text-2xl font-bold text-blue-600">
                {temps.formatted}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Temps de charge
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Autonomie gagnée</span>
              <span className="text-xl font-bold text-purple-600">
                ~{Math.round((kWh / 16) * 100)} km
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ========================================
// EXEMPLE 4: Comparateur d'options
// ========================================
const ComparateurOptions = () => {
  const { 
    comparerOptions, 
    getNomAffichage,
    getBadgePeriode,
    formaterMontant 
  } = useTarifsBornes();

  const [kWh] = useState(50);

  // Comparer toutes les options possibles
  const options = [
    { borneId: 'AC_7KW', periodeId: 'heuresCreuses', kWh },
    { borneId: 'AC_22KW', periodeId: 'heuresPleines', kWh },
    { borneId: 'DC_50KW', periodeId: 'heuresPleines', kWh },
    { borneId: 'DC_150KW', periodeId: 'heuresPointe', kWh }
  ];

  const resultats = comparerOptions(options);

  return (
    <div className="p-4">
      <h3 className="text-xl font-bold mb-4">
        Comparaison pour {kWh} kWh
      </h3>

      <div className="space-y-3">
        {resultats.map((result, idx) => (
          <div 
            key={idx}
            className={`p-4 rounded-lg border-2 ${
              idx === 0 
                ? 'border-green-500 bg-green-50' 
                : 'border-gray-200 bg-white'
            }`}
          >
            <div className="flex justify-between items-center">
              <div>
                <div className="font-bold">
                  {getNomAffichage(result.borneId)}
                </div>
                <div className="text-sm text-gray-600">
                  {getBadgePeriode(result.periodeId)}
                </div>
              </div>

              <div className="text-right">
                <div className="text-2xl font-bold text-green-600">
                  {formaterMontant(result.cout.coutClient)}
                </div>
                {idx === 0 && (
                  <div className="text-xs text-green-600 font-semibold">
                    ✓ Meilleur prix
                  </div>
                )}
              </div>
            </div>

            <div className="mt-2 flex gap-4 text-sm text-gray-600">
              <span>Marge: {result.cout.margePct.toFixed(1)}%</span>
              <span>Bénéfice: {formaterMontant(result.cout.benefice)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ========================================
// EXEMPLE 5: Simulateur complet
// ========================================
const SimulateurComplet = () => {
  const { simulerSession, formaterMontant } = useTarifsBornes();

  const [params, setParams] = useState({
    borneId: 'DC_50KW',
    periodeId: 'heuresPleines',
    kWh: 45,
    distanceKm: 280
  });

  const simulation = simulerSession(params);

  if (!simulation) return <div>Erreur de simulation</div>;

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
      <h3 className="text-2xl font-bold mb-6">Simulateur de Session</h3>

      {/* Paramètres */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded-lg p-4">
          <div className="text-sm text-gray-600 mb-1">Type de borne</div>
          <div className="text-lg font-bold">{simulation.formatted.nom}</div>
          <div className="text-xs text-gray-500">{simulation.borne.puissance} kW</div>
        </div>

        <div className="bg-white rounded-lg p-4">
          <div className="text-sm text-gray-600 mb-1">Période</div>
          <div className="text-lg font-bold">{simulation.formatted.periode}</div>
          <div className="text-xs text-gray-500">{simulation.periode.horaire}</div>
        </div>
      </div>

      {/* Résultats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-lg p-4 text-center">
          <Battery className="w-8 h-8 mx-auto mb-2 text-green-600" />
          <div className="text-2xl font-bold text-green-600">
            {simulation.energie.kWh}
          </div>
          <div className="text-xs text-gray-600">kWh chargés</div>
        </div>

        <div className="bg-white rounded-lg p-4 text-center">
          <Clock className="w-8 h-8 mx-auto mb-2 text-blue-600" />
          <div className="text-2xl font-bold text-blue-600">
            {simulation.formatted.temps}
          </div>
          <div className="text-xs text-gray-600">Durée</div>
        </div>

        <div className="bg-white rounded-lg p-4 text-center">
          <Zap className="w-8 h-8 mx-auto mb-2 text-purple-600" />
          <div className="text-2xl font-bold text-purple-600">
            {simulation.energie.autonomieGagnee}
          </div>
          <div className="text-xs text-gray-600">km</div>
        </div>
      </div>

      {/* Coût et économies */}
      <div className="mt-6 bg-white rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold">Coût Total</span>
          <span className="text-3xl font-bold text-green-600">
            {simulation.formatted.cout}
          </span>
        </div>

        {simulation.economie && (
          <div className="pt-4 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Économie vs Thermique</span>
              <span className="text-xl font-bold text-purple-600">
                {simulation.formatted.economie}
              </span>
            </div>
            <div className="text-sm text-gray-500 text-right mt-1">
              {simulation.formatted.economiePct}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// ========================================
// COMPOSANT PRINCIPAL - Tous les exemples
// ========================================
const ExemplesUsage = () => {
  const [activeExample, setActiveExample] = useState('affichage');

  const examples = {
    affichage: { title: 'Affichage Borne', component: ExempleAffichageBorne },
    tarifs: { title: 'Grille Tarifaire', component: ExempleTarifsBorne },
    calculateur: { title: 'Calculateur', component: CalculateurRecharge },
    comparateur: { title: 'Comparateur', component: ComparateurOptions },
    simulateur: { title: 'Simulateur', component: SimulateurComplet }
  };

  const ActiveComponent = examples[activeExample].component;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          📘 Exemples d'utilisation - useTarifsBornes
        </h1>

        {/* Navigation */}
        <div className="flex gap-2 mb-6 overflow-x-auto">
          {Object.entries(examples).map(([key, { title }]) => (
            <button
              key={key}
              onClick={() => setActiveExample(key)}
              className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap ${
                activeExample === key
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {title}
            </button>
          ))}
        </div>

        {/* Exemple actif */}
        <ActiveComponent />
      </div>
    </div>
  );
};

export default ExemplesUsage;
