// 🎯 DÉMO RAPIDE - Système Unifié
import React from 'react';
import { useTarifsBornes } from '../hooks/useTarifsBornes';
import { Battery, Zap, DollarSign } from 'lucide-react';

const DemoTarifsUnifies = () => {
  const { 
    getBorne, 
    getTarif, 
    calculerCoutSession,
    formaterMontant,
    listerBornes 
  } = useTarifsBornes();

  return (
    <div className="p-6 space-y-6">
      {/* En-tête */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">
          ⚡ Système Unifié - Types de Bornes & Tarifs
        </h1>
        <p className="text-blue-100">
          Démonstration des nouvelles fonctionnalités
        </p>
      </div>

      {/* Liste des bornes */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Battery className="text-green-600" />
          Types de Bornes Disponibles
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {listerBornes().map(borne => (
            <div 
              key={borne.id}
              className="border-2 border-gray-200 rounded-lg p-4 hover:border-blue-500 transition-all"
            >
              <div className="text-3xl mb-2">{borne.icon}</div>
              <h3 className="font-bold text-gray-800 mb-1">{borne.nomAffichage}</h3>
              <p className="text-sm text-gray-600 mb-2">{borne.puissance} kW</p>
              <div className="text-xs text-gray-500">{borne.clienteleCible}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Exemple de calcul */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <DollarSign className="text-green-600" />
          Exemple de Calcul
        </h2>
        
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
          <div className="mb-4">
            <h3 className="font-bold text-lg mb-2">Recharge AC 22kW - Heures Pleines</h3>
            <p className="text-sm text-gray-600">42 kWh chargés</p>
          </div>
          
          {(() => {
            const tarif = getTarif('AC_22KW', 'heuresPleines');
            const cout = calculerCoutSession('AC_22KW', 'heuresPleines', 42);
            
            return (
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Tarif unitaire:</span>
                  <span className="font-bold text-blue-600">
                    {tarif.tarifClient} FCFA/kWh
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Coût total:</span>
                  <span className="font-bold text-green-600 text-xl">
                    {formaterMontant(cout.coutClient)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Bénéfice:</span>
                  <span className="font-bold text-purple-600">
                    {formaterMontant(cout.benefice)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Marge:</span>
                  <span className="font-bold text-orange-600">
                    {cout.margePct.toFixed(1)}%
                  </span>
                </div>
              </div>
            );
          })()}
        </div>
      </div>

      {/* Message de succès */}
      <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6">
        <h3 className="text-xl font-bold text-green-800 mb-2">
          ✅ Système opérationnel !
        </h3>
        <p className="text-green-700">
          Le système unifié est maintenant actif. Consultez les onglets "Test Système" 
          et "Exemples Tarifs" pour plus de fonctionnalités.
        </p>
      </div>
    </div>
  );
};

export default DemoTarifsUnifies;
