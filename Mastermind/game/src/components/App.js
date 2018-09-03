import React from "react";
import ReactDOM from "react-dom";
import GameContainer from "./GameContainer";
import ScoreBoard from "./ScoreBoard";

const App = () => (
  <GameContainer endpoint="api/scores/"/>
);

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;
