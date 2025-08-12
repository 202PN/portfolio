import React from 'react';
import { Code, User, Briefcase, Folder, MessageSquare } from 'lucide-react';

export const getTabIcon = (iconName: string, size: number = 14) => {
  const icons = {
    Code: <Code size={size} />,
    User: <User size={size} />,
    Briefcase: <Briefcase size={size} />,
    Folder: <Folder size={size} />,
    MessageSquare: <MessageSquare size={size} />
  };
  return icons[iconName as keyof typeof icons] || <Code size={size} />;
};
