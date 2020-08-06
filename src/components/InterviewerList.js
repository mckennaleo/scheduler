import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss";

export default function InterviewerList(props) {
  console.log(props.interviewers)
  const mappedInterviewers = props.interviewers.map(x => (
    <InterviewerListItem
      key={x.id}
      name={x.name}
      number={x.id}
      setInterviewer={x.setInterviewer}
      avatar={x.avatar}
      selected={x.id === props.interviewer}
    />
  ));

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{mappedInterviewers}</ul>
    </section>
  )
}

