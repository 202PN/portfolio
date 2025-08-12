/**
 * Portfolio Configuration
 * 
 * This file contains all configuration constants and settings
 * used throughout the portfolio application.
 */

export const CONFIG = {
  // Site Information
  SITE: {
    TITLE: 'Pete Nguyen - Software Engineer Portfolio',
    DESCRIPTION: 'Software Engineer specializing in modern web technologies. View my projects and experience.',
    AUTHOR: 'Pete Nguyen',
    VERSION: '1.0.0'
  },

  // Contact Information
  CONTACT: {
    EMAIL: 'petenguyen96@gmail.com',
    GITHUB: 'https://github.com/202PN',
    LINKEDIN: 'https://www.linkedin.com/in/petehnguyen/',
    PHONE: null
  },

  // Social Media
  SOCIAL: {
    GITHUB: '202PN',
    LINKEDIN: 'petehnguyen',
    TWITTER: null
  },

  // Navigation
  NAVIGATION: {
    SECTIONS: ['home', 'about', 'experience', 'projects', 'contact'],
    SCROLL_OFFSET: 100
  },

  // IDE Configuration
  IDE: {
    DEFAULT_TAB: 'main.py',
    TABS: [
      { id: 'main.py', name: 'main.py', icon: 'Code' },
      { id: 'aws_services.py', name: 'aws_services.py', icon: 'User' },
      { id: 'work_experience.py', name: 'work_experience.py', icon: 'Briefcase' },
      { id: 'projects.py', name: 'projects.py', icon: 'Folder' },
      { id: 'flask_app.py', name: 'flask_app.py', icon: 'MessageSquare' }
    ]
  },

  // Animation Settings
  ANIMATIONS: {
    SCROLL_BEHAVIOR: 'smooth',
    TRANSITION_DURATION: 300,
    HOVER_TRANSFORM: 'translateY(-2px)'
  },

  // Responsive Breakpoints
  BREAKPOINTS: {
    MOBILE: 480,
    TABLET: 768,
    DESKTOP: 1024,
    LARGE: 1280
  }
} as const;

export default CONFIG;
