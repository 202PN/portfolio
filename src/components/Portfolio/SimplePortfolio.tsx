import React, { useState } from 'react';
import { Plane, Code, Settings, FileText, MessageSquare, ExternalLink, Github, Mail, Linkedin, ChevronLeft, ChevronRight } from 'lucide-react';
import { PortfolioCard } from './index';
import { experience, projects, skills } from '../../data';
import { SimplePortfolioProps } from '../../types';

const SimplePortfolio: React.FC<SimplePortfolioProps> = ({ 
  isDevMode, 
  onToggleDevMode, 
  onShowHangarStackModal 
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentEducationSlide, setCurrentEducationSlide] = useState(0);

  const carouselItems = [
    {
      icon: (
        <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center">
          <FileText className="text-white" size={24} />
        </div>
      ),
      title: "Education & Certifications",
      subtitle: "Continuous learning",
      content: (
        <div className="space-y-3 text-center">
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
            <div className="skill-tags flex justify-center gap-2">
              <span className="skill-tag">Certified ScrumMaster</span>
              <span className="skill-tag">Microsoft MTA</span>
              <span className="skill-tag">AWS Developer (In Progress)</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: (
        <div className="w-20 h-20 flex items-center justify-center">
          <img
            src="src/assets/icons/us-army-logo.png"
            alt="U.S. Army Logo"
            className="w-full h-full object-contain"
          />
        </div>
      ),
      title: "Military Service",
      subtitle: "Leadership background",
      content: (
        <div>
          <h4 className="text-white font-semibold mb-2">Army Radiology Technologist Sergeant</h4>
          <p className="text-yellow-400 font-medium mb-2">U.S. Army • 2016-2022</p>
          
          {/* Military Image */}
          <div className="mb-4">
            <img 
              src="src/assets/armyPic.jpeg" 
              alt="U.S. Army Service" 
              className="w-full h-48 object-cover rounded-lg border border-gray-600"
            />
          </div>
          
          <div className="space-y-2 text-gray-300 text-sm">
            <p>🏆 <strong>2021 Atlantic Region Soldier of the Year</strong></p>
            <p>🏆 <strong>2020 Best Leader: Soldier of the Year</strong></p>
            <p>👥 Led team of <strong>15 personnel</strong></p>
            <p>🏥 Served <strong>94,000 beneficiaries</strong></p>
            <p>💼 Managed vendor relationships and supply strategy</p>
          </div>
        </div>
      ),
    },
  ];

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

        {/* Professional Summary */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">My Professional Journey</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Backend Software Engineer with 3+ years of experience building scalable applications and cloud solutions. 
          </p>
        </div>

        {/* Current Role */}
        <div className="mb-16">
          <PortfolioCard
            icon={
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <Plane className="text-white" size={24} />
              </div>
            }
            title="Most Recent Role"
            subtitle="Where I most recently worked"
          >
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
          </PortfolioCard>
        </div>

        {/* Featured Project */}
        <div className="mb-16">
          <PortfolioCard
            icon={
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                <Code className="text-white" size={24} />
              </div>
            }
            title="Featured Project"
            subtitle="My latest work"
          >
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-white mb-2">HangarStack - Aircraft Database</h4>
              <p className="text-green-400 font-medium mb-4">Real-Time Event Streaming Application</p>
              
              {/* Project Image */}
              <div className="mb-4">
                <img 
                  src="src/assets/hangarstack.png" 
                  alt="HangarStack Aircraft Database Application" 
                  className="w-full h-48 object-cover rounded-lg border border-gray-600"
                />
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

        {/* Skills Overview */}
        <div className="mb-16">
          <PortfolioCard
            icon={
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                <Settings className="text-white" size={24} />
              </div>
            }
            title="Technical Expertise"
            subtitle="What I work with"
          >
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
          </PortfolioCard>
        </div>

        {/* Education & Military Carousel */}
        <div className="mb-16">
          {/* Navigation Arrows - Above Carousel */}
          <div className="flex justify-end mb-4 gap-2">
            <button
              onClick={() => setCurrentEducationSlide((prev) => (prev - 1 + 2) % 2)}
              className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Previous slide"
            >
              <ChevronLeft size={16} />
            </button>
            
            <button
              onClick={() => setCurrentEducationSlide((prev) => (prev + 1) % 2)}
              className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
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
                      <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center">
                        <FileText className="text-white" size={24} />
                      </div>
                    }
                    title="Education & Certifications"
                    subtitle="Continuous learning"
                  >
                    <div className="space-y-3 text-center">
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
                          src="src/assets/icons/us-army-logo.png"
                          alt="U.S. Army Logo"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    }
                    title="Military Service"
                    subtitle="Leadership background"
                  >
                    <h4 className="text-white font-semibold mb-2">Army Radiology Technologist Sergeant</h4>
                    <p className="text-yellow-400 font-medium mb-2">U.S. Army • 2016-2022</p>
                    <div className="space-y-2 text-gray-300 text-sm">
                      <p>🏆 <strong>2021 Atlantic Region Soldier of the Year</strong></p>
                      <p>🏆 <strong>2020 Best Leader: Soldier of the Year</strong></p>
                      <p>👥 Led team of <strong>15 personnel</strong></p>
                      <p>🏥 Served <strong>94,000 beneficiaries</strong></p>
                      <p>💼 Managed vendor relationships and supply strategy</p>
                    </div>
                    <div className="pt-4 mb-4">
                      <img 
                        src="src/assets/armyPic.jpeg" 
                        alt="U.S. Army Service" 
                        className="w-full h-80 rounded-lg object-cover [object-position:center_25%]"
                      />
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
                    ? 'bg-blue-500 scale-110' 
                    : 'bg-gray-400 hover:bg-gray-300'
                }`}
                aria-label="Go to education slide"
              />
              <button
                onClick={() => setCurrentEducationSlide(1)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  currentEducationSlide === 1 
                    ? 'bg-blue-500 scale-110' 
                    : 'bg-gray-400 hover:bg-gray-300'
                }`}
                aria-label="Go to military slide"
              />
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <section id="lets-work-together">
          <PortfolioCard
            icon={
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <MessageSquare className="text-white" size={24} />
              </div>
            }
            title="Let's Work Together"
            subtitle="Ready to build something amazing?"
          >
            <p className="text-gray-300 mb-6">
              I'm always interested in new opportunities and challenging projects. Whether you need help with 
              cloud architecture, real-time systems, or building scalable applications, let's discuss how I can help.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="mailto:pete.nguyen@example.com" className="portfolio-btn">
                <Mail size={16} />
                Email Me
              </a>
              <a href="https://linkedin.com/in/petehnguyen" target="_blank" rel="noopener noreferrer" className="portfolio-btn secondary">
                <Linkedin size={16} />
                LinkedIn
              </a>
              <button className="portfolio-btn secondary">
                <FileText size={16} />
                Download Resume
              </button>
            </div>
          </PortfolioCard>
        </section>
      </div>
    </section>
  );
};

export default SimplePortfolio;
