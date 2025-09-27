import React from 'react';
import { Code, User, Briefcase, Folder, MessageSquare, LucideIcon } from 'lucide-react';

// Icon mapping for better type safety and performance
const ICON_MAP: Record<string, LucideIcon> = {
  Code,
  User,
  Briefcase,
  Folder,
  MessageSquare,
} as const;

/**
 * Gets the appropriate icon component for a given icon name
 * @param iconName - Name of the icon to retrieve
 * @param size - Size of the icon (default: 14)
 * @returns React component for the icon
 */
export const getTabIcon = (iconName: string, size: number = 14): React.ReactElement => {
  const IconComponent = ICON_MAP[iconName];
  
  if (!IconComponent) {
    console.warn(`Icon "${iconName}" not found, falling back to Code icon`);
    return <Code size={size} />;
  }
  
  return <IconComponent size={size} />;
};
