import React from 'react';
import { Mail, MessageSquare, Github, Linkedin } from 'lucide-react';

const ContactContent: React.FC = () => {
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
};

export default ContactContent;
