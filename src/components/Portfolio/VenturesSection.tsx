import React from 'react';
import { ExternalLink } from 'lucide-react';
import { ventures } from '../../data';
import { Venture } from '../../types';
import HighlightList from './HighlightList';
import Prompt from '../Prompt';
import LocationSign from '../LocationSign';
import tickrcomMark from '../../assets/brands/tickrcom-mark.svg';
import studioBlueprint from '../../assets/brands/2zero2-blueprint.png';

const VentureVisual: React.FC<{ venture: Venture }> = ({ venture }) => (
  <div className="venture-visual term-window">
    <div className="term-bar" aria-hidden="true">
      <span className="term-title">{venture.urlLabel}</span>
      <span className="term-status">live</span>
    </div>
    {venture.id === 'tickrcom' ? (
      <div className="venture-image venture-image-mark">
        <img src={tickrcomMark} alt="TickrCom logo" width={160} height={160} />
      </div>
    ) : (
      <div className="venture-image venture-image-wide">
        <img
          src={studioBlueprint}
          alt="2zero2 system blueprint: the 2zero2 core wired to a marketing site, mobile app, dashboard, API, CMS, auth, CDN, and database"
          width={1600}
          height={800}
        />
      </div>
    )}
  </div>
);

const TechList: React.FC<{ tech: string[] }> = ({ tech }) => (
  <ul className="tech-list" aria-label="Technologies">
    {tech.map((t) => (
      <li key={t}>{t}</li>
    ))}
  </ul>
);

const VentureFeature: React.FC<{ venture: Venture }> = ({ venture }) => (
  <article className="venture">
    <div className="venture-main">
      <VentureVisual venture={venture} />
      <div className="venture-body">
        <header className="venture-header">
          <h3 className="venture-name">{venture.name}</h3>
          <p className="venture-role">
            {venture.role}, {venture.period}
          </p>
        </header>
        <p className="venture-tagline">{venture.tagline}</p>
        <p className="venture-summary">{venture.summary}</p>
        {venture.highlights.length > 0 && <HighlightList items={venture.highlights} />}
        <TechList tech={venture.tech} />
        <a href={venture.url} target="_blank" rel="noopener noreferrer" className="link-out">
          Visit {venture.urlLabel}
          <ExternalLink size={15} aria-hidden="true" />
        </a>
      </div>
    </div>

    {venture.clients && (
      <div className="clients">
        <h4 className="clients-heading">
          <span className="clients-path" aria-hidden="true">{venture.id}/clients/</span>
          Client work
        </h4>
        <div className="clients-grid">
          {venture.clients.map((client) => (
            <section key={client.client} className="client term-window" aria-label={client.client}>
              <h5 className="client-name">{client.client}</h5>
              <p className="client-period">{client.period}</p>
              <p className="client-summary">{client.summary}</p>
              <HighlightList items={client.highlights} visible={1} />
              <TechList tech={client.tech} />
              {client.url && (
                <a href={client.url} target="_blank" rel="noopener noreferrer" className="link-out">
                  View live site
                  <ExternalLink size={15} aria-hidden="true" />
                </a>
              )}
            </section>
          ))}
        </div>
      </div>
    )}
  </article>
);

const VenturesSection: React.FC = () => (
  <section id="ventures" className="section" aria-labelledby="ventures-title">
    <div className="section-inner">
      <div className="section-head">
        <Prompt path="~/work" command="ls ventures/" />
        <h2 id="ventures-title" className="section-title">
          <LocationSign section="ventures" />
          What I’m building now
        </h2>
        <p className="section-intro">
          A startup I co-founded and a studio I run for clients. Both are in production, and I wrote the code.
        </p>
      </div>
      <div className="ventures">
        {ventures.map((venture) => (
          <VentureFeature key={venture.id} venture={venture} />
        ))}
      </div>
    </div>
  </section>
);

export default VenturesSection;
