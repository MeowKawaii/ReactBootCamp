import React, { Component } from "react";
import ReactDOM from "react-dom";

function App() {
  return <h1>Hello React.js with my own webpack</h1>;
}

const selector = document.querySelector("#app");

ReactDOM.render(<App />, selector);
