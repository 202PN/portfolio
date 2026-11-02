import React, { useState, useEffect } from 'react';
import { Header, IDESection, SimplePortfolio, Footer, CrashScreen } from './index';
import { getActiveSection } from '../utils';
import { CONFIG } from '../config';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(CONFIG.IDE.DEFAULT_TAB);
  const [activeSection, setActiveSection] = useState('');
  const [isDevMode, setIsDevMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [...CONFIG.NAVIGATION.SECTIONS];
      // The last section is too short to reach the top, so treat the page bottom as being in it
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      setActiveSection(atBottom ? sections[sections.length - 1] : getActiveSection(sections));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDevMode]);

  // The page theme follows the mode: light for the recruiter view, dark for dev mode
  useEffect(() => {
    document.documentElement.dataset.mode = isDevMode ? 'dev' : 'simple';
  }, [isDevMode]);

  const handleToggleDevMode = (mode: boolean) => {
    setIsDevMode(mode);
    window.scrollTo({ top: 0 });
  };

  return (
    // The whole site is one terminal window; the header is its title bar
    <div className="terminal">
      <CrashScreen />
      <a href={isDevMode ? '#ide-section' : '#ventures'} className="skip-link">
        Skip to content
      </a>
      <Header isDevMode={isDevMode} activeSection={activeSection} onToggleDevMode={handleToggleDevMode} />
      {isDevMode ? (
        <IDESection activeTab={activeTab} onTabChange={setActiveTab} />
      ) : (
        <SimplePortfolio />
      )}
      <Footer />
    </div>
  );
};

export default App;
