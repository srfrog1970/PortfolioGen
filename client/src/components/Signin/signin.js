import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./signin.css";

function Signin({ formValidation }) {
  const [formData, setFormData] = useState({
    password: "",
    passwordError: "",
    loginID: "",
    loginError: "",
  });

  return (
    <div className="wrapper">
      {/* {console.log(formData)} */}
      <div className="form-wrapper">
        <h1>Sign In</h1>
        <form
          name="formButton"
          onSubmit={(event) => {
            formValidation(event, [{ formData, setFormData }]);
          }}
        >
          {/* Git hub */}
          <div className="loginID">
            <label htmlFor="loginID">Login ID</label>
            <input
              className={formData.loginError ? "error" : null}
              placeholder="Login ID"
              type="text"
              name="loginID"
              noValidate
              onChange={(event) => {
                formValidation(event, [{ formData, setFormData }]);
              }}
            />
            {formData.loginError ? (
              <span className="errorMessage">{formData.loginError}</span>
            ) : null}
          </div>
          {/* Git hub */}
          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              className={formData.passwordError ? "error" : null}
              placeholder="Password"
              type="password"
              name="password"
              noValidate
              onChange={(event) => {
                formValidation(event, [{ formData, setFormData }]);
              }}
            />
            {formData.passwordError ? (
              <span className="errorMessage">{formData.passwordError}</span>
            ) : null}
          </div>
          <div
            autocomplete="off"
            className={
              formData.passwordError || formData.loginError
                ? "signInWait"
                : "signIn"
            }
          >
            <button
              type="submit"
              disabled={formData.passwordError || formData.loginError}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;
