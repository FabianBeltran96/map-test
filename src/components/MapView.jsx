import { MapContainer, TileLayer, Marker, Popup, L } from "react-leaflet";
import Leaflet from "leaflet";
import React from "react";
import "leaflet/dist/leaflet.css";

const MapView = (props) => {
  return (
    <MapContainer center={[6.204824, -75.601371]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {!props.markers && (
        <>
          <Marker position={props.markers.cedi_coords}>
            <Popup>Casa</Popup>
          </Marker>
          <Marker position={props.markers.client_coords}>
            <Popup>Cedi</Popup>
          </Marker>
        </>
      )}
    </MapContainer>
  );
};
export default MapView;
