import React from 'react';
import Tooltip from './Tooltip';

const App = () => {
  return (
    <div className="app">
      <Tooltip text="This is a tooltip">
        <button className="tooltip">Button 1</button>
      </Tooltip>

      <Tooltip text="This is another tooltip">
        <span className="tooltip">Span 1</span>
      </Tooltip>
    </div>
  );
};

export default App;
