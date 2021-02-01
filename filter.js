(() => {
  const eventList = [
    {
      title: "Ekonomia behawioralna w UX",
      url: "https://uxupgrade.pl/szkolenie/ekonomia-behawioralna",
      img:
        "https://dl.airtable.com/.attachments/98e565f9ebb08facb055902d76013e81/1ce22c0b/Projektowanieperswazyjne.jpg",
      type: "szkolenie / warsztat",
      location: "Online",
      speaker: "Piotr Kozłowski",
      spots: 12,
      date: "4.2.2021 09:30",
      "Zakończenie wydarzenia": "4.2.2021 13:30",
      duration: "0:04",
      Poczatkujacy: true,
      tag: ["UX", "Product Design"],
      language: "polski",
      certification: "Tak",
      skill: "Początkujacy",

      Status: "Czeka na dodanie",
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
      cost: 613.8,
    },
    {
      title: "Ekonomia behawioralna w UX",
      url: "https://designthinkingkurs.pl/",
      img: "/images/image-thumbnail.jpg",
      language: "polski",
      testimonials: "",
      speaker: "Sara Kapela",
      location: "Online",
      type: "szkolenia/warsztat",
      date: "8.02.2021",
      duration: "32h",
      spots: "15",
      tag: ["UX"],
      skill: "Początkujacy",

      certification: true,
      tags: {
        UX: true,
      },
      level: {
        Poczatkujacy: true,
      },
      price: {
        Darmowe: true,
      },
      cost: "Darmowe",
    },
    {
      title: "Ekonomia behawioralna w UX platne",
      url: "https://designthinkingkurs.pl/",
      img: "/images/image-thumbnail.jpg",
      language: "polski",
      testimonials: "",
      prowadzacy: "Sara Kapela",
      location: "Online",
      type: "szkolenia/warsztat",
      date: "8.02.2021",
      duration: "32h",
      spots: "15",
      skill: "Początkujacy",
      tags: {
        UX: true,
        productDesign: true,
        UI: true,
      },
      level: {
        Poczatkujacy: true,
      },
      price: {
        Platne: true,
      },
      tag: ["UX", "Product Design", "UI"],
      certification: true,
      cost: "613,8zł",
    },
  ];

  window.addEventListener("DOMContentLoaded", (event) => {
    let filterClick = [...document.querySelectorAll(".tagsFilter")];
    let filterArray = {
      tags: {},
      level: {},
      price: {},
    };
    let returnElement = {
      tags: null,
      level: null,
      price: null,
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
      console.log(item);
      for (const property in filterArray.tags) {
        console.log(
          item.tags[`${property}`] === filterArray.tags[`${property}`]
        );
        if (item.tags[`${property}`] === filterArray.tags[`${property}`]) {
          return true;
        }
      }
      for (const property in filterArray.level) {
        console.log(
          item.level[`${property}`] === filterArray.level[`${property}`]
        );
        if (item.level[`${property}`] === filterArray.level[`${property}`]) {
          return true;
        }
      }
      for (const property in filterArray.price) {
        console.log(
          item.price[`${property}`] === filterArray.price[`${property}`]
        );
        if (item.price[`${property}`] === filterArray.price[`${property}`]) {
          return true;
        }
      }
      return false;

      // for (const property in filterArray.tags) {
      //   if (item.tags[`${property}`] === filterArray.tags[`${property}`]) {
      //     returnElement.tags = true;
      //   } else {
      //   }
      // }
      // for (const property in filterArray.level) {
      //   if (item.level[`${property}`] === filterArray.level[`${property}`]) {
      //     returnElement.level === null
      //       ? (returnElement.level = true)
      //       : (returnElement.level = null);
      //   }
      // }

      // if (returnElement.tags === null) {
      //   if (returnElement.level === null) {
      //     if (returnElement.price === null) {
      //       return;
      //     } else {
      //       return returnElement.price;
      //     }
      //   } else {
      //     if (returnElement.price === null) {
      //       return returnElement.level;
      //     } else {
      //       returnElement.level && returnElement.price;
      //     }
      //   }
      // } else {
      //   if (returnElement.level === null) {
      //     if (returnElement.price === null) {
      //       // console.log("sam tag");
      //       // console.log(returnElement);

      //       return returnElement.tags;
      //     } else {
      //       console.log("tag i cena");

      //       return returnElement.tags && returnElement.price;
      //     }
      //   } else {
      //     if (returnElement.price === null) {
      //       console.log("tag i level");
      //       console.log(returnElement);

      //       return returnElement.tags && returnElement.level;
      //     } else {
      //       console.log("tag level cena");
      //       return (
      //         returnElement.tags && returnElement.level && returnElement.price
      //       );
      //     }
      //   }
      // }
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
      console.log(filterArray);

      let FilteredList;

      FilteredList = eventList.filter(filterItem);
      console.log(FilteredList);
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
