import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';

const MapComp = ({ mapsPoint, allgpx }) => {
  return(
    <div style={{ marginTop: '40px' }}>
      <MapContainer center={mapsPoint[0]} zoom={13} >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON data={allgpx.toGeoJSON()} style={() => ({
          color: '#4a83ec',
          weight: 2,
          fillColor: '#1a1d62',
          fillOpacity: 1,
        })}/>
      </MapContainer>
    </div>
  );
};

export default MapComp;
