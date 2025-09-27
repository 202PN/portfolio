/**
 * Application Constants
 * 
 * This file contains all hardcoded values, colors, and constants used throughout the application.
 * Centralizing these values makes the codebase more maintainable and consistent.
 */

// Color Palette
export const COLORS = {
  // Primary Colors
  PRIMARY: '#0a0f1c',
  SECONDARY: '#1a1f2e',
  TERTIARY: '#252a3a',
  
  // Text Colors
  TEXT_PRIMARY: '#ffffff',
  TEXT_SECONDARY: '#cccccc',
  TEXT_COMMENT: '#888888',
  TEXT_KEYWORD: '#ffffff',
  TEXT_STRING: '#dddddd',
  TEXT_NUMBER: '#ffffff',
  
  // UI Colors
  BORDER: '#333333',
  ACCENT: '#c0c0c0',
  ACCENT_HOVER: '#a0a0a0',
  CHROME: '#c0c0c0',
  CHROME_LIGHT: '#e0e0e0',
  CHROME_DARK: '#808080',
  
  // Status Colors
  SUCCESS: '#28ca42',
  WARNING: '#ffbd2e',
  ERROR: '#ff5f57',
  
  // Project-specific colors
  HANGARSTACK_BLUE: '#00a2ff',
  SERVERLESS_ORANGE: '#ff9900',
  FLASK_GREEN: '#4CAF50',
  
  // Social Media Colors
  GITHUB: '#333333',
  LINKEDIN: '#0077b5',
  EMAIL: '#ea4335',
} as const;

// Typography
export const TYPOGRAPHY = {
  FONT_FAMILY: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
  FONT_FAMILY_MONO: "'Consolas', 'Monaco', 'Courier New', monospace",
  
  // Font Sizes
  SIZES: {
    XS: '0.75rem',    // 12px
    SM: '0.875rem',   // 14px
    BASE: '1rem',     // 16px
    LG: '1.125rem',   // 18px
    XL: '1.25rem',    // 20px
    '2XL': '1.5rem',  // 24px
    '3XL': '1.875rem', // 30px
    '4XL': '2.25rem', // 36px
    '5XL': '3rem',    // 48px
    '6XL': '3.75rem', // 60px
  },
  
  // Font Weights
  WEIGHTS: {
    NORMAL: '400',
    MEDIUM: '500',
    SEMIBOLD: '600',
    BOLD: '700',
    EXTRABOLD: '800',
  },
  
  // Line Heights
  LINE_HEIGHTS: {
    TIGHT: '1.25',
    NORMAL: '1.5',
    RELAXED: '1.75',
  },
} as const;

// Spacing Scale
export const SPACING = {
  XS: '0.25rem',   // 4px
  SM: '0.5rem',    // 8px
  MD: '1rem',      // 16px
  LG: '1.5rem',    // 24px
  XL: '2rem',      // 32px
  '2XL': '3rem',   // 48px
  '3XL': '4rem',   // 64px
  '4XL': '6rem',   // 96px
  '5XL': '8rem',   // 128px
} as const;

// Border Radius
export const BORDER_RADIUS = {
  NONE: '0',
  SM: '0.125rem',   // 2px
  MD: '0.375rem',   // 6px
  LG: '0.5rem',     // 8px
  XL: '0.75rem',    // 12px
  '2XL': '1rem',    // 16px
  FULL: '9999px',
} as const;

// Shadows
export const SHADOWS = {
  SM: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  MD: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  LG: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  XL: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2XL': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  INNER: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
} as const;

// Animation Durations
export const ANIMATIONS = {
  DURATION: {
    FAST: '150ms',
    NORMAL: '300ms',
    SLOW: '500ms',
  },
  EASING: {
    EASE_IN: 'cubic-bezier(0.4, 0, 1, 1)',
    EASE_OUT: 'cubic-bezier(0, 0, 0.2, 1)',
    EASE_IN_OUT: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;

// Breakpoints
export const BREAKPOINTS = {
  MOBILE: '480px',
  TABLET: '768px',
  DESKTOP: '1024px',
  LARGE: '1280px',
  XLARGE: '1536px',
} as const;

// Z-Index Scale
export const Z_INDEX = {
  DROPDOWN: 1000,
  STICKY: 1020,
  FIXED: 1030,
  MODAL_BACKDROP: 1040,
  MODAL: 1050,
  POPOVER: 1060,
  TOOLTIP: 1070,
} as const;

// Content Constants
export const CONTENT = {
  HERO: {
    NAME: 'Pete',
    TITLE: 'Software Engineer',
    DESCRIPTION: 'A Software Engineer who builds amazing digital experiences and solves complex problems with clean code.',
    LOCATION: 'Washington D.C. • West Palm Beach, Florida',
  },
  
  CONTACT: {
    EMAIL: 'petenguyen96@gmail.com',
    GITHUB: 'https://github.com/202PN',
    LINKEDIN: 'https://www.linkedin.com/in/petehnguyen/',
  },
  
  EXPERIENCE: {
    CURRENT_ROLE: {
      TITLE: 'Associate Software Engineer',
      COMPANY: 'Southwest Airlines',
      PERIOD: '2022 - 2025',
      LOCATION: 'Dallas, Texas',
    },
  },
  
  EDUCATION: {
    DEGREE: 'B.S. Cybersecurity',
    SCHOOL: 'Purdue Global University',
    GRADUATION: '2025',
    ACADEMY: 'Microsoft Software Academy',
    ACADEMY_FOCUS: 'Cloud Application Development',
    ACADEMY_YEAR: '2022',
  },
  
  MILITARY: {
    TITLE: 'Army Radiology Technologist Sergeant',
    BRANCH: 'U.S. Army',
    PERIOD: '2016-2022',
    ACHIEVEMENTS: [
      '2021 Atlantic Region Soldier of the Year',
      '2020 Best Leader: Soldier of the Year',
    ],
  },
} as const;

// Technical Constants
export const TECHNICAL = {
  EXPERIENCE_YEARS: 3,
  DAILY_EVENTS: '10 million',
  DAILY_TRANSACTIONS: 'millions of daily transactions',
  PRODUCTION_DEPLOYMENTS: 25,
  ONBOARDING_REDUCTION: '50%',
} as const;

// File Paths
export const ASSETS = {
  IMAGES: {
    HANGARSTACK: './hangarstack.png',
    ARMY_LOGO: './us-army-logo.png',
    ARMY_PIC: './armyPic.jpeg',
  },
  DOCUMENTS: {
    RESUME: '/resume.pdf',
  },
} as const;

// CSS Custom Properties (for use in CSS-in-JS or dynamic styles)
export const CSS_VARS = {
  '--bg-primary': COLORS.PRIMARY,
  '--bg-secondary': COLORS.SECONDARY,
  '--bg-tertiary': COLORS.TERTIARY,
  '--text-primary': COLORS.TEXT_PRIMARY,
  '--text-secondary': COLORS.TEXT_SECONDARY,
  '--text-comment': COLORS.TEXT_COMMENT,
  '--text-keyword': COLORS.TEXT_KEYWORD,
  '--text-string': COLORS.TEXT_STRING,
  '--text-number': COLORS.TEXT_NUMBER,
  '--border': COLORS.BORDER,
  '--accent': COLORS.ACCENT,
  '--accent-hover': COLORS.ACCENT_HOVER,
  '--chrome': COLORS.CHROME,
  '--chrome-light': COLORS.CHROME_LIGHT,
  '--chrome-dark': COLORS.CHROME_DARK,
} as const;

// Re-export CONFIG from the original config file for backward compatibility
export { CONFIG } from '../config';
