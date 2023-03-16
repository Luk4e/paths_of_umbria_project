import React from 'react';
import {
  filterChangeAltitudeMin,
  filterChangeAltitudeMax,
  filterChangeLengthMin,
  filterChangeLengthMax,
  filterChangeLoop,
  filterChangeParkMultiple,
  filterChangeDifficultMultiple,
} from '../reducers/filterReducer';
import { useDispatch, useSelector } from 'react-redux';
import { FloatingLabel, Form, Button, Row, Col } from 'react-bootstrap';
import Multiselect from 'multiselect-react-dropdown';


const parkListMod = [
  'Parco di Colfiorito',
  'Parco del Monte Cucco',
  'Parco di Monte Peglia e Selva di Meana (S.T.I.N.A)',
  'Parco del Monte Subasio',
  'Parco del Lago Trasimeno',
  'Parco Nazionale dei Monti Sibillini',
  'Parco fluviale del Tevere',
  'Parco fluviale del Nera',
  'Fuori dai principali parchi',
  'Alto Tevere',
];

const difficultList = ['T','E','EE','EEA'];

const loopOption = ['Tutti','Si', 'No'];

const FilterComp = () => {
  const dispatch = useDispatch();

  const {
    altitude_min,
    altitude_max,
    length_min,
    length_max,
    loopAllYesNo,
    multipleParkName,
    multipleDifficultLevel,
  } = useSelector(state => state.filterParams);

  const resetFilter = () => {
    dispatch(filterChangeDifficultMultiple([]));
    dispatch(filterChangeParkMultiple([]));
    dispatch(filterChangeLoop('tutti'));
    dispatch(filterChangeAltitudeMin(''));
    dispatch(filterChangeAltitudeMax(''));
    dispatch(filterChangeLengthMin(''));
    dispatch(filterChangeLengthMax(''));
  };
  let inputField = { margin: '5px' };
  return(
    <div style={{ marginBottom: '30px' }}>
      <Row className="justify-content-md-center">
        <Col xs={12} md={4}>
          <Multiselect
            options={parkListMod}
            selectedValues={multipleParkName}
            onSelect={(event) => dispatch(filterChangeParkMultiple(event))}
            onRemove={(event) => dispatch(filterChangeParkMultiple(event))}
            placeholder="Zone"
            showCheckbox={true}
            isObject={false}
            hidePlaceholder={true}
            style={{ multiselectContainer:{ marginBottom:'25px', hight: '20px' } }}
          />
        </Col>
        <Col xs={12} md={4}>
          <Multiselect
            options={difficultList}
            selectedValues={multipleDifficultLevel}
            onSelect={(event) => dispatch(filterChangeDifficultMultiple(event))}
            onRemove={(event) => dispatch(filterChangeDifficultMultiple(event))}
            placeholder="Difficoltà"
            showCheckbox={true}
            isObject={false}
            hidePlaceholder={true}
          />
        </Col>
      </Row>
      <Row className="justify-content-md-center" >
        <Col xs={12} md={4}>
          <FloatingLabel controlId="floatingSelect" className="mt-4" label="Anello">
            <Form.Select size="sm" value={loopAllYesNo} onChange={(event) => dispatch(filterChangeLoop(event.target.value))} >
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
          <Button variant='success'
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
