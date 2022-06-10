import "react-phone-number-input/style.css";
import PhoneInput, {  isValidPhoneNumber } from "react-phone-number-input";
import axios from "axios";
import { useEffect, useState } from "react";
import { InputLabel } from "@mui/material";

export default function MobileNumber(props) {
  const [country, setCountry] = useState("");
  useEffect(() => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        setCountry(data.country);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (phone) => {
    props.setData((prev)=>{
        return {...prev, mobileNumber: phone}   
    });
    props.setIsTouched(true);
    props.setIsValid(isValidPhoneNumber(phone));
  }

  return (
    <div>
        <InputLabel>Mobile Number</InputLabel>
      {country && (
        <PhoneInput
          international
          placeholder="Enter phone number"
          value={props.data}
          onChange={(e) => (e !== undefined ? handleChange(e, "phone") : null)}
          defaultCountry={country}
          countryCallingCodeEditable={false}
          initialValueFormat="national"
          required
          error={props.data ? (isValidPhoneNumber(props.data) ? undefined : 'Invalid phone number') : 'Phone number required'}
        />
      )}
    </div>
  );
}
