import React, { useState, Fragment } from "react";

const NumberFraction = (props) => {
  const numberValidator = (event) => {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);
    if (!new RegExp("[1-9]").test(keyValue)) event.preventDefault();
    return;
  };
  const [mode, setMode] = useState(true);
  const [myNumber, setMyNumber] = useState(null);
  let [currModNumber, setCurrModNumber] = useState(0);
  let [multiplier, setMultiplier] = useState(1);
  let [currLenght, setCurrLenght] = useState(0);
  //   const [numberFractionData, setNumberFractionData] = useState[{ bilangan: 0 }];
  const data = [{ bilangan: null }];
  let [numberFractionData, setNumberFractionData] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (myNumber !== null) {
      // setCurrModNumber((currModNumber = myNumber % 10));
      console.log("myNumber::", myNumber);
      setCurrLenght(myNumber.length);

      // console.log("Lenght::", currLenght);
      // LATEST
      // for (let i = 1; i < myNumber.length; i++) {
      //   let currNumber = myNumber.slice(0, myNumber.length - i);
      //   console.log("currNumber::", currNumber);
      //   let modder = 100;
      //   for (let j = 1; j <= i; j++) {
      //     setCurrModNumber((currModNumber = (currNumber * multiplier) % modder));
      //     modder = modder * 10;
      //     multiplier = multiplier * 10;
      //   }
      //   console.log("currModNumber::", currModNumber);
      // }
      // LATEST
      let currNumber = myNumber;
      let ctr = 1;
      for (let i = 1; i <= myNumber.length; i++) {
        let hasilMod = currNumber % 10;
        currNumber = myNumber.slice(0, myNumber.length - i);
        let pecahanBilangan = hasilMod * ctr;
        console.log("currNumber::", currNumber);
        console.log("hasilMod::", pecahanBilangan);
        // numberFractionData.pop();
        numberFractionData.push(pecahanBilangan);
        // setNumberFractionData([...numberFractionData, pecahanBilangan]);
        console.log("numberFractionData::", numberFractionData);
        ctr = ctr * 10;
      }

      setMyNumber(null);
      event.target.reset();
    } else if (myNumber == null) {
      return alert("Input can't be empty. Try again!");
    }
  };
  //   console.log("numberFractionData::", numberFractionData);
  console.log("numberFractionData global::", numberFractionData);
  return (
    <Fragment>
      <h2>Number Fraction</h2>
      <div>
        <div>
          {/* <input
          type="text"
          name="myNumber"
          // min="1"
          value={myNumber}
          onChangeText={(text) => {
            setMyNumber(text);
            console.log(myNumber);
          }}
          // onChangeText={myNumber}
          onKeyPress={numberValidator}
        />
        <button className="button add">Generate</button> */}
          {/* <form onSubmit={this.handleSubmit}> */}
          <form
            onSubmit={handleSubmit}
            // onSubmit={() => {
            //   handleSubmit();
            // }}
          >
            <label>
              <input
                type="text"
                name="name"
                onKeyPress={numberValidator}
                onChange={(e) => setMyNumber(e.target.value)}
              />
            </label>
            <input type="submit" value="Generate" />
          </form>
        </div>
        {myNumber == null ? (
          <div>
            <label className="labelCaption">
              *Input must be number between 1-9
            </label>
          </div>
        ) : null}
      </div>
      {/* <label className="labelCaption">{myNumber}</label> */}
      {numberFractionData?.reverse().map((item, index) => {
        console.log("item", item);
        return (
          <div key={index}>
            <label className="labelCaption">{item}</label>
          </div>
        );
      })}
    </Fragment>
  );
};

export default NumberFraction;
