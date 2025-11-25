@echo off
chcp 65001 >nul
title Fusion MakayaMobility Premium (4 parties)

echo.
echo ╔═══════════════════════════════════════════════════════════╗
echo ║   FUSION MAKAYA MOBILITY PREMIUM - LANCEUR RAPIDE        ║
echo ╚═══════════════════════════════════════════════════════════╝
echo.
echo 🚀 Lancement du script de fusion...
echo.
echo ✨ Fonctionnalités Premium incluses:
echo    • Catalogue Intelligent avec comparateur
echo    • LLD 100%% Digital
echo    • Fleet Manager B2B
echo    • SAV 2.0 avec diagnostic à distance
echo    • Marketplace Pièces Détachées
echo    • Programme Makaya Certified
echo    • Bundles EV+Recharge
echo    • Analytics Center
echo.

PowerShell.exe -ExecutionPolicy Bypass -File "%~dp0FUSIONNER_MAKAYA_MOBILITY.ps1"

echo.
echo ✅ Script terminé!
echo.
pause
