import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";


const containerStyle = {
  width: "400px",
  height: "400px",
};

function Maps({ lant, long }) {
 

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyC7c8qLV0vBUPgQbJp-CQrOgl41lbJJo88",
  });
  const [map, setMap] = React.useState(null);
  const center = {
    lat: -25.9530206,
    lng: 32.5711991,  
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
