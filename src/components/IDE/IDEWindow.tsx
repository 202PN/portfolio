import React from 'react';
import { Tab } from '../../types';
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
    <div className="ide-window" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Title Bar */}
      <IDETitleBar />
      
      {/* Navigation Tabs */}
      <IDENavigation activeTab={activeTab} onTabChange={onTabChange} />
      
      <div className="flex flex-1" style={{ display: 'flex', flex: '1' }}>
        {/* Sidebar */}
        <IDESidebar activeTab={activeTab} onTabChange={onTabChange} />
        
        {/* Main Content */}
        <div className="ide-content flex-1" style={{ flex: '1', padding: '20px', overflowY: 'auto' }}>
          {children}
        </div>
      </div>
      
      {/* Status Bar */}
      <IDEStatusBar />
    </div>
  );
};

export default IDEWindow;
