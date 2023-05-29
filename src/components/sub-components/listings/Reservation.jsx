import React from "react";
import { useSelector } from "react-redux";
import Dates from "./Dates";

export default function Reservation() {
  let selectedListing = useSelector((state) => state.listings.selectedListing);

  return (
    <div className="w-[380px] h-[480px] border-2 bg-white flex flex-col justify-start items-center gap-4 rounded-2xl shadow-xl p-6 max-sm:hidden sticky top-[20vh] right-0">
      <h1 className="w-full text-2xl ">
        {selectedListing.info.currency.symbol}
        {selectedListing.info.price}
        <span className="text-sm font-normal"> night</span>
      </h1>

      <div className="w-full flex flex-col justify-center items-center gap-4">
        <Dates />

        <button className=" bg-[#329a9a] w-full p-4 text-white rounded-lg">
          Reserve
        </button>

        <p className=" text-sm">You won't be charged yet</p>

        <div className="w-full flex justify-between items-center underline">
          <p>{selectedListing.info.price} * 5 nights</p>
          <p>
            {" "}
            {selectedListing.info.currency.symbol}
            {selectedListing.info.price * 5}
          </p>
        </div>

        <div className="w-full flex justify-between items-center underline">
          <p>Airbnb service fee</p>
          <p> {selectedListing.info.currency.symbol}50</p>
        </div>

        <div className="w-full h-20 flex justify-between items-center text-lg border-t-[1px]">
          <h2 className="">Total Before Taxes</h2>
          <h2>
            {selectedListing.info.currency.symbol}{" "}
            {selectedListing.info.price * 5 + 50}
          </h2>
        </div>
      </div>
    </div>
  );
}
