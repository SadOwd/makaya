# Guide d'Implémentation - Cahier des Charges
## Station de Recharge pour Véhicules Électriques

---

## 📦 Contenu Livré

### ✅ Fichiers de Données Créés

| Fichier | Taille | Contenu | Statut |
|---------|--------|---------|--------|
| `section1-presentation.js` | ~8 KB | Présentation complète du projet | ✅ COMPLET |
| `section2-specifications.js` | ~22 KB | Spécifications techniques détaillées | ✅ COMPLET |
| `section7-budget.js` | ~15 KB | Budget détaillé FCFA/USD | ✅ COMPLET |
| `section8-economique.js` | ~18 KB | Modèle économique et rentabilité | ✅ COMPLET |
| `index.js` | ~2 KB | Exports centralisés + utilitaires | ✅ COMPLET |

**Total : ~65 KB de données structurées**

---

## 💡 Points Clés du Projet

### 🎯 Résumé Exécutif

```
Projet        : Station de Recharge VE - Lomé, Togo
Capacité      : 10 bornes (5 AC + 3 DC60 + 2 DC120)
Investissement: 69,59 M FCFA (116 000 USD)
ROI           : < 12 mois
TRI           : 180-200%
Marge nette   : 48% (An 1)
```

### 💰 Budget Détaillé (FCFA)

| Poste | Montant FCFA | % |
|-------|--------------|---|
| Équipements recharge | 16 858 200 | 24% |
| Infrastructure électrique | 18 108 000 | 26% |
| Génie civil | 19 980 000 | 29% |
| Supervision/gestion | 7 350 000 | 10% |
| Installation | 10 560 000 | 15% |
| Transport/logistique | 3 360 000 | 5% |
| Études/autorisations | 3 360 000 | 5% |
| Éclairage/sécurité | 3 570 000 | 5% |
| Divers/imprévus | 8 040 000 | 11% |
| **TOTAL** | **69 586 200** | **100%** |

### 📊 Revenus Prévisionnels (FCFA)

| Année | Revenus | Coûts | Résultat Net | Marge |
|-------|---------|-------|--------------|-------|
| An 1 | 170,82 M | 75,68 M | 81,34 M | 48% |
| An 2-3 | 245,28 M | 97,40 M | 134,08 M | 55% |
| An 4+ | 300,00 M | 117,00 M | 169,20 M | 56% |

### 🔌 Tarification

| Type | FCFA/kWh | USD/kWh | Temps (50kWh) |
|------|----------|---------|---------------|
| **AC 21kW** | 300 | 0.50 | 2h30 (0-100%) |
| **DC 60kW** | 400 | 0.67 | 48 min (0-80%) |
| **DC 120kW** | 500 | 0.83 | 24 min (0-80%) |

---

## 🔧 Guide d'Intégration Technique

### 1. Structure des Données

Toutes les données sont structurées en objets JavaScript exportables :

```javascript
// Structure type d'une section
export const sectionData = {
  id: 'section-id',
  title: 'Titre de la section',
  subsections: [
    {
      titre: 'Sous-section',
      data: { /* données structurées */ }
    }
  ]
};
```

### 2. Import dans React

```javascript
// Dans votre composant React
import { 
  presentationData, 
  specificationsData,
  budgetData,
  modeleEconomiqueData,
  recapitulatifProjet
} from './cahier-charges/data/index.js';

// Utilisation
function BudgetComponent() {
  const budget = budgetData.recapitulatif;
  
  return (
    <div>
      <h2>Budget Total</h2>
      <p>FCFA: {budget.totalInvestissementFCFA.toLocaleString('fr-FR')}</p>
      <p>USD: {budget.totalInvestissementUSD.toLocaleString('en-US')}</p>
    </div>
  );
}
```

### 3. Fonctions Utilitaires

```javascript
import { 
  formaterMontant, 
  convertirFCFAversUSD,
  convertirUSDversFCFA 
} from './cahier-charges/data/index.js';

// Formater un montant
const montantFCFA = formaterMontant(69586200, 'FCFA');
// Résultat: "69 586 200 FCFA"

const montantUSD = formaterMontant(115977, 'USD');
// Résultat: "$115,977"

// Convertir
const usd = convertirFCFAversUSD(600000); // 1000 USD
const fcfa = convertirUSDversFCFA(1000); // 600000 FCFA
```

---

## 📱 Exemples d'Utilisation

### Exemple 1 : Afficher les Spécifications des Bornes

```javascript
import { specificationsData } from './cahier-charges/data/index.js';

function SpecificationsBornes() {
  const { bornesAC, bornesDC60, bornesDC120 } = specificationsData;
  
  return (
    <div className="specifications">
      <h2>Bornes AC 21kW</h2>
      <p>Modèle: {bornesAC.modele}</p>
      <p>Puissance: {bornesAC.caracteristiquesElectriques.puissanceNominale}</p>
      <p>Prix: {bornesAC.prix.fcfa.toLocaleString()} FCFA</p>
      
      <h2>Bornes DC 60kW</h2>
      <p>Modèle: {bornesDC60.modele}</p>
      <p>Efficacité: {bornesDC60.caracteristiquesElectriques.efficaciteEnergetique}</p>
      
      {/* Afficher les connecteurs */}
      {bornesDC60.connecteursStandards.option2Recommandee && (
        <div className="recommandation">
          <h3>Connecteur Recommandé: CCS2</h3>
          <p>Prix: {bornesDC60.connecteursStandards.option2Recommandee.prixFCFA.toLocaleString()} FCFA</p>
        </div>
      )}
    </div>
  );
}
```

### Exemple 2 : Tableau de Budget Dynamique

```javascript
import { budgetData, formaterMontant } from './cahier-charges/data/index.js';

function TableauBudget() {
  const { postes } = budgetData.recapitulatif;
  
  return (
    <table className="budget-table">
      <thead>
        <tr>
          <th>Poste</th>
          <th>Montant FCFA</th>
          <th>Montant USD</th>
          <th>%</th>
        </tr>
      </thead>
      <tbody>
        {postes.map((poste, index) => (
          <tr key={index}>
            <td>{poste.designation}</td>
            <td>{poste.fcfa.toLocaleString('fr-FR')} FCFA</td>
            <td>${poste.usd.toLocaleString('en-US')}</td>
            <td>{poste.pourcentage}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
```

### Exemple 3 : Afficher la Rentabilité

```javascript
import { modeleEconomiqueData } from './cahier-charges/data/index.js';

function Rentabilite() {
  const { resultatsAnnuelsPrevisionnels, retourInvestissement } = 
    modeleEconomiqueData.analyseRentabilite;
  
  const an1 = resultatsAnnuelsPrevisionnels.annee1;
  const roi = retourInvestissement.roiSimple;
  
  return (
    <div className="rentabilite">
      <h2>Rentabilité Année 1</h2>
      
      <div className="metrics">
        <div className="metric">
          <span className="label">Revenus</span>
          <span className="value">{an1.revenusFCFA.toLocaleString()} FCFA</span>
        </div>
        
        <div className="metric">
          <span className="label">Résultat Net</span>
          <span className="value">{an1.resultatNetFCFA.toLocaleString()} FCFA</span>
        </div>
        
        <div className="metric highlight">
          <span className="label">Marge Nette</span>
          <span className="value">{an1.margeNette}</span>
        </div>
        
        <div className="metric highlight">
          <span className="label">ROI</span>
          <span className="value">{roi.roiMois}</span>
        </div>
      </div>
    </div>
  );
}
```

---

## 📋 Checklist d'Intégration

### Phase 1 : Préparation
- [x] Créer les fichiers de données
- [x] Structurer les données en JavaScript
- [x] Créer les fonctions utilitaires
- [ ] Tester l'import des données
- [ ] Valider la cohérence des données

### Phase 2 : Intégration React
- [ ] Créer les composants d'affichage
- [ ] Intégrer les données dans l'UI
- [ ] Styliser les composants
- [ ] Ajouter l'interactivité
- [ ] Tester sur différents écrans

### Phase 3 : Fonctionnalités Avancées
- [ ] Implémenter le filtrage des données
- [ ] Ajouter la recherche
- [ ] Créer les graphiques (recharts)
- [ ] Générer le PDF
- [ ] Optimiser les performances

---

## 🎨 Suggestions de Composants

### 1. Composant Récapitulatif

```javascript
function RecapitulatifProjet() {
  return (
    <div className="recap">
      <h1>Station de Recharge VE - Lomé</h1>
      <div className="key-metrics">
        <MetricCard 
          title="Investissement" 
          value="69.6 M FCFA" 
          subtitle="116 000 USD"
        />
        <MetricCard 
          title="ROI" 
          value="< 12 mois" 
          highlight
        />
        <MetricCard 
          title="TRI" 
          value="180-200%" 
          highlight
        />
      </div>
    </div>
  );
}
```

### 2. Composant Tarifs

```javascript
function GrilleTarifs() {
  const tarifs = [
    { type: 'AC 21kW', fcfa: 300, usd: 0.50, temps: '2h30' },
    { type: 'DC 60kW', fcfa: 400, usd: 0.67, temps: '48 min' },
    { type: 'DC 120kW', fcfa: 500, usd: 0.83, temps: '24 min' }
  ];
  
  return (
    <div className="tarifs-grid">
      {tarifs.map(tarif => (
        <TarifCard key={tarif.type} {...tarif} />
      ))}
    </div>
  );
}
```

---

## 🚀 Prochaines Étapes

1. **Tester l'intégration** : Exécuter `INTEGRER_CAHIER_CHARGES.bat`
2. **Créer les composants** : Utiliser les exemples ci-dessus
3. **Styliser l'interface** : Adapter au design Makaya
4. **Ajouter les graphiques** : Utiliser recharts pour visualiser les données
5. **Générer le PDF** : Intégrer react-pdf ou jsPDF

---

## 📞 Support

Pour toute question :
- Consulter le README.md
- Vérifier les commentaires dans les fichiers de données
- Tester avec les exemples fournis

---

**Version :** 2.0  
**Date de création :** 30 Novembre 2024  
**Dernière mise à jour :** 30 Novembre 2024
