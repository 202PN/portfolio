import React from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';
import { tabs } from '../../data/tabs';
import { getTabIcon } from '../../utils/iconUtils';
import { CONFIG } from '../../config';

interface IDESidebarProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const IDESidebar: React.FC<IDESidebarProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="ide-sidebar hidden lg:block">
      <div className="ide-sidebar-section">
        <div className="ide-sidebar-title">Explorer</div>
        <div className="space-y-1">
          {tabs.map((tab) => (
                              <div
                    key={tab.id}
                    className={`ide-sidebar-item flex items-center gap-2 ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => onTabChange(tab.id)}
                  >
                    {getTabIcon(tab.icon)}
                    <span>{tab.name}</span>
                  </div>
          ))}
        </div>
      </div>

      <div className="ide-sidebar-section">
        <div className="ide-sidebar-title">Quick Actions</div>
        <div className="space-y-1">
          <a 
            href={CONFIG.CONTACT.GITHUB} 
            target="_blank" 
            rel="noopener noreferrer"
            className="ide-sidebar-item flex items-center gap-2 hover:bg-gray-700 transition-colors"
          >
            <Github size={14} />
            <span>View GitHub</span>
          </a>
          <a 
            href={CONFIG.CONTACT.LINKEDIN} 
            target="_blank" 
            rel="noopener noreferrer"
            className="ide-sidebar-item flex items-center gap-2 hover:bg-gray-700 transition-colors"
          >
            <Linkedin size={14} />
            <span>View LinkedIn</span>
          </a>
          <a 
            href={`mailto:${CONFIG.CONTACT.EMAIL}`}
            className="ide-sidebar-item flex items-center gap-2 hover:bg-gray-700 transition-colors"
          >
            <Mail size={14} />
            <span>Send Email</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default IDESidebar;
