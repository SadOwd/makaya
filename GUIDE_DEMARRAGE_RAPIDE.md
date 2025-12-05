# 🚀 GUIDE DE DÉMARRAGE RAPIDE - MAKAYA ENERGY

**Date**: 3 Décembre 2025  
**Version Application**: 2.1.0  
**Temps estimé**: 5 minutes

---

## ⚡ DÉMARRAGE EXPRESS (3 ÉTAPES)

### 1️⃣ Ouvrir le Terminal
```bash
# Windows: Ouvrir PowerShell ou CMD dans le dossier
cd "C:\Users\mmawo\Desktop\E Mobility\APP MAKAYA"
```

### 2️⃣ Lancer l'Application
```bash
# Méthode 1: Script automatique (RECOMMANDÉ)
DEMARRER.bat

# Méthode 2: Commande npm
npm run dev
```

### 3️⃣ Accéder à l'Application
**L'application s'ouvrira automatiquement dans votre navigateur à:**
```
http://localhost:3000
```

**Si elle ne s'ouvre pas automatiquement, cliquez sur le lien ci-dessus.**

---

## 🎯 NAVIGATION RAPIDE

Une fois l'application lancée, vous verrez la **page d'accueil** avec les modules suivants:

### Menu Principal
```
🏠 Home              → Page d'accueil
📊 Dashboard         → Vue d'ensemble globale
🚕 Makaya Ride       → Service VTC électrique
🚗 Makaya Mobility   → Vente véhicules + LLD + SAV
⚡ Makaya Recharge   → Réseau stations de recharge
⚖️ Business Plan     → Analyse juridique & financière
📋 Cahier Charges    → Spécifications techniques
```

---

## 📊 MODULES À EXPLORER

### 1. 🚕 MAKAYA RIDE (VTC)
**Ce que vous verrez:**
- Dashboard temps réel avec 42 courses/jour
- Flotte de 6 véhicules BYD
- Top 5 chauffeurs avec performances
- 8 zones chaudes de Lomé
- **Carbon Intelligence Engine** (score 94/100)

**Interactions:**
- Cliquez sur "CIE Modal" pour voir l'analyse carbone
- Basculez entre mode LIVE/PAUSE
- Explorez les 3 interfaces: Standard, NEON, NEON PRO

---

### 2. 🚗 MAKAYA MOBILITY
**Ce que vous verrez:**
- **Catalogue**: 6 modèles BYD avec photos et specs
- **LLD**: 4 formules de location (Flex → Corporate)
- **SAV**: Services maintenance et assistance

**Interactions:**
- Parcourir le catalogue véhicules
- Consulter les formules LLD
- Explorer les services SAV

---

### 3. ⚡ MAKAYA RECHARGE
**Ce que vous verrez:**
- **6 stations** avec 24 bornes de recharge
- **Système tarifaire** 3 périodes (Creuses/Pleines/Pointe)
- **4 formules d'abonnement** (FLEX → PREMIUM)
- **Analytics détaillées** par station et type de borne
- **Alertes intelligentes** en temps réel

**Interactions:**
- Explorer chaque station en détail
- Comparer les tarifs par période
- Voir les performances des différents types de bornes
- Consulter les projections financières

---

### 4. 📊 DASHBOARD PRINCIPAL
**Ce que vous verrez:**
- Vue d'ensemble des 3 modules
- Graphiques interactifs (Recharts)
- KPIs en temps réel
- Métriques financières

**Interactions:**
- Survol des graphiques pour détails
- Export des données
- Filtres par période

---

### 5. ⚖️ BUSINESS PLAN JURIDIQUE
**Ce que vous verrez:**
- Cadre réglementaire complet
- Structure juridique
- Opportunités fiscales
- Conformité environnementale

**Métriques clés:**
- Valeur nette: 523M FCFA
- ROI Juridique: 157%

---

## 🛑 ARRÊTER L'APPLICATION

### Méthode 1: Dans le Terminal
```
Appuyez sur Ctrl + C
Confirmer avec Y (Yes)
```

### Méthode 2: Fermer le Terminal
```
Simplement fermer la fenêtre du terminal
```

---

## 🔧 COMMANDES UTILES

### Développement
```bash
npm run dev          # Démarre l'application (port 3000)
```

### Production
```bash
npm run build        # Génère le build optimisé
npm run preview      # Prévisualise le build
```

### Maintenance
```bash
npm install          # Réinstaller les dépendances si besoin
npm audit            # Vérifier la sécurité
```

---

## 📱 COMPATIBILITÉ NAVIGATEURS

✅ **Recommandé:**
- Google Chrome (dernière version)
- Microsoft Edge (dernière version)
- Firefox (dernière version)

⚠️ **Non recommandé:**
- Internet Explorer (obsolète)

---

## 🐛 RÉSOLUTION DE PROBLÈMES

### Problème 1: "npm n'est pas reconnu"
**Solution:**
```bash
# Installer Node.js depuis: https://nodejs.org
# Puis réouvrir le terminal
```

### Problème 2: "Port 3000 déjà utilisé"
**Solution:**
```bash
# Arrêter l'application précédente ou changer de port:
# Modifier vite.config.js → server: { port: 3001 }
```

### Problème 3: "Module non trouvé"
**Solution:**
```bash
# Réinstaller les dépendances:
npm install
```

### Problème 4: Page blanche
**Solution:**
```bash
# 1. Vérifier la console du navigateur (F12)
# 2. Redémarrer l'application
# 3. Vider le cache: Ctrl + Shift + R
```

---

## 📊 DONNÉES DE DÉMONSTRATION

Toutes les données affichées sont des **données réelles du business plan**:

### Makaya Ride
- 42 courses/jour réelles
- 6 véhicules BYD en opération
- 847 tonnes CO₂ évitées/an

### Makaya Mobility
- 12 ventes/mois
- 48 contrats LLD actifs
- 85 interventions SAV/mois

### Makaya Recharge
- 6 stations opérationnelles
- 7.37M FCFA/mois de CA
- 3,847 clients actifs
- 1,008 tonnes CO₂ évitées/an

---

## 🎨 PERSONNALISATION

### Changer le Port
```javascript
// vite.config.js
export default defineConfig({
  server: {
    port: 3001,  // Changez le numéro ici
    open: true
  }
})
```

### Désactiver l'ouverture auto
```javascript
// vite.config.js
export default defineConfig({
  server: {
    port: 3000,
    open: false  // Changez à false
  }
})
```

---

## 📚 DOCUMENTATION COMPLÈTE

Pour aller plus loin, consultez:

### Fichiers Principaux
- **README.md** (50+ pages) - Documentation générale
- **ANALYSE_RECHARGE_COMPLETE.md** (50+ pages) - Analyse Recharge
- **GUIDE_UTILISATION.md** (15+ pages) - Guide utilisateur
- **RAPPORT_ETAT_APPLICATION_20251203.md** - Rapport technique

### Emplacement
```
C:\Users\mmawo\Desktop\E Mobility\APP MAKAYA\
```

---

## 🎯 FONCTIONNALITÉS CLÉS À TESTER

### ✅ Checklist Découverte (10 minutes)

**Makaya Ride:**
- [ ] Voir le dashboard temps réel
- [ ] Ouvrir le modal CIE (Carbon Intelligence)
- [ ] Basculer LIVE/PAUSE
- [ ] Explorer les 3 interfaces (Standard/NEON/NEON PRO)

**Makaya Mobility:**
- [ ] Parcourir le catalogue véhicules
- [ ] Voir les formules LLD
- [ ] Consulter les services SAV

**Makaya Recharge:**
- [ ] Explorer les 6 stations
- [ ] Comparer les tarifs 3 périodes
- [ ] Voir les analytics par type de borne
- [ ] Consulter les alertes actives

**Dashboard Global:**
- [ ] Vue d'ensemble 3 modules
- [ ] Graphiques interactifs
- [ ] Export de données

**Business Plan:**
- [ ] Cadre juridique
- [ ] Métriques financières
- [ ] ROI et projections

---

## 💡 ASTUCES PRO

### 1. Navigation Rapide
- Utilisez le menu en haut pour changer de module
- Les boutons sont clairement identifiés avec des icônes

### 2. Modes d'Affichage
- **Makaya Ride**: Testez les 3 interfaces pour voir les différences
- **Makaya Recharge**: Comparez les vues par station vs par type de borne

### 3. Analytics
- Survolez les graphiques pour voir les détails
- Les tooltips affichent des informations supplémentaires

### 4. Export
- Utilisez les boutons d'export pour sauvegarder les données
- Format CSV compatible Excel

---

## 📞 BESOIN D'AIDE ?

### Support Technique
- **Email**: support@makaya-energy.tg
- **Documentation**: Voir fichiers .md du projet
- **Rapports**: RAPPORT_ETAT_APPLICATION_20251203.md

### Ressources
- README.md - Documentation complète
- GUIDE_UTILISATION.md - Guide utilisateur
- ANALYSE_RECHARGE_COMPLETE.md - Détails Recharge

---

## 🚀 PRÊT À COMMENCER !

### Commande unique pour tout lancer:
```bash
cd "C:\Users\mmawo\Desktop\E Mobility\APP MAKAYA" && npm run dev
```

**L'application s'ouvrira automatiquement dans votre navigateur.**

**Bonne exploration ! 🎉**

---

## ⏱️ RÉSUMÉ ULTRA-RAPIDE

```bash
# 1. Ouvrir terminal dans le dossier
cd "C:\Users\mmawo\Desktop\E Mobility\APP MAKAYA"

# 2. Lancer l'app
npm run dev

# 3. Ouvrir navigateur
http://localhost:3000

# 4. Explorer les modules !
```

**C'est aussi simple que ça ! ✨**

---

**Créé le**: 3 Décembre 2025  
**Version**: 1.0  
**Temps de lecture**: 5 minutes
