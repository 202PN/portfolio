import React from 'react';
import { CONFIG } from '../config';

const Footer: React.FC = () => (
  <footer className="site-footer">
    <div className="site-footer-inner">
      <p>
        <span className="footer-exit" aria-hidden="true">[process exited with code 0]</span> © {new Date().getFullYear()}{' '}
        {CONFIG.SITE.AUTHOR}
      </p>
      <p>Built with React, TypeScript, and Vite.</p>
    </div>
  </footer>
);

export default Footer;
