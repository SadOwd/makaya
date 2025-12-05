# =========================================================================
# SCRIPT DE FUSION - App-BP-Enhanced-Full.jsx
# =========================================================================
# Ce script fusionne les deux parties du fichier App en un seul fichier
# =========================================================================

Write-Host "==========================================================================" -ForegroundColor Cyan
Write-Host "FUSION APP-BP-ENHANCED-FULL.JSX" -ForegroundColor Cyan
Write-Host "==========================================================================" -ForegroundColor Cyan
Write-Host ""

# Définir les chemins
$projectRoot = "C:\Users\mmawo\Desktop\E Mobility\APP MAKAYA"
$srcPath = Join-Path $projectRoot "src"
$part1Path = Join-Path $srcPath "App-BP-Enhanced-Full-PART1.jsx"
$part2Path = Join-Path $srcPath "App-BP-Enhanced-Full-PART2.jsx"
$outputPath = Join-Path $srcPath "App-BP-Enhanced-Full.jsx"
$backupPath = Join-Path $srcPath "App-BP-Enhanced-Full.backup.jsx"

Write-Host "📁 Dossier source : $srcPath" -ForegroundColor Gray
Write-Host ""

# Vérifier l'existence des fichiers
Write-Host "🔍 Vérification des fichiers..." -ForegroundColor Yellow
Write-Host ""

$filesOk = $true

if (Test-Path $part1Path) {
    $size1 = (Get-Item $part1Path).Length / 1KB
    Write-Host "   ✅ PART1 trouvé : $([math]::Round($size1, 2)) KB" -ForegroundColor Green
} else {
    Write-Host "   ❌ PART1 manquant : $part1Path" -ForegroundColor Red
    $filesOk = $false
}

if (Test-Path $part2Path) {
    $size2 = (Get-Item $part2Path).Length / 1KB
    Write-Host "   ✅ PART2 trouvé : $([math]::Round($size2, 2)) KB" -ForegroundColor Green
} else {
    Write-Host "   ❌ PART2 manquant : $part2Path" -ForegroundColor Red
    $filesOk = $false
}

Write-Host ""

if (-not $filesOk) {
    Write-Host "❌ ERREUR : Fichiers manquants" -ForegroundColor Red
    Write-Host ""
    Write-Host "Appuyez sur une touche pour quitter..." -ForegroundColor Gray
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit 1
}

# Créer une sauvegarde si le fichier existe déjà
if (Test-Path $outputPath) {
    Write-Host "💾 Création d'une sauvegarde..." -ForegroundColor Yellow
    Copy-Item $outputPath $backupPath -Force
    Write-Host "   ✅ Sauvegarde créée : App-BP-Enhanced-Full.backup.jsx" -ForegroundColor Green
    Write-Host ""
}

# Lire les deux parties
Write-Host "📖 Lecture des fichiers..." -ForegroundColor Yellow
Write-Host ""

try {
    $part1Content = Get-Content $part1Path -Raw -Encoding UTF8
    $part2Content = Get-Content $part2Path -Raw -Encoding UTF8
    
    Write-Host "   ✅ PART1 lu : $($part1Content.Length) caractères" -ForegroundColor Green
    Write-Host "   ✅ PART2 lu : $($part2Content.Length) caractères" -ForegroundColor Green
    Write-Host ""
} catch {
    Write-Host "   ❌ Erreur de lecture : $($_.Exception.Message)" -ForegroundColor Red
    Write-Host ""
    Write-Host "Appuyez sur une touche pour quitter..." -ForegroundColor Gray
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit 1
}

# Nettoyer PART1 (enlever les lignes de fin)
Write-Host "🧹 Nettoyage de PART1..." -ForegroundColor Yellow
$part1Content = $part1Content -replace "// ========================================[\r\n]+// FIN PARTIE 1/2[\r\n]+// ========================================[\r\n]*$", ""
Write-Host "   ✅ Nettoyage effectué" -ForegroundColor Green
Write-Host ""

# Nettoyer PART2 (enlever les lignes de début et de fin)
Write-Host "🧹 Nettoyage de PART2..." -ForegroundColor Yellow
$part2Content = $part2Content -replace "^// ========================================[\r\n]+// PARTIE 2/2 : RENDER VIEWS ET EXPORT[\r\n]+// ========================================[\r\n]+", ""
$part2Content = $part2Content -replace "[\r\n]+// ========================================[\r\n]+// FIN PARTIE 2/2[\r\n]+// ========================================[\r\n]*$", ""
Write-Host "   ✅ Nettoyage effectué" -ForegroundColor Green
Write-Host ""

# Fusionner
Write-Host "🔀 Fusion des parties..." -ForegroundColor Yellow
$finalContent = $part1Content + "`r`n`r`n" + $part2Content
Write-Host "   ✅ Fusion réussie : $($finalContent.Length) caractères" -ForegroundColor Green
Write-Host ""

# Écrire le fichier fusionné
Write-Host "💾 Écriture du fichier fusionné..." -ForegroundColor Yellow
try {
    $finalContent | Out-File -FilePath $outputPath -Encoding UTF8 -NoNewline
    $outputSize = (Get-Item $outputPath).Length / 1KB
    Write-Host "   ✅ Fichier écrit : $([math]::Round($outputSize, 2)) KB" -ForegroundColor Green
    Write-Host ""
} catch {
    Write-Host "   ❌ Erreur d'écriture : $($_.Exception.Message)" -ForegroundColor Red
    Write-Host ""
    Write-Host "Appuyez sur une touche pour quitter..." -ForegroundColor Gray
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit 1
}

# Afficher les statistiques
Write-Host "==========================================================================" -ForegroundColor Cyan
Write-Host "📊 STATISTIQUES" -ForegroundColor Cyan
Write-Host "==========================================================================" -ForegroundColor Cyan
Write-Host ""

$lines = ($finalContent -split "`r`n").Count
$imports = ([regex]::Matches($finalContent, "import")).Count
$components = ([regex]::Matches($finalContent, "const \w+Modal")).Count
$cases = ([regex]::Matches($finalContent, "case '[\w-]+':")).Count

Write-Host "   Lignes totales    : $lines" -ForegroundColor White
Write-Host "   Imports           : $imports" -ForegroundColor White
Write-Host "   Modals            : $components" -ForegroundColor White
Write-Host "   Cases (routes)    : $cases" -ForegroundColor White
Write-Host ""

# Vérifications
Write-Host "==========================================================================" -ForegroundColor Cyan
Write-Host "🔍 VÉRIFICATIONS" -ForegroundColor Cyan
Write-Host "==========================================================================" -ForegroundColor Cyan
Write-Host ""

$checks = @{
    "Import CahierCharges" = $finalContent -match "import CahierCharges"
    "Modal CahierCharges" = $finalContent -match "CahierChargesModal"
    "Case cahier-charges" = $finalContent -match "case 'cahier-charges':"
    "Navigation améliorée" = $finalContent -match "setShowCahierModal"
    "BookOpen icon" = $finalContent -match "BookOpen"
    "Export App" = $finalContent -match "export default App"
}

$allChecksOk = $true
foreach ($check in $checks.GetEnumerator()) {
    if ($check.Value) {
        Write-Host "   ✅ $($check.Key)" -ForegroundColor Green
    } else {
        Write-Host "   ❌ $($check.Key)" -ForegroundColor Red
        $allChecksOk = $false
    }
}

Write-Host ""

# Résultat final
Write-Host "==========================================================================" -ForegroundColor Cyan
if ($allChecksOk) {
    Write-Host "✅ FUSION RÉUSSIE !" -ForegroundColor Green
    Write-Host "==========================================================================" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "📁 Fichier créé : $outputPath" -ForegroundColor White
    Write-Host "💾 Sauvegarde   : $backupPath" -ForegroundColor Gray
    Write-Host ""
    Write-Host "🎯 PROCHAINES ÉTAPES :" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "   1. Testez l'application :" -ForegroundColor White
    Write-Host "      npm run dev" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "   2. Accédez au nouveau Cahier des Charges :" -ForegroundColor White
    Write-Host "      - Depuis la HomePage" -ForegroundColor Cyan
    Write-Host "      - Depuis Makaya Recharge" -ForegroundColor Cyan
    Write-Host "      - Via le modal info" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "   3. Fonctionnalités ajoutées :" -ForegroundColor White
    Write-Host "      ✅ Nouveau modal CahierCharges" -ForegroundColor Green
    Write-Host "      ✅ Navigation améliorée" -ForegroundColor Green
    Write-Host "      ✅ Boutons d'action rapides" -ForegroundColor Green
    Write-Host "      ✅ Interface responsive" -ForegroundColor Green
    Write-Host ""
} else {
    Write-Host "⚠️  FUSION AVEC AVERTISSEMENTS" -ForegroundColor Yellow
    Write-Host "==========================================================================" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Le fichier a été créé mais certaines vérifications ont échoué." -ForegroundColor Yellow
    Write-Host "Veuillez vérifier manuellement le contenu." -ForegroundColor Yellow
    Write-Host ""
}

Write-Host "==========================================================================" -ForegroundColor Cyan
Write-Host ""

# Option pour nettoyer les fichiers temporaires
Write-Host "Voulez-vous supprimer les fichiers PART1 et PART2 ? (O/N)" -ForegroundColor Yellow
$response = Read-Host

if ($response -eq "O" -or $response -eq "o") {
    try {
        Remove-Item $part1Path -Force
        Remove-Item $part2Path -Force
        Write-Host ""
        Write-Host "✅ Fichiers temporaires supprimés" -ForegroundColor Green
    } catch {
        Write-Host ""
        Write-Host "⚠️  Erreur lors de la suppression : $($_.Exception.Message)" -ForegroundColor Yellow
    }
} else {
    Write-Host ""
    Write-Host "ℹ️  Fichiers PART1 et PART2 conservés" -ForegroundColor Cyan
}

Write-Host ""
Write-Host "Appuyez sur une touche pour quitter..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

# =========================================================================
# FIN DU SCRIPT
# =========================================================================
