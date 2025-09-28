import React, { useState } from 'react';
import { Folder, Code, ExternalLink, File, ChevronRight, ChevronDown, Github, Play } from 'lucide-react';
import { projects } from '../../../data/projects';

const ProjectsContent: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [expandedFiles, setExpandedFiles] = useState<Set<string>>(new Set());

  const toggleFile = (filePath: string) => {
    const newExpanded = new Set(expandedFiles);
    if (newExpanded.has(filePath)) {
      newExpanded.delete(filePath);
    } else {
      newExpanded.add(filePath);
    }
    setExpandedFiles(newExpanded);
  };

  const projectFiles = {
    'hangarstack': [
      { name: 'app.py', type: 'file', content: 'Main Flask application' },
      { name: 'requirements.txt', type: 'file', content: 'All dependencies' },
      { name: '.gitignore', type: 'file', content: 'Git ignore rules' },
      { name: 'kafka/', type: 'folder', children: [
        { name: 'kafka_producer.py', type: 'file', content: 'Kafka message producer' },
        { name: 'kafka_consumer.py', type: 'file', content: 'Kafka message consumer' },
        { name: 'kafka_config.py', type: 'file', content: 'Kafka configuration settings' },
        { name: 'run_kafka_consumer.py', type: 'file', content: 'Consumer execution script' },
        { name: 'test_kafka.py', type: 'file', content: 'Kafka functionality tests' },
        { name: 'test_confluent.py', type: 'file', content: 'Confluent Cloud tests' },
        { name: 'view_topic_messages.py', type: 'file', content: 'Topic message viewer' }
      ]},
      { name: 'tests/', type: 'folder', children: [
        { name: 'test_flask_kafka.py', type: 'file', content: 'Flask-Kafka integration tests' }
      ]},
      { name: 'docs/', type: 'folder', children: [
        { name: 'README.md', type: 'file', content: 'Main project documentation' },
        { name: 'CONFLUENT_SETUP_GUIDE.md', type: 'file', content: 'Confluent Cloud setup guide' },
        { name: 'TESTING_GUIDE.md', type: 'file', content: 'Testing procedures and guidelines' },
        { name: 'DEPLOYMENT_OPERATIONS_GUIDE.md', type: 'file', content: 'Deployment and operations guide' },
        { name: 'APPLICATION_SUMMARY.md', type: 'file', content: 'Application overview and features' },
        { name: 'CLEANUP_SUMMARY.md', type: 'file', content: 'Cleanup and maintenance procedures' }
      ]},
      { name: 'data/', type: 'folder', children: [
        { name: 'aircraft_database.json', type: 'file', content: 'Aircraft data database' },
        { name: 'schema.json', type: 'file', content: 'Data schema definition' }
      ]},
      { name: 'static/', type: 'folder', children: [
        { name: 'style.css', type: 'file', content: 'Main stylesheet' },
        { name: 'images/', type: 'folder', children: [] }
      ]},
      { name: 'templates/', type: 'folder', children: [
        { name: 'base.html', type: 'file', content: 'Base HTML template' },
        { name: 'home.html', type: 'file', content: 'Home page template' },
        { name: 'manufacturer.html', type: 'file', content: 'Manufacturer details template' },
        { name: 'aircraft_detail.html', type: 'file', content: 'Aircraft detail template' }
      ]},
      { name: 'src/', type: 'folder', children: [
        { name: 'aircraft_viewer.py', type: 'file', content: 'Aircraft data viewer utility' },
        { name: 'display_aircraft.py', type: 'file', content: 'Aircraft display functions' },
        { name: 'viewer.py', type: 'file', content: 'Main viewer application' }
      ]}
    ]
  };

  const renderFileTree = (files: any[], path = '', level = 0) => {
    return files.map((file, index) => {
      const fullPath = path ? `${path}/${file.name}` : file.name;
      const isExpanded = expandedFiles.has(fullPath);
      const isFolder = file.type === 'folder';
      
      return (
        <div key={index} className="select-none">
          <div 
            className={`flex items-center gap-1 py-1 px-2 hover:bg-gray-700 cursor-pointer rounded text-sm ${level > 0 ? 'ml-4' : ''}`}
            onClick={() => isFolder ? toggleFile(fullPath) : null}
            style={{ paddingLeft: `${level * 16}px` }}
          >
            {isFolder ? (
              isExpanded ? <ChevronDown size={14} className="text-gray-400" /> : <ChevronRight size={14} className="text-gray-400" />
            ) : (
              <div className="w-3.5" />
            )}
            {isFolder ? (
              <Folder size={14} className="text-blue-400" />
            ) : (
              <File size={14} className="text-gray-400" />
            )}
            <span className={isFolder ? 'text-blue-400' : 'text-gray-300'}>{file.name}</span>
          </div>
          {isFolder && isExpanded && file.children && (
            <div>
              {renderFileTree(file.children, fullPath, level + 1)}
            </div>
          )}
        </div>
      );
    });
  };

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
            <span className="comment"># Click on a project to explore its structure</span>
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
        
        {!selectedProject ? (
          <div className="grid grid-cols-1 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="project-card group cursor-pointer hover:border-blue-400 transition-colors"
                onClick={() => setSelectedProject(project.title.toLowerCase().replace(/\s+/g, '-'))}
              >
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
                    <span className="text-gray-400 text-sm">Click to explore</span>
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
                    <a 
                      href={project.github} 
                      className="project-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={14} />
                    </a>
                    <a 
                      href={project.live} 
                      className="project-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {/* Back Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ChevronRight size={16} className="rotate-180" />
              Back to projects
            </button>

            {/* Project Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Folder size={20} className="text-blue-400" />
                <h3 className="text-xl font-bold text-white">{selectedProject}/</h3>
              </div>
              <div className="flex gap-2">
                <a 
                  href={projects[0].github} 
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={16} />
                  View on GitHub
                </a>
                <a 
                  href={projects[0].live} 
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Play size={16} />
                  Live Demo
                </a>
              </div>
            </div>

            {/* File Explorer */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="code-card">
                <div className="code-card-header">
                  <Folder size={16} />
                  <span>Project Structure</span>
                </div>
                <div className="code-card-body">
                  <div className="font-mono text-sm">
                    {renderFileTree(projectFiles[selectedProject as keyof typeof projectFiles] || [])}
                  </div>
                </div>
              </div>

              <div className="code-card">
                <div className="code-card-header">
                  <Code size={16} />
                  <span>Project Details</span>
                </div>
                <div className="code-card-body">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-semibold mb-2">Description</h4>
                      <p className="text-gray-300 text-sm">{projects[0].description}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {projects[0].tech.map((tech, index) => (
                          <span key={index} className="tech-badge text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Key Features</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Real-time event streaming with Apache Kafka</li>
                        <li>• Flask-based REST API</li>
                        <li>• Docker containerization</li>
                        <li>• Interactive web dashboard</li>
                        <li>• Confluent Cloud integration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsContent;
