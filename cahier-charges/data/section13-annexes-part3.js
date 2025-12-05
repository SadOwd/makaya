/**
 * SECTION 13 : ANNEXES TECHNIQUES - PARTIE 3/3
 * Cahier des Charges - Station de Recharge VE
 * 
 * Contacts, fournisseurs et ressources documentaires
 * NOTE: Fusionner avec parties 1 et 2 pour obtenir la section complète
 */

export const annexesTechniquesData_Part3 = {
  // ============================================================================
  // 8. CONTACTS UTILES
  // ============================================================================
  contactsUtiles: {
    titre: "Annuaire des Contacts Utiles",
    
    autorites: [
      {
        organisme: "CEET (Compagnie Énergie Électrique du Togo)",
        service: "Direction Commerciale",
        adresse: "31 Avenue de la Libération, Lomé",
        telephone: "+228 22 21 44 00",
        email: "info@ceet.tg",
        web: "www.ceet.tg",
        contact: "Raccordements et abonnements"
      },
      {
        organisme: "Mairie de Lomé",
        service: "Service d'Urbanisme",
        adresse: "Boulevard du 13 Janvier, Lomé",
        telephone: "+228 22 21 26 91",
        contact: "Permis de construire"
      },
      {
        organisme: "ANGE (Agence Nationale de Gestion de l'Environnement)",
        adresse: "Avenue de la Kozah, Lomé",
        telephone: "+228 22 51 01 96",
        email: "info@ange.tg",
        web: "www.ange.tg",
        contact: "Études impact environnemental"
      },
      {
        organisme: "ARE (Autorité de Régulation de l'Électricité)",
        adresse: "Lomé",
        telephone: "+228 22 27 04 04",
        contact: "Réglementation électricité"
      },
      {
        organisme: "Ministère du Commerce",
        service: "Direction des Autorisations",
        adresse: "Lomé",
        telephone: "+228 22 21 55 01",
        contact: "Autorisation exploitation commerciale"
      }
    ],
    
    fournisseursEquipements: [
      {
        entreprise: "DELU (Shenzhen DELU Energy Technology Co.)",
        pays: "Chine",
        produits: ["Bornes AC 21kW", "Bornes DC 60kW", "Bornes DC 120kW"],
        contact: "sales@delu-ev.com",
        web: "www.delu-ev.com",
        representant: "À identifier au Togo ou Afrique de l'Ouest",
        delaiLivraison: "6-8 semaines",
        garantie: "3 ans standard, extension 5 ans possible",
        note: "Fournisseur principal du projet"
      },
      {
        entreprise: "Schneider Electric",
        pays: "France / International",
        produits: ["TGBT", "Disjoncteurs", "Protections"],
        contact: "Distributeur Lomé",
        web: "www.se.com",
        representantTogo: "À vérifier disponibilité locale",
        note: "Leader mondial appareillage électrique"
      },
      {
        entreprise: "Legrand",
        pays: "France",
        produits: ["Appareillage électrique", "Tableaux"],
        contact: "Distributeurs locaux",
        web: "www.legrand.com",
        alternative: "Schneider Electric"
      },
      {
        entreprise: "ABB",
        pays: "Suisse / International",
        produits: ["Bornes Terra DC", "TGBT", "Protections"],
        web: "www.abb.com",
        note: "Fournisseur alternatif bornes haut de gamme"
      },
      {
        entreprise: "Nexans / Prysmian",
        pays: "France / Italie",
        produits: ["Câbles électriques"],
        contact: "Distributeurs Lomé",
        note: "Leaders mondiaux câblerie"
      }
    ],
    
    bureauxEtudes: [
      {
        specialite: "Bureau d'études électriques",
        missions: ["Conception installations", "Schémas électriques", "Notes calcul"],
        qualification: "Ingénieur électricien expérimenté IRVE",
        note: "À sélectionner localement ou international"
      },
      {
        specialite: "Bureau d'études génie civil",
        missions: ["Calcul structures", "Plans exécution", "Voirie"],
        qualification: "Ingénieur structures, expérience ouvrages similaires",
        note: "Disponible localement Lomé"
      },
      {
        specialite: "Architecte",
        missions: ["Conception architecturale", "Permis construire"],
        qualification: "Inscrit Ordre Architectes Togo",
        note: "Obligatoire pour permis"
      },
      {
        specialite: "Géotechnicien",
        missions: ["Étude sol G2", "Recommandations fondations"],
        qualification: "Laboratoire agréé",
        entreprisesSuggestions: ["LNBTP (Laboratoire National BTP Togo)"]
      },
      {
        specialite: "Bureau études environnement",
        missions: ["EIE", "Plan gestion environnement"],
        qualification: "Agréé ANGE",
        note: "Plusieurs disponibles Lomé"
      }
    ],
    
    entreprisesGenerales: [
      {
        type: "Entreprise générale tous corps état",
        qualification: "Catégorie B minimum",
        missions: ["Gros œuvre", "VRD", "Second œuvre"],
        note: "Plusieurs entreprises qualifiées Lomé"
      },
      {
        type: "Entreprise électricité",
        qualification: "Certifiée IRVE (ou formation obligatoire)",
        missions: ["Installations électriques", "Bornes recharge"],
        importance: "CRITIQUE : Certification IRVE obligatoire"
      },
      {
        type: "Intégrateur systèmes supervision",
        qualification: "Expérience OCPP et bornes recharge",
        missions: ["Plateforme supervision", "Communication", "Applications"],
        note: "Peut être international (remote)"
      }
    ],
    
    organismesControle: [
      {
        organisme: "Bureau de contrôle technique",
        missions: ["Vérification conception", "Contrôle exécution", "Coordination SPS"],
        qualification: "Agréé au Togo",
        note: "Obligatoire"
      },
      {
        organisme: "Laboratoire essais",
        missions: ["Essais béton", "Compactage", "Électrique"],
        qualification: "Accrédité COFRAC ou équivalent",
        exemple: "LNBTP Togo"
      },
      {
        organisme: "Organisme certification (pour bornes)",
        missions: ["Marquage CE", "Certifications IEC"],
        note: "Généralement fourni par fabricant bornes"
      }
    ],
    
    assurances: [
      {
        type: "Assurance tous risques chantier",
        obligatoire: true,
        souscripteur: "Entreprise principale",
        compagniesSuggestions: ["ALLIANZ Togo", "NSIA Togo", "Colina Togo"]
      },
      {
        type: "Assurance décennale",
        obligatoire: true,
        souscripteur: "Entreprises GC et électricité",
        duree: "10 ans"
      },
      {
        type: "Assurance RC exploitation",
        obligatoire: true,
        souscripteur: "Exploitant station",
        montantMin: "500 M FCFA",
        duree: "Permanente"
      }
    ]
  },

  // ============================================================================
  // 9. RESSOURCES DOCUMENTAIRES
  // ============================================================================
  ressourcesDocumentaires: {
    titre: "Ressources et Documentation de Référence",
    
    normesElectrotechniques: [
      {
        source: "AFNOR (Association Française Normalisation)",
        web: "www.boutique.afnor.org",
        acces: "Payant (abonnement ou achat unitaire)",
        normes: ["NF C 15-100", "DTU divers", "NF C 18-510"],
        cout: "~100-200 EUR/norme"
      },
      {
        source: "IEC (Commission Électrotechnique Internationale)",
        web: "webstore.iec.ch",
        acces: "Payant",
        normes: ["IEC 61851", "IEC 62196", "IEC 60364"],
        cout: "~150-300 CHF/norme"
      },
      {
        source: "CEN (Comité Européen Normalisation)",
        web: "www.cen.eu",
        acces: "Via organismes nationaux (AFNOR)",
        normes: ["Eurocodes"]
      }
    ],
    
    guidesRecharge: [
      {
        titre: "Guide pratique recharge véhicules électriques (AVERE France)",
        web: "www.avere-france.org",
        acces: "Gratuit",
        contenu: "Installation bornes, réglementation, retours expérience"
      },
      {
        titre: "Livre blanc IRVE (Gimelec)",
        web: "www.gimelec.fr",
        acces: "Gratuit (inscription)",
        contenu: "État art, bonnes pratiques, cas d'usage"
      },
      {
        titre: "Guidelines EV Charging Infrastructure (EAFO)",
        web: "alternative-fuels-observatory.ec.europa.eu",
        acces: "Gratuit",
        contenu: "Données européennes, statistiques, tendances"
      }
    ],
    
    protocolesCommunication: [
      {
        protocole: "OCPP (Open Charge Point Protocol)",
        organisme: "Open Charge Alliance",
        web: "www.openchargealliance.org",
        acces: "Gratuit (inscription)",
        versions: ["1.6J", "2.0", "2.0.1"],
        documentation: "Spécifications complètes téléchargeables"
      },
      {
        protocole: "ISO 15118",
        organisme: "ISO",
        web: "www.iso.org",
        acces: "Payant",
        note: "Communication avancée V2G"
      }
    ],
    
    outilsCalcul: [
      {
        outil: "Calculateur section câbles (Legrand/Schneider)",
        web: "Disponible sur sites fabricants",
        acces: "Gratuit",
        fonctions: "Dimensionnement câbles selon NF C 15-100"
      },
      {
        outil: "Excel templates budget/ROI",
        source: "Modèles disponibles internet",
        acces: "Gratuit ou payant",
        note: "Adapter aux spécificités projet"
      },
      {
        outil: "Logiciels CAO électrique",
        exemples: ["AutoCAD Electrical", "SEE Electrical", "EPLAN"],
        usage: "Plans schémas électriques",
        acces: "Licence payante"
      }
    ],
    
    retoursExperience: [
      {
        source: "Cas d'étude stations Afrique",
        recherche: "Recherche internet + contacts AVERE",
        utilite: "Benchmarking, leçons apprises"
      },
      {
        source: "Forums professionnels IRVE",
        exemples: ["LinkedIn groupes IRVE", "Forums AVERE"],
        utilite: "Échanges expériences, conseils"
      },
      {
        source: "Webinaires et conférences",
        organisateurs: ["AVERE", "Gimelec", "Salons automobile"],
        utilite: "Veille technologique, networking"
      }
    ]
  },

  // ============================================================================
  // 10. CHECKLIST FINALE
  // ============================================================================
  checklistFinale: {
    titre: "Checklist Complète du Projet",
    
    avantDemarrage: [
      {
        phase: "Études préalables",
        items: [
          "☐ Étude faisabilité technique réalisée",
          "☐ Étude géotechnique G2 réalisée",
          "☐ Étude topographique réalisée",
          "☐ Étude impact environnemental réalisée",
          "☐ Toutes études validées par MO"
        ]
      },
      {
        phase: "Conception",
        items: [
          "☐ Plans architecturaux visés",
          "☐ Plans génie civil validés + notes calcul",
          "☐ Schémas électriques validés",
          "☐ CCTP rédigés (GC, Élec, VRD)",
          "☐ Métrés et BPU établis",
          "☐ Budget confirmé"
        ]
      },
      {
        phase: "Autorisations",
        items: [
          "☐ Permis de construire obtenu",
          "☐ Autorisation CEET obtenue",
          "☐ Certificat ANGE obtenu",
          "☐ Autorisation exploitation commerce obtenue",
          "☐ Toutes autorisations en cours de validité"
        ]
      },
      {
        phase: "Contractualisation",
        items: [
          "☐ Contrat maître d'œuvre signé",
          "☐ Contrat bureau contrôle signé",
          "☐ Contrats entreprises signés",
          "☐ Cautions bancaires déposées",
          "☐ Assurances souscrites (chantier, décennale, RC)",
          "☐ Planning validé par toutes parties"
        ]
      },
      {
        phase: "Approvisionnements",
        items: [
          "☐ Bornes commandées (délai 6-8 sem)",
          "☐ TGBT commandé",
          "☐ Câbles réservés",
          "☐ Matériaux GC réservés",
          "☐ Livraisons programmées"
        ]
      }
    ],
    
    pendantTravaux: [
      {
        phase: "Démarrage chantier",
        items: [
          "☐ Installation de chantier (clôture, base vie)",
          "☐ Panneaux signalisation chantier",
          "☐ Branchements provisoires",
          "☐ Réunion démarrage tenue",
          "☐ PV installation chantier signé"
        ]
      },
      {
        phase: "Gros œuvre",
        items: [
          "☐ Implantation validée par géomètre",
          "☐ Terrassement terminé + contrôles",
          "☐ Fondations coulées + essais béton",
          "☐ Réseaux enterrés posés + tests",
          "☐ Voirie terminée + contrôles",
          "☐ Local technique clos/couvert"
        ]
      },
      {
        phase: "Équipements électriques",
        items: [
          "☐ TGBT installé et câblé",
          "☐ Raccordement CEET effectué",
          "☐ Mise sous tension validée",
          "☐ Tous câbles tirés et raccordés",
          "☐ Réseau terre testé (R < 10Ω)",
          "☐ Tests électriques préalables OK"
        ]
      },
      {
        phase: "Bornes de recharge",
        items: [
          "☐ Toutes bornes livrées et inspectées",
          "☐ Bornes fixées sur fondations",
          "☐ Raccordements électriques faits",
          "☐ Raccordements communication faits",
          "☐ Configuration logicielle effectuée",
          "☐ Tests unitaires bornes OK"
        ]
      },
      {
        phase: "Finitions",
        items: [
          "☐ Clôture et portails installés",
          "☐ Espaces verts aménagés",
          "☐ Signalétique posée",
          "☐ Mobilier urbain installé",
          "☐ Nettoyage final effectué"
        ]
      }
    ],
    
    miseEnService: [
      {
        phase: "Tests et essais",
        items: [
          "☐ Tests intégration système réalisés",
          "☐ Test charge complète AC effectué",
          "☐ Test charge rapide DC effectué",
          "☐ Test load balancing validé",
          "☐ Test authentification (badge, app) OK",
          "☐ Test paiement OK",
          "☐ Test supervision temps réel OK",
          "☐ Test mode dégradé OK",
          "☐ Essais réglementaires effectués",
          "☐ Rapport tests complet rédigé"
        ]
      },
      {
        phase: "Documentation",
        items: [
          "☐ DOE complet remis (3 classeurs + USB)",
          "☐ DIUO remis",
          "☐ Manuels utilisation remis",
          "☐ Manuels maintenance remis",
          "☐ Attestations conformité fournies",
          "☐ Certificats garanties remis",
          "☐ Contacts SAV fournis"
        ]
      },
      {
        phase: "Formations",
        items: [
          "☐ Formation exploitants effectuée (2j)",
          "☐ Formation maintenance effectuée (3j)",
          "☐ Attestations formation délivrées",
          "☐ Supports formation remis",
          "☐ Procédures d'urgence comprises"
        ]
      },
      {
        phase: "Réception",
        items: [
          "☐ Visite contradictoire effectuée",
          "☐ Liste réserves établie (si besoin)",
          "☐ PV réception provisoire signé",
          "☐ Garanties activées",
          "☐ Station opérationnelle",
          "☐ Communication officielle lancée"
        ]
      }
    ],
    
    postOuverture: [
      {
        phase: "Exploitation",
        items: [
          "☐ Procédures exploitation en place",
          "☐ Personnel formé opérationnel",
          "☐ Supervision fonctionnelle",
          "☐ Support client actif",
          "☐ Maintenance préventive planifiée",
          "☐ Registre maintenance tenu",
          "☐ Suivi KPI hebdomadaire",
          "☐ Facturation clients opérationnelle"
        ]
      },
      {
        phase: "Garantie (12 mois)",
        items: [
          "☐ Visite 3 mois effectuée",
          "☐ Réserves mineures levées",
          "☐ Visite 6 mois effectuée",
          "☐ Ajustements réalisés",
          "☐ Visite 9 mois effectuée",
          "☐ Visite 12 mois (préparation réception définitive)",
          "☐ Réception définitive signée",
          "☐ Retenue garantie libérée"
        ]
      }
    ]
  },

  // ============================================================================
  // 11. RÉCAPITULATIF SECTION 13
  // ============================================================================
  recapitulatifSection13: {
    titre: "Récapitulatif des Annexes Techniques",
    
    contenu: [
      {
        annexe: "Glossaire",
        elements: "24 termes techniques définis"
      },
      {
        annexe: "Normes de référence",
        elements: "15+ normes électriques, GC, sécurité"
      },
      {
        annexe: "Caractéristiques véhicules",
        elements: "6 modèles VE détaillés"
      },
      {
        annexe: "Dimensionnement électrique",
        elements: "Calculs puissance, sections câbles, protections"
      },
      {
        annexe: "Formules de calcul",
        elements: "20+ formules (électriques, financières, exploitation)"
      },
      {
        annexe: "Tables conversion",
        elements: "Toutes unités utilisées"
      },
      {
        annexe: "Données climatiques Lomé",
        elements: "Températures, précipitations, implications"
      },
      {
        annexe: "Contacts utiles",
        elements: "40+ contacts (autorités, fournisseurs, BE, entreprises)"
      },
      {
        annexe: "Ressources documentaires",
        elements: "Normes, guides, outils, retours expérience"
      },
      {
        annexe: "Checklist finale",
        elements: "100+ points de contrôle (avant, pendant, après)"
      }
    ],
    
    utilisationRecommandee: [
      "Consulter glossaire pour termes techniques",
      "Vérifier conformité aux normes listées",
      "Utiliser formules calcul pour validations",
      "Contacter organismes référencés",
      "Suivre checklist rigoureusement",
      "Conserver comme référence pendant tout projet"
    ]
  }
};

// Export par défaut
export default annexesTechniquesData_Part3;
