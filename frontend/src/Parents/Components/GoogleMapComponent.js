import React, { useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function GoogleMapComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    apiKey: '',
  });

  const [markers, setMarkers] = useState([]);

  const onLoad = (map) => {
    // Example of using map instance, such as fitBounds
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
  };

  const onMapClick = (event) => {
    // Add new marker to the markers array
    const newMarker = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    setMarkers([...markers, newMarker]);
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onClick={onMapClick}
      onLoad={onLoad}
    >
      {/* Render markers */}
      {markers.map((marker, index) => (
        <Marker key={index} position={marker} />
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(GoogleMapComponent);
