import React from 'react';
import { IDEWindow } from './index';
import { MainContent, SkillsContent, ExperienceContent, ProjectsContent, ContactContent } from './Content';
import { IDESectionProps } from '../../types';

const IDESection: React.FC<IDESectionProps> = ({ isDevMode, activeTab, onTabChange }) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'main.py':
        return <MainContent />;
      case 'aws_services.py':
        return <SkillsContent />;
      case 'work_experience.py':
        return <ExperienceContent />;
      case 'projects.py':
        return <ProjectsContent />;
      case 'flask_app.py':
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
                  onChange={(e) => onTabChange(e.target.checked ? 'main.py' : 'main.py')}
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
        {renderContent()}
      </IDEWindow>
    </section>
  );
};

export default IDESection;
