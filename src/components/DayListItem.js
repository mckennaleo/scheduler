import React from "react";
import "components/DayListItem.scss";
const classNames = require('classnames');

export default function DayListItem(props) {

    let dayClass = classNames("day-list__item", props.className, {
      "day-list__item--selected": props.selected,
      "day-list__item--full": props.spots === 0
    });
    
    const formatSpots = (spots) => {
      if (spots === 0) {
        return 'no spots remaining'
      }

      if (spots === 1) {
        return '1 spot remaining'
      } else {
        return `${spots} spots remaining`
      }
    };

    return (
      <li className={dayClass} data-testid="day" onClick={() => props.setDay(props.name)}>
        <h2>{props.name}</h2>
        <h4>{formatSpots(props.spots)}</h4>
        
      </li>
    ) 
};

