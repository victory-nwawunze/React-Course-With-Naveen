/** @format */
import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "../src/modules/layout/components/Navbar";
import Home from "../src/modules/layout/components/Home";
import Employees from "../src/modules/employees/components/EmployeeLists";
import About from "../src/modules/layout/components/About";
import UserLogin from "../src/modules/users/components/UserLogin";
import UserRegister from "../src/modules/users/components/UserRegister";
let App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact={true} path={"/"} component={Home} />
          <Route exact={true} path={"/Employees/list"} component={Employees} />
          <Route exact={true} path={"/About"} component={About} />
          <Route exact={true} path={"/UserLogin/list"} component={UserLogin} />
          <Route
            exact={true}
            path={"/UserRegister/register"}
            component={UserRegister}
          />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
