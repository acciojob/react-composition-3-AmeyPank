
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";
const App = () => {
  return (
    <div>
    <Tooltip text="This is a tooltip">
      <span>Hover over me!</span>
      <div>
      <span>Another Tooltip!</span>
      </div>
      
    </Tooltip>
  </div>
);
}

export default App
