import React, { Component, useEffect, useState } from "react";
import { render } from "react-dom";
import Maps from "../Maps/Maps";
import Geocode from "react-geocode";

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
      Geocode.setApiKey("AIzaSyBlo2Bml6zmqP1_xtT3aLybZdWZNP7l8CM");
      Geocode.fromLatLng(
        position.coords.latitude,
        position.coords.longitude
      ).then(
        (response) => {
          const address = response.results[0].formatted_address;
          let city, state, country;
          for (
            let i = 0;
            i < response.results[0].address_components.length;
            i++
          ) {
            for (
              let j = 0;
              j < response.results[0].address_components[i].types.length;
              j++
            ) {
              switch (response.results[0].address_components[i].types[j]) {
                case "locality":
                  city = response.results[0].address_components[i].long_name;
                  break;
                case "administrative_area_level_1":
                  state = response.results[0].address_components[i].long_name;
                  break;
                case "country":
                  country = response.results[0].address_components[i].long_name;
                  break;
              }
            }
          }
          console.log(city, state, country);
          console.log(address);
        },
        (error) => {
          console.error(error);
        }
      );
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
