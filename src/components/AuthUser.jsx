/** @format */

import React, { useState } from "react";

const AuthUser = () => {
  const [state, setState] = useState({
    isLoggedIn: false,
  });
  const IsLoggedInBtn = () => {
    setState((state) => ({
      isLoggedIn: true,
    }));
  };
  const IsLoggedOutBtn = () => {
    setState((state) => ({
      isLoggedIn: false,
    }));
  };
  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-4">
            <div className="card  shadow-lg bg-white">
              <div className="card-body">
                {state.isLoggedIn ? (
                  <p className="h3">Welcome Mr Nwawunze</p>
                ) : (
                  <p className="h3">Welcome Guest</p>
                )}

                {state.isLoggedIn ? (
                  <button
                    onClick={IsLoggedOutBtn}
                    className="btn btn-danger btn-sm mx-2"
                  >
                    LogOut
                  </button>
                ) : (
                  <button
                    onClick={IsLoggedInBtn}
                    className="btn btn-primary btn-sm"
                  >
                    Login
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AuthUser;
