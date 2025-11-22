# Script PowerShell pour assembler rechargeDataFinal.js
# Exécuter dans PowerShell : .\assembler-recharge-data.ps1

Write-Host "🔋 ASSEMBLAGE RECHARGE DATA FINAL" -ForegroundColor Cyan
Write-Host "=================================" -ForegroundColor Cyan
Write-Host ""

$sourcePath = "C:\Users\mmawo\Desktop\E Mobility\APP MAKAYA\src\data"
$partie1 = Join-Path $sourcePath "rechargeDataFinal_PARTIE1.js"
$partie2 = Join-Path $sourcePath "rechargeDataFinal_PARTIE2.js"
$partie3 = Join-Path $sourcePath "rechargeDataFinal_PARTIE3.js"
$output = Join-Path $sourcePath "rechargeDataFinal.js"

Write-Host "📂 Vérification des fichiers sources..." -ForegroundColor Yellow

if (-not (Test-Path $partie1)) {
    Write-Host "❌ ERREUR: Partie 1 introuvable" -ForegroundColor Red
    exit 1
}
if (-not (Test-Path $partie2)) {
    Write-Host "❌ ERREUR: Partie 2 introuvable" -ForegroundColor Red
    exit 1
}
if (-not (Test-Path $partie3)) {
    Write-Host "❌ ERREUR: Partie 3 introuvable" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Toutes les parties trouvées" -ForegroundColor Green
Write-Host ""

Write-Host "🔨 Assemblage en cours..." -ForegroundColor Yellow

# Lire les contenus
$contenu1 = Get-Content $partie1 -Raw
$contenu2 = Get-Content $partie2 -Raw
$contenu3 = Get-Content $partie3 -Raw

# Nettoyer les en-têtes de commentaires des parties 2 et 3
$contenu2 = $contenu2 -replace '(?s)^//.*?\n\n', ''
$contenu3 = $contenu3 -replace '(?s)^//.*?\n\n', ''

# Assembler
$contenuFinal = $contenu1 + "`n" + $contenu2 + "`n" + $contenu3

# Écrire le fichier final
$contenuFinal | Out-File -FilePath $output -Encoding UTF8 -NoNewline

Write-Host "✅ Assemblage terminé !" -ForegroundColor Green
Write-Host ""

# Statistiques
$lignes = (Get-Content $output).Count
$taille = (Get-Item $output).Length / 1KB

Write-Host "📊 STATISTIQUES DU FICHIER FINAL" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host "📄 Fichier: rechargeDataFinal.js" -ForegroundColor White
Write-Host "📏 Lignes: $lignes" -ForegroundColor White
Write-Host "💾 Taille: $([math]::Round($taille, 2)) KB" -ForegroundColor White
Write-Host "📍 Chemin: $output" -ForegroundColor White
Write-Host ""

Write-Host "🎉 ASSEMBLAGE RÉUSSI !" -ForegroundColor Green
Write-Host ""
Write-Host "🚀 Prochaines étapes:" -ForegroundColor Yellow
Write-Host "   1. Vérifiez le fichier: rechargeDataFinal.js" -ForegroundColor White
Write-Host "   2. Testez l'app: npm run dev" -ForegroundColor White
Write-Host "   3. Vérifiez qu'il n'y a pas d'erreurs JavaScript" -ForegroundColor White
Write-Host ""
Write-Host "✨ Prêt pour la production !" -ForegroundColor Cyan
