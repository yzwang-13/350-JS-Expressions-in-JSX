import React from "react";
import ReactDOM from "react-dom";

const fName = "Yingzheng";
const lName = "Wang";
ReactDOM.render(
  <div>
    <h1>Hello {`${fName} ${lName}`}!</h1>
    <p>Today is {Math.floor(Math.random()*10)}</p>
  </div>, 
  document.getElementById("root"));
