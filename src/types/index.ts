/**
 * Portfolio Project Types
 * 
 * This file contains all TypeScript interfaces and types used throughout the portfolio application.
 * Each interface is designed to be reusable and maintainable.
 */

/**
 * Project information interface
 */
export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
}

/**
 * Work experience interface
 */
export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
}

/**
 * Skills and technologies interface
 */
export interface Skills {
  Frontend: string[];
  Backend: string[];
  Database: string[];
  Tools: string[];
}

/**
 * IDE navigation tab interface
 */
export interface Tab {
  id: string;
  name: string;
  icon: string;
}

/**
 * Contact form interface
 */
export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

/**
 * Component props interfaces
 */
export interface HeroProps {
  onViewWork: () => void;
  onGetInTouch: () => void;
}

export interface IDESectionProps {
  isDevMode: boolean;
  activeTab: string;
  onTabChange: (tabId: string) => void;
  onToggleDevMode: (mode: boolean) => void;
}

export interface SimplePortfolioProps {
  isDevMode: boolean;
  onToggleDevMode: (mode: boolean) => void;
  onShowHangarStackModal: () => void;
}

export interface HangarStackModalProps {
  isOpen: boolean;
  onClose: () => void;
}
