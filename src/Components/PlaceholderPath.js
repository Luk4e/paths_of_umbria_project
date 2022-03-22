import React,{ useState } from 'react';
import { Col, Row, Placeholder } from 'react-bootstrap';
import { GiPathDistance } from 'react-icons/gi';
import { IoTimeOutline } from 'react-icons/io5';
import { BsPinMap } from 'react-icons/bs';
import { FiMap } from 'react-icons/fi';
import { TiArrowLoop } from 'react-icons/ti';
import { BsBarChart } from 'react-icons/bs';
import { MdHeight } from 'react-icons/md';

const PlaceholderPath = () => {
  const [pathBrightness, setPathBrightness] = useState('brightness(100%)');

  const pathStyleList = {
    flexBasis: '325px',
    boxShadow: '1px 1px 8px rgba(0, 0, 0, 0.25)',
    borderRadius: '10px',
    display: 'flex',
    width: '350px',
    flexDirection: 'column',
    padding: '30px',
    paddingBottom: '20px',
    backgroundColor: 'white',
    fontSize: '18px',
    filter: 'brightness(90%)'
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

  return (
    <div
      style={pathStyleList}
    >
      <Row style={divAlignStyle} >
        <Col xs={12}>
          <h2 style={{ fontSize:'22px' }} >
            <Placeholder animation="glow">
              <Placeholder xs={12} bg="primary" />
            </Placeholder>
          </h2>
        </Col>
      </Row>
      <Row style={divAlignStyle}>
        <Col xs={1}>
          <FiMap />
        </Col>
        <Col xs={10}>
          <Placeholder animation="glow">
            <Placeholder xs={8} bg="secondary" />
          </Placeholder>
        </Col>
      </Row>
      <Row style={divAlignStyle}>
        <Col xs={1}><BsPinMap /></Col>
        <Col xs={10}>
          <Placeholder animation="glow">
            <Placeholder xs={8} bg="secondary" />
          </Placeholder>
        </Col>
      </Row>
      <Row style={divAlignStyle}>
        <Col xs={1}><GiPathDistance /></Col>
        <Col xs={10}>
          <Placeholder animation="glow">
            <Placeholder xs={3} bg="secondary"/>
          </Placeholder>
        </Col>
      </Row>
      <Row style={divAlignStyle}>
        <Col xs={1}><IoTimeOutline /></Col>
        <Col xs={10}>
          <Placeholder animation="glow">
            <Placeholder xs={4} bg="secondary"/>
          </Placeholder>
        </Col>
      </Row>
      <Row style={divAlignStyle}>
        <Col xs={1}><MdHeight /></Col>
        <Col xs={10}>
          <Placeholder animation="glow">
            <Placeholder xs={3} bg="secondary"/>
          </Placeholder>
        </Col>
      </Row>
      <Row style={divAlignStyle}>
        <Col xs={1}><BsBarChart /></Col>
        <Col xs={10}>
          <Placeholder animation="glow">
            <Placeholder xs={2} bg="secondary"/>
          </Placeholder>
        </Col>
      </Row>
      <Row style={divAlignStyle}>
        <Col xs={1}><TiArrowLoop /></Col>
        <Col xs={10}>
          <Placeholder animation="glow">
            <Placeholder xs={2} bg="secondary"/>
          </Placeholder>
        </Col>
      </Row>
    </div>
  );
};

export default PlaceholderPath;
