import React, { useContext, useState } from "react";
import Signin from "../../components/Signin/signin";
import "./Signin.css";
import API from "../../utils/API";

const formValidation = (event, [{ formData, setFormData }]) => {
  const { name, value } = event.target;
  switch (name) {
    case "password":
      event.preventDefault();
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
      event.preventDefault();
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
    case "formButton":
      if (formData) {
        API.getSignIn(formData);
      }
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
