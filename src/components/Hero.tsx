import React from 'react';
import { Github, Linkedin, Mail, Terminal, ChevronDown } from 'lucide-react';

interface HeroProps {
  onViewWork: () => void;
  onGetInTouch: () => void;
}

const Hero: React.FC<HeroProps> = ({ onViewWork, onGetInTouch }) => {
  return (
    <section className="hero-section min-h-screen flex items-center justify-center relative">
      <div className="hero-content max-w-4xl mx-auto px-6 text-center">
        <div className="hero-badge mb-6">
          <span className="hero-badge-text">Welcome to my portfolio</span>
        </div>
        
        <h1 className="hero-title mb-6">
          Hi, I'm <span className="hero-name">Pete Nguyen</span>
        </h1>
        
        <p className="hero-subtitle mb-8">
          A <strong>Software Engineer</strong> who builds amazing digital experiences
          and solves complex problems with clean code.
        </p>
        
        <div className="hero-technologies">
          <div className="hero-tech-category">
            <div className="hero-tech-title">Frontend</div>
            <div className="hero-tech-items">
              <span className="hero-tech-item">React</span>
              <span className="hero-tech-item">TypeScript</span>
              <span className="hero-tech-item">Tailwind</span>
            </div>
          </div>
          <div className="hero-tech-category">
            <div className="hero-tech-title">Backend</div>
            <div className="hero-tech-items">
              <span className="hero-tech-item">Node.js</span>
              <span className="hero-tech-item">Python</span>
              <span className="hero-tech-item">Flask</span>
            </div>
          </div>
          <div className="hero-tech-category">
            <div className="hero-tech-title">Cloud & Data</div>
            <div className="hero-tech-items">
              <span className="hero-tech-item">AWS</span>
              <span className="hero-tech-item">Kafka</span>
              <span className="hero-tech-item">Docker</span>
            </div>
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
          <a href="https://github.com/202PN" className="hero-social-link">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/petehnguyen/" className="hero-social-link">
            <Linkedin size={24} />
          </a>
          <a href="mailto:petenguyen96@gmail.com" className="hero-social-link">
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
};

export default Hero;
