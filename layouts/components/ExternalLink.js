import React from 'react';

const ExternalLink = ({ href, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.open(href, '_blank');
  };

  return (
    <a href={href} onClick={handleClick} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default ExternalLink;
