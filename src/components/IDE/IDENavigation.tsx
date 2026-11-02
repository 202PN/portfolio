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
      <div className="ide-nav-tabs" role="tablist" aria-label="Files">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            className={`ide-nav-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => onTabChange(tab.id)}
          >
            {getTabIcon(tab.icon)}
            <span>{tab.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default IDENavigation;
