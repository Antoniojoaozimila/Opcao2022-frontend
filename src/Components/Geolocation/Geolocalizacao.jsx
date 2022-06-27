import React, { Component, useEffect, useState } from "react";
import { render } from "react-dom";
import Maps from "../Maps/Maps";

const Geolocalizacao = () => {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);

  const getLocation = (x, y) => {
    setLat(x);
    setLong(y);
    console.log(lat);
    console.log(long);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getLocation(position.coords.latitude, position.coords.longitude);
      /* <Maps cordLat={position.coords.latitude} />*/
    });
  });
  return (
    <>
      <Maps lant={lat} long={long} />
    </>
  );
};

export default Geolocalizacao;
