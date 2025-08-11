import React from 'react';

const IDEStatusBar: React.FC = () => {
  return (
    <div className="ide-statusbar">
      <div className="flex items-center gap-4">
        <span>UTF-8</span>
        <span>Python 3.9</span>
        <span>AWS SDK</span>
      </div>
      <div className="flex items-center gap-4">
        <span>🐍 Python</span>
        <span>☁️ AWS Connected</span>
      </div>
    </div>
  );
};

export default IDEStatusBar;
