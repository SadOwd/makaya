@echo off
chcp 65001 >nul
title Fusion MakayaRecharge.jsx (3 parties)

echo.
echo ╔═══════════════════════════════════════════════════════════╗
echo ║     FUSION MAKAYA RECHARGE - LANCEUR RAPIDE              ║
echo ╚═══════════════════════════════════════════════════════════╝
echo.
echo 🚀 Lancement du script de fusion...
echo.

PowerShell.exe -ExecutionPolicy Bypass -File "%~dp0FUSIONNER_MAKAYA_RECHARGE.ps1"

echo.
echo ✅ Script terminé!
echo.
pause
