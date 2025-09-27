import React, { memo } from 'react';
import { User, Code, MessageSquare, Github } from 'lucide-react';
import { CONTENT, TECHNICAL } from '../../../constants';

const MainContent: React.FC = memo(() => {
  return (
    <div className="space-y-6">
      {/* Introduction Card */}
      <div className="code-card">
        <div className="code-card-header">
          <User size={16} />
          <span>About Me</span>
        </div>
        <div className="code-card-body">
          <div className="code-block">
            <div className="code-line">
              <span className="line-number">1</span>
              <div className="code-content">
                <span className="comment"># Hi! I'm Pete - Let me show you what I do</span>
              </div>
            </div>
            <div className="code-line">
              <span className="line-number">2</span>
              <div className="code-content">
                <span className="keyword">class</span> <span className="function">SoftwareEngineer</span><span className="bracket">:</span>
              </div>
            </div>
            <div className="code-line">
              <span className="line-number">3</span>
              <div className="code-content">
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">def</span> <span className="function">introduction</span><span className="bracket">(</span><span className="variable">self</span><span className="bracket">):</span>
              </div>
            </div>
            <div className="code-line">
              <span className="line-number">4</span>
              <div className="code-content">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="variable">self</span><span className="operator">.</span><span className="property">name</span> <span className="operator">=</span> <span className="string">"{CONTENT.HERO.NAME} Nguyen"</span>
              </div>
            </div>
            <div className="code-line">
              <span className="line-number">5</span>
              <div className="code-content">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="variable">self</span><span className="operator">.</span><span className="property">role</span> <span className="operator">=</span> <span className="string">"{CONTENT.HERO.TITLE}"</span>
              </div>
            </div>
            <div className="code-line">
              <span className="line-number">6</span>
              <div className="code-content">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="variable">self</span><span className="operator">.</span><span className="property">passion</span> <span className="operator">=</span> <span className="string">"Building amazing digital experiences"</span>
              </div>
            </div>
            <div className="code-line">
              <span className="line-number">7</span>
              <div className="code-content">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="variable">self</span><span className="operator">.</span><span className="property">years_experience</span> <span className="operator">=</span> <span className="number">{TECHNICAL.EXPERIENCE_YEARS}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What I Love Doing Card */}
      <div className="code-card">
        <div className="code-card-header">
          <Code size={16} />
          <span>What I Love Doing</span>
        </div>
        <div className="code-card-body">
          <div className="code-block">
            <div className="code-line">
              <span className="line-number">9</span>
              <div className="code-content">
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">def</span> <span className="function">what_i_enjoy_doing</span><span className="bracket">(</span><span className="variable">self</span><span className="bracket">):</span>
              </div>
            </div>
            <div className="code-line">
              <span className="line-number">10</span>
              <div className="code-content">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">return</span> <span className="bracket">[</span>
              </div>
            </div>
            <div className="code-line">
              <span className="line-number">11</span>
              <div className="code-content">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"Solving everyday problems with code"</span><span className="operator">,</span>
              </div>
            </div>
            <div className="code-line">
              <span className="line-number">12</span>
              <div className="code-content">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"Building apps that make sense and are easy to use"</span><span className="operator">,</span>
              </div>
            </div>
            <div className="code-line">
              <span className="line-number">13</span>
              <div className="code-content">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"Cloud technologies"</span>
              </div>
            </div>
            <div className="code-line">
              <span className="line-number">14</span>
              <div className="code-content">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="bracket">]</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Card */}
      <div className="code-card">
        <div className="code-card-header">
          <MessageSquare size={16} />
          <span>Let's Connect</span>
        </div>
        <div className="code-card-body">
          <div className="code-block mb-4">
            <div className="code-line">
              <span className="line-number">16</span>
              <div className="code-content">
                <span className="comment"># Let's build!</span>
              </div>
            </div>
          </div>
          <p className="text-gray-300 mb-4">
            Let's build together!
          </p>
          <div className="flex gap-3 flex-wrap">
            <button className="ide-button">
              View Projects
            </button>
            <button className="ide-button secondary">
              Download Resume
            </button>
            <a href={CONTENT.CONTACT.GITHUB} className="ide-button secondary flex items-center gap-2">
              <Github size={16} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

MainContent.displayName = 'MainContent';

export default MainContent;
