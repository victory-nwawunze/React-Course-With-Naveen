/** @format */
import React, { Fragment } from "react";
import "./App.css";
import Counter from "./components/Counter";
import FormComponent from "./components/FormComponent";
import SayGood from "./components/SayGood";
import ShopingCart from "./components/ShopingCart";

let App = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark expand-sm">
        <a href="/" className="navbar-brand">
          React with Form Handling
        </a>
      </nav>
      {/* <Counter /> */}
      {/* <SayGood /> */}
      {/* <ShopingCart /> */}
      <FormComponent />
    </Fragment>
  );
};

export default App;
