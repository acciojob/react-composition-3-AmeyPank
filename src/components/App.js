import React from 'react';
import Tooltip from './Tooltip';

import "../styles/App.css"
const App = () => {
  return (
    <div className="app">
      <Tooltip text="This is a tooltip">
        <h2 className="tooltip">This is a tooltip</h2>
      </Tooltip>

      <Tooltip text="This is another tooltip">
        <p className="tooltip">This is another tooltip</p>
      </Tooltip>
    </div>
  );
};

export default App;
