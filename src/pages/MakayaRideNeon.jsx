import React, { useState, useEffect } from 'react';
import { 
  Car, Zap, DollarSign, Clock, Bell, User, 
  Home, List, Wallet, LifeBuoy, MapPin, Compass, CheckCircle,
  Calendar, Star, TrendingUp
} from 'lucide-react';

// Configuration des couleurs neon
const neon = {
  blue: 'hsl(190, 80%, 65%)',
  green: 'hsl(120, 75%, 60%)',
  orange: 'hsl(30, 90%, 60%)',
  bgDark: '#12121e',
  cardDark: '#1a1a2c',
};

// Composant pour l'effet de lueur neon sur le texte
const NeonGlow = ({ color, children, className = '' }) => (
  <span 
    style={{
      textShadow: `0 0 5px ${color}, 0 0 10px ${color}, 0 0 15px ${color}, 0 0 20px rgba(255, 255, 255, 0.5)`,
      color: color,
    }}
    className={`transition-all duration-300 ${className}`}
  >
    {children}
  </span>
);

// Composant d'icone avec effet de lueur
const NeonIcon = ({ Icon, color, size = 20, className = '' }) => (
  <Icon 
    size={size} 
    style={{
      filter: `drop-shadow(0 0 5px ${color}) drop-shadow(0 0 10px ${color})`,
      color: color,
    }}
    className={`transition-all duration-300 ${className}`}
  />
);

// Composant d'Horloge
const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  const formattedTime = time.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  const formattedDate = time.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' });

  return (
    <div className="flex flex-col text-right">
      <span className="text-2xl font-mono" style={{ color: neon.blue, textShadow: `0 0 5px ${neon.blue}` }}>
        {formattedTime}
      </span>
      <span className="text-xs text-gray-500 mt-[-4px]">{formattedDate.toUpperCase()}</span>
    </div>
  );
};

// Interface de reservation VTC (Makaya Ride)
const MakayaRideBooking = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [selectedCar, setSelectedCar] = useState('standard');
  const [confirmationMessage, setConfirmationMessage] = useState(''); 

  const carOptions = [
    { type: 'standard', name: 'Standard (VE)', icon: Car, fare: '2,500 - 5,000 FCFA', color: neon.blue },
    { type: 'premium', name: 'Premium (Luxe)', icon: Zap, fare: '8,000 - 12,000 FCFA', color: neon.orange },
    { type: 'van', name: 'Van (7 places)', icon: User, fare: '6,000 - 10,000 FCFA', color: neon.green },
  ];

  const handleBooking = () => {
    setConfirmationMessage("Reservation confirmee ! Votre chauffeur arrive.");
    setTimeout(() => {
      setConfirmationMessage('');
    }, 3000);
  };

  return (
    <div className="p-4 md:p-6 space-y-6">
      <h2 className="text-3xl font-bold text-white mb-4">
        <NeonGlow color={neon.orange}>Reserver un Trajet</NeonGlow>
      </h2>
      
      {/* Message de confirmation */}
      {confirmationMessage && (
        <div 
          className="flex items-center p-4 rounded-xl text-white font-semibold transition-opacity duration-500"
          style={{ 
            backgroundColor: neon.green, 
            boxShadow: `0 0 15px ${neon.green}80`,
            color: neon.bgDark
          }}
        >
          <NeonIcon Icon={CheckCircle} color={neon.bgDark} size={20} className="mr-3" />
          {confirmationMessage}
        </div>
      )}
      
      {/* Zone de la Carte (Mock) */}
      <div 
        className="h-64 w-full rounded-xl flex items-center justify-center text-xl font-bold text-gray-500"
        style={{ 
          backgroundColor: neon.cardDark,
          border: `1px solid ${neon.orange}55`,
          backgroundImage: 'radial-gradient(#ffffff08 1px, transparent 1px), radial-gradient(#ffffff08 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 10px 10px',
          boxShadow: `0 0 20px ${neon.orange}33 inset`,
        }}
      >
        <div className="flex flex-col items-center">
          <MapPin size={32} style={{ color: neon.orange, filter: `drop-shadow(0 0 5px ${neon.orange})` }} />
          <p className="mt-2 text-gray-400 text-sm">Carte de localisation (Simulation)</p>
        </div>
      </div>
      
      {/* Formulaire de Trajet */}
      <div className="space-y-4">
        {/* Input Pickup */}
        <div className="flex items-center space-x-3 p-3 rounded-lg" style={{ backgroundColor: neon.cardDark, border: `1px solid ${neon.green}55` }}>
          <NeonIcon Icon={MapPin} color={neon.green} size={20} />
          <input
            type="text"
            placeholder="Lieu de prise en charge (ex: Gare Centrale)"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none focus:ring-0"
          />
        </div>

        {/* Input Destination */}
        <div className="flex items-center space-x-3 p-3 rounded-lg" style={{ backgroundColor: neon.cardDark, border: `1px solid ${neon.blue}55` }}>
          <NeonIcon Icon={Compass} color={neon.blue} size={20} />
          <input
            type="text"
            placeholder="Destination (ex: Aeroport International)"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none focus:ring-0"
          />
        </div>
      </div>

      {/* Selection du Vehicule */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-white">Selectionner un vehicule :</h3>
        <div className="flex justify-between space-x-4">
          {carOptions.map((car) => (
            <button
              key={car.type}
              onClick={() => setSelectedCar(car.type)}
              className={`flex flex-col items-center p-3 rounded-xl w-1/3 transition-all duration-300 ring-2 ${selectedCar === car.type ? 'ring-opacity-100' : 'ring-opacity-20 hover:ring-opacity-50'}`}
              style={{
                backgroundColor: neon.cardDark,
                borderColor: car.color,
                borderStyle: 'solid',
                borderWidth: '1px',
                boxShadow: selectedCar === car.type ? `0 0 10px ${car.color}99, inset 0 0 5px ${car.color}55` : 'none',
              }}
            >
              <NeonIcon Icon={car.icon} color={car.color} size={28} className="mb-1" />
              <span className="text-sm font-semibold text-white">{car.name}</span>
              <span className="text-xs text-gray-400">{car.fare}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Bouton de Reservation */}
      <button
        onClick={handleBooking}
        disabled={!pickup || !destination}
        className="w-full py-3 text-lg font-bold rounded-xl transition-all duration-300 disabled:opacity-50 mt-6"
        style={{
          background: `linear-gradient(45deg, ${neon.orange} 0%, ${neon.green} 100%)`,
          color: neon.bgDark,
          filter: `drop-shadow(0 0 8px ${neon.orange}80)`,
        }}
      >
        Confirmer la Reservation
      </button>

      {/* Stats rapides */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        {[
          { icon: Car, label: 'Courses totales', value: '234', color: neon.blue },
          { icon: Star, label: 'Note moyenne', value: '4.8/5', color: neon.orange },
          { icon: TrendingUp, label: 'Temps moyen', value: '12 min', color: neon.green }
        ].map((stat, idx) => (
          <div 
            key={idx}
            className="p-4 rounded-xl text-center"
            style={{
              backgroundColor: neon.cardDark,
              border: `1px solid ${stat.color}33`,
              boxShadow: `0 0 10px ${stat.color}22`,
            }}
          >
            <NeonIcon Icon={stat.icon} color={stat.color} size={24} className="mx-auto mb-2" />
            <p className="text-xs text-gray-400 mb-1">{stat.label}</p>
            <p className="text-lg font-bold" style={{ color: stat.color }}>{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Header
const Header = () => (
  <header className="flex justify-between items-center p-4 border-b border-gray-800">
    {/* Horloge */}
    <DigitalClock />

    {/* Logo Neon "MAKAYA RIDE" */}
    <div className="flex-1 flex justify-center">
      <h1 
        className="text-3xl font-black italic tracking-tight"
        style={{
          color: neon.orange,
          textShadow: `0 0 10px ${neon.orange}, 0 0 20px ${neon.green}80`,
        }}
      >
        MAKAYA <NeonGlow color={neon.green}>RIDE</NeonGlow>
      </h1>
    </div>

    {/* Icones de Profil et Notifications */}
    <div className="flex space-x-4 items-center">
      <button aria-label="Notifications" className="relative p-2 rounded-full hover:bg-gray-800 transition">
        <NeonIcon Icon={Bell} color={neon.blue} size={22} className="opacity-80" />
        <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full ring-2 ring-red-300 animate-pulse"></span>
      </button>
      <button aria-label="Profil Utilisateur" className="p-1 rounded-full border-2" style={{ borderColor: neon.orange }}>
        <NeonIcon Icon={User} color={neon.orange} size={22} />
      </button>
    </div>
  </header>
);

// Composant principal
const MakayaRideNeon = () => {
  return (
    <div 
      className="min-h-screen font-sans"
      style={{ backgroundColor: neon.bgDark }}
    >
      <div className="max-w-4xl mx-auto">
        <Header />
        <main>
          <MakayaRideBooking />
        </main>

        {/* Footer */}
        <div className="text-center p-6 mt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            MAKAYA RIDE - VTC Electrique Premium
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Made with <span style={{ color: neon.green }}>love</span> for Sustainable Mobility
          </p>
        </div>
      </div>
    </div>
  );
};

export default MakayaRideNeon;
