# ============================================================
# SCRIPT DE FUSION - MakayaRecharge.jsx (3 PARTIES)
# ============================================================
# Auteur: Assistant Claude
# Date: 2025-11-23
# Description: Fusionne les 3 parties de MakayaRecharge.jsx
# ============================================================

Write-Host "`n╔═══════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║     FUSION MAKAYA RECHARGE - 3 PARTIES                    ║" -ForegroundColor Cyan
Write-Host "╚═══════════════════════════════════════════════════════════╝`n" -ForegroundColor Cyan

# Configuration des chemins
$projectRoot = $PSScriptRoot
$srcComponents = Join-Path $projectRoot "src\components"
$srcPages = Join-Path $projectRoot "src\pages"

$partie1 = Join-Path $srcComponents "MakayaRecharge_PARTIE1.jsx"
$partie2 = Join-Path $srcComponents "MakayaRecharge_PARTIE2.jsx"
$partie3 = Join-Path $srcComponents "MakayaRecharge_PARTIE3.jsx"
$outputFile = Join-Path $srcPages "MakayaRecharge.jsx"

Write-Host "📁 Répertoires:" -ForegroundColor Yellow
Write-Host "   Components: $srcComponents" -ForegroundColor Gray
Write-Host "   Pages: $srcPages" -ForegroundColor Gray
Write-Host ""

# Fonction de vérification
function Test-File {
    param($path, $nom)
    if (Test-Path $path) {
        Write-Host "✅ $nom trouvé" -ForegroundColor Green
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
$filesOk = $filesOk -and (Test-File $partie1 "PARTIE 1/3")
$filesOk = $filesOk -and (Test-File $partie2 "PARTIE 2/3")
$filesOk = $filesOk -and (Test-File $partie3 "PARTIE 3/3")

if (-not $filesOk) {
    Write-Host "`n❌ ERREUR: Fichiers sources manquants!" -ForegroundColor Red
    Write-Host "   Veuillez vous assurer que les 3 parties sont dans:" -ForegroundColor Yellow
    Write-Host "   $srcComponents" -ForegroundColor Gray
    exit 1
}

Write-Host ""

# Création sauvegarde
if (Test-Path $outputFile) {
    $timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
    $backupDir = Join-Path $projectRoot "backup_$timestamp"
    
    Write-Host "💾 Création sauvegarde..." -ForegroundColor Yellow
    New-Item -ItemType Directory -Path $backupDir -Force | Out-Null
    Copy-Item $outputFile -Destination (Join-Path $backupDir "MakayaRecharge.jsx")
    Write-Host "✅ Sauvegarde créée: $backupDir" -ForegroundColor Green
    Write-Host ""
}

# Fusion des fichiers
Write-Host "🔧 Fusion en cours..." -ForegroundColor Yellow
Write-Host ""

try {
    # Lecture des parties
    Write-Host "   📖 Lecture PARTIE 1/3..." -ForegroundColor Cyan
    $content1 = Get-Content $partie1 -Raw -Encoding UTF8
    
    Write-Host "   📖 Lecture PARTIE 2/3..." -ForegroundColor Cyan
    $content2 = Get-Content $partie2 -Raw -Encoding UTF8
    
    Write-Host "   📖 Lecture PARTIE 3/3..." -ForegroundColor Cyan
    $content3 = Get-Content $partie3 -Raw -Encoding UTF8
    
    # Nettoyage des marqueurs de partie
    $content1 = $content1 -replace "// FIN PARTIE 1/3.*", ""
    $content2 = $content2 -replace "// PARTIE 2/3.*`n", ""
    $content2 = $content2 -replace "// FIN PARTIE 2/3.*", ""
    $content3 = $content3 -replace "// PARTIE 3/3.*`n", ""
    
    # Assemblage
    Write-Host "   🔨 Assemblage des parties..." -ForegroundColor Cyan
    $finalContent = $content1.TrimEnd() + "`n`n" + $content2.TrimEnd() + "`n`n" + $content3.TrimEnd()
    
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
    Write-Host "   📄 Fichier: MakayaRecharge.jsx" -ForegroundColor Gray
    Write-Host "   📏 Taille: $fileSize KB" -ForegroundColor Gray
    Write-Host "   📝 Lignes: $lineCount" -ForegroundColor Gray
    Write-Host "   📍 Emplacement: $outputFile" -ForegroundColor Gray
    Write-Host ""
    
    Write-Host "✨ Composants inclus:" -ForegroundColor Yellow
    Write-Host "   ✅ Imports et configuration" -ForegroundColor Green
    Write-Host "   ✅ Composants KPI, Station, Modal Station" -ForegroundColor Green
    Write-Host "   ✅ Modal Abonnement avec détails" -ForegroundColor Green
    Write-Host "   ✅ Section Vue d'Ensemble" -ForegroundColor Green
    Write-Host "   ✅ Section Types de Bornes" -ForegroundColor Green
    Write-Host "   ✅ Section Abonnements" -ForegroundColor Green
    Write-Host "   ✅ Section Tendances avec graphiques" -ForegroundColor Green
    Write-Host "   ✅ Section Insights du marché" -ForegroundColor Green
    Write-Host "   ✅ Navigation par onglets" -ForegroundColor Green
    Write-Host ""
    
    Write-Host "🎯 Prochaines étapes:" -ForegroundColor Yellow
    Write-Host "   1. Lancez: npm run dev" -ForegroundColor Cyan
    Write-Host "   2. Visitez: Makaya Recharge dans l'application" -ForegroundColor Cyan
    Write-Host "   3. Testez les modals en cliquant sur:" -ForegroundColor Cyan
    Write-Host "      • Les stations (détails + bornes)" -ForegroundColor Gray
    Write-Host "      • Les abonnements (offres complètes)" -ForegroundColor Gray
    Write-Host "   4. Explorez tous les onglets!" -ForegroundColor Cyan
    Write-Host ""
    
    Write-Host "🚀 Le fichier MakayaRecharge.jsx est prêt!" -ForegroundColor Green
    Write-Host ""
    
} catch {
    Write-Host ""
    Write-Host "❌ ERREUR lors de la fusion:" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    Write-Host ""
    exit 1
}

# Pause pour permettre la lecture
Write-Host "Appuyez sur une touche pour continuer..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
