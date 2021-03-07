import React from "react";


export class Filters extends React.Component  {
   state = {
    tags: {},
    level: {},
    price: {},
  };
  render(){
  return (
    <>
    
    <div className="container container--xl filter__main">
    <div className="tag__container">
      <h6 className="text__h6">Wybierz tematyke</h6>
      <div className="tag__tags">
        <button className="tag__single tagsFilter" data-key="Analityka">
          Analityka
        </button>

        <button className="tag__single tagsFilter" data-key="Badania">
          Badania
        </button>
        <button className="tag__single tagsFilter" data-key="Branding">
          Branding
        </button>
        <button className="tag__single tagsFilter" data-key="productDesign">
          Product design
        </button>
        <button className="tag__single tagsFilter" data-key="prooductManagement">
          Product Management
        </button>
        <button className="tag__single tagsFilter" data-key="serviceDesign">
          Service design
        </button>
        <button className="tag__single tagsFilter" data-key="UI">UI</button>
        <button className="tag__single tagsFilter" data-key="UX">UX</button>
      </div>
    </div>
    <div className="tag__container">
      <h6 className="text__h6">Stopień zaawansowania:</h6>
      <div className="tag__tags">
        <button className="tag__single tagsFilter" data-level="Poczatkujacy">
          Początkujący
        </button>
        <button
          className="tag__single tagsFilter"
          data-level="Sredniozaawansowany"
        >
          Średniozaawansowany
        </button>
        <button className="tag__single tagsFilter" data-level="Zaawansowany">
          Zaawansowany
        </button>
      </div>
    </div>
    <div className="tag__container">
      <h6 className="text__h6">Cena:</h6>
      <div className="tag__tags">
        <button className="tag__single tagsFilter" data-price="Darmowe">
          Darmowe
        </button>
        <button className="tag__single tagsFilter" data-price="Platne">
          Płatne
        </button>
      </div>
    </div>
    </div>
    <div className="container container--big sortElement">
    <div className="sortElement__countEvents text__h6">Liczba znalezionych wydarzeń:  <span id="eventNumber"></span> 
     </div>
    <div className="sortElement__sortButtonContainer"> 
     <button className="sortSettingsTrue sortElement__sortButton  text__h6">Cena: Rosnąco</button> 
     <button className="sortSettingsFalse sortElement__sortButton sortElement__sortButton--active text__h6">Data: Najbliższa</button>
   </div>
  
     
   </div>
    </>
    )
  
  }
  }
  