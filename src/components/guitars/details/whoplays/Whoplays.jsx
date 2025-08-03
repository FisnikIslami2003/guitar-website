import React, { useState } from 'react';
import './Whoplays.scss';

export const Whoplays = ({ musicians = [] }) => {
  const [visibleCount, setVisibleCount] = useState(2);

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 2);
  };

  return (
    <div className="whoplays-container">
      {musicians.slice(0, visibleCount).map((musician, index) => (
        <div key={index} className="musician-card">
          <img src={musician.musicianImage} alt={musician.name} />
          <h4>{musician.name}</h4>
          <p>{musician.bands.join(', ')}</p>
        </div>
      ))}
      {visibleCount < musicians.length && (
        <button onClick={handleShowMore} className="load-more-btn">Load More</button>
      )}
    </div>
  );
};
