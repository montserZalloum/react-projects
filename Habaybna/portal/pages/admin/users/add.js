import AdminLayout from "../../../layout/AdminLayout";

import Card from "../../../components/base/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useState } from "react";
import { server } from "../../../config";
import { useRouter } from "next/router";
import MultipleSelectChip from "../../../components/base/MultiSelect";
import AutoComplete from "../../../components/base/AutoComplete";
import InputLabel from "@mui/material/InputLabel";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Loader from "../../../components/base/Loader";
import Snackbar from "../../../components/base/Snackbar";
import { useEffect } from "react";
import axios from "axios";

function add() {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [coverImage, setCoverImage] = useState(null);
  // loading & alert functions
  const isLoading = (isLoad) => setLoading(isLoad);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    isSuccess: false,
    message: "",
  });
  // define form inputs
  const [formData, setFormData] = useState({
    courseTitle: "",
    courseDescription: "",
    categories: [],
    coverImage: "",
    isPublished: true,
    isFree: false,
    discount: 0,
    price: 0,
  });

  const alertFn = (isSuccess, message) => {
    setAlert({
      isSuccess,
      message,
    });
  };
  // get categories from API
  useEffect(() => {
    async function getCategories() {
      const res = await fetch(`${server}/category`);
      const data = await res.json();
      setCategories(data);
    }
    getCategories();
  }, []);
  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData.courseTitle);
    isLoading(true);
    try {
      // const resp = await fetch(`${server}/course`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(formData),
      // });

      let form = new FormData();
      form.append("courseTitle", formData.courseTitle);
      form.append("coverImage", formData.coverImage);
      form.append("isPublished", formData.isPublished);
      form.append("isFree", formData.isFree);
      form.append("price", formData.price);
      form.append("discount", formData.discount);
      axios
        .post(`${server}/course`, form)
        .then((response) => {
          if (response.status == 200) {
            // this.$Message.success("Course Updated success");
            this.success();
            this.loading = false;
          }
        })
        .catch((error) => {
          return 404;
        });

      if (!resp.ok) {
        alertFn(false, "Something went wrong");
      } else {
        alertFn(true, "Course added successfully");
        // router.push("/courses");
      }
    } catch (error) {
      alertFn(false, "Something went wrong");
    }
    isLoading(false);
  };

  function handleChange(e, val) {
    if (val && e.target.type != "radio") {
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
    console.log(formData);
    // setCoverImage(e.target.files[0]);
  }
  return (
    <AdminLayout>
      <Card>
        <Snackbar setAlert={setAlert} alert={alert} />
        <form onSubmit={handleSubmit}>
          <div className="d-flex gap-15">
            <div className="form-group w-50  mb-15">
              <InputLabel>Course Title</InputLabel>
              <TextField
                // required
                InputLabelProps={{ shrink: true }}
                className="w-100"
                name="courseTitle"
                onChange={handleChange}
                value={formData.courseTitle}
              />
            </div>
            <div className="form-group w-50 mb-15">
              <MultipleSelectChip
                items={categories}
                keyName={"categories"}
                setItems={setFormData}
                onChange={handleChange}
                label="Course Category"
              />
            </div>
          </div>
          <div className="form-group w-100 mb-15">
            <TextField
              // required
              multiline
              rows={4}
              label="Course Description"
              InputLabelProps={{ shrink: true }}
              className="w-100"
              name="courseDescription"
              onChange={handleChange}
              value={formData.name}
            />
          </div>
          <div className="form-group w-100 mb-15">
            <TextField
              // required
              multiline
              rows={4}
              label="What Should We Learn"
              InputLabelProps={{ shrink: true }}
              className="w-100"
              name="whatShouldLearn"
              onChange={handleChange}
              value={formData.name}
            />
          </div>

          <div className="d-flex gap-15">
            <div className="form-group w-50 mb-15">
              <InputLabel id="demo-multiple-chip-label">
                Course Cover Image
              </InputLabel>
              <input onChange={handleChange} type="file" name="coverImage" />
            </div>
            <div className="form-group w-50 mb-15">
              <TextField
                // required
                label="Intro Video Link"
                InputLabelProps={{ shrink: true }}
                className="w-100"
                name="introVideoLink"
                onChange={handleChange}
                value={formData.name}
              />
            </div>
          </div>
          <div className="d-flex gap-15">
            <div className="form-group w-50 mb-15">
              <FormLabel id="demo-row-radio-buttons-group-label">
                Course Status
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="isPublished"
                value={formData.isPublished}
                onChange={handleChange}
              >
                <FormControlLabel
                  value={true}
                  control={<Radio />}
                  label="Active"
                />
                <FormControlLabel
                  value={false}
                  control={<Radio />}
                  label="Inactive"
                />
              </RadioGroup>
            </div>
            <div className="form-group w-50 mb-15">
              <FormLabel id="demo-row-radio-buttons-group-label">
                Course Type
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="isFree"
                value={formData.isFree}
                onChange={handleChange}
              >
                <FormControlLabel
                  value={true}
                  control={<Radio />}
                  label="Free"
                />
                <FormControlLabel
                  value={false}
                  control={<Radio />}
                  label="Paid"
                />
              </RadioGroup>
            </div>
          </div>
          <div className="d-flex gap-15">
            <div className="form-group w-50 mb-15 d-flex flex-column">
              <FormLabel id="demo-row-radio-buttons-group-label">
                Course Price
              </FormLabel>
              <input
                onChange={handleChange}
                value={formData.price}
                className="mui-input"
                type="number"
                name="price"
                min="0"
              />
            </div>
            <div className="form-group w-50 mb-15 d-flex flex-column">
              <FormLabel id="demo-row-radio-buttons-group-label">
                Discount Percentage
              </FormLabel>
              <input
                onChange={handleChange}
                value={formData.discount}
                className="mui-input"
                type="number"
                name="discount"
                min="0"
              />
            </div>
          </div>
          <div className="d-flex gap-15">
            <div className="form-group relative w-100 mb-15 d-flex flex-column">
              <FormLabel>Teachers</FormLabel>
              <AutoComplete />
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
