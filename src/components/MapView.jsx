import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import React from "react";
import { Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";

const MapView = (props) => {
  return (
    <MapContainer center={[6.204824, -75.601371]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[6.204824, -75.601371]}>
        <Popup>Casa</Popup>
      </Marker>
    </MapContainer>
  );
};
export default MapView;
