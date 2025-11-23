@echo off
echo.
echo ========================================================
echo    MAKAYA ENERGY - DEPLOIEMENT SECTION JURIDIQUE
echo ========================================================
echo.
echo Ce script va deployer automatiquement la section
echo juridique dans l'application Business Plan.
echo.
echo Duree estimee : 2-3 minutes
echo.
pause

echo.
echo Lancement du script PowerShell...
echo.

PowerShell.exe -ExecutionPolicy Bypass -File "%~dp0DEPLOYER_JURIDIQUE.ps1"

echo.
echo ========================================================
echo                  DEPLOIEMENT TERMINE
echo ========================================================
echo.
pause
