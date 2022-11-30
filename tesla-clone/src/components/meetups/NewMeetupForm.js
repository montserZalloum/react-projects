import React, { useRef } from "react";
import Card from "../ui/Card";
function NewMeetupForm(props) {

    const titleInputRef = useRef()
function submitHandler(e) {
    e.preventDefault();

    const enteredTitle = titleInputRef.current.value
    const meetupData = {
        title: enteredTitle
    }
    
    props.onAddMeetup(meetupData)
  }

  return (
    <div>
      <br></br>
      <Card>
        <form onSubmit={submitHandler}>
          <label htmlFor="title">Title</label>
          <input id="title" type="text" placeholder="title here" ref={titleInputRef} />
          <button>Add New</button>
        </form>
      </Card>
    </div>
  );
}

export default NewMeetupForm;
