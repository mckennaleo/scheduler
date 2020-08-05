import React from "react";
import "components/DayListItem.scss";
const classNames = require('classnames');

export default function InterviewerListItem(props) {

  let interviewersItemClass = classNames('interviewers__item', props.className, {
    "interviewers__item--selected": props.selected,
    
  })


  return(
    <li className="interviewers__item">
    <img
      className="interviewers__item-image"
      src="https://i.imgur.com/LpaY82x.png"
      alt="Sylvia Palmer"
    />
      Sylvia Palmer
    </li>
  );
}


