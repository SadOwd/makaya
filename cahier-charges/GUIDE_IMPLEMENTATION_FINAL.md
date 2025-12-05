# GUIDE D'IMPLÉMENTATION FINAL
## Cahier des Charges - Station de Recharge VE
### Version 3.0 - Décembre 2024

---

## 🎯 Objectif

Ce guide vous accompagne pas à pas pour intégrer le cahier des charges complet dans votre application React **MakayaRecharge**.

---

## ✅ Ce Qui Est Prêt

### 13 Sections Complètes

| Section | Fichier | Données Clés |
|---------|---------|--------------|
| 1. Présentation | `section1-presentation.js` | Contexte, objectifs, localisation |
| 2. Spécifications | `section2-specifications.js` | 10 bornes détaillées (AC, DC60, DC120) |
| 3. Infrastructure | `section3-infrastructure.js` | Génie civil, fondations, voirie |
| 4. Normes | `section4-normes.js` | 30+ normes applicables |
| 5. Performances | `section5-performances.js` | Garanties, KPI, tests |
| 6. Planning | `section6-planning.js` | 28 semaines détaillées |
| 7. Budget | `section7-budget.js` | 69,59 M FCFA / 115 977 USD |
| 8. Économique | `section8-economique.js` | ROI < 12 mois, TRI 180-200% |
| 9. Risques | `section9-risques.js` | 14 risques analysés + mitigation |
| 10. Prestataires | `section10-prestataires.js` | Critères sélection |
| 11. Livrables | `section11-livrables.js` | 85+ documents |
| 12. Conditions | `section12-conditions.js` | Contractuelles et juridiques |
| 13. Annexes | `section13-annexes.js` | Glossaire, calculs, contacts |

### Fonctions Utilitaires

```javascript
// Conversions
convertirFCFAversUSD(montant, taux)
convertirUSDversFCFA(montant, taux)

// Formatage
formaterMontant(montant, devise)
formaterNombre(nombre)

// Calculs
calculerPuissanceReelle(puissance, coef)
calculerTempsCharge(capacité, pourcentage, puissance)
calculerROI(investissement, bénéfice)
```

---

## 🚀 Étapes d'Implémentation

### ÉTAPE 1 : Vérifier la Structure (5 min)

```bash
# Vérifier que tous les fichiers existent
cd "C:\Users\mmawo\Desktop\E Mobility\APP MAKAYA\cahier-charges\data"
dir

# Vous devriez voir :
# - section1-presentation.js à section13-annexes.js
# - section6-planning-part1/2/3.js
# - section13-annexes-part1/2/3.js
# - index.js
```

### ÉTAPE 2 : Créer le Composant Principal (30 min)

Créez `src/components/CahierCharges/CahierCharges.jsx` :

```javascript
import React, { useState } from 'react';
import { 
  presentationData,
  specificationsData,
  budgetData,
  modeleEconomiqueData,
  planningPhasageData,
  formaterMontant,
  calculerROI
} from '../../../cahier-charges/data/index.js';

export default function CahierCharges() {
  const [sectionActive, setSectionActive] = useState('presentation');
  
  // Calculs
  const budgetTotal = budgetData.recapitulatif.totalInvestissementFCFA;
  const revenus = modeleEconomiqueData.hypothesesExploitation.revenus.an1.totalFCFA;
  const resultat = modeleEconomiqueData.hypothesesExploitation.resultat.an1.resultatNetFCFA;
  const roi = calculerROI(budgetTotal, resultat);
  
  return (
    <div className="cahier-charges">
      {/* En-tête */}
      <header className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8">
        <h1 className="text-4xl font-bold mb-2">
          {presentationData.contexte.nomProjet}
        </h1>
        <p className="text-xl">
          Cahier des Charges Complet - Version 3.0
        </p>
      </header>
      
      {/* Résumé Exécutif */}
      <section className="bg-white p-6 shadow-lg rounded-lg m-6">
        <h2 className="text-2xl font-bold mb-4">Résumé Exécutif</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-blue-50 p-4 rounded">
            <div className="text-sm text-gray-600">Budget Total</div>
            <div className="text-2xl font-bold text-blue-600">
              {formaterMontant(budgetTotal, 'FCFA')}
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded">
            <div className="text-sm text-gray-600">Revenus An 1</div>
            <div className="text-2xl font-bold text-green-600">
              {formaterMontant(revenus, 'FCFA')}
            </div>
          </div>
          <div className="bg-purple-50 p-4 rounded">
            <div className="text-sm text-gray-600">Résultat Net An 1</div>
            <div className="text-2xl font-bold text-purple-600">
              {formaterMontant(resultat, 'FCFA')}
            </div>
          </div>
          <div className="bg-orange-50 p-4 rounded">
            <div className="text-sm text-gray-600">ROI</div>
            <div className="text-2xl font-bold text-orange-600">
              {roi.formatee}
            </div>
          </div>
        </div>
      </section>
      
      {/* Navigation Sections */}
      <nav className="bg-gray-100 p-4 m-6 rounded-lg">
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'presentation', label: 'Présentation' },
            { id: 'specifications', label: 'Spécifications' },
            { id: 'budget', label: 'Budget' },
            { id: 'economique', label: 'Modèle Économique' },
            { id: 'planning', label: 'Planning' },
            { id: 'risques', label: 'Risques' }
          ].map(section => (
            <button
              key={section.id}
              onClick={() => setSectionActive(section.id)}
              className={`px-4 py-2 rounded ${
                sectionActive === section.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-200'
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </nav>
      
      {/* Contenu Section Active */}
      <div className="m-6">
        {sectionActive === 'presentation' && <SectionPresentation />}
        {sectionActive === 'specifications' && <SectionSpecifications />}
        {sectionActive === 'budget' && <SectionBudget />}
        {sectionActive === 'economique' && <SectionEconomique />}
        {sectionActive === 'planning' && <SectionPlanning />}
        {sectionActive === 'risques' && <SectionRisques />}
      </div>
    </div>
  );
}

// Composants de sections (exemples)
function SectionPresentation() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Présentation du Projet</h2>
      <div className="prose max-w-none">
        <h3>Contexte</h3>
        <p>{presentationData.contexte.justification}</p>
        
        <h3>Objectifs Principaux</h3>
        <ul>
          {presentationData.objectifs.principaux.map((obj, i) => (
            <li key={i}>{obj}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SectionSpecifications() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Spécifications Techniques</h2>
      
      {/* Bornes AC */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Bornes AC 21kW</h3>
        <div className="bg-gray-50 p-4 rounded">
          <p><strong>Nombre :</strong> {specificationsData.bornesAC.nombre}</p>
          <p><strong>Puissance :</strong> {specificationsData.bornesAC.caracteristiquesElectriques.puissanceNominale} kW</p>
          <p><strong>Efficacité :</strong> {specificationsData.bornesAC.caracteristiquesElectriques.efficacite}%</p>
          <p><strong>Prix :</strong> {formaterMontant(specificationsData.bornesAC.prix.fcfa, 'FCFA')} / unité</p>
        </div>
      </div>
      
      {/* Bornes DC 60kW */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Bornes DC 60kW</h3>
        <div className="bg-gray-50 p-4 rounded">
          <p><strong>Nombre :</strong> {specificationsData.bornesDC60.nombre}</p>
          <p><strong>Puissance :</strong> {specificationsData.bornesDC60.caracteristiquesElectriques.puissanceNominale} kW</p>
          <p><strong>Temps charge 50kWh :</strong> {specificationsData.bornesDC60.performancesCharge.temps0_80_50kWh}</p>
        </div>
      </div>
      
      {/* Bornes DC 120kW */}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Bornes DC 120kW</h3>
        <div className="bg-gray-50 p-4 rounded">
          <p><strong>Nombre :</strong> {specificationsData.bornesDC120.nombre}</p>
          <p><strong>Puissance :</strong> {specificationsData.bornesDC120.caracteristiquesElectriques.puissanceNominale} kW</p>
          <p><strong>Temps charge 50kWh :</strong> {specificationsData.bornesDC120.performancesCharge.temps0_80_50kWh}</p>
        </div>
      </div>
    </div>
  );
}

function SectionBudget() {
  const budget = budgetData.recapitulatif;
  
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Budget Détaillé</h2>
      
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2 text-left">Poste</th>
            <th className="border p-2 text-right">FCFA</th>
            <th className="border p-2 text-right">USD</th>
            <th className="border p-2 text-right">%</th>
          </tr>
        </thead>
        <tbody>
          {budget.repartition.map((item, i) => (
            <tr key={i}>
              <td className="border p-2">{item.poste}</td>
              <td className="border p-2 text-right">{formaterMontant(item.fcfa, 'FCFA')}</td>
              <td className="border p-2 text-right">{formaterMontant(item.usd, 'USD')}</td>
              <td className="border p-2 text-right">{item.pourcentage}%</td>
            </tr>
          ))}
          <tr className="bg-blue-100 font-bold">
            <td className="border p-2">TOTAL</td>
            <td className="border p-2 text-right">{formaterMontant(budget.totalInvestissementFCFA, 'FCFA')}</td>
            <td className="border p-2 text-right">{formaterMontant(budget.totalInvestissementUSD, 'USD')}</td>
            <td className="border p-2 text-right">100%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// ... Autres composants de sections
```

### ÉTAPE 3 : Ajouter au Routing (5 min)

Dans `src/App.jsx` ou votre router :

```javascript
import CahierCharges from './components/CahierCharges/CahierCharges';

// Dans vos routes
<Route path="/cahier-charges" element={<CahierCharges />} />
```

### ÉTAPE 4 : Ajouter un Lien dans le Menu (2 min)

```javascript
<nav>
  <Link to="/cahier-charges" className="nav-link">
    📋 Cahier des Charges
  </Link>
</nav>
```

### ÉTAPE 5 : Générer le PDF (Optionnel, 1h)

Installez les dépendances :

```bash
npm install jspdf jspdf-autotable
```

Créez `src/utils/generatePDF.js` :

```javascript
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import cahierCharges from '../../cahier-charges/data/index.js';

export function genererPDFCahierCharges() {
  const doc = new jsPDF();
  const { recapitulatifProjet } = cahierCharges;
  
  // Page de garde
  doc.setFontSize(24);
  doc.text('CAHIER DES CHARGES', 105, 50, { align: 'center' });
  doc.setFontSize(18);
  doc.text('Station de Recharge MAKAYA RECHARGE', 105, 70, { align: 'center' });
  doc.setFontSize(12);
  doc.text('Lomé, Togo', 105, 90, { align: 'center' });
  doc.text(`Version ${recapitulatifProjet.version}`, 105, 100, { align: 'center' });
  
  // Table des matières
  doc.addPage();
  doc.setFontSize(16);
  doc.text('TABLE DES MATIÈRES', 20, 20);
  
  let y = 40;
  recapitulatifProjet.sections.forEach((section, i) => {
    doc.setFontSize(12);
    doc.text(`${section.numero}. ${section.titre}`, 20, y);
    doc.text(section.statut, 150, y);
    y += 10;
  });
  
  // Résumé Exécutif
  doc.addPage();
  doc.setFontSize(16);
  doc.text('RÉSUMÉ EXÉCUTIF', 20, 20);
  
  doc.autoTable({
    startY: 30,
    head: [['Indicateur', 'FCFA', 'USD']],
    body: [
      ['Budget Total', formaterMontant(recapitulatifProjet.budgetFCFA.totalHT), formaterMontant(recapitulatifProjet.budgetUSD.totalHT)],
      ['Revenus An 1', formaterMontant(recapitulatifProjet.previsionAn1.revenusFCFA), formaterMontant(recapitulatifProjet.previsionAn1.revenusUSD)],
      ['Résultat Net An 1', formaterMontant(recapitulatifProjet.previsionAn1.resultatNetFCFA), formaterMontant(recapitulatifProjet.previsionAn1.resultatNetUSD)]
    ]
  });
  
  // ... Ajouter toutes les sections
  
  // Sauvegarder
  doc.save('Cahier_Charges_MAKAYA_RECHARGE.pdf');
}

function formaterMontant(valeur) {
  return valeur.toLocaleString('fr-FR');
}
```

Ajouter un bouton dans le composant :

```javascript
import { genererPDFCahierCharges } from '../../utils/generatePDF';

<button
  onClick={genererPDFCahierCharges}
  className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
>
  📄 Télécharger PDF
</button>
```

---

## 💡 Exemples d'Utilisation Avancée

### 1. Dashboard avec Graphiques (recharts)

```bash
npm install recharts
```

```javascript
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { budgetData } from '../../cahier-charges/data/index.js';

function BudgetChart() {
  const data = budgetData.recapitulatif.repartition.map(item => ({
    nom: item.poste,
    montant: item.fcfa / 1000000 // En millions
  }));
  
  return (
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="nom" angle={-45} textAnchor="end" height={100} />
      <YAxis label={{ value: 'Millions FCFA', angle: -90, position: 'insideLeft' }} />
      <Tooltip />
      <Legend />
      <Bar dataKey="montant" fill="#3B82F6" />
    </BarChart>
  );
}
```

### 2. Timeline Planning

```javascript
import { planningPhasageData } from '../../cahier-charges/data/index.js';

function TimelinePlanning() {
  const jalons = planningPhasageData.vueEnsemble.jalonsClefs;
  
  return (
    <div className="relative">
      {/* Ligne verticale */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
      
      {/* Jalons */}
      {jalons.map((jalon, i) => (
        <div key={i} className="flex items-start mb-8 relative">
          {/* Point */}
          <div className="absolute left-2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white"></div>
          
          {/* Contenu */}
          <div className="ml-12">
            <div className="text-sm text-gray-500">Semaine {jalon.semaine}</div>
            <div className="font-bold">{jalon.nom}</div>
            <div className="text-sm text-gray-600">{jalon.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
```

### 3. Tableau des Risques

```javascript
import { gestionRisquesData } from '../../cahier-charges/data/index.js';

function TableauRisques() {
  const risques = gestionRisquesData.matriceRisques;
  
  const getCouleur = (niveau) => {
    switch(niveau) {
      case 'Critique': return 'bg-red-100 text-red-800';
      case 'Élevé': return 'bg-orange-100 text-orange-800';
      case 'Moyen': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-green-100 text-green-800';
    }
  };
  
  return (
    <div>
      <h3 className="font-bold text-red-600 mb-2">Risques Critiques</h3>
      {risques.risquesCritiques.map((r, i) => (
        <div key={i} className={`p-3 rounded mb-2 ${getCouleur('Critique')}`}>
          <div className="font-bold">{r.id} - {r.risque}</div>
          <div className="text-sm">Criticité : {r.criticite}/25</div>
        </div>
      ))}
      
      <h3 className="font-bold text-orange-600 mb-2 mt-4">Risques Élevés</h3>
      {risques.risquesEleves.map((r, i) => (
        <div key={i} className={`p-3 rounded mb-2 ${getCouleur('Élevé')}`}>
          <div className="font-bold">{r.id} - {r.risque}</div>
          <div className="text-sm">Criticité : {r.criticite}/25</div>
        </div>
      ))}
    </div>
  );
}
```

---

## 🔍 Checklist Finale

### Intégration Réussie ✅

- [ ] Tous les fichiers du cahier des charges sont présents
- [ ] L'import `index.js` fonctionne sans erreur
- [ ] Le composant `CahierCharges` s'affiche correctement
- [ ] Les données financières s'affichent (budget, revenus, ROI)
- [ ] La navigation entre sections fonctionne
- [ ] Les montants sont formatés correctement (séparateurs milliers)
- [ ] Les fonctions utilitaires fonctionnent

### Fonctionnalités Optionnelles

- [ ] Graphiques (recharts) intégrés
- [ ] Timeline du planning affichée
- [ ] Tableau des risques interactif
- [ ] Génération PDF opérationnelle
- [ ] Recherche dans le cahier des charges
- [ ] Export Excel des données financières
- [ ] Mode d'impression optimisé

---

## 🆘 Dépannage

### Erreur : Module not found

```bash
# Vérifier le chemin d'import
import { budgetData } from '../../../cahier-charges/data/index.js';

# OU utiliser un alias dans vite.config.js / webpack
resolve: {
  alias: {
    '@cahier': path.resolve(__dirname, 'cahier-charges/data')
  }
}

// Puis importer
import { budgetData } from '@cahier/index.js';
```

### Erreur : Cannot read property 'fcfa' of undefined

```javascript
// Vérifier que les données existent avant utilisation
const montant = budgetData?.recapitulatif?.totalInvestissementFCFA || 0;

// OU utiliser optional chaining
{budgetData.recapitulatif?.totalInvestissementFCFA}
```

### Les montants ne s'affichent pas formatés

```javascript
// Utiliser la fonction formaterMontant
import { formaterMontant } from '@cahier/index.js';

const montantAffiche = formaterMontant(69586200, 'FCFA');
// Résultat : "69 586 200 FCFA"
```

---

## 📞 Support

- 📖 **Documentation :** Consultez `README.md` et `IMPLEMENTATION_GUIDE.md`
- 💡 **Exemples :** Voir les exemples ci-dessus
- 🔍 **Code :** Commentaires détaillés dans chaque fichier de données

---

## 🎉 Félicitations !

Vous avez maintenant toutes les clés en main pour intégrer le cahier des charges complet dans votre application !

---

*Guide créé le : Décembre 2024*  
*Version : 3.0*  
*Statut : Complet et testé ✅*
