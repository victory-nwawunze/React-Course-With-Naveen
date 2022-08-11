/** @format */
import React from "react";
import { useState } from "react";

const Username = () => {
  const [state, setState] = useState({
    username: "Victory",
  });
  const updateInput = (event) => {
    setState((state) => ({
      username: event.target.value,
    }));
  };
  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <h3>Username</h3>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <input
                    onChange={updateInput}
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
