import React from 'react';
import { Settings, Code } from 'lucide-react';
import { skills } from '../../../data/skills';
import CodeBlock from './CodeBlock';
import { indent, pyList } from './codeFormat';

const toKey = (category: string) => category.toLowerCase().replace(/[^a-z]+/g, '_').replace(/_$/, '');

const SkillsContent: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Skills Overview Card */}
      <div className="code-card">
        <div className="code-card-header">
          <Settings size={16} />
          <span>My skills & technologies</span>
        </div>
        <div className="code-card-body">
          <CodeBlock
            lines={[
              <span className="comment"># The tools I use to ship production software</span>,
              <><span className="keyword">my_skills</span> <span className="operator">=</span> <span className="bracket">{'{'}</span></>
            ]}
          />
        </div>
      </div>

      {/* One card per skill group */}
      {skills.map((group, index) => (
        <div key={group.category} className="code-card">
          <div className="code-card-header">
            <Code size={16} />
            <span>{group.category}</span>
          </div>
          <div className="code-card-body">
            <CodeBlock
              className="mb-4"
              start={3 + index}
              lines={[
                <>{indent(1)}<span className="string">"{toKey(group.category)}"</span><span className="operator">:</span> <span className="bracket">[</span><span className="string">{pyList(group.items)}</span><span className="bracket">]</span><span className="operator">,</span></>
              ]}
            />
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="tech-badge">{item}</span>
              ))}
            </div>
          </div>
        </div>
      ))}

      <CodeBlock start={3 + skills.length} lines={[<span className="bracket">{'}'}</span>]} />
    </div>
  );
};

export default SkillsContent;
