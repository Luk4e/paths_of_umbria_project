import React,{ useEffect, useState } from 'react';
import Path from '../Components/Path';
import { useDispatch, useSelector } from 'react-redux';
import { initializePaths } from '../reducers/pathReducer';
import { Link } from 'react-router-dom';
import { Badge, Spinner, Row, Button, Collapse, Col, Container, Form, ToggleButton, ButtonGroup } from 'react-bootstrap';
import FilterComp from '../Components/FilterComp';
import { filterChangeSearchWord, switchlistmapview } from '../reducers/filterReducer';
import BigMapView from '../Components/BigMapView';
import PlaceholderPath from '../Components/PlaceholderPath';

const numberPlaceholderCard = [0,1,2];

const PathsAPiedi = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const dispatch = useDispatch();

  const {
    altitude_min,
    altitude_max,
    length_min,
    length_max,
    multipleParkName,
    multipleDifficultLevel,
    loopAllYesNo,
    searchWord,
    switchmaplist,
  } = useSelector(state => state.filterParams);

  const isLoading = useSelector(({ paths }) => {
    return paths.isLoading;
  });

  const paths = useSelector(({ paths }) => {
    let result = paths.pathsList;

    if( multipleParkName.length !== 0){
      result = result.filter(path => multipleParkName.includes(path.park_name));
    }
    if( multipleDifficultLevel.length !== 0){
      result = result.filter(path => multipleDifficultLevel.includes(path.difficult));
    }
    if( (loopAllYesNo).toLowerCase() !== 'tutti') {
      result = result.filter(path => path.loop === (loopAllYesNo === 'Si' ? true : false));
    }
    if( (searchWord).toLowerCase() !== '') {
      result = result.filter(path => path.title.toLowerCase().includes(searchWord.toLowerCase()));
    }
    if( (altitude_min) !== '') {
      result = result.filter(path => path.average_drop >= altitude_min);
    }
    if( (altitude_max) !== '') {
      result = result.filter(path => path.average_drop <= altitude_max);
    }
    if( (length_max) !== '') {
      result = result.filter(path => path.path_length <= length_max);
    }
    if( (length_min) !== '') {
      result = result.filter(path => path.path_length >= length_min);
    }

    return result;
  }
  );

  const stylePathContainer = {
    marginBottom:'20px',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    paddingTop: '20px',
    gap: '40px'
  };

  const styleLink = {
    textDecoration: 'none',
    cursor: 'default',
    color: 'black'
  };

  const cardsOrMap = (switchButton) => {
    const cards = isLoading ? numberPlaceholderCard.map(p => <PlaceholderPath key={p}/>) : paths
      .map((path) => {
        return(
          <Link style={styleLink} to={path.id} key={ path.id }>
            <Path
              title = { path.title }
              park_name = {path.park_name }
              starting_point = {path.starting_point }
              path_length = { path.path_length }
              average_time = { path.average_time }
              average_drop= { path.average_drop }
              loop = { path.loop }
              difficult = { path.difficult }
              listOrMap = { true }
            />
          </Link>
        );
      });
    const mapView = <BigMapView mapInfoPoint={paths.filter(pa => (Array.isArray(pa.starting_lat_long) && pa.starting_lat_long.length))} />;
    return switchButton ? <Container style={stylePathContainer}>{cards}</Container> : mapView;
  };

  useEffect(() => {
    dispatch(initializePaths());
  },[]);

  return (
    <div style={{ marginTop: '20px' }}>
      <Container>
        <Row style={{ marginBottom:'20px',  marginRight: '10px' }}>
          <Col xs={{ span:3, offset:7 }}>
            <ButtonGroup>
              <ToggleButton disabled={switchmaplist} onClick={() => dispatch(switchlistmapview(true))}>Lista</ToggleButton>
              <ToggleButton disabled={!switchmaplist} onClick={() => dispatch(switchlistmapview(false))}>Mappa</ToggleButton>
            </ButtonGroup>
          </Col>
        </Row>
        <Row className="justify-content-md-center" style={{ marginBottom:'20px' }}>
          <Col xs={12} md={4} >
            <Form.Control
              type="text"
              value={searchWord}
              onChange={(event) => dispatch(filterChangeSearchWord(event.target.value))}
              placeholder="Search"
              aria-describedby="searchWordArea"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={{ span:4, offset:4 }}>
            <div className="d-grid gap-2">
              <Button
                onClick={() => setOpenFilter(!openFilter)}
                aria-controls="filter-collapse"
                aria-expanded={openFilter}
                style={{ marginBottom: '20px' }}
              >
                Filtri
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={{ span:10, offset:1 }}>
            <Collapse in={openFilter}>
              <div id="filter-collapse">
                <FilterComp />
              </div>
            </Collapse>
          </Col>
        </Row>
        <Row>
          <Col xs={{ span:10, offset:1 }}>
            <h5>Percorsi trovati: {!isLoading ? <Badge bg="primary" >{paths.length}</Badge> : <Badge bg="primary" >
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            </Badge>}
            </h5>
          </Col>
        </Row>
      </Container>
      {cardsOrMap(switchmaplist)}
    </div>);
};

export default PathsAPiedi;
