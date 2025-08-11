import React from 'react';

const IDETitleBar: React.FC = () => {
  return (
    <div className="ide-titlebar">
      <div className="ide-titlebar-buttons">
        <div className="ide-titlebar-button close"></div>
        <div className="ide-titlebar-button minimize"></div>
        <div className="ide-titlebar-button maximize"></div>
      </div>
      <div className="ide-filename">portfolio-website</div>
    </div>
  );
};

export default IDETitleBar;
