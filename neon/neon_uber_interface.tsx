import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Navigation, Clock, Star, User, Settings, CreditCard, Bell, Menu, X, ChevronRight, Zap, Shield, Gift, TrendingUp } from 'lucide-react';

const NeonUberInterface = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [tripStatus, setTripStatus] = useState('idle');
  const [driverInfo, setDriverInfo] = useState(null);
  const [notifications, setNotifications] = useState(3);
  const mapRef = useRef(null);

  // Animation des particules néon
  useEffect(() => {
    const canvas = document.getElementById('neon-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(0, 255, 255, 0.5)';
      
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  const simulateTrip = () => {
    setTripStatus('searching');
    setTimeout(() => {
      setTripStatus('found');
      setDriverInfo({
        name: 'Alexandre Martin',
        rating: 4.9,
        car: 'Tesla Model 3',
        plate: 'AB-123-CD',
        eta: '3 min'
      });
    }, 2000);
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Canvas pour les particules néon */}
      <canvas id="neon-canvas" className="absolute inset-0 pointer-events-none opacity-30" />
      
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
        <div className="flex items-center justify-between p-4">
          <button onClick={() => setMenuOpen(true)} className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all">
            <Menu className="w-6 h-6 text-cyan-400" />
          </button>
          
          <div className="text-2xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-pulse">
              NEON RIDE
            </span>
          </div>
          
          <button className="relative p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all">
            <Bell className="w-6 h-6 text-cyan-400" />
            {notifications > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-pink-500 rounded-full text-xs flex items-center justify-center text-white font-bold animate-bounce">
                {notifications}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Menu latéral */}
      <div className={`fixed inset-0 z-50 transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
        <div className="absolute left-0 top-0 bottom-0 w-80 bg-gradient-to-br from-gray-900 via-gray-800 to-black border-r border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Jean Dupont</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-cyan-400 text-sm">4.8</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setMenuOpen(false)} className="p-2 hover:bg-cyan-500/10 rounded-lg transition-all">
                <X className="w-6 h-6 text-cyan-400" />
              </button>
            </div>

            <nav className="space-y-2">
              {[
                { icon: Clock, label: 'Mes trajets', badge: null },
                { icon: CreditCard, label: 'Paiements', badge: null },
                { icon: Gift, label: 'Promotions', badge: '2' },
                { icon: Shield, label: 'Sécurité', badge: null },
                { icon: TrendingUp, label: 'Statistiques', badge: null },
                { icon: Settings, label: 'Paramètres', badge: null }
              ].map((item, i) => (
                <button key={i} className="w-full flex items-center justify-between p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20 hover:bg-cyan-500/10 hover:border-cyan-500/40 transition-all group">
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                    <span className="text-white group-hover:text-cyan-300">{item.label}</span>
                  </div>
                  {item.badge ? (
                    <span className="px-2 py-1 bg-pink-500 rounded-full text-xs text-white">{item.badge}</span>
                  ) : (
                    <ChevronRight className="w-5 h-5 text-cyan-400/50 group-hover:text-cyan-400" />
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Carte interactive */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black relative">
          {/* Simulation de carte avec grille néon */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" style={{ top: `${i * 5}%` }} />
            ))}
            {[...Array(20)].map((_, i) => (
              <div key={i} className="absolute h-full w-px bg-gradient-to-b from-transparent via-cyan-500 to-transparent" style={{ left: `${i * 5}%` }} />
            ))}
          </div>

          {/* Marqueurs de position */}
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500 rounded-full blur-xl animate-pulse" />
              <MapPin className="w-12 h-12 text-cyan-400 relative z-10 drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]" />
            </div>
          </div>

          {tripStatus === 'found' && (
            <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 animate-bounce">
              <div className="relative">
                <div className="absolute inset-0 bg-pink-500 rounded-full blur-xl animate-pulse" />
                <Navigation className="w-10 h-10 text-pink-400 relative z-10" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Panneau principal */}
      <div className="absolute bottom-0 left-0 right-0 z-40">
        {tripStatus === 'idle' && (
          <div className="bg-gradient-to-t from-black via-gray-900/95 to-transparent backdrop-blur-xl border-t border-cyan-500/30 rounded-t-3xl shadow-2xl shadow-cyan-500/20">
            <div className="p-6 space-y-4">
              <h2 className="text-white text-2xl font-bold mb-4">Où allez-vous ?</h2>
              
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400" />
                <input
                  type="text"
                  placeholder="Adresse de départ"
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all"
                />
              </div>

              <div className="relative">
                <Navigation className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-pink-400" />
                <input
                  type="text"
                  placeholder="Destination"
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-pink-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all"
                />
              </div>

              <div className="grid grid-cols-3 gap-3 mt-6">
                {[
                  { name: 'Eco', price: '15€', time: '5 min', color: 'cyan' },
                  { name: 'Confort', price: '22€', time: '3 min', color: 'purple' },
                  { name: 'Premium', price: '35€', time: '2 min', color: 'pink' }
                ].map((option, i) => (
                  <button key={i} className={`p-4 rounded-xl bg-${option.color}-500/10 border border-${option.color}-500/30 hover:bg-${option.color}-500/20 hover:border-${option.color}-500/50 transition-all group`}>
                    <Zap className={`w-6 h-6 text-${option.color}-400 mb-2 mx-auto`} />
                    <div className={`text-${option.color}-400 font-bold`}>{option.name}</div>
                    <div className="text-white text-sm">{option.price}</div>
                    <div className="text-gray-400 text-xs">{option.time}</div>
                  </button>
                ))}
              </div>

              <button
                onClick={simulateTrip}
                className="w-full py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl text-white font-bold text-lg shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-105 transition-all"
              >
                Rechercher un chauffeur
              </button>
            </div>
          </div>
        )}

        {tripStatus === 'searching' && (
          <div className="bg-gradient-to-t from-black via-gray-900/95 to-transparent backdrop-blur-xl border-t border-cyan-500/30 rounded-t-3xl p-8 text-center">
            <div className="relative w-24 h-24 mx-auto mb-6">
              <div className="absolute inset-0 border-4 border-cyan-500/30 rounded-full animate-ping" />
              <div className="absolute inset-0 border-4 border-t-cyan-500 border-r-purple-500 border-b-pink-500 border-l-cyan-500 rounded-full animate-spin" />
            </div>
            <h3 className="text-white text-2xl font-bold mb-2">Recherche en cours...</h3>
            <p className="text-gray-400">Nous trouvons le meilleur chauffeur pour vous</p>
          </div>
        )}

        {tripStatus === 'found' && driverInfo && (
          <div className="bg-gradient-to-t from-black via-gray-900/95 to-transparent backdrop-blur-xl border-t border-cyan-500/30 rounded-t-3xl shadow-2xl shadow-cyan-500/20">
            <div className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                  <User className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-xl font-bold">{driverInfo.name}</h3>
                  <div className="flex items-center gap-2 mb-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-cyan-400 font-bold">{driverInfo.rating}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{driverInfo.car} • {driverInfo.plate}</p>
                </div>
                <div className="text-right">
                  <div className="text-cyan-400 text-3xl font-bold">{driverInfo.eta}</div>
                  <div className="text-gray-400 text-sm">d'attente</div>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 py-3 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-cyan-400 font-bold hover:bg-cyan-500/20 transition-all">
                  Appeler
                </button>
                <button className="flex-1 py-3 bg-pink-500/10 border border-pink-500/30 rounded-xl text-pink-400 font-bold hover:bg-pink-500/20 transition-all">
                  Message
                </button>
                <button className="flex-1 py-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 font-bold hover:bg-red-500/20 transition-all">
                  Annuler
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NeonUberInterface;