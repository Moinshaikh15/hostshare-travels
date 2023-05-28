import React from "react";
import { useSelector } from "react-redux";

export default function Description() {
  let selectedListing = useSelector((state) => state.listings.selectedListing);
  return (
    <div className="w-full flex justify-between items-center border-b-[1px] pb-10  overflow-hidden">
      <p className="line-clamp-3">{selectedListing.info.description}</p>
    </div>
  );
}
