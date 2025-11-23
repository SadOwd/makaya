// 🔋 MAKAYA RECHARGE - PARTIE 1/3
// Imports, States, Données et Modals

import React, { useState } from 'react';
import { 
  Zap, TrendingUp, DollarSign, Users, MapPin, 
  Clock, Battery, Settings, BarChart3, AlertCircle,
  ChevronRight, X, Home, Calendar, ArrowUp, ArrowDown,
  Target, Award, ThumbsUp, Lightbulb, TrendingDown,
  Activity, Percent, CheckCircle, AlertTriangle, Star
} from 'lucide-react';
import { rechargeDataOptimized } from '../data/rechargeDataOptimized';

const MakayaRecharge = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedStation, setSelectedStation] = useState(null);
  const [selectedAbonnement, setSelectedAbonnement] = useState(null);

  // Extraction sécurisée des données
  const overview = rechargeDataOptimized?.overview || {};
  const stations = rechargeDataOptimized?.stations || [];
  const abonnements = rechargeDataOptimized?.abonnements || [];
  const typesBornesObj = rechargeDataOptimized?.typesBornes || {};
  const typesBornes = Object.values(typesBornesObj).filter(b => b.status !== 'non_viable_public');
  const recommandations = rechargeDataOptimized?.recommandations || [];

  // Données pour Tendances
  const evolutionMensuelle = [
    { mois: 'Jan', revenus: 650, sessions: 380, utilisation: 78 },
    { mois: 'Fév', revenus: 720, sessions: 398, utilisation: 80 },
    { mois: 'Mar', revenus: 685, sessions: 390, utilisation: 79 },
    { mois: 'Avr', revenus: 755, sessions: 412, utilisation: 82 },
    { mois: 'Mai', revenus: 730, sessions: 405, utilisation: 81 },
    { mois: 'Juin', revenus: 778, sessions: 428, utilisation: 84 },
    { mois: 'Juil', revenus: 792, sessions: 441, utilisation: 85 },
    { mois: 'Août', revenus: 768, sessions: 435, utilisation: 84 },
    { mois: 'Sep', revenus: 745, sessions: 420, utilisation: 83 },
    { mois: 'Oct', revenus: 781, sessions: 456, utilisation: 85.4 },
    { mois: 'Nov', revenus: 810, sessions: 465, utilisation: 86 },
    { mois: 'Déc', revenus: 845, sessions: 480, utilisation: 87 }
  ];

  const tendancesHoraires = [
    { heure: '00h-04h', demande: 15, tarif: 'Creuse', color: 'green' },
    { heure: '04h-08h', demande: 35, tarif: 'Creuse', color: 'green' },
    { heure: '08h-12h', demande: 85, tarif: 'Pointe', color: 'red' },
    { heure: '12h-14h', demande: 75, tarif: 'Base', color: 'blue' },
    { heure: '14h-17h', demande: 70, tarif: 'Base', color: 'blue' },
    { heure: '17h-21h', demande: 95, tarif: 'Pointe', color: 'red' },
    { heure: '21h-24h', demande: 45, tarif: 'Creuse', color: 'green' }
  ];

  const performanceStations = stations.map(s => ({
    nom: s.nom.split(' ')[0],
    revenus: s.revenusJournaliers,
    utilisation: s.tauxUtilisation,
    bornes: s.totalBornes
  })).sort((a, b) => b.revenus - a.revenus);

  // Modal Station
  const StationModal = ({ station, onClose }) => {
    if (!station) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 rounded-t-2xl">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">{station.nom}</h3>
                <div className="flex items-center gap-2 text-blue-100">
                  <MapPin className="h-4 w-4" />
                  <span>{station.zone}</span>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-lg transition"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="p-6 space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-green-50 rounded-lg p-4">
                <div className="text-green-600 text-sm mb-1">Revenus/jour</div>
                <div className="text-2xl font-bold text-slate-900">{station.revenusJournaliers?.toLocaleString() || 0} F</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="text-blue-600 text-sm mb-1">Bornes totales</div>
                <div className="text-2xl font-bold text-slate-900">{station.totalBornes || 0}</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <div className="text-purple-600 text-sm mb-1">Utilisation</div>
                <div className="text-2xl font-bold text-slate-900">{station.tauxUtilisation || 0}%</div>
              </div>
              <div className="bg-orange-50 rounded-lg p-4">
                <div className="text-orange-600 text-sm mb-1">Revenus/mois</div>
                <div className="text-2xl font-bold text-slate-900">{((station.revenusJournaliers || 0) * 30 / 1000).toFixed(1)}K F</div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-4">
              <h4 className="font-bold text-slate-900 mb-3">Composition du site</h4>
              <div className="space-y-2">
                {station.bornes && station.bornes.map((borne, idx) => (
                  <div key={idx} className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">{borne.type}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{borne.nombre} borne(s)</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        borne.status === 'actif' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-orange-100 text-orange-700'
                      }`}>
                        {borne.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-4">
              <h4 className="font-bold text-slate-900 mb-2">Type de clientèle</h4>
              <p className="text-sm text-slate-700">{station.typeClientele}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Modal Abonnement
  const AbonnementModal = ({ abonnement, onClose }) => {
    if (!abonnement) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-pink-700 text-white p-6 rounded-t-2xl">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <span className="text-5xl">{abonnement.emoji}</span>
                <div>
                  <h3 className="text-2xl font-bold mb-1">{abonnement.nom}</h3>
                  <p className="text-purple-100 text-sm">{abonnement.cible}</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-lg transition"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="p-6 space-y-6">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-500 rounded-xl p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">
                    {abonnement.fraisMensuel.toLocaleString()} F
                  </div>
                  <div className="text-sm text-slate-600">Prix/mois</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">
                    {abonnement.reduction}%
                  </div>
                  <div className="text-sm text-slate-600">Réduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">
                    +{abonnement.arpuAugmentation}%
                  </div>
                  <div className="text-sm text-slate-600">ARPU</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-1">
                    {abonnement.satisfactionMoyenne || 'N/A'}
                  </div>
                  <div className="text-sm text-slate-600">Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white border border-slate-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span className="text-sm text-slate-600">Utilisateurs</span>
                </div>
                <div className="text-2xl font-bold text-slate-900">
                  {abonnement.utilisateurs?.toLocaleString() || 'N/A'}
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-slate-600">Revenu moyen</span>
                </div>
                <div className="text-2xl font-bold text-green-600">
                  {abonnement.revenuMoyen?.toLocaleString() || 'N/A'} F
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="h-5 w-5 text-purple-600" />
                  <span className="text-sm text-slate-600">Sessions/mois</span>
                </div>
                <div className="text-2xl font-bold text-purple-600">
                  {abonnement.sessionsParMois || 'N/A'}
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="h-5 w-5 text-yellow-600" />
                  <span className="text-sm text-slate-600">Énergie/mois</span>
                </div>
                <div className="text-2xl font-bold text-yellow-600">
                  {abonnement.energieMoyenne || 'N/A'} kWh
                </div>
              </div>
              {abonnement.economieAnnuelle && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 md:col-span-2">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingDown className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-slate-600">Économie annuelle</span>
                  </div>
                  <div className="text-2xl font-bold text-green-600">
                    {abonnement.economieAnnuelle?.toLocaleString()} F
                  </div>
                </div>
              )}
            </div>

            <div className="bg-slate-50 rounded-xl p-4">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                Avantages inclus
              </h4>
              <ul className="space-y-2">
                {abonnement.avantages && abonnement.avantages.map((avantage, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{avantage}</span>
                  </li>
                ))}
              </ul>
            </div>

            {abonnement.heuresGratuites && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="font-bold text-slate-900">Heures gratuites incluses</span>
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  {abonnement.heuresGratuites}h
                </div>
                <p className="text-sm text-slate-600">
                  Utilisables sur toutes les bornes du réseau
                </p>
              </div>
            )}

            {abonnement.logiqueBusiness && (
              <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-purple-600 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Logique Business</h4>
                    <p className="text-sm text-slate-700">{abonnement.logiqueBusiness}</p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex gap-3">
              <button className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:shadow-xl transition">
                Souscrire à {abonnement.id}
              </button>
              <button 
                onClick={onClose}
                className="px-6 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
