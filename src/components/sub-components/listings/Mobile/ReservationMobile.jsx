import React from "react";
import { useSelector } from "react-redux";

export default function ReservationMobile() {
  let selectedListing = useSelector((state) => state.listings.selectedListing);
  let selectedDates = useSelector((state) => state.listings.selectedDates);
  return (
    <div className="w-screen border-2 bg-white flex  justify-between items-center gap-4 p-4 max-sm:fixed bottom-0 left-0 sm:hidden z-20">
      <div className=" flex flex-col justify-center items-start gap-1">
        <h1 className=" text-xl ">
          {selectedListing.info.currency.symbol}
          {selectedListing.info.price}
          <span className="text-sm font-normal"> night</span>
        </h1>

        <p className="text-sm">
          {selectedDates.checkIn
            ? `${selectedDates.checkIn}-${selectedDates.checkOut}`
            : "date"}
        </p>
      </div>

      <button className="bg-[#329a9a]  p-2 px-6 text-white rounded-lg">
        Reserve
      </button>
    </div>
  );
}
