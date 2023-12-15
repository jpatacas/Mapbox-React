import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css"; //fix css warning with React

import mapboxApiToken from "./mapboxapi.js";

const Map = () => {
  useEffect(() => {
    mapboxgl.accessToken = mapboxApiToken;

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11", // You can change the style
      center: [-74.5, 40], // Initial coordinates (longitude, latitude)
      zoom: 9, // Initial zoom level
    });

    return () => map.remove(); // Clean up the map on component unmount
  }, []);

  return (
    <>
      <div
        id="map"
        className="full-screen"
        style={{ width: "100%", height: "100%" }}
      />
    </>
  );
};

export default Map;
