import React, { useEffect, useState } from 'react';
import GpxParser from 'gpxparser';
import { Button, Badge, Row, Col, Placeholder } from 'react-bootstrap';
import { GiPathDistance } from 'react-icons/gi';
import { IoTimeOutline } from 'react-icons/io5';
import { BsPinMap } from 'react-icons/bs';
import { FiMap } from 'react-icons/fi';
import { TiArrowLoop } from 'react-icons/ti';
import { BsBarChart, BsArrowUpRight } from 'react-icons/bs';
import { useNavigate, useParams } from 'react-router-dom';
import pathsService from '../Services/paths';
import MapComp from '../Components/MapComp';

const calcualteDistance = (lat1,lon1,lat2,lon2) => {
  const R = 6371e3; // metres
  const φ1 = lat1 * Math.PI/180; // φ, λ in radians
  const φ2 = lat2 * Math.PI/180;
  const Δφ = (lat2-lat1) * Math.PI/180;
  const Δλ = (lon2-lon1) * Math.PI/180;

  const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  const d = R * c; // in metres
  return d;
};

const findMyState = () => {
  const success = (pos) => {
    console.log(pos);
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;
  };

  const err = () => console.log('error');

  if (!navigator.geolocation) {
    console.error('Your browser doesn\'t support Geolocation');
  }else{
    navigator.geolocation.getCurrentPosition(success, err);
  }
};

const dowloadGPX = (nameFile,str) => {
  const element = document.createElement('a');
  const file = new Blob([str], {
    type:'application/gpx'
  });
  element.href = URL.createObjectURL(file);
  element.download = `${nameFile}.gpx`;
  document.body.appendChild(element);
  element.click();
};

const gpxparsed = (gpxfile) => {
  const gpx = new GpxParser();
  gpx.parse(gpxfile);
  return gpx;
};

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

const SinglePath = () => {
  const [specificPath, setSpecificPath] = useState(null);
  const [open, setOpen] = useState(false);
  const { pathId } = useParams();
  const navigate = useNavigate();

  const styleDiv = {
    padding: '8%',
    width: 'auto',
    height: '100%',
    boxShadow: '0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1)',
    marginTop: '30px',
    marginBottom: '20px',
    background: '#F5F5F5'
  };

  const divAlignStyle = {
    display: 'flex',
    alignItems: 'center',
    fontSize: '25px'
  };

  useEffect(async () => {
    const tempPathSpec = await pathsService.getOne(pathId);
    setSpecificPath(tempPathSpec);
  },[pathId]);

  const show_description = () => {
    return(
      <>
        <Row style={{ marginTop: '30px' }} id="description-collapse" >
          <Col>
            <h5>
              {open ? specificPath.description_it : specificPath.description_it.slice(0,150)+'...'}
            </h5>
          </Col>
        </Row>
        <Button onClick={() => setOpen(!open)} variant='outline-success' >
          {open ? ' Comprimi descrizione' : ' Espandi descrizione'}
        </Button>
      </>
    );
  };

  const startingPoint = () => {
    return (specificPath.gpx!=='') ? gpxparsed(specificPath.gpx).tracks[0].points.map(p => [p.lat, p.lon])[5] : specificPath.starting_point;
  };

  const renderPath = () => {
    return(
      <div style={styleDiv}>
        <Row style={{ marginBottom: '20px' }}>
          <Col xs={8}><h1>{specificPath.title}</h1></Col>
          <Col xs={4}><Button variant='outline-success' className="float-end" onClick={() => navigate('/')}>Torna</Button></Col>
        </Row>
        <Row style={divAlignStyle}>
          <Col style={divAlignStyle} md="auto" xs={2} ><FiMap /></Col><Col md="auto" xs={8}>{specificPath.park_name}</Col>
        </Row>
        <Row style={divAlignStyle}>
          <Col style={divAlignStyle} md="auto" xs={2} ><BsPinMap/></Col><Col md="auto" xs={8}><a href={'https://maps.google.com?q='+specificPath.starting_point}>{specificPath.starting_point}</a></Col>
        </Row>
        <Row style={divAlignStyle}>
          <Col style={divAlignStyle} md="auto" xs={2} ><GiPathDistance /></Col><Col md="auto" xs={8}>{specificPath.path_length} Km</Col>
        </Row>
        <Row style={divAlignStyle}>
          <Col style={divAlignStyle} md="auto" xs={2} ><IoTimeOutline /></Col><Col md="auto" xs={8}>{timeCalculation(specificPath.average_time)}</Col>
        </Row>
        {(specificPath.average_drop!==null)&&<Row style={divAlignStyle}>
          <Col style={divAlignStyle} md="auto" xs={2} ><BsArrowUpRight /></Col><Col md="auto" xs={8}>{specificPath.average_drop} m.</Col>
        </Row>}
        <Row style={divAlignStyle}>
          <Col style={divAlignStyle} md="auto" xs={2} ><BsBarChart /></Col><Col md="auto" xs={8}>{specificPath.difficult}</Col>
        </Row>
        <Row style={divAlignStyle}>
          <Col style={divAlignStyle} md="auto" xs={2} ><TiArrowLoop /></Col><Col md="auto" xs={8}>{specificPath.loop ? 'Si' : 'No'}</Col>
        </Row>
        <Row style={{ marginTop: '10px' }}>
          { (specificPath.path_numbers.length>0)&& (<><Col md="auto" xs={4}><h4>Sentieri n. </h4></Col><Col md="auto" xs={6}><h4>{(specificPath.path_numbers.map((pn,idx) => <span key={idx}><Badge bg="danger">{pn}</Badge> </span>))}</h4></Col></>) }
        </Row>
        {specificPath.description_it ? show_description() : <Row></Row>}
        {(specificPath.gpx!=='') && <Row style={{ marginTop: '30px' }}><Col><Button variant='outline-info' className="float-start" onClick={() => dowloadGPX(specificPath.title,specificPath.gpx)}>Download GPX</Button></Col></Row>}
        {(specificPath.gpx!=='') && <Row><Col><MapComp mapsPoint={gpxparsed(specificPath.gpx).tracks[0].points.map(p => [p.lat, p.lon])} allgpx={gpxparsed(specificPath.gpx)} /></Col></Row>}

      </div>);
  };

  const loadingScreen = () => {
    return(
      <div style={styleDiv}>
        <Row style={{ marginBottom: '20px', fontSize: '40px' }}>
          <Col xs={8} md={10} >
            <Placeholder animation="glow">
              <Placeholder xs={12}/>
            </Placeholder>
          </Col>
          <Col xs={2} md={1} style={{ marginRight: '20px', marginLeft: '20px' }}>
            <Placeholder animation="glow">
              <Placeholder.Button xs={12} aria-hidden="true" bg='success'/>
            </Placeholder>
          </Col>
        </Row>
        <Row style={divAlignStyle}>
          <Col style={divAlignStyle} md="auto" xs={2} ><FiMap /></Col>
          <Col>
            <Placeholder animation="glow">
              <Placeholder bg="secondary" xs={8}/>
            </Placeholder>
          </Col>
        </Row>
        <Row style={divAlignStyle}>
          <Col style={divAlignStyle} md="auto" xs={2} ><BsPinMap/></Col>
          <Col>
            <Placeholder animation="glow">
              <Placeholder bg="secondary" xs={2}/>
            </Placeholder>
          </Col>
        </Row>
        <Row style={divAlignStyle}>
          <Col style={divAlignStyle} md="auto" xs={2} ><GiPathDistance /></Col>
          <Col>
            <Placeholder animation="glow">
              <Placeholder bg="secondary" xs={1}/>
            </Placeholder>
          </Col>
        </Row>
        <Row style={divAlignStyle}>
          <Col style={divAlignStyle} md="auto" xs={2} ><IoTimeOutline /></Col>
          <Col>
            <Placeholder animation="glow">
              <Placeholder bg="secondary" xs={2}/>
            </Placeholder>
          </Col>
        </Row>
        <Row style={divAlignStyle}>
          <Col style={divAlignStyle} md="auto" xs={2} ><BsArrowUpRight /></Col>
          <Col>
            <Placeholder animation="glow">
              <Placeholder bg="secondary" xs={1}/>
            </Placeholder>
          </Col>
        </Row>
        <Row style={divAlignStyle}>
          <Col style={divAlignStyle} md="auto" xs={2} ><BsBarChart /></Col>
          <Col>
            <Placeholder animation="glow">
              <Placeholder bg="secondary" xs={1}/>
            </Placeholder>
          </Col>
        </Row>
        <Row style={divAlignStyle}>
          <Col style={divAlignStyle} md="auto" xs={2} ><TiArrowLoop /></Col>
          <Col>
            <Placeholder animation="glow">
              <Placeholder bg="secondary" xs={1}/>
            </Placeholder>
          </Col>
        </Row>
        <Row style={{ marginTop: '10px' }}>
          <Col md="auto" xs={4}><h4>Sentieri n.</h4></Col>
          <Col>
            <h4>
              <Placeholder animation="glow">
                <Placeholder bg="secondary" xs={4}/>
              </Placeholder>
            </h4>
          </Col>
        </Row>
        <Row style={{ marginTop: '30px', marginBottom: '10px' }} id="description-collapse" >
          <Col>
            <h5>
              <Placeholder animation="glow">
                <Placeholder bg="secondary" xs={12}/>
              </Placeholder>
              <Placeholder animation="glow">
                <Placeholder bg="secondary" xs={12}/>
              </Placeholder>
            </h5>
          </Col>
        </Row>
        <Placeholder animation="glow">
          <Placeholder.Button xs={4} aria-hidden="true" bg='success'/>
        </Placeholder>
        <Row style={{ marginTop: '30px' }}>
          <Col>
            <Placeholder animation="glow">
              <Placeholder.Button xs={2} aria-hidden="true" bg="info" />
            </Placeholder>
          </Col>
        </Row>
      </div>);
  };

  return (
    <>
      {specificPath ? renderPath() : loadingScreen()}
    </>
  );
};

export default SinglePath;
