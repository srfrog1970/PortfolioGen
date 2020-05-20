import React, { useContext, useState } from "react";
import Signin from "../../components/Signin/signin";
import "./Signin.css";
import API from "../../utils/API";

const formValidation = (event, [{ formData, setFormData }]) => {
  event.preventDefault();
  const { name, value } = event.target;

  switch (name) {
    case "password":
      if (value.length < 6) {
        setFormData({
          ...formData,
          passwordError: "minimum 6 characaters required",
          password: "",
        });
      } else {
        setFormData({
          ...formData,
          passwordError: "",
          password: value,
        });
      }
      break;
    case "loginID":
      if (value.length < 6) {
        setFormData({
          ...formData,
          loginError: "minimum 6 characaters required",
          loginID: "",
        });
      } else {
        setFormData({
          ...formData,
          loginError: "",
          loginID: value,
        });
      }
      break;
    default:
      break;
  }
};
function SignIn() {
  return (
    <div>
      <Signin formValidation={formValidation}></Signin>
    </div>
  );
}

export default SignIn;
