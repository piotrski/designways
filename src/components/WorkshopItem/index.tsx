import dayjs from "dayjs";
import React from "react";
import { Workshop } from "../../types";
import { formatDuration, formatPriceWithCurrency } from "./helpers";

type Props = {
  workshop: Workshop;
  customClass: string
};

export const WorkshopItem = (props) => {
  return (
    <div className={props.oldEvent ? "lecture lecture--nonActive" : "lecture" }>

      <div className="lecture__half">
        <img className="lecture__image" src={props.post.image.fields.file.url} alt={props.post.title}  />
        <div className="lecture__description">
          <div className="lecture__tags"> {props.post.tags.map(singleTag => (
            <div class="tag__single tag__single--small">{singleTag.fields.name}</div>
          ))}
          </div>
          <div className="level level__basic">{props.post.level.fields.name}</div>
          <div className="lecture__title">{props.post.title} </div>
          <a
            href=""
            target="_blank"
            className="lecture__join buttonDesktop"
          >
            Dowiedz się więcej
          </a>
        </div>
      </div>
      <div className="lecture__half lecture__rightGrid">
        <div className="lecture__rightGrid__borderAndSpacing">
          <span className="lecture__rightGrid--span">Prowadzący</span>
          {props.post.speaker}
        </div>
        <div className="lecture__rightGrid__borderAndSpacing">
          <span className="lecture__rightGrid--span">Data</span>
          {dayjs(props.post.startDate).format('DD.MM.YYYY - HH:mm' )}
        </div>
        <div>
          <span className="lecture__rightGrid--span">Czas Trwania</span>
          {formatDuration(props.post.duration)}
          
        </div>
        <div className="lecture__rightGrid__borderAndSpacing">
          <span className="lecture__rightGrid--span">Lokalizacja</span>
          {props.post.location}
          
        </div>
        <div className="lecture__rightGrid__borderAndSpacing">
          <span className="lecture__rightGrid--span">Typ</span>
          {props.post.type}
        </div>
        <div>
          <span className="lecture__rightGrid--span">Liczba Miejsc</span>
          {props.post.spots}
        
        </div>
        <div className="lecture__rightGrid__price">
          {formatPriceWithCurrency(props.post.price)}
        </div>
      </div>
      <div className="lecture__half buttonMobile">
        <a className="lecture__join buttonMobile__cta" href="">
          Dowiedz się więcej
        </a>
      </div>
    </div>
  );
};
