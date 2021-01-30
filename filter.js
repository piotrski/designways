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
      level: "Junior",
      Poczatkujacy: true,
      tags: ["UX", "Product Design"],
      language: "polski",
      certification: "Tak",
      Status: "Czeka na dodanie",
      Platne: true,
      price: 613.8,
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
      level: "Początkujący",
      Poczatkujacy: true,
      tags: ["UX"],
      UX: true,
      Darmowe: true,
      certification: true,
      price: "Darmowe",
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
      level: "Początkujący",
      Poczatkujacy: true,
      UX: true,
      productDesign: true,
      UI: true,
      tags: ["UX", "Product Design", "UI"],
      Platne: true,
      certification: true,
      price: "613,8zł",
    },
  ];

  window.addEventListener("DOMContentLoaded", (event) => {
    let filterClick = [...document.querySelectorAll(".tagsFilter")];
    let filterArray = {};
    console.log(filterArray);
    for (const key of filterClick) {
      filterArray[key.dataset.key] = null;
    }

    const filterElement = (e) => {
      e.target.classList.value.includes("tag__single--active")
        ? e.target.classList.remove("tag__single--active")
        : e.target.classList.add("tag__single--active");

      const clickedElement = e.target.dataset.key.toString();
      let FilteredList;

      filterArray[`${clickedElement}`] == null
        ? (filterArray[`${clickedElement}`] = true)
        : (filterArray[`${clickedElement}`] = null);

      console.log(filterArray);

      const filterItem = (item) => {
        for (const property in filterArray) {
          if (item[`${property}`] === filterArray[`${property}`]) {
            return true;
          }
        }
        return false;
      };

      FilteredList = eventList.filter(filterItem);

      checkWhatToDisplay(FilteredList);
    };

    const checkWhatToDisplay = (FilteredList) => {
      if (Object.values(filterArray).indexOf(true) > -1) {
        renderElement(FilteredList);
      } else {
        renderElement(eventList);
      }
    };

    const renderElement = (arrayList) => {
      let contenerList = ``;
      arrayList.map((workshop) => {
        let tags = "";
        workshop.tags.map((tag) => {
          tags += `<div class="tag__single tag__single--small">${tag}</div>`;
        });
        const currentHtml = `
      <div class="lecture">
       <div class="lecture__half">
         <img class="lecture__image" src="${workshop.img}" alt="" />
         <div class="lecture__description">
           <div class="lecture__tags"> ${tags}
           </div>

           <div class="level level__basic">${workshop.level}</div>
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
         <div class="lecture__rightGrid__price">${workshop.price}</div>
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
