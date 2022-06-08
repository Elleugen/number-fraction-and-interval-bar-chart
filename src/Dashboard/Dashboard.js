import React, { useState, Fragment } from "react";

const Dashboard = (props) => {
  const numberValidator = (event) => {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);
    if (!new RegExp("[1-9]").test(keyValue)) event.preventDefault();
    return;
  };
  const [mode, setMode] = useState(false);
  const [myNumber, setMyNumber] = useState();

  return (
    <div className="container">
      <div>
        <h1>App Dashboard</h1>
        <div className="flex-row">
          <div className="flex-large">
            <h2>Number Fraction</h2>
            <div>
              <div>
                <form>
                  <label>
                    <input
                      type="text"
                      name="name"
                      onKeyPress={numberValidator}
                    />
                  </label>
                  <input type="submit" value="Generate" />
                </form>
              </div>
              <div>
                <label className="labelCaption">
                  *Input must be number between 1-9
                </label>
              </div>
            </div>
            <label className="labelCaption">{myNumber}</label>
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
};

export default Dashboard;
