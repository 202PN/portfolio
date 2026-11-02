import React, { useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface HighlightListProps {
  items: string[];
  visible?: number;
}

/**
 * Bullet list that shows the first `visible` items and lets the reader expand the rest.
 */
const HighlightList: React.FC<HighlightListProps> = ({ items, visible = 3 }) => {
  const [expanded, setExpanded] = useState(false);
  const listId = useId();
  const hiddenCount = items.length - visible;
  const shown = expanded || hiddenCount <= 0 ? items : items.slice(0, visible);

  return (
    <div className="highlights">
      <ul className="highlight-list" id={listId}>
        {shown.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {hiddenCount > 0 && (
        <button
          type="button"
          className="text-toggle"
          aria-expanded={expanded}
          aria-controls={listId}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Show less' : `Show ${hiddenCount} more`}
          <ChevronDown size={16} aria-hidden="true" className={expanded ? 'is-flipped' : ''} />
        </button>
      )}
    </div>
  );
};

export default HighlightList;
