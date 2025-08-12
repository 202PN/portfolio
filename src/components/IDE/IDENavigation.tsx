import React from 'react';
import { tabs } from '../../data/tabs';
import { getTabIcon } from '../../utils/iconUtils';

interface IDENavigationProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const IDENavigation: React.FC<IDENavigationProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="ide-nav">
      <div className="ide-nav-tabs">
        {tabs.map((tab) => (
                      <div
              key={tab.id}
              className={`ide-nav-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => onTabChange(tab.id)}
            >
              {getTabIcon(tab.icon)}
              <span>{tab.name}</span>
            </div>
        ))}
      </div>
    </div>
  );
};

export default IDENavigation;
