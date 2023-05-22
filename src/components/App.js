import React from 'react';
import Tooltip from './Tooltip';
import  "../styles/App.css"


const App = () => {
  return (
    <div className='container'>
      <Tooltip text="This is a tooltip">
        <h2 className="tooltip">This is a tooltip</h2>
      </Tooltip>
      <div className='another'>
           <Tooltip text="This is another tooltip">
        <p className="tooltip">This is another tooltip</p>
      </Tooltip>
      </div>
   
    </div>
  );
};

export default App;
