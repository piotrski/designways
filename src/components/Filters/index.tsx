import React from "react";
import { TagButton } from '../TagButton/'
import { WorkshopItem } from "../WorkshopItem";

export class Filters extends React.Component  {
   state = {
    tags: [],
    level: [],
     price: [],
    sort: [],
  };
  toggleClass = (e) => {
    e.target.classList.toggle("tag__single--active");
  };
  getDataSetTag = (e) => {
    const tagsList = [...this.state.tags];
    const value = e.target.dataset.key.toString();
    console.log(e.target.dataset)
    tagsList.includes(value)
    ? this.setState({ tags: (tagsList.filter(element => element !== value)) })
      : this.setState({ tags: [...tagsList, value] })
    this.toggleClass(e);
  }
  getDataSetLevel = (e) => {
    const tagsList = [...this.state.tags];
    const value = e.target.dataset.key.toString();
    console.log(e.target.dataset)
    tagsList.includes(value)
    ? this.setState({ tags: (tagsList.filter(element => element !== value)) })
      : this.setState({ tags: [...tagsList, value] })
    this.toggleClass(e);
  }
  getDataSetLevel = (e) => {
    const tagsList = [...this.state.tags];
    const value = e.target.dataset.key.toString();
    console.log(e.target.dataset)
    tagsList.includes(value)
    ? this.setState({ tags: (tagsList.filter(element => element !== value)) })
      : this.setState({ tags: [...tagsList, value] })
    this.toggleClass(e);
  }


  toggleValue = (array, value, ) => {
    array.includes(value)
      ? this.setState({ tags: (array.filter(element => element !== value)) })
      : this.setState({ tags: [...array, value] })
  }

  renderAll = () => {
    
  }
  
  render(){
    const posts = this.props.posts
    const levels = this.props.levels
    const tags = this.props.tags
  return (
    <>
    <div className="container container--xl filter__main">
    <div className="tag__container">
      <h6 className="text__h6">Wybierz tematyke</h6>
      <div className="tag__tags">
      {tags.map(tag => (
              <TagButton toggleClass={this.toggleClass} getDataSetTag={this.getDataSetTag} tagName={tag.name} />
         
        ))}
      </div>
    </div>
    <div className="tag__container">
      <h6 className="text__h6">Stopień zaawansowania:</h6>
      <div className="tag__tags">
  
        {levels.map(level => (
              <TagButton toggleClass={this.toggleClass} getDataSetTag={this.getDataSetTag} levelName={level.name} />
         
        ))}
      </div>
    </div>
    <div className="tag__container">
      <h6 className="text__h6">Cena:</h6>
      <div className="tag__tags">
        <TagButton toggleClass={this.toggleClass} priceName={"Darmowe"} />
        <TagButton toggleClass={this.toggleClass} priceName={"Platne"} />
      </div>
    </div>
    </div>
    <div className="container container--big sortElement">
        <div className="sortElement__countEvents text__h6">Liczba znalezionych wydarzeń:  <span id="eventNumber">{posts.length}</span>
     </div>
    <div className="sortElement__sortButtonContainer"> 
     <button className="sortSettingsTrue sortElement__sortButton  text__h6">Cena: Rosnąco</button> 
     <button className="sortSettingsFalse sortElement__sortButton sortElement__sortButton--active text__h6">Data: Najbliższa</button>
        </div>
        
     
      </div>
      <div class="container container--big" id="lecture">
        {
          posts.map(post => (
          <WorkshopItem post={post} />

        ))}
     
     </div>
    </>
    )
  
  }
  }
  