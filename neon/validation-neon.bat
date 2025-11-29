@echo off
chcp 65001 >nul
echo ╔════════════════════════════════════════════════════════════════╗
echo ║                                                                ║
echo ║     🔍 VALIDATION DE L'INTÉGRITÉ - NEON INTERFACE 🔍          ║
echo ║                                                                ║
echo ╚════════════════════════════════════════════════════════════════╝
echo.

REM Vérifier si Node.js est installé
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERREUR] Node.js n'est pas installé ou n'est pas dans le PATH
    echo.
    echo Pour installer Node.js :
    echo 1. Visitez : https://nodejs.org/
    echo 2. Téléchargez la version LTS
    echo 3. Installez et redémarrez ce script
    echo.
    pause
    exit /b 1
)

echo [INFO] Node.js détecté
node --version
echo.

REM Exécuter le script de validation
echo [INFO] Lancement de la validation...
echo.
node "%~dp0validate-neon-files.js"

REM Récupérer le code de sortie
set VALIDATION_CODE=%ERRORLEVEL%

echo.
echo ════════════════════════════════════════════════════════════════
echo.

if %VALIDATION_CODE% EQU 0 (
    echo ✅ VALIDATION RÉUSSIE !
    echo Tous les fichiers sont présents et valides.
    echo.
    echo 💡 Vous pouvez maintenant :
    echo    1. Exécuter fusion-neon.bat pour fusionner les fichiers
    echo    2. Ouvrir index-demo.html pour tester
    echo.
) else (
    echo ⚠️ VALIDATION ÉCHOUÉE
    echo Certains fichiers sont manquants ou invalides.
    echo Consultez les détails ci-dessus.
    echo.
)

echo ════════════════════════════════════════════════════════════════
echo.
pause
