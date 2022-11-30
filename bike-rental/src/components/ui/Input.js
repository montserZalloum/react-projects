import React, { useRef } from "react";

function Input(props) {
    const inputRef = useRef();
  return (
    <div>
      <label>{props.label}</label>
      <input
        id={props.id}
        type={props.type || "text"}
        name={props.id}
        onChange={props.onChange}
        ref={inputRef}
        required={props.required === false ? false : true}
        value={props.value}
        className="w-100 form-control"
      />
    </div>
  );
}

export default Input;
