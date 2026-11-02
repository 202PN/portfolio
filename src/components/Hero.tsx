import React from 'react';
import { Github, Linkedin, Mail, MapPin, FileText } from 'lucide-react';
import { CONFIG } from '../config';
import Prompt from './Prompt';

const RECORD = [
  {
    status: 'running',
    entries: [
      { role: 'Co-Founder & Full-Stack Engineer', org: 'TickrCom', when: '2026 – now' },
      { role: 'Freelance Full-Stack Developer', org: 'Two Zero Two Studio', when: '2026 – now' }
    ]
  },
  {
    status: 'completed',
    entries: [
      { role: 'Associate Software Engineer', org: 'Southwest Airlines', when: '2022 – 2025' },
      { role: 'Sergeant', org: 'U.S. Army', when: '2016 – 2022' }
    ]
  }
];

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** Formats a date the way a shell prints it on login, e.g. "Mon Nov  2 12:47:03" */
const loginStamp = (d: Date) => {
  const pad = (n: number) => String(n).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '\u00a0');
  return `${DAYS[d.getDay()]} ${MONTHS[d.getMonth()]} ${day} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
};

const Hero: React.FC = () => {
  return (
    <section className="hero" id="top">
      <div className="hero-inner">
        <div className="hero-intro">
          <p className="login-line" aria-hidden="true">
            Last login: {loginStamp(new Date())} on ttys001
          </p>
          <Prompt command="whoami" typed />
          <h1 className="hero-name glitch" data-text="Pete Nguyen">
            Pete Nguyen
          </h1>
          <p className="hero-role">
            <span className="hero-role-mark" aria-hidden="true">&gt;</span> Full-stack software engineer
          </p>
          <p className="hero-lede">
            I build secure, cloud-native software for enterprise teams, startups, and small businesses.
          </p>

          <div className="hero-actions">
            <a href={`mailto:${CONFIG.CONTACT.EMAIL}`} className="btn btn-primary">
              <Mail size={17} aria-hidden="true" />
              Email me
            </a>
            <a href={CONFIG.CONTACT.LINKEDIN} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <Linkedin size={17} aria-hidden="true" />
              LinkedIn
            </a>
            <a href={CONFIG.CONTACT.GITHUB} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <Github size={17} aria-hidden="true" />
              GitHub
            </a>
            {CONFIG.CONTACT.RESUME_PATH && (
              <a href={`${import.meta.env.BASE_URL}${CONFIG.CONTACT.RESUME_PATH}`} className="btn btn-secondary" download>
                <FileText size={17} aria-hidden="true" />
                Resume
              </a>
            )}
          </div>

          <p className="hero-meta">
            <MapPin size={15} aria-hidden="true" />
            {CONFIG.CONTACT.LOCATION}. B.S. in Cybersecurity, U.S. Army veteran.
          </p>
        </div>

        <aside className="record term-window" aria-label="Career at a glance">
          <div className="term-bar" aria-hidden="true">
            <span className="term-title">ps --career</span>
          </div>
          <div className="term-body">
            {RECORD.map((group) => (
              <div key={group.status} className="record-group">
                <h2 className={`record-heading is-${group.status}`}>
                  <span className="record-dot" aria-hidden="true" />
                  {group.status === 'running' ? 'Now' : 'Before'}
                </h2>
                <ul className="record-list">
                  {group.entries.map((entry) => (
                    <li key={entry.org} className="record-entry">
                      <span className="record-org">{entry.org}</span>
                      <span className="record-role">{entry.role}</span>
                      <span className="record-when">{entry.when}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Hero;
