# =========================================================
#      MAKAYA ENERGY - FUSION JURIDIQUE + MAJ RECHARGE
#           Script de Fusion et Mise a Jour
#                 Version 1.0.0
# =========================================================

# Parametres
$projectRoot = $PSScriptRoot
$srcFolder = Join-Path $projectRoot "src"
$pagesFolder = Join-Path $srcFolder "pages"
$backupFolder = Join-Path $projectRoot "backup_$(Get-Date -Format 'yyyyMMdd_HHmmss')"

# Couleurs
$successColor = "Green"
$errorColor = "Red"
$infoColor = "Cyan"
$warningColor = "Yellow"

# Fonction de log
function Write-Log {
    param(
        [string]$Message,
        [string]$Type = "Info"
    )
    
    $timestamp = Get-Date -Format "HH:mm:ss"
    
    switch ($Type) {
        "Success" { Write-Host "[$timestamp] [OK] $Message" -ForegroundColor $successColor }
        "Error"   { Write-Host "[$timestamp] [ERREUR] $Message" -ForegroundColor $errorColor }
        "Warning" { Write-Host "[$timestamp] [ATTENTION] $Message" -ForegroundColor $warningColor }
        "Info"    { Write-Host "[$timestamp] [INFO] $Message" -ForegroundColor $infoColor }
        "Step"    { Write-Host "`n[$timestamp] [ETAPE] $Message" -ForegroundColor $infoColor }
    }
}

# Fonction pour creer les sauvegardes
function Backup-Files {
    Write-Log "Creation des sauvegardes..." "Step"
    
    if (-not (Test-Path $backupFolder)) {
        New-Item -ItemType Directory -Path $backupFolder | Out-Null
    }
    
    $filesToBackup = @(
        "$pagesFolder\BusinessPlanJuridique.jsx",
        "$pagesFolder\MakayaRecharge.jsx"
    )
    
    foreach ($file in $filesToBackup) {
        if (Test-Path $file) {
            $fileName = Split-Path $file -Leaf
            Copy-Item $file -Destination "$backupFolder\$fileName" -Force
            Write-Log "Sauvegarde de $fileName creee" "Success"
        }
    }
    
    Write-Log "Sauvegardes creees dans: $backupFolder" "Info"
}

# Fonction pour fusionner BusinessPlanJuridique
function Merge-BusinessPlanJuridique {
    Write-Log "Fusion des 3 parties de BusinessPlanJuridique..." "Step"
    
    $componentsFolder = Join-Path $srcFolder "components"
    $partie1 = Join-Path $componentsFolder "BusinessPlanJuridique_PARTIE1.jsx"
    $partie2 = Join-Path $componentsFolder "BusinessPlanJuridique_PARTIE2.jsx"
    $partie3 = Join-Path $componentsFolder "BusinessPlanJuridique_PARTIE3.jsx"
    
    # Verification des fichiers sources
    if (-not (Test-Path $partie1)) {
        Write-Log "Fichier PARTIE1 introuvable!" "Error"
        return $false
    }
    if (-not (Test-Path $partie2)) {
        Write-Log "Fichier PARTIE2 introuvable!" "Error"
        return $false
    }
    if (-not (Test-Path $partie3)) {
        Write-Log "Fichier PARTIE3 introuvable!" "Error"
        return $false
    }
    
    # Lecture des contenus
    $content1 = Get-Content $partie1 -Raw -Encoding UTF8
    $content2 = Get-Content $partie2 -Raw -Encoding UTF8
    $content3 = Get-Content $partie3 -Raw -Encoding UTF8
    
    # Nettoyage des commentaires d'entete
    $content2 = $content2 -replace "^// [^\n]+\n// [^\n]+\n// [^\n]+\n\n", ""
    $content3 = $content3 -replace "^// [^\n]+\n// [^\n]+\n// [^\n]+\n\n", ""
    
    # Fusion
    $mergedContent = $content1 + "`n" + $content2 + "`n" + $content3
    
    # Ecriture du fichier fusionne
    $outputFile = Join-Path $pagesFolder "BusinessPlanJuridique.jsx"
    Set-Content -Path $outputFile -Value $mergedContent -Encoding UTF8
    
    Write-Log "Fichier BusinessPlanJuridique.jsx fusionne avec succes!" "Success"
    
    $fileSize = (Get-Item $outputFile).Length / 1KB
    Write-Log "Taille du fichier: $([math]::Round($fileSize, 2)) KB" "Info"
    
    return $true
}

# Fonction pour mettre a jour MakayaRecharge
function Update-MakayaRecharge {
    Write-Log "Mise a jour de MakayaRecharge.jsx..." "Step"
    
    $rechargeFile = Join-Path $pagesFolder "MakayaRecharge.jsx"
    
    # Nouveau contenu MakayaRecharge optimise
    $newContent = @'
import React, { useState } from 'react';
import { 
  Zap, TrendingUp, DollarSign, Users, MapPin, 
  Clock, Battery, Settings, BarChart3, AlertCircle,
  ChevronRight, X, Home, Calendar
} from 'lucide-react';
import { rechargeDataFinal } from '../data/rechargeDataFinal';

const MakayaRecharge = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedStation, setSelectedStation] = useState(null);

  // Extraction securisee des donnees
  const kpis = rechargeDataFinal?.kpis || {
    revenusAnnuels: 0,
    chargesSessionJour: 0,
    tauxUtilisation: 0,
    chiffreAffaires: 0
  };

  const stations = rechargeDataFinal?.stations || [];
  const abonnements = rechargeDataFinal?.abonnements || [];
  const typesBornes = rechargeDataFinal?.typesBornes || [];
  const tarifsBornes = rechargeDataFinal?.tarifsBornes || [];

  // Composant Modal Station
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
                  <span>{station.localisation}</span>
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
            {/* KPIs Station */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-green-50 rounded-lg p-4">
                <div className="text-green-600 text-sm mb-1">Revenus/mois</div>
                <div className="text-2xl font-bold text-slate-900">{station.revenusEstimes}M</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="text-blue-600 text-sm mb-1">Bornes</div>
                <div className="text-2xl font-bold text-slate-900">{station.bornes}</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <div className="text-purple-600 text-sm mb-1">Utilisation</div>
                <div className="text-2xl font-bold text-slate-900">{station.tauxUtilisation}%</div>
              </div>
              <div className="bg-orange-50 rounded-lg p-4">
                <div className="text-orange-600 text-sm mb-1">Sessions/jour</div>
                <div className="text-2xl font-bold text-slate-900">{station.sessionsJour}</div>
              </div>
            </div>

            {/* Caracteristiques */}
            <div className="bg-slate-50 rounded-xl p-4">
              <h4 className="font-bold text-slate-900 mb-3">Caracteristiques</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Type de site</span>
                  <span className="font-semibold">{station.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Statut</span>
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                    {station.statut}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Date mise en service</span>
                  <span className="font-semibold">{station.dateMiseEnService}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Rendu Overview
  const renderOverview = () => (
    <div className="space-y-6">
      {/* KPIs Principaux */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <DollarSign className="h-8 w-8 opacity-80" />
            <TrendingUp className="h-6 w-6" />
          </div>
          <div className="text-3xl font-bold mb-1">
            {(kpis.revenusAnnuels / 1000).toFixed(1)}Mds
          </div>
          <div className="text-green-100 text-sm">Revenus Annuels</div>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <Zap className="h-8 w-8 opacity-80" />
            <Battery className="h-6 w-6" />
          </div>
          <div className="text-3xl font-bold mb-1">
            {kpis.chargesSessionJour.toLocaleString()}
          </div>
          <div className="text-blue-100 text-sm">Sessions / Jour</div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <BarChart3 className="h-8 w-8 opacity-80" />
            <TrendingUp className="h-6 w-6" />
          </div>
          <div className="text-3xl font-bold mb-1">{kpis.tauxUtilisation}%</div>
          <div className="text-purple-100 text-sm">Taux Utilisation</div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <Users className="h-8 w-8 opacity-80" />
            <ChevronRight className="h-6 w-6" />
          </div>
          <div className="text-3xl font-bold mb-1">
            {(kpis.chiffreAffaires / 1000).toFixed(1)}Mds
          </div>
          <div className="text-orange-100 text-sm">CA Total</div>
        </div>
      </div>

      {/* Stations */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <MapPin className="h-6 w-6 text-blue-600" />
          Reseau de Stations ({stations.length})
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {stations.map((station, idx) => (
            <div 
              key={idx}
              onClick={() => setSelectedStation(station)}
              className="border border-slate-200 rounded-lg p-4 hover:shadow-lg transition cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{station.nom}</h4>
                  <p className="text-xs text-slate-600">{station.localisation}</p>
                </div>
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                  {station.statut}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <div className="text-slate-600 text-xs">Revenus/mois</div>
                  <div className="font-bold text-green-600">{station.revenusEstimes}M</div>
                </div>
                <div>
                  <div className="text-slate-600 text-xs">Bornes</div>
                  <div className="font-bold text-blue-600">{station.bornes}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Abonnements */}
      {abonnements.length > 0 && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Users className="h-6 w-6 text-purple-600" />
            Formules d'Abonnement
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {abonnements.map((abo, idx) => (
              <div 
                key={idx}
                className="border-2 border-slate-200 rounded-lg p-4 hover:border-blue-500 transition"
              >
                <h4 className="font-bold text-slate-900 mb-2">{abo.nom}</h4>
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  {abo.prix.toLocaleString()} F
                </div>
                <div className="text-xs text-slate-600 mb-3">{abo.kWhInclus} kWh inclus</div>
                <div className="text-xs text-slate-500">
                  ARPU: {abo.arpuMensuel.toLocaleString()} F/mois
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  // Rendu Tarifs
  const renderTarifs = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-4">Grille Tarifaire</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {tarifsBornes.map((tarif, idx) => (
            <div key={idx} className="border border-slate-200 rounded-lg p-4">
              <h4 className="font-bold text-slate-900 mb-2">{tarif.type}</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Base</span>
                  <span className="font-semibold">{tarif.tarifBase} F/kWh</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Pointe</span>
                  <span className="font-semibold text-orange-600">{tarif.tarifPointe} F/kWh</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Creuse</span>
                  <span className="font-semibold text-green-600">{tarif.tarifCreuse} F/kWh</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Rendu Bornes
  const renderBornes = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-4">Types de Bornes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {typesBornes.map((borne, idx) => (
            <div key={idx} className="border-2 border-slate-200 rounded-lg p-4">
              <h4 className="font-bold text-slate-900 mb-2">{borne.nom}</h4>
              <div className="text-2xl font-bold text-blue-600 mb-3">{borne.puissance}</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Prix</span>
                  <span className="font-semibold">{borne.prix}M F</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Utilisation/jour</span>
                  <span className="font-semibold">{borne.utilisationJour}h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">ROI</span>
                  <span className="font-semibold text-green-600">{borne.roi} mois</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Rendu Tendances
  const renderTendances = () => (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-slate-900 mb-4">Tendances & Analytics</h3>
      <div className="text-center text-slate-500 py-12">
        <BarChart3 className="h-16 w-16 mx-auto mb-4 opacity-50" />
        <p>Section en cours de developpement</p>
      </div>
    </div>
  );

  // Rendu Insights
  const renderInsights = () => (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-slate-900 mb-4">Insights & Recommandations</h3>
      <div className="text-center text-slate-500 py-12">
        <AlertCircle className="h-16 w-16 mx-auto mb-4 opacity-50" />
        <p>Section en cours de developpement</p>
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', label: 'Vue d\'ensemble', icon: Home },
    { id: 'tarifs', label: 'Tarifs', icon: DollarSign },
    { id: 'bornes', label: 'Bornes', icon: Zap },
    { id: 'tendances', label: 'Tendances', icon: TrendingUp },
    { id: 'insights', label: 'Insights', icon: BarChart3 }
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'overview': return renderOverview();
      case 'tarifs': return renderTarifs();
      case 'bornes': return renderBornes();
      case 'tendances': return renderTendances();
      case 'insights': return renderInsights();
      default: return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => onNavigate && onNavigate('home')}
              className="flex items-center gap-3 hover:opacity-80 transition"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">Makaya Recharge</h1>
                <p className="text-xs text-slate-600">Reseau de Stations de Recharge</p>
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

          {/* Tabs */}
          <div className="flex overflow-x-auto gap-2 pb-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition ${
                    activeTab === tab.id
                      ? 'bg-green-500 text-white shadow-lg'
                      : 'bg-white text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {renderContent()}
      </main>

      {/* Modal Station */}
      {selectedStation && (
        <StationModal 
          station={selectedStation} 
          onClose={() => setSelectedStation(null)} 
        />
      )}
    </div>
  );
};

export default MakayaRecharge;
'@

    Set-Content -Path $rechargeFile -Value $newContent -Encoding UTF8
    Write-Log "MakayaRecharge.jsx mis a jour avec succes!" "Success"
    
    return $true
}

# Fonction principale
function Main {
    Write-Host ""
    Write-Host "=========================================================" -ForegroundColor Cyan
    Write-Host "      MAKAYA ENERGY - FUSION JURIDIQUE + MAJ RECHARGE" -ForegroundColor Cyan
    Write-Host "           Script de Fusion et Mise a Jour" -ForegroundColor Cyan
    Write-Host "                 Version 1.0.0" -ForegroundColor Cyan
    Write-Host "=========================================================" -ForegroundColor Cyan
    Write-Host ""
    
    # Verification prerequis
    Write-Log "Verification des prerequis..." "Step"
    
    if (-not (Test-Path $srcFolder)) {
        Write-Log "Dossier src/ introuvable!" "Error"
        return
    }
    
    if (-not (Test-Path $pagesFolder)) {
        Write-Log "Dossier src/pages/ introuvable!" "Error"
        return
    }
    
    Write-Log "Dossiers du projet trouves" "Success"
    
    # Creation des sauvegardes
    Backup-Files
    
    # Fusion BusinessPlanJuridique
    $juridiqueMerged = Merge-BusinessPlanJuridique
    
    # Mise a jour MakayaRecharge
    $rechargeMerged = Update-MakayaRecharge
    
    # Resultat final
    Write-Host ""
    Write-Host "=========================================================" -ForegroundColor Cyan
    Write-Host "                    RESULTAT FINAL" -ForegroundColor Cyan
    Write-Host "=========================================================" -ForegroundColor Cyan
    Write-Host ""
    
    if ($juridiqueMerged) {
        Write-Log "BusinessPlanJuridique.jsx fusionne avec succes" "Success"
    } else {
        Write-Log "Echec de la fusion de BusinessPlanJuridique.jsx" "Error"
    }
    
    if ($rechargeMerged) {
        Write-Log "MakayaRecharge.jsx mis a jour avec succes" "Success"
    } else {
        Write-Log "Echec de la mise a jour de MakayaRecharge.jsx" "Error"
    }
    
    Write-Host ""
    Write-Log "Sauvegardes creees dans: $backupFolder" "Info"
    Write-Host ""
    
    if ($juridiqueMerged -and $rechargeMerged) {
        Write-Host "=========================================================" -ForegroundColor Green
        Write-Host "          FUSION ET MISE A JOUR REUSSIES!" -ForegroundColor Green
        Write-Host "=========================================================" -ForegroundColor Green
        Write-Host ""
        Write-Log "Redemarrez l'application pour voir les changements:" "Info"
        Write-Host "    npm run dev" -ForegroundColor Yellow
        Write-Host ""
    } else {
        Write-Host "=========================================================" -ForegroundColor Red
        Write-Host "        CERTAINES OPERATIONS ONT ECHOUE" -ForegroundColor Red
        Write-Host "=========================================================" -ForegroundColor Red
        Write-Host ""
        Write-Log "Verifiez les erreurs ci-dessus" "Warning"
    }
}

# Execution
Main

Write-Host ""
Read-Host "Appuyez sur Entree pour fermer"
