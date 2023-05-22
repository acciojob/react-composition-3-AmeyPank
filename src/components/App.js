import React from 'react';
import Tooltip from './Tooltip';

const App = () => {
  return (
    <div className="app">
      <Tooltip text="This is a tooltip">
        <h2>Hover ove me</h2>
      </Tooltip>

      <Tooltip text="This is another tooltip">
        <p><span className="tooltip">Hover over me to see another tooltip</span></p>
      </Tooltip>
    </div>
  );
};

export default App;
