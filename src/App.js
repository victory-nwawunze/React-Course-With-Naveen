/** @format */
import React, { Fragment } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Username from "./components/Username";

let App = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark expand-sm">
        <a href="/" className="navbar-brand">
          React with Form Handling
        </a>
      </nav>
      {/* <Username /> */}
      {/* <LoginForm /> */}
      <RegisterForm />
    </Fragment>
  );
};

export default App;
