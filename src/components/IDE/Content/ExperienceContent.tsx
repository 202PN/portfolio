import React from 'react';
import { Briefcase, User } from 'lucide-react';
import { experience } from '../../../data/experience';

const ExperienceContent: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Experience Overview Card */}
      <div className="code-card">
        <div className="code-card-header">
          <Briefcase size={16} />
          <span>My Professional Journey</span>
        </div>
        <div className="code-card-body">
          <div className="code-block mb-4">
            <div className="code-line">
              <span className="line-number">1</span>
              <div className="code-content">
                <span className="comment"># Here's where I've worked and what I've accomplished</span>
              </div>
            </div>
            <div className="code-line">
              <span className="line-number">2</span>
              <div className="code-content">
                <span className="keyword">work_experience</span> <span className="operator">=</span> <span className="bracket">[</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Individual Experience Cards */}
      {experience.map((job, index) => (
        <div key={index} className="code-card">
          <div className="code-card-header">
            <Briefcase size={16} />
            <span>{job.title} at {job.company}</span>
          </div>
          <div className="code-card-body">
            <div className="code-block mb-4">
              <div className="code-line">
                <span className="line-number">{4 + index * 6}</span>
                <div className="code-content">
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="bracket">{'{'}</span>
                </div>
              </div>
              <div className="code-line">
                <span className="line-number">{5 + index * 6}</span>
                <div className="code-content">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"role"</span><span className="operator">:</span> <span className="string">"{job.title}"</span><span className="operator">,</span>
                </div>
              </div>
              <div className="code-line">
                <span className="line-number">{6 + index * 6}</span>
                <div className="code-content">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="property">"company"</span><span className="operator">:</span> <span className="string">"{job.company}"</span><span className="operator">,</span>
                </div>
              </div>
              <div className="code-line">
                <span className="line-number">{7 + index * 6}</span>
                <div className="code-content">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"when"</span><span className="operator">:</span> <span className="string">"{job.period}"</span>
                </div>
              </div>
              <div className="code-line">
                <span className="line-number">{8 + index * 6}</span>
                <div className="code-content">
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="bracket">{'}'}</span>
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="text-white font-semibold mb-2">{job.period}</h4>
              <p className="text-gray-300 mb-3">{job.description}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-400 mb-2">Technologies used:</p>
              <div className="flex flex-wrap gap-2">
                {job.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceContent;
