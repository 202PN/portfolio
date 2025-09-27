import React, { memo, useMemo } from 'react';
import { IDEWindow } from './index';
import { MainContent, SkillsContent, ExperienceContent, ProjectsContent, ContactContent } from './Content';
import { IDESectionProps } from '../../types';
import { CONFIG } from '../../constants';

const IDESection: React.FC<IDESectionProps> = memo(({ isDevMode, activeTab, onTabChange, onToggleDevMode }) => {
  // Memoize content rendering to prevent unnecessary re-renders
  const content = useMemo(() => {
    switch (activeTab) {
      case CONFIG.IDE.TABS[0].id: // 'main.py'
        return <MainContent />;
      case CONFIG.IDE.TABS[1].id: // 'my_skills.py'
        return <SkillsContent />;
      case CONFIG.IDE.TABS[2].id: // 'work_experience.py'
        return <ExperienceContent />;
      case CONFIG.IDE.TABS[3].id: // 'projects.py'
        return <ProjectsContent />;
      case CONFIG.IDE.TABS[4].id: // 'contact.py'
        return <ContactContent />;
      default:
        return <MainContent />;
    }
  }, [activeTab]);

  return (
    <section id="ide-section" className={`ide-section ${!isDevMode ? 'hidden' : ''}`}>
      <div className="ide-intro">
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          {/* DEV MODE Toggle */}
          <div className="flex justify-center mb-8">
            <div className="dev-mode-toggle">
              <label className="toggle-label">
                <input
                  type="checkbox"
                  checked={isDevMode}
                  onChange={(e) => onToggleDevMode(e.target.checked)}
                  className="toggle-input"
                />
                <span className="toggle-slider">
                  <span className="toggle-text">
                    {isDevMode ? 'DEV MODE' : 'SIMPLE'}
                  </span>
                </span>
              </label>
            </div>
          </div>
          
          <h2 className="ide-intro-title">Let's dive into the code</h2>
          <p className="ide-intro-subtitle">
            Explore my work through the lens of a developer.
          </p>
        </div>
      </div>
      
      <IDEWindow activeTab={activeTab} onTabChange={onTabChange}>
        {content}
      </IDEWindow>
    </section>
  );
});

IDESection.displayName = 'IDESection';

export default IDESection;
