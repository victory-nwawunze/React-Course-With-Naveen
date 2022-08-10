/** @format */
import React from "react";
import { useState } from "react";
import Counter from "./Counter";

const WishMessage = () => {
  let [state, setState] = useState({
    Message: "Hello World",
  });
  let [Count, JustCount] = useState({
    Counter: 0,
  });
  const sayGoodMorning = () => {
    setState(() => ({
      Message: "Good Morning",
    }));
  };
  const sayGoodAfternoon = (value) => {
    setState(() => ({
      Message: value,
    }));
  };
  const IncreeMentCount = () => {
    JustCount((Count) => ({
      Counter: Count.Counter + 1,
    }));
  };
  const DecreeMentCount = () => {
    JustCount((Count) => ({
      Counter: Count.Counter - 1,
    }));
  };
  return (
    <React.Fragment>
      <pre>{JSON.stringify(Count.Counter)}</pre>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h3 className="display-4">{state.Message}</h3>
              </div>
              <div className="card-body">
                <button onClick={sayGoodMorning} className="btn btn-success">
                  Good Morning
                </button>
                <button
                  onClick={() => sayGoodAfternoon("Good Afternoon")}
                  className="btn btn-warning mx-3"
                >
                  Good Afternoon
                </button>
                <button
                  onClick={() => setState(() => ({ Message: "Good Evening" }))}
                  className="btn btn-danger"
                >
                  Good Evening
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h3 className="display-3">{Count.Counter}</h3>
                </div>
                <div className="card-body">
                  <button
                    onClick={IncreeMentCount}
                    className="btn btn-warning btn-sm"
                  >
                    Increement
                  </button>
                  <button
                    onClick={DecreeMentCount}
                    className="btn btn-danger btn-sm mx-2"
                  >
                    Decreement
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WishMessage;
