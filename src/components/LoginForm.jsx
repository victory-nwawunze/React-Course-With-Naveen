/** @format */
import React from "react";
import { useState } from "react";

function LoginForm() {
  let [state, setState] = useState({
    user: {
      username: "",
      password: "",
    },
  });
  let { user } = state;
  let changeUserInput = (event) => {
    setState((state) => ({
      user: {
        ...state.user,
        username: event.target.value,
      },
    }));
  };
  let changePasswordInput = (event) => {
    setState((state) => ({
      user: {
        ...state.user,
        password: event.target.value,
      },
    }));
  };
  const LoginBTN = () => {
    console.log(user);
  };
  return (
    <React.Fragment>
      <pre>{JSON.stringify(user)}</pre>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-header bg-success text-white">
                <p className="h3">Login here</p>
              </div>
              <div className="card-body bg-white">
                <form onSubmit={LoginBTN}>
                  <div className="mb-3">
                    <input
                      value={user.username}
                      onChange={changeUserInput}
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      value={user.password}
                      onChange={changePasswordInput}
                      type="password"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      onClick={LoginBTN}
                      type="button"
                      value="submit"
                      className="btn btn-success btn-sm"
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
}

export default LoginForm;
