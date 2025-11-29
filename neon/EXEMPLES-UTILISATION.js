// ════════════════════════════════════════════════════════════════
// 📚 EXEMPLES D'UTILISATION - NEON RIDE INTERFACE
// ════════════════════════════════════════════════════════════════

// ════════════════════════════════════════════════════════════════
// EXEMPLE 1 : UTILISATION DE BASE
// ════════════════════════════════════════════════════════════════

import React from 'react';
import NeonUberInterface from './components/NeonUberInterface';

function App() {
  return (
    <div className="App">
      <NeonUberInterface />
    </div>
  );
}

export default App;


// ════════════════════════════════════════════════════════════════
// EXEMPLE 2 : AVEC PROPS PERSONNALISÉES
// ════════════════════════════════════════════════════════════════

// Modifiez le composant pour accepter des props :

const NeonUberInterface = ({ 
  userName = "Jean Dupont",
  userRating = 4.8,
  notifications = 3,
  serviceOptions = [
    { name: 'Eco', price: '15€', time: '5 min', color: 'cyan' },
    { name: 'Confort', price: '22€', time: '3 min', color: 'purple' },
    { name: 'Premium', price: '35€', time: '2 min', color: 'pink' }
  ]
}) => {
  // ... reste du code
};

// Utilisation :
<NeonUberInterface 
  userName="Marie Dubois"
  userRating={4.9}
  notifications={5}
/>


// ════════════════════════════════════════════════════════════════
// EXEMPLE 3 : INTÉGRATION AVEC REDUX
// ════════════════════════════════════════════════════════════════

import { useSelector, useDispatch } from 'react-redux';

const NeonUberInterfaceContainer = () => {
  const dispatch = useDispatch();
  const tripState = useSelector(state => state.trip);
  const userData = useSelector(state => state.user);

  const handleSearchTrip = (departure, destination) => {
    dispatch({
      type: 'SEARCH_TRIP',
      payload: { departure, destination }
    });
  };

  return (
    <NeonUberInterface 
      tripStatus={tripState.status}
      driverInfo={tripState.driver}
      userName={userData.name}
      onSearchTrip={handleSearchTrip}
    />
  );
};


// ════════════════════════════════════════════════════════════════
// EXEMPLE 4 : AVEC API BACKEND
// ════════════════════════════════════════════════════════════════

const NeonUberInterface = () => {
  const [tripStatus, setTripStatus] = useState('idle');
  const [driverInfo, setDriverInfo] = useState(null);

  const searchDriver = async (departure, destination) => {
    setTripStatus('searching');
    
    try {
      const response = await fetch('https://api.example.com/search-driver', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ departure, destination })
      });
      
      const data = await response.json();
      
      setDriverInfo({
        name: data.driver.name,
        rating: data.driver.rating,
        car: data.driver.vehicle.model,
        plate: data.driver.vehicle.plate,
        eta: data.eta
      });
      
      setTripStatus('found');
    } catch (error) {
      console.error('Erreur recherche:', error);
      setTripStatus('idle');
    }
  };

  // ... reste du code
};


// ════════════════════════════════════════════════════════════════
// EXEMPLE 5 : AVEC GÉOLOCALISATION
// ════════════════════════════════════════════════════════════════

const NeonUberInterface = () => {
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.error('Erreur géolocalisation:', error);
        }
      );
    }
  }, []);

  // Utiliser currentLocation pour centrer la carte
  // ... reste du code
};


// ════════════════════════════════════════════════════════════════
// EXEMPLE 6 : INTÉGRATION GOOGLE MAPS
// ════════════════════════════════════════════════════════════════

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const NeonUberInterface = () => {
  const mapContainerStyle = {
    width: '100%',
    height: '100%'
  };

  const center = {
    lat: 48.8566,
    lng: 2.3522
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Canvas néon */}
      <canvas id="neon-canvas" className="absolute inset-0 pointer-events-none opacity-30" />
      
      {/* Carte Google Maps */}
      <LoadScript googleMapsApiKey="VOTRE_CLE_API">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={13}
          options={{
            styles: [/* Style néon sombre */],
            disableDefaultUI: true
          }}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
      
      {/* Interface par-dessus */}
      {/* ... reste du code */}
    </div>
  );
};


// ════════════════════════════════════════════════════════════════
// EXEMPLE 7 : AVEC WEBSOCKETS (TEMPS RÉEL)
// ════════════════════════════════════════════════════════════════

import { useEffect } from 'react';
import io from 'socket.io-client';

const NeonUberInterface = () => {
  const [socket, setSocket] = useState(null);
  const [driverPosition, setDriverPosition] = useState(null);

  useEffect(() => {
    const newSocket = io('https://api.example.com');
    setSocket(newSocket);

    newSocket.on('driver-position-update', (data) => {
      setDriverPosition({
        lat: data.latitude,
        lng: data.longitude
      });
    });

    return () => newSocket.close();
  }, []);

  const startTrip = () => {
    socket.emit('start-trip', {
      userId: 'user123',
      tripId: 'trip456'
    });
  };

  // ... reste du code
};


// ════════════════════════════════════════════════════════════════
// EXEMPLE 8 : AVEC SYSTÈME DE PAIEMENT (STRIPE)
// ════════════════════════════════════════════════════════════════

import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_...');

const PaymentForm = ({ tripPrice, onPaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (!error) {
      // Envoyer paymentMethod.id au backend
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          paymentMethodId: paymentMethod.id,
          amount: tripPrice
        })
      });

      if (response.ok) {
        onPaymentSuccess();
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Payer {tripPrice}
      </button>
    </form>
  );
};


// ════════════════════════════════════════════════════════════════
// EXEMPLE 9 : AVEC NOTIFICATIONS PUSH
// ════════════════════════════════════════════════════════════════

const NeonUberInterface = () => {
  const requestNotificationPermission = async () => {
    if ('Notification' in window) {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        console.log('Notifications activées');
      }
    }
  };

  const showNotification = (title, body) => {
    if (Notification.permission === 'granted') {
      new Notification(title, {
        body,
        icon: '/icon-neon-ride.png',
        badge: '/badge.png'
      });
    }
  };

  useEffect(() => {
    requestNotificationPermission();
  }, []);

  const onDriverFound = (driver) => {
    showNotification(
      'Chauffeur trouvé !',
      `${driver.name} arrive dans ${driver.eta}`
    );
  };

  // ... reste du code
};


// ════════════════════════════════════════════════════════════════
// EXEMPLE 10 : AVEC INTERNATIONALISATION (i18n)
// ════════════════════════════════════════════════════════════════

import { useTranslation } from 'react-i18next';

const NeonUberInterface = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Header */}
      <header>
        <h1>{t('app.title')}</h1>
        <button onClick={() => changeLanguage('fr')}>FR</button>
        <button onClick={() => changeLanguage('en')}>EN</button>
      </header>

      {/* Panneau principal */}
      <div className="p-6">
        <h2>{t('search.title')}</h2>
        <input placeholder={t('search.departure')} />
        <input placeholder={t('search.destination')} />
        <button>{t('search.button')}</button>
      </div>
    </div>
  );
};

// Fichiers de traduction (i18n/fr.json) :
// {
//   "app": { "title": "NEON RIDE" },
//   "search": {
//     "title": "Où allez-vous ?",
//     "departure": "Adresse de départ",
//     "destination": "Destination",
//     "button": "Rechercher un chauffeur"
//   }
// }


// ════════════════════════════════════════════════════════════════
// EXEMPLE 11 : AVEC MODE SOMBRE/CLAIR
// ════════════════════════════════════════════════════════════════

const NeonUberInterface = () => {
  const [darkMode, setDarkMode] = useState(true);

  const themeColors = darkMode ? {
    bg: 'bg-black',
    text: 'text-white',
    primary: 'cyan-500',
    secondary: 'purple-500'
  } : {
    bg: 'bg-white',
    text: 'text-gray-900',
    primary: 'blue-500',
    secondary: 'indigo-500'
  };

  return (
    <div className={`relative w-full h-screen ${themeColors.bg} overflow-hidden`}>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '☀️' : '🌙'}
      </button>
      {/* ... reste avec themeColors */}
    </div>
  );
};


// ════════════════════════════════════════════════════════════════
// EXEMPLE 12 : AVEC ANALYTICS
// ════════════════════════════════════════════════════════════════

import ReactGA from 'react-ga4';

const NeonUberInterface = () => {
  useEffect(() => {
    ReactGA.initialize('G-XXXXXXXXXX');
    ReactGA.send('pageview');
  }, []);

  const trackSearchTrip = (departure, destination) => {
    ReactGA.event({
      category: 'Trip',
      action: 'Search',
      label: `${departure} → ${destination}`
    });
  };

  const trackDriverFound = (driverName, eta) => {
    ReactGA.event({
      category: 'Trip',
      action: 'Driver Found',
      label: driverName,
      value: parseInt(eta)
    });
  };

  // ... reste du code avec tracking
};


// ════════════════════════════════════════════════════════════════
// EXEMPLE 13 : OPTIMISATIONS PERFORMANCE
// ════════════════════════════════════════════════════════════════

import React, { memo, useCallback, useMemo } from 'react';

// Mémoïser les composants coûteux
const ParticleCanvas = memo(() => {
  // Animation canvas
  return <canvas id="neon-canvas" />;
});

const NeonUberInterface = () => {
  // Mémoïser les callbacks
  const handleMenuToggle = useCallback(() => {
    setMenuOpen(prev => !prev);
  }, []);

  // Mémoïser les calculs coûteux
  const sortedDrivers = useMemo(() => {
    return drivers.sort((a, b) => a.rating - b.rating);
  }, [drivers]);

  // Virtual scrolling pour listes longues
  const visibleItems = useMemo(() => {
    return items.slice(scrollPosition, scrollPosition + 20);
  }, [items, scrollPosition]);

  return (
    <div>
      <ParticleCanvas />
      {/* ... reste du code */}
    </div>
  );
};


// ════════════════════════════════════════════════════════════════
// EXEMPLE 14 : TESTS UNITAIRES (Jest + React Testing Library)
// ════════════════════════════════════════════════════════════════

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import NeonUberInterface from './NeonUberInterface';

describe('NeonUberInterface', () => {
  test('affiche le titre', () => {
    render(<NeonUberInterface />);
    expect(screen.getByText('NEON RIDE')).toBeInTheDocument();
  });

  test('ouvre le menu au clic', () => {
    render(<NeonUberInterface />);
    const menuButton = screen.getByRole('button', { name: /menu/i });
    fireEvent.click(menuButton);
    expect(screen.getByText('Mes trajets')).toBeInTheDocument();
  });

  test('simule une recherche de trajet', async () => {
    render(<NeonUberInterface />);
    const searchButton = screen.getByText('Rechercher un chauffeur');
    
    fireEvent.click(searchButton);
    
    expect(screen.getByText('Recherche en cours...')).toBeInTheDocument();
    
    await waitFor(() => {
      expect(screen.getByText(/Alexandre Martin/i)).toBeInTheDocument();
    }, { timeout: 3000 });
  });
});


// ════════════════════════════════════════════════════════════════
// EXEMPLE 15 : DÉPLOIEMENT (package.json scripts)
// ════════════════════════════════════════════════════════════════

// Dans package.json :
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "jest",
    "lint": "eslint src --ext js,jsx",
    "format": "prettier --write src/**/*.{js,jsx}",
    "deploy": "npm run build && vercel --prod"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.263.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.0",
    "tailwindcss": "^3.3.0",
    "vite": "^4.3.0"
  }
}

// ════════════════════════════════════════════════════════════════
// 💡 CONSEILS FINAUX
// ════════════════════════════════════════════════════════════════

/*
1. Commencez simple avec l'exemple 1
2. Ajoutez progressivement les fonctionnalités
3. Testez à chaque étape
4. Optimisez en dernier
5. Consultez la documentation React pour plus de détails

Ressources :
- React Docs: https://react.dev
- Tailwind: https://tailwindcss.com
- Lucide: https://lucide.dev
*/
