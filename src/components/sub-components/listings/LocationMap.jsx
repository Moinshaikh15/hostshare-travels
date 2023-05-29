import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { useSelector } from "react-redux";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_API;
export default function LocationMap() {
  const selectedListing = useSelector(
    (state) => state.listings.selectedListing
  );
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    // Create the map instance
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [
        selectedListing.info.location.long,
        selectedListing.info.location.lat,
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

  return (
    <div className="w-full max-sm:w-[91vw] h-[40vh] overflow-hidden">
      <div ref={mapContainerRef} className="w-full h-full" />;
    </div>
  );
}
