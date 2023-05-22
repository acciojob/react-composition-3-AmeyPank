import React, { useState } from 'react';

const Tooltip = ({ text, text2 children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="tooltip">
      <span
        className="tooltip-text"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
        {showTooltip && <span className="tooltiptext">{text}</span>}
      </span>
    </div>
  );
};

export default Tooltip;
