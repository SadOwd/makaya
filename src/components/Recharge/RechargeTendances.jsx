import React from 'react';
import { Clock, TrendingUp, Activity } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { rechargeDataFinal } from '../../data/rechargeDataFinal';

const RechargeTendances = () => {
  const { tendancesHoraires, periodesHoraires } = rechargeDataFinal;

  // Trouver les pics
  const peakHours = [...tendancesHoraires]
    .sort((a, b) => b.utilisation - a.utilisation)
    .slice(0, 3);

  const lowHours = [...tendancesHoraires]
    .sort((a, b) => a.utilisation - b.utilisation)
    .slice(0, 3);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
          <Clock size={24} className="text-blue-600" />
          Analyse des Tendances Horaires 24/7
        </h3>
        <p className="text-gray-600">Optimisation de la capacité par tranche horaire</p>
      </div>

      {/* Pics et Creux */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl shadow-md p-6 border-2 border-red-200">
          <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
            🔥 Heures de Pointe (Top 3)
          </h4>
          <div className="space-y-3">
            {peakHours.map((hour, idx) => (
              <div key={idx} className="bg-white p-3 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-800">{hour.heure}</span>
                  <span className="text-2xl font-bold text-red-600">{hour.utilisation}%</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{hour.sessions} sessions</span>
                  <span className="font-semibold text-green-600">
                    {(hour.revenus / 1000).toFixed(1)}K FCFA
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div 
                    className="bg-red-600 h-2 rounded-full"
                    style={{ width: `${hour.utilisation}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-red-100 rounded text-sm text-red-800">
            <strong>💡 Opportunité:</strong> Saturation >90% nécessite expansion capacité
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl shadow-md p-6 border-2 border-blue-200">
          <h4 className="font-bold text-blue-800 mb-4 flex items-center gap-2">
            🌙 Heures Creuses (Bottom 3)
          </h4>
          <div className="space-y-3">
            {lowHours.map((hour, idx) => (
              <div key={idx} className="bg-white p-3 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-800">{hour.heure}</span>
                  <span className="text-2xl font-bold text-blue-600">{hour.utilisation}%</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{hour.sessions} sessions</span>
                  <span className="font-semibold text-green-600">
                    {(hour.revenus / 1000).toFixed(1)}K FCFA
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${hour.utilisation}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-blue-100 rounded text-sm text-blue-800">
            <strong>💡 Opportunité:</strong> Potentiel inexploité - campagne promo heures creuses
          </div>
        </div>
      </div>

      {/* Graphique Utilisation */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h4 className="font-bold text-gray-800 mb-4">Taux d'Utilisation par Heure</h4>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={tendancesHoraires}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="heure" />
            <YAxis label={{ value: 'Utilisation (%)', angle: -90, position: 'insideLeft' }} />
            <Tooltip 
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-white p-3 rounded shadow-lg border">
                      <div className="font-bold">{data.heure}</div>
                      <div className="text-sm text-gray-600">Utilisation: {data.utilisation}%</div>
                      <div className="text-sm text-gray-600">Sessions: {data.sessions}</div>
                      <div className="text-sm text-green-600 font-semibold">
                        Revenus: {data.revenus.toLocaleString()} FCFA
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="utilisation" 
              stroke="#3b82f6" 
              strokeWidth={2}
              dot={{ fill: '#3b82f6', r: 4 }}
              name="Utilisation (%)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Graphique Revenus */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h4 className="font-bold text-gray-800 mb-4">Revenus par Heure</h4>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={tendancesHoraires}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="heure" />
            <YAxis label={{ value: 'Revenus (FCFA)', angle: -90, position: 'insideLeft' }} />
            <Tooltip 
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-white p-3 rounded shadow-lg border">
                      <div className="font-bold">{data.heure}</div>
                      <div className="text-sm text-green-600 font-semibold">
                        {data.revenus.toLocaleString()} FCFA
                      </div>
                      <div className="text-sm text-gray-600">{data.sessions} sessions</div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Legend />
            <Bar dataKey="revenus" fill="#10b981" name="Revenus (FCFA)" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Analyse par Période */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.entries(periodesHoraires).map(([key, periode]) => {
          const periodeColor = 
            key === 'heuresCreuses' ? 'blue' :
            key === 'heuresPleines' ? 'orange' : 'red';

          return (
            <div key={key} className={`bg-${periodeColor}-50 border-2 border-${periodeColor}-200 rounded-xl p-6`}>
              <div className="text-center mb-4">
                <div className="text-2xl mb-2">
                  {key === 'heuresCreuses' ? '🌙' :
                   key === 'heuresPleines' ? '☀️' : '🔥'}
                </div>
                <div className="font-bold text-gray-800 text-lg">
                  {key === 'heuresCreuses' ? 'Heures Creuses' :
                   key === 'heuresPleines' ? 'Heures Pleines' : 'Heures Pointe'}
                </div>
                <div className="text-sm text-gray-600">{periode.periode}</div>
              </div>

              <div className="space-y-3">
                <div className="bg-white p-3 rounded">
                  <div className="text-xs text-gray-600 mb-1">Utilisation</div>
                  <div className="text-2xl font-bold text-blue-600">{periode.tauxUtilisation}%</div>
                </div>
                
                <div className="bg-white p-3 rounded">
                  <div className="text-xs text-gray-600 mb-1">Sessions</div>
                  <div className="text-2xl font-bold text-purple-600">{periode.pourcentageSessions}%</div>
                </div>

                <div className="bg-white p-3 rounded">
                  <div className="text-xs text-gray-600 mb-1">Revenu/jour</div>
                  <div className="text-2xl font-bold text-green-600">
                    {(periode.revenuMoyen / 1000).toFixed(0)}K
                  </div>
                </div>

                <div className="bg-white p-3 rounded">
                  <div className="text-xs text-gray-600 mb-1">Marge</div>
                  <div className="text-2xl font-bold text-orange-600">{periode.margePourcentage.toFixed(1)}%</div>
                </div>
              </div>

              <div className={`mt-4 p-2 bg-${periodeColor}-100 rounded text-xs text-gray-700`}>
                {periode.description}
              </div>
            </div>
          );
        })}
      </div>

      {/* Recommandations */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg p-6">
        <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
          <TrendingUp size={24} />
          Recommandations Stratégiques
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white bg-opacity-20 p-4 rounded-lg">
            <div className="font-bold mb-2">🎯 Maximiser Heures Pointe</div>
            <ul className="text-sm space-y-1 opacity-90">
              <li>• Installer +6 bornes ultra-rapides</li>
              <li>• Focus stations saturées (Aéroport 94%)</li>
              <li>• Gain potentiel: +4.2M FCFA/mois</li>
            </ul>
          </div>

          <div className="bg-white bg-opacity-20 p-4 rounded-lg">
            <div className="font-bold mb-2">💡 Optimiser Heures Creuses</div>
            <ul className="text-sm space-y-1 opacity-90">
              <li>• Campagne promo -15% nuit</li>
              <li>• Partenariats flottes (taxis, livraison)</li>
              <li>• Gain potentiel: +1.7M FCFA/mois</li>
            </ul>
          </div>

          <div className="bg-white bg-opacity-20 p-4 rounded-lg">
            <div className="font-bold mb-2">📊 Équilibrer Demande</div>
            <ul className="text-sm space-y-1 opacity-90">
              <li>• App notifications heures creuses</li>
              <li>• Réservation bornes heures pointe</li>
              <li>• Tarification dynamique renforcée</li>
            </ul>
          </div>

          <div className="bg-white bg-opacity-20 p-4 rounded-lg">
            <div className="font-bold mb-2">🤝 Segments Spécifiques</div>
            <ul className="text-sm space-y-1 opacity-90">
              <li>• VTC: abonnements PRO heures pleines</li>
              <li>• Résidentiel: promo heures creuses</li>
              <li>• B2B: contrats volume garantis</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Stats Résumé */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Activity size={20} />
          Résumé 24h
        </h4>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-3xl font-bold text-blue-600">
              {tendancesHoraires.reduce((sum, h) => sum + h.sessions, 0)}
            </div>
            <div className="text-sm text-gray-600 mt-1">Sessions totales</div>
          </div>

          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-3xl font-bold text-green-600">
              {(tendancesHoraires.reduce((sum, h) => sum + h.revenus, 0) / 1000).toFixed(0)}K
            </div>
            <div className="text-sm text-gray-600 mt-1">Revenus totaux</div>
          </div>

          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <div className="text-3xl font-bold text-orange-600">
              {Math.max(...tendancesHoraires.map(h => h.utilisation))}%
            </div>
            <div className="text-sm text-gray-600 mt-1">Pic utilisation</div>
          </div>

          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-3xl font-bold text-purple-600">
              {(tendancesHoraires.reduce((sum, h) => sum + h.utilisation, 0) / 24).toFixed(1)}%
            </div>
            <div className="text-sm text-gray-600 mt-1">Moyenne 24h</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RechargeTendances;
