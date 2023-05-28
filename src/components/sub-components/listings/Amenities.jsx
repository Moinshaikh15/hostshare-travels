import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Amenities() {
  let selectedListing = useSelector((state) => state.listings.selectedListing);
  let [amenities1, setAmenities1] = useState([]);
  let [amenities2, setAmenities2] = useState([]);
  useEffect(() => {
    setAmenities1(selectedListing.info.amenities.data.slice(0, 5));
    setAmenities2(selectedListing.info.amenities.data.slice(5, 10));
  }, []);

  return (
    <div className="w-full flex flex-col justify-start items-start gap-4 border-b-[1px] pb-10">
      <h1 className="text-2xl">What this place offers</h1>
      <div className="w-full flex justify-start items-start ">
        <div className="flex-1 flex flex-col justify-start items-start gap-4">
          {amenities1.map((el, indx) => (
            <div key={indx + el.title}>{el.title}</div>
          ))}
        </div>
        <div className="flex-1 flex flex-col justify-start items-start  gap-4 max-sm:hidden">
          {amenities2.map((el, indx) => (
            <div key={el.title + indx}>{el.title}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
