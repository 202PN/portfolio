import { CONFIG } from '../config';

/**
 * Smoothly scrolls to a section by ID
 * @param sectionId - ID of the section to scroll to
 */
export const scrollToSection = (sectionId: string): void => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: CONFIG.ANIMATIONS.SCROLL_BEHAVIOR as ScrollBehavior 
    });
  }
};

/**
 * Determines which section is currently active based on scroll position
 * @param sections - Array of section IDs to check
 * @returns ID of the currently active section
 */
export const getActiveSection = (sections: string[]): string => {
  const scrollPosition = window.scrollY + CONFIG.NAVIGATION.SCROLL_OFFSET;
  
  for (const section of sections) {
    const element = document.getElementById(section);
    if (element) {
      const { offsetTop, offsetHeight } = element;
      
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        return section;
      }
    }
  }
  
  return 'home';
};
