import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import React from "react";
import "leaflet/dist/leaflet.css";

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

const MapView = (props) => {
  console.log(props.markers, "props.markers");
  return (
    <MapContainer center={props.markers.client_coords} zoom={13}>
      <ChangeView center={props.markers.client_coords} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={props.markers.cedi_coords}>
        <Popup>Casa</Popup>
      </Marker>
      <Marker position={props.markers.client_coords}>
        <Popup>Cedi</Popup>
      </Marker>
    </MapContainer>
  );
};
export default MapView;
