import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, Polyline } from 'react-leaflet';
import { Icon } from 'leaflet';
import { Link } from 'react-router-dom';
import Path from '../Components/Path';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import hikingIcon from '../img/hiking.png';

const centerUmbria = [42.88915423, 12.59553345];

const hikingIconSVG = new Icon({
  iconUrl: hikingIcon,
  iconSize: [35, 35]
});

const BigMapView = ({ mapInfoPoint }) => {

  const styleLink = {
    textDecoration: 'none',
    color: 'black',
    padding:'1px'
  };


  const createOneMarker = (infoPath) => {
    return(
      <Marker icon={hikingIconSVG} key={infoPath.id} position={infoPath.starting_lat_long} >
        <Popup>
          <Link style={styleLink} to={infoPath.id}>
            <Path
              title = { infoPath.title }
              park_name = {infoPath.park_name }
              starting_point = {infoPath.starting_point }
              path_length = { infoPath.path_length }
              average_time = { infoPath.average_time }
              average_drop= { infoPath.average_drop }
              loop = { infoPath.loop }
              difficult = { infoPath.difficult }
              listOrMap = { false }
            />
          </Link>
        </Popup>
      </Marker>
    );
  };

  return(
    <div style={{ padding: '5%' }}>
      <MapContainer center={centerUmbria} zoom={9} tap={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup>
          {mapInfoPoint.map(gp => createOneMarker(gp))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
};

export default BigMapView;
