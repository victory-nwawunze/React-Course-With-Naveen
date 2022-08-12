/** @format */

import React from "react";
import { useState } from "react";

const SayGood = () => {
  const [state, setState] = useState({
    sayJustOne: "Hello World",
  });
  let { sayJustOne } = state;
  const SayGoodMorning = () => {
    setState({
      sayJustOne: "Good Morning",
    });
  };
  const SayGoodAfternoon = (value) => {
    setState({
      sayJustOne: value,
    });
  };
  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header display-3">{sayJustOne}</div>
              <div className="card-body">
                <div
                  className="btn btn-sm btn-warning"
                  onClick={SayGoodMorning}
                >
                  Good Morning
                </div>
                <div
                  onClick={() => SayGoodAfternoon("Good Afternoon")}
                  className="btn btn-sm btn-success mx-1"
                >
                  Good Afternoon
                </div>
                <div
                  onClick={() =>
                    setState(() => ({ sayJustOne: "Good Evening" }))
                  }
                  className="btn btn-sm btn-danger "
                >
                  Good Evening
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SayGood;
