import React,{ useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { GiPathDistance } from 'react-icons/gi';
import { IoTimeOutline } from 'react-icons/io5';
import { BsPinMap } from 'react-icons/bs';
import { FiMap } from 'react-icons/fi';
import { TiArrowLoop } from 'react-icons/ti';
import { BsBarChart } from 'react-icons/bs';
import { MdHeight } from 'react-icons/md';

const timeCalculation = (seconds) => {
  const days = Math.floor(seconds / (24*3600));
  const hours = Math.floor((seconds%(24*3600)) / 3600);
  const minutes = Math.floor(((seconds%(24*3600))%3600)/60);
  const resultDays = days>0 ? `${days} Giorni ` : '';
  const resultHours = `${hours} Ore ` ;
  const resultMinutes = `${minutes} Minuti`;
  // se giorno maggiore di 0 allora levo un giorno
  return resultDays+resultHours+resultMinutes;
};

const Path = ({ title, park_name, starting_point, path_length, average_time, average_drop, difficult, loop, listOrMap }) => {

  const [pathBrightness, setPathBrightness] = useState('brightness(100%)');

  const pathStyleList = {
    flexBasis: '425px',
    boxShadow: '1px 1px 8px rgba(0, 0, 0, 0.25)',
    borderRadius: '10px',
    display: 'flex',
    width: '350px',
    flexDirection: 'column',
    padding: '30px',
    paddingBottom: '20px',
    backgroundColor: 'white',
    fontSize: '18px',
    filter: `${pathBrightness}`
  };

  const pathStyleMap = {
    margin:'0px',
    fontSize:'12px',
    width:'170px'
  };

  const divAlignStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '2px'
  };

  const listOrMapStyle = () => {
    return listOrMap ? pathStyleList : pathStyleMap;
  };

  const listOrMapStyleTitle = () => {
    return !listOrMap ? { fontSize:'22px' } : {};
  };

  return (
    <div
      style={listOrMapStyle()}
      onMouseEnter={() => setPathBrightness('brightness(90%)')}
      onMouseLeave={() => setPathBrightness('brightness(100%)')}
    >
      <Row style={divAlignStyle} >
        <Col xs={12}><h2 style={listOrMapStyleTitle()}>{title}</h2></Col>
      </Row>
      <Row style={divAlignStyle}>
        <Col xs={1}><FiMap /></Col>
        <Col xs={10}>{park_name}</Col>
      </Row>
      <Row style={divAlignStyle}>
        <Col xs={1}><BsPinMap /></Col>
        <Col xs={10}>{starting_point}</Col>
      </Row>
      <Row style={divAlignStyle}>
        <Col xs={1}><GiPathDistance /></Col>
        <Col xs={10}>{path_length} Km</Col>
      </Row>
      <Row style={divAlignStyle}>
        <Col xs={1}><IoTimeOutline /></Col>
        <Col xs={10}>{timeCalculation(average_time)}</Col>
      </Row>
      { average_drop!==null && (<Row style={divAlignStyle}>
        <Col xs={1}><MdHeight /></Col>
        <Col xs={10}>{ average_drop } m.</Col>
      </Row>) }
      <Row style={divAlignStyle}>
        <Col xs={1}><BsBarChart /></Col>
        <Col xs={10}>{ difficult }</Col>
      </Row>
      <Row style={divAlignStyle}>
        <Col xs={1}><TiArrowLoop /></Col>
        <Col xs={10}>{loop ? 'Si' : 'No'}</Col>
      </Row>
    </div>
  );
};

export default Path;
