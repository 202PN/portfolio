import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, User, Code, Plane, MessageSquare, FileText, Folder, Settings, ChevronDown, Terminal, X, Database, Cloud, Globe, Shield, Briefcase } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('main.py');
  const [activeSection, setActiveSection] = useState('home');
  const [isDevMode, setIsDevMode] = useState(false);
  const [showHangarStackModal, setShowHangarStackModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tabs = [
    { id: 'main.py', name: 'main.py', icon: <Code size={14} /> },
    { id: 'aws_services.py', name: 'aws_services.py', icon: <User size={14} /> },
    { id: 'work_experience.py', name: 'work_experience.py', icon: <Briefcase size={14} /> },
    { id: 'projects.py', name: 'projects.py', icon: <Folder size={14} /> },
    { id: 'flask_app.py', name: 'flask_app.py', icon: <MessageSquare size={14} /> }
  ];

  const projects = [
    {
      title: "HangarStack",
      description: "Aircraft database with real-time event streaming using Apache Kafka and Confluent Cloud",
      tech: ["Python", "Flask", "Apache Kafka", "Confluent Cloud", "Docker", "JavaScript"],
      github: "#",
      live: "#"
    },
    {
      title: "Serverless Data Pipeline",
      description: "Event-driven data processing pipeline with AWS Lambda and DynamoDB",
      tech: ["Python", "AWS Lambda", "DynamoDB", "S3", "SNS", "SQS"],
      github: "#",
      live: "#"
    },
    {
      title: "Flask Microservices API",
      description: "Containerized microservices architecture with MySQL and Docker deployment",
      tech: ["Python", "Flask", "MySQL", "Docker", "GitLab CI/CD", "EC2"],
      github: "#",
      live: "#"
    }
  ];

  const experience = [
    {
      title: "Associate Software Engineer",
      company: "Southwest Airlines",
      period: "2022 - 2025",
      description: "Designed and implement serverless architectures using AWS Lambda and DynamoDB",
      tech: ["Python", "AWS Lambda", "DynamoDB", "S3", "CloudFormation", "Docker"]
    },
    {
      title: "Backend Developer",
      company: "Data Systems Corp",
      period: "2020 - 2022", 
      description: "Built Flask APIs and managed MySQL databases with Docker deployment",
      tech: ["Python", "Flask", "MySQL", "Docker", "GitLab", "EC2"]
    },
    {
      title: "Software Developer",
      company: "CloudTech Solutions",
      period: "2019 - 2020",
      description: "Developed event-driven systems using Kafka and AWS messaging services",
      tech: ["Python", "Apache Kafka", "SQS", "SNS", "CloudWatch", "IAM"]
    }
  ];

  const skills = {
    "Frontend": ["React", "TypeScript", "Vue.js", "Next.js", "Tailwind CSS"],
    "Backend": ["Node.js", "Python", "Django", "Express", "FastAPI"],
    "Database": ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
    "Tools": ["Docker", "AWS", "Git", "Jest", "Webpack"]
  };

  const renderCodeContent = () => {
    switch (activeTab) {
      case 'main.py':
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
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="variable">self</span><span className="operator">.</span><span className="property">name</span> <span className="operator">=</span> <span className="string">"Pete Nguyen"</span>
                    </div>
                  </div>
                  <div className="code-line">
                    <span className="line-number">5</span>
                    <div className="code-content">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="variable">self</span><span className="operator">.</span><span className="property">role</span> <span className="operator">=</span> <span className="string">"Software Engineer"</span>
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
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="variable">self</span><span className="operator">.</span><span className="property">years_experience</span> <span className="operator">=</span> <span className="number">5</span>
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
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">def</span> <span className="function">what_i_love_doing</span><span className="bracket">(</span><span className="variable">self</span><span className="bracket">):</span>
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
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"Solving complex problems with code"</span><span className="operator">,</span>
                    </div>
                  </div>
                  <div className="code-line">
                    <span className="line-number">12</span>
                    <div className="code-content">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"Building apps that people love to use"</span><span className="operator">,</span>
                    </div>
                  </div>
                  <div className="code-line">
                    <span className="line-number">13</span>
                    <div className="code-content">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"Working with cloud technologies"</span>
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
                  <a href="#" className="ide-button secondary flex items-center gap-2">
                    <Github size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        );

      case 'aws_services.py':
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

      case 'work_experience.py':
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
                <p className="text-gray-300">
                  My career journey through different companies and roles:
                </p>
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

            {/* Summary Card */}
            <div className="code-card">
              <div className="code-card-header">
                <User size={16} />
                <span>Career Growth</span>
              </div>
              <div className="code-card-body">
                <div className="code-block mb-4">
                  <div className="code-line">
                    <span className="line-number">{4 + experience.length * 6}</span>
                    <div className="code-content">
                      <span className="bracket">]</span>
                    </div>
                  </div>
                  <div className="code-line">
                    <span className="line-number">{5 + experience.length * 6}</span>
                    <div className="code-content">
                      <span className="comment"># Each role taught me something new and helped me grow!</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300">
                  Every position has been a stepping stone, building my expertise in cloud technologies, event-driven architectures, and scalable software solutions.
                </p>
              </div>
            </div>
          </div>
        );

      case 'projects.py':
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

      case 'flask_app.py':
        return (
          <div className="space-y-6">
            {/* Contact Info Card */}
            <div className="code-card">
              <div className="code-card-header">
                <Mail size={16} />
                <span>Let's Connect!</span>
              </div>
              <div className="code-card-body">
                <div className="code-block mb-4">
                  <div className="code-line">
                    <span className="line-number">1</span>
                    <div className="code-content">
                      <span className="comment"># I'd love to hear about your project ideas</span>
                    </div>
                  </div>
                  <div className="code-line">
                    <span className="line-number">2</span>
                    <div className="code-content">
                      <span className="keyword">contact_info</span> <span className="operator">=</span> <span className="bracket">{'{'}</span>
                    </div>
                  </div>
                  <div className="code-line">
                    <span className="line-number">3</span>
                    <div className="code-content">
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"email"</span><span className="operator">:</span> <span className="string">"petenguyen96@gmail.com"</span><span className="operator">,</span>
                    </div>
                  </div>
                  <div className="code-line">
                    <span className="line-number">4</span>
                    <div className="code-content">
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"linkedin"</span><span className="operator">:</span> <span className="string">"https://linkedin.com/in/petehnguyen"</span><span className="operator">,</span>
                    </div>
                  </div>
                  <div className="code-line">
                    <span className="line-number">5</span>
                    <div className="code-content">
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="string">"github"</span><span className="operator">:</span> <span className="string">"github.com/202PN"</span>
                    </div>
                  </div>
                  <div className="code-line">
                    <span className="line-number">6</span>
                    <div className="code-content">
                      <span className="bracket">{'}'}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  Ready to build together? Let's discuss new project ideas!
                </p>
                <div className="flex gap-3 flex-wrap">
                  <a href="mailto:petenguyen96@gmail.com" className="ide-button flex items-center gap-2">
                    <Mail size={16} />
                    Email Me
                  </a>
                  <a href="#" className="ide-button secondary flex items-center gap-2">
                    <Linkedin size={16} />
                    LinkedIn
                  </a>
                  <a href="#" className="ide-button secondary flex items-center gap-2">
                    <Github size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form Card */}
            <div className="code-card">
              <div className="code-card-header">
                <MessageSquare size={16} />
                <span>Send Me a Message</span>
              </div>
              <div className="code-card-body">
                <p className="text-gray-300 mb-4">
                  Have a project idea? Let's bring it to life!
                </p>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        className="ide-input"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="ide-input"
                        placeholder="petenguyen96@gmail.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      className="ide-textarea"
                      rows={4}
                      placeholder="Tell me about your project idea or what you'd like to build..."
                    ></textarea>
                  </div>
                  <button type="submit" className="ide-button">
                    Let's Start Building!
                  </button>
                </form>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Clean and Approachable */}
      <section className="hero-section min-h-screen flex items-center justify-center relative">
        <div className="hero-content max-w-4xl mx-auto px-6 text-center">
          <div className="hero-badge mb-6">
            <span className="hero-badge-text">Welcome to my portfolio</span>
          </div>
          
          <h1 className="hero-title mb-6">
            Hi, I'm <span className="hero-name">Pete Nguyen</span>
          </h1>
          
          <p className="hero-subtitle mb-8">
            A <strong>Software Engineer</strong> who builds amazing digital experiences
            and solves complex problems with clean code.
          </p>
          
          <div className="hero-technologies">
            <div className="hero-tech-category">
              <div className="hero-tech-title">Frontend</div>
              <div className="hero-tech-items">
                <span className="hero-tech-item">React</span>
                <span className="hero-tech-item">TypeScript</span>
                <span className="hero-tech-item">Tailwind</span>
              </div>
            </div>
            <div className="hero-tech-category">
              <div className="hero-tech-title">Backend</div>
              <div className="hero-tech-items">
                <span className="hero-tech-item">Node.js</span>
                <span className="hero-tech-item">Python</span>
                <span className="hero-tech-item">Flask</span>
              </div>
            </div>
            <div className="hero-tech-category">
              <div className="hero-tech-title">Cloud & Data</div>
              <div className="hero-tech-items">
                <span className="hero-tech-item">AWS</span>
                <span className="hero-tech-item">Kafka</span>
                <span className="hero-tech-item">Docker</span>
              </div>
            </div>
          </div>
          
          <div className="hero-actions mb-12">
            <button 
              className="hero-btn hero-btn-primary"
             onClick={() => document.getElementById('simple-portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Terminal size={20} />
              View My Work
            </button>
            <button className="hero-btn hero-btn-secondary"
              onClick={() => document.getElementById('lets-work-together')?.scrollIntoView({ behavior: 'smooth' })}
              >
              <Mail size={20} />
              Get In Touch
            </button>
          </div>
          
          <div className="hero-social">
            <a href="https://github.com/202PN" className="hero-social-link">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/petehnguyen/" className="hero-social-link">
              <Linkedin size={24} />
            </a>
            <a href="mailto:petenguyen96@gmail.com" className="hero-social-link">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="hero-scroll-indicator">
          <ChevronDown size={24} className="animate-bounce" />
          <span>Scroll to explore</span>
        </div>
        
        {/* Transition Effect */}
        <div className="hero-transition"></div>
      </section>

      {/* IDE Window */}
      <section id="ide-section" className={`ide-section ${!isDevMode ? 'hidden' : ''}`}>
        <div className="ide-intro">
          <div className="max-w-4xl mx-auto px-6 py-12 text-center">
            {/* DEV MODE Toggle */}
            <div className="flex justify-center mb-8">
              <div className="dev-mode-toggle">
                <label className="toggle-label">
                  <input
                    type="checkbox"
                    checked={isDevMode}
                    onChange={(e) => setIsDevMode(e.target.checked)}
                    className="toggle-input"
                  />
                  <span className="toggle-slider">
                    <span className="toggle-text">
                      {isDevMode ? 'DEV MODE' : 'SIMPLE'}
                    </span>
                  </span>
                </label>
              </div>
            </div>
            
            <h2 className="ide-intro-title">Let's dive into the code</h2>
            <p className="ide-intro-subtitle">
              Explore my work through the lens of a developer.
            </p>
          </div>
        </div>
        
      <div className="ide-window" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Title Bar */}
        <div className="ide-titlebar">
          <div className="ide-titlebar-buttons">
            <div className="ide-titlebar-button close"></div>
            <div className="ide-titlebar-button minimize"></div>
            <div className="ide-titlebar-button maximize"></div>
          </div>
          <div className="ide-filename">portfolio-website</div>
        </div>

        {/* Navigation Tabs */}
        <div className="ide-nav">
          <div className="ide-nav-tabs">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`ide-nav-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                <span>{tab.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1" style={{ display: 'flex', flex: '1' }}>
          {/* Sidebar */}
          <div className="ide-sidebar hidden lg:block">
            <div className="ide-sidebar-section">
              <div className="ide-sidebar-title">Explorer</div>
              <div className="space-y-1">
                {tabs.map((tab) => (
                  <div
                    key={tab.id}
                    className={`ide-sidebar-item flex items-center gap-2 ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.icon}
                    <span>{tab.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="ide-sidebar-section">
              <div className="ide-sidebar-title">Quick Actions</div>
              <div className="space-y-1">
                <div className="ide-sidebar-item flex items-center gap-2">
                  <Github size={14} />
                  <span>View GitHub</span>
                </div>
                <div className="ide-sidebar-item flex items-center gap-2">
                  <Mail size={14} />
                  <span>Send Email</span>
                </div>
                <div className="ide-sidebar-item flex items-center gap-2">
                  <FileText size={14} />
                  <span>Download Resume</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="ide-content flex-1" style={{ flex: '1', padding: '20px', overflowY: 'auto' }}>
            {renderCodeContent()}

            {/* Interactive Elements */}
            <div className="mt-8 space-y-6">
              {activeTab === 'main.py' && (
                <div className="code-card">
                  <div className="code-card-header">
                    <Code size={16} />
                    <span>Interactive Demo</span>
                  </div>
                  <div className="code-card-body">
                    <p className="text-gray-300 mb-4">
                      Ready to collaborate? Let's build something amazing together!
                    </p>
                    <div className="flex gap-3 flex-wrap">
                      <button className="ide-button">
                        View Projects
                      </button>
                      <button className="ide-button secondary">
                        Download Resume
                      </button>
                      <a href="#" className="ide-button secondary flex items-center gap-2">
                        <Github size={16} />
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'flask_app.py' && (
                <div className="code-card">
                  <div className="code-card-header">
                    <MessageSquare size={16} />
                    <span>Get In Touch</span>
                  </div>
                  <div className="code-card-body">
                    <p className="text-gray-300 mb-4">
                      Have a project idea? Let's chat about how we can bring it to life!
                    </p>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Name
                          </label>
                          <input
                            type="text"
                            className="ide-input"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            className="ide-input"
                            placeholder="petenguyen96@gmail.com"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Message
                        </label>
                        <textarea
                          className="ide-input"
                          rows={4}
                          placeholder="Tell me about your project idea or what you'd like to build..."
                        ></textarea>
                      </div>
                      <button type="submit" className="ide-button">
                        Let's Start Building!
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="ide-statusbar">
          <div className="flex items-center gap-4">
            <span>UTF-8</span>
            <span>Python 3.9</span>
            <span>AWS SDK</span>
          </div>
          <div className="flex items-center gap-4">
            <span>🐍 Python</span>
            <span>☁️ AWS Connected</span>
          </div>
        </div>
      </div>
      </section>

      {/* Non-Technical Portfolio Section */}
      <section id="simple-portfolio" className={`simple-portfolio ${isDevMode ? 'hidden' : ''}`}>
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Toggle for Simple Mode */}
          <div className="flex justify-center mb-12">
            <div className="dev-mode-toggle">
              <label className="toggle-label">
                <input
                  type="checkbox"
                  checked={isDevMode}
                  onChange={(e) => setIsDevMode(e.target.checked)}
                  className="toggle-input"
                />
                <span className="toggle-slider">
                  <span className="toggle-text">
                    {isDevMode ? 'ON' : 'Turn on Dev Mode'}
                  </span>
                </span>
              </label>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">My Professional Journey</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Software Engineer with 3+ years of experience building scalable applications and cloud solutions. 
              I specialize in creating systems that handle millions of daily transactions and help businesses operate more efficiently.
            </p>
          </div>

          {/* Current Role */}
          <div className="mb-16">
            <div className="portfolio-card">
              <div className="portfolio-card-header">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Plane className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Most Recent Role</h3>
                    <p className="text-gray-400">Where I most recently worked</p>
                  </div>
                </div>
              </div>
              <div className="portfolio-card-body">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Associate Software Engineer</h4>
                  <p className="text-blue-400 font-medium mb-2">Southwest Airlines • Dallas, Texas</p>
                  <p className="text-gray-400 text-sm mb-4">2022 - 2025</p>
                </div>
                <div className="space-y-3 text-gray-300">
                  <p>• Built systems that process <strong>10 million events daily</strong> for flight operations</p>
                  <p>• Developed real-time reservation systems handling <strong>millions of daily transactions</strong></p>
                  <p>• Led <strong>25 production deployments</strong> with zero downtime</p>
                  <p>• Reduced engineer onboarding time by <strong>50%</strong> through better documentation</p>
                  <p>• Migrated legacy systems to modern cloud architecture</p>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Project */}
          <div className="mb-16">
            <div className="portfolio-card">
              <div className="portfolio-card-header">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <Code className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Featured Project</h3>
                    <p className="text-gray-400">My latest work</p>
                  </div>
                </div>
              </div>
              <div className="portfolio-card-body">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-white mb-2">HangarStack - Aircraft Database</h4>
                  <p className="text-green-400 font-medium mb-4">Real-Time Event Streaming Application</p>
                </div>
                <p className="text-gray-300 mb-4">
                  Built a web application that tracks aircraft data in real-time. The system processes live events 
                  and updates information instantly, similar to how flight tracking websites work. Used modern 
                  containerization and deployment practices for reliable operation.
                </p>
                <div className="flex gap-3">
                  <button 
                    onClick={() => setShowHangarStackModal(true)}
                    className="portfolio-btn"
                  >
                    <ExternalLink size={16} />
                    View Details
                  </button>
                  <a href="#" className="portfolio-btn secondary">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a href="https://github.com/202PN/aircraftDB" className="portfolio-btn secondary">
                    <Github size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Overview */}
          <div className="mb-16">
            <div className="portfolio-card">
              <div className="portfolio-card-header">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <Settings className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Technical Expertise</h3>
                    <p className="text-gray-400">What I work with</p>
                  </div>
                </div>
              </div>
              <div className="portfolio-card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="skill-category">
                    <h4 className="skill-category-title">Cloud & Infrastructure</h4>
                    <p className="skill-category-desc">Building scalable systems in the cloud</p>
                    <div className="skill-tags">
                      <span className="skill-tag">AWS</span>
                      <span className="skill-tag">Docker</span>
                      <span className="skill-tag">CloudFormation</span>
                    </div>
                  </div>
                  <div className="skill-category">
                    <h4 className="skill-category-title">Programming</h4>
                    <p className="skill-category-desc">Languages and frameworks I use daily</p>
                    <div className="skill-tags">
                      <span className="skill-tag">Python</span>
                      <span className="skill-tag">Flask</span>
                      <span className="skill-tag">SQL</span>
                    </div>
                  </div>
                  <div className="skill-category">
                    <h4 className="skill-category-title">Data & Messaging</h4>
                    <p className="skill-category-desc">Real-time data processing systems</p>
                    <div className="skill-tags">
                      <span className="skill-tag">Apache Kafka</span>
                      <span className="skill-tag">DynamoDB</span>
                      <span className="skill-tag">MySQL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Background & Education */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Military Background */}
            <div className="portfolio-card">
              <div className="portfolio-card-header">
                <div className="flex items-center gap-3">
                  <div className="w-20 h-20 flex items-center justify-center">
                    <img
                      src="src/assets/us-army-logo.png"
                      alt="U.S. Army Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Military Service</h3>
                    <p className="text-gray-400">Leadership background</p>
                  </div>
                </div>
              </div>
              <div className="portfolio-card-body">
                <h4 className="text-white font-semibold mb-2">Army Radiology Technologist Sergeant</h4>
                <p className="text-yellow-400 font-medium mb-2">U.S. Army • 2016-2022</p>
                <div className="space-y-2 text-gray-300 text-sm">
                  <p>🏆 <strong>2021 Atlantic Region Soldier of the Year</strong></p>
                  <p>🏆 <strong>2020 Best Leader: Soldier of the Year</strong></p>
                  <p>👥 Led team of <strong>15 personnel</strong></p>
                  <p>🏥 Served <strong>94,000 beneficiaries</strong></p>
                  <p>💼 Managed vendor relationships and supply strategy</p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="portfolio-card">
              <div className="portfolio-card-header">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center">
                    <FileText className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Education & Certifications</h3>
                    <p className="text-gray-400">Continuous learning</p>
                  </div>
                </div>
              </div>
              <div className="portfolio-card-body">
                <div className="space-y-3">
                  <div>
                    <h4 className="text-white font-semibold">B.S. Cybersecurity</h4>
                    <p className="text-yellow-400 text-sm">Purdue Global University • 2025</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Microsoft Software Academy</h4>
                    <p className="text-yellow-400 text-sm">Cloud Application Development • 2022</p>
                  </div>
                  <div className="pt-2">
                    <p className="text-gray-400 text-sm mb-2">Certifications:</p>
                    <div className="skill-tags">
                      <span className="skill-tag">Certified ScrumMaster</span>
                      <span className="skill-tag">Microsoft MTA</span>
                      <span className="skill-tag">AWS Developer (In Progress)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <section id="lets-work-together">
          <div className="portfolio-card">
            <div className="portfolio-card-header">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <MessageSquare className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Let's Work Together</h3>
                  <p className="text-gray-400">Ready to build something amazing?</p>
                </div>
              </div>
            </div>
            <div className="portfolio-card-body">
              <p className="text-gray-300 mb-6">
                I'm always interested in new opportunities and challenging projects. Whether you need help with 
                cloud architecture, real-time systems, or building scalable applications, let's discuss how I can help.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="mailto:pete.nguyen@example.com" className="portfolio-btn">
                  <Mail size={16} />
                  Email Me
                </a>
                <a href="#" className="portfolio-btn secondary">
                  <Linkedin size={16} />
                  LinkedIn
                </a>
                <button className="portfolio-btn secondary">
                  <FileText size={16} />
                  Download Resume
                </button>
              </div>
            </div>
          </div>
          </section>
        </div>
      </section>

      {/* HangarStack Project Modal */}
      {showHangarStackModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 border border-gray-600 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" style={{backgroundColor: 'var(--bg-secondary)'}}>
            {/* Modal Header */}
            <div className="sticky top-0 border-b border-gray-600 p-6 flex items-center justify-between" style={{backgroundColor: 'var(--bg-tertiary)', borderColor: 'var(--border)'}}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{backgroundColor: 'var(--chrome)', color: '#000000'}}>
                  <Code size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold" style={{color: 'var(--text-primary)'}}>HangarStack</h2>
                  <p style={{color: 'var(--chrome)'}}>Aircraft Database with Real-Time Event Streaming</p>
                </div>
              </div>
              <button
                onClick={() => setShowHangarStackModal(false)}
                className="transition-all p-2 rounded-lg hover:bg-gray-700" style={{color: 'var(--text-secondary)'}}
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-8">
              {/* Project Overview */}
              <div>
                <h3 className="text-xl font-bold mb-4" style={{color: 'var(--text-primary)'}}>Overview</h3>
                <p className="leading-relaxed" style={{color: 'var(--text-secondary)'}}>
                  Aircraft database with real-time event streaming. Processes live events and updates information instantly, 
                  similar to flight tracking websites. Uses modern containerization and deployment practices.
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-xl font-bold mb-4" style={{color: 'var(--text-primary)'}}>Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: 'var(--chrome)', color: '#000000'}}>
                      <Database size={16} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1" style={{color: 'var(--text-primary)'}}>Real-Time Streaming</h4>
                      <p className="text-sm" style={{color: 'var(--text-secondary)'}}>Kafka integration for live updates</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: 'var(--chrome)', color: '#000000'}}>
                      <Cloud size={16} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1" style={{color: 'var(--text-primary)'}}>Cloud-Native</h4>
                      <p className="text-sm" style={{color: 'var(--text-secondary)'}}>Docker containerization</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: 'var(--chrome)', color: '#000000'}}>
                      <Globe size={16} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1" style={{color: 'var(--text-primary)'}}>Web Interface</h4>
                      <p className="text-sm" style={{color: 'var(--text-secondary)'}}>Flask-based responsive design</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: 'var(--chrome)', color: '#000000'}}>
                      <Shield size={16} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1" style={{color: 'var(--text-primary)'}}>Scalable Data</h4>
                      <p className="text-sm" style={{color: 'var(--text-secondary)'}}>Efficient processing & storage</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technology Stack */}
              <div>
                <h3 className="text-xl font-bold mb-4" style={{color: 'var(--text-primary)'}}>Tech Stack</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2" style={{backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border)'}}>
                      <span className="text-xs font-bold" style={{color: 'var(--text-secondary)'}}>IMG</span>
                    </div>
                    <span className="text-sm" style={{color: 'var(--text-secondary)'}}>Python</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2" style={{backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border)'}}>
                      <span className="text-xs font-bold" style={{color: 'var(--text-secondary)'}}>IMG</span>
                    </div>
                    <span className="text-sm" style={{color: 'var(--text-secondary)'}}>Flask</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2" style={{backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border)'}}>
                      <span className="text-xs font-bold" style={{color: 'var(--text-secondary)'}}>IMG</span>
                    </div>
                    <span className="text-sm" style={{color: 'var(--text-secondary)'}}>Kafka</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2" style={{backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border)'}}>
                      <span className="text-xs font-bold" style={{color: 'var(--text-secondary)'}}>IMG</span>
                    </div>
                    <span className="text-sm" style={{color: 'var(--text-secondary)'}}>Docker</span>
                  </div>
                </div>
              </div>

              {/* Project Links */}
              <div className="flex gap-4 pt-4">
                <a 
                  href="https://github.com/202PN/aircraftDB" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all hover:transform hover:-translate-y-1"
                  style={{
                    backgroundColor: 'var(--chrome)',
                    color: '#000000',
                    border: '1px solid var(--chrome-light)'
                  }}
                >
                  <Github size={16} />
                  GitHub
                </a>
                <a 
                  href="#contact" 
                  className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all hover:transform hover:-translate-y-1"
                  style={{
                    backgroundColor: 'transparent',
                    color: 'var(--text-primary)',
                    border: '1px solid var(--border)'
                  }}
                >
                  <ExternalLink size={16} />
                  Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;