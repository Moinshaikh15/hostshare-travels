import React from "react";
import Information from "./Information";
import Reservation from "./Reservation";
import ReservationMobile from "./Mobile/ReservationMobile";

export default function ListingDescContainer() {
  return (
    <div className="w-full max-sm:w-[91vw] flex justify-between items-start  mt-4 gap-[100px] pb-20 relative">
      <Information />

      <Reservation />

      <ReservationMobile />
    </div>
  );
}
