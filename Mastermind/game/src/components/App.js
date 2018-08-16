import React from "react";
import ReactDOM from "react-dom";
import GameContainer from "./GameContainer";

const App = () => (
  <GameContainer/>
);
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;
