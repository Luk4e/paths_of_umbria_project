import React from 'react';
import {
  filterChangeAltitudeMin,
  filterChangeDifficult,
  filterChangeAltitudeMax,
  filterChangeLengthMin,
  filterChangeLengthMax,
  filterChangePark,
  filterChangeLoop,
} from '../reducers/filterReducer';
import { useDispatch, useSelector } from 'react-redux';
import { FloatingLabel, Form, Button, Row, Col } from 'react-bootstrap';


const parkList = ['Parco di Colfiorito',
  'Parco del Monte Cucco',
  'Parco di Monte Peglia e Selva di Meana (S.T.I.N.A)',
  'Parco del Monte Subasio',
  'Parco del Lago Trasimeno',
  'Parco Nazionale dei Monti Sibillini',
  'Parco fluviale del Tevere',
  'Parco fluviale del Nera',
  'Fuori dai principali parchi'
];

const difficultList = ['T','E','EE','EEA'];

const loopOption = ['Si', 'No'];

const FilterComp = () => {
  const dispatch = useDispatch();

  const {
    altitude_min,
    altitude_max,
    length_min,
    length_max,
    parkName,
    difficultLevel,
    loopAllYesNo
  } = useSelector(state => state.filterParams);

  const resetFilter = () => {
    dispatch(filterChangePark('tutti'));
    dispatch(filterChangeDifficult('qualsiasi'));
    dispatch(filterChangeLoop('tutti'));
    dispatch(filterChangeAltitudeMin(''));
    dispatch(filterChangeAltitudeMax(''));
    dispatch(filterChangeLengthMin(''));
    dispatch(filterChangeLengthMax(''));
  };

  return(
    <div style={{ marginBottom: '30px' }}>
      <Row>
        <Col xs={12} md={4}>
          <FloatingLabel controlId="floatingSelect" className="mt-4" label="Zona">
            <Form.Select value={parkName} onChange={(event) => dispatch(filterChangePark(event.target.value))} >
              <option>Tutti</option>
              {parkList.map( (p,idx) => <option key={idx} value={p}>{p}</option>)}
            </Form.Select>
          </FloatingLabel>
        </Col>
        <Col xs={12} md={4}>
          <FloatingLabel controlId="floatingSelect" className="mt-4" label="Difficoltà">
            <Form.Select value={difficultLevel} onChange={(event) => dispatch(filterChangeDifficult(event.target.value))} >
              <option>Qualsiasi</option>
              {difficultList.map( (p,idx) => <option key={idx} value={p}>{p}</option>)}
            </Form.Select>
          </FloatingLabel>
        </Col>
        <Col xs={12} md={4}>
          <FloatingLabel controlId="floatingSelect" className="mt-4" label="Anello">
            <Form.Select value={loopAllYesNo} onChange={(event) => dispatch(filterChangeLoop(event.target.value))} >
              <option>Tutti</option>
              {loopOption.map( (p,idx) => <option key={idx} value={p}>{p}</option>)}
            </Form.Select>
          </FloatingLabel>
        </Col>
      </Row>
      <Row className="justify-content-md-center ">
        <Col xs={6} md="auto">
          <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
            <Form.Label>Dislivello [m]</Form.Label>
            <Form.Control
              type="number"
              placeholder="min"
              value={altitude_min}
              onChange={(event) => dispatch(filterChangeAltitudeMin(event.target.value))}
            />
            <Form.Control
              type="number"
              placeholder="max"
              value={altitude_max}
              onChange={(event) => dispatch(filterChangeAltitudeMax(event.target.value))}
            />
          </Form.Group>
        </Col>
        <Col xs={6} md="auto">
          <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
            <Form.Label>Lunghezza [Km]</Form.Label>
            <Form.Control
              type="number"
              placeholder="min"
              value={length_min}
              onChange={(event) => dispatch(filterChangeLengthMin(event.target.value))}
            />
            <Form.Control
              type="number"
              placeholder="max"
              value={length_max}
              onChange={(event) => dispatch(filterChangeLengthMax(event.target.value))}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-md-end">
        <Col xs="auto" md="auto" >
          <Button
            onClick = {() => resetFilter()}
          >
            Reset
          </Button>
        </Col>
      </Row>
    </div>
  );

};

export default FilterComp;
