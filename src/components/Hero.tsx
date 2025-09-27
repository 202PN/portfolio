import React, { memo } from 'react';
import { Github, Linkedin, Mail, Terminal, ChevronDown, MapPin } from 'lucide-react';
import { HeroProps } from '../types';
import { CONTENT } from '../constants';

const Hero: React.FC<HeroProps> = memo(({ onViewWork, onGetInTouch }) => {
  return (
    <section className="hero-section min-h-screen flex items-center justify-center relative">
      <div className="hero-content max-w-4xl mx-auto px-6 text-center">
        <div className="hero-badge mb-6">
          <span className="hero-badge-text">Welcome to my portfolio</span>
        </div>
        
        <h1 className="hero-title mb-6">
          Hi, I'm <span className="hero-name">{CONTENT.HERO.NAME}</span>
        </h1>
        
        <p className="hero-subtitle mb-8">
          A <strong>{CONTENT.HERO.TITLE}</strong> {CONTENT.HERO.DESCRIPTION}
        </p>
        
        <div className="hero-location mb-8">
          <div className="flex items-center justify-center gap-2 text-gray-300">
            <MapPin size={18} className="text-gray-400" />
            <span className="text-sm font-medium">{CONTENT.HERO.LOCATION}</span>
          </div>
        </div>
        
        <div className="hero-actions mb-12">
          <button 
            className="hero-btn hero-btn-primary"
            onClick={onViewWork}
          >
            <Terminal size={20} />
            View My Work
          </button>
          <button 
            className="hero-btn hero-btn-secondary"
            onClick={onGetInTouch}
          >
            <Mail size={20} />
            Get In Touch
          </button>
        </div>
        
        <div className="hero-social">
          <a href={CONTENT.CONTACT.GITHUB} target="_blank" rel="noopener noreferrer" className="hero-social-link">
            <Github size={24} />
          </a>
          <a href={CONTENT.CONTACT.LINKEDIN} target="_blank" rel="noopener noreferrer" className="hero-social-link">
            <Linkedin size={24} />
          </a>
          <a href={`mailto:${CONTENT.CONTACT.EMAIL}`} className="hero-social-link">
            <Mail size={24} />
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="hero-scroll-indicator">
        <ChevronDown size={24} className="animate-bounce" />
        <span>Scroll to explore</span>
      </div>
      
      {/* Transition Effect */}
      <div className="hero-transition"></div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
