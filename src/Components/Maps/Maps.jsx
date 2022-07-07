import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";


const containerStyle = {
  width: "400px",
  height: "400px",
};

function Maps({ lant, long }) {
 

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBlo2Bml6zmqP1_xtT3aLybZdWZNP7l8CM",
  });
  const [map, setMap] = React.useState(null);
  const center = {
    lat: 123,
    lng: 134,  
  };
  
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Maps);
