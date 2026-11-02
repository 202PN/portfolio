import React from 'react';
import { skills, degrees, certifications } from '../../data';
import Prompt from '../Prompt';
import LocationSign from '../LocationSign';

const SkillsSection: React.FC = () => (
  <section id="skills" className="section" aria-labelledby="skills-title">
    <div className="section-inner">
      <div className="skills-layout">
        <div>
          <Prompt command="cat skills.yml" />
          <h2 id="skills-title" className="section-title">
            <LocationSign section="skills" />
            Skills
          </h2>
          <dl className="skills">
            {skills.map((group) => (
              <div key={group.category} className="skills-row">
                <dt>{group.category}</dt>
                <dd>{group.items.join(', ')}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="credentials">
          <Prompt command="cat education.txt" />
          <h2 className="section-title">Education</h2>
          <ul className="credential-list">
            {degrees.map((d) => (
              <li key={d.degree}>
                <span className="credential-name">{d.degree}</span>
                <span className="credential-meta">
                  {d.school}, {d.date}
                </span>
              </li>
            ))}
          </ul>

          <h3 className="credentials-subtitle">Certifications and clearance</h3>
          <ul className="credential-list">
            {certifications.map((c) => (
              <li key={c.name}>
                <span className="credential-name">{c.name}</span>
                <span className="credential-meta">
                  {c.issuer}
                  {c.date && `, ${c.date}`}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection;
