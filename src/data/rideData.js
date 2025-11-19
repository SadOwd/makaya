// 🚕 MAKAYA RIDE - DONNÉES VTC
// ============================================

export const rideData = {
  // Métriques globales temps réel
  metrics: {
    dailyRides: 234,
    activeDrivers: 45,
    totalFleet: 52,
    averageRating: 4.7,
    dailyRevenue: 1850000, // FCFA
    occupancyRate: 0.72,
    avgTripDuration: 18, // minutes
    avgDistance: 8.5, // km
  },

  // Flotte de véhicules
  fleet: [
    {
      id: 1,
      model: "BYD e6",
      category: "Premium",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop",
      status: "available",
      licensePlate: "TG-123-AB",
      battery: 85,
      range: 420,
      kmToday: 145,
      driver: "Koffi A.",
      location: "Aéroport",
      lastUpdate: "Il y a 2 min",
      earnings24h: 45000
    },
    {
      id: 2,
      model: "BYD Dolphin",
      category: "Standard",
      image: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=400&h=300&fit=crop",
      status: "occupied",
      licensePlate: "TG-456-CD",
      battery: 62,
      range: 340,
      kmToday: 218,
      driver: "Ama B.",
      location: "En course → Centre-ville",
      lastUpdate: "Il y a 1 min",
      earnings24h: 52000
    },
    {
      id: 3,
      model: "BYD Seal",
      category: "Premium Plus",
      image: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=400&h=300&fit=crop",
      status: "charging",
      licensePlate: "TG-789-EF",
      battery: 35,
      range: 550,
      kmToday: 287,
      driver: "Kokou C.",
      location: "Station Recharge Aéroport",
      lastUpdate: "Il y a 5 min",
      earnings24h: 68000
    },
    {
      id: 4,
      model: "BYD Atto 3",
      category: "Standard Plus",
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=300&fit=crop",
      status: "available",
      licensePlate: "TG-234-GH",
      battery: 91,
      range: 480,
      kmToday: 98,
      driver: "Edem D.",
      location: "Tokoin",
      lastUpdate: "Il y a 3 min",
      earnings24h: 38000
    },
    {
      id: 5,
      model: "BYD Song Plus",
      category: "Premium",
      image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&h=300&fit=crop",
      status: "occupied",
      licensePlate: "TG-567-IJ",
      battery: 78,
      range: 505,
      kmToday: 165,
      driver: "Adjoa E.",
      location: "En course → Légbassito",
      lastUpdate: "Il y a 30 sec",
      earnings24h: 47000
    },
    {
      id: 6,
      model: "BYD e6",
      category: "Premium",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop",
      status: "maintenance",
      licensePlate: "TG-890-KL",
      battery: 15,
      range: 420,
      kmToday: 0,
      driver: "-",
      location: "Garage SAV",
      lastUpdate: "Il y a 1h",
      earnings24h: 0
    }
  ],

  // Top chauffeurs du mois
  topDrivers: [
    {
      id: 1,
      name: "Koffi A.",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      rating: 4.9,
      totalRides: 432,
      ridesThisMonth: 125,
      earnings: 3250000,
      status: "En ligne",
      vehicle: "BYD e6",
      joinedDate: "Mars 2024"
    },
    {
      id: 2,
      name: "Ama B.",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      rating: 4.8,
      totalRides: 398,
      ridesThisMonth: 118,
      earnings: 3120000,
      status: "En course",
      vehicle: "BYD Dolphin",
      joinedDate: "Février 2024"
    },
    {
      id: 3,
      name: "Kokou C.",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      rating: 4.9,
      totalRides: 456,
      ridesThisMonth: 112,
      earnings: 3480000,
      status: "Pause",
      vehicle: "BYD Seal",
      joinedDate: "Janvier 2024"
    },
    {
      id: 4,
      name: "Adjoa E.",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      rating: 4.7,
      totalRides: 367,
      ridesThisMonth: 108,
      earnings: 2890000,
      status: "En ligne",
      vehicle: "BYD Song Plus",
      joinedDate: "Avril 2024"
    },
    {
      id: 5,
      name: "Edem D.",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
      rating: 4.8,
      totalRides: 389,
      ridesThisMonth: 95,
      earnings: 2750000,
      status: "En ligne",
      vehicle: "BYD Atto 3",
      joinedDate: "Mars 2024"
    }
  ],

  // Historique des courses (pour graphiques)
  ridesHistory: [
    { hour: "00h", rides: 12, revenue: 85000 },
    { hour: "01h", rides: 8, revenue: 52000 },
    { hour: "02h", rides: 5, revenue: 38000 },
    { hour: "03h", rides: 3, revenue: 25000 },
    { hour: "04h", rides: 4, revenue: 32000 },
    { hour: "05h", rides: 18, revenue: 125000 },
    { hour: "06h", rides: 45, revenue: 298000 },
    { hour: "07h", rides: 67, revenue: 445000 },
    { hour: "08h", rides: 82, revenue: 578000 },
    { hour: "09h", rides: 52, revenue: 368000 },
    { hour: "10h", rides: 38, revenue: 265000 },
    { hour: "11h", rides: 42, revenue: 298000 },
    { hour: "12h", rides: 58, revenue: 412000 },
    { hour: "13h", rides: 48, revenue: 335000 },
    { hour: "14h", rides: 35, revenue: 245000 },
    { hour: "15h", rides: 41, revenue: 287000 },
    { hour: "16h", rides: 54, revenue: 385000 },
    { hour: "17h", rides: 72, revenue: 512000 },
    { hour: "18h", rides: 89, revenue: 625000 },
    { hour: "19h", rides: 65, revenue: 458000 },
    { hour: "20h", rides: 48, revenue: 342000 },
    { hour: "21h", rides: 38, revenue: 268000 },
    { hour: "22h", rides: 28, revenue: 198000 },
    { hour: "23h", rides: 18, revenue: 125000 }
  ],

  // Revenus hebdomadaires
  weeklyRevenue: [
    { day: "Lun", rides: 198, revenue: 1520000 },
    { day: "Mar", rides: 212, revenue: 1685000 },
    { day: "Mer", rides: 234, revenue: 1850000 },
    { day: "Jeu", rides: 225, revenue: 1785000 },
    { day: "Ven", rides: 267, revenue: 2120000 },
    { day: "Sam", rides: 289, revenue: 2350000 },
    { day: "Dim", rides: 245, revenue: 1980000 }
  ],

  // Zones chaudes (heatmap Lomé)
  hotZones: [
    { zone: "Aéroport", rides: 156, avgWaitTime: 3.2 },
    { zone: "Centre-ville", rides: 142, avgWaitTime: 5.1 },
    { zone: "Tokoin", rides: 98, avgWaitTime: 7.3 },
    { zone: "Légbassito", rides: 87, avgWaitTime: 8.5 },
    { zone: "Bè", rides: 76, avgWaitTime: 9.2 },
    { zone: "Kégué", rides: 62, avgWaitTime: 11.5 },
    { zone: "Adidogomé", rides: 54, avgWaitTime: 12.8 },
    { zone: "Agoè", rides: 48, avgWaitTime: 14.2 }
  ],

  // Tendances jour par jour (30 derniers jours)
  dailyTrends: [
    { date: "2025-10-19", rides: 198, revenue: 1520000, activeDrivers: 42, avgRating: 4.7 },
    { date: "2025-10-20", rides: 205, revenue: 1595000, activeDrivers: 43, avgRating: 4.7 },
    { date: "2025-10-21", rides: 212, revenue: 1685000, activeDrivers: 44, avgRating: 4.8 },
    { date: "2025-10-22", rides: 198, revenue: 1540000, activeDrivers: 41, avgRating: 4.7 },
    { date: "2025-10-23", rides: 189, revenue: 1475000, activeDrivers: 40, avgRating: 4.6 },
    { date: "2025-10-24", rides: 195, revenue: 1520000, activeDrivers: 42, avgRating: 4.7 },
    { date: "2025-10-25", rides: 220, revenue: 1750000, activeDrivers: 45, avgRating: 4.8 },
    { date: "2025-10-26", rides: 267, revenue: 2120000, activeDrivers: 48, avgRating: 4.8 },
    { date: "2025-10-27", rides: 289, revenue: 2350000, activeDrivers: 50, avgRating: 4.9 },
    { date: "2025-10-28", rides: 245, revenue: 1980000, activeDrivers: 46, avgRating: 4.7 },
    { date: "2025-10-29", rides: 208, revenue: 1625000, activeDrivers: 43, avgRating: 4.7 },
    { date: "2025-10-30", rides: 215, revenue: 1690000, activeDrivers: 44, avgRating: 4.8 },
    { date: "2025-10-31", rides: 228, revenue: 1820000, activeDrivers: 46, avgRating: 4.8 },
    { date: "2025-11-01", rides: 232, revenue: 1865000, activeDrivers: 47, avgRating: 4.8 },
    { date: "2025-11-02", rides: 267, revenue: 2140000, activeDrivers: 49, avgRating: 4.9 },
    { date: "2025-11-03", rides: 285, revenue: 2290000, activeDrivers: 50, avgRating: 4.9 },
    { date: "2025-11-04", rides: 252, revenue: 2025000, activeDrivers: 47, avgRating: 4.8 },
    { date: "2025-11-05", rides: 218, revenue: 1735000, activeDrivers: 44, avgRating: 4.7 },
    { date: "2025-11-06", rides: 225, revenue: 1795000, activeDrivers: 45, avgRating: 4.8 },
    { date: "2025-11-07", rides: 238, revenue: 1905000, activeDrivers: 46, avgRating: 4.8 },
    { date: "2025-11-08", rides: 242, revenue: 1940000, activeDrivers: 47, avgRating: 4.8 },
    { date: "2025-11-09", rides: 275, revenue: 2210000, activeDrivers: 49, avgRating: 4.9 },
    { date: "2025-11-10", rides: 292, revenue: 2380000, activeDrivers: 51, avgRating: 4.9 },
    { date: "2025-11-11", rides: 258, revenue: 2085000, activeDrivers: 48, avgRating: 4.8 },
    { date: "2025-11-12", rides: 228, revenue: 1820000, activeDrivers: 45, avgRating: 4.7 },
    { date: "2025-11-13", rides: 232, revenue: 1865000, activeDrivers: 46, avgRating: 4.8 },
    { date: "2025-11-14", rides: 245, revenue: 1970000, activeDrivers: 47, avgRating: 4.8 },
    { date: "2025-11-15", rides: 248, revenue: 1995000, activeDrivers: 47, avgRating: 4.8 },
    { date: "2025-11-16", rides: 278, revenue: 2240000, activeDrivers: 50, avgRating: 4.9 },
    { date: "2025-11-17", rides: 295, revenue: 2405000, activeDrivers: 51, avgRating: 4.9 },
    { date: "2025-11-18", rides: 234, revenue: 1850000, activeDrivers: 45, avgRating: 4.7 }
  ],

  // Statistiques flotte
  fleetStats: {
    statusBreakdown: [
      { status: "Disponible", count: 18, percentage: 34.6, color: "#10B981" },
      { status: "En course", count: 24, percentage: 46.2, color: "#F59E0B" },
      { status: "Recharge", count: 6, percentage: 11.5, color: "#3B82F6" },
      { status: "Maintenance", count: 4, percentage: 7.7, color: "#EF4444" }
    ],
    avgBatteryLevel: 68,
    totalKmToday: 8945,
    avgKmPerVehicle: 172
  }
};
