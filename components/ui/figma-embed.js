import React from 'react';

const FigmaEmbed = ({ embedUrl }) => {
  return (
    <iframe
      src={embedUrl}
      allowFullScreen
      style={{
        border: 'none',
        width: '100%',
        height: '500px', 
        marginTop: 3,
        marginBottom: 4
      }}
    />
  );
};

export default FigmaEmbed;
