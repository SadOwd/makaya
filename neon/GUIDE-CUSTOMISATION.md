# 🎨 Guide de Customisation - NEON Interface

## 🌈 Personnaliser les Couleurs

### Modifier le Thème Principal
Remplacez les classes Tailwind dans le code :

```jsx
// Thème Cyan (actuel)
className="text-cyan-400 border-cyan-500"

// Thème Bleu
className="text-blue-400 border-blue-500"

// Thème Vert
className="text-green-400 border-green-500"

// Thème Orange
className="text-orange-400 border-orange-500"
```

### Créer un Nouveau Dégradé

```jsx
// Dégradé actuel (Cyan → Purple → Pink)
className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"

// Dégradé Ocean (Bleu → Cyan → Turquoise)
className="bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400"

// Dégradé Sunset (Orange → Rose → Violet)
className="bg-gradient-to-r from-orange-500 via-rose-500 to-violet-500"

// Dégradé Forest (Vert → Lime → Jaune)
className="bg-gradient-to-r from-green-500 via-lime-400 to-yellow-400"
```

## ⚡ Modifier les Animations

### Vitesse des Particules
Dans la partie 2, ligne où on crée les particules :

```javascript
// Lent
vx: (Math.random() - 0.5) * 0.2,
vy: (Math.random() - 0.5) * 0.2,

// Normal (actuel)
vx: (Math.random() - 0.5) * 0.5,
vy: (Math.random() - 0.5) * 0.5,

// Rapide
vx: (Math.random() - 0.5) * 1.0,
vy: (Math.random() - 0.5) * 1.0,
```

### Nombre de Particules
```javascript
// Peu (performance optimisée)
for (let i = 0; i < 20; i++)

// Normal (actuel)
for (let i = 0; i < 50; i++)

// Beaucoup (effet intense)
for (let i = 0; i < 100; i++)
```

### Durée des Transitions
```jsx
// Rapide
className="transition-all duration-150"

// Normal (actuel)
className="transition-all duration-300"

// Lent
className="transition-all duration-500"
```

## 🗺️ Personnaliser la Carte

### Densité de la Grille
Dans la partie 5 :

```jsx
// Grille fine (20 lignes - actuel)
{[...Array(20)].map((_, i) => ...)}

// Grille moyenne (10 lignes)
{[...Array(10)].map((_, i) => ...)}

// Grille large (5 lignes)
{[...Array(5)].map((_, i) => ...)}
```

### Couleur de la Grille
```jsx
// Cyan (actuel)
className="bg-gradient-to-r from-transparent via-cyan-500 to-transparent"

// Violet
className="bg-gradient-to-r from-transparent via-purple-500 to-transparent"

// Rose
className="bg-gradient-to-r from-transparent via-pink-500 to-transparent"
```

### Opacité de la Grille
```jsx
// Subtile
className="absolute inset-0 opacity-10"

// Normale (actuelle)
className="absolute inset-0 opacity-20"

// Visible
className="absolute inset-0 opacity-40"
```

## 📱 Modifier les Options de Service

### Ajouter une Nouvelle Option
Dans la partie 6, ajoutez dans le tableau :

```javascript
[
  { name: 'Eco', price: '15€', time: '5 min', color: 'cyan' },
  { name: 'Confort', price: '22€', time: '3 min', color: 'purple' },
  { name: 'Premium', price: '35€', time: '2 min', color: 'pink' },
  // Nouvelle option
  { name: 'Luxe', price: '50€', time: '1 min', color: 'yellow' }
]
```

### Modifier la Grille (4 colonnes au lieu de 3)
```jsx
// 3 colonnes (actuel)
<div className="grid grid-cols-3 gap-3 mt-6">

// 4 colonnes
<div className="grid grid-cols-4 gap-3 mt-6">

// 2 colonnes
<div className="grid grid-cols-2 gap-3 mt-6">
```

## 🎯 Personnaliser le Menu

### Ajouter un Élément de Menu
Dans la partie 4 :

```javascript
{ icon: Clock, label: 'Mes trajets', badge: null },
{ icon: CreditCard, label: 'Paiements', badge: null },
// Ajoutez votre élément ici
{ icon: Heart, label: 'Favoris', badge: '5' },
```

### Modifier la Largeur du Menu
```jsx
// Étroit
<div className="absolute left-0 top-0 bottom-0 w-64 ...">

// Normal (actuel)
<div className="absolute left-0 top-0 bottom-0 w-80 ...">

// Large
<div className="absolute left-0 top-0 bottom-0 w-96 ...">
```

## 🔔 Personnaliser les Notifications

### Modifier le Badge
Dans la partie 3 :

```jsx
// Petit
<span className="w-4 h-4 text-xs">

// Normal (actuel)
<span className="w-5 h-5 text-xs">

// Grand
<span className="w-6 h-6 text-sm">
```

### Changer la Couleur du Badge
```jsx
// Rouge (actuel rose)
<span className="bg-red-500 ...">

// Vert
<span className="bg-green-500 ...">

// Orange
<span className="bg-orange-500 ...">
```

## 🚗 Modifier le Délai de Recherche

Dans la partie 2, fonction `simulateTrip` :

```javascript
// Rapide (1 seconde)
setTimeout(() => { ... }, 1000);

// Normal (2 secondes - actuel)
setTimeout(() => { ... }, 2000);

// Lent (5 secondes)
setTimeout(() => { ... }, 5000);
```

## 🎨 Effets de Lueur (Glow)

### Intensité du Glow
```jsx
// Subtil
className="shadow-lg shadow-cyan-500/30"

// Normal (actuel)
className="shadow-lg shadow-cyan-500/50"

// Intense
className="shadow-lg shadow-cyan-500/80"
```

### Rayon du Blur
```jsx
// Léger
className="blur-sm"

// Normal
className="blur-md"

// Fort (actuel)
className="blur-xl"

// Très fort
className="blur-3xl"
```

## 🎭 Mode Sombre/Clair

### Fond Clair (remplacer le noir)
```jsx
// Fond sombre (actuel)
<div className="bg-black">

// Fond gris clair
<div className="bg-gray-100">

// Fond blanc
<div className="bg-white">
```

### Texte pour Mode Clair
```jsx
// Sombre (actuel)
<span className="text-white">

// Pour fond clair
<span className="text-gray-900">
```

## 📐 Espacements et Tailles

### Padding Global
```jsx
// Compact
className="p-4"

// Normal (actuel)
className="p-6"

// Large
className="p-8"
```

### Tailles d'Icônes
```jsx
// Petit
<MapPin className="w-4 h-4" />

// Normal (actuel)
<MapPin className="w-6 h-6" />

// Grand
<MapPin className="w-8 h-8" />
```

## 🎵 Ajouter des Sons

### Intégrer Audio (à ajouter dans le composant)
```javascript
// Au début du composant
const [audio] = useState({
  search: new Audio('/sounds/search.mp3'),
  found: new Audio('/sounds/found.mp3'),
  click: new Audio('/sounds/click.mp3')
});

// Dans simulateTrip
const simulateTrip = () => {
  audio.search.play();
  setTripStatus('searching');
  // ...
};
```

## 🌟 Effets Supplémentaires

### Ajouter un Effet de Parallaxe
```jsx
<div 
  className="..." 
  style={{
    transform: `translateY(${scrollY * 0.5}px)`
  }}
>
```

### Effet Hover Avancé
```jsx
className="
  hover:scale-105 
  hover:rotate-1 
  hover:shadow-2xl 
  transition-all 
  duration-300
"
```

## 🔧 Optimisations

### Réduire les Rerenders
```javascript
// Mémoiser les valeurs
const memoizedValue = useMemo(() => {
  return calculateExpensiveValue(deps);
}, [deps]);

// Mémoiser les callbacks
const handleClick = useCallback(() => {
  doSomething();
}, [dependencies]);
```

### Performance Canvas
```javascript
// Limiter le framerate
let lastTime = 0;
const fps = 30;
const interval = 1000 / fps;

function animate(currentTime) {
  if (currentTime - lastTime >= interval) {
    // Animation logic
    lastTime = currentTime;
  }
  requestAnimationFrame(animate);
}
```

## 📊 Présets Prêts à l'Emploi

### Thème Cyberpunk
```javascript
// Couleurs: Violet + Magenta + Cyan
from-purple-600 via-fuchsia-500 to-cyan-400
```

### Thème Matrix
```javascript
// Couleurs: Vert néon + Noir
from-green-500 via-lime-400 to-green-300
bg-black
```

### Thème Sunset
```javascript
// Couleurs: Orange + Rose + Violet
from-orange-500 via-rose-500 to-violet-600
```

### Thème Ocean
```javascript
// Couleurs: Bleu + Cyan + Turquoise
from-blue-600 via-cyan-400 to-teal-400
```

---

## 💡 Conseils Finaux

1. **Testez chaque modification** avant de tout changer
2. **Gardez une copie** de l'original
3. **Utilisez les DevTools** pour tester les couleurs
4. **Pensez à l'accessibilité** (contraste, tailles)
5. **Optimisez pour mobile** si nécessaire

Pour des questions spécifiques, consultez :
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [Lucide Icons](https://lucide.dev)
