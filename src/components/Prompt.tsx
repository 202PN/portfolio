import React from 'react';

interface PromptProps {
  command: string;
  path?: string;
  cursor?: boolean;
  typed?: boolean;
}

/**
 * A decorative shell prompt line, e.g. `pete@nguyen:~/work$ ls -l`.
 * `typed` animates the command being typed; `cursor` adds a blinking block cursor.
 */
const Prompt: React.FC<PromptProps> = ({ command, path = '~', cursor = false, typed = false }) => (
  <p className="prompt" aria-hidden="true">
    <span className="prompt-user">pete@nguyen</span>
    <span className="prompt-sep">:</span>
    <span className="prompt-path">{path}</span>
    <span className="prompt-sep">$</span>{' '}
    <span
      className={typed ? 'prompt-cmd is-typed' : 'prompt-cmd'}
      style={typed ? ({ '--chars': command.length } as React.CSSProperties) : undefined}
    >
      {command}
    </span>
    {cursor && <span className="prompt-cursor" />}
  </p>
);

export default Prompt;
