import React, { useRef } from "react";

function Input(props) {
  const inputRef = useRef();
  
  return (
    <div className="">
      <label>{props.label}</label>
      <input
        onChange={props.onChange}
        ref={inputRef}
        className="form-control"
        type="text"
        value={props.value || ""}
        name={props.name}
      />
    </div>
  );
}

export default Input;
