import React from 'react';
import { Settings, Code, Folder } from 'lucide-react';
import { skills } from '../../../data/skills';

const SkillsContent: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Skills Overview Card */}
      <div className="code-card">
        <div className="code-card-header">
          <Settings size={16} />
          <span>My Skills & Technologies</span>
        </div>
        <div className="code-card-body">
          <div className="code-block mb-4">
            <div className="code-line">
              <span className="line-number">1</span>
              <div className="code-content">
                <span className="comment"># These are the tools I use</span>
              </div>
            </div>
            <div className="code-line">
              <span className="line-number">2</span>
              <div className="code-content">
                <span className="keyword">my_skills</span> <span className="operator">=</span> <span className="bracket">{'{'}</span>
              </div>
            </div>
          </div>
          <p className="text-gray-300 mb-4">
            Here's my technical toolkit - the technologies I use to bring ideas to life:
          </p>
        </div>
      </div>

      {/* Frontend Skills Card */}
      <div className="code-card">
        <div className="code-card-header">
          <Code size={16} />
          <span>Frontend - What Users See</span>
        </div>
        <div className="code-card-body">
          <div className="code-block mb-4">
            <div className="code-line">
              <span className="line-number">3</span>
              <div className="code-content">
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="comment"># Frontend - What users see and interact with</span>
              </div>
            </div>
            <div className="code-line">
              <span className="line-number">4</span>
              <div className="code-content">
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"Frontend"</span><span className="operator">:</span> <span className="bracket">[</span><span className="string">"React", "TypeScript", "Vue.js", "Next.js", "Tailwind CSS"</span><span className="bracket">]</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.Frontend.map((skill, index) => (
              <span key={index} className="tech-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Backend Skills Card */}
      <div className="code-card">
        <div className="code-card-header">
          <Settings size={16} />
          <span>Backend - The Engine</span>
        </div>
        <div className="code-card-body">
          <div className="code-block mb-4">
            <div className="code-line">
              <span className="line-number">5</span>
              <div className="code-content">
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="comment"># Backend - The engine that powers everything</span>
              </div>
            </div>
            <div className="code-line">
              <span className="line-number">6</span>
              <div className="code-content">
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"Backend"</span><span className="operator">:</span> <span className="bracket">[</span><span className="string">"Node.js", "Python", "Django", "Express", "FastAPI"</span><span className="bracket">]</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.Backend.map((skill, index) => (
              <span key={index} className="tech-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Database & Tools Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="code-card">
          <div className="code-card-header">
            <Folder size={16} />
            <span>Database</span>
          </div>
          <div className="code-card-body">
            <div className="code-block mb-4">
              <div className="code-line">
                <span className="line-number">7</span>
                <div className="code-content">
                  <span className="string">"Database"</span><span className="operator">:</span> <span className="bracket">[...]</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.Database.map((skill, index) => (
                <span key={index} className="tech-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="code-card">
          <div className="code-card-header">
            <Settings size={16} />
            <span>Tools</span>
          </div>
          <div className="code-card-body">
            <div className="code-block mb-4">
              <div className="code-line">
                <span className="line-number">8</span>
                <div className="code-content">
                  <span className="string">"Tools"</span><span className="operator">:</span> <span className="bracket">[...]</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.Tools.map((skill, index) => (
                <span key={index} className="tech-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsContent;
