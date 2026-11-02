import React, { useState } from 'react';
import { Mail, MessageSquare, Github, Linkedin } from 'lucide-react';
import { CONFIG } from '../../../config';
import CodeBlock from './CodeBlock';
import { indent } from './codeFormat';

const ContactContent: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  // No backend: hand the drafted message to the visitor's email client
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Hello from ${name || 'your portfolio'}`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${CONFIG.CONTACT.EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="space-y-6">
      {/* Contact Info Card */}
      <div className="code-card">
        <div className="code-card-header">
          <Mail size={16} />
          <span>Let's connect</span>
        </div>
        <div className="code-card-body">
          <CodeBlock
            className="mb-4"
            lines={[
              <span className="comment"># The best ways to reach me</span>,
              <><span className="keyword">contact_info</span> <span className="operator">=</span> <span className="bracket">{'{'}</span></>,
              <>{indent(1)}<span className="string">"email"</span><span className="operator">:</span> <span className="string">"{CONFIG.CONTACT.EMAIL}"</span><span className="operator">,</span></>,
              <>{indent(1)}<span className="string">"linkedin"</span><span className="operator">:</span> <span className="string">"linkedin.com/in/{CONFIG.SOCIAL.LINKEDIN}"</span><span className="operator">,</span></>,
              <>{indent(1)}<span className="string">"github"</span><span className="operator">:</span> <span className="string">"github.com/{CONFIG.SOCIAL.GITHUB}"</span><span className="operator">,</span></>,
              <>{indent(1)}<span className="string">"location"</span><span className="operator">:</span> <span className="string">"{CONFIG.CONTACT.LOCATION}"</span></>,
              <span className="bracket">{'}'}</span>
            ]}
          />
          <div className="flex gap-3 flex-wrap">
            <a href={`mailto:${CONFIG.CONTACT.EMAIL}`} className="ide-button flex items-center gap-2">
              <Mail size={16} />
              Email me
            </a>
            <a href={CONFIG.CONTACT.LINKEDIN} target="_blank" rel="noopener noreferrer" className="ide-button secondary flex items-center gap-2">
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a href={CONFIG.CONTACT.GITHUB} target="_blank" rel="noopener noreferrer" className="ide-button secondary flex items-center gap-2">
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
          <span>Draft a message</span>
        </div>
        <div className="code-card-body">
          <p className="text-gray-300 mb-4">This opens your email app with the message filled in.</p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-gray-300 mb-2">
                Your name
              </label>
              <input
                id="contact-name"
                type="text"
                className="ide-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="contact-message"
                className="ide-textarea"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="ide-button">
              Open in email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
