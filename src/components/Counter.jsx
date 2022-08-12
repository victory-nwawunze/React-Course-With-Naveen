/** @format */

import React from "react";
import { useState } from "react";

const Counter = () => {
  const [state, setState] = useState({
    count: 0,
  });
  const { count } = state;
  const Increement = () => {
    setState((state) => ({
      count: state.count + 1,
    }));
  };
  const Decreement = () => {
    setState((state) => ({
      count: state.count - 1 > 0 ? state.count - 1 : 1,
    }));
  };
  return (
    <React.Fragment>
      {/* <pre>{JSON.stringify(count)}</pre> */}
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header display-4">{count}</div>
              <div className="card-body">
                <div className="btn btn-warning btn-sm" onClick={Increement}>
                  increment
                </div>
                <div
                  className="btn btn-success btn-sm mx-3"
                  onClick={Decreement}
                >
                  Decrement
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Counter;
