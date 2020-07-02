export const content = [
  {
    id: 1,
    title: "Onderzoek",
    bgColor: true,
    contentBlocks: [
      {
        type: "text",
        content:
          "Zelf hebben we allemaal geen ervaring met blinden of slechtziende in de horeca. Daarom zijn we op zoek gegaan naar ervaringen van anderen, online. We hebben hier de volgende inzichten uit verkregen: Mensen die blind zijn gaan niet vaak alleen uit eten en maar weinig restaurants hebben een braille menukaart. Wanneer deze wel aanwezig is, is deze vaak verouderd. Met deze inzichten zijn we gaan brainstormen. Hieronder lees je daar meer over.",
      },
    ],
  },
  {
    id: 2,
    title: "Brainstorm",
    bgColor: false,
    contentBlocks: [
      {
        type: "text",
        content:
          "Met de inzichten die we uit het onderzoek hebben verkregen zijn we crazy 8’s gaan doen. Dit houdt in dat we individueel acht concepten schetsen, met allemaal 1 minuut de tijd per schets. Uiteindelijk leggen we de concepten aan elkaar voor en kijken of we deze kunnen combineren of uitbreiden. Hieronder zijn de schetsen te zien die we gemaakt hebben. De concepten die hier uitgekomen zijn, zijn een placemat waarop de bediening kan zien waar de spullen op tafel moeten staan en een applicatie waarin het menu voorgelezen wordt. Door het interview met de doelgroep en de feedback bij de presentaties kunnen we het eerste concept uitsluiten. Een placemat zal in dit geval namelijk niet veel waarde toevoegen.",
      },
    ],
  },
  {
    id: 1,
    title: "Doelgroep",
    bgColor: true,
    contentBlocks: [
      {
        type: "text",
        content:
          "Via school zijn we in contact gekomen met de stichting Accessibility.nl. We konden aan hen feedback vragen over onze concepten en ideeën. Dit hebben we dan ook gedaan. We zijn in contact kunnen komen met Edwin Jager. Hij is blind en wilde ons wel wat vertellen over zijn ervaringen. We hebben de volgende inzichten uit dit gesprek kunnen halen:",
      },
      {
        type: "list",
        content: [
          "Nederlandse horeca gebruikt dezelfde etiquette. Alleen linkshandige kunnen hier last van ondervinden.",
          "Vaak gaan mensen niet alleen naar een restaurant. Dit juist om te voorkomen dat ze tegen problemen aanlopen.",
          "Het bier was achter het gordijn na de oorlog erg goedkoop en de horeca is tegenwoordig erg duur.",
        ],
      },
    ],
  },
  {
    id: 1,
    title: "User story's",
    bgColor: false,
    contentBlocks: [
      {
        type: "list",
        content: [
          "Als restauranteigenaar wil ik dat ik niet heel hoef te verbouwen, zodat ik snel de restaurant ervaring voor blinden en slechtziende kan verbeteren. ",
          "Als slechtziende wil ik mijn eigen telefoon kunnen gebruiken, zodat ik bekend ben met het besturingssysteem.",
          "Als blinde wil ik niet het restaurant personeel lang bezig houden, zodat ik me niet bezwaard voel als ik uiteten ga.",
          "Als bezoeker van het restaurant wil ik geen geluidsoverlast ervaren van de applicatie, zodat ik in mij kan focussen op mijn eigen gesprek en gezelschap.",
          "Als blinde wil ik dat het menu altijd recent is, zodat ik niet iets bestel wat niet meer op de kaart staat.",
          "Als restaurant eigenaar wil ik dat het menu makkelijk up to date te houden is, zodat ik niet steeds met veel moeite de menu kaart hoef aan te passen.",
          "Als bediening wil ik dat een blind iemand zoveel mogelijk zichzelf kan helpen zodat hij zich niet anders behandeld voelt omdat hij/zij een beperking heeft.",
          "Als blinde wil ik graag snel een gerecht naar wens op de kaart kunnen vinden, zodat ik net zo snel als mijn vrienden kan bestellen.",
        ],
      },
    ],
  },
  {
    id: 1,
    title: "Definition of Done",
    bgColor: false,
    contentBlocks: [
      {
        type: "text",
        content: [
          "Vindbaar maken van QR code voor iemand die slechtziend of blind is.",
          "QR code kan worden gescand door de applicatie.",
          "Menu pagina laten zien op de telefoon.",
          "Menu kan worden gefilterd door filter opties.",
          "Teksten kunnen worden voorgelezen voor de blinde assistent.",
        ],
      },
    ],
  },
  {
    id: 1,
    title: "Prototype",
    bgColor: true,
    contentBlocks: [
      {
        type: "text",
        content: "Na met de doelgroep gesproken te hebben bleek ons eerste concept niet relevant te zijn. Om deze reden hebben we ervoor gekozen verder te gaan met het andere concept. De menu filter app. In het prototype begin je bij het scannen van een QR code. Zodra deze is gescand komt het volledige menu op het scherm te staan. Vanuit hier kan je luisteren wat er op het menu staat of het menu filteren naar waar jij trek in hebt. Op deze manier wordt het menu een stuk toegankelijker voor blinde en slechtziende. Wij vonden het belangrijk dat het prototype op zowel IOS als Android zou gaan werken. We zijn om dit te kunnen doen gekomen op een React Native app. Uiteindelijk was het haalbaarder om het prototype te programmeren in Vue.js en zijn we hiernaar geswitcht.",
      },
    ],
  },
  {
    id: 1,
    title: "Team",
    bgColor: false,
    contentBlocks: [
      {
        type: "profile",
        content: {
          name: "Sven Koene",
          titles: ["Designer", "Web developer"],
          img: {
            src: "",
            alt: "",
          },
        },
      },
      {
        type: "profile",
        content: {
          name: "Rachelle Bosman",
          titles: ["Project leider", "App developer"],
          img: {
            src: "",
            alt: "",
          },
        },
      },
      {
        type: "profile",
        content: {
          name: "Janessa Labeur",
          titles: ["Designer", "Support"],
          img: {
            src: "",
            alt: "",
          },
        },
      },
    ],
  },
];
