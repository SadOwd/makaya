import React, { useState, useEffect } from 'react';
import { 
  Car, Zap, MapPin, Navigation, Clock, Star, User, Phone, MessageCircle,
  CreditCard, Wallet, Settings, Menu, X, ChevronRight, Activity, Shield,
  Award, Calendar, TrendingUp, DollarSign, Bell, Home, List, Search,
  ChevronUp, ChevronDown, Loader, CheckCircle, AlertCircle, Heart
} from 'lucide-react';

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
  const [currentView, setCurrentView] = useState('home');
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [selectedCar, setSelectedCar] = useState(null);
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [destSuggestions, setDestSuggestions] = useState([]);
  const [estimatedPrice, setEstimatedPrice] = useState(null);
  const [rideStatus, setRideStatus] = useState('idle');
  const [driverInfo, setDriverInfo] = useState(null);
  const [nearbyDrivers, setNearbyDrivers] = useState([]);

  const carTypes = [
    { id: 'economy', name: 'Economy', capacity: '1-4', basePrice: 500, perKm: 150, eta: '3 min', available: 12, color: neon.blue, icon: Car },
    { id: 'comfort', name: 'Comfort', capacity: '1-4', basePrice: 800, perKm: 200, eta: '4 min', available: 8, color: neon.green, icon: Zap },
    { id: 'premium', name: 'Premium', capacity: '1-4', basePrice: 1500, perKm: 300, eta: '5 min', available: 4, color: neon.orange, icon: Award },
    { id: 'van', name: 'Van XL', capacity: '1-6', basePrice: 1200, perKm: 250, eta: '6 min', available: 3, color: neon.purple, icon: Car },
  ];

  const places = [
    { name: 'Aeroport Lome', address: 'Tokoin', icon: '✈️' },
    { name: 'Gare Routiere', address: 'Centre-Ville', icon: '🚌' },
    { name: 'Grand Marche', address: 'Lome', icon: '🏪' },
    { name: 'Universite', address: 'Campus', icon: '🎓' },
    { name: 'Hotel 2 Fevrier', address: 'Boulevard', icon: '🏨' },
    { name: 'Port Autonome', address: 'Zone Portuaire', icon: '⚓' },
  ];

  useEffect(() => {
    setNearbyDrivers([
      { id: 1, lat: 6.1289, lng: 1.2189 },
      { id: 2, lat: 6.1356, lng: 1.2267 },
      { id: 3, lat: 6.1198, lng: 1.2312 },
      { id: 4, lat: 6.1423, lng: 1.2145 },
    ]);
  }, []);

  const searchPlaces = (query, type) => {
    if (!query || query.length < 2) {
      if (type === 'pickup') setPickupSuggestions([]);
      else setDestSuggestions([]);
      return;
    }
    const filtered = places.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
    if (type === 'pickup') setPickupSuggestions(filtered);
    else setDestSuggestions(filtered);
  };

  const selectPlace = (place, type) => {
    if (type === 'pickup') {
      setPickup(place.name);
      setPickupSuggestions([]);
    } else {
      setDestination(place.name);
      setDestSuggestions([]);
      if (selectedCar) {
        const car = carTypes.find(c => c.id === selectedCar);
        setEstimatedPrice(Math.round(car.basePrice + (5 * car.perKm)));
      }
    }
  };

  const bookRide = () => {
    setRideStatus('searching');
    setTimeout(() => {
      setRideStatus('found');
      setDriverInfo({
        name: 'Kofi Mensah',
        rating: 4.9,
        trips: 1247,
        car: 'BYD Dolphin',
        plate: 'TG-123-AB',
        phone: '+228 90 12 34 56',
        photo: '👨🏿',
        eta: '3 min'
      });
      setCurrentView('ride');
    }, 3000);
  };

  const NeonGlow = ({ color, children }) => (
    <span style={{ textShadow: `0 0 5px ${color}, 0 0 10px ${color}`, color }}>{children}</span>
  );

  const NeonIcon = ({ Icon, color, size = 20, pulse }) => (
    <Icon size={size} style={{ filter: `drop-shadow(0 0 3px ${color})`, color }} className={pulse ? 'animate-pulse' : ''} />
  );

  const DigitalClock = () => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
      const timer = setInterval(() => setTime(new Date()), 1000);
      return () => clearInterval(timer);
    }, []);
    return (
      <div className="text-right">
        <div className="text-2xl font-mono" style={{ color: neon.blue, textShadow: `0 0 5px ${neon.blue}` }}>
          {time.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
        </div>
        <div className="text-xs text-gray-500">{time.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' }).toUpperCase()}</div>
      </div>
    );
  };

  // Carte interactive
  const InteractiveMap = () => (
    <div className="relative w-full h-full overflow-hidden rounded-2xl" style={{ backgroundColor: neon.cardDark, backgroundImage: `linear-gradient(${neon.blue}15 1px, transparent 1px), linear-gradient(90deg, ${neon.blue}15 1px, transparent 1px)`, backgroundSize: '20px 20px' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full flex items-center justify-center animate-pulse" style={{ background: `radial-gradient(circle, ${neon.blue}40, transparent)` }}>
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: neon.blue, boxShadow: `0 0 10px ${neon.blue}` }} />
          </div>
        </div>
        {nearbyDrivers.map(driver => (
          <div key={driver.id} className="absolute w-8 h-8 rounded-full flex items-center justify-center animate-pulse" style={{ top: '30%', left: `${20 + driver.id * 15}%`, backgroundColor: neon.cardDark, border: `2px solid ${neon.green}`, boxShadow: `0 0 10px ${neon.green}80` }}>
            <Car size={16} color={neon.green} />
          </div>
        ))}
        <div className="absolute top-4 left-4 px-4 py-2 rounded-lg backdrop-blur-xl" style={{ backgroundColor: `${neon.cardDark}E6`, border: `1px solid ${neon.blue}40` }}>
          <div className="flex items-center gap-2">
            <NeonIcon Icon={Activity} color={neon.green} size={16} pulse />
            <span className="text-white text-sm font-semibold">{nearbyDrivers.length} chauffeurs a proximite</span>
          </div>
        </div>
      </div>
    </div>
  );

  // Vue principale
  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: neon.bgDark }}>
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b" style={{ borderColor: '#333' }}>
        <DigitalClock />
        <h1 className="text-3xl font-black italic" style={{ color: neon.orange, textShadow: `0 0 10px ${neon.orange}, 0 0 20px ${neon.green}80` }}>
          MAKAYA <NeonGlow color={neon.green}>RIDE</NeonGlow>
        </h1>
        <div className="flex gap-4">
          <button className="relative p-2 rounded-full hover:bg-gray-800">
            <NeonIcon Icon={Bell} color={neon.blue} size={22} pulse />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full animate-pulse"></span>
          </button>
          <button className="p-1 rounded-full border-2" style={{ borderColor: neon.orange }}>
            <NeonIcon Icon={User} color={neon.orange} size={22} />
          </button>
        </div>
      </header>

      {/* Contenu */}
      <main className="max-w-4xl mx-auto p-4">
        {currentView === 'home' && (
          <div className="space-y-6">
            {/* Carte */}
            <div className="h-96">
              <InteractiveMap />
            </div>

            {/* Formulaire réservation */}
            <div className="space-y-4">
              {/* Pickup */}
              <div className="relative">
                <div className="flex items-center gap-3 p-4 rounded-lg" style={{ backgroundColor: neon.cardDark, border: `1px solid ${neon.green}55` }}>
                  <NeonIcon Icon={MapPin} color={neon.green} size={20} />
                  <input
                    type="text"
                    placeholder="Lieu de prise en charge"
                    value={pickup}
                    onChange={(e) => { setPickup(e.target.value); searchPlaces(e.target.value, 'pickup'); }}
                    className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none"
                  />
                </div>
                {pickupSuggestions.length > 0 && (
                  <div className="absolute w-full mt-2 rounded-lg overflow-hidden" style={{ backgroundColor: neon.cardDark, border: `1px solid ${neon.green}55` }}>
                    {pickupSuggestions.map((place, idx) => (
                      <div key={idx} onClick={() => selectPlace(place, 'pickup')} className="p-3 hover:bg-gray-800 cursor-pointer flex items-center gap-3">
                        <span className="text-2xl">{place.icon}</span>
                        <div>
                          <div className="text-white font-semibold">{place.name}</div>
                          <div className="text-gray-400 text-sm">{place.address}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Destination */}
              <div className="relative">
                <div className="flex items-center gap-3 p-4 rounded-lg" style={{ backgroundColor: neon.cardDark, border: `1px solid ${neon.blue}55` }}>
                  <NeonIcon Icon={Navigation} color={neon.blue} size={20} />
                  <input
                    type="text"
                    placeholder="Destination"
                    value={destination}
                    onChange={(e) => { setDestination(e.target.value); searchPlaces(e.target.value, 'dest'); }}
                    className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none"
                  />
                </div>
                {destSuggestions.length > 0 && (
                  <div className="absolute w-full mt-2 rounded-lg overflow-hidden" style={{ backgroundColor: neon.cardDark, border: `1px solid ${neon.blue}55` }}>
                    {destSuggestions.map((place, idx) => (
                      <div key={idx} onClick={() => selectPlace(place, 'dest')} className="p-3 hover:bg-gray-800 cursor-pointer flex items-center gap-3">
                        <span className="text-2xl">{place.icon}</span>
                        <div>
                          <div className="text-white font-semibold">{place.name}</div>
                          <div className="text-gray-400 text-sm">{place.address}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Types de véhicules */}
              {destination && (
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white">Choisir un vehicule</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {carTypes.map(car => (
                      <button
                        key={car.id}
                        onClick={() => {
                          setSelectedCar(car.id);
                          setEstimatedPrice(Math.round(car.basePrice + (5 * car.perKm)));
                        }}
                        className={`p-4 rounded-xl transition-all ${selectedCar === car.id ? 'ring-2' : 'ring-1 ring-opacity-20'}`}
                        style={{ backgroundColor: neon.cardDark, borderColor: car.color, borderWidth: '1px', boxShadow: selectedCar === car.id ? `0 0 10px ${car.color}99` : 'none' }}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <NeonIcon Icon={car.icon} color={car.color} size={24} />
                            <div className="text-white font-bold mt-2">{car.name}</div>
                            <div className="text-gray-400 text-xs">{car.capacity} pers</div>
                          </div>
                          {selectedCar === car.id && estimatedPrice && (
                            <div className="text-right">
                              <div className="text-white font-bold">{estimatedPrice.toLocaleString()} F</div>
                              <div className="text-xs text-gray-400">{car.eta}</div>
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                          <Activity size={12} />
                          <span>{car.available} disponibles</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Bouton réserver */}
              {selectedCar && estimatedPrice && (
                <button
                  onClick={bookRide}
                  disabled={rideStatus === 'searching'}
                  className="w-full py-4 text-lg font-bold rounded-xl transition-all disabled:opacity-50"
                  style={{ background: `linear-gradient(45deg, ${neon.orange}, ${neon.green})`, color: neon.bgDark, filter: `drop-shadow(0 0 8px ${neon.orange}80)` }}
                >
                  {rideStatus === 'searching' ? (
                    <div className="flex items-center justify-center gap-2">
                      <Loader className="animate-spin" size={20} />
                      Recherche en cours...
                    </div>
                  ) : (
                    `Confirmer - ${estimatedPrice.toLocaleString()} FCFA`
                  )}
                </button>
              )}
            </div>
          </div>
        )}

        {/* Vue course en cours */}
        {currentView === 'ride' && driverInfo && (
          <div className="space-y-6">
            <div className="h-96">
              <InteractiveMap />
            </div>

            <div className="p-6 rounded-xl" style={{ backgroundColor: neon.cardDark, border: `1px solid ${neon.green}55` }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl">{driverInfo.photo}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white">{driverInfo.name}</h3>
                  <div className="flex items-center gap-2 text-yellow-400 mt-1">
                    <Star size={16} fill="currentColor" />
                    <span className="font-bold">{driverInfo.rating}</span>
                    <span className="text-gray-400 text-sm">({driverInfo.trips} courses)</span>
                  </div>
                  <div className="text-gray-300 mt-1">{driverInfo.car} • {driverInfo.plate}</div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold" style={{ color: neon.green }}>{driverInfo.eta}</div>
                  <div className="text-gray-400 text-sm">d'arrivee</div>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 py-3 rounded-lg flex items-center justify-center gap-2" style={{ backgroundColor: neon.green, color: neon.bgDark }}>
                  <Phone size={20} />
                  Appeler
                </button>
                <button className="flex-1 py-3 rounded-lg flex items-center justify-center gap-2" style={{ backgroundColor: neon.blue, color: neon.bgDark }}>
                  <MessageCircle size={20} />
                  Message
                </button>
              </div>
            </div>

            <button
              onClick={() => { setCurrentView('home'); setRideStatus('idle'); setDriverInfo(null); }}
              className="w-full py-3 bg-red-600 text-white font-bold rounded-lg"
            >
              Annuler la course
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default MakayaRideNeonPro;