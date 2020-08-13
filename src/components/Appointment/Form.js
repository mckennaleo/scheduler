import React , {useState} from "react";
import Button from "components/Button";
import InterviewerList from "components/InterviewerList";

export default function Form(props) {
  const [name, setName] = useState(props.name ? props.name : "");
  const [error, setError] = useState("");
  const [interviewer, setInterviewer] = useState(props.interviewer ? props.interviewer : null);

  const onInterviewerClick = (id) => {
    setInterviewer(id)
  };
  const cancel = () => {
    setName("");
    setInterviewer(null);
    props.onCancel();
  };
  
  const confirm = () => {
    if (name === "") {
      setError("student name cannot be blank")
      return;
    }
    if (interviewer === null) {
      setError("you must choose an interviewer")
      return;
    }
    setError("")
    props.onSave(name, interviewer);
    setName("");
    setInterviewer(null);
    };
    return (
      <main className="appointment__card appointment__card--create">
        <section className="appointment__card-left">
          <form autoComplete="off">
            <input
              className="appointment__create-input text--semi-bold"
              name="name"
              type="text"
              placeholder="Enter Student Name"
              value={name}
              onChange={event => {
                setName(event.target.value);
              }}
              data-testid="student-name-input"
            />
          </form>
          <section className="appointment__validation">
            {error}
          </section>
          <InterviewerList 
            interviewers={props.interviewers} 
            value={interviewer} 
            onChange={onInterviewerClick} 
            data-testid="interviewer"
          />
        </section>
        <section className="appointment__card-right">
          <section className="appointment__actions">
            <Button 
              danger
              onClick={cancel}>
              Cancel
            </Button>
            <Button 
              confirm
              onClick={confirm}>
              Save
            </Button>
          </section>
        </section>
      </main>
    )};