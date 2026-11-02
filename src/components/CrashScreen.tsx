import React, { useEffect, useState } from 'react';
import { CONFIG } from '../config';

const DUMP = ['*** STATUS: 0x00000000 (OK)', 'Session ready.'];

/** Percent of the page the visitor has scrolled through, 0–100 */
const useScrollProgress = () => {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setPct(max > 0 ? Math.min(100, Math.round((window.scrollY / max) * 100)) : 100);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return pct;
};

/**
 * Decorative backdrop styled after a (black) Windows stop screen. It sits behind the content at
 * very low contrast; its "% complete" line tracks how far down the page the visitor has scrolled.
 */
const CrashScreen: React.FC = () => {
  const pct = useScrollProgress();

  return (
    <div className="crash" aria-hidden="true">
      <div className="crash-main">
        <p className="crash-face">&gt;_</p>
        <p className="crash-message">
          You’re viewing the portfolio of Pete Nguyen, full-stack software engineer.
        </p>
        <p className="crash-progress">{pct}% complete</p>
        <div className="crash-details">
          <p>Keep scrolling for work and experience, or email {CONFIG.CONTACT.EMAIL}</p>
        </div>
      </div>
      <div className="crash-dump">
        {DUMP.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  );
};

export default CrashScreen;
