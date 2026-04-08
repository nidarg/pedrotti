export const siteData = {
  company: {
    name: "Pedrotti Srl - Soccorso Stradale Pedrotti",
    shortName: "Soccorso Stradale Pedrotti",
    email: "info@soccorsostradalepedrotti.com",
    phoneDisplay: "(+39) 0464 913290",
    phoneHref: "+390464913290",
    website: "www.soccorsostradalepedrotti.com",
    whatsappNumber: "390464913290",
  },

  hero: {
    badge: "Soccorso stradale H24",
    title: "Intervento rapido per auto, furgoni e mezzi pesanti",
    subtitle:
      "Pedrotti Group è specializzato in soccorso stradale, recupero e trasporto veicoli, con particolare riferimento ai mezzi pesanti. Assistenza attiva 24 ore su 24 in viabilità ordinaria e autostradale.",
  },

  locations: [
    {
      name: "Sede di Mori",
      addressLine1: "Via Matteotti 3/C",
      addressLine2: "38065 Mori (TN)",
    },
    {
      name: "Sede di Trento",
      addressLine1: "Loc. Roncafort 4",
      addressLine2: "38121 Trento (TN)",
    },
  ],

  certifications: [
    "Certificazione del sistema qualità Europ Assistance",
    "UNI-EN ISO 9001:2008",
    "Servizio di Soccorso Meccanico H24 in viabilità ordinaria e autostradale",
  ],

 services: [
  {
    title: "Soccorso stradale H24",
    description:
      "Intervento rapido 24 ore su 24 per auto, moto, furgoni e assistenza in emergenza.",
    iconKey: "truck",
  },
  {
    title: "Recupero e trasporto veicoli",
    description:
      "Recupero sicuro e trasporto professionale di veicoli incidentati o in panne.",
    iconKey: "towTruck",
  },
  {
    title: "Assistenza per mezzi pesanti",
    description:
      "Supporto specializzato per camion, mezzi industriali e flotte aziendali.",
    iconKey: "shield",
  },
  {
    title: "Autofficina",
    description:
      "Diagnosi, riparazioni e assistenza tecnica con personale qualificato.",
    iconKey: "wrench",
  },
  {
    title: "Noleggio auto e furgoni Hertz",
    description:
      "Servizio di noleggio rapido per mobilità sostitutiva e necessità aziendali.",
    iconKey: "car",
  },
  {
    title: "Noleggio autogrù",
    description:
      "Servizio di sollevamento e recupero mezzi con attrezzature specialistiche.",
    iconKey: "construction",
  },
  {
    title: "Revisione periodica auto e moto",
    description:
      "Linea revisione certificata per auto, moto e controlli periodici.",
    iconKey: "clipboard",
  },
  {
    title: "Carrozzeria",
    description:
      "Ripristino danni, interventi di carrozzeria e riparazioni post incidente.",
    iconKey: "tools",
  },
],
} as const;