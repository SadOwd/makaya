# ============================================================
# SCRIPT DE CORRECTION - MakayaMobility.jsx
# ============================================================
# Description: Fusionne les 3 parties FIXED et corrige le fichier
# ============================================================

Write-Host "`n╔═══════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║     CORRECTION MAKAYA MOBILITY - VERSION FIXÉE           ║" -ForegroundColor Cyan
Write-Host "╚═══════════════════════════════════════════════════════════╝`n" -ForegroundColor Cyan

$projectRoot = $PSScriptRoot
$srcComponents = Join-Path $projectRoot "src\components"
$srcPages = Join-Path $projectRoot "src\pages"

$partie1 = Join-Path $srcComponents "MakayaMobility_PARTIE1_FIXED.jsx"
$partie2 = Join-Path $srcComponents "MakayaMobility_PARTIE2_FIXED.jsx"
$partie3 = Join-Path $srcComponents "MakayaMobility_PARTIE3_FIXED.jsx"
$outputFile = Join-Path $srcPages "MakayaMobility.jsx"

Write-Host "📁 Configuration:" -ForegroundColor Yellow
Write-Host "   Components: $srcComponents" -ForegroundColor Gray
Write-Host "   Pages: $srcPages" -ForegroundColor Gray
Write-Host ""

# Vérification des fichiers
Write-Host "🔍 Vérification des fichiers sources..." -ForegroundColor Yellow
Write-Host ""

$filesOk = $true
foreach ($file in @($partie1, $partie2, $partie3)) {
    if (Test-Path $file) {
        $size = [math]::Round((Get-Item $file).Length / 1KB, 2)
        Write-Host "✅ $(Split-Path $file -Leaf) ($size KB)" -ForegroundColor Green
    } else {
        Write-Host "❌ $(Split-Path $file -Leaf) introuvable" -ForegroundColor Red
        $filesOk = $false
    }
}

if (-not $filesOk) {
    Write-Host "`n❌ ERREUR: Fichiers sources manquants!" -ForegroundColor Red
    pause
    exit 1
}

Write-Host ""

# Sauvegarde
if (Test-Path $outputFile) {
    $timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
    $backupDir = Join-Path $projectRoot "backup_mobility_fix_$timestamp"
    
    Write-Host "💾 Création sauvegarde..." -ForegroundColor Yellow
    New-Item -ItemType Directory -Path $backupDir -Force | Out-Null
    Copy-Item $outputFile -Destination (Join-Path $backupDir "MakayaMobility.jsx")
    Write-Host "✅ Sauvegarde créée: $backupDir" -ForegroundColor Green
    Write-Host ""
}

# Fusion
Write-Host "🔧 Fusion des 3 parties corrigées..." -ForegroundColor Yellow
Write-Host ""

try {
    Write-Host "   📖 Lecture PARTIE 1 (Imports + Composants)..." -ForegroundColor Cyan
    $content1 = Get-Content $partie1 -Raw -Encoding UTF8
    
    Write-Host "   📖 Lecture PARTIE 2 (Sections rendu)..." -ForegroundColor Cyan
    $content2 = Get-Content $partie2 -Raw -Encoding UTF8
    
    Write-Host "   📖 Lecture PARTIE 3 (Rendu principal)..." -ForegroundColor Cyan
    $content3 = Get-Content $partie3 -Raw -Encoding UTF8
    
    # Nettoyage
    $content1 = $content1 -replace "// FIN PARTIE 1/3.*", ""
    $content2 = $content2 -replace "// PARTIE 2/3.*`n", ""
    $content2 = $content2 -replace "// FIN PARTIE 2/3.*", ""
    $content3 = $content3 -replace "// PARTIE 3/3.*`n", ""
    
    # Assemblage
    Write-Host "   🔨 Assemblage..." -ForegroundColor Cyan
    $finalContent = $content1.TrimEnd() + "`n`n" + $content2.TrimEnd() + "`n`n" + $content3.TrimEnd()
    
    # Écriture
    Write-Host "   💾 Écriture fichier final..." -ForegroundColor Cyan
    $finalContent | Out-File -FilePath $outputFile -Encoding UTF8 -NoNewline
    
    Write-Host ""
    Write-Host "╔═══════════════════════════════════════════════════════════╗" -ForegroundColor Green
    Write-Host "║            ✅ CORRECTION RÉUSSIE !                        ║" -ForegroundColor Green
    Write-Host "╚═══════════════════════════════════════════════════════════╝" -ForegroundColor Green
    Write-Host ""
    
    # Stats
    $fileInfo = Get-Item $outputFile
    $fileSize = [math]::Round($fileInfo.Length / 1KB, 2)
    $lineCount = (Get-Content $outputFile | Measure-Object -Line).Lines
    
    Write-Host "📊 Statistiques:" -ForegroundColor Yellow
    Write-Host "   📄 Fichier: MakayaMobility.jsx" -ForegroundColor Gray
    Write-Host "   📏 Taille: $fileSize KB" -ForegroundColor Gray
    Write-Host "   📝 Lignes: $lineCount" -ForegroundColor Gray
    Write-Host "   📍 Emplacement: $outputFile" -ForegroundColor Gray
    Write-Host ""
    
    Write-Host "✨ Version corrigée:" -ForegroundColor Yellow
    Write-Host "   ✅ 3 onglets: Vente EV, LLD, SAV" -ForegroundColor Green
    Write-Host "   ✅ Modals véhicules et formules LLD" -ForegroundColor Green
    Write-Host "   ✅ Graphiques ventes et répartition" -ForegroundColor Green
    Write-Host "   ✅ KPIs dashboard (4 cartes)" -ForegroundColor Green
    Write-Host "   ✅ Catalogue véhicules complet" -ForegroundColor Green
    Write-Host "   ✅ Services SAV listés" -ForegroundColor Green
    Write-Host ""
    
    Write-Host "🎯 Prochaines étapes:" -ForegroundColor Yellow
    Write-Host "   1. Lancez: npm run dev" -ForegroundColor Cyan
    Write-Host "   2. Visitez: Makaya Mobility" -ForegroundColor Cyan
    Write-Host "   3. Testez les 3 onglets" -ForegroundColor Cyan
    Write-Host "   4. Cliquez sur véhicules et formules LLD" -ForegroundColor Cyan
    Write-Host ""
    
    Write-Host "🚀 Le fichier corrigé est prêt!" -ForegroundColor Green
    Write-Host ""
    
} catch {
    Write-Host ""
    Write-Host "❌ ERREUR lors de la fusion:" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    Write-Host ""
    pause
    exit 1
}

Write-Host "Appuyez sur une touche pour continuer..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
