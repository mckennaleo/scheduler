import React , {useState} from "react";
import Button from "components/Button";
import InterviewerList from "components/InterviewerList";

export default function Form(props) {
  const [name, setName] = useState(props.name ? props.name : "")
  const [interviewer, setInterviewer] = useState(props.interviewer ? props.interviewer : "")
  const onNameChange = (evt) => {
    setName(evt.target.value)
  };
  const onInterviewerClick = (id) => {
    setInterviewer(id)
  }
  const cancel = () => {
    setName("");
    setInterviewer("");
    props.onCancel();
  }
  const confirm = () => {
    props.onSave(name, interviewer);
    setName("");
    setInterviewer("");
  }
    return (
      <main className="appointment__card appointment__card--create">
        <section className="appointment__card-left">
          <form autoComplete="off">
            <input
              className="appointment__create-input text--semi-bold"
              name="name"
              type="text"
              placeholder={"Enter Student Name"}
              value={name}
              onChange={onNameChange}
            />
          </form>
          <InterviewerList 
            interviewers={props.interviewers} 
            value={interviewer} 
            onChange={onInterviewerClick} 
          />
        </section>
        <section className="appointment__card-right">
          <section className="appointment__actions">
            <Button 
              danger
              onClick={cancel}
              >Cancel</Button>
            <Button 
              confirm
              onClick={confirm}
              >Save</Button>
          </section>
        </section>
      </main>
    )}