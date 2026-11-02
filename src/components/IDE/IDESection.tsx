import React from 'react';
import { IDEWindow } from './index';
import { MainContent, SkillsContent, ExperienceContent, ProjectsContent, ContactContent } from './Content';
import { IDESectionProps } from '../../types';

const IDESection: React.FC<IDESectionProps> = ({ activeTab, onTabChange }) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'my_skills.py':
        return <SkillsContent />;
      case 'work_experience.py':
        return <ExperienceContent />;
      case 'projects.py':
        return <ProjectsContent />;
      case 'contact.py':
        return <ContactContent />;
      default:
        return <MainContent onTabChange={onTabChange} />;
    }
  };

  return (
    <main id="ide-section" className="ide-section">
      <p className="ide-intro">Turn Dev mode off for the plain resume.</p>
      <IDEWindow activeTab={activeTab} onTabChange={onTabChange}>
        {renderContent()}
      </IDEWindow>
    </main>
  );
};

export default IDESection;
