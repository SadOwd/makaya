# GUIDE D'UTILISATION - COMPOSANTS CAHIER DES CHARGES

## Import du Composant

```javascript
import CahierCharges from './components/CahierCharges/CahierCharges';
```

## Utilisation dans le Routing

```javascript
// Dans App.jsx ou votre router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CahierCharges from './components/CahierCharges/CahierCharges';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cahier-charges" element={<CahierCharges />} />
        {/* Autres routes */}
      </Routes>
    </BrowserRouter>
  );
}
```

## Ajout au Menu

```javascript
<nav>
  <Link to="/cahier-charges" className="nav-link">
    📋 Cahier des Charges
  </Link>
</nav>
```

## Installation des Dépendances (si besoin)

```bash
npm install react-router-dom
```

## Personnalisation

Le composant utilise Tailwind CSS. Assurez-vous que Tailwind est configuré dans votre projet.

Si vous utilisez un autre framework CSS, adaptez les classes en conséquence.
