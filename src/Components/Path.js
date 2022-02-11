import React,{ useState } from 'react';

const Path = ({ title, km, duration, differenceAltitude, description, difficult, id }) => {

  const [pathBrightness, setPathBrightness] = useState('brightness(100%)');

  const pathStyle = {
    flexBasis: '425px',
    boxShadow: '1px 1px 8px rgba(0, 0, 0, 0.25)',
    borderRadius: '10px',
    display: 'flex',
    width: '350px',
    flexDirection: 'column',
    padding: '30px',
    paddingBottom: '20px',
    backgroundColor: 'white',
    filter: `${pathBrightness}`
  };

  return (
    <div
      style={pathStyle}
      onMouseEnter={() => setPathBrightness('brightness(90%)')}
      onMouseLeave={() => setPathBrightness('brightness(100%)')}
    >
      <h4>{title}</h4>
      <h6>[Nome del parco]</h6>
      <h6>[Punto di partenza]</h6>
      <h6>[Meteo con posizione del luogo forse ]</h6>
      <h6>Lunghezza {km} Km</h6>
      <h6>Tempo medio {duration} h.</h6>
      <h6>Altitudine {differenceAltitude} m.</h6>
      <h6>Dificoltà {difficult}</h6>
      <h6>[Anello o No]</h6>
      <h6>[Numero dei sentieri]</h6>
      <h6>{description.slice(0,150).trim()}...</h6>
    </div>
  );
};

export default Path;