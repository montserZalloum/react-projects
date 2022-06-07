import AdminLayout from "../../../layout/AdminLayout";

import Card from "../../../components/base/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useState } from "react";
import { server } from "../../../config";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import MultipleSelectChip from "../../../components/base/MultiSelect";
import InputLabel from '@mui/material/InputLabel';
function add() {
  const dispatch = useDispatch();
  const router = useRouter();

  // loading & alert functions
  const isLoading = (isLoad) => dispatch({ type: "LOADING", payload: isLoad });
  const alert = (message, status) =>
    dispatch({ type: "ALERT", payload: { message, status } });

  // define form inputs
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    isLoading(true);
    // try {
    //   const resp = await fetch(`${server}/taxonomy`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   if (!resp.ok) {
    //     alert("Something went wrong", false);
    //   } else {
    //     alert("Successfully", true);
    //     router.push("/taxonomy");
    //   }
    // } catch (error) {
    //   alert(error.message, false);
    // }
    isLoading(false);
  };

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <AdminLayout>
      <Card>
        <form onSubmit={handleSubmit}>
          <div className="d-flex gap-15">
            <div className="form-group w-50 mb-15">
              <TextField
                required
                label="Course Name"
                InputLabelProps={{ shrink: true }}
                className="w-100"
                name="courseName"
                onChange={handleChange}
                value={formData.name}
              />
            </div>
            <div className="form-group w-50 mb-15">
              <MultipleSelectChip />
            </div>
          </div>
          <div className="form-group w-100 mb-15">
            <Button type="submit" variant="contained">
              ADD TAXONOMY
            </Button>
          </div>
        </form>
      </Card>
    </AdminLayout>
  );
}

export default add;
