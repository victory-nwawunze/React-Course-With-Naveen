/** @format */

import React, { useState } from "react";

const UpdateFormInputWithText = () => {
  const [state, setState] = useState({
    name: "Victory",
  });
  const { name } = state;
  const ChangeNameInput = (event) => {
    setState((state) => ({
      name: state.name,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <React.Fragment>
      <pre>{JSON.stringify(name)}</pre>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-5">
            <div className="card">
              <div className="card-header text-center h2">Enter name</div>
              <div className="card-body">
                <input
                  name="name"
                  value={name}
                  onChange={ChangeNameInput}
                  className="form-control mt-3"
                  placeholder="enter name"
                />
                <h3 className="text-center mt-4">{name}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UpdateFormInputWithText;
