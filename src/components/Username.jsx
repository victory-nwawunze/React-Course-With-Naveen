/** @format */

import React from "react";
import { useState } from "react";

const Username = () => {
  let [state, setState] = useState({
    username: "Victory",
  });

  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <p className="h4">Username</p>
              </div>
              <div className="card-body bg-light">
                <div className="mb-3">
                  <input
                    value={state.username}
                    type="text"
                    className="form-control"
                  />
                </div>
                <h3>{state.username}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Username;
