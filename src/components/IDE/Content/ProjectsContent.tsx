import React from 'react';
import { Folder, Code, ExternalLink } from 'lucide-react';
import { projects } from '../../../data/projects';

const ProjectsContent: React.FC = () => {
  return (
    <div>
      {/* Code Header */}
      <div className="code-block mb-6">
        <div className="code-line">
          <span className="line-number">1</span>
          <div className="code-content">
            <span className="comment"># projects/ - My Featured Work</span>
          </div>
        </div>
        <div className="code-line">
          <span className="line-number">2</span>
          <div className="code-content">
            <span className="comment"># Project directory structure</span>
          </div>
        </div>
        <div className="code-line">
          <span className="line-number">3</span>
          <div className="code-content">
            <span className="variable">projects_dir</span> <span className="operator">=</span> <span className="function">Path</span><span className="bracket">(</span><span className="string">"./projects"</span><span className="bracket">)</span>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Folder className="text-blue-400" size={20} />
          projects/
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="project-card group">
              {/* Project Preview */}
              <div className="project-preview">
                <div className="project-preview-header">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="project-preview-content">
                  <div className="project-mockup">
                    <div className="mockup-header">
                      <div className="mockup-nav"></div>
                      <div className="mockup-title">{project.title}</div>
                    </div>
                    <div className="mockup-body">
                      <div className="mockup-sidebar"></div>
                      <div className="mockup-main">
                        <div className="mockup-content"></div>
                        <div className="mockup-content short"></div>
                        <div className="mockup-content"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Folder size={16} className="text-blue-400" />
                  <h4 className="font-bold text-white">{project.title.toLowerCase().replace(/\s+/g, '-')}/</h4>
                </div>
                <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a href={project.github} className="project-link">
                    <Code size={14} />
                  </a>
                  <a href={project.live} className="project-link">
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsContent;
