import React from 'react';
import { HeaderProps } from '../types';
import { scrollToSection } from '../utils';
import { SECTION_SIGNS } from '../data';

const Header: React.FC<HeaderProps> = ({ isDevMode, activeSection, onToggleDevMode }) => {
  const activeIndex = SECTION_SIGNS.findIndex((s) => s.id === activeSection);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <span className="window-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <a href="#top" className="site-mark" aria-label="Pete Nguyen, back to top" onClick={() => window.scrollTo({ top: 0 })}>
          pete@nguyen<span className="site-mark-dim">: {isDevMode ? '~/portfolio/src' : '~/portfolio'}</span>
        </a>

        {!isDevMode && (
          // Wayfinding nav, modeled on airfield signage: each section has a letter designator,
          // and the section you're in gets the filled "location" marker
          <nav className="wayfinding" aria-label="Sections">
            {SECTION_SIGNS.map((sign, i) => {
              const isHere = i === activeIndex;
              return (
                <a
                  key={sign.id}
                  href={`#${sign.id}`}
                  className={`wayfinding-link ${isHere ? 'is-here' : ''}`}
                  aria-current={isHere ? 'location' : undefined}
                  onClick={(e) => handleNavClick(e, sign.id)}
                >
                  <span className="wayfinding-letter" aria-hidden="true">{sign.letter}</span>
                  {sign.label}
                </a>
              );
            })}
          </nav>
        )}

        <button
          type="button"
          role="switch"
          aria-checked={isDevMode}
          className="mode-switch"
          onClick={() => onToggleDevMode(!isDevMode)}
        >
          <span className="mode-switch-label">Dev mode</span>
          <span className="mode-switch-track" aria-hidden="true">
            <span className="mode-switch-thumb" />
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
