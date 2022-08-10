/** @format */
import React, { Fragment } from "react";
import "./App.css";
import Counter from "./components/Counter";
import ProductItem from "./components/ProductItem";
import WishMessage from "./components/WishMessage";

let App = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark expand-sm">
        <a href="/" className="navbar-brand">
          React with Event Handling
        </a>
      </nav>
      {/* <Counter /> */}
      {/* <WishMessage /> */}
      <ProductItem />
    </Fragment>
  );
};

export default App;
