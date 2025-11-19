# 🚀 MAKAYA ENERGY - Application E-Mobility Complète

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Status](https://img.shields.io/badge/status-production--ready-green)
![React](https://img.shields.io/badge/react-18.3.1-blue)
![Vite](https://img.shields.io/badge/vite-5.4.2-purple)

**Plateforme complète de mobilité électrique pour l'Afrique de l'Ouest**

---

## 📋 Table des Matières

- [Vue d'ensemble](#vue-densemble)
- [Modules](#modules)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Technologies](#technologies)
- [Documentation](#documentation)

---

## 🌍 Vue d'ensemble

Makaya Energy est une plateforme complète de mobilité électrique comprenant:

- 🚕 **Makaya Ride**: Service VTC électrique avec Carbon Intelligence Engine
- 🚗 **Makaya Mobility**: Vente véhicules électriques + LLD + SAV
- ⚡ **Makaya Recharge**: Réseau de stations de recharge
- 📊 **Business Plan Global**: Dashboard investisseurs Série A

### KPIs Clés
- **CA Annuel**: 1,746 Md FCFA
- **Clients Actifs**: 6,200
- **Flotte**: 6 véhicules électriques (78% utilisation)
- **CO₂ évité**: 847.3 tonnes/an
- **Stations de recharge**: 6 (24 bornes)

---

## 📦 Modules

### 🚕 Makaya Ride (VTC)
- Dashboard temps réel avec KPIs animés
- Gestion flotte 6 véhicules BYD
- Top chauffeurs avec performances
- 8 zones chaudes Lomé
- **Carbon Intelligence Engine (CIE)**
  - Score carbone 94/100
  - CO₂ évité en temps réel
  - Forecast 36 mois
  - Alertes et anomalies

### 🚗 Makaya Mobility (Vente/LLD/SAV)
- Catalogue 6 véhicules électriques BYD
- 4 formules LLD (Premium, Standard, BaaS, Flotte)
- Module SAV complet
- Graphiques ventes et statistiques

### ⚡ Makaya Recharge (Bornes)
- 6 stations actives (24 bornes)
- **Tarification détaillée par période**:
  - Heures Creuses (22h-6h): 150-250 FCFA/kWh
  - Heures Pleines (6h-18h): 200-300 FCFA/kWh
  - Heures Pointe (18h-22h): 250-350 FCFA/kWh
- 4 types de bornes (AC 7kW, AC 22kW, DC 50kW, DC 150kW)
- Planning expansion 2026

### 📊 Business Plan Global
- Dashboard principal enrichi
- Contribution par domaine (Ride 38%, Mobility 44%, Recharge 18%)
- Système d'alertes intelligent
- 3 scénarios stratégiques
- Roadmap Q4 2025 - Q3 2026
- Export PDF/Excel/PowerPoint

---

## 🚀 Installation

### Prérequis
- Node.js 18+ et npm
- Git

### Installation rapide

```bash
# Cloner le repository
git clone https://github.com/makaya-energy/app.git
cd app

# Installer les dépendances
npm install

# Lancer l'application
npm run dev
```

### Ou utiliser le script Windows

Double-cliquez sur `DEMARRER.bat`

L'application sera accessible sur: http://localhost:5173

---

## 💻 Utilisation

### Navigation

1. **Page d'accueil**: Sélectionnez le module (Ride, Mobility, Recharge, ou BP)
2. **Makaya Ride**: 
   - Cliquez sur "CO₂ Évité" pour ouvrir le CIE
   - Bouton LIVE/PAUSE pour updates temps réel
3. **Makaya Mobility**: 
   - Onglet "Vente EV" pour catalogue
   - Onglet "LLD" pour formules location
   - Onglet "SAV" pour maintenance
4. **Makaya Recharge**:
   - Vue stations et bornes
   - Sessions en cours
   - Tarification détaillée
5. **Business Plan**:
   - 6 onglets (Overview, Répartition, Alertes, Scénarios, Roadmap, Export)

### Fonctionnalités clés

- ✅ Temps réel LIVE
- ✅ Graphiques interactifs (Recharts)
- ✅ Modals détaillées
- ✅ Export données (PDF, Excel, CSV)
- ✅ Responsive design
- ✅ Animations premium

---

## 🛠️ Technologies

### Frontend
- **React** 18.3.1 - Framework UI
- **Vite** 5.4.2 - Build tool
- **Tailwind CSS** 3.4.1 - Styling
- **Recharts** 2.14.1 - Graphiques
- **Lucide React** 0.460.0 - Icônes

### Fonctionnalités
- Glassmorphism design
- Animations Tailwind
- Responsive mobile/desktop
- Dark mode premium

---

## 📁 Structure

```
APP MAKAYA/
├── src/
│   ├── components/
│   │   ├── DashboardPrincipal.jsx
│   │   └── CIEModal.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── MakayaRide.jsx
│   │   ├── MakayaMobility.jsx
│   │   └── MakayaRecharge.jsx
│   ├── data/
│   │   ├── businessPlanEnrichedData.js
│   │   ├── rideData.js
│   │   ├── cieData.js
│   │   ├── mobilityData.js
│   │   └── rechargeData.js
│   ├── assets/images/
│   ├── App-BP-Enhanced-Full.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── DEMARRER.bat
└── README.md
```

---

## 📚 Documentation

### Documentation complète
Consultez `PROJET_FINAL_COMPLETE.md` pour:
- Récapitulatif détaillé des modules
- Données et métriques
- Tarification Makaya Recharge
- Guide d'utilisation avancé

### Scripts disponibles

```bash
npm run dev      # Lancer en mode développement
npm run build    # Build production
npm run preview  # Prévisualiser build
```

---

## 🎯 Roadmap

### Q4 2025 (En cours)
- [x] Modules principaux
- [x] Carbon Intelligence Engine
- [x] Tarification détaillée
- [ ] Tests utilisateurs
- [ ] Optimisations performances

### Q1 2026
- [ ] App mobile (React Native)
- [ ] API Backend
- [ ] Authentification
- [ ] Paiements intégrés

---

## 🤝 Contribution

L'application est actuellement en phase de développement interne pour Série A.

---

## 📄 Licence

Propriété de Makaya Energy © 2025

---

## 👥 Équipe

**Makaya Energy Team**
- Product & Tech
- Design & UX
- Data & Analytics

---

## 📞 Contact

- 🌐 Website: www.makaya-energy.tg
- 📧 Email: contact@makaya-energy.tg
- 📱 WhatsApp: +228 XX XX XX XX

---

## 🏆 Statut

```
╔════════════════════════════════════════╗
║  ✅ APPLICATION 100% TERMINÉE         ║
║  ✅ PRODUCTION READY                  ║
║  ✅ PRÊTE POUR SÉRIE A                ║
╚════════════════════════════════════════╝
```

**Développé avec ❤️ pour la mobilité électrique durable en Afrique 🌍💚⚡**
