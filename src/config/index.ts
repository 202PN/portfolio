/**
 * Portfolio Configuration
 * 
 * This file contains all configuration constants and settings
 * used throughout the portfolio application.
 */

export const CONFIG = {
  // Site Information
  SITE: {
    TITLE: 'Pete Nguyen | Full-Stack Software Engineer',
    DESCRIPTION: 'Full-stack software engineer building secure, cloud-native applications. Co-founder of TickrCom, founder of Two Zero Two Studio, formerly Southwest Airlines, U.S. Army veteran.',
    AUTHOR: 'Pete Nguyen',
    VERSION: '1.0.0'
  },

  // Contact Information
  CONTACT: {
    EMAIL: 'petenguyen96@gmail.com',
    GITHUB: 'https://github.com/202PN',
    LINKEDIN: 'https://www.linkedin.com/in/petehnguyen/',
    LOCATION: 'West Palm Beach, FL',
    PHONE: null,
    // Drop a resume PDF in /public and set this to e.g. 'resume.pdf' to show a download button
    RESUME_PATH: null as string | null,
    // Portrait photo in /public (cropped to ~4:5); initials are shown if it fails to load
    PHOTO_PATH: 'headshot.jpg'
  },

  // Social Media
  SOCIAL: {
    GITHUB: '202PN',
    LINKEDIN: 'petehnguyen',
    TWITTER: null
  },

  // Navigation
  NAVIGATION: {
    SECTIONS: ['ventures', 'experience', 'skills', 'contact'],
    SCROLL_OFFSET: 100
  },

  // IDE Configuration
  IDE: {
    DEFAULT_TAB: 'main.py',
    TABS: [
      { id: 'main.py', name: 'main.py', icon: 'Code' },
      { id: 'my_skills.py', name: 'my_skills.py', icon: 'User' },
      { id: 'work_experience.py', name: 'work_experience.py', icon: 'Briefcase' },
      { id: 'projects.py', name: 'projects.py', icon: 'Folder' },
      { id: 'contact.py', name: 'contact.py', icon: 'MessageSquare' }
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
