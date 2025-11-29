@echo off
echo ========================================
echo  FUSION NEON INTERFACE - SCRIPT WINDOWS
echo ========================================
echo.

REM Vérifier si Node.js est installé
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERREUR] Node.js n'est pas installe ou n'est pas dans le PATH
    echo Veuillez installer Node.js depuis https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo [INFO] Node.js detecte
node --version
echo.

REM Exécuter le script de fusion
echo [INFO] Lancement de la fusion...
echo.
node "%~dp0merge-neon-interface.js"

echo.
echo ========================================
echo.
pause
