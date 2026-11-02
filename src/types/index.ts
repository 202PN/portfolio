/**
 * Portfolio Project Types
 *
 * This file contains all TypeScript interfaces and types used throughout the portfolio application.
 * Each interface is designed to be reusable and maintainable.
 */

/**
 * Client engagement delivered through the freelance studio
 */
export interface ClientProject {
  client: string;
  period: string;
  url?: string;
  summary: string;
  highlights: string[];
  tech: string[];
}

/**
 * Venture (company I founded or run) interface
 */
export interface Venture {
  id: string;
  name: string;
  role: string;
  period: string;
  location: string;
  url: string;
  urlLabel: string;
  tagline: string;
  summary: string;
  highlights: string[];
  tech: string[];
  clients?: ClientProject[];
}

/**
 * Work experience interface
 */
export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
  tech: string[];
}

/**
 * Skills grouped by category, in display order
 */
export interface SkillGroup {
  category: string;
  items: string[];
}

/**
 * Degree interface
 */
export interface Degree {
  degree: string;
  school: string;
  date: string;
}

/**
 * Certification or clearance interface
 */
export interface Certification {
  name: string;
  issuer: string;
  date: string;
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
 * Component props interfaces
 */
export interface HeaderProps {
  isDevMode: boolean;
  activeSection: string;
  onToggleDevMode: (mode: boolean) => void;
}

export interface IDESectionProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}
