@echo off
chcp 65001 >nul
echo ============================================================
echo   SUPPRESSION ANCIEN CAHIER DES CHARGES
echo ============================================================
echo.
echo Ce script va supprimer l'ancien dossier "cahier-charges"
echo contenant les anciennes données (69.6M FCFA, 525 kW).
echo.
echo Le nouveau composant avec les données Alpitronic 
echo (163M FCFA, 350 kW) est dans src/components/CahierCharges/
echo.
echo ============================================================
echo.

pause

echo.
echo Suppression du dossier cahier-charges...
if exist "%~dp0cahier-charges" (
    rmdir /s /q "%~dp0cahier-charges"
    if errorlevel 1 (
        echo [ERREUR] Impossible de supprimer le dossier
        echo Assurez-vous qu'aucun fichier n'est ouvert
        pause
        exit /b 1
    ) else (
        echo [OK] Dossier cahier-charges supprimé avec succès !
    )
) else (
    echo [INFO] Le dossier cahier-charges n'existe pas ou a déjà été supprimé
)

echo.
echo ============================================================
echo   SUPPRESSION TERMINÉE
echo ============================================================
echo.
echo Prochaines étapes :
echo 1. Redémarrer le serveur Vite : npm run dev
echo 2. Rafraîchir le navigateur : Ctrl + Shift + R
echo 3. Vérifier que les nouvelles données s'affichent
echo.
echo ============================================================
echo.

pause
