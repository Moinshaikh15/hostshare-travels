import React from "react";
import { useSelector } from "react-redux";
import MapContainer from "../search-result/MapContainer";
import LocationMap from "./LocationMap";

export default function Location() {
  let selectedListing = useSelector((state) => state.listings.selectedListing);
  return (
    <div className="w-full flex flex-col justify-start items-start gap-4 border-b-[1px] pb-10">
      <h1 className="text-2xl">Where you'll be</h1>

      <p>{`${selectedListing.info.location.city}, ${selectedListing.info.location.country.title}`}</p>
      <LocationMap />
    </div>
  );
}
