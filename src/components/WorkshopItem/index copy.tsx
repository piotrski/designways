import React from "react";
import { Workshop } from "../../types";
import { formatDuration, formatPriceWithCurrency } from "./helpers";

type Props = {
  workshop: Workshop;
  customClass: string
};

export const WorkshopItem = ({ workshop, customClass }: Props) => {
  return (
    <div className={customClass}>
      <div className="lecture__half">
        <img className="lecture__image" src="${workshop.img}" alt="" />
        <div className="lecture__description">
          <div className="lecture__tags"> {workshop.tags}</div>
          <div className="level level__basic">{workshop.skill}</div>
          <div className="lecture__title">{workshop.title}</div>
          <a
            href={workshop.url}
            target="_blank"
            className="lecture__join buttonDesktop"
          >
            Dowiedz się więcej
          </a>
        </div>
      </div>
      <div className="lecture__half lecture__rightGrid">
        <div className="lecture__rightGrid__borderAndSpacing">
          <span className="lecture__rightGrid--span">Prowadzący</span>$
          {workshop.speaker}
        </div>
        <div className="lecture__rightGrid__borderAndSpacing">
          <span className="lecture__rightGrid--span">Data</span>{workshop.date}
        </div>
        <div>
          <span className="lecture__rightGrid--span">Czas Trwania</span>
          {formatDuration(workshop)}
        </div>
        <div className="lecture__rightGrid__borderAndSpacing">
          <span className="lecture__rightGrid--span">Lokalizacja</span>
          {workshop.location}
        </div>
        <div className="lecture__rightGrid__borderAndSpacing">
          <span className="lecture__rightGrid--span">Typ</span>{event.type}
        </div>
        <div>
          <span className="lecture__rightGrid--span">Liczba Miejsc</span>
          {workshop.spots}
        </div>
        <div className="lecture__rightGrid__price">
          ${formatPriceWithCurrency(workshop)}
        </div>
      </div>
      <div className="lecture__half buttonMobile">
        <a className="lecture__join buttonMobile__cta" href={workshop.url}>
          Dowiedz się więcej
        </a>
      </div>
    </div>
  );
};
