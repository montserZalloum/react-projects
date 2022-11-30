import React, { useEffect, useState } from "react";
import CrudTemplate from "../../../components/admin/ui/CrudTemplate";
import Input from "../../../components/admin/ui/Input";
import useHttp from "../../../hooks/useHttp";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../store/ui-slice";

function NewUser() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [form, setForm] = useState({
    ID: "",
    name: "",
  });

  const { isLoading, sendRequest: newUser } = useHttp();
  const { sendRequest: getUser } = useHttp();

  useEffect(() => {
    if (id) {
      getUser({
        method: 'GET',
        url: `users/${id}`
      },cb)
      function cb(user) {
        setForm((prev) => {
          return {
            ID: id,
            name: user.name,
          };
        });
      }
      
    }
  }, []);

  const navigate = useNavigate();

  const newUserObj = {
    url: "users",
    method: "POST",
  };

  const handleInputChange = ({ target: { name, value } }) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const userAddedHandler = () => {
    dispatch(uiActions.showNotification("User Added Successfully!"));
    navigate("/admin/users");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { name } = form;

    if (name == "") {
      alert("please enter the name field");
      return false;
    }
    newUserObj.data = {
      name,
    };
    if (id) {
      newUserObj.url = '/users/' + id
      newUserObj.method = 'PUT'
    }
    newUser(newUserObj, userAddedHandler);
  };

  return (
    <CrudTemplate title="New User">
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

export default NewUser;
