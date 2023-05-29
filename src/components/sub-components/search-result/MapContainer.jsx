import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { useSelector } from "react-redux";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_API;
export default function MapContainer() {
  const { filteredData } = useSelector((state) => state.listings);
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    // Create the map instance
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [
        filteredData[0]?.info.location.long,
        filteredData[0]?.info.location.lat,
      ], // Set the initial center coordinates
      zoom: 10, // Set the initial zoom level
    });

    // Add the geocoder control
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
    });
    mapRef.current.addControl(geocoder);

    // Clean up on unmount
    return () => {
      mapRef.current.remove();
    };
  }, []);

  useEffect(() => {
    // Add markers to the map
    if (mapRef.current && filteredData && filteredData.length > 0) {
      filteredData.forEach((marker) => {
        const el = document.createElement("div");
        el.className = "marker";
        el.innerHTML = `<span class="bg-white px-4 py-2 rounded-xl">$${marker.info.price}</span>`;

        new mapboxgl.Marker(el)
          .setLngLat({
            lng: marker.info.location.long,
            lat: marker.info.location.lat,
          })
          .addTo(mapRef.current);
      });
    }
  }, [filteredData]);
  return <div ref={mapContainerRef} className="w-full h-full" />;
}
