import React from "react";
import { Marker } from "react-leaflet";

const Markers = (props) => {
  const { cediCoord, clientCoor } = props;
  console.log(props);
  return (
    <>
      <Marker position={cediCoord} />
      <Marker position={clientCoor} />
    </>
  );
};

export default Markers;
