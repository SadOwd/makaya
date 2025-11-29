// PARTIE 1/3 - Imports, Configuration, État et Composants de Base
import React, { useState, useEffect, useRef } from 'react';
import { 
  Car, Zap, DollarSign, Clock, Bell, User, 
  MapPin, Compass, CheckCircle, Calendar, Star, TrendingUp, 
  Navigation, Phone, MessageCircle, CreditCard, Settings, 
  Menu, X, ChevronRight, Activity, Shield, Award, Briefcase,
  Wallet, LifeBuoy, Home, List, Search, Filter, Heart,
  ChevronDown, ChevronUp, Loader, AlertCircle
} from 'lucide-react';

// Configuration des couleurs neon
const neon = {
  blue: '#00D9FF',
  green: '#39FF14',
  orange: '#FF6B35',
  purple: '#B026FF',
  pink: '#FF10F0',
  yellow: '#FFED4E',
  bgDark: '#0A0A14',
  cardDark: '#13131F',
  cardLight: '#1C1C2E',
};

const MakayaRideNeonPro = () => {
  // États principaux
  const [currentScreen, setCurrentScreen] = useState('map');
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [selectedCar, setSelectedCar] = useState(null);
  const [estimatedPrice, setEstimatedPrice] = useState(null);
  const [estimatedTime, setEstimatedTime] = useState(null);
  const [rideStatus, setRideStatus] = useState('idle');
  const [driverInfo, setDriverInfo] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [userLocation, setUserLocation] = useState({ lat: 6.1256, lng: 1.2254 });
  const [destinationLocation, setDestinationLocation] = useState(null);
  const [mapCenter, setMapCenter] = useState({ lat: 6.1256, lng: 1.2254 });
  const [mapZoom, setMapZoom] = useState(13);
  const [nearbyDrivers, setNearbyDrivers] = useState([]);
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [promoCode, setPromoCode] = useState('');

  // Données des types de véhicules
  const carTypes = [
    {
      id: 'economy',
      name: 'Economy',
      icon: Car,
      capacity: '4 places',
      description: 'Vehicule electrique standard',
      basePrice: 500,
      pricePerKm: 150,
      pricePerMin: 50,
      color: neon.blue,
      eta: '3 min',
      available: 12,
      features: ['Climatisation', 'Musique', 'Wi-Fi']
    },
    {
      id: 'comfort',
      name: 'Comfort',
      icon: Zap,
      capacity: '4 places',
      description: 'Confort superieur',
      basePrice: 800,
      pricePerKm: 200,
      pricePerMin: 75,
      color: neon.green,
      eta: '4 min',
      available: 8,
      features: ['Climatisation', 'Musique', 'Wi-Fi', 'Sieges cuir', 'Bouteille eau']
    },
    {
      id: 'premium',
      name: 'Premium',
      icon: Award,
      capacity: '4 places',
      description: 'Luxe et prestige',
      basePrice: 1500,
      pricePerKm: 300,
      pricePerMin: 100,
      color: neon.orange,
      eta: '5 min',
      available: 4,
      features: ['Tout confort', 'Chauffeur premium', 'Rafraichissements', 'Tablette']
    },
    {
      id: 'van',
      name: 'Van',
      icon: Briefcase,
      capacity: '6-7 places',
      description: 'Pour groupes',
      basePrice: 1200,
      pricePerKm: 250,
      pricePerMin: 85,
      color: neon.purple,
      eta: '6 min',
      available: 3,
      features: ['Espace bagages', 'Climatisation', '6-7 places', 'Wi-Fi']
    }
  ];

  // Lieux populaires
  const popularPlaces = [
    { name: 'Aeroport International de Lome', address: 'Lome-Tokoin', lat: 6.1656, lng: 1.2545, icon: '✈️' },
    { name: 'Gare Routiere', address: 'Centre-Ville', lat: 6.1289, lng: 1.2236, icon: '🚌' },
    { name: 'Marche de Lome', address: 'Grand Marche', lat: 6.1319, lng: 1.2189, icon: '🏪' },
    { name: 'Universite de Lome', address: 'Campus', lat: 6.1689, lng: 1.2098, icon: '🎓' },
    { name: 'Hotel 2 Fevrier', address: 'Boulevard', lat: 6.1367, lng: 1.2156, icon: '🏨' },
    { name: 'Port de Lome', address: 'Zone Portuaire', lat: 6.1278, lng: 1.2789, icon: '⚓' },
  ];

  // Simuler les chauffeurs
  useEffect(() => {
    const drivers = [
      { id: 1, lat: 6.1289, lng: 1.2189, type: 'economy', heading: 45 },
      { id: 2, lat: 6.1356, lng: 1.2267, type: 'comfort', heading: 180 },
      { id: 3, lat: 6.1198, lng: 1.2312, type: 'economy', heading: 270 },
      { id: 4, lat: 6.1423, lng: 1.2145, type: 'premium', heading: 90 },
      { id: 5, lat: 6.1167, lng: 1.2423, type: 'van', heading: 135 },
    ];
    setNearbyDrivers(drivers);
  }, []);

  // Calcul du prix
  const calculatePrice = (distance, duration, carType) => {
    const car = carTypes.find(c => c.id === carType);
    if (!car) return null;
    const distanceKm = distance / 1000;
    const durationMin = duration / 60;
    const price = car.basePrice + (distanceKm * car.pricePerKm) + (durationMin * car.pricePerMin);
    return Math.round(price);
  };

  // Recherche de lieux
  const searchPlaces = (query, type) => {
    if (!query || query.length < 2) {
      if (type === 'pickup') setPickupSuggestions([]);
      if (type === 'destination') setDestinationSuggestions([]);
      return;
    }
    const filtered = popularPlaces.filter(place => 
      place.name.toLowerCase().includes(query.toLowerCase()) ||
      place.address.toLowerCase().includes(query.toLowerCase())
    );
    if (type === 'pickup') setPickupSuggestions(filtered);
    if (type === 'destination') setDestinationSuggestions(filtered);
  };

  // Selection d'un lieu
  const selectPlace = (place, type) => {
    if (type === 'pickup') {
      setPickup(place.name);
      setPickupSuggestions([]);
      setUserLocation({ lat: place.lat, lng: place.lng });
    } else {
      setDestination(place.name);
      setDestinationSuggestions([]);
      setDestinationLocation({ lat: place.lat, lng: place.lng });
      if (selectedCar) {
        const distance = 5000;
        const duration = 900;
        const price = calculatePrice(distance, duration, selectedCar);
        setEstimatedPrice(price);
        setEstimatedTime(15);
      }
    }
  };

  // Composants de base
  const NeonGlow = ({ color, children, className = '' }) => (
    <span style={{ textShadow: `0 0 5px ${color}, 0 0 10px ${color}`, color }} className={`transition-all ${className}`}>
      {children}
    </span>
  );

  const NeonIcon = ({ Icon, color, size = 20, pulse = false }) => (
    <Icon size={size} style={{ filter: `drop-shadow(0 0 3px ${color})`, color }} className={pulse ? 'animate-pulse' : ''} />
  );

  // FIN PARTIE 1/3
