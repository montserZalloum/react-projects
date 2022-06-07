import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllUsers } from "../redux/userSlice";
import "../styles/cms.css";
import CmsLayout from "./ADMIN-LAYOUT";
import Multiselect from "multiselect-react-dropdown";
import { addConference } from "../redux/conferenceSlice";
function Cmspage() {
  const dispatch = useDispatch();
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const resp = (await dispatch(getAllUsers())).payload.map((user) => ({
        name: user.name,
        id: user._id,
      }));
      setAllUsers(resp);
    }
    fetchData();
  }, []);

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [food, setFood] = useState("");
  const [speakers, setSpeakers] = useState("");
  const [users, setUsers] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addConference({ name, location, food, speakers, users, dateTime }));
  };

  const updateSelectedUsers = (selectedUsers) => {
    const IDs = selectedUsers.map(user=>user.id)
    setUsers(IDs);
  };
  const removeFromSelectedUsers = (selectedUsers) => {
    const IDs = selectedUsers.map(user=>user.id)
    setUsers(IDs);
  };

  return (
    <div className="cmspage">
      <CmsLayout>
        <div className="card-body">
          <div className="form-group mb-15 d-flex">
            <div className="w-30">
              <label>Name</label>
            </div>
            <div className="w-70">
              <input
                name="name"
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control w-100"
              />
            </div>
          </div>
          <div className="form-group mb-15 d-flex">
            <div className="w-30">
              <label>Location</label>
            </div>
            <div className="w-70">
              <input
                name="location"
                onChange={(e) => setLocation(e.target.value)}
                type="text"
                className="form-control w-100"
              />
            </div>
          </div>
          <div className="form-group mb-15 d-flex">
            <div className="w-30">
              <label>Food</label>
            </div>
            <div className="w-70">
              <input
                name="food"
                onChange={(e) => setFood(e.target.value)}
                type="text"
                className="form-control w-100"
              />
            </div>
          </div>
          <div className="form-group mb-15 d-flex">
            <div className="w-30">
              <label>Speakers</label>
            </div>
            <div className="w-70">
              <input
                name="speakers"
                onChange={(e) => setSpeakers(e.target.value)}
                type="text"
                className="form-control w-100"
              />
            </div>
          </div>
          <div className="form-group mb-15 d-flex">
            <div className="w-30">
              <label>Date/Time</label>
            </div>
            <div className="w-70">
              <input
                name="dateTime"
                onChange={(e) => setDateTime(e.target.value)}
                type="datetime-local"
                className="form-control w-100"
              />
            </div>
          </div>
          <div className="form-group mb-25 d-flex">
            <div className="w-30">
              <label>Users</label>
            </div>
            <div className="w-70">
              <Multiselect
                options={allUsers}
                onSelect={updateSelectedUsers} // Function will trigger on select event
                onRemove={removeFromSelectedUsers} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options
              />
            </div>
          </div>
          <div className="form-group d-flex">
            <div className="w-100 center d-flex flex-end">
              <button disabled={loading} onClick={handleSubmit} className="btn w-25">
                Save
              </button>
            </div>
          </div>
        </div>
      </CmsLayout>
    </div>
  );
}
export default Cmspage;
