import React from "react";
import ReactDOM from "react-dom";

const App = () => (
  <div> Stuff </div>
);
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;
