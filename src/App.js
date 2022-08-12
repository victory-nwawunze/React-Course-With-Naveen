/** @format */
import React, { Fragment } from "react";
import "./App.css";
import AuthUser from "./components/AuthUser";

import ProductCart from "./components/ProductCart";

let App = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark expand-sm">
        <a href="/" className="navbar-brand">
          React with Condition and List Rendering
        </a>
      </nav>
      {/* <AuthUser /> */}
      <ProductCart />
    </Fragment>
  );
};

export default App;
