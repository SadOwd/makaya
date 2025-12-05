@echo off
echo ============================================
echo INTEGRATION CAHIER DES CHARGES - MAKAYA
echo ============================================
echo.

echo [1/4] Verification des fichiers de donnees...
if exist "cahier-charges\data\section1-presentation.js" (
    echo   ✓ Section 1 : Presentation
) else (
    echo   ✗ Section 1 manquante
    pause
    exit /b 1
)

if exist "cahier-charges\data\section2-specifications.js" (
    echo   ✓ Section 2 : Specifications
) else (
    echo   ✗ Section 2 manquante
    pause
    exit /b 1
)

if exist "cahier-charges\data\section7-budget.js" (
    echo   ✓ Section 7 : Budget
) else (
    echo   ✗ Section 7 manquante
    pause
    exit /b 1
)

if exist "cahier-charges\data\section8-economique.js" (
    echo   ✓ Section 8 : Modele Economique
) else (
    echo   ✗ Section 8 manquante
    pause
    exit /b 1
)

echo.
echo [2/4] Verification de l'application React...
if exist "src\MakayaRecharge.jsx" (
    echo   ✓ Application principale trouvee
) else if exist "MakayaRecharge.jsx" (
    echo   ✓ Application principale trouvee (racine)
) else (
    echo   ✗ Application principale introuvable
    pause
    exit /b 1
)

echo.
echo [3/4] Affichage du resume des donnees...
echo.
echo   INVESTISSEMENT TOTAL:
echo   - FCFA : 69 586 200 (~70 M FCFA)
echo   - USD  : 115 977 (~116 000 USD)
echo.
echo   REVENUS ANNEE 1:
echo   - FCFA : 170 820 000 (~171 M FCFA)
echo   - USD  : 284 700 (~285 000 USD)
echo.
echo   RENTABILITE:
echo   - ROI  : moins de 12 mois
echo   - TRI  : 180-200%%
echo   - Marge nette An 1 : 48%%
echo.
echo   TARIFS:
echo   - AC 21kW  : 300 FCFA/kWh (0.50 USD/kWh)
echo   - DC 60kW  : 400 FCFA/kWh (0.67 USD/kWh)
echo   - DC 120kW : 500 FCFA/kWh (0.83 USD/kWh)
echo.

echo [4/4] Instructions d'integration...
echo.
echo   Pour utiliser les donnees dans votre application React:
echo.
echo   1. Importer les donnees:
echo      import { presentationData, budgetData } from './cahier-charges/data/index.js';
echo.
echo   2. Utiliser dans les composants:
echo      const budget = budgetData.recapitulatif.totalInvestissementFCFA;
echo.
echo   3. Afficher les montants formates:
echo      import { formaterMontant } from './cahier-charges/data/index.js';
echo      formaterMontant(69586200, 'FCFA') // "69 586 200 FCFA"
echo.
echo   Voir README.md pour plus de details
echo.

echo ============================================
echo INTEGRATION TERMINEE AVEC SUCCES!
echo ============================================
echo.
echo Fichiers disponibles dans: cahier-charges\data\
echo Documentation complete dans: cahier-charges\README.md
echo.
pause
