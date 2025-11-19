@echo off
echo ========================================
echo NETTOYAGE FICHIERS INUTILES - MAKAYA APP
echo ========================================
echo.

REM Supprimer tous les fichiers .md inutiles (garder seulement README.md et PROJET_FINAL_COMPLETE.md)
del /Q "AMELIORATIONS_BP_v4.0.md" 2>nul
del /Q "CHANGELOG.md" 2>nul
del /Q "CHECKLIST_COMPLETE.md" 2>nul
del /Q "CONFIGURATION.md" 2>nul
del /Q "DESIGN_PREMIUM_GUIDE.md" 2>nul
del /Q "GUIDE_FINAL_COMPLET.md" 2>nul
del /Q "GUIDE_RAPIDE_BP.md" 2>nul
del /Q "GUIDE_SIMPLE_MAINTENANT.md" 2>nul
del /Q "GUIDE_UTILISATION.md" 2>nul
del /Q "GUIDE_UTILISATION_RAPIDE.md" 2>nul
del /Q "INDEX_COMPLET.md" 2>nul
del /Q "INSTALLATION_COMPLETE.md" 2>nul
del /Q "LANCER_BP_MAKAYA.md" 2>nul
del /Q "PHASE_2_COMPLETE.md" 2>nul
del /Q "PHASE_3_COMPLETE.md" 2>nul
del /Q "README-NEW.md" 2>nul
del /Q "README_FINAL_100.md" 2>nul
del /Q "RECAP_FINAL.md" 2>nul
del /Q "RECAP_FINAL_COMPLET.md" 2>nul
del /Q "RECAP_FINAL_V5.md" 2>nul
del /Q "RECAP_INSTALLATION_BP.md" 2>nul
del /Q "UPDATE_CONCURRENCE.md" 2>nul

REM Supprimer fichiers .txt inutiles
del /Q "APPLICATION_CORRIGEE.txt" 2>nul
del /Q "DEMARRAGE_RAPIDE.txt" 2>nul
del /Q "DEMARRAGE_SIMPLE.txt" 2>nul
del /Q "DESIGN_PREMIUM_SUCCESS.txt" 2>nul
del /Q "PHASE_1_COMPLETE.txt" 2>nul
del /Q "PROJET_TERMINE_SUCCESS.txt" 2>nul

REM Supprimer fichiers .bat inutiles (garder seulement DEMARRER.bat et ce script)
del /Q "ACTIVER_DESIGN_PREMIUM.bat" 2>nul
del /Q "ACTIVER_V5_ENHANCED.bat" 2>nul
del /Q "CONFIGURER_BP.bat" 2>nul
del /Q "INFO_DESIGN.bat" 2>nul
del /Q "INFO_PHASE_2.bat" 2>nul
del /Q "INFO_PROJET_V5.bat" 2>nul
del /Q "LANCER_BP.bat" 2>nul
del /Q "MOBILITY_COMPLETE.bat" 2>nul
del /Q "STATUS_FINAL.bat" 2>nul
del /Q "UPDATE_BP_ENHANCED.bat" 2>nul
del /Q "test.bat" 2>nul
del /Q "test.sh" 2>nul

echo.
echo ✅ Nettoyage terminé !
echo.
echo Fichiers conservés:
echo - README.md
echo - PROJET_FINAL_COMPLETE.md
echo - DEMARRER.bat
echo - NETTOYER_FICHIERS.bat
echo - Tous les fichiers source (src/)
echo - Configuration (package.json, vite.config.js, etc.)
echo.
pause
