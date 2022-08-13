/** @format */

import React from "react";
import { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  let [state, setState] = useState({
    channel: "UI Brains Technology",
  });
  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-8">
            <div className="card shadow-lg">
              <div className="card-body  bg-success text-white">
                <p className="h4">Parent Component</p>

                <ChildComponent channel={state.channel} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ParentComponent;
