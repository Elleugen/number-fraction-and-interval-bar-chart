// import logo from "./logo.svg";
import "./App.css";
import React, { useState, Fragment } from "react";

function App() {
  const [mode, setMode] = useState(false);
  return (
    <div className="container">
      <div>
        <h1>App Dashboard</h1>
        <div className="flex-row">
          <div className="flex-large">
            <h2>Number Fraction</h2>
          </div>
          <div className="flex-large">
            {mode ? (
              <Fragment>
                <h2>Interval Bar Chart</h2>
              </Fragment>
            ) : (
              <Fragment>
                <h2>Interval Bar Chart</h2>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
