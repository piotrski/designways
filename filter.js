const fetchData = () => fetch("data.json").then((response) => response.json());

const sentEventClick = (eventName) => {
  gtag("event", "click_event", {
    event_category: "Events - Clicks",
    event_label: eventName,
    value: 1,
  });
};

(() => {
  window.addEventListener("DOMContentLoaded", async (event) => {
    const eventList = await fetchData();
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
           <a href="${workshop.url}" target="_blank" class="lecture__join buttonDesktop">Dowiedz się więcej</a>
          
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

    document.addEventListener("click", (event) => {
      if (event.target.classList.contains("lecture__join")) {
        const foundEvent = eventList.find(
          (item) => item.url == event.target.href
        );
        if (foundEvent) {
          sentEventClick(foundEvent.title);
        }
      }
      return false;
    });
  });
})();
