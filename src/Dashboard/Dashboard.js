import React, { useState, Fragment } from "react";
import NumberFraction from "./NumberFraction/NumberFraction";
import IntervalBarChart from "./IntervalBarChart/IntervalBarChart";

const Dashboard = (props) => {
  const [mode, setMode] = useState(true);

  return (
    <div className="container">
      <div>
        <h1>App Dashboard</h1>
        <div className="flex-row">
          <div className="flex-large">
            <NumberFraction></NumberFraction>
          </div>
          <div className="flex-large">
            {mode ? (
              <IntervalBarChart></IntervalBarChart>
            ) : (
              <Fragment>
                <h2>Interval Bar Chart 2</h2>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
