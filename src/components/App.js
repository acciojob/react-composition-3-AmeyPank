import React from 'react';
import Tooltip from './Tooltip';
import "../styles/App.css"


const App = () => {
  return (
    <div>
      <div>

      <Tooltip text="This is a tooltip">
        <h2>
          <div className="tooltip">This is a tooltip
          </div>
        </h2>
      </Tooltip>
      </div>
      <div>
      <Tooltip text="This is another tooltip">
        <p>
          <div className="tooltip">
            This is another tooltip
          </div>
        </p>
      </Tooltip>
      </div>
      
    </div>
  );
};

export default App;
