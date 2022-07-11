import React, { Component, useEffect, useState } from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

import Geocode from "react-geocode";
import Usuario from "../../Pages/Usuarios/Usuario";

import icon from "./constants";

const containerStyle = {
  width: "800px",
  height: "400px",
};

function Maps() {
  const [lant, setLant] = useState("");
  const [long, setLong] = useState("");
  const [cidade, setCidade] = useState(null);

  const getLocation = (x, y) => {
    setLant(x);
    setLong(y);
    console.log(x);
    console.log(y)
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

  const center = {
    lat: Number(lant),
    lng: Number(long),
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBlo2Bml6zmqP1_xtT3aLybZdWZNP7l8CM",
  });
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    
   <div>
 <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
      <Marker position={-25.9293184, 32.5582848} icon={icon}>
          <Popup>Here you are ^_^</Popup>
        </Marker>
      
      </GoogleMap>
      <div>
        
      </div>

      
   </div>
   
  ) : (
    <></>
  );
}

export default React.memo(Maps);
