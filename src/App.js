/** @format */
import React, { Fragment } from "react";
import "./App.css";
import DigitalWatch from "./components/DigitalWatch";

let App = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark expand-sm">
        <a href="/" className="navbar-brand">
          React with Component Life-Cyle Methods
        </a>
      </nav>
      <DigitalWatch />
    </Fragment>
  );
};

export default App;
