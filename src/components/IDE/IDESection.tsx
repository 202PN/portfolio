import React from 'react';
import { IDEWindow } from './index';
import { MainContent, SkillsContent, ExperienceContent, ProjectsContent, ContactContent } from './Content';
import { IDESectionProps } from '../../types';

const IDESection: React.FC<IDESectionProps> = ({ isDevMode, activeTab, onTabChange, onToggleDevMode }) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'main.py':
        return <MainContent />;
      case 'my_skills.py':
        return <SkillsContent />;
      case 'work_experience.py':
        return <ExperienceContent />;
      case 'projects.py':
        return <ProjectsContent />;
      case 'contact.py':
        return <ContactContent />;
      default:
        return <MainContent />;
    }
  };

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
        </div>
      </div>
      
      <IDEWindow activeTab={activeTab} onTabChange={onTabChange}>
        {renderContent()}
      </IDEWindow>
    </section>
  );
};

export default IDESection;
