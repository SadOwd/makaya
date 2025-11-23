# ✅ CHECKLIST PRÉ-EXÉCUTION

## 📋 Vérifiez ces éléments avant de lancer le script

### 1. Fichiers sources requis

Vérifiez que ces 3 fichiers existent dans `src/components/` :

```
src/components/
  ├── BusinessPlanJuridique_PARTIE1.jsx ✅
  ├── BusinessPlanJuridique_PARTIE2.jsx ✅
  └── BusinessPlanJuridique_PARTIE3.jsx ✅
```

**Comment vérifier :**
```bash
dir src\components\BusinessPlanJuridique_PARTIE*.jsx
```

---

### 2. Dossiers requis

Vérifiez que ces dossiers existent :

```
APP MAKAYA/
  ├── src/ ✅
  │   ├── pages/ ✅
  │   ├── components/ ✅
  │   └── data/ ✅
  └── ...
```

**Comment vérifier :**
```bash
dir src
dir src\pages
dir src\components
dir src\data
```

---

### 3. Fichiers de données

Vérifiez que ce fichier existe :

```
src/data/
  └── rechargeDataFinal.js ✅
```

**Comment vérifier :**
```bash
dir src\data\rechargeDataFinal.js
```

---

### 4. Scripts de fusion

Vérifiez que ces fichiers existent à la racine :

```
APP MAKAYA/
  ├── FUSIONNER_JURIDIQUE_ET_RECHARGE.bat ✅
  └── FUSIONNER_JURIDIQUE_ET_RECHARGE.ps1 ✅
```

**Comment vérifier :**
```bash
dir FUSIONNER_JURIDIQUE_ET_RECHARGE.*
```

---

## 🚀 Prêt à lancer ?

Si tous les ✅ sont validés :

### Méthode 1 : Double-clic (Recommandé)
```
Double-cliquez sur : FUSIONNER_JURIDIQUE_ET_RECHARGE.bat
```

### Méthode 2 : PowerShell
```powershell
.\FUSIONNER_JURIDIQUE_ET_RECHARGE.ps1
```

---

## ⚠️ Si un fichier manque

### Fichiers PARTIE*.jsx manquants :
Les fichiers doivent être dans `src/components/`, pas à la racine !

**Déplacez-les si nécessaire :**
```bash
move BusinessPlanJuridique_PARTIE*.jsx src\components\
```

### Dossiers manquants :
Créez-les manuellement :
```bash
mkdir src\pages
mkdir src\components
mkdir src\data
```

### rechargeDataFinal.js manquant :
Ce fichier doit déjà exister dans votre projet. Vérifiez :
```bash
dir src\data\*.js
```

---

## 📊 Ce qui sera créé/modifié

### Fichiers créés :
- ✅ `src/pages/BusinessPlanJuridique.jsx` (fusionné, ~51 KB)

### Fichiers modifiés :
- ✅ `src/pages/MakayaRecharge.jsx` (remplacé par version optimisée)

### Sauvegardes créées :
- ✅ `backup_YYYYMMDD_HHMMSS/BusinessPlanJuridique.jsx` (si existe)
- ✅ `backup_YYYYMMDD_HHMMSS/MakayaRecharge.jsx` (sauvegarde de l'ancien)

---

## 🎯 Après l'exécution

Le script affichera :

```
=========================================================
      MAKAYA ENERGY - FUSION JURIDIQUE + MAJ RECHARGE
=========================================================
[HH:MM:SS] [ETAPE] Verification des prerequis...
[HH:MM:SS] [OK] Dossiers du projet trouves
[HH:MM:SS] [ETAPE] Creation des sauvegardes...
[HH:MM:SS] [OK] Sauvegarde de MakayaRecharge.jsx creee
[HH:MM:SS] [ETAPE] Fusion des 3 parties...
[HH:MM:SS] [OK] BusinessPlanJuridique.jsx fusionne avec succes!
[HH:MM:SS] [ETAPE] Mise a jour de MakayaRecharge.jsx...
[HH:MM:SS] [OK] MakayaRecharge.jsx mis a jour avec succes!

=========================================================
          FUSION ET MISE A JOUR REUSSIES!
=========================================================

Redemarrez l'application pour voir les changements:
    npm run dev
```

---

## ✅ Vérification post-exécution

### 1. Vérifiez les fichiers créés :
```bash
dir src\pages\BusinessPlanJuridique.jsx
dir src\pages\MakayaRecharge.jsx
```

### 2. Vérifiez les sauvegardes :
```bash
dir backup_*\
```

### 3. Testez l'application :
```bash
npm run dev
```

### 4. Ouvrez le navigateur :
```
http://localhost:5173
```

### 5. Testez les pages :
- ✅ Business Plan > Cadre Juridique
- ✅ Makaya Recharge

---

## 🆘 En cas de problème

### Erreur : "Fichier PARTIE1 introuvable!"
**Solution :** Les fichiers doivent être dans `src/components/`
```bash
dir src\components\BusinessPlanJuridique_PARTIE*.jsx
```

### Erreur : "Dossier src/ introuvable!"
**Solution :** Vous n'êtes pas dans le bon dossier
```bash
cd "C:\Users\mmawo\Desktop\E Mobility\APP MAKAYA"
```

### Erreur : "rechargeDataFinal.js introuvable"
**Solution :** Ce fichier doit déjà exister dans votre projet
```bash
dir src\data\rechargeDataFinal.js
```

### La page ne s'affiche pas après npm run dev
**Solution 1 :** Vérifiez la console navigateur (F12)
**Solution 2 :** Vérifiez les erreurs dans le terminal npm
**Solution 3 :** Restaurez depuis les sauvegardes

---

## 📞 Besoin d'aide ?

Consultez ces documents :
1. **README_DEMARRAGE.md** - Démarrage rapide
2. **GUIDE_FUSION_JURIDIQUE_RECHARGE.md** - Guide complet
3. **RECAPITULATIF_COMPLET_FINAL.md** - Vue d'ensemble

---

## 🎉 Tout est OK ?

Lancez le script !
```
Double-clic : FUSIONNER_JURIDIQUE_ET_RECHARGE.bat
```

Bonne chance ! 🚀
