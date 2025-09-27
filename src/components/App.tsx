import React, { useState } from 'react';
import { Hero, IDESection, SimplePortfolio, HangarStackModal } from './index';
import { CONFIG } from '../config';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState(CONFIG.IDE.DEFAULT_TAB);
  const [isDevMode, setIsDevMode] = useState(false);
  const [showHangarStackModal, setShowHangarStackModal] = useState(false);

  const handleViewWork = () => {
    document.getElementById('simple-portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGetInTouch = () => {
    document.getElementById('lets-work-together')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleToggleDevMode = (mode: boolean) => {
    setIsDevMode(mode);
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const handleShowHangarStackModal = () => {
    setShowHangarStackModal(true);
  };

  const handleCloseHangarStackModal = () => {
    setShowHangarStackModal(false);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero onViewWork={handleViewWork} onGetInTouch={handleGetInTouch} />
      
      {/* IDE Section */}
      <IDESection 
        isDevMode={isDevMode} 
        activeTab={activeTab} 
        onTabChange={handleTabChange}
        onToggleDevMode={handleToggleDevMode}
      />
      
      {/* Simple Portfolio Section */}
      <SimplePortfolio 
        isDevMode={isDevMode}
        onToggleDevMode={handleToggleDevMode}
        onShowHangarStackModal={handleShowHangarStackModal}
      />
      
      {/* HangarStack Project Modal */}
      <HangarStackModal 
        isOpen={showHangarStackModal}
        onClose={handleCloseHangarStackModal}
      />
    </div>
  );
};

export default App;
