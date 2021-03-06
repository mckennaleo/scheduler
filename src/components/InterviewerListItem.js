import React from "react";
import "components/InterviewerListItem.scss";
const classNames = require('classnames');

export default function InterviewerListItem(props) {

  let interviewersItemClass = classNames('interviewers__item', props.className, {
    "interviewers__item--selected": props.selected
  });


  return (
    <li className={interviewersItemClass} key={props.id} onClick={props.setInterviewer}>
    <img
      className="interviewers__item-image"
      src={props.avatar}
      alt={props.name}
    />
      {props.selected ? props.name : ""}
    </li>
  );
};




