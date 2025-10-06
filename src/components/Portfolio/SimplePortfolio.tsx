import React, { useState } from 'react';
import { Plane, Code, Settings, FileText, ExternalLink, Github, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import { PortfolioCard } from './index';
import { SimplePortfolioProps } from '../../types';

const SimplePortfolio: React.FC<SimplePortfolioProps> = ({ 
  isDevMode, 
  onToggleDevMode, 
  onShowHangarStackModal 
}) => {
  const [currentEducationSlide, setCurrentEducationSlide] = useState(0);
  const [isRoleExpanded, setIsRoleExpanded] = useState(false);
  const [isSkillsExpanded, setIsSkillsExpanded] = useState(false);

  return (
    <section id="simple-portfolio" className={`simple-portfolio ${isDevMode ? 'hidden' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Toggle for Simple Mode */}
        <div className="flex justify-center mb-12">
          <div className="dev-mode-toggle">
            <label className="toggle-label">
              <input
                type="checkbox"
                checked={isDevMode}
                onChange={(e) => onToggleDevMode(e.target.checked)}
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

        {/* Current Role */}
        <div className="mb-16">
          <PortfolioCard
            icon={
              <div className="w-12 h-12 bg-navy-600 rounded-lg flex items-center justify-center">
                <Plane className="text-white" size={24} />
              </div>
            }
            title="Most Recent Role"
            subtitle="Where I most recently worked"
          >
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Associate Software Engineer</h4>
                  <p className="text-navy-300 font-medium mb-2">Southwest Airlines • Dallas, Texas</p>
                  <p className="text-gray-300 text-sm">2022 - 2025</p>
                </div>
                <button
                  onClick={() => setIsRoleExpanded(!isRoleExpanded)}
                  className="flex items-center gap-2 text-navy-300 hover:text-navy-200 transition-colors"
                >
                  <span className="text-sm font-medium">
                    {isRoleExpanded ? 'Show Less' : 'Show Details'}
                  </span>
                  {isRoleExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
              </div>
            </div>
            {isRoleExpanded && (
              <div className="space-y-3 text-gray-300 mt-4 pt-4 border-t border-gray-700">
                <p>• Developed and maintained <strong>15+ production-ready microservices</strong> with AWS Lambda, DynamoDB, API Gateway, and Step Functions, powering millions of daily reservation transactions with high availability</p>
                <p>• Refactored and modernized legacy business logic into scalable, Python-based modular services, improving maintainability and enabling faster iteration</p>
                <p>• Built and deployed serverless data pipelines for transformation, event generation, and rule processing using Python, Kafka, and AWS native services</p>
                <p>• Migrated on-premises event-driven systems to AWS, leveraging Apache Kafka and serverless architectures to improve scalability and reliability</p>
                <p>• Implemented GitLab CI/CD pipelines with automated builds, testing, and deployments using Infrastructure as Code, enabling safe, repeatable, and zero-downtime releases</p>
                <p>• Designed monitoring and observability solutions with dashboards, alerting, and health checks, improving service reliability and reducing incident resolution times</p>
                <p>• Wrote technical documentation and runbooks to streamline onboarding and simplify operational support</p>
                <p>• Collaborated in Agile Scrum teams, participating in sprint planning, code reviews, and retrospectives to deliver high-quality features consistently</p>
              </div>
            )}
          </PortfolioCard>
        </div>

        {/* Skills Overview */}
        <div className="mb-16">
          <PortfolioCard
            icon={
              <div className="w-12 h-12 bg-navy-600 rounded-lg flex items-center justify-center">
                <Settings className="text-white" size={24} />
              </div>
            }
            title="Technical Expertise"
            subtitle="What I work with"
          >
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Core Technologies</h4>
                  <p className="text-gray-300 text-sm">Click to explore my full tech stack</p>
                </div>
                <button
                  onClick={() => setIsSkillsExpanded(!isSkillsExpanded)}
                  className="flex items-center gap-2 text-navy-300 hover:text-navy-200 transition-colors"
                >
                  <span className="text-sm font-medium">
                    {isSkillsExpanded ? 'Show Less' : 'Show All'}
                  </span>
                  {isSkillsExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
              </div>
            </div>
            
            {/* Core Technologies - Always Visible */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-3">
                <span className="tech-pill primary">Python</span>
                <span className="tech-pill primary">C#</span>
                <span className="tech-pill primary">AWS</span>
                <span className="tech-pill primary">Kafka</span>
                <span className="tech-pill primary">Docker</span>
                <span className="tech-pill primary">SQL</span>
                <span className="tech-pill primary">TypeScript</span>
                <span className="tech-pill primary">Kubernetes</span>
              </div>
            </div>

            {/* Full Tech Stack - Collapsible */}
            {isSkillsExpanded && (
              <div className="space-y-6 mt-6 pt-6 border-t border-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="skill-category">
                    <h4 className="skill-category-title">Programming Languages</h4>
                    <p className="skill-category-desc">Languages I code in daily</p>
                    <div className="skill-tags">
                      <span className="skill-tag">Python</span>
                      <span className="skill-tag">TypeScript</span>
                      <span className="skill-tag">SQL</span>
                      <span className="skill-tag">JavaScript</span>
                      <span className="skill-tag">C#</span>
                      <span className="skill-tag">Bash</span>
                      <span className="skill-tag">HTML/CSS</span>
                    </div>
                  </div>
                  <div className="skill-category">
                    <h4 className="skill-category-title">Cloud Platforms & Services</h4>
                    <p className="skill-category-desc">Cloud technologies and services</p>
                    <div className="skill-tags">
                      <span className="skill-tag">AWS Lambda</span>
                      <span className="skill-tag">DynamoDB</span>
                      <span className="skill-tag">S3</span>
                      <span className="skill-tag">EC2</span>
                      <span className="skill-tag">API Gateway</span>
                      <span className="skill-tag">Step Functions</span>
                      <span className="skill-tag">SNS</span>
                      <span className="skill-tag">SQS</span>
                      <span className="skill-tag">CloudFormation</span>
                      <span className="skill-tag">CloudWatch</span>
                      <span className="skill-tag">IAM</span>
                      <span className="skill-tag">Azure</span>
                    </div>
                  </div>
                  <div className="skill-category">
                    <h4 className="skill-category-title">Frameworks & Architectures</h4>
                    <p className="skill-category-desc">Frameworks and architectural patterns</p>
                    <div className="skill-tags">
                      <span className="skill-tag">Flask</span>
                      <span className="skill-tag">FastAPI</span>
                      <span className="skill-tag">ASP.NET</span>
                      <span className="skill-tag">REST APIs</span>
                      <span className="skill-tag">Microservices</span>
                    </div>
                  </div>
                  <div className="skill-category">
                    <h4 className="skill-category-title">Databases</h4>
                    <p className="skill-category-desc">Data storage and management</p>
                    <div className="skill-tags">
                      <span className="skill-tag">PostgreSQL</span>
                      <span className="skill-tag">MySQL</span>
                      <span className="skill-tag">DynamoDB</span>
                      <span className="skill-tag">DocumentDB</span>
                    </div>
                  </div>
                  <div className="skill-category">
                    <h4 className="skill-category-title">Data & Streaming</h4>
                    <p className="skill-category-desc">Real-time data processing</p>
                    <div className="skill-tags">
                      <span className="skill-tag">Apache Kafka</span>
                      <span className="skill-tag">Confluent Cloud</span>
                      <span className="skill-tag">ETL Pipelines</span>
                      <span className="skill-tag">Real-Time Processing</span>
                      <span className="skill-tag">Event-Driven Architecture</span>
                    </div>
                  </div>
                  <div className="skill-category">
                    <h4 className="skill-category-title">DevOps & Infrastructure</h4>
                    <p className="skill-category-desc">Infrastructure and deployment</p>
                    <div className="skill-tags">
                      <span className="skill-tag">Docker</span>
                      <span className="skill-tag">Kubernetes</span>
                      <span className="skill-tag">GitLab CI/CD</span>
                      <span className="skill-tag">Terraform</span>
                      <span className="skill-tag">Infrastructure as Code</span>
                    </div>
                  </div>
                  <div className="skill-category">
                    <h4 className="skill-category-title">Monitoring & Observability</h4>
                    <p className="skill-category-desc">System monitoring and performance</p>
                    <div className="skill-tags">
                      <span className="skill-tag">CloudWatch</span>
                      <span className="skill-tag">Prometheus</span>
                      <span className="skill-tag">Grafana</span>
                      <span className="skill-tag">Application Performance Monitoring</span>
                    </div>
                  </div>
                  <div className="skill-category">
                    <h4 className="skill-category-title">Collaboration & Best Practices</h4>
                    <p className="skill-category-desc">Development practices and teamwork</p>
                    <div className="skill-tags">
                      <span className="skill-tag">Code Reviews</span>
                      <span className="skill-tag">Agile Teamwork</span>
                      <span className="skill-tag">Debugging</span>
                      <span className="skill-tag">Performance Optimization</span>
                      <span className="skill-tag">Security Best Practices</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </PortfolioCard>
        </div>

        {/* Featured Project */}
        <div className="mb-16">
          <PortfolioCard
            icon={
              <div className="w-12 h-12 bg-navy-600 rounded-lg flex items-center justify-center">
                <Code className="text-white" size={24} />
              </div>
            }
            title="Featured Project"
            subtitle="My latest work"
          >
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-white mb-2">HangarStack - Aircraft Database</h4>
              <p className="text-navy-300 font-medium mb-4">Real-Time Event Streaming Application</p>
              
              {/* Project Image */}
              <div className="mb-4">
                <div 
                  onClick={onShowHangarStackModal}
                  className="cursor-pointer hover:opacity-90 transition-opacity duration-200"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onShowHangarStackModal();
                    }
                  }}
                  aria-label="View HangarStack project details"
                >
                  <img 
                    src="./hangarstack.png" 
                    alt="HangarStack Aircraft Database Application" 
                    className="w-full h-[40vh] object-cover rounded-lg border border-gray-600"
                  />
                </div>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Built a web application that tracks aircraft data in real-time. The system processes live events 
              and updates information instantly, similar to how flight tracking websites work. Used modern 
              containerization and deployment practices for reliable operation.
            </p>
            <div className="flex gap-3">
              <button 
                onClick={onShowHangarStackModal}
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
          </PortfolioCard>
        </div>

        {/* Education & Military Carousel */}
        <div className="mb-16">
          {/* Navigation Arrows - Above Carousel */}
          <div className="flex justify-end mb-4 gap-2">
            <button
              onClick={() => setCurrentEducationSlide((prev) => (prev - 1 + 2) % 2)}
              className="bg-navy-600 hover:bg-navy-500 text-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Previous slide"
            >
              <ChevronLeft size={16} />
            </button>
            
            <button
              onClick={() => setCurrentEducationSlide((prev) => (prev + 1) % 2)}
              className="bg-navy-600 hover:bg-navy-500 text-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Next slide"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-x-hidden pt-8">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentEducationSlide * 100}%)` }}
              >
                {/* Education Card */}
                <div className="w-full flex-shrink-0">
                  <PortfolioCard
                    icon={
                      <div className="w-12 h-12 bg-navy-600 rounded-lg flex items-center justify-center">
                        <FileText className="text-white" size={24} />
                      </div>
                    }
                    title="Education & Certifications"
                    subtitle="Continuous learning"
                  >
                    <div className="space-y-3 text-center">
                      <div>
                        <h4 className="text-white font-semibold">B.S. Cybersecurity</h4>
                        <p className="text-navy-300 text-sm">Purdue Global University • 2025</p>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Microsoft Software Academy</h4>
                        <p className="text-navy-300 text-sm">Cloud Application Development • 2022</p>
                      </div>
                      <div className="pt-2">
                        <p className="text-gray-300 text-sm mb-2">Certifications:</p>
                        <div className="skill-tags flex justify-center gap-2">
                          <span className="skill-tag">Certified ScrumMaster</span>
                          <span className="skill-tag">Microsoft MTA</span>
                          <span className="skill-tag">AWS Developer (In Progress)</span>
                        </div>
                      </div>
                    </div>
                  </PortfolioCard>
                </div>

                {/* Military Card */}
                <div className="w-full flex-shrink-0">
                  <PortfolioCard
                    icon={
                      <div className="w-20 h-20 flex items-center justify-center">
                        <img
                          src="./us-army-logo.png"
                          alt="U.S. Army Logo"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    }
                    title="Military Service"
                    subtitle="Leadership background"
                  >
                    <h4 className="text-white font-semibold mb-2 text-center">Army Radiology Technologist Sergeant</h4>
                    <p className="text-navy-300 font-medium mb-2 text-center">U.S. Army • 2016-2022</p>
                    <div className="space-y-2 text-gray-300 text-sm text-center">
                      <p>🏆 <strong>2021 Atlantic Region Soldier of the Year</strong></p>
                      <p>🏆 <strong>2020 Best Leader: Soldier of the Year</strong></p>
                    </div>
                  </PortfolioCard>
                </div>
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-6 gap-2">
              <button
                onClick={() => setCurrentEducationSlide(0)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  currentEducationSlide === 0 
                    ? 'bg-navy-500 scale-110' 
                    : 'bg-gray-400 hover:bg-gray-300'
                }`}
                aria-label="Go to education slide"
              />
              <button
                onClick={() => setCurrentEducationSlide(1)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  currentEducationSlide === 1 
                    ? 'bg-navy-500 scale-110' 
                    : 'bg-gray-400 hover:bg-gray-300'
                }`}
                aria-label="Go to military slide"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimplePortfolio;
