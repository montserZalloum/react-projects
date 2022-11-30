import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const inputRef = useRef()
  const [enteredName,setEnteredName] = useState('')
  const [enteredNameIsValid,setEnteredNameIsValid] = useState(true)

  const nameInputChangeHamdler = (event) => {
    setEnteredName(event.target.value)
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredValue = inputRef.current.value
    
    if (enteredName.trim() == '') {
      setEnteredNameIsValid(false)
      return 
    } 
    setEnteredNameIsValid(true)
  }

  const nameInputClasses = enteredNameIsValid ? `form-control` : 'form-control invalid'

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={inputRef} type='text' id='name' onChange={nameInputChangeHamdler} />
        {!enteredNameIsValid && <p className="error-text">name must not be empty!</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
