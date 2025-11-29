@echo off
chcp 65001 > nul
color 0A
title Fusion Version Complète avec Annexes

echo ========================================================
echo    FUSION VERSION COMPLÈTE - AVEC ANNEXES
echo ========================================================
echo.
echo Fusion de 9 parties + 8 annexes techniques...
echo.

cd /d "C:\Users\mmawo\Desktop\E Mobility\APP MAKAYA"

powershell -ExecutionPolicy Bypass -File "FUSIONNER_VERSION_COMPLETE.ps1"

echo.
echo ========================================================
pause
