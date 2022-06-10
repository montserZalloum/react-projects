import AdminLayout from "../../../../layout/AdminLayout";

import Card from "../../../../components/base/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useEffect, useState } from "react";
import { server } from "../../../../config";
import { useRouter } from "next/router";

import InputLabel from "@mui/material/InputLabel";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Loader from "../../../../components/base/Loader";
import Snackbar from "../../../../components/base/Snackbar";

import { MenuItem, Select } from "@mui/material";
import MobileNumber from "../../../../components/base/MobileNumber";
import users from "../../../../config/users";

function add({ userType }) {
  const router = useRouter();
  let dropDownOptions = [];
  let formObj = {
    firstName: "",
    lastName: "",
    mobileNumber: "",
    gender: "male",
    email: "",
    password: "",
    type: userType,
  };
  if (userType == "specialist" || userType == "others") {
    formObj.specialization = users[userType].specialization[0];
    dropDownOptions = users[userType].specialization;
  } else {
    formObj.relativeRelation = users[userType].relativeRelation[0];
    dropDownOptions = users[userType].relativeRelation;
  }
  
  const [isMobileValid, setIsMobileValid] = useState(false);
  const [isMobileTouched, setIsMobileTouched] = useState(false);
  // loading & alert functions
  const isLoading = (isLoad) => setLoading(isLoad);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    isSuccess: false,
    message: "",
  });

  // define form inputs
  const [formData, setFormData] = useState(formObj);

  const alertFn = (isSuccess, message) => {
    setAlert({
      isSuccess,
      message,
    });
  };
  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isMobileValid) {
      setIsMobileTouched(true);
      return alertFn(false, "Please enter a valid mobile number");
    }
    isLoading(true);
    try {
      const resp = await fetch(`${server}/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!resp.ok) {
        alertFn(false, "Something went wrong");
      } else {
        alertFn(true, "Added successfully");
        router.push(`/admin/users/${userType}`);
      }
    } catch (error) {
      alertFn(false, "Something went wrong");
    }
    isLoading(false);
  };

  function handleChange(e, val) {
    if (val == "select") {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    } else if (val && e.target.type != "radio") {
      setFormData({
        ...formData,
        [e]: val,
      });
    } else if (e.target.type === "file") {
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  }

  return (
    <AdminLayout>
      <Card>
        <Snackbar setAlert={setAlert} alert={alert} />
        <form onSubmit={handleSubmit}>
          <div className="d-flex gap-15">
            <div className="form-group w-50 mb-15">
              <InputLabel>First Name</InputLabel>
              <TextField
                required
                InputLabelProps={{ shrink: true }}
                className="w-100"
                name="firstName"
                onChange={handleChange}
                value={formData.firstName}
              />
            </div>
            <div className="form-group w-50 mb-15">
              <InputLabel>Last Name</InputLabel>
              <TextField
                required
                InputLabelProps={{ shrink: true }}
                className="w-100"
                name="lastName"
                onChange={handleChange}
                value={formData.lastName}
              />
            </div>
          </div>

          <div className="d-flex gap-15">
            <div
              className={`form-group w-50 mb-15 ${
                !isMobileValid && isMobileTouched ? "not-valid" : ""
              }`}
            >
              <MobileNumber
                setIsTouched={setIsMobileTouched}
                setIsValid={setIsMobileValid}
                data={formData.mobileNumber}
                setData={setFormData}
              />
            </div>
            <div className="form-group w-50 mb-15">
              <InputLabel>{userType == "parents" ? "Relative Relation" : "Specialization"}</InputLabel>
              <Select
                value={userType == "parents" ? formData.relativeRelation : formData["specialization"]}
                onChange={(e) => handleChange(e, "select")}
                name={userType == "parents" ? 'relativeRelation' : "specialization"}
                fullWidth
                required
              >
                {dropDownOptions.map((item) => (
                <MenuItem key={item} value={item}>{item}</MenuItem>
                ))}
              </Select>
            </div>
          </div>

          <div className="d-flex gap-15">
            <div className="form-group w-50 mb-15">
              <InputLabel>password</InputLabel>
              <TextField
                required
                InputLabelProps={{ shrink: true }}
                className="w-100"
                name="password"
                type="password"
                placeholder="password"
                onChange={handleChange}
                value={formData.password}
              />
            </div>
            <div className="form-group w-50 mb-15">
              <InputLabel>Email</InputLabel>
              <TextField
                required
                InputLabelProps={{ shrink: true }}
                className="w-100"
                name="email"
                onChange={handleChange}
                value={formData.email}
                type="email"
              />
            </div>
          </div>
          <div className="d-flex gap-15">
            <div className="form-group w-50 mb-15">
              <FormLabel id="demo-row-radio-buttons-group-label">
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
              </RadioGroup>
            </div>
          </div>

          <div className="form-group w-100 mb-15">
            <Button type="submit" variant="contained">
              Create
            </Button>
          </div>
        </form>
        <Loader isLoading={loading} />
      </Card>
    </AdminLayout>
  );
}

export default add;

export const getServerSideProps = async ({ query }) => {
  return {
    props: {
      userType: query.type,
    },
  };
};
