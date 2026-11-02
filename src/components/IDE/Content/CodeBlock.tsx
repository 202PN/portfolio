import React from 'react';

interface CodeBlockProps {
  lines: React.ReactNode[];
  start?: number;
  className?: string;
}

/**
 * Renders syntax-highlighted lines with line numbers, starting at `start`.
 */
const CodeBlock: React.FC<CodeBlockProps> = ({ lines, start = 1, className = '' }) => (
  <div className={`code-block ${className}`}>
    {lines.map((line, i) => (
      <div key={i} className="code-line">
        <span className="line-number">{start + i}</span>
        <div className="code-content">{line}</div>
      </div>
    ))}
  </div>
);

export default CodeBlock;
