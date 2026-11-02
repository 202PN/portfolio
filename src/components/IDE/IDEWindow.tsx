import React from 'react';
import IDETitleBar from './IDETitleBar';
import IDENavigation from './IDENavigation';
import IDESidebar from './IDESidebar';
import IDEStatusBar from './IDEStatusBar';

interface IDEWindowProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
  children: React.ReactNode;
}

const IDEWindow: React.FC<IDEWindowProps> = ({ activeTab, onTabChange, children }) => {
  return (
    <div className="ide-window">
      {/* Title Bar */}
      <IDETitleBar />
      
      {/* Navigation Tabs */}
      <IDENavigation activeTab={activeTab} onTabChange={onTabChange} />
      
      <div className="flex flex-1 min-h-0">
        {/* Sidebar */}
        <IDESidebar activeTab={activeTab} onTabChange={onTabChange} />
        
        {/* Main Content */}
        <div className="ide-content">
          {children}
        </div>
      </div>
      
      {/* Status Bar */}
      <IDEStatusBar />
    </div>
  );
};

export default IDEWindow;
