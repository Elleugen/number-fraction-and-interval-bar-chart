import React, { useState, Fragment } from "react";

const IntervalBarChart = (props) => {
  const [myNumber, setMyNumber] = useState(null);
  const [stop, setStop] = useState(false);
  const handleSubmit = (event) => {
    if (myNumber !== null) {
      event.preventDefault();
      setStop(true);
      console.log("myNumber:", myNumber);

      setMyNumber(null);
      event.target.reset();
    } else if (myNumber == null) {
      return alert("Input can't be empty. Try again!");
    }
  };
  const handleSubmitStop = (event) => {
    event.preventDefault();
    setStop(false);
    // console.log("myNumber:", myNumber);

    // setMyNumber();
    // event.target.reset();
  };
  return (
    // <div className="flex-large">
    // </div>
    <Fragment>
      <h2>Interval Bar Chart</h2>
      <div>
        <div>
          {stop === false ? (
            <form onSubmit={handleSubmit}>
              <label>
                <input
                  type="number"
                  name="name"
                  min={1}
                  //   onKeyPress={numberValidator}
                  onChange={(e) => setMyNumber(e.target.value)}
                />
              </label>
              <input type="submit" value="Generate" />
            </form>
          ) : (
            <form onSubmit={handleSubmitStop}>
              <label>
                <input
                  type="number"
                  name="name"
                  min={1}
                  //   onKeyPress={numberValidator}
                  onChange={(e) => setMyNumber(e.target.value)}
                />
              </label>
              <input type="submit" value="Stop" />
            </form>
          )}
        </div>
        {myNumber == null ? (
          <div>
            <label className="labelCaption">
              *Input must be number between 1-9
            </label>
          </div>
        ) : null}
      </div>
    </Fragment>
  );
};

export default IntervalBarChart;
