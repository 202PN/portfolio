import React from 'react';
import { Briefcase } from 'lucide-react';
import { experience } from '../../../data/experience';
import { ventures } from '../../../data/ventures';
import CodeBlock from './CodeBlock';
import { indent } from './codeFormat';

// Current ventures first, then past roles, all in one chronological list
const roles = [
  ...ventures.map((v) => ({
    title: v.role,
    company: v.name,
    period: v.period,
    summary: v.summary,
    highlights: v.highlights.length > 0 ? v.highlights : (v.clients ?? []).map((c) => `${c.client}: ${c.summary}`),
    tech: v.tech
  })),
  ...experience
];

const LINES_PER_ROLE = 5;

const ExperienceContent: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Experience Overview Card */}
      <div className="code-card">
        <div className="code-card-header">
          <Briefcase size={16} />
          <span>Work experience</span>
        </div>
        <div className="code-card-body">
          <CodeBlock
            lines={[
              <span className="comment"># Most recent first</span>,
              <><span className="keyword">work_experience</span> <span className="operator">=</span> <span className="bracket">[</span></>
            ]}
          />
        </div>
      </div>

      {/* Individual Experience Cards */}
      {roles.map((job, index) => (
        <div key={job.company} className="code-card">
          <div className="code-card-header">
            <Briefcase size={16} />
            <span>{job.title}, {job.company}</span>
          </div>
          <div className="code-card-body">
            <CodeBlock
              className="mb-4"
              start={3 + index * LINES_PER_ROLE}
              lines={[
                <>{indent(1)}<span className="bracket">{'{'}</span></>,
                <>{indent(2)}<span className="string">"role"</span><span className="operator">:</span> <span className="string">"{job.title}"</span><span className="operator">,</span></>,
                <>{indent(2)}<span className="string">"company"</span><span className="operator">:</span> <span className="string">"{job.company}"</span><span className="operator">,</span></>,
                <>{indent(2)}<span className="string">"when"</span><span className="operator">:</span> <span className="string">"{job.period}"</span></>,
                <>{indent(1)}<span className="bracket">{'}'}</span><span className="operator">,</span></>
              ]}
            />

            <p className="text-gray-300 mb-3">{job.summary}</p>
            <ul className="ide-list mb-4">
              {job.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {job.tech.map((tech) => (
                <span key={tech} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      ))}

      <CodeBlock start={3 + roles.length * LINES_PER_ROLE} lines={[<span className="bracket">]</span>]} />
    </div>
  );
};

export default ExperienceContent;
