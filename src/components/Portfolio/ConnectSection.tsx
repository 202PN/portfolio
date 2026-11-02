import React, { useState } from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { CONFIG } from '../../config';
import Prompt from '../Prompt';
import LocationSign from '../LocationSign';

const ConnectSection: React.FC = () => {
  const [photoFailed, setPhotoFailed] = useState(false);
  const photoSrc = `${import.meta.env.BASE_URL}${CONFIG.CONTACT.PHOTO_PATH}`;

  return (
    <section id="contact" className="section connect" aria-labelledby="contact-title">
      <div className="section-inner connect-inner">
        <figure className="connect-photo">
          <span className="hud-corner hud-tl" aria-hidden="true" />
          <span className="hud-corner hud-tr" aria-hidden="true" />
          <span className="hud-corner hud-bl" aria-hidden="true" />
          <span className="hud-corner hud-br" aria-hidden="true" />
          {photoFailed ? (
            <div className="connect-photo-fallback" aria-hidden="true">
              PN
            </div>
          ) : (
            <img
              src={photoSrc}
              alt="Pete Nguyen standing beside the engine of a Southwest Airlines 737 in a hangar"
              width={440}
              height={550}
              onError={() => setPhotoFailed(true)}
            />
          )}
        </figure>

        <div className="connect-body">
          <Prompt command="./connect.sh" cursor />
          <h2 id="contact-title" className="connect-title">
            <LocationSign section="contact" />
            Let’s connect
          </h2>
          <a href={`mailto:${CONFIG.CONTACT.EMAIL}`} className="btn btn-primary btn-large">
            <Mail size={20} aria-hidden="true" />
            {CONFIG.CONTACT.EMAIL}
          </a>

          <ul className="connect-links">
            <li>
              <a href={CONFIG.CONTACT.LINKEDIN} target="_blank" rel="noopener noreferrer">
                <Linkedin size={18} aria-hidden="true" />
                linkedin.com/in/{CONFIG.SOCIAL.LINKEDIN}
              </a>
            </li>
            <li>
              <a href={CONFIG.CONTACT.GITHUB} target="_blank" rel="noopener noreferrer">
                <Github size={18} aria-hidden="true" />
                github.com/{CONFIG.SOCIAL.GITHUB}
              </a>
            </li>
            <li>
              <span>
                <MapPin size={18} aria-hidden="true" />
                {CONFIG.CONTACT.LOCATION}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
