import React from 'react';
import { signFor } from '../data';

/**
 * Airport-style location marker: the section letter in a filled accent badge.
 */
const LocationSign: React.FC<{ section: string }> = ({ section }) => {
  const sign = signFor(section);
  if (!sign) return null;
  return (
    <span className="location-sign" aria-hidden="true">
      {sign.letter}
    </span>
  );
};

export default LocationSign;
