import React, { memo, useCallback } from 'react';
import { tabs } from '../../data/tabs';
import { getTabIcon } from '../../utils/iconUtils';

interface IDENavigationProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const IDENavigation: React.FC<IDENavigationProps> = memo(({ activeTab, onTabChange }) => {
  // Memoize tab click handler to prevent unnecessary re-renders
  const handleTabClick = useCallback((tabId: string) => {
    onTabChange(tabId);
  }, [onTabChange]);
  return (
    <div className="ide-nav">
      <div className="ide-nav-tabs">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`ide-nav-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {getTabIcon(tab.icon)}
            <span>{tab.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
});

IDENavigation.displayName = 'IDENavigation';

export default IDENavigation;
