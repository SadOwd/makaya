@echo off
chcp 65001 > nul
color 0E
title Nettoyage Projet Makaya

echo ╔═══════════════════════════════════════════════════════════════════════╗
echo ║         NETTOYAGE INTELLIGENT DU PROJET MAKAYA                       ║
echo ╚═══════════════════════════════════════════════════════════════════════╝
echo.
echo Ce script va analyser et nettoyer les fichiers inutiles.
echo.
echo OPTIONS DISPONIBLES:
echo   1. Simulation (aucune suppression)
echo   2. Nettoyage standard
echo   3. Nettoyage agressif (inclut backups)
echo   4. Annuler
echo.
set /p choice="Votre choix (1-4): "

cd /d "C:\Users\mmawo\Desktop\E Mobility\APP MAKAYA"

if "%choice%"=="1" (
    echo.
    echo 🔍 LANCEMENT EN MODE SIMULATION...
    echo.
    powershell -ExecutionPolicy Bypass -File "NETTOYER_PROJET.ps1" -DryRun
) else if "%choice%"=="2" (
    echo.
    echo ⚠️  ATTENTION: Les fichiers vont être SUPPRIMÉS!
    echo.
    set /p confirm="Confirmer (O/N): "
    if /i "%confirm%"=="O" (
        echo.
        echo 🗑️  NETTOYAGE EN COURS...
        echo.
        powershell -ExecutionPolicy Bypass -File "NETTOYER_PROJET.ps1"
    ) else (
        echo.
        echo ❌ Annulé
    )
) else if "%choice%"=="3" (
    echo.
    echo ⚠️  ATTENTION: NETTOYAGE AGRESSIF (inclut backups)!
    echo.
    set /p confirm="Confirmer (O/N): "
    if /i "%confirm%"=="O" (
        echo.
        echo 🗑️  NETTOYAGE AGRESSIF EN COURS...
        echo.
        powershell -ExecutionPolicy Bypass -File "NETTOYER_PROJET.ps1" -Aggressive
    ) else (
        echo.
        echo ❌ Annulé
    )
) else (
    echo.
    echo ❌ Annulé
)

echo.
echo ═══════════════════════════════════════════════════════════════════════
pause
