import React, { useState, useEffect } from 'react';
import { Hero, IDESection, SimplePortfolio, HangarStackModal } from './index';
import { getActiveSection } from '../utils';
import { CONFIG } from '../config';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState(CONFIG.IDE.DEFAULT_TAB);
  const [activeSection, setActiveSection] = useState('home');
  const [isDevMode, setIsDevMode] = useState(false);
  const [showHangarStackModal, setShowHangarStackModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentSection = getActiveSection(CONFIG.NAVIGATION.SECTIONS);
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleViewWork = () => {
    document.getElementById('simple-portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGetInTouch = () => {
    document.getElementById('lets-work-together')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleToggleDevMode = (mode: boolean) => {
    setIsDevMode(mode);
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
        onTabChange={setActiveTab} 
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
