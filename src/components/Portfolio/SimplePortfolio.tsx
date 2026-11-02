import React from 'react';
import Hero from '../Hero';
import VenturesSection from './VenturesSection';
import ExperienceSection from './ExperienceSection';
import SkillsSection from './SkillsSection';
import ConnectSection from './ConnectSection';

const SimplePortfolio: React.FC = () => (
  <main id="simple-portfolio" className="simple-portfolio">
    <Hero />
    <VenturesSection />
    <ExperienceSection />
    <SkillsSection />
    <ConnectSection />
  </main>
);

export default SimplePortfolio;
