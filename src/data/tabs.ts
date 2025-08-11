import { Tab } from '../types';
import { Code, User, Briefcase, Folder, MessageSquare } from 'lucide-react';

export const tabs: Tab[] = [
  { id: 'main.py', name: 'main.py', icon: <Code size={14} /> },
  { id: 'aws_services.py', name: 'aws_services.py', icon: <User size={14} /> },
  { id: 'work_experience.py', name: 'work_experience.py', icon: <Briefcase size={14} /> },
  { id: 'projects.py', name: 'projects.py', icon: <Folder size={14} /> },
  { id: 'flask_app.py', name: 'flask_app.py', icon: <MessageSquare size={14} /> }
];
