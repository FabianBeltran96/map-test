import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import React from "react";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-icon.png";
import { L, Icon } from "leaflet";

const cediIcon = new Icon({
  iconUrl:
    "https://raw.githubusercontent.com/FabianBeltran96/map-test/main/src/assets/img/iconCedi.png",
});

const clientIcon = new Icon({
  iconUrl:
    "https://raw.githubusercontent.com/FabianBeltran96/map-test/main/src/assets/img/iconHouse.png",
});
// let DefaultIcon = L.icon({
//   iconUrl: icon,
//   shadowUrl: iconShadow,

//   iconSize: [25, 41],
//   iconAnchor: [12.5, 41],
//   shadowSize: [41, 41],
//   popupAnchor: [0, -41],
// });

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
      <Marker position={props.markers.cedi_coords} icon={cediIcon}>
        <Popup>Casa</Popup>
      </Marker>
      <Marker position={props.markers.client_coords} icon={clientIcon}>
        <Popup>Cedi</Popup>
      </Marker>
    </MapContainer>
  );
};
export default MapView;
