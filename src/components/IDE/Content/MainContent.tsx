import React from 'react';
import { User, Briefcase, MessageSquare, Github, Folder } from 'lucide-react';
import CodeBlock from './CodeBlock';
import { indent } from './codeFormat';
import { CONFIG } from '../../../config';

interface MainContentProps {
  onTabChange: (tabId: string) => void;
}

const MainContent: React.FC<MainContentProps> = ({ onTabChange }) => {
  return (
    <div className="space-y-6">
      {/* Introduction Card */}
      <div className="code-card">
        <div className="code-card-header">
          <User size={16} />
          <span>About me</span>
        </div>
        <div className="code-card-body">
          <CodeBlock
            lines={[
              <span className="comment"># Hi, I'm Pete. Here's the short version.</span>,
              <><span className="keyword">class</span> <span className="function">SoftwareEngineer</span><span className="bracket">:</span></>,
              <>{indent(1)}<span className="keyword">def</span> <span className="function">__init__</span><span className="bracket">(</span><span className="variable">self</span><span className="bracket">):</span></>,
              <>{indent(2)}<span className="variable">self</span><span className="operator">.</span><span className="property">name</span> <span className="operator">=</span> <span className="string">"Pete Nguyen"</span></>,
              <>{indent(2)}<span className="variable">self</span><span className="operator">.</span><span className="property">role</span> <span className="operator">=</span> <span className="string">"Full-Stack Software Engineer"</span></>,
              <>{indent(2)}<span className="variable">self</span><span className="operator">.</span><span className="property">years_experience</span> <span className="operator">=</span> <span className="number">3</span></>,
              <>{indent(2)}<span className="variable">self</span><span className="operator">.</span><span className="property">location</span> <span className="operator">=</span> <span className="string">"{CONFIG.CONTACT.LOCATION}"</span></>,
              <>{indent(2)}<span className="variable">self</span><span className="operator">.</span><span className="property">focus</span> <span className="operator">=</span> <span className="bracket">[</span><span className="string">"cloud-native apps"</span><span className="operator">,</span> <span className="string">"event-driven systems"</span><span className="operator">,</span> <span className="string">"security by design"</span><span className="bracket">]</span></>,
              <>{indent(2)}<span className="variable">self</span><span className="operator">.</span><span className="property">education</span> <span className="operator">=</span> <span className="string">"B.S. Cybersecurity, Purdue Global"</span></>,
              <>{indent(2)}<span className="variable">self</span><span className="operator">.</span><span className="property">veteran</span> <span className="operator">=</span> <span className="keyword">True</span>  <span className="comment"># U.S. Army Sergeant, 2016–2022</span></>
            ]}
          />
        </div>
      </div>

      {/* Current Work Card */}
      <div className="code-card">
        <div className="code-card-header">
          <Briefcase size={16} />
          <span>What I'm working on</span>
        </div>
        <div className="code-card-body">
          <CodeBlock
            start={12}
            lines={[
              <>{indent(1)}<span className="keyword">def</span> <span className="function">currently</span><span className="bracket">(</span><span className="variable">self</span><span className="bracket">):</span></>,
              <>{indent(2)}<span className="keyword">return</span> <span className="bracket">{'{'}</span></>,
              <>{indent(3)}<span className="string">"TickrCom"</span><span className="operator">:</span> <span className="string">"Co-Founder & Full-Stack Engineer"</span><span className="operator">,</span></>,
              <>{indent(3)}<span className="string">"Two Zero Two Studio"</span><span className="operator">:</span> <span className="string">"Freelance Full-Stack Developer"</span><span className="operator">,</span></>,
              <>{indent(2)}<span className="bracket">{'}'}</span></>,
              '',
              <>{indent(1)}<span className="keyword">def</span> <span className="function">previously</span><span className="bracket">(</span><span className="variable">self</span><span className="bracket">):</span></>,
              <>{indent(2)}<span className="keyword">return</span> <span className="string">"Southwest Airlines: 10M+ events/day through real-time AWS + Kafka services"</span></>
            ]}
          />
        </div>
      </div>

      {/* Call to Action Card */}
      <div className="code-card">
        <div className="code-card-header">
          <MessageSquare size={16} />
          <span>Next steps</span>
        </div>
        <div className="code-card-body">
          <p className="text-gray-300 mb-4">
            Open the other files to see my work, experience, and skills, or switch Dev mode off for the plain resume.
          </p>
          <div className="flex gap-3 flex-wrap">
            <button type="button" className="ide-button flex items-center gap-2" onClick={() => onTabChange('projects.py')}>
              <Folder size={16} />
              Open projects.py
            </button>
            <button type="button" className="ide-button secondary flex items-center gap-2" onClick={() => onTabChange('contact.py')}>
              <MessageSquare size={16} />
              Open contact.py
            </button>
            <a href={CONFIG.CONTACT.GITHUB} target="_blank" rel="noopener noreferrer" className="ide-button secondary flex items-center gap-2">
              <Github size={16} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
