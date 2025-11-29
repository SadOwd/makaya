# ╔═══════════════════════════════════════════════════════════════════════╗
# ║           SCRIPT DE NETTOYAGE INTELLIGENT - MAKAYA APP               ║
# ║                    Analyse et suppression sécurisée                   ║
# ╚═══════════════════════════════════════════════════════════════════════╝

param(
    [switch]$DryRun = $false,  # Mode simulation (ne supprime rien)
    [switch]$Aggressive = $false  # Nettoyage agressif (plus de fichiers)
)

$workDir = "C:\Users\mmawo\Desktop\E Mobility\APP MAKAYA"
Set-Location $workDir

Write-Host "╔═══════════════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║         NETTOYAGE INTELLIGENT DU PROJET MAKAYA                       ║" -ForegroundColor Cyan
Write-Host "╚═══════════════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

if ($DryRun) {
    Write-Host "🔍 MODE SIMULATION - Aucun fichier ne sera supprimé" -ForegroundColor Yellow
    Write-Host ""
}

# ═════════════════════════════════════════════════════════════════════════
# CATÉGORIES DE FICHIERS À CONSERVER
# ═════════════════════════════════════════════════════════════════════════

$fichiersEssentiels = @(
    # Configuration projet
    "package.json",
    "package-lock.json",
    "vite.config.js",
    "postcss.config.js",
    "tailwind.config.js",
    ".gitignore",
    "index.html",
    
    # Composants principaux FINAUX
    "MakayaRecharge.jsx",
    "MakayaRecharge_PARTIE1_COMPLETE.jsx",
    "MakayaRecharge_PARTIE2.jsx",
    "MakayaRecharge_PARTIE3_FCFA.jsx",
    "MakayaRecharge_PARTIE4_FCFA.jsx",
    "MakayaRecharge_PARTIE5.jsx",
    "MakayaRecharge_PARTIE6.jsx",
    "MakayaRecharge_PARTIE7_TARIFS.jsx",
    "MakayaRecharge_PARTIE8_ANNEXES.jsx",
    "MakayaRecharge_PARTIE9_ANNEXES2.jsx",
    
    # Scripts de fusion FINAUX
    "FUSIONNER_VERSION_COMPLETE.bat",
    "FUSIONNER_VERSION_COMPLETE.ps1",
    
    # Guides essentiels
    "GUIDE_VERSION_COMPLETE_FINALE.md",
    "README.md",
    "DEMARRER.bat",
    
    # Données importantes
    "TARIFS_FINAUX_600_SESSIONS.md"
)

$dossierEssentiels = @(
    "src",
    "node_modules",
    "dist",
    ".git"
)

# ═════════════════════════════════════════════════════════════════════════
# CATÉGORIES DE FICHIERS À SUPPRIMER
# ═════════════════════════════════════════════════════════════════════════

$categoriesSupprimer = @{
    "Backups obsolètes" = @(
        "MakayaRecharge_BACKUP_*.jsx",
        "MakayaRecharge_FIXED_PART1.jsx"
    )
    
    "Parties obsolètes" = @(
        "MakayaRecharge_PARTIE1.jsx",
        "MakayaRecharge_PARTIE1_FCFA.jsx",
        "MakayaRecharge_PARTIE3.jsx",
        "MakayaRecharge_PARTIE4.jsx"
    )
    
    "Scripts de fusion obsolètes" = @(
        "FUSIONNER_MAKAYARECHARGE.bat",
        "FUSIONNER_MAKAYARECHARGE.ps1",
        "FUSIONNER_AVEC_TARIFS.bat",
        "FUSIONNER_AVEC_TARIFS.ps1",
        "FUSIONNER_MAKAYA_RECHARGE.bat",
        "FUSIONNER_MAKAYA_RECHARGE.ps1",
        "FUSIONNER_MAKAYA_MOBILITY.bat",
        "FUSIONNER_MAKAYA_MOBILITY.ps1",
        "FUSIONNER_CAHIER_CHARGE.bat",
        "FUSIONNER_CAHIER_CHARGE.ps1",
        "FUSIONNER_JURIDIQUE_ET_RECHARGE.bat",
        "FUSIONNER_JURIDIQUE_ET_RECHARGE.ps1",
        "MISE_A_JOUR_FCFA.bat",
        "MISE_A_JOUR_FCFA.ps1",
        "REPARER_MAKAYARECHARGE.bat",
        "REPARER_MAKAYARECHARGE.ps1",
        "CORRIGER_*.bat",
        "CORRIGER_*.ps1",
        "DEPLOYER_*.bat",
        "DEPLOYER_*.ps1",
        "AJOUTER_*.bat",
        "AJOUTER_*.ps1"
    )
    
    "Guides obsolètes/doublons" = @(
        "GUIDE_COMPLET_MAKAYARECHARGE.md",
        "GUIDE_COMPLET_AVEC_TARIFS.md",
        "GUIDE_FUSION_*.md",
        "GUIDE_INTEGRATION_*.md",
        "GUIDE_CORRECTION_*.md",
        "GUIDE_MIGRATION_*.md",
        "GUIDE_UTILISATION_*.md",
        "GUIDE_BOUTON_*.md",
        "GUIDE_MISE_A_JOUR_*.md",
        "GUIDE_REPARATION_*.md",
        "GUIDE_SCRIPT_*.md",
        "GUIDE_MAKAYA_*.md"
    )
    
    "Fichiers de statut obsolètes" = @(
        "STATUS_*.md",
        "STATUS_*.txt",
        "STATUT_*.md",
        "STATUT_*.txt",
        "EN_COURS_*.txt",
        "GENERATION_*.txt",
        "FUSION_*.txt"
    )
    
    "Récapitulatifs obsolètes" = @(
        "RECAPITULATIF_*.md",
        "SYNTHESE_*.md",
        "SYNTHESE_*.txt",
        "RECHARGE_*.md",
        "CELEBRATION_*.md",
        "PROJET_*.md",
        "LIVRAISON_*.md",
        "FINALISATION_*.md",
        "APPLICATION_*.md"
    )
    
    "Documentation redondante" = @(
        "ANALYSE*.md",
        "ANALYSE*.txt",
        "DIAGNOSTIC_*.md",
        "RAPPORT_*.md",
        "RAPPORT_*.txt",
        "AMELIORATIONS_*.md",
        "CORRECTIONS_*.md",
        "CORRECTION_*.md",
        "SOLUTION_*.md",
        "SECTION_*.md"
    )
    
    "Fichiers de déploiement" = @(
        "deploiement_*.log",
        "CHECKLIST_*.md",
        "TODO_*.md"
    )
    
    "Fichiers texte brouillons" = @(
        "*.txt"
    )
    
    "Fichiers MD divers" = @(
        "ACCES_RAPIDE_*.md",
        "AIDE_MEMOIRE.md",
        "DEMARRAGE_RAPIDE.md",
        "INDEX_DOCUMENTATION.md",
        "INTEGRATION_*.md",
        "START_*.md",
        "README_CAHIER_CHARGE.md",
        "README_DEMARRAGE.md",
        "README_SYSTEME_TARIFS.md",
        "FICHIERS_*.txt",
        "VISUAL_*.txt",
        "TARIFS_OPTIMISES_FINAL.md",
        "TARIFS_RESUME_EXECUTIF.md"
    )
}

# Catégories supplémentaires pour mode agressif
if ($Aggressive) {
    $categoriesSupprimer["Dossiers backup"] = @(
        "backup_*"
    )
}

# ═════════════════════════════════════════════════════════════════════════
# FONCTIONS
# ═════════════════════════════════════════════════════════════════════════

function Get-FichiersTaille {
    param($fichiers)
    $taille = 0
    foreach ($f in $fichiers) {
        if (Test-Path $f) {
            $taille += (Get-Item $f).Length
        }
    }
    return $taille
}

function Format-Taille {
    param($bytes)
    if ($bytes -gt 1MB) {
        return "{0:N2} MB" -f ($bytes / 1MB)
    } elseif ($bytes -gt 1KB) {
        return "{0:N2} KB" -f ($bytes / 1KB)
    } else {
        return "$bytes octets"
    }
}

# ═════════════════════════════════════════════════════════════════════════
# ANALYSE ET SUPPRESSION
# ═════════════════════════════════════════════════════════════════════════

$totalSupprime = 0
$tailleTotal = 0
$fichiersSupprimes = @()

Write-Host "📊 ANALYSE EN COURS..." -ForegroundColor Yellow
Write-Host ""

foreach ($categorie in $categoriesSupprimer.Keys) {
    Write-Host "═══════════════════════════════════════════════════════════" -ForegroundColor DarkGray
    Write-Host "📁 Catégorie: $categorie" -ForegroundColor Cyan
    Write-Host ""
    
    $patterns = $categoriesSupprimer[$categorie]
    $fichiersTrouves = @()
    
    foreach ($pattern in $patterns) {
        if ($pattern -like "backup_*") {
            # Traiter les dossiers
            $dossiers = Get-ChildItem -Directory -Filter $pattern -ErrorAction SilentlyContinue
            foreach ($dossier in $dossiers) {
                $fichiersTrouves += $dossier
            }
        } else {
            # Traiter les fichiers
            $fichiers = Get-ChildItem -File -Filter $pattern -ErrorAction SilentlyContinue
            foreach ($fichier in $fichiers) {
                # Vérifier que ce n'est pas un fichier essentiel
                if ($fichiersEssentiels -notcontains $fichier.Name) {
                    $fichiersTrouves += $fichier
                }
            }
        }
    }
    
    if ($fichiersTrouves.Count -gt 0) {
        $tailleCat = 0
        foreach ($item in $fichiersTrouves) {
            if ($item.PSIsContainer) {
                # C'est un dossier
                $tailleDir = (Get-ChildItem -Path $item.FullName -Recurse -File | Measure-Object -Property Length -Sum).Sum
                $tailleCat += $tailleDir
                Write-Host "  📂 $($item.Name) ($(Format-Taille $tailleDir))" -ForegroundColor Yellow
            } else {
                # C'est un fichier
                $tailleCat += $item.Length
                Write-Host "  📄 $($item.Name) ($(Format-Taille $item.Length))" -ForegroundColor Gray
            }
        }
        
        Write-Host ""
        Write-Host "  Trouvés: $($fichiersTrouves.Count) élément(s)" -ForegroundColor White
        Write-Host "  Taille totale: $(Format-Taille $tailleCat)" -ForegroundColor White
        
        if (-not $DryRun) {
            Write-Host "  ❌ Suppression en cours..." -ForegroundColor Red
            foreach ($item in $fichiersTrouves) {
                try {
                    if ($item.PSIsContainer) {
                        Remove-Item -Path $item.FullName -Recurse -Force
                    } else {
                        Remove-Item -Path $item.FullName -Force
                    }
                    $fichiersSupprimes += $item.Name
                } catch {
                    Write-Host "  ⚠️  Erreur: $($item.Name) - $_" -ForegroundColor Red
                }
            }
            Write-Host "  ✅ Supprimés avec succès!" -ForegroundColor Green
        } else {
            Write-Host "  🔍 [SIMULATION] Seraient supprimés" -ForegroundColor Yellow
        }
        
        $totalSupprime += $fichiersTrouves.Count
        $tailleTotal += $tailleCat
    } else {
        Write-Host "  ✓ Aucun fichier trouvé" -ForegroundColor DarkGray
    }
    
    Write-Host ""
}

# ═════════════════════════════════════════════════════════════════════════
# DOSSIER AMELIORATION (vérification)
# ═════════════════════════════════════════════════════════════════════════

if (Test-Path "AMELIORATION") {
    Write-Host "═══════════════════════════════════════════════════════════" -ForegroundColor DarkGray
    Write-Host "📁 Dossier AMELIORATION" -ForegroundColor Cyan
    Write-Host ""
    
    $contenuAmelio = Get-ChildItem -Path "AMELIORATION" -Recurse
    if ($contenuAmelio.Count -eq 0) {
        Write-Host "  📂 Dossier vide - peut être supprimé" -ForegroundColor Yellow
        if (-not $DryRun -and $Aggressive) {
            Remove-Item -Path "AMELIORATION" -Recurse -Force
            Write-Host "  ✅ Dossier AMELIORATION supprimé" -ForegroundColor Green
        }
    } else {
        Write-Host "  📂 Contient $($contenuAmelio.Count) élément(s) - conservé" -ForegroundColor Gray
    }
    Write-Host ""
}

# ═════════════════════════════════════════════════════════════════════════
# RAPPORT FINAL
# ═════════════════════════════════════════════════════════════════════════

Write-Host "╔═══════════════════════════════════════════════════════════════════════╗" -ForegroundColor Green
Write-Host "║                        RAPPORT DE NETTOYAGE                           ║" -ForegroundColor Green
Write-Host "╚═══════════════════════════════════════════════════════════════════════╝" -ForegroundColor Green
Write-Host ""

if ($DryRun) {
    Write-Host "🔍 MODE SIMULATION - Aucune suppression effectuée" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "📊 STATISTIQUES (ce qui SERAIT supprimé):" -ForegroundColor Cyan
} else {
    Write-Host "✅ NETTOYAGE TERMINÉ" -ForegroundColor Green
    Write-Host ""
    Write-Host "📊 STATISTIQUES:" -ForegroundColor Cyan
}

Write-Host "  • Éléments traités: $totalSupprime" -ForegroundColor White
Write-Host "  • Espace libéré: $(Format-Taille $tailleTotal)" -ForegroundColor White
Write-Host ""

Write-Host "✅ FICHIERS CONSERVÉS:" -ForegroundColor Green
Write-Host "  • Fichiers essentiels: $($fichiersEssentiels.Count)" -ForegroundColor White
Write-Host "  • Dossiers essentiels: $($dossierEssentiels.Count)" -ForegroundColor White
Write-Host ""

Write-Host "📁 STRUCTURE FINALE RECOMMANDÉE:" -ForegroundColor Cyan
Write-Host "  ├─ src/                    (code source React)" -ForegroundColor White
Write-Host "  ├─ node_modules/           (dépendances)" -ForegroundColor White
Write-Host "  ├─ dist/                   (build production)" -ForegroundColor White
Write-Host "  ├─ MakayaRecharge.jsx      (composant final)" -ForegroundColor White
Write-Host "  ├─ MakayaRecharge_PARTIE*  (9 parties sources)" -ForegroundColor White
Write-Host "  ├─ FUSIONNER_VERSION_COMPLETE.* (script fusion)" -ForegroundColor White
Write-Host "  ├─ GUIDE_VERSION_COMPLETE_FINALE.md (doc)" -ForegroundColor White
Write-Host "  ├─ TARIFS_FINAUX_600_SESSIONS.md (données)" -ForegroundColor White
Write-Host "  ├─ package.json            (config npm)" -ForegroundColor White
Write-Host "  └─ vite.config.js          (config build)" -ForegroundColor White
Write-Host ""

if ($DryRun) {
    Write-Host "💡 Pour effectuer le nettoyage réel, relancez sans -DryRun" -ForegroundColor Yellow
    Write-Host "   Exemple: .\NETTOYER_PROJET.ps1" -ForegroundColor Gray
    Write-Host ""
    Write-Host "💡 Pour un nettoyage plus agressif (avec backups):" -ForegroundColor Yellow
    Write-Host "   Exemple: .\NETTOYER_PROJET.ps1 -Aggressive" -ForegroundColor Gray
} else {
    Write-Host "✅ Projet nettoyé avec succès!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📝 PROCHAINES ÉTAPES:" -ForegroundColor Cyan
    Write-Host "  1. Vérifier que l'application fonctionne: npm run dev" -ForegroundColor White
    Write-Host "  2. Commit les changements: git add . && git commit -m 'Nettoyage projet'" -ForegroundColor White
}

Write-Host ""
Write-Host "═══════════════════════════════════════════════════════════" -ForegroundColor DarkGray

# Créer un rapport de nettoyage
if (-not $DryRun) {
    $rapportPath = "RAPPORT_NETTOYAGE_$(Get-Date -Format 'yyyyMMdd_HHmmss').txt"
    $rapport = @"
═══════════════════════════════════════════════════════════════════
RAPPORT DE NETTOYAGE - $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')
═══════════════════════════════════════════════════════════════════

STATISTIQUES:
  • Éléments supprimés: $totalSupprime
  • Espace libéré: $(Format-Taille $tailleTotal)
  • Mode: $(if ($Aggressive) { "Agressif" } else { "Standard" })

FICHIERS SUPPRIMÉS:
$($fichiersSupprimes | ForEach-Object { "  • $_" } | Out-String)

═══════════════════════════════════════════════════════════════════
"@
    
    $rapport | Out-File -FilePath $rapportPath -Encoding UTF8
    Write-Host "📄 Rapport créé: $rapportPath" -ForegroundColor Green
}

Write-Host ""
pause
