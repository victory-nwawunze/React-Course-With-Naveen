/** @format */
import React from "react";
import { useState } from "react";

const RegisterForm = () => {
  let [state, setState] = useState({
    user: {
      username: "",
      email: "",
      password: "",
      designation: "",
      bio: "",
      terms: "",
    },
  });
  const { user } = state;
  const UpdateUsernameInput = (event) => {
    setState((state) => ({
      user: {
        ...state.user,
        [event.target.name]: event.target.value,
      },
    }));
  };
  const UpdateCheckedInput = (event) => {
    setState((state) => ({
      user: {
        ...state.user,
        [event.target.name]: event.target.checked,
      },
    }));
  };
  const SubmitData = (event) => {
    console.log(user);
  };
  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-header bg-warning">
                <p className="h4">Register here</p>
              </div>
              <div className="card-body bg-light">
                <form onSubmit={SubmitData}>
                  <div className="mb-3">
                    <input
                      name="username"
                      value={user.username}
                      onChange={UpdateUsernameInput}
                      type="text"
                      className="form-control"
                      placeholder="Username"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      name="email"
                      value={user.email}
                      onChange={UpdateUsernameInput}
                      type="email"
                      className="form-control"
                      placeholder="email"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      name="password"
                      value={user.password}
                      onChange={UpdateUsernameInput}
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div className="mb-3">
                    <select
                      name="designation"
                      value={user.designation}
                      onChange={UpdateUsernameInput}
                      type="Text"
                      className="form-control"
                    >
                      <option>Select Designation</option>
                      <option>Senior Developer</option>
                      <option>Team Lead</option>
                      <option>Project Manager</option>
                      <option>Junior Developer</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <textarea
                      name="bio"
                      value={user.bio}
                      onChange={UpdateUsernameInput}
                      type="text"
                      className="form-control"
                      placeholder="bio"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      name="terms"
                      onChange={UpdateCheckedInput}
                      type="checkbox"
                      className="form-check-input"
                    />{" "}
                    Accept Terms
                  </div>
                  <div className="mb-3">
                    <input
                      onClick={SubmitData}
                      type="button"
                      value="Register"
                      className="btn btn-success"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RegisterForm;
