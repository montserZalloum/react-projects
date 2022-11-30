import React, { useEffect, useState } from "react";
import CrudTemplate from "../../../components/admin/ui/CrudTemplate";
import Input from "../../../components/admin/ui/Input";
import useHttp from "../../../hooks/useHttp";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../store/ui-slice";

function NewLesson() {
  const dispatch = useDispatch();
  const { lessonID,id } = useParams();
  const [form, setForm] = useState({
    id: "",
    name: "",
    courseID : id
  });
  
  const { isLoading, sendRequest: NewLesson } = useHttp();
  const { sendRequest: getUser } = useHttp();

  useEffect(() => {
    if (lessonID) {
      getUser({
        method: 'GET',
        url: `lessons/${lessonID}`
      },cb)
      function cb(lesson) {
        setForm((prev) => {
          return {
            id: lessonID,
            name: lesson.name,
            courseID: id
          };
        });
      }
      
    }
  }, []);

  const navigate = useNavigate();

  const NewLessonObj = {
    url: "lessons",
    method: "POST",
  };

  const handleInputChange = ({ target: { name, value } }) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const userAddedHandler = () => {
    dispatch(uiActions.showNotification("Lesson Added Successfully!"));
    navigate(`/admin/courses/${id}/lessons`);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { name } = form;

    if (name == "") {
      alert("please enter the name field");
      return false;
    }
    NewLessonObj.data = {
      name,
      time: '10:21',
      courseID: id
    };
    if (lessonID) {
      NewLessonObj.url = '/lessons/' + lessonID
      NewLessonObj.method = 'PUT'
    }
    NewLesson(NewLessonObj, userAddedHandler);
  };

  return (
    <CrudTemplate title="New Lesson">
      <form onSubmit={submitHandler}>
        <div className="grid-2">
          <Input
            value={form.name}
            onChange={handleInputChange}
            label="Name"
            name="name"
          />
        </div>
        <div className="d-flex justify-center mt-30">
          <button className="btn w-35 font-22 pt-10 pb-10">Save</button>
        </div>
      </form>
    </CrudTemplate>
  );
}

export default NewLesson;
