/** @format */
import React, { Fragment } from "react";
import "./App.css";
import UserList from "./components/UserList";

let App = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-dark bg-dark expand-sm">
        <a href="/" className="navbar-brand">
          React with Server Connection Life-Cyle Methods
        </a>
      </nav>
      <UserList />
    </Fragment>
  );
};

export default App;
