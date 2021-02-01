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
      duration: "0:04",
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
      "Zakończenie wydarzenia": "5.2.2021 09:30",
      duration: "0:04",
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
      tag: ["UX", "Badania"],
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
      "Zakończenie wydarzenia": "12.2.2021 15:00",
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
        Darmowe: true,
      },
      tag: ["UX", "UI", "Service Design", "Product Design", "Badania"],
      language: "polski",
      certification: "Tak",
      cost: "",
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
      tag: [
        "Badania / Research",
        "Product Design",
        "Service Design",
        "UI",
        "UX",
      ],
      language: "polski",
      certification: "Tak",
      cost: "",
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
        Darmowe: true,
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
      cost: "",
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
      duration: "0:16",
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
      duration: "0:04",
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
        Darmowe: true,
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
      "Zakończenie wydarzenia": "4.3.2021 13:30",
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
        prooductDesign: true,
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
        Analityka: true,
      },
      level: {
        Sredniozaawansowany: true,
      },
      price: {
        Platne: true,
      },
      tag: ["Analityka"],
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
  ];

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
            console.log(returnElement);
          } else {
            returnElement.tags = false;
          }
        }
      }

      for (const property in filterArray.level) {
        if (filterArray.level[`${property}`] !== null) {
          if (item.level[`${property}`] === filterArray.level[`${property}`]) {
            returnElement.level = true;
            console.log(returnElement);
          } else {
            returnElement.level = false;
          }
        }
      }

      for (const property in filterArray.price) {
        if (filterArray.price[`${property}`] !== null) {
          if (item.price[`${property}`] === filterArray.price[`${property}`]) {
            returnElement.price = true;
            console.log(returnElement);
          } else {
            returnElement.price = false;
          }
        }
      }

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
      console.log("robie sie pierwszy");
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

    const renderElement = (arrayList) => {
      let contenerList = ``;
      arrayList.map((workshop) => {
        let tags = "";
        workshop.tag.map((tag) => {
          tags += `<div class="tag__single tag__single--small">${tag}</div>`;
        });
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
           <a href="${workshop.url}" class="lecture__join">Weź udział</a>
           <a href="#" class="lecture__join lecture__join--testimonial"
             >Opinie</a
           >
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
           <span class="lecture__rightGrid--span">Czas Trwania</span>${workshop.duration}
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
         <div class="lecture__rightGrid__price">${workshop.cost}</div>
       </div>
     </div>`;
        tags = "";
        contenerList += currentHtml;
      });
      let signle = document.getElementById("lecture");
      signle.innerHTML = contenerList;
    };

    renderElement(eventList);

    filterClick.forEach((element) => {
      element.addEventListener("click", filterElement);
    });
  });
})();
