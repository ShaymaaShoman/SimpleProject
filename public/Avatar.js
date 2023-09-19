import React from 'react';

const Avatar = ({ name, imgSrc, description }) => {
  return (
    <div className="text-center">
      <img
        src={imgSrc}
        alt={name}
        className="w-32 h-32 rounded-full mx-auto"
      />
      <h3 className="text-lg font-semibold mt-4">{name}</h3>
      <p className="text-sm mt-2">{description}</p>
    </div>
  );
};

export default Avatar;
