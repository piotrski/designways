import dayjs from "dayjs";
import React from "react";
import { TagButton } from '../TagButton/'
import { WorkshopItem } from "../WorkshopItem";

export class Filters extends React.Component  {
   state = {
    tags: [],
    level: [],
    price: [],
    sort: false,
  };
  toggleClass = (e) => {
    e.target.classList.toggle("tag__single--active");
  };
  getDataSetTag = (e) => {
    const tagsList = [...this.state.tags];
    const value = Object.keys(e.target.dataset).[1];
    // const whichState = { Object.keys(e.target.dataset).[0]): null };
    tagsList.includes(value)
    ? this.setState({ tags: (tagsList.filter(element => element !== value)) })
      : this.setState({ tags: [...tagsList, value] })
    this.toggleClass(e);
  }
  getDataSetLevel = (e) => {
    const tagsList = [...this.state.tags];
    const value = e.target.dataset.level.toString();
    tagsList.includes(value)
    ? this.setState({ tags: (tagsList.filter(element => element !== value)) })
      : this.setState({ tags: [...tagsList, value] })
    this.toggleClass(e);
  }
  getDataSetPrice = (e) => {
    const tagsList = [...this.state.tags];
    const value = e.target.dataset.price.toString();
    console.log(this.state)
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
  setSort = () =>{
    this.setState({sort: !this.state.sort })
  }
  checkSort = (arrayList, old) => {
     if (this.state.sort) {
        return arrayList.sort((a, b) => a.price - b.price);
      } 
      if(old)
      {
          return arrayList.sort(
          (a, b) =>
            dayjs(a.startDate).unix() -
            dayjs(b.startDate).unix()
        ).reverse();
      } 
       
        return arrayList.sort(
          (a, b) =>
            dayjs(a.startDate).unix() -
            dayjs(b.startDate).unix()
        );
  
      
  }

  
  render(){
    const posts = this.props.posts
    const levels = this.props.levels
    const tags = this.props.tags
    const oldEvents = this.checkSort(posts.filter(post => dayjs(post.startDate).unix() < dayjs().unix()), true)
    const onGoingEvents = this.checkSort(posts.filter(post => dayjs(post.startDate).unix() > dayjs().unix()), false)

  return (
    <>
    <div className="container container--xl filter__main">
    <div className="tag__container">
      <h6 className="text__h6">Wybierz tematyke</h6>
      <div className="tag__tags">
      {tags.map(tag => (
              <TagButton  getDataSetTag={this.getDataSetTag} tagName={tag.name} />
         
        ))}
      </div>
    </div>
    <div className="tag__container">
      <h6 className="text__h6">Stopień zaawansowania:</h6>
      <div className="tag__tags">
  
        {levels.map(level => (
              <TagButton  getDataSetLevel={this.getDataSetLevel} levelName={level.name} />
         
        ))}
      </div>
    </div>
    <div className="tag__container">
      <h6 className="text__h6">Cena:</h6>
      <div className="tag__tags">
        <TagButton getDataSetPrice={this.getDataSetPrice} priceName={"Darmowe"} />
        <TagButton getDataSetPrice={this.getDataSetPrice}  priceName={"Platne"} />
      </div>
    </div>
    </div>
    <div className="container container--big sortElement">
        <div className="sortElement__countEvents text__h6">Liczba znalezionych wydarzeń:  <span id="eventNumber">{posts.length}</span>
     </div>
    <div className="sortElement__sortButtonContainer"> 
     <button className={this.state.sort ? "sortElement__sortButton  text__h6" : "sortElement__sortButton sortElement__sortButton--active text__h6"} onClick={this.setSort}>Cena: Rosnąco</button> 
     <button className={this.state.sort ? "sortElement__sortButton sortElement__sortButton--active text__h6" : "sortElement__sortButton  text__h6"} onClick={this.setSort}>Data: Najbliższa</button>
        </div>
        

      </div>
      <div class="container container--big" id="lecture">
        {
          onGoingEvents.map(post => (
            <WorkshopItem post={post} /> 

          ))}
        
        {!oldEvents ? null : <div className="pastEvent text__h6"> Ubiegłe wydarzenia
 </div>}
        {
          oldEvents.map(post => (
            <WorkshopItem oldEvent={true} post={post} />

          ))}
     </div>
    </>
    )
  
  }
  }
  