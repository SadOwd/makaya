// 🔧 DONNÉES ENTRETIEN & MAINTENANCE
// ============================================

export const maintenanceData = {
  // Check-list entretien quotidien obligatoire
  dailyChecklist: [
    {
      category: "Habitacle",
      items: [
        { id: 1, name: "Tapis avant/arrière", status: "clean", required: true },
        { id: 2, name: "Moquette", status: "clean", required: true },
        { id: 3, name: "Tableau de bord", status: "clean", required: true },
        { id: 4, name: "Écran tactile", status: "clean", required: true },
        { id: 5, name: "Volant", status: "clean", required: true },
        { id: 6, name: "Sièges (cuir/tissu)", status: "clean", required: true },
        { id: 7, name: "Ceintures sécurité", status: "clean", required: true },
        { id: 8, name: "Vide-poches/accoudoirs", status: "clean", required: true },
        { id: 9, name: "Odeur habitacle", status: "fresh", required: true },
        { id: 10, name: "Climatisation", status: "working", required: true }
      ]
    },
    {
      category: "Vitres & Optiques",
      items: [
        { id: 11, name: "Pare-brise intérieur", status: "clean", required: true },
        { id: 12, name: "Pare-brise extérieur", status: "clean", required: true },
        { id: 13, name: "Vitres latérales", status: "clean", required: true },
        { id: 14, name: "Lunette arrière", status: "clean", required: true },
        { id: 15, name: "Rétroviseurs", status: "clean", required: true },
        { id: 16, name: "Phares avant", status: "clean", required: true },
        { id: 17, name: "Feux arrière", status: "clean", required: true },
        { id: 18, name: "Clignotants", status: "working", required: true }
      ]
    },
    {
      category: "Extérieur",
      items: [
        { id: 19, name: "Carrosserie (poussière)", status: "clean", required: true },
        { id: 20, name: "Jantes", status: "clean", required: false },
        { id: 21, name: "Pneus (usure visuelle)", status: "good", required: true },
        { id: 22, name: "Pneus (pression)", status: "ok", required: true },
        { id: 23, name: "Plaque immatriculation", status: "clean", required: true },
        { id: 24, name: "Capot (propreté)", status: "clean", required: false },
        { id: 25, name: "Coffre (propreté)", status: "clean", required: true }
      ]
    },
    {
      category: "Sécurité & Fonctionnement",
      items: [
        { id: 26, name: "Niveau batterie", status: "ok", required: true },
        { id: 27, name: "Freins (test parking)", status: "ok", required: true },
        { id: 28, name: "Klaxon", status: "working", required: true },
        { id: 29, name: "Essuie-glaces", status: "working", required: true },
        { id: 30, name: "Lave-glace", status: "ok", required: true },
        { id: 31, name: "Gilet/Triangle sécurité", status: "present", required: true },
        { id: 32, name: "Trousse premiers secours", status: "present", required: true }
      ]
    }
  ],

  // Historique entretien quotidien
  dailyMaintenanceHistory: [
    {
      date: "2025-11-18",
      vehicle: "TG-123-AB",
      model: "BYD Seal",
      shift: "Matin",
      driver: "Koffi A.",
      duration: 15, // minutes
      checklistCompleted: 32,
      checklistTotal: 32,
      issues: [],
      photos: [],
      validated: true,
      validatedBy: "Supervisor Ama",
      validatedAt: "06:45"
    },
    {
      date: "2025-11-18",
      vehicle: "TG-456-CD",
      model: "BYD Dolphin",
      shift: "Matin",
      driver: "Ama B.",
      duration: 18,
      checklistCompleted: 31,
      checklistTotal: 32,
      issues: [
        { item: "Odeur habitacle", severity: "minor", action: "Désodorisant appliqué" }
      ],
      photos: [],
      validated: true,
      validatedBy: "Supervisor Ama",
      validatedAt: "07:10"
    }
  ],

  // Véhicules en maintenance
  vehiclesInMaintenance: [
    {
      id: 1,
      vehicle: "TG-890-KL",
      model: "BYD e6",
      licensePlate: "TG-890-KL",
      entryDate: "2025-11-16",
      expectedExitDate: "2025-11-19",
      status: "En cours",
      type: "Réparation",
      issue: "Bruit suspect train arrière",
      mileage: 45230,
      estimatedCost: 125000,
      actualCost: null,
      priority: "Moyenne",
      assignedTechnician: "Kofi Tech",
      repairLog: [
        {
          date: "2025-11-16 09:30",
          technician: "Kofi Tech",
          action: "Diagnostic initial",
          details: "Levage véhicule, inspection train arrière",
          duration: 45,
          status: "Complété"
        },
        {
          date: "2025-11-16 14:00",
          technician: "Kofi Tech",
          action: "Identification problème",
          details: "Roulement roue arrière gauche usé. Commande pièce.",
          duration: 30,
          status: "Complété"
        },
        {
          date: "2025-11-18 08:00",
          technician: "Kofi Tech",
          action: "Remplacement roulement",
          details: "Réception pièce, démontage roue, remplacement roulement",
          duration: 120,
          status: "En cours"
        },
        {
          date: "2025-11-18 14:00",
          technician: "Kofi Tech",
          action: "Test routier",
          details: "Essai 20km, vérification bruit",
          duration: 45,
          status: "Planifié"
        }
      ],
      partsUsed: [
        { name: "Roulement roue ARG", ref: "BYD-BEAR-001", quantity: 1, cost: 75000 },
        { name: "Joint étanchéité", ref: "BYD-SEAL-002", quantity: 1, cost: 12000 }
      ],
      notes: "Client prioritaire VTC. Véhicule de remplacement fourni."
    },
    {
      id: 2,
      vehicle: "TG-234-GH",
      model: "BYD Atto 3",
      licensePlate: "TG-234-GH",
      entryDate: "2025-11-17",
      expectedExitDate: "2025-11-20",
      status: "En attente pièce",
      type: "Révision + Réparation",
      issue: "Révision 40k km + écran tactile défaillant",
      mileage: 40125,
      estimatedCost: 185000,
      actualCost: null,
      priority: "Haute",
      assignedTechnician: "Edem Tech",
      repairLog: [
        {
          date: "2025-11-17 10:00",
          technician: "Edem Tech",
          action: "Révision 40k km",
          details: "Vidange, filtres, freins, pneumatiques, diagnostic batterie",
          duration: 180,
          status: "Complété"
        },
        {
          date: "2025-11-17 15:30",
          technician: "Edem Tech",
          action: "Diagnostic écran",
          details: "Écran tactile non réactif. Problème carte mère écran.",
          duration: 60,
          status: "Complété"
        },
        {
          date: "2025-11-17 16:30",
          technician: "Edem Tech",
          action: "Commande pièce",
          details: "Commande écran tactile 12.8'' auprès BYD Chine",
          duration: 15,
          status: "Complété"
        },
        {
          date: "2025-11-20 09:00",
          technician: "Edem Tech",
          action: "Remplacement écran",
          details: "Installation nouvel écran, calibration, tests",
          duration: 120,
          status: "Planifié"
        }
      ],
      partsUsed: [
        { name: "Huile moteur 5L", ref: "BYD-OIL-5L", quantity: 1, cost: 35000 },
        { name: "Filtre air", ref: "BYD-FILT-AIR", quantity: 1, cost: 8000 },
        { name: "Filtre habitacle", ref: "BYD-FILT-HAB", quantity: 1, cost: 12000 },
        { name: "Écran tactile 12.8''", ref: "BYD-SCR-12.8", quantity: 1, cost: 420000, status: "Commandé" }
      ],
      notes: "Écran sous garantie constructeur. Prise en charge BYD à 80%."
    },
    {
      id: 3,
      vehicle: "TG-567-IJ",
      model: "BYD Song Plus",
      licensePlate: "TG-567-IJ",
      entryDate: "2025-11-15",
      expectedExitDate: "2025-11-18",
      status: "Prêt",
      type: "Entretien préventif",
      issue: "Révision 20k km",
      mileage: 20050,
      estimatedCost: 65000,
      actualCost: 62500,
      priority: "Normale",
      assignedTechnician: "Adjoa Tech",
      repairLog: [
        {
          date: "2025-11-15 08:30",
          technician: "Adjoa Tech",
          action: "Révision complète 20k",
          details: "Check 50 points, vidange, filtres, freinage, pneus, batterie",
          duration: 120,
          status: "Complété"
        },
        {
          date: "2025-11-15 11:00",
          technician: "Adjoa Tech",
          action: "Mise à jour OTA",
          details: "Update firmware v2.5.1, nouvelles fonctionnalités navigation",
          duration: 45,
          status: "Complété"
        },
        {
          date: "2025-11-15 12:00",
          technician: "Adjoa Tech",
          action: "Nettoyage complet",
          details: "Lavage extérieur, nettoyage intérieur détaillé",
          duration: 60,
          status: "Complété"
        },
        {
          date: "2025-11-15 13:30",
          technician: "Adjoa Tech",
          action: "Test final & rapport",
          details: "Test routier, contrôle qualité, rapport client",
          duration: 30,
          status: "Complété"
        }
      ],
      partsUsed: [
        { name: "Huile moteur 5L", ref: "BYD-OIL-5L", quantity: 1, cost: 35000 },
        { name: "Filtre air", ref: "BYD-FILT-AIR", quantity: 1, cost: 8000 },
        { name: "Filtre habitacle", ref: "BYD-FILT-HAB", quantity: 1, cost: 12000 },
        { name: "Liquide lave-glace 2L", ref: "CONS-WW-2L", quantity: 1, cost: 2500 }
      ],
      notes: "RAS. Véhicule en excellent état. Client satisfait."
    }
  ],

  // Statistiques maintenance
  stats: {
    averageRepairTime: 2.4, // jours
    vehiclesInService: 3,
    plannedMaintenance: 8, // à venir 7 jours
    overdueVehicles: 2, // maintenance en retard
    totalMaintenanceCost: 1250000, // FCFA ce mois
    preventiveVsCurative: { preventive: 78, curative: 22 } // %
  },

  // Planning entretien à venir (7 prochains jours)
  upcomingMaintenance: [
    {
      date: "2025-11-19",
      vehicle: "TG-123-AB",
      model: "BYD Seal",
      type: "Révision 60k km",
      mileage: 59850,
      estimatedDuration: 3,
      priority: "Normale"
    },
    {
      date: "2025-11-20",
      vehicle: "TG-789-EF",
      model: "BYD Dolphin",
      type: "Révision 20k km",
      mileage: 19920,
      estimatedDuration: 2,
      priority: "Normale"
    },
    {
      date: "2025-11-21",
      vehicle: "TG-345-MN",
      model: "BYD Atto 3",
      type: "Changement pneus",
      mileage: 45200,
      estimatedDuration: 1,
      priority: "Moyenne"
    },
    {
      date: "2025-11-22",
      vehicle: "TG-678-OP",
      model: "BYD e6",
      type: "Diagnostic batterie",
      mileage: 72300,
      estimatedDuration: 1,
      priority: "Haute"
    }
  ]
};
