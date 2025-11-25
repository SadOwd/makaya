# ============================================================
# SCRIPT DE FUSION - MakayaMobility.jsx (4 PARTIES)
# ============================================================
# Auteur: Assistant Claude
# Date: 2025-11-24
# Description: Fusionne les 4 parties de MakayaMobility.jsx
# avec toutes les fonctionnalités Premium
# ============================================================

Write-Host "`n╔═══════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║   FUSION MAKAYA MOBILITY PREMIUM - 4 PARTIES             ║" -ForegroundColor Cyan
Write-Host "╚═══════════════════════════════════════════════════════════╝`n" -ForegroundColor Cyan

# Configuration des chemins
$projectRoot = $PSScriptRoot
$srcComponents = Join-Path $projectRoot "src\components"
$srcPages = Join-Path $projectRoot "src\pages"

$partie1 = Join-Path $srcComponents "MakayaMobility_PARTIE1.jsx"
$partie2 = Join-Path $srcComponents "MakayaMobility_PARTIE2.jsx"
$partie3 = Join-Path $srcComponents "MakayaMobility_PARTIE3.jsx"
$partie4 = Join-Path $srcComponents "MakayaMobility_PARTIE4.jsx"
$outputFile = Join-Path $srcPages "MakayaMobility.jsx"

Write-Host "📁 Répertoires:" -ForegroundColor Yellow
Write-Host "   Components: $srcComponents" -ForegroundColor Gray
Write-Host "   Pages: $srcPages" -ForegroundColor Gray
Write-Host ""

# Fonction de vérification
function Test-File {
    param($path, $nom)
    if (Test-Path $path) {
        $size = [math]::Round((Get-Item $path).Length / 1KB, 2)
        Write-Host "✅ $nom trouvé ($size KB)" -ForegroundColor Green
        return $true
    } else {
        Write-Host "❌ $nom introuvable: $path" -ForegroundColor Red
        return $false
    }
}

# Vérification des fichiers sources
Write-Host "🔍 Vérification des fichiers sources..." -ForegroundColor Yellow
Write-Host ""

$filesOk = $true
$filesOk = $filesOk -and (Test-File $partie1 "PARTIE 1/4")
$filesOk = $filesOk -and (Test-File $partie2 "PARTIE 2/4")
$filesOk = $filesOk -and (Test-File $partie3 "PARTIE 3/4")
$filesOk = $filesOk -and (Test-File $partie4 "PARTIE 4/4")

if (-not $filesOk) {
    Write-Host "`n❌ ERREUR: Fichiers sources manquants!" -ForegroundColor Red
    Write-Host "   Veuillez vous assurer que les 4 parties sont dans:" -ForegroundColor Yellow
    Write-Host "   $srcComponents" -ForegroundColor Gray
    pause
    exit 1
}

Write-Host ""

# Création sauvegarde
if (Test-Path $outputFile) {
    $timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
    $backupDir = Join-Path $projectRoot "backup_mobility_$timestamp"
    
    Write-Host "💾 Création sauvegarde..." -ForegroundColor Yellow
    New-Item -ItemType Directory -Path $backupDir -Force | Out-Null
    Copy-Item $outputFile -Destination (Join-Path $backupDir "MakayaMobility.jsx")
    Write-Host "✅ Sauvegarde créée: $backupDir" -ForegroundColor Green
    Write-Host ""
}

# Fusion des fichiers
Write-Host "🔧 Fusion en cours..." -ForegroundColor Yellow
Write-Host ""

try {
    # Lecture des parties
    Write-Host "   📖 Lecture PARTIE 1/4 (Imports + Base)..." -ForegroundColor Cyan
    $content1 = Get-Content $partie1 -Raw -Encoding UTF8
    
    Write-Host "   📖 Lecture PARTIE 2/4 (Modals + Composants)..." -ForegroundColor Cyan
    $content2 = Get-Content $partie2 -Raw -Encoding UTF8
    
    Write-Host "   📖 Lecture PARTIE 3/4 (Sections)..." -ForegroundColor Cyan
    $content3 = Get-Content $partie3 -Raw -Encoding UTF8
    
    Write-Host "   📖 Lecture PARTIE 4/4 (Sections + Rendu)..." -ForegroundColor Cyan
    $content4 = Get-Content $partie4 -Raw -Encoding UTF8
    
    # Nettoyage des marqueurs de partie
    $content1 = $content1 -replace "// FIN PARTIE 1/4.*", ""
    $content2 = $content2 -replace "// PARTIE 2/4.*`n", ""
    $content2 = $content2 -replace "// FIN PARTIE 2/4.*", ""
    $content3 = $content3 -replace "// PARTIE 3/4.*`n", ""
    $content3 = $content3 -replace "// FIN PARTIE 3/4.*", ""
    $content4 = $content4 -replace "// PARTIE 4/4.*`n", ""
    
    # Assemblage
    Write-Host "   🔨 Assemblage des 4 parties..." -ForegroundColor Cyan
    $finalContent = $content1.TrimEnd() + "`n`n" + $content2.TrimEnd() + "`n`n" + $content3.TrimEnd() + "`n`n" + $content4.TrimEnd()
    
    # Écriture du fichier final
    Write-Host "   💾 Écriture fichier final..." -ForegroundColor Cyan
    $finalContent | Out-File -FilePath $outputFile -Encoding UTF8 -NoNewline
    
    Write-Host ""
    Write-Host "╔═══════════════════════════════════════════════════════════╗" -ForegroundColor Green
    Write-Host "║            ✅ FUSION RÉUSSIE !                            ║" -ForegroundColor Green
    Write-Host "╚═══════════════════════════════════════════════════════════╝" -ForegroundColor Green
    Write-Host ""
    
    # Statistiques
    $fileInfo = Get-Item $outputFile
    $fileSize = [math]::Round($fileInfo.Length / 1KB, 2)
    $lineCount = (Get-Content $outputFile | Measure-Object -Line).Lines
    
    Write-Host "📊 Statistiques du fichier fusionné:" -ForegroundColor Yellow
    Write-Host "   📄 Fichier: MakayaMobility.jsx" -ForegroundColor Gray
    Write-Host "   📏 Taille: $fileSize KB" -ForegroundColor Gray
    Write-Host "   📝 Lignes: $lineCount" -ForegroundColor Gray
    Write-Host "   📍 Emplacement: $outputFile" -ForegroundColor Gray
    Write-Host ""
    
    Write-Host "✨ Fonctionnalités Premium incluses:" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "   🎯 CATALOGUE INTELLIGENT" -ForegroundColor Cyan
    Write-Host "   ✅ Comparateur dynamique véhicules" -ForegroundColor Green
    Write-Host "   ✅ Recommandation automatique selon usage" -ForegroundColor Green
    Write-Host "   ✅ Calculateur économie carburant vs électrique" -ForegroundColor Green
    Write-Host "   ✅ 3D Viewer + couleurs disponibles" -ForegroundColor Green
    Write-Host "   ✅ Recherche et filtres avancés" -ForegroundColor Green
    Write-Host ""
    
    Write-Host "   📋 LLD 100% DIGITAL" -ForegroundColor Cyan
    Write-Host "   ✅ Configurateur en ligne (durée, kilométrage, options)" -ForegroundColor Green
    Write-Host "   ✅ Simulateur mensualité temps réel" -ForegroundColor Green
    Write-Host "   ✅ Signature électronique" -ForegroundColor Green
    Write-Host "   ✅ Paiement Wave/Flooz/TMoney" -ForegroundColor Green
    Write-Host "   ✅ Délai 48h objectif" -ForegroundColor Green
    Write-Host ""
    
    Write-Host "   🚛 FLEET MANAGER B2B" -ForegroundColor Cyan
    Write-Host "   ✅ Suivi GPS temps réel" -ForegroundColor Green
    Write-Host "   ✅ État batteries flotte" -ForegroundColor Green
    Write-Host "   ✅ Maintenance prédictive" -ForegroundColor Green
    Write-Host "   ✅ Tableaux ESG (CO₂ économisé)" -ForegroundColor Green
    Write-Host "   ✅ Optimisation trajets & coûts" -ForegroundColor Green
    Write-Host ""
    
    Write-Host "   🔧 SAV 2.0" -ForegroundColor Cyan
    Write-Host "   ✅ Diagnostic à distance (OBD)" -ForegroundColor Green
    Write-Host "   ✅ Intervention mobile" -ForegroundColor Green
    Write-Host "   ✅ Maintenance prédictive avec alertes" -ForegroundColor Green
    Write-Host "   ✅ Délai réduit à 72h" -ForegroundColor Green
    Write-Host ""
    
    Write-Host "   🛒 MARKETPLACE PIÈCES" -ForegroundColor Cyan
    Write-Host "   ✅ Batteries, pneus, chargeurs, câbles" -ForegroundColor Green
    Write-Host "   ✅ Paiement en ligne" -ForegroundColor Green
    Write-Host "   ✅ Livraison rapide" -ForegroundColor Green
    Write-Host "   ✅ Vérification compatibilité auto" -ForegroundColor Green
    Write-Host ""
    
    Write-Host "   🏆 MAKAYA CERTIFIED" -ForegroundColor Cyan
    Write-Host "   ✅ 150 points de contrôle" -ForegroundColor Green
    Write-Host "   ✅ Garantie 6-24 mois" -ForegroundColor Green
    Write-Host "   ✅ Historique batterie transparent" -ForegroundColor Green
    Write-Host "   ✅ Marché secondaire EV structuré" -ForegroundColor Green
    Write-Host ""
    
    Write-Host "   📦 BUNDLES EV+RECHARGE" -ForegroundColor Cyan
    Write-Host "   ✅ Pack Particulier (véhicule + wallbox)" -ForegroundColor Green
    Write-Host "   ✅ Pack Entreprise (flotte + bornes + logiciel)" -ForegroundColor Green
    Write-Host "   ✅ Pack Long-terme (LLD + recharge illimitée)" -ForegroundColor Green
    Write-Host ""
    
    Write-Host "   📊 ANALYTICS CENTER" -ForegroundColor Cyan
    Write-Host "   ✅ Données temps réel" -ForegroundColor Green
    Write-Host "   ✅ Autonomie réelle par modèle" -ForegroundColor Green
    Write-Host "   ✅ Pannes récurrentes tracking" -ForegroundColor Green
    Write-Host "   ✅ Rentabilité LLD analyse" -ForegroundColor Green
    Write-Host ""
    
    Write-Host "   💎 EXTRAS" -ForegroundColor Cyan
    Write-Host "   ✅ Programme fidélité Makaya+" -ForegroundColor Green
    Write-Host "   ✅ Certificat CO₂ pour entreprises" -ForegroundColor Green
    Write-Host "   ✅ API publique Makaya Connect" -ForegroundColor Green
    Write-Host "   ✅ Cartographie intelligente (Google Maps)" -ForegroundColor Green
    Write-Host ""
    
    Write-Host "🎯 Prochaines étapes:" -ForegroundColor Yellow
    Write-Host "   1. Lancez: npm run dev" -ForegroundColor Cyan
    Write-Host "   2. Visitez: Makaya Mobility dans l'application" -ForegroundColor Cyan
    Write-Host "   3. Testez tous les onglets (8 sections):" -ForegroundColor Cyan
    Write-Host "      • Catalogue Intelligent" -ForegroundColor Gray
    Write-Host "      • LLD 100% Digital" -ForegroundColor Gray
    Write-Host "      • Fleet Manager B2B" -ForegroundColor Gray
    Write-Host "      • SAV 2.0" -ForegroundColor Gray
    Write-Host "      • Marketplace Pièces" -ForegroundColor Gray
    Write-Host "      • Makaya Certified" -ForegroundColor Gray
    Write-Host "      • Bundles EV+Recharge" -ForegroundColor Gray
    Write-Host "      • Analytics" -ForegroundColor Gray
    Write-Host "   4. Explorez les modals enrichis!" -ForegroundColor Cyan
    Write-Host ""
    
    Write-Host "🚀 MakayaMobility Premium est prêt!" -ForegroundColor Green
    Write-Host ""
    
} catch {
    Write-Host ""
    Write-Host "❌ ERREUR lors de la fusion:" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    Write-Host ""
    pause
    exit 1
}

# Pause pour permettre la lecture
Write-Host "Appuyez sur une touche pour continuer..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
