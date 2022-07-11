import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from "./constants";

class Map2 extends Component {
  state = { map: null };

  componentDidUpdate(prevProps, prevState) {
    const { map } = this.state;
    if (prevState.map !== map && map) {
      map.on("click", function (e) {
        alert("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng);
      });
    }
  }

  render() {
    const DEFAULT_LATITUDE = -25.943361852618782;
    const DEFAULT_LONGITUDE = 32.56918966770173;
    const latitude = this.props.coords
      ? this.props.coords.latitude
      : DEFAULT_LATITUDE;
    const longitude = this.props.coords
      ? this.props.coords.latitude
      : DEFAULT_LONGITUDE;

    return (
      <MapContainer
        className="leaflet-map"
        center={[latitude, longitude]}
        zoom={17}
        scrollWheelZoom={true}
            style={{ height: "500px", width: "800px"  }}
           
        whenCreated={(map) => this.setState({ map })}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]} icon={icon}>
          <Popup>Here you are ^_^</Popup>
        </Marker>
      </MapContainer>
    );
  }
}

export default Map2;
