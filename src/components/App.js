import React from 'react';
import Tooltip from './Tooltip';
import  "../styles/App.css"


const App = () => {
  return (
    <div>
      <Tooltip text="This is a tooltip">
        <h1 className="tooltip">Hover over me</h1>
      </Tooltip>
      <Tooltip text="This is another tooltip">
        <p className="tooltip">Hover me to see another tooltip</p>
      </Tooltip>
    </div>
  );
};

export default App;
