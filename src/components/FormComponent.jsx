/** @format */

import React from "react";
import { useState } from "react";

const FormComponent = () => {
  const [state, setState] = useState({
    user: {
      username: "",
      email: "",
      password: "",
      designation: "",
      bio: "",
      terms: false,
    },
  });
  let { user } = state;
  const ChangeInput = (event) => {
    setState((state) => ({
      user: {
        ...state.user,
        [event.target.name]: event.target.value,
      },
    }));
  };
  const ChangeEmailInput = (event) => {
    setState((state) => ({
      user: {
        ...state.user,
        [event.target.name]: event.target.value,
      },
    }));
  };
  const ChangePasswordInput = (event) => {
    setState((state) => ({
      user: {
        ...state.user,
        [event.target.name]: event.target.value,
      },
    }));
  };
  const ChangeDesignationSelectInput = (event) => {
    setState((state) => ({
      user: {
        ...state.user,
        [event.target.name]: event.target.value,
      },
    }));
  };
  const ChangeBioInput = (event) => {
    setState((state) => ({
      user: {
        ...state.user,
        [event.target.name]: event.target.value,
      },
    }));
  };
  const ChangeTermsInput = (event) => {
    setState((state) => ({
      user: {
        ...state.user,
        [event.target.name]: event.target.checked,
      },
    }));
  };
  const SubmitMyData = (event) => {
    console.log(user);
  };
  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-header text-center h3 bg-success text-white">
                Register here
              </div>
              <div className="card-body mt-3">
                <form onSubmit={SubmitMyData}>
                  <input
                    value={user.username}
                    name="username"
                    onChange={ChangeInput}
                    type="name"
                    className="form-control mb-3"
                    placeholder="Enter name"
                  />
                  <input
                    value={user.email}
                    name="email"
                    onChange={ChangeEmailInput}
                    type="email"
                    className="form-control mb-3"
                    placeholder="Enter email"
                  />
                  <input
                    value={user.password}
                    name="password"
                    onChange={ChangePasswordInput}
                    type="password"
                    className="form-control mb-3"
                    placeholder="Enter password"
                  />
                  <select
                    value={user.designation}
                    name="designation"
                    onChange={ChangeDesignationSelectInput}
                    className="form-control mb-3"
                    type="password"
                  >
                    <option>Designation</option>
                    <option>Tech Lead</option>
                    <option>Senior Developer</option>
                    <option>Project Manager</option>
                    <option>Junior Developer</option>
                  </select>
                  <textarea
                    value={user.bio}
                    name="bio"
                    onChange={ChangeBioInput}
                    className="form-control mb-3"
                    placeholder="Bio"
                  />
                  <input
                    name="terms"
                    onChange={ChangeTermsInput}
                    type="checkbox"
                    className="form-check-input"
                  />{" "}
                  Accept terms
                  <br />
                  <input
                    type="button"
                    onClick={SubmitMyData}
                    className="btn btn-success btn-sm mt-3"
                    value="Register"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FormComponent;
