import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss";

export default function InterviewerList(props) {
  const interviewers = props.interviewers.map(x => (
    <InterviewerListItem
      name={x.name}
      key={x.id}
      avatar={x.avatar}
      selected={x.id === props.value}
      setInterviewer={event => props.onChange(x.id)}
    />
  ));

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewers}</ul>
    </section>
  )
}

