/** @format */

import React from "react";
import { useState } from "react";

let Counter = () => {
  let [state, setState] = useState({
    count: 0,
  });

  let Increement = () => {
    setState((state) => ({
      count: state.count + 1,
    }));
  };
  let Decreement = () => {
    setState((state) => ({
      count: state.count - 1,
    }));
  };
  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <h3>Counter</h3>
              </div>
              <div className="card-body">
                <h2 className="display-3">{state.count}</h2>
                <button
                  onClick={Increement}
                  className="btn btn-success text-white btn-sm"
                >
                  Increment
                </button>
                <button
                  onClick={Decreement}
                  className="btn btn-danger text-white btn-sm mx-1"
                >
                  Decrement
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Counter;
