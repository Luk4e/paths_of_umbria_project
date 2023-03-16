import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { GiPathDistance } from 'react-icons/gi';
import { IoTimeOutline } from 'react-icons/io5';
import { BsPinMap } from 'react-icons/bs';
import { FiMap } from 'react-icons/fi';
import { TiArrowLoop } from 'react-icons/ti';
import { BsBarChart, BsArrowUpRight } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { initializePaths } from '../reducers/pathReducer';

const nameWebApp = 'Umbriapiedi';

const parkList = ['Parco di Colfiorito',
  'Parco del Monte Cucco',
  'Parco di Monte Peglia e Selva di Meana (S.T.I.N.A)',
  'Parco del Monte Subasio',
  'Parco del Lago Trasimeno',
  'Parco Nazionale dei Monti Sibillini',
  'Parco fluviale del Tevere',
  'Parco fluviale del Nera',
  'Alto Tevere'];

let timer;

const Home = () => {
  const [ counterState, setCounter ] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    clearInterval(timer);
    timer = setInterval(() => {
      if (counterState === 1669) {
        clearInterval(timer);
        return;
      }
      setCounter(prev => prev+1);
    },1);
    return () => clearInterval(timer);
  },[counterState]);

  const totalDistance = useSelector( ({ paths }) => {
    return !paths.isLoading ? (Math.round(paths.pathsList.map((p) => p.path_length).reduce((curr,prev) => curr+prev))) : '...';
  });

  const styleDivHome = {
    padding: '5%',
    width: 'auto',
    height: '100%',
    boxShadow: '0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1)',
    margin: '6% 5% 3% 5%',
  };

  useEffect(() => {
    dispatch(initializePaths());
  },[dispatch]);

  return (
    <div style={styleDivHome} >
      <Container fluid={true}>
        <Row className="justify-content-md-center">
          <Col xs="12" className="text-center" >
            <h1>
              {nameWebApp}
            </h1>
            <h5 style={{ marginTop: '30px', marginBottom: '50px' }}>
                Trova il percorso che più fa per te!
            </h5>
          </Col>
        </Row>
        <Row xs="1" sm="auto">
          <Col>
            <Alert variant="success" >
              <Alert.Heading>Aree</Alert.Heading>
              <hr/>
              <h6>
                {parkList.map((park, idx) => <p key={idx} >{park} </p>)}
              </h6>
            </Alert>
          </Col>
          <Col sm="4" md="4" lg="2">
            <Alert variant="secondary">
              <Alert.Heading>Km { counterState }</Alert.Heading>
            </Alert>
          </Col>
          <Col>
            <Alert variant="warning">
              <Alert.Heading>Difficoltà</Alert.Heading>
              <hr/>
              <Row className="justify-content-md" >
                <Col md="auto">T = Turistico</Col>
              </Row>
              <Row className="justify-content-md" >
                <Col md="auto">E = Escursionistico</Col>
              </Row>
              <Row className="justify-content-md" >
                <Col md="auto">EE = Escursionisti esperti</Col>
              </Row>
              <Row className="justify-content-md" >
                <Col md="auto">EEA = Escursionisti esperti con attrezzatura</Col>
              </Row >
            </Alert>
          </Col>
          <Col>
            <Alert variant="warning" >
              <Alert.Heading>Info</Alert.Heading>
              <hr/>
              <Row className="justify-content-md">
                <Col  md="auto"><FiMap /> Nome del parco</Col>
              </Row>
              <Row className="justify-content-md">
                <Col  md="auto"><BsPinMap /> Punto di partenza</Col>
              </Row>
              <Row className="justify-content-md">
                <Col  md="auto"><GiPathDistance /> Lunghezza</Col>
              </Row>
              <Row className="justify-content-md">
                <Col  md="auto"><IoTimeOutline /> Tempo medio percorrenza</Col>
              </Row >
              <Row className="justify-content-md">
                <Col  md="auto"><BsArrowUpRight /> Dislivello positivo</Col>
              </Row>
              <Row className="justify-content-md">
                <Col  md="auto"><BsBarChart /> Difficoltà</Col>
              </Row>
              <Row className="justify-content-md">
                <Col  md="auto"><TiArrowLoop /> Percorso circolare o no</Col>
              </Row>
            </Alert>
          </Col>
        </Row>
        <Row xs="12" >
          <Col>
            <h6 style={{ marginTop: '50px' }}>
              Il sito è stato sviluppato come esercizio personale per imparare ad utilizare tecnologie web informatiche e per poter
              trovare in poco tempo un percorso da effettuare nelle belle giornate.
              Le informazioni riguardanti i percorsi presenti sono state prese principalemente da altri siti (http://www.trekkingumbria.it/ - http://www.parks.it/ -
              https://www.lagotrasimeno.net/ - https://www.montagneaperte.it/).
              Lo stato dei percorsi e la loro attuale presenza è basata sulle fonti sopra citate, per questo non mi assumo nessuna responsabilità
              riguardante la percorribilità e la precisione delle indicazioni. Utilizzo anche io questa applicazione per effettuare escusioni e fino ad ora
              non ho incontrato difficoltà nel percorrere i sentieri.
              Tutto il progetto non ha nessuno scopo di lucro, l&apos;unico scopo è quello di aiutare altri nella ricerca di percorsi.
            </h6>
            <cite><a style={{ textDecoration:'none' }} href="https://www.flaticon.com/free-icons/hiking" title="hiking icons">Hiking icons created by monkik - Flaticon</a></cite>
          </Col>
        </Row>
      </Container>
    </div>
  );

};

export default Home;
