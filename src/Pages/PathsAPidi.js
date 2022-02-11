import React,{ useEffect, useState } from 'react';
import Path from '../Components/Path';
import { useDispatch, useSelector } from 'react-redux';
import { initializePaths } from '../reducers/pathReducer';
import { filterChangeAltitude, filterChangeLength } from '../reducers/filterReducer';
import { Link } from 'react-router-dom';

const PathsAPiedi = () => {
  const dispatch = useDispatch();
  const paths = useSelector(({ paths, filterParams }) =>
    paths
      .filter(path => path.differenceAltitude > filterParams.altitude)
      .filter(path => path.km > filterParams.minimumLength)
  );

  const { altitude, minimumLength } = useSelector(state => state.filterParams);

  const stylePathContainer = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '40px',
    padding: '50px',
  };

  const styleLink = {
    textDecoration: 'none',
    cursor: 'default',
    color: 'black'
  };

  useEffect(() => {
    dispatch(initializePaths());
  },[dispatch]);

  return (
    <div>
      <div>
        <input
          type="range"
          id="maxAltitude"
          name="maxAltitude"
          min="0"
          step="1"
          max="1000"
          value={altitude}
          onChange={(event) => dispatch(filterChangeAltitude(event.target.value))}
        />
        <label htmlFor="maxAltitude">Dislivello minimo {altitude}</label>
        <br/>
        <input
          type="range"
          id="maxLengthPath"
          name="maxLengthPath"
          min="0"
          step="0.1"
          max="15"
          value={minimumLength}
          onChange={(event) => dispatch(filterChangeLength(event.target.value))}
        />
        <label htmlFor="maxLengthPath">Lunghezza minima {minimumLength}</label>
        <br/>
        <h6>[Bottone reset filtri]</h6>
      </div>
      <div style={stylePathContainer}>
        {paths
          .map((path) => {
            return(
              <Link style={styleLink} to={path.id} key={ path.id }>
                <Path
                  title = { path.title }
                  description = { path.description }
                  km = { path.km }
                  duration = { path.duration }
                  differenceAltitude= { path.differenceAltitude }
                  difficult = { path.difficult }
                  id = {path.id}
                />
              </Link>
            );
          })}
      </div>
    </div>);
};

export default PathsAPiedi;
