import React from "react";
import { useSelector } from "react-redux";

export default function Dates() {
  let selectedDates = useSelector((state) => state.listings.selectedDates);
  return (
    <div className="w-full flex flex-col gap-2 border-[1px] border-gray-400 rounded-lg text-xs">
      <div className="w-full h-14 flex justify-between items-center border-b-[1px]   border-gray-400">
        <div className="border-r-[1px] border-gray-400 flex-1 p-2  h-full">
          <p>CHECK-IN</p>
          <p className="text-sm">
            {selectedDates.checkIn ? selectedDates.checkIn : "date"}
          </p>
        </div>

        <div className="flex-1 p-2  h-full">
          <p>CHECK-IN</p>
          <p className="text-sm">
            {selectedDates.checkOut ? selectedDates.checkOut : "date"}
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center p-2">
        <div>
          <p>GUESTS</p>
          <p className="text-sm">1 guest</p>
        </div>
        <img
          src="/assets/icons/left.png"
          alt=""
          className=" w-3 h-4 rotate-[-90deg]"
        />
      </div>
    </div>
  );
}
