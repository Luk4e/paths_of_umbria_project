import React,{ useState } from 'react';

const Path = ({
  title,
  name,
  km,
  duration,
  differenceAltitude,
  description,
  difficult
}) => {

  const [pathBrightness, setPathBrightness] = useState('brightness(100%)');

  const handleMouseClick = () => {
    console.log('test');
  };

  const pathStyle = {
    flexBasis: '425px',
    boxShadow: '1px 1px 8px rgba(0, 0, 0, 0.25)',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    padding: '13px',
    paddingBottom: '20px',
    backgroundColor: 'white',
    filter: `${pathBrightness}`
  };

  return (
    <div
      style={pathStyle}
      onClick={handleMouseClick}
      onMouseEnter={() => setPathBrightness('brightness(90%)')}
      onMouseLeave={() => setPathBrightness('brightness(100%)')}
    >
      <h4>{title}</h4>
      <h5>{name}</h5>
      <p>{km} Km</p>
      <p>{duration} h.</p>
      <p>{differenceAltitude} m.</p>
      <p>{difficult}</p>
      <p>{description}</p>
    </div>
  );
};

export default Path;