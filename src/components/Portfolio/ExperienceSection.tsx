import React from 'react';
import { experience } from '../../data';
import HighlightList from './HighlightList';
import Prompt from '../Prompt';
import LocationSign from '../LocationSign';

const ExperienceSection: React.FC = () => (
  <section id="experience" className="section section-alt" aria-labelledby="experience-title">
    <div className="section-inner">
      <div className="section-head">
        <Prompt command="cat experience.log" />
        <h2 id="experience-title" className="section-title">
          <LocationSign section="experience" />
          Experience
        </h2>
        <p className="section-intro">Before TickrCom: enterprise engineering at Southwest Airlines, and six years in the Army.</p>
      </div>

      <ol className="timeline">
        {experience.map((job) => (
          <li key={job.company} className="timeline-item">
            <div className="timeline-when">
              <span>{job.period}</span>
              <span className="timeline-where">{job.location}</span>
            </div>
            <div className="timeline-body">
              <h3 className="timeline-title">{job.title}</h3>
              <p className="timeline-company">{job.company}</p>
              <p className="timeline-summary">{job.summary}</p>
              <HighlightList items={job.highlights} />
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default ExperienceSection;
