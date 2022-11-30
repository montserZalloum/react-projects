import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../../components/course/Banner";
import LessonsTable from "../../components/course/LessonsTable";
import useHttp from "../../hooks/useHttp";

function CoursePage() {
  const [courseData, setCourseData] = useState();
  const [lessons, setLessons] = useState();
  const { id } = useParams();

  const { sendRequest } = useHttp();

  useEffect(() => {
    const courseCallback = data => {
        setCourseData(data)
    };
    const lessonsCallback = data => {
        data = data.filter((lsn)=>{
            if (lsn.courseID === id) {
                return lsn
            }
        })
        setLessons(data)
    };
    sendRequest({ url: `courses/${id}`, method: "GET" },courseCallback);
    sendRequest({ url: `lessons`, method: "GET" },lessonsCallback);
  }, []);
  const labels = ['','Time','Name']
  return (
    <div className="course-page">
        <div className="mb-30">
            {courseData && <Banner courseName={courseData.name} trailerLink={courseData.trailerLink} />}
            {lessons && <LessonsTable labels={labels} data={lessons} />}
        </div>
    </div>
  );
}

export default CoursePage;
