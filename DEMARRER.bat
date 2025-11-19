@echo off
echo ========================================
echo   MAKAYA E-MOBILITY - Business Plan App
echo ========================================
echo.
echo Demarrage de l'application...
echo.

cd /d "%~dp0"

if not exist "node_modules" (
    echo Installation des dependances...
    echo Cela peut prendre quelques minutes...
    call npm install
    echo.
)

echo Lancement de l'application...
echo L'application s'ouvrira dans votre navigateur
echo.
echo Pour arreter l'application, appuyez sur Ctrl+C
echo.

call npm run dev

pause
