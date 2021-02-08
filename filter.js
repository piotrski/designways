(() => {
  const eventList = [
    {
      title: "Ekonomia behawioralna w UX",
      url: "https://uxupgrade.pl/szkolenie/ekonomia-behawioralna",
      img:
        "https://dl.airtable.com/.attachments/98e565f9ebb08facb055902d76013e81/1ce22c0b/Projektowanieperswazyjne.jpg",
      type: "Szkolenie / warsztat",
      location: "Online",
      speaker: "Piotr Kozłowski",
      spots: 12,
      date: "4.2.2021 09:30",
      "Zakończenie wydarzenia": "4.2.2021 13:30",
      duration: "4:00",
      skill: "Junior",
      tags: {
        UX: true,
        productDesign: true,
      },
      level: {
        Poczatkujacy: true,
      },
      price: {
        Platne: true,
      },
      tag: ["UX", "Product Design"],
      language: "polski",
      certification: "Tak",
      cost: 613.8,
    },
    {
      title: "Zdalne, moderowane testy użyteczności",
      url:
        "https://uxupgrade.pl/szkolenie/zdalne-moderowane-testy-uzytecznosci",
      img:
        "https://dl.airtable.com/.attachments/17db5f400ffe508db7924bc37ba3fc6c/3b404657/Zdalnetestyuytecznoci.jpg",
      type: "Szkolenie / warsztat",
      location: "Online",
      speaker: "Monika Banach",
      spots: 12,
      date: "5.2.2021 09:30",
      duration: "4:00",
      skill: "Junior",
      tags: {
        UX: true,
        Badania: true,
      },
      level: {
        Poczatkujacy: true,
      },
      price: {
        Platne: true,
      },
      tag: ["UX", "Badania / Research"],
      language: "polski",
      certification: "Tak",
      cost: 552.3,
    },
    {
      title: "Kurs Moderatora Design Thinking Online",
      url: "https://designthinkingkurs.pl/",
      img:
        "https://dl.airtable.com/.attachments/e89227c3213a9cfcc443484868e9eb23/98cc7523/DTI_KMDT_2021_02_8-12_ONLINE1.jpg",
      type: "Szkolenie / warsztat",
      location: "Online",
      speaker: "Sara Kapela",
      spots: 15,
      date: "8.2.2021 09:00",
      duration: "32:00",
      skill: "Regular",
      tags: {
        UX: true,
        UI: true,
        serviceDesign: true,
        productDesign: true,
        Badania: true,
      },
      level: {
        Sredniozaawansowany: true,
      },
      price: {
        Platne: true,
      },
      tag: [
        "UX",
        "UI",
        "Service Design",
        "Product Design",
        "Badania / Research",
      ],
      language: "polski",
      certification: "Tak",
      cost: 3936,
    },
    {
      title:
        "Projektowanie Procesu - Kurs Moderatora Design Thinking Zaawansowany",
      url:
        "http://dt-institute.pl/media/tms/dtp/files/kmdtzppoferta11-1218-19022021.pdf",
      img:
        "https://dl.airtable.com/.attachments/fe744d3c71e04f39370af8426983c792/b05445ec/KMDTZ_PP_oferta_11-12_18-19_02_2021.jpg",
      type: "Szkolenie / warsztat",
      location: "Online",
      speaker: "Katarzyna Talaga-Korcz",
      spots: 15,
      date: "11.2.2021 12:00",
      "Zakończenie wydarzenia": "19.2.2021 16:00",
      duration: "16:00",
      skill: "Regular",
      tags: {
        UX: true,
        UI: true,
        serviceDesign: true,
        productDesign: true,
        Badania: true,
      },
      level: {
        Sredniozaawansowany: true,
      },
      price: {
        Platne: true,
      },
      tag: [
        "Badania / Research",
        "Product Design",
        "Service Design",
        "UI",
        "UX",
      ],
      language: "polski",
      certification: "Tak",
      cost: 2460,
    },
    {
      title: "Mierniki UX",
      url: "https://uxupgrade.pl/szkolenie/mierniki-ux",
      img:
        "https://dl.airtable.com/.attachments/13a194f7f50f2dc15881621a17bbeea9/4aa91802/Mieriki.jpg",
      type: "szkolenie / warsztat",
      location: "Online",
      speaker: "Krzysztof Kozak",
      spots: 12,
      date: "17.2.2021 09:30",
      "Zakończenie wydarzenia": "17.2.2021 16:30",
      duration: "0:07",
      skill: "Regular",
      tags: {
        UX: true,
        Analityka: true,
      },
      level: {
        Sredniozaawansowany: true,
      },
      price: {
        Platne: true,
      },
      tag: ["UX", "Analityka"],
      language: "polski",
      certification: "Tak",
      cost: 859.8,
    },
    {
      title: "Projektowanie UX",
      url: "https://uxupgrade.pl/szkolenie/projektowanie-ux",
      img:
        "https://dl.airtable.com/.attachments/6f6147beb14e474eb8f19a4b9e61f2d2/289b1aee/Projektowanie.jpg",
      type: "Szkolenie / warsztat",
      location: "Online",
      speaker: "Piotr Kozłowski",
      spots: 12,
      date: "18.2.2021 09:30",
      "Zakończenie wydarzenia": "19.2.2021 16:30",
      duration: "14:00",
      skill: "Junior",
      tags: {
        UX: true,
        UI: true,
        productDesign: true,
      },
      level: {
        Poczatkujacy: true,
      },
      price: {
        Platne: true,
      },
      tag: ["UX", "UI", "Product Design"],
      language: "polski",
      certification: "Tak",
      cost: 159.8,
    },
    {
      title: "Kurs Moderatora Design Thinking Online",
      url: "https://designthinkingkurs.pl/",
      img:
        "https://dl.airtable.com/.attachments/3359bd07ee96ec045feda1eb069ce2c5/d8934eb9/DTI_KMDT_2021_02_22-26_ONLINE1.jpg",
      type: "Szkolenie / warsztat",
      location: "Online",
      speaker: "Katarzyna Talaga-Korcz",
      spots: 15,
      date: "22.2.2021 09:00",
      "Zakończenie wydarzenia": "26.2.2021 15:00",
      duration: "32:00",
      skill: "Regular",
      tags: {
        UX: true,
        UI: true,
        serviceDesign: true,
        productDesign: true,
        Badania: true,
      },
      level: {
        Sredniozaawansowany: true,
      },
      price: {
        Platne: true,
      },
      tag: [
        "Badania / Research",
        "Product Design",
        "Service Design",
        "UI",
        "UX",
      ],
      language: "polski",
      certification: "Tak",
      cost: 3936,
    },
    {
      title: "Analityka w UX dla zaawansowanych",
      url: "https://uxupgrade.pl/szkolenie/analityka-w-ux-dla-zaawansowanych",
      img:
        "https://dl.airtable.com/.attachments/8d58dd865a521d41058d23ffc54b0d73/a89d3dad/zaawansowanaanalityka.jpg",
      type: "Szkolenie / warsztat",
      location: "Online",
      speaker: "Radosław Pawlak",
      spots: 12,
      date: "23.2.2021 09:30",
      "Zakończenie wydarzenia": "23.2.2021 13:00",
      duration: "3:30",
      skill: "Senior",
      tags: {
        UX: true,
        Analityka: true,
      },
      level: {
        Zaawansowany: true,
      },
      price: {
        Platne: true,
      },
      tag: ["Analityka", "UX"],
      language: "polski",
      certification: "Tak",
      cost: 552.3,
    },
    {
      title: "Wprowadzenie do tworzenia design systemów",
      url:
        "https://uxupgrade.pl/szkolenie/wprowadzenie-do-tworzenia-design-systemow",
      img:
        "https://dl.airtable.com/.attachments/c2ed5d7e824e97d94648e97cd1b4540a/5cf78da7/DesignSystem.jpg",
      type: "Szkolenie / warsztat",
      location: "Online",
      speaker: "Piotr Kozłowski",
      spots: 12,
      date: "24.2.2021 09:30",
      "Zakończenie wydarzenia": "24.2.2021 13:30",
      duration: "4:00",
      skill: "Junior",
      tags: {
        UX: true,
        UI: true,
        productDesign: true,
      },
      level: {
        Poczatkujacy: true,
      },
      price: {
        Platne: true,
      },
      tag: ["UX", "UI", "Product Design"],
      language: "polski",
      certification: "Tak",
      cost: 552.3,
    },
    {
      title: "SAFe® 5.0 Scrum Master",
      url:
        "https://zwinnazmiana.com/szkolenia/scaled-agile-framework-safe/safe-scrum-master/",
      img:
        "https://dl.airtable.com/.attachments/9451fe1bd0a20e417db2e6462834d129/7ea934ec/FB_safe_szkolenie1200x628_ScrumMaster.png",
      type: "Szkolenie / warsztat",
      location: "Online",
      speaker: "Michał Papież",
      spots: 20,
      date: "25.2.2021 09:00",
      "Zakończenie wydarzenia": "26.2.2021 17:00",
      duration: "16:00",
      skill: "Regular",
      tags: {
        prooductManagement: true,
      },
      level: {
        Sredniozaawansowany: true,
      },
      price: {
        Platne: true,
      },
      tag: ["Product Management"],
      language: "polski",
      certification: "Tak",
      cost: 2952,
    },
    {
      title: "Wprowadzenie do UX Writingu",
      url: "https://uxupgrade.pl/szkolenie/wprowadzenie-do-ux-writingu",
      img:
        "https://dl.airtable.com/.attachments/a6dde1853dbaad69b7649118aee48088/78c9a670/UXWriting.jpg",
      type: "szkolenie / warsztat",
      location: "Online",
      speaker: "Kalina Tyrkiel",
      spots: 12,
      date: "2.3.2021 09:30",
      "Zakończenie wydarzenia": "2.3.2021 13:30",
      duration: "4:00",
      skill: "Junior",
      tags: {
        UX: true,
        productDesign: true,
      },
      level: {
        Poczatkujacy: true,
      },
      price: {
        Platne: true,
      },
      tag: ["UX", "Product Design"],
      language: "polski",
      certification: "Tak",
      cost: 552.3,
    },
    {
      title: "5 Elementów - trening moderatora design thinking",
      url:
        "http://dt-institute.pl/media/tms/dtp/files/kmdto5eofertaiiedycjaz.pdf",
      img:
        "https://dl.airtable.com/.attachments/0553319e5c03020c5052f713dd1356c5/83a451fe/KMDTO_5E_oferta_II_edycja_z1.jpg",
      type: "Szkolenie / warsztat",
      location: "Online",
      speaker: "Katarzyna Talaga-Korcz",
      spots: 15,
      date: "2.3.2021 13:00",
      "Zakończenie wydarzenia": "8.4.2021 12:00",
      duration: "30:00",
      skill: "Regular",
      tags: {
        UX: true,
        UI: true,
        serviceDesign: true,
        productDesign: true,
        Badania: true,
      },
      level: {
        Sredniozaawansowany: true,
      },
      price: {
        Platne: true,
      },
      tag: [
        "UX",
        "UI",
        "Service Design",
        "Product Design",
        "Badania / Research",
      ],
      language: "polski",
      certification: "Tak",
      cost: 2890.5,
    },
    {
      title: "Zaawansowane techniki projektowania Axure RP",
      url:
        "https://uxupgrade.pl/szkolenie/zaawansowane-techniki-projektowania-axure",
      img:
        "https://dl.airtable.com/.attachments/9d6feca191e83fd16cf4f4a6ac6f5f2b/4dc4a1cd/Axurezaawansowane.jpg",
      type: "Szkolenie / warsztat",
      location: "Online",
      speaker: "Piotr Kozłowski",
      spots: 12,
      date: "4.3.2021 09:30",
      duration: "4:00",
      skill: "Senior",
      tags: {
        UX: true,
        UI: true,
      },
      level: {
        Zaawansowany: true,
      },
      price: {
        Platne: true,
      },
      tag: ["UI", "UX"],
      language: "polski",
      certification: "Tak",
      cost: 552.3,
    },
    {
      title: "Wprowadzenie do zawodu specjalisty UX",
      url:
        "https://uxupgrade.pl/szkolenie/wprowadzenie-do-zawodu-specjalisty-ux",
      img:
        "https://dl.airtable.com/.attachments/94b8e72d0e25d10a718531b16d4ac250/a5e81a34/Wprowadzeniedozawodu.jpg",
      type: "Szkolenie / warsztat",
      location: "Online",
      speaker: "Piotr Sałata",
      spots: 12,
      date: "5.3.2021 09:45",
      "Zakończenie wydarzenia": "5.3.2021 14:15",
      duration: "4:00",
      skill: "Junior",
      tags: {
        UX: true,
      },
      level: {
        Poaczatkujacy: true,
      },
      price: {
        Platne: true,
      },
      tag: ["UX"],
      language: "polski",
      certification: "Tak",
      cost: 552.3,
    },
    {
      title: "SAFe® 5.0 Scrum Master",
      url:
        "https://zwinnazmiana.com/szkolenia/scaled-agile-framework-safe/safe-scrum-master/",
      img:
        "https://dl.airtable.com/.attachments/14b8878bb00b10dfdaaa96ded7102a55/e9f4d391/FB_safe_szkolenie1200x1200_ScrumMaster.png",
      type: "konferencja",
      location: "Online",
      speaker: "Michał Papież",
      spots: 20,
      date: "6.3.2021 09:00",
      "Zakończenie wydarzenia": "7.3.2021 17:00",
      duration: "16:00",
      skill: "Regular",
      tags: {
        prooductManagement: true,
      },
      level: {
        Sredniozaawansowany: true,
      },
      price: {
        Platne: true,
      },
      tag: ["Product Management"],
      language: "polski",
      certification: "Tak",
      cost: 2952,
    },
    {
      title: "Eyetracking w UX",
      url: "https://uxupgrade.pl/szkolenie/eyetracking-w-ux",
      img:
        "https://dl.airtable.com/.attachments/67ad292353c4c46884c2f255269f5cf1/90d9b0dd/Eyetracking.jpg",
      type: "Szkolenie / warsztat",
      location: "Online",
      speaker: "Joanna Grzelak",
      spots: 12,
      date: "9.3.2021 09:30",
      "Zakończenie wydarzenia": "9.3.2021 13:30",
      duration: "4:00",
      skill: "Regular",
      tags: {
        UX: true,
        Badania: true,
      },
      level: {
        Sredniozaawansowany: true,
      },
      price: {
        Platne: true,
      },
      tag: ["Badania / Research", "UX"],
      language: "polski",
      certification: "Tak",
      cost: 490.8,
    },
    {
      title: "SAFe® 5.0 Advanced Scrum Master",
      url:
        "https://zwinnazmiana.com/szkolenia/scaled-agile-framework-safe/safe-advanced-scrum-master/",
      img:
        "https://dl.airtable.com/.attachments/b22aedfa45f293ec33bd2320fabbefb7/ae80e214/ZZ_LOGO_PACK_RGB_mcverwhitebcg.png",
      type: "Szkolenie / warsztat",
      location: "Online",
      speaker: "Michał Papież",
      spots: 20,
      date: "11.3.2021 09:00",
      "Zakończenie wydarzenia": "12.3.2021 17:00",
      duration: "16:00",
      skill: "Regular",
      tags: {
        prooductManagement: true,
      },
      level: {
        Sredniozaawansowany: true,
      },
      price: {
        Platne: true,
      },
      tag: ["Product Management"],
      language: "polski",
      certification: "Tak",
      cost: 2952,
    },
    {
      title: "Design Sprint dla zaawansowanych",
      url: "https://uxupgrade.pl/szkolenie/design-sprint-dla-zaawansowanych",
      img:
        "https://dl.airtable.com/.attachments/22362bf4a8a925978b1080a1de2d43fc/e49d7820/ZaawansowanyDesignSprint.jpg",
      type: "Szkolenie / warsztat",
      location: "Online",
      speaker: "Piotr Kozłowski",
      spots: 12,
      date: "11.3.2021 09:30",
      "Zakończenie wydarzenia": "11.3.2021 13:30",
      duration: "4:00",
      skill: "Senior",
      tags: {
        UX: true,
        UI: true,
      },
      level: {
        Zaawansowany: true,
      },
      price: {
        Platne: true,
      },
      tag: ["UX", "UI"],
      language: "polski",
      certification: "Tak",
      cost: 490.8,
    },
    {
      title: "SAFe® 5.0 For Teams",
      url:
        "https://zwinnazmiana.com/szkolenia/scaled-agile-framework-safe/safe-for-teams/",
      img:
        "https://dl.airtable.com/.attachments/76323d4caaba53a52a9af6c3a30cffac/d0294c40/ZZ_LOGO_PACK_RGB_mcverwhitebcg.png",
      type: "Szkolenie / warsztat",
      location: "Online",
      speaker: "Michał Papież",
      spots: 20,
      date: "13.3.2021 09:00",
      "Zakończenie wydarzenia": "14.3.2021 17:00",
      duration: "16:00",
      skill: "Regular",
      tags: {
        prooductManagement: true,
      },
      level: {
        Sredniozaawansowany: true,
      },
      price: {
        Platne: true,
      },
      tag: ["Product Management"],
      language: "polski",
      certification: "Tak",
      cost: 2952.0,
    },
    {
      title: "Prowadzenie warsztatów UX",
      url: "https://uxupgrade.pl/szkolenie/prowadzenie-warsztatow-ux",
      img:
        "https://dl.airtable.com/.attachments/6eb9837e95d235568f5ff34957685e45/129ed566/warsztaty.jpg",
      type: "Szkolenie / warsztat",
      location: "Online",
      speaker: "Wojciech Chojnacki",
      spots: 12,
      date: "16.3.2021 09:00",
      "Zakończenie wydarzenia": "19.3.2021 13:00",
      duration: "16:00",
      skill: "Regular",
      tags: {
        UX: true,
        productDesign: true,
        serviceDesign: true,
      },
      level: {
        Sredniozaawansowany: true,
      },
      price: {
        Platne: true,
      },
      tag: ["UX", "Product Design", "Service Design"],
      language: "polski",
      certification: "Tak",
      cost: 1966.8,
    },
    {
      title: "Architektura informacji w e-commerce",
      url:
        "https://uxupgrade.pl/szkolenie/architektura-informacji-w-e-commerce",
      img:
        "https://dl.airtable.com/.attachments/7482441c807ca69ca9764d6286498030/f8d5ce85/Architekturainformacji.jpg",
      type: "Szkolenie / warsztat",
      location: "Online",
      speaker: "Witold Janiszewski",
      spots: 12,
      date: "17.3.2021 09:30",
      "Zakończenie wydarzenia": "17.3.2021 13:30",
      duration: "4:00",
      skill: "Regular",
      tags: {
        UX: true,
        UI: true,
      },
      level: {
        Sredniozaawansowany: true,
      },
      price: {
        Platne: true,
      },
      tag: ["UX", "UI"],
      language: "polski",
      certification: "Tak",
      cost: 490.8,
    },
    {
      title: "SAFe® 5.0 Scrum Master",
      url:
        "https://zwinnazmiana.com/szkolenia/scaled-agile-framework-safe/safe-scrum-master/",
      img:
        "https://dl.airtable.com/.attachments/aca27d1d99ad97b92adac0891724c1ef/042c2134/FB_safe_szkolenie1200x1200_ScrumMaster.png",
      type: "Szkolenie / warsztat",
      location: "Online",
      speaker: "Michał Papież",
      spots: 20,
      date: "18.3.2021 09:00",
      "Zakończenie wydarzenia": "19.3.2021 17:00",
      duration: "16:00",
      skill: "Regular",
      tags: {
        prooductManagement: true,
      },
      level: {
        Sredniozaawansowany: true,
      },
      price: {
        Platne: true,
      },
      tag: ["Product Management"],
      language: "polski",
      certification: "Tak",
      cost: 2952.0,
    },
    {
      title: "Analityka w UX",
      url: "https://uxupgrade.pl/szkolenie/analityka-w-ux",
      img:
        "https://dl.airtable.com/.attachments/9f8bc3db9c4432065623ab820ad3861d/b738a3e1/Analitykaux.jpg",
      type: "Szkolenie / warsztat",
      location: "Online",
      speaker: "Radosław Pawlak",
      spots: 12,
      date: "18.3.2021 09:30",
      "Zakończenie wydarzenia": "18.3.2021 13:30",
      duration: "4:00",
      skill: "Junior",
      tags: {
        Analityka: true,
        UX: true,
      },
      level: {
        Podstawowy: true,
      },
      price: {
        Platne: true,
      },
      tag: ["Analityka", "UX"],
      language: "polski",
      certification: "Tak",
      cost: 736.8,
    },
    {
      title: "Dostepność w pigułce",
      url: "https://uxupgrade.pl/szkolenie/dostepnosc-w-pigulce",
      img:
        "https://dl.airtable.com/.attachments/bca5e3656bff864948a78f5352a3c20d/3106c4c3/dostepnosc.jpg",
      type: "Skolenie / warsztat",
      location: "Online",
      speaker: "Piotr Źrołka",
      spots: 12,
      date: "23.3.2021 09:30",
      "Zakończenie wydarzenia": "23.2.2021 16:30",
      duration: "7:00",
      skill: "Regular",
      tags: {
        productDesign: true,
        UX: true,
      },
      level: {
        Sredniozaawansowany: true,
      },
      price: {
        Platne: true,
      },
      tag: ["UX", "Product Design"],
      language: "polski",
      certification: "Tak",
      cost: 1228.8,
    },
    {
      title: "Podstawy projektowania w Figmie",
      url: "https://uxupgrade.pl/szkolenie/podstawy-projektowania-w-figmie",
      img:
        "https://dl.airtable.com/.attachments/c90b5e1af539a7c8f278a7aea461539f/bd7f10a3/figma.jpg",
      type: "Szkolenie / warsztat",
      location: "Online",
      speaker: "Witold Janiszewski, Łukasz Rybkowski",
      spots: 12,
      date: "25.3.2021 09:30",
      "Zakończenie wydarzenia": "25.3.2021 16:30",
      duration: "7:00",
      skill: "Junior",
      tags: {
        UI: true,
        UX: true,
      },
      level: {
        Podstawowy: true,
      },
      price: {
        Platne: true,
      },
      tag: ["UX", "UI"],
      language: "polski",
      certification: "Tak",
      cost: 982.8,
    },
    {
      title: "Leading SAFe® 5.0",
      url:
        "https://zwinnazmiana.com/szkolenia/scaled-agile-framework-safe/leading-safe-szkolenie-online/",
      img:
        "https://dl.airtable.com/.attachments/2eae5002c837fde742d8607914c1cb58/4420062b/ZZ_FB_LEANDINGSAFESZKOLENIE_FB_1200x628.png",
      type: "Szkolenie / warsztat",
      location: "Online",
      speaker: "Michał Papież",
      spots: 20,
      date: "27.3.2021 09:00",
      "Zakończenie wydarzenia": "28.3.2021 17:00",
      duration: "16:00",
      skill: "Regular",
      tags: {
        prooductManagement: true,
      },
      level: {
        Sredniozaawansowany: true,
      },
      price: {
        Platne: true,
      },
      tag: ["Product Management"],
      language: "polski",
      certification: "Tak",
      cost: 2583.0,
    },
    {
      title: "UX chatbotów",
      url: "https://uxupgrade.pl/szkolenie/ux-chatbotow",
      img:
        "https://dl.airtable.com/.attachments/d0753feee2552a541c3af8208dabe738/9739c38c/Chat-bot.jpg",
      type: "Szkolenie / warsztat",
      location: "Online",
      speaker: "Anna Schneider",
      spots: 12,
      date: "30.3.2021 09:30",
      "Zakończenie wydarzenia": "30.3.2021 14:30",
      duration: "4:30",
      skill: "Junior",
      tags: {
        productDesign: true,
        UX: true,
        UI: true,
      },
      level: {
        Podstawowy: true,
      },
      price: {
        Platne: true,
      },
      tag: ["Product Design", "UX", "UI"],
      language: "polski",
      certification: "Tak",
      cost: 736.8,
    },
    {
      title: "Value Proposition Design",
      url: "https://uxupgrade.pl/szkolenie/value-proposition-design",
      img:
        "https://dl.airtable.com/.attachments/87a15170f6053ac2cd3d49b2573628c1/0a73512d/ValueProposition.jpg",
      type: "Szkolenie / warsztat",
      location: "Online",
      speaker: "Wojciech Chojnacki",
      spots: 12,
      date: "8.4.2021 09:30",
      "Zakończenie wydarzenia": "8.4.2021 13:30",
      duration: "4:00",
      skill: "Junior",
      tags: {
        productDesign: true,
        UX: true,
        serviceDesign: true,
      },
      level: {
        Podstawowy: true,
      },
      price: {
        Platne: true,
      },
      tag: ["UX", "Product Design", "Service Design"],
      language: "polski",
      certification: "Tak",
      cost: 736.8,
    },
    {
      title: "SAFe® 5.0 For Teams",
      url:
        "https://zwinnazmiana.com/szkolenia/scaled-agile-framework-safe/safe-for-teams/",
      img:
        "https://dl.airtable.com/.attachments/b9a42ff43fce3a2ed67b21ac0b9f818d/b3a3b85f/ZZ_LOGO_PACK_RGB_mcverwhitebcg.png",
      type: "Szkolenie / warsztat",
      location: "Online",
      speaker: "Michał Papież",
      spots: 20,
      date: "9.4.2021 09:00",
      "Zakończenie wydarzenia": "9.4.2021 17:00",
      duration: "16:00",
      skill: "Regular",
      tags: {
        prooductManagement: true,
      },
      level: {
        Sredniozaawansowany: true,
      },
      price: {
        Platne: true,
      },
      tag: ["Product Management"],
      language: "polski",
      certification: "Tak",
      cost: 2952.0,
    },
    {
      title: "Podstawy projektowania w Axure RP",
      url: "https://uxupgrade.pl/szkolenie/podstawy-projektowania-w-axure-rp",
      img:
        "https://dl.airtable.com/.attachments/0b60a9447538a5384328bcc374621c41/8ec5d333/AxurePodstawy.jpg",
      type: "Szkolenie / warsztat",
      location: "Online",
      speaker: "Piotr Kozłowski",
      spots: 12,
      date: "9.4.2021 09:30",
      "Zakończenie wydarzenia": "9.4.2021 13:30",
      duration: "4:00",
      skill: "Junior",
      tags: {
        UI: true,
        UX: true,
      },
      level: {
        Podstawowy: true,
      },
      price: {
        Platne: true,
      },
      tag: ["UI", "UX"],
      language: "polski",
      certification: "Tak",
      cost: 490.8,
    },
    {
      title: "Wprowadzenie do Design Sprint",
      url: "https://uxupgrade.pl/szkolenie/wprowadzenie-do-design-sprint",
      img:
        "https://dl.airtable.com/.attachments/6509646015c27df2b90cfa2900a1c195/a540c616/DesignSprint.jpg",
      type: "Szkolenie / warsztat",
      location: "Online",
      speaker: "Piotr Kozłowski",
      spots: 12,
      date: "13.4.2021 09:30",
      "Zakończenie wydarzenia": "13.4.2021 13:00",
      duration: "4:00",
      skill: "Junior",
      tags: {
        productDesign: true,
        UX: true,
      },
      level: {
        Podstawowy: true,
      },
      price: {
        Platne: true,
      },
      tag: ["Product Design", "UX"],
      language: "polski",
      certification: "Tak",
      cost: 490.8,
    },
    {
      title: "ReQuest 2021 Online",
      url: "https://www.facebook.com/events/819075058881820",
      img:
        "https://dl.airtable.com/.attachments/01c62dcf716bca889d43ec2a642b9116/5dbeac77/21688262_325043054625402_4798507555177035592_o.png",
      type: "konferencja",
      location: "Online",
      speaker: "Wielu prowadzących",
      spots: 200,
      date: "15.4.2021 09:00",
      "Zakończenie wydarzenia": "16.4.2021 17:30",
      duration: "16:00",
      skill: "Regular",
      tags: {
        UX: true,
        UI: true,
        serviceDesign: true,
        productDesign: true,
        Badania: true,
      },
      level: {
        Sredniozaawansowany: true,
      },
      price: {
        Darmowe: true,
      },
      tag: ["Product Design", "Service Design", "UX", "UI", "Analityka"],
      language: "polski",
      certification: "Tak",
      cost: "Darmowe",
    },
    {
      title: "Projektowanie prywatności w produktach cyfrowych",
      url:
        "https://uxupgrade.pl/szkolenie/projektowanie-prywatnosci-w-produktach-cyfrowych",
      img:
        "https://dl.airtable.com/.attachments/216baa0eb692e17176d3b40e26529b90/0a6500ec/Privacybydesign.jpg",
      type: "Meetup",
      location: "Online",
      speaker: "Katarzyna Muszyńska, Mariola Więckowska",
      spots: 12,
      date: "13.5.2021 09:30",
      "Zakończenie wydarzenia": "13.5.2021 14:30",
      duration: "5:00",
      skill: "Regular",
      tags: {
        UX: true,
        productDesign: true,
      },
      level: {
        Sredniozaawansowany: true,
      },
      price: {
        Platne: true,
      },
      tag: ["UX", "Product Design"],
      language: "polski",
      certification: "Tak",
      cost: 490.8,
    },
    {
      title: "Kreatywność dla liderów",
      url: "www.facebook.com/events/1061434210996941",
      img:
        "https://dl.airtable.com/.attachments/de82168b09ebe471791c1695d82e345d/14e881f9/143096183_245729747076483_5649012950557478041_o.jpg",
      type: "Szkolenie / warsztat",
      location: "Online",
      speaker: "Seweryn Rudnicki, Łukasz Maźnica",
      spots: 12,
      date: "11.2.2021 09:00",
      "Zakończenie wydarzenia": "18.2.2021 13:00",
      duration: "12:00",
      skill: "Regular",
      tags: {
        Branding: true,
        serviceDesign: true,
        productDesign: true,
      },
      level: {
        Sredniozaawansowany: true,
      },
      price: {
        Platne: true,
      },
      tag: ["Branding", "Product Design", "Service Design"],
      language: "polski",
      certification: "Tak",
      cost: 800.0,
    },
    {
      title:
        "Circular Design - poznaj i zrozum nowy kontekst projektowania przyjaznego środowisku",
      url: "https://fb.me/e/1Uo4VtoRw",
      img:
        "https://dl.airtable.com/.attachments/d97c49a1b32ac39296ac72a4cbdbc623/df6a6749/JakpostawipierwszekrokizGOZCircularInspirations6.png",
      type: "Szkolenie / warsztat",
      location: "Online",
      speaker: "Agata Miryn-Sienkiewicz",
      spots: 8,
      date: "18.3.2021 16:00",
      "Zakończenie wydarzenia": "18.3.2021 18:30",
      duration: "2:30",
      skill: "Regular",
      tags: {
        productDesign: true,
      },
      level: {
        Sredniozaawansowany: true,
      },
      price: {
        Platne: true,
      },
      tag: ["Product Design"],
      language: "polski",
      certification: "Tak",
      cost: 349.0,
    },
    {
      title: "Masterclass. Analiza jakościowa dla zaawansowanych",
      url: "https://learn.cux.io/analiza-masterclass",
      img:
        "https://dl.airtable.com/.attachments/e12dbce50111de8b2cbe817fcc65d1de/b2494c56/Thefirstever8.png",
      type: "Szkolenie / warsztat",
      location: "Online",
      speaker: "Paulina Walkowiak",
      spots: 20,
      date: "18.2.2021 9:00",
      "Zakończenie wydarzenia": "18.2.2021 17:00",
      duration: "8:00",
      skill: "Senior",
      tags: {
        Analityka: true,
        Badania: true,
        UX: true,
      },
      level: {
        Zaawansowany: true,
      },
      price: {
        Platne: true,
      },
      tag: ["Analityka", "Badania / Research", "UX"],
      language: "polski",
      certification: "Tak",
      cost: 999.0,
    },
  ];
  // let eventList = [];
  // let eventList = [];
  // fetch("data.json")
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));
  // console.log(eventList);

  window.addEventListener("DOMContentLoaded", (event) => {
    let filterClick = [...document.querySelectorAll(".tagsFilter")];
    let filterArray = {
      tags: {},
      level: {},
      price: {},
    };

    for (const key of filterClick) {
      filterArray.tags[key.dataset.key] = null;
      filterArray.level[key.dataset.level] = null;
      filterArray.price[key.dataset.price] = null;
    }

    const toggleClass = (e) => {
      e.target.classList.value.includes("tag__single--active")
        ? e.target.classList.remove("tag__single--active")
        : e.target.classList.add("tag__single--active");
    };

    const filterItem = (item) => {
      let returnElement = {
        tags: null,
        level: null,
        price: null,
      };

      for (const property in filterArray.tags) {
        if (filterArray.tags[`${property}`] !== null) {
          if (item.tags[`${property}`] === filterArray.tags[`${property}`]) {
            returnElement.tags = true;
          } else if (
            returnElement.tags == null ||
            returnElement.tags == false
          ) {
            returnElement.tags = false;
          } else if (returnElement.tags == true) {
            returnElement.tags == true;
          }
        }
      }

      for (const property in filterArray.level) {
        if (filterArray.level[`${property}`] !== null) {
          if (item.level[`${property}`] === filterArray.level[`${property}`]) {
            returnElement.level = true;
          } else if (
            returnElement.level == null ||
            returnElement.level == false
          ) {
            returnElement.level = false;
          } else if (returnElement.level == true) {
            returnElement.level == true;
          }
        }
      }

      for (const property in filterArray.price) {
        if (filterArray.price[`${property}`] !== null) {
          if (item.price[`${property}`] === filterArray.price[`${property}`]) {
            returnElement.price = true;
          } else if (
            returnElement.price == null ||
            returnElement.price == false
          ) {
            returnElement.price = false;
          } else if (returnElement.price == true) {
            returnElement.price == true;
          }
        }
      }
      // console.log(returnElement);

      if (returnElement.price === null) {
        returnElement.price = true;
      }
      if (returnElement.tags === null) {
        returnElement.tags = true;
      }
      if (returnElement.level === null) {
        returnElement.level = true;
      }
      return returnElement.level && returnElement.price && returnElement.tags;
    };

    const filterElement = (e) => {
      toggleClass(e);
      if (e.target.dataset.key) {
        const clickedTag = e.target.dataset.key.toString();
        filterArray.tags[`${clickedTag}`] == null
          ? (filterArray.tags[`${clickedTag}`] = true)
          : (filterArray.tags[`${clickedTag}`] = null);
      } else if (e.target.dataset.level) {
        const clickedLevel = e.target.dataset.level.toString();
        filterArray.level[`${clickedLevel}`] == null
          ? (filterArray.level[`${clickedLevel}`] = true)
          : (filterArray.level[`${clickedLevel}`] = null);
      } else if (e.target.dataset.price) {
        const clickedPrice = e.target.dataset.price.toString();
        filterArray.price[`${clickedPrice}`] == null
          ? (filterArray.price[`${clickedPrice}`] = true)
          : (filterArray.price[`${clickedPrice}`] = null);
      }

      let FilteredList;

      FilteredList = eventList.filter(filterItem);

      checkWhatToDisplay(FilteredList);
    };

    const checkWhatToDisplay = (FilteredList) => {
      if (
        Object.values(filterArray.tags).indexOf(true) > -1 ||
        Object.values(filterArray.level).indexOf(true) > -1 ||
        Object.values(filterArray.price).indexOf(true) > -1
      ) {
        renderElement(FilteredList);
      } else {
        renderElement(eventList);
      }
    };
    const generatePrice = (e) => {
      let price = e.cost;
      if (Number.isFinite(price)) {
        price = e.cost.toFixed(2).replace(/\./g, ",");
        price += " zł";
        return price;
      } else {
        return price;
      }
    };

    const displayDuration = (e) => {
      let arrayDuration = e.duration.split(":");
      let arrayInput = `${arrayDuration[0]} h ${arrayDuration[1]} min `;
      return arrayInput;
    };
    const renderElement = (arrayList) => {
      let contenerList = ``;
      console.log(arrayList.length);
      if (arrayList.length == 0) {
        contenerList = `
        <div class="lecture">
          Ooppps. Wygląda na to, ze nie mamy nic z tym filtrowaniem. Wyślij nam zgłoszenie na <a href="mailto:hello@deisgnways.io">hello@designways.io</a>
        </div>`;
      } else {
        arrayList.map((workshop) => {
          let tags = "";
          workshop.tag.map((tag) => {
            tags += `<div class="tag__single tag__single--small">${tag}</div>`;
          });

          let priceComma = generatePrice(workshop);
          let duration = displayDuration(workshop);
          const currentHtml = `
      <div class="lecture">
       <div class="lecture__half">
         <img class="lecture__image" src="${workshop.img}" alt="" />
         <div class="lecture__description">
           <div class="lecture__tags"> ${tags}
           </div>

           <div class="level level__basic">${workshop.skill}</div>
           <div class="lecture__title">
           ${workshop.title}
           </div>
           <a href="${workshop.url}" class="lecture__join buttonDesktop">Dowiedz się więcej</a>
          
         </div>
       </div>
       <div class="lecture__half lecture__rightGrid">
         <div class="lecture__rightGrid__borderAndSpacing">
           <span class="lecture__rightGrid--span">Prowadzący</span>${workshop.speaker}
         </div>
         <div class="lecture__rightGrid__borderAndSpacing">
           <span class="lecture__rightGrid--span">Data</span>${workshop.date}
         </div>
         <div>
           <span class="lecture__rightGrid--span">Czas Trwania</span>${duration}
         </div>
         <div class="lecture__rightGrid__borderAndSpacing">
           <span class="lecture__rightGrid--span">Lokalizacja</span>${workshop.location}
         </div>
         <div class="lecture__rightGrid__borderAndSpacing">
           <span class="lecture__rightGrid--span">Typ</span>${workshop.type}
         </div>
         <div>
           <span class="lecture__rightGrid--span">Liczba Miejsc</span>${workshop.spots}
         </div>
         <div class="lecture__rightGrid__price">${priceComma}</div>
       </div>
       <div class="lecture__half buttonMobile">
          <a href="${workshop.url}" class="lecture__join buttonMobile__cta">Dowiedz się więcej</a>
        </div>
     </div>`;
          tags = "";
          contenerList += currentHtml;
        });
      }
      let signle = document.getElementById("lecture");
      signle.innerHTML = contenerList;
    };

    renderElement(eventList);

    filterClick.forEach((element) => {
      element.addEventListener("click", filterElement);
    });
  });
})();
