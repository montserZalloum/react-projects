import React from "react";
import Item from "./Item";

function MeetupList(props) {
  return (
    <ul>
      {props.items.map((item) => (
        <Item title={item.title} key={item.id} id={item.id} />
      ))}
    </ul>
  );
}

export default MeetupList;
