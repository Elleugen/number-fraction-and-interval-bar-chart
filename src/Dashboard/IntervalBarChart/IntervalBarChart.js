import React, { useState, Fragment } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const IntervalBarChart = (props) => {
  const [myNumber, setMyNumber] = useState(null);
  const [stop, setStop] = useState(false);
  const [chartShow, setChartShow] = useState(false);
  const [chartLabel, setChartLabel] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [chartBackgroundColor, setChartBackgroundColor] = useState([]);
  const handleSubmit = (event) => {
    if (myNumber !== null) {
      event.preventDefault();
      setChartShow(true);
      setStop(true);
      console.log("myNumber:", myNumber);

      for (let i = 1; i <= myNumber; i++) {
        // setChartLabel([...chartLabel, i]);
        chartLabel.push(i);
        console.log("chartLabel:", chartLabel);
        let randValue = Math.floor(Math.random() * 100);
        chartData.push(randValue);
        if (randValue < 26) {
          chartBackgroundColor.push("green");
        } else if (randValue > 25 && randValue < 51) {
          chartBackgroundColor.push("yellow");
        } else if (randValue > 50 && randValue < 76) {
          chartBackgroundColor.push("red");
        } else if (randValue > 75 && randValue < 101) {
          chartBackgroundColor.push("blue");
        }
      }
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
    setChartShow(false);
    setMyNumber();
    setChartLabel([]);
    setChartData([]);
    setChartBackgroundColor([]);
    event.target.reset();
  };
  const state = {
    labels: chartLabel,
    datasets: [
      {
        label: "Interval Bar Chart",
        backgroundColor: chartBackgroundColor,
        // backgroundColor: ["red", "blue", "green", "blue", "red", "blue"],
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: chartData,
        // data: [65, 59, 80, 81, 56],
      },
    ],
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
        {chartShow == true ? (
          <div>
            <Bar
              data={state}
              options={{
                title: {
                  display: true,
                  text: "Average Rainfall per month",
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: "right",
                },
              }}
            />
          </div>
        ) : null}
      </div>
    </Fragment>
  );
};

export default IntervalBarChart;
