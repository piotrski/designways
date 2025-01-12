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
    // taka tablica jest niepotrzebna
    // zauważ że wtedy do każdego elementu dokładasz handler
    const displayAmountOfEvent = (arrayList) => {
      document.getElementById("eventNumber").innerHTML = arrayList.length;
    };

    let filterClick = [...document.querySelectorAll(".tagsFilter")];
    let filterArray = {
      tags: {},
      level: {},
      price: {},
    };
    let sortSettings = false;

    for (const key of filterClick) {
      filterArray.tags[key.dataset.key] = null;
      filterArray.level[key.dataset.level] = null;
      filterArray.price[key.dataset.price] = null;
    }

    const toggleClass = (e) => {
      e.target.classList.toggle("tag__single--active");
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
      if (e.target.classList.contains("tag__single")) {
        toggleClass(e);
      }

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

    const displayPriceWithCurrency = (singleEvent) => {
      if (singleEvent.cost > 0) {
        return `${singleEvent.cost.toFixed(2).replace(/\./g, ",")} zł`;
      } else {
        return `Darmowe`;
      }
    };

    const formatDuration = (singleEvent) => {
      let duration = singleEvent.duration.split(":");

      return `${duration[0]} h ${duration[1]} min`;
    };

    const renderEmpty = () => {
      contenerList = `
      <div class="lecture">
        Ooppps. Wygląda na to, ze nie mamy nic z tym filtrowaniem. Wyślij nam zgłoszenie na <a href="mailto:hello@deisgnways.io">hello@designways.io</a>
      </div>`;
    };

    const sortList = (arrayList) => {
      if (sortSettings) {
        return arrayList.sort((a, b) => a.cost - b.cost);
      } else {
        return arrayList.sort(
          (a, b) =>
            moment(a.date, "D.MM.YYYY HH:mm").unix() -
            moment(b.date, "D.MM.YYYY HH:mm").unix()
        );
      }
    };

    const renderElement = (arrayList) => {
      displayAmountOfEvent(arrayList);
      sortList(arrayList);
      let oldEvent = arrayList.filter(
        (workshop) =>
          moment(workshop.date, "D.MM.YYYY HH:mm").unix() < moment().unix()
      );
      let newEvent = arrayList.filter(
        (workshop) =>
          moment(workshop.date, "D.MM.YYYY HH:mm").unix() > moment().unix()
      );
      let contenerList = ``;
      let workshopClass = "";

      if (!arrayList.length) {
        renderEmpty();
      } else {
        newEvent.forEach((workshop) => {
          const tags = workshop.tag.reduce(
            (result, tagg) =>
              `${result}<div class="tag__single tag__single--small">${tagg}</div>`,
            ""
          );
          if (
            moment(workshop.date, "D.MM.YYYY HH:mm").unix() < moment().unix()
          ) {
            workshopClass = "lecture lecture--nonActive";
          } else {
            workshopClass = "lecture";
          }

          const currentHtml = `
      <div class="${workshopClass}">
       <div class="lecture__half">
         <img class="lecture__image" src="${workshop.img}" alt="" />
         <div class="lecture__description">
           <div class="lecture__tags"> ${tags}
           </div>

           <div class="level level__basic">${workshop.skill}</div>
           <div class="lecture__title">
           ${workshop.title}
           </div>
           <a href="${
             workshop.url
           }" target="_blank" class="lecture__join buttonDesktop">Dowiedz się więcej</a>
          
         </div>
       </div>
       <div class="lecture__half lecture__rightGrid">
         <div class="lecture__rightGrid__borderAndSpacing">
           <span class="lecture__rightGrid--span">Prowadzący</span>${
             workshop.speaker
           }
         </div>
         <div class="lecture__rightGrid__borderAndSpacing">
           <span class="lecture__rightGrid--span">Data</span>${workshop.date}
         </div>
         <div>
           <span class="lecture__rightGrid--span">Czas Trwania</span>${formatDuration(
             workshop
           )}
         </div>
         <div class="lecture__rightGrid__borderAndSpacing">
           <span class="lecture__rightGrid--span">Lokalizacja</span>${
             workshop.location
           }
         </div>
         <div class="lecture__rightGrid__borderAndSpacing">
           <span class="lecture__rightGrid--span">Typ</span>${workshop.type}
         </div>
         <div>
           <span class="lecture__rightGrid--span">Liczba Miejsc</span>${
             workshop.spots
           }
         </div>
         <div class="lecture__rightGrid__price">${displayPriceWithCurrency(
           workshop
         )}</div>
       </div>
       <div class="lecture__half buttonMobile">
          <a href="${
            workshop.url
          }" class="lecture__join buttonMobile__cta">Dowiedz się więcej</a>
        </div>
     </div>`;
          contenerList += currentHtml;
        });
        contenerList += `<div class="pastEvent text__h6">Ubiegłe wydarzenia</div>`;
        oldEvent.forEach((workshop) => {
          const tags = workshop.tag.reduce(
            (result, tagg) =>
              `${result}<div class="tag__single tag__single--small">${tagg}</div>`,
            ""
          );
          if (
            moment(workshop.date, "D.MM.YYYY HH:mm").unix() < moment().unix()
          ) {
            workshopClass = "lecture lecture--nonActive";
          } else {
            workshopClass = "lecture";
          }

          const currentHtml = `
      <div class="${workshopClass}">
       <div class="lecture__half">
         <img class="lecture__image" src="${workshop.img}" alt="" />
         <div class="lecture__description">
           <div class="lecture__tags"> ${tags}
           </div>

           <div class="level level__basic">${workshop.skill}</div>
           <div class="lecture__title">
           ${workshop.title}
           </div>
           <a href="${
             workshop.url
           }" target="_blank" class="lecture__join buttonDesktop">Dowiedz się więcej</a>
          
         </div>
       </div>
       <div class="lecture__half lecture__rightGrid">
         <div class="lecture__rightGrid__borderAndSpacing">
           <span class="lecture__rightGrid--span">Prowadzący</span>${
             workshop.speaker
           }
         </div>
         <div class="lecture__rightGrid__borderAndSpacing">
           <span class="lecture__rightGrid--span">Data</span>${workshop.date}
         </div>
         <div>
           <span class="lecture__rightGrid--span">Czas Trwania</span>${formatDuration(
             workshop
           )}
         </div>
         <div class="lecture__rightGrid__borderAndSpacing">
           <span class="lecture__rightGrid--span">Lokalizacja</span>${
             workshop.location
           }
         </div>
         <div class="lecture__rightGrid__borderAndSpacing">
           <span class="lecture__rightGrid--span">Typ</span>${workshop.type}
         </div>
         <div>
           <span class="lecture__rightGrid--span">Liczba Miejsc</span>${
             workshop.spots
           }
         </div>
         <div class="lecture__rightGrid__price">${displayPriceWithCurrency(
           workshop
         )}</div>
       </div>
       <div class="lecture__half buttonMobile">
          <a href="${
            workshop.url
          }" class="lecture__join buttonMobile__cta">Dowiedz się więcej</a>
        </div>
     </div>`;
          contenerList += currentHtml;
        });
      }

      const single = document.getElementById("lecture");
      single.innerHTML = contenerList;
    };

    renderElement(eventList);

    document.addEventListener("click", (event) => {
      if (event.target.classList.contains("lecture__join")) {
        const foundEvent = eventList.find(
          (item) => item.url == event.target.href
        );
        if (foundEvent) {
          sentEventClick(foundEvent.title);
        }
      } else if (event.target.classList.contains("tagsFilter")) {
        filterElement(event);
      } else if (event.target.classList.contains("sortSettingsTrue")) {
        sortSettings = true;
        event.target.classList.add("sortElement__sortButton--active");
        document
          .querySelector(".sortSettingsFalse")
          .classList.remove("sortElement__sortButton--active");
        console.log(document.querySelector(".sortSettingsFalse"));
        filterElement(event);
      } else if (event.target.classList.contains("sortSettingsFalse")) {
        sortSettings = false;
        event.target.classList.add("sortElement__sortButton--active");
        document
          .querySelector(".sortSettingsTrue")
          .classList.remove("sortElement__sortButton--active");
        filterElement(event);
      }
      return false;
    });
  });
})();
