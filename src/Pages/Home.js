import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
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

const Home = () => {

  const dispatch = useDispatch();

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
    <div style={styleDivHome}>
      <h1>{nameWebApp}</h1>
      <h5 style={{ marginTop: '30px' }}>
        Lo scopo di {nameWebApp} è quello di fornire quanti più possibili percorsi da trekking presenti nella regione Umbria.
        Oltre a questo uno dei punti principali è quello di permettere all&apos;utente di applicare dei filtri per la selezione del percorso che si vuole intraprendere,
        cosi che in poco tempo ognuno possa trovare l&apos;itinerario che più fa per lui!
      </h5>
      <h5>
        I percorsi vanno ad estendersi sui seguenti parchi e zone dell&apos;Umbria
      </h5>
      <h6>
        {parkList.map((park, idx) => <p key={idx} >{park} </p>)}
      </h6>
      <h5>
        I percorsi presenti si estendono in diverse zone dell&apos;Umbria per un totale di circa { totalDistance } kilometri.
      </h5>
      <div style={{ marginTop:'50px' }}>
        <Row>
          <Col ><h5>Legenda difficoltà percorsi:</h5></Col>
        </Row>
        <Row className="justify-content-md" >
          <Col md="auto">T = Turistico</Col>
        </Row>
        <Row className="justify-content-md" >
          <Col md="auto">E = Escursionistico</Col>
        </Row>
        <Row className="justify-content-md" >
          <Col md="auto">EE = Escursionisti Esperti</Col>
        </Row>
        <Row className="justify-content-md" >
          <Col md="auto">EEA = Escursionisti Esperti con Attrezzatura</Col>
        </Row >
      </div>
      <div style={{ marginTop:'50px' }}>
        <Row>
          <Col><h5>Legenda sito</h5></Col>
        </Row>
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
      </div>
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
    </div>
  );

};

export default Home;
