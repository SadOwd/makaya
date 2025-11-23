// 🔋 MAKAYA - BUSINESS PLAN JURIDIQUE - PARTIE 1/3
// À copier-coller dans BusinessPlanJuridique.jsx

import React, { useState } from 'react';
import { 
  Scale, FileText, Shield, TrendingUp, AlertTriangle, 
  CheckCircle, Building, Users, DollarSign, Calendar,
  Award, Lock, FileCheck, BarChart, Target, Home,
  ChevronRight, ExternalLink, Download, BookOpen,
  Briefcase, CreditCard, FileSignature, Clock
} from 'lucide-react';

const BusinessPlanJuridique = ({ onNavigate }) => {
  const [activeSection, setActiveSection] = useState('overview');

  // ========== DONNÉES ==========
  
  const economiesFiscales = {
    exonerationTVA: 408,
    tauxISReduit: 37,
    optimisationFiscale: 64,
    marchePublics: 135,
    protectionContentieux: 190,
    valorisationPI: 22,
    total: 856,
    coutConformite: 219,
    valeurNette: 523
  };

  const propositions = [
    { id: 1, titre: "Préférence Nationale", description: "35% capital togolais minimum", impact: "Protection vs. multinationales", priorite: "Haute" },
    { id: 2, titre: "Appels d'Offres Réservés", description: "40% lots pour PME locales", impact: "120M FCFA CA potentiel/an", priorite: "Haute" },
    { id: 3, titre: "PPP Équitables", description: "25% revenus garantis partenaire local", impact: "Sécurité partenariats", priorite: "Moyenne" },
    { id: 4, titre: "Fonds de Garantie", description: "2Mds FCFA dotation État", impact: "Prêts à 7% (vs. 12%)", priorite: "Haute" },
    { id: 5, titre: "Label EMV Certifié", description: "IS 10% pendant 7 ans (vs. 15%)", impact: "85M FCFA économies cumulées", priorite: "Moyenne" },
    { id: 6, titre: "Achat Local Progressif", description: "15-40% approvisionnement local", impact: "Développement industrie togolaise", priorite: "Moyenne" }
  ];

  const risques = [
    { nom: "Entrée multinationale", prob: 60, impact: "Critique", mitigation: "Lobbying + différenciation", cout: 45, couverture: 70 },
    { nom: "Changement réglementation", prob: 40, impact: "Élevé", mitigation: "Stabilité art. 21", cout: 12, couverture: 95 },
    { nom: "Contentieux client", prob: 5, impact: "Élevé", mitigation: "Assurance 500M", cout: 8, couverture: 90 },
    { nom: "Révocation agrément", prob: 2, impact: "Critique", mitigation: "Sur-conformité", cout: 15, couverture: 98 }
  ];

  const budgetJuridique = [
    { annee: "2025", conseil: 12, audits: 15, lobbying: 10, assurances: 8, pi: 2.5, compliance: 8, contentieux: 5, total: 60.5, pctCA: 0.70 },
    { annee: "2026", conseil: 12, audits: 21, lobbying: 15, assurances: 9, pi: 0.5, compliance: 8, contentieux: 5, total: 70.5, pctCA: 0.68 },
    { annee: "2027", conseil: 15, audits: 27, lobbying: 20, assurances: 10, pi: 1, compliance: 10, contentieux: 5, total: 88, pctCA: 0.66 }
  ];

  const certifications = [
    { nom: "ISO 9001", description: "Management Qualité", date: "Q3 2025", statut: "prevu", cout: 6, avantage: "+15% crédibilité B2B" },
    { nom: "ISO 14001", description: "Management Environnemental", date: "Q2 2026", statut: "prevu", cout: 8, avantage: "Accès marchés publics" },
    { nom: "ISO 45001", description: "Santé & Sécurité", date: "Q4 2026", statut: "prevu", cout: 7, avantage: "-25% primes assurance" },
    { nom: "IEC 61851", description: "Bornes de recharge", date: "2025", statut: "actif", cout: 0, avantage: "Obligatoire AT2ER" },
    { nom: "OCPP 2.0.1", description: "Interopérabilité", date: "Q1 2026", statut: "prevu", cout: 4, avantage: "Standard international" }
  ];

  const sections = [
    { id: 'overview', label: 'Vue d\'ensemble', icon: Home },
    { id: 'reglementation', label: 'Réglementation', icon: FileText },
    { id: 'propositions', label: 'Propositions', icon: Target },
    { id: 'risques', label: 'Risques & Mitigation', icon: AlertTriangle },
    { id: 'budget', label: 'Budget & ROI', icon: DollarSign },
    { id: 'protection', label: 'Protection Investisseurs', icon: Shield },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'documents', label: 'Documents', icon: BookOpen }
  ];

  // ========== RENDER OVERVIEW ==========
  
  const renderOverview = () => (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-2xl p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <Scale className="h-10 w-10" />
            <div>
              <h2 className="text-3xl font-bold">Cadre Juridique & Réglementaire</h2>
              <p className="text-blue-200 text-lg">Section VIII du Business Plan</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-4xl font-bold mb-1">523M</div>
              <div className="text-blue-200 text-sm">Valeur Créée (FCFA)</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-4xl font-bold mb-1">157%</div>
              <div className="text-blue-200 text-sm">ROI Juridique</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-4xl font-bold mb-1">90%</div>
              <div className="text-blue-200 text-sm">Score Conformité</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-4xl font-bold mb-1">6</div>
              <div className="text-blue-200 text-sm">Propositions Lois</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bénéfices Fiscaux */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <DollarSign className="h-6 w-6 text-green-600" />
          Économies Fiscales Garanties (3 ans)
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="border-2 border-green-500 bg-green-50 rounded-xl p-4">
            <div className="text-sm text-slate-600 mb-1">Exonération TVA & Douanes</div>
            <div className="text-3xl font-bold text-green-600">{economiesFiscales.exonerationTVA}M</div>
            <div className="text-xs text-slate-500 mt-1">Art. 12-13 Loi 2018-010</div>
          </div>
          
          <div className="border border-slate-200 bg-slate-50 rounded-xl p-4">
            <div className="text-sm text-slate-600 mb-1">Taux IS Réduit 15%</div>
            <div className="text-3xl font-bold text-blue-600">{economiesFiscales.tauxISReduit}M</div>
            <div className="text-xs text-slate-500 mt-1">Art. 18 Loi 2018-010</div>
          </div>
          
          <div className="border border-slate-200 bg-slate-50 rounded-xl p-4">
            <div className="text-sm text-slate-600 mb-1">Optimisation Fiscale</div>
            <div className="text-3xl font-bold text-purple-600">{economiesFiscales.optimisationFiscale}M</div>
            <div className="text-xs text-slate-500 mt-1">Amortissements accélérés</div>
          </div>
          
          <div className="border border-slate-200 bg-slate-50 rounded-xl p-4">
            <div className="text-sm text-slate-600 mb-1">Marchés Publics</div>
            <div className="text-3xl font-bold text-orange-600">{economiesFiscales.marchePublics}M</div>
            <div className="text-xs text-slate-500 mt-1">ISO 14001</div>
          </div>
          
          <div className="border border-slate-200 bg-slate-50 rounded-xl p-4">
            <div className="text-sm text-slate-600 mb-1">Protection Contentieux</div>
            <div className="text-3xl font-bold text-red-600">{economiesFiscales.protectionContentieux}M</div>
            <div className="text-xs text-slate-500 mt-1">Assurances & mitigation</div>
          </div>
          
          <div className="border border-slate-200 bg-slate-50 rounded-xl p-4">
            <div className="text-sm text-slate-600 mb-1">Valorisation PI</div>
            <div className="text-3xl font-bold text-indigo-600">{economiesFiscales.valorisationPI}M</div>
            <div className="text-xs text-slate-500 mt-1">Marques + logiciels</div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-sm opacity-90 mb-1">TOTAL BÉNÉFICES</div>
              <div className="text-4xl font-bold">{economiesFiscales.total}M FCFA</div>
            </div>
            <TrendingUp className="h-16 w-16 opacity-50" />
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
            <div>
              <div className="text-sm opacity-75">Coût conformité</div>
              <div className="text-2xl font-bold">{economiesFiscales.coutConformite}M</div>
            </div>
            <div>
              <div className="text-sm opacity-75">Valeur nette créée</div>
              <div className="text-2xl font-bold">{economiesFiscales.valeurNette}M</div>
            </div>
          </div>
        </div>
      </div>

      {/* Avis Juridique */}
      <div className="bg-gradient-to-br from-emerald-50 to-green-50 border-2 border-green-500 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
            <CheckCircle className="h-8 w-8 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="text-xl font-bold text-slate-900 mb-2">Avis Juridique : FAVORABLE ✅</h4>
            <p className="text-slate-700 mb-3 italic">
              "Conformité substantielle avec réglementations togolaises. Structure juridique adaptée. 
              Propriété intellectuelle protégée. Risques contentieux faibles et couverts. 
              <strong> Recommandons l'investissement.</strong>"
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Building className="h-4 w-4" />
              <span className="font-semibold">Cabinet Dupont & Associés</span>
              <span className="text-slate-400">|</span>
              <span>Paris / Lomé</span>
            </div>
          </div>
        </div>
      </div>

      {/* Score Conformité */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-4">Tableau de Bord Conformité</h3>
        <div className="space-y-3">
          {[
            { label: "Conformité Réglementaire", score: 98, color: "green" },
            { label: "Protection Actifs PI", score: 95, color: "green" },
            { label: "Solidité Contractuelle", score: 92, color: "green" },
            { label: "Certifications", score: 75, color: "yellow" },
            { label: "Couverture Assurances", score: 90, color: "green" },
            { label: "Compliance Internationale", score: 88, color: "green" }
          ].map((item, i) => (
            <div key={i}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-slate-700">{item.label}</span>
                <span className={`text-sm font-bold ${item.color === 'green' ? 'text-green-600' : 'text-yellow-600'}`}>
                  {item.score}%
                </span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${item.color === 'green' ? 'bg-green-500' : 'bg-yellow-500'}`}
                  style={{ width: `${item.score}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 pt-6 border-t border-slate-200">
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-slate-900">SCORE GLOBAL</span>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-green-600">90%</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">EXCELLENT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // ========== RENDER RÉGLEMENTATION ==========
  
  const renderReglementation = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">Références Réglementaires Complètes</h3>
      
      {/* Niveau 1 - Législation */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
            <FileText className="h-6 w-6 text-white" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-slate-900">Niveau 1 : Législation</h4>
            <p className="text-sm text-slate-600">Base légale fondamentale</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg">
            <h5 className="font-bold text-slate-900 mb-2">📘 Loi n°2018-010 du 8 août 2018</h5>
            <p className="text-sm text-slate-700 mb-3">Relative à la promotion des énergies renouvelables</p>
            
            <div className="space-y-2">
              <div className="bg-white rounded-lg p-3">
                <div className="font-semibold text-sm text-slate-900 mb-1">Article 12 - Exonération TVA</div>
                <p className="text-xs text-slate-600 mb-2">
                  Les équipements destinés à la production d'énergie renouvelable sont exonérés de la TVA pendant 10 ans.
                </p>
                <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold inline-block">
                  Impact : 408M FCFA économisés
                </div>
              </div>

              <div className="bg-white rounded-lg p-3">
                <div className="font-semibold text-sm text-slate-900 mb-1">Article 18 - Taux IS Réduit</div>
                <p className="text-xs text-slate-600 mb-2">
                  IS au taux réduit de 15% au lieu de 27%, pendant les 5 premières années d'exploitation.
                </p>
                <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold inline-block">
                  Impact : 37M FCFA économisés (3 ans)
                </div>
              </div>

              <div className="bg-white rounded-lg p-3">
                <div className="font-semibold text-sm text-slate-900 mb-1">Article 21 - Stabilité Fiscale</div>
                <p className="text-xs text-slate-600 mb-2">
                  Les avantages fiscaux sont garantis pour leur durée prévue et ne peuvent être remis en cause.
                </p>
                <div className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold inline-block">
                  Protection : 10 ans garantie
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-slate-200 bg-slate-50 p-4 rounded-lg">
              <h5 className="font-bold text-slate-900 mb-2">📘 Loi n°2000-017</h5>
              <p className="text-sm text-slate-600 mb-2">Code de l'électricité</p>
              <ul className="text-xs text-slate-600 space-y-1">
                <li>• Art. 35-42 : Producteurs indépendants</li>
                <li>• Qualification juridique station solaire</li>
                <li>• Droit au raccordement garanti</li>
              </ul>
            </div>

            <div className="border border-slate-200 bg-slate-50 p-4 rounded-lg">
              <h5 className="font-bold text-slate-900 mb-2">📘 Loi n°2012-014</h5>
              <p className="text-sm text-slate-600 mb-2">Code de l'environnement</p>
              <ul className="text-xs text-slate-600 space-y-1">
                <li>• Art. 51-58 : Études d'impact (EIE)</li>
                <li>• EIE requise par station &gt;100kW</li>
                <li>• Audit annuel obligatoire</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Normes Techniques */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
            <Award className="h-6 w-6 text-white" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-slate-900">Normes Techniques</h4>
            <p className="text-sm text-slate-600">Certifications obligatoires</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border-2 border-green-500 bg-green-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <h5 className="font-bold text-slate-900">IEC 61851 (2017)</h5>
            </div>
            <p className="text-sm text-slate-600 mb-2">Système charge véhicules électriques</p>
            <div className="text-xs text-slate-600">
              ✅ 100% de nos bornes certifiées<br/>
              ✅ Exigé par AT2ER depuis 2020
            </div>
          </div>

          <div className="border-2 border-green-500 bg-green-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <h5 className="font-bold text-slate-900">IEC 62196 (2014)</h5>
            </div>
            <p className="text-sm text-slate-600 mb-2">Connecteurs Type 2 (Mennekes)</p>
            <div className="text-xs text-slate-600">
              ✅ Standard européen imposé Togo<br/>
              ✅ Compatible 95% VE Afrique Ouest
            </div>
          </div>

          <div className="border border-slate-200 bg-slate-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-5 w-5 text-yellow-500" />
              <h5 className="font-bold text-slate-900">ISO 14001:2015</h5>
            </div>
            <p className="text-sm text-slate-600 mb-2">Management environnemental</p>
            <div className="text-xs text-slate-600">
              🟡 Certification prévue Q2 2026<br/>
              🎯 Accès marchés publics (+10 points)
            </div>
          </div>

          <div className="border border-slate-200 bg-slate-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-5 w-5 text-yellow-500" />
              <h5 className="font-bold text-slate-900">ISO 9001:2015</h5>
            </div>
            <p className="text-sm text-slate-600 mb-2">Management de la qualité</p>
            <div className="text-xs text-slate-600">
              🟡 Certification prévue Q3 2025<br/>
              🎯 Crédibilité B2B (+15%)
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // ========== RENDER PROPOSITIONS ==========
  
  const renderPropositions = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-xl p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">6 Propositions Législatives au Gouvernement</h3>
        <p className="text-purple-100">Protection contre les multinationales & développement local</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {propositions.map((prop) => (
          <div 
            key={prop.id}
            className={`bg-white rounded-xl shadow-lg p-6 border-l-4 ${
              prop.priorite === 'Haute' ? 'border-red-500' : 'border-yellow-500'
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  {prop.id}
                </div>
                <h4 className="font-bold text-slate-900">{prop.titre}</h4>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                prop.priorite === 'Haute' 
                  ? 'bg-red-100 text-red-700' 
                  : 'bg-yellow-100 text-yellow-700'
              }`}>
                {prop.priorite}
              </span>
            </div>
            
            <p className="text-slate-700 text-sm mb-3">{prop.description}</p>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 border border-green-200">
              <div className="text-xs text-slate-600 mb-1">Impact attendu</div>
              <div className="font-semibold text-green-700">{prop.impact}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-500 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <Target className="h-8 w-8 text-blue-600 flex-shrink-0" />
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">Objectif 2026-2027</h4>
            <p className="text-slate-700 mb-3">
              Faire adopter <strong>3-4 propositions</strong> par le gouvernement togolais pour créer un écosystème 
              favorable aux acteurs locaux et limiter la domination des multinationales.
            </p>
            <div className="flex gap-4 text-sm flex-wrap">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-slate-600">Budget lobbying : 45M FCFA (3 ans)</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-blue-600" />
                <span className="text-slate-600">ROI attendu : 150M FCFA économies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

// 🔋 MAKAYA - BUSINESS PLAN JURIDIQUE - PARTIE 2/3
// À copier-coller APRÈS la partie 1 (suite de renderPropositions)

  // ========== RENDER RISQUES ==========
  
  const renderRisques = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">Matrice Risques & Mitigation</h3>

      <div className="space-y-4">
        {risques.map((risque, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <AlertTriangle className={`h-6 w-6 ${
                    risque.impact === 'Critique' ? 'text-red-600' : 'text-orange-600'
                  }`} />
                  <h4 className="text-lg font-bold text-slate-900">{risque.nom}</h4>
                </div>
                <div className="flex gap-4 text-sm">
                  <div>
                    <span className="text-slate-600">Probabilité : </span>
                    <span className="font-semibold">{risque.prob}%</span>
                  </div>
                  <div>
                    <span className="text-slate-600">Impact : </span>
                    <span className={`font-semibold ${
                      risque.impact === 'Critique' ? 'text-red-600' : 'text-orange-600'
                    }`}>{risque.impact}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600">{risque.cout}M</div>
                <div className="text-xs text-slate-600">Coût mitigation</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-5 w-5 text-blue-600" />
                <span className="font-semibold text-slate-900">Stratégie de Mitigation</span>
              </div>
              <p className="text-sm text-slate-700">{risque.mitigation}</p>
            </div>

            <div className="mt-4">
              <div className="text-xs text-slate-600 mb-2">Niveau de couverture : {risque.couverture}%</div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full"
                  style={{ width: `${risque.couverture}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-500 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle className="h-8 w-8 text-green-600" />
          <h4 className="text-xl font-bold text-slate-900">Couverture Globale : &gt;85%</h4>
        </div>
        <p className="text-slate-700">
          Tous les risques majeurs sont mitigés avec des stratégies éprouvées et des budgets alloués. 
          La combinaison assurances + lobbying + sur-conformité offre une protection multicouche.
        </p>
      </div>
    </div>
  );

  // ========== RENDER BUDGET ==========
  
  const renderBudget = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">Budget Juridique & ROI</h3>

      {/* Budget Triennal */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 text-white">
          <h4 className="text-xl font-bold">Budget Triennal 2025-2027</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Année</th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-slate-700">Conseil</th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-slate-700">Audits</th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-slate-700">Lobbying</th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-slate-700">Assurances</th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-slate-700 bg-blue-50">TOTAL</th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-slate-700 bg-green-50">% CA</th>
              </tr>
            </thead>
            <tbody>
              {budgetJuridique.map((budget, i) => (
                <tr key={i} className="border-t border-slate-200 hover:bg-slate-50">
                  <td className="px-4 py-3 font-bold text-slate-900">{budget.annee}</td>
                  <td className="px-4 py-3 text-right text-slate-600">{budget.conseil}M</td>
                  <td className="px-4 py-3 text-right text-slate-600">{budget.audits}M</td>
                  <td className="px-4 py-3 text-right text-slate-600">{budget.lobbying}M</td>
                  <td className="px-4 py-3 text-right text-slate-600">{budget.assurances}M</td>
                  <td className="px-4 py-3 text-right font-bold text-blue-600 bg-blue-50">{budget.total}M</td>
                  <td className="px-4 py-3 text-right font-semibold text-green-600 bg-green-50">{budget.pctCA}%</td>
                </tr>
              ))}
              <tr className="border-t-2 border-slate-300 bg-slate-100 font-bold">
                <td className="px-4 py-3">TOTAL 3 ANS</td>
                <td className="px-4 py-3 text-right">39M</td>
                <td className="px-4 py-3 text-right">63M</td>
                <td className="px-4 py-3 text-right">45M</td>
                <td className="px-4 py-3 text-right">27M</td>
                <td className="px-4 py-3 text-right text-blue-700 bg-blue-100">219M</td>
                <td className="px-4 py-3 text-right text-green-700 bg-green-100">0.68%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ROI */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-sm opacity-90 mb-1">ROI Juridique Global</div>
              <div className="text-5xl font-bold">157%</div>
            </div>
            <TrendingUp className="h-16 w-16 opacity-50" />
          </div>
          <div className="text-sm opacity-90">
            Chaque FCFA investi génère <strong>2.57 FCFA</strong> de valeur
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-sm opacity-90 mb-1">Budget Moyen Annuel</div>
              <div className="text-5xl font-bold">73M</div>
            </div>
            <BarChart className="h-16 w-16 opacity-50" />
          </div>
          <div className="text-sm opacity-90">
            Représente <strong>0.68%</strong> du chiffre d'affaires moyen
          </div>
        </div>
      </div>

      {/* Répartition Budget */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h4 className="text-lg font-bold text-slate-900 mb-4">Répartition du Budget Total (219M FCFA)</h4>
        <div className="space-y-3">
          {[
            { label: "Audits & Certifications", value: 63, color: "blue" },
            { label: "Lobbying & Influence", value: 45, color: "purple" },
            { label: "Conseil Juridique", value: 39, color: "indigo" },
            { label: "Assurances", value: 27, color: "green" },
            { label: "Compliance & DPO", value: 26, color: "orange" },
            { label: "Contentieux", value: 15, color: "red" },
            { label: "Propriété Intellectuelle", value: 4, color: "pink" }
          ].map((item, i) => {
            const pct = ((item.value / 219) * 100).toFixed(1);
            return (
              <div key={i}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-slate-700">{item.label}</span>
                  <span className="text-sm font-bold text-slate-900">{item.value}M ({pct}%)</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full bg-${item.color}-500`}
                    style={{ width: `${pct}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  // ========== RENDER PROTECTION ==========
  
  const renderProtection = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">Protection Investisseurs</h3>

      {/* 3 Options de Sortie */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <Building className="h-6 w-6 text-green-600" />
          </div>
          <h4 className="text-lg font-bold text-slate-900 mb-2">Option 1 : Acquisition</h4>
          <p className="text-sm text-slate-600 mb-4">
            Rachat par acteur stratégique (Total, Bolloré, Engie)
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-600">Valorisation 2028</span>
              <span className="font-bold">2.5Mds FCFA</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Multiple</span>
              <span className="font-bold text-green-600">2.87×</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">TRI</span>
              <span className="font-bold text-green-600">42%/an</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <TrendingUp className="h-6 w-6 text-blue-600" />
          </div>
          <h4 className="text-lg font-bold text-slate-900 mb-2">Option 2 : IPO BRVM</h4>
          <p className="text-sm text-slate-600 mb-4">
            Introduction en bourse BRVM Abidjan
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-600">Capitalisation</span>
              <span className="font-bold">2.8Mds FCFA</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Flottant</span>
              <span className="font-bold text-blue-600">25%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Timeline</span>
              <span className="font-bold text-blue-600">Q4 2028</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <Users className="h-6 w-6 text-purple-600" />
          </div>
          <h4 className="text-lg font-bold text-slate-900 mb-2">Option 3 : MBO</h4>
          <p className="text-sm text-slate-600 mb-4">
            Rachat par le management (LBO)
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-600">Financement LBO</span>
              <span className="font-bold">80% emprunt</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Remboursement</span>
              <span className="font-bold text-purple-600">7 ans</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Cash-flow annuel</span>
              <span className="font-bold text-purple-600">180M</span>
            </div>
          </div>
        </div>
      </div>

      {/* Clauses de Protection */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Shield className="h-6 w-6 text-blue-600" />
          Clauses de Protection
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-slate-200 bg-slate-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <h5 className="font-bold text-slate-900">Tag-Along</h5>
            </div>
            <p className="text-sm text-slate-600">
              Droit de sortie conjointe : les minoritaires peuvent vendre aux mêmes conditions que les majoritaires
            </p>
          </div>

          <div className="border border-slate-200 bg-slate-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <h5 className="font-bold text-slate-900">Drag-Along</h5>
            </div>
            <p className="text-sm text-slate-600">
              Si offre acceptée par 75% du capital, les minoritaires sont obligés de vendre (évite blocage)
            </p>
          </div>

          <div className="border border-slate-200 bg-slate-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <h5 className="font-bold text-slate-900">Liquidité 5 ans</h5>
            </div>
            <p className="text-sm text-slate-600">
              Si aucune liquidité sous 5 ans, rachat des actions à valeur d'expertise indépendante
            </p>
          </div>

          <div className="border border-slate-200 bg-slate-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <h5 className="font-bold text-slate-900">Anti-Dilution</h5>
            </div>
            <p className="text-sm text-slate-600">
              Protection contre la dilution en cas d'augmentation de capital à valorisation inférieure
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-500 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-3">
          <Lock className="h-8 w-8 text-blue-600" />
          <h4 className="text-xl font-bold text-slate-900">Protection Multicouche</h4>
        </div>
        <p className="text-slate-700 mb-4">
          Les investisseurs bénéficient d'une protection juridique complète à 4 niveaux : contractuelle (clauses), 
          financière (valorisation garantie), temporelle (liquidité 5 ans), et stratégique (3 options de sortie).
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white rounded-lg p-3">
            <div className="text-2xl font-bold text-blue-600">4</div>
            <div className="text-xs text-slate-600">Clauses Protection</div>
          </div>
          <div className="bg-white rounded-lg p-3">
            <div className="text-2xl font-bold text-green-600">3</div>
            <div className="text-xs text-slate-600">Options Sortie</div>
          </div>
          <div className="bg-white rounded-lg p-3">
            <div className="text-2xl font-bold text-purple-600">5</div>
            <div className="text-xs text-slate-600">Ans Liquidité</div>
          </div>
          <div className="bg-white rounded-lg p-3">
            <div className="text-2xl font-bold text-orange-600">2.5Mds</div>
            <div className="text-xs text-slate-600">Valorisation 2028</div>
          </div>
        </div>
      </div>
    </div>
  );

  // ========== RENDER CERTIFICATIONS ==========
  
  const renderCertifications = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">Certifications & Conformité</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, i) => (
          <div 
            key={i} 
            className={`bg-white rounded-xl shadow-lg p-6 border-l-4 ${
              cert.statut === 'actif' ? 'border-green-500' : 'border-yellow-500'
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  {cert.statut === 'actif' ? (
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  ) : (
                    <Clock className="h-6 w-6 text-yellow-600" />
                  )}
                  <h4 className="text-lg font-bold text-slate-900">{cert.nom}</h4>
                </div>
                <p className="text-sm text-slate-600 mb-2">{cert.description}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                cert.statut === 'actif' 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-yellow-100 text-yellow-700'
              }`}>
                {cert.statut === 'actif' ? 'ACTIF' : 'PRÉVU'}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-xs text-slate-600 mb-1">Date cible</div>
                <div className="font-semibold text-slate-900">{cert.date}</div>
              </div>
              <div>
                <div className="text-xs text-slate-600 mb-1">Coût</div>
                <div className="font-semibold text-slate-900">{cert.cout}M FCFA</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 border border-blue-200">
              <div className="text-xs text-slate-600 mb-1">Avantage</div>
              <div className="font-semibold text-blue-700">{cert.avantage}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-500 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <Award className="h-8 w-8 text-green-600" />
          <h4 className="text-xl font-bold text-slate-900">Calendrier Certifications</h4>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <div className="w-24 text-sm font-semibold text-slate-700">Q3 2025</div>
            <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500" style={{width: '33%'}}></div>
            </div>
            <div className="text-sm text-slate-600">ISO 9001</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-24 text-sm font-semibold text-slate-700">Q2 2026</div>
            <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-green-500" style={{width: '66%'}}></div>
            </div>
            <div className="text-sm text-slate-600">ISO 14001</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-24 text-sm font-semibold text-slate-700">Q4 2026</div>
            <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-purple-500" style={{width: '100%'}}></div>
            </div>
            <div className="text-sm text-slate-600">ISO 45001</div>
          </div>
        </div>
      </div>
    </div>
  );

  // ========== RENDER DOCUMENTS ==========
  
  const renderDocuments = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">Documentation & Due Diligence</h3>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-500 rounded-xl p-6 mb-6">
        <div className="flex items-center gap-3 mb-3">
          <BookOpen className="h-8 w-8 text-blue-600" />
          <h4 className="text-xl font-bold text-slate-900">Documents Disponibles</h4>
        </div>
        <p className="text-slate-700">
          Data room virtuelle complète avec <strong>124 documents</strong> organisés en 7 dossiers pour due diligence investisseurs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { titre: "Section Juridique Complète", pages: "35 pages", icon: FileText, color: "blue" },
          { titre: "Guide d'Intégration", pages: "8 pages", icon: BookOpen, color: "green" },
          { titre: "Synthèse 1 Page", pages: "1 page", icon: FileCheck, color: "purple" },
          { titre: "Conformité Réglementaire", docs: "45 docs", icon: Shield, color: "orange" },
          { titre: "Propriété Intellectuelle", docs: "12 docs", icon: Lock, color: "pink" },
          { titre: "Contrats Structurants", docs: "28 docs", icon: FileSignature, color: "indigo" },
          { titre: "Assurances", docs: "8 docs", icon: Shield, color: "red" },
          { titre: "Gouvernance & Compliance", docs: "15 docs", icon: CheckCircle, color: "teal" }
        ].map((doc, i) => (
          <div key={i} className={`bg-white rounded-lg shadow p-4 border-l-4 border-${doc.color}-500`}>
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-10 h-10 bg-${doc.color}-100 rounded-lg flex items-center justify-center`}>
                <doc.icon className={`h-5 w-5 text-${doc.color}-600`} />
              </div>
              <div className="flex-1">
                <h5 className="font-bold text-slate-900 text-sm">{doc.titre}</h5>
                <p className="text-xs text-slate-600">{doc.pages || doc.docs}</p>
              </div>
            </div>
            <button className="w-full mt-2 px-3 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm font-medium text-slate-700 flex items-center justify-center gap-2 transition">
              <Download className="h-4 w-4" />
              Télécharger
            </button>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h4 className="text-lg font-bold text-slate-900 mb-4">Accès Rapide</h4>
        <div className="space-y-2">
          {[
            { nom: "SECTION_JURIDIQUE_COMPLETE.md", taille: "~25,000 mots" },
            { nom: "GUIDE_INTEGRATION_JURIDIQUE.md", taille: "~4,000 mots" },
            { nom: "SYNTHESE_JURIDIQUE_1PAGE.md", taille: "~1,000 mots" },
            { nom: "RECAPITULATIF_PROJET_JURIDIQUE.md", taille: "~3,000 mots" }
          ].map((file, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-blue-600" />
                <div>
                  <div className="font-medium text-slate-900 text-sm">{file.nom}</div>
                  <div className="text-xs text-slate-600">{file.taille}</div>
                </div>
              </div>
              <button className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded text-xs font-medium flex items-center gap-1">
                <ExternalLink className="h-3 w-3" />
                Ouvrir
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

// 🔋 MAKAYA - BUSINESS PLAN JURIDIQUE - PARTIE 3/3 (FIN)
// À copier-coller APRÈS la partie 2 (suite de renderDocuments)

  // ========== RENDER MAIN ==========
  
  const renderContent = () => {
    switch(activeSection) {
      case 'overview':
        return renderOverview();
      case 'reglementation':
        return renderReglementation();
      case 'propositions':
        return renderPropositions();
      case 'risques':
        return renderRisques();
      case 'budget':
        return renderBudget();
      case 'protection':
        return renderProtection();
      case 'certifications':
        return renderCertifications();
      case 'documents':
        return renderDocuments();
      default:
        return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => onNavigate && onNavigate('home')}
              className="flex items-center gap-3 hover:opacity-80 transition"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <Scale className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">Makaya Energy</h1>
                <p className="text-xs text-slate-600">Business Plan - Section Juridique</p>
              </div>
            </button>
            <button
              onClick={() => onNavigate && onNavigate('home')}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition flex items-center gap-2"
            >
              <Home className="h-4 w-4" />
              Accueil
            </button>
          </div>

          {/* Section Tabs */}
          <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition ${
                    activeSection === section.id
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-white text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {section.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {renderContent()}

        {/* Footer Info */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-1">35 pages</div>
              <div className="text-sm text-slate-600">Documentation complète</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-1">124 docs</div>
              <div className="text-sm text-slate-600">Data room due diligence</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-1">100%</div>
              <div className="text-sm text-slate-600">Production-ready</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Prêt pour l'investissement institutionnel</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Le cadre juridique de Makaya constitue un actif stratégique majeur, créant une valeur nette de 523M FCFA 
            sur 3 ans avec un ROI de 157%. Recommandation favorable pour investissement.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button 
              onClick={() => setActiveSection('documents')}
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-xl transition flex items-center gap-2"
            >
              <Download className="h-5 w-5" />
              Télécharger Documentation
            </button>
            <button 
              onClick={() => onNavigate && onNavigate('businessplan')}
              className="px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-lg transition flex items-center gap-2"
            >
              <BarChart className="h-5 w-5" />
              Voir Business Plan Complet
            </button>
          </div>
        </div>

        {/* Metadata */}
        <div className="mt-8 text-center text-sm text-slate-500">
          <p>Section Juridique & Réglementaire - Version 2.0</p>
          <p>Dernière mise à jour : 22 Novembre 2025</p>
          <p className="mt-2">
            © 2025 Makaya Energy - Tous droits réservés | 
            <a href="mailto:legal@makaya-energy.tg" className="text-blue-600 hover:underline ml-1">Contact Juridique</a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default BusinessPlanJuridique;

