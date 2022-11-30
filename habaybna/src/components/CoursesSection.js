import React from "react";
import { Link } from "react-router-dom";
import CardItem from "./ui/CardItem";

function CoursesSection(props) {
  if (props.data.length == 0) return null;
  return (
    <div className="courses-section grid-3">
      {props.data.map((item) => (
        <CardItem
          link={`/course/${item.id}`}
          key={item.id}
          name={item.name}
          label="course"
        ></CardItem>
      ))}
      {props.hasShowMore && <Link className="show-more-link card-item bg-white shadow radius-8 overflow-hidden flex-all white font-30 bold" to={`/courses`}>
        Show More
      </Link>}
    </div>
  );
}

export default CoursesSection;
