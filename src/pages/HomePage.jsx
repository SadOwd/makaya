import React from 'react';
import { Zap, Car, Battery, TrendingUp, Users, MapPin, ArrowRight, BookOpen, FileText } from 'lucide-react';

const HomePage = ({ onNavigate }) => {
  const branches = [
    {
      id: 'ride',
      title: 'MAKAYA RIDE',
      subtitle: 'VTC Électrique',
      icon: Car,
      gradient: 'from-orange-500 to-amber-600',
      bgGradient: 'from-orange-500/10 to-amber-500/10',
      borderColor: 'border-orange-500/50',
      description: 'Service de transport VTC 100% électrique, porté par une flotte moderne et des chauffeurs professionnels pour des trajets fiables, confortables et propres.',
      stats: [
        { label: 'Véhicules', value: '45', icon: Car },
        { label: 'Courses/jour', value: '234', icon: TrendingUp },
        { label: 'Chauffeurs', value: '43', icon: Users }
      ]
    },
    {
      id: 'mobility',
      title: 'MAKAYA MOBILITY',
      subtitle: 'Vente EV - LLD - SAV',
      icon: Zap,
      gradient: 'from-green-500 to-emerald-600',
      bgGradient: 'from-green-500/10 to-emerald-500/10',
      borderColor: 'border-green-500/50',
      description: 'Vente de véhicules électriques, Location Longue Durée et Service Après-Vente complet pour une expérience électromobilité fiable et sans contraintes.',
      stats: [
        { label: 'Véhicules vendus', value: '121', icon: Car },
        { label: 'Contrats LLD', value: '55', icon: TrendingUp },
        { label: 'Taux satisfaction', value: '92,53%', icon: Users }
      ]
    },
    {
      id: 'recharge',
      title: 'MAKAYA RECHARGE',
      subtitle: 'Réseau de Bornes AC|DC',
      icon: Battery,
      gradient: 'from-blue-500 to-cyan-600',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
      borderColor: 'border-blue-500/50',
      description: 'Infrastructure de recharge électrique en pleine expansion au TOGO, offrant un réseau fiable et rapide pour une mobilité moderne et durable.',
      stats: [
        { label: 'Stations', value: '6', icon: MapPin },
        { label: 'Bornes actives', value: '42', icon: Battery },
        { label: 'kWh/jour', value: '35,427k', icon: TrendingUp }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            {/* Logo animé */}
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-600 blur-2xl opacity-50 animate-pulse" />
                <div className="relative w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-green-500/50 transform hover:scale-110 transition-transform duration-300">
                  <Zap className="h-12 w-12 text-white" />
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent">
                MAKAYA ENERGIE
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-2">
              Pionnier de la Mobilité Électrique au Togo
            </p>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Solutions complètes pour la transition énergétique : Vente de véhicules électriques, Transport VTC et Infrastructure de recharge
            </p>
          </div>

          {/* 3 Branches Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {branches.map((branch) => {
              const Icon = branch.icon;
              return (
                <div
                  key={branch.id}
                  onClick={() => onNavigate(branch.id)}
                  className={`group relative overflow-hidden rounded-2xl border ${branch.borderColor} bg-gradient-to-br ${branch.bgGradient} backdrop-blur-xl p-6 cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-2xl`}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${branch.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-2">{branch.title}</h3>
                    <p className="text-sm text-slate-400 mb-4">{branch.subtitle}</p>
                    
                    {/* Description */}
                    <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                      {branch.description}
                    </p>

                    {/* Stats */}
                    <div className="space-y-3 mb-6">
                      {branch.stats.map((stat, idx) => {
                        const StatIcon = stat.icon;
                        return (
                          <div key={idx} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <StatIcon className="h-4 w-4 text-slate-400" />
                              <span className="text-slate-400 text-sm">{stat.label}</span>
                            </div>
                            <span className="text-white font-bold">{stat.value}</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* CTA Button */}
                    <button className={`w-full py-3 rounded-lg bg-gradient-to-r ${branch.gradient} text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 group-hover:scale-105`}>
                      Accéder
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Business Plan Section */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 backdrop-blur-xl p-8 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Business Plan Global</h2>
                <p className="text-slate-400">
                  Vision stratégique 2026-2030 - Projections financières - Analyse de marché
                </p>
              </div>
              <button
                onClick={() => onNavigate('businessplan')}
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                Consulter
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="p-4 bg-slate-800/50 rounded-xl">
                <p className="text-slate-400 text-sm mb-1">CA 2030</p>
                <p className="text-2xl font-bold text-white">39.77 Md</p>
                <p className="text-green-400 text-xs">Francs CFA</p>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-xl">
                <p className="text-slate-400 text-sm mb-1">EBITDA</p>
                <p className="text-2xl font-bold text-white">18.67 Md</p>
                <p className="text-blue-400 text-xs">46.9% marge</p>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-xl">
                <p className="text-slate-400 text-sm mb-1">ROI</p>
                <p className="text-2xl font-bold text-yellow-400">20x</p>
                <p className="text-slate-400 text-xs">5 ans</p>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-xl">
                <p className="text-slate-400 text-sm mb-1">CAGR</p>
                <p className="text-2xl font-bold text-white">72%</p>
                <p className="text-emerald-400 text-xs">2026-2030</p>
              </div>
            </div>
          </div>

          {/* Cahier des Charges Section - NOUVELLE SECTION */}
          <div className="bg-gradient-to-br from-green-800/30 to-emerald-900/30 rounded-2xl border border-green-500/50 backdrop-blur-xl p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">Cahier des Charges - Station Pilote</h2>
                  <p className="text-slate-300">
                    Projet initial - 1 Station - 10 Bornes - Budget 69.6M FCFA
                  </p>
                </div>
              </div>
              <button
                onClick={() => onNavigate('cahier-charges')}
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <FileText className="h-5 w-5" />
                Consulter
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            {/* Quick Stats Cahier */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-slate-800/50 rounded-xl border border-green-500/20">
                <p className="text-slate-400 text-sm mb-1">Budget Total</p>
                <p className="text-2xl font-bold text-white">69.6M</p>
                <p className="text-green-400 text-xs">FCFA</p>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-xl border border-blue-500/20">
                <p className="text-slate-400 text-sm mb-1">Puissance</p>
                <p className="text-2xl font-bold text-white">525 kW</p>
                <p className="text-blue-400 text-xs">10 bornes</p>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-xl border border-purple-500/20">
                <p className="text-slate-400 text-sm mb-1">ROI</p>
                <p className="text-2xl font-bold text-purple-400">&lt; 12 mois</p>
                <p className="text-slate-400 text-xs">TRI 180-200%</p>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-xl border border-orange-500/20">
                <p className="text-slate-400 text-sm mb-1">Sections</p>
                <p className="text-2xl font-bold text-white">13/13</p>
                <p className="text-emerald-400 text-xs">Complètes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
