import React from 'react';

const IDEStatusBar: React.FC = () => {
  return (
    <div className="ide-statusbar">
      <div className="flex items-center gap-4">
        <span>main</span>
        <span>UTF-8</span>
      </div>
      <div className="flex items-center gap-4">
        <span>Python</span>
        <span>TypeScript</span>
      </div>
    </div>
  );
};

export default IDEStatusBar;
