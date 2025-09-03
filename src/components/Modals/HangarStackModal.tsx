import React from 'react';
import { X, Code, Database, Cloud, Globe, Shield, Github, ExternalLink } from 'lucide-react';

interface HangarStackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HangarStackModal: React.FC<HangarStackModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only close if clicking on the backdrop itself, not on the modal content
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={handleBackdropClick}
    >
      <div 
        className="bg-gray-800 border border-gray-600 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" 
        style={{backgroundColor: 'var(--bg-secondary)'}}
        onClick={(e) => e.stopPropagation()}
      >
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
            onClick={onClose}
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
  );
};

export default HangarStackModal;
