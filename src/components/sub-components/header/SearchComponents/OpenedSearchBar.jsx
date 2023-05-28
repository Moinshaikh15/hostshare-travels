import React from "react";
import LocationInput from "./LocationInput";
import DatesInputCheckIn from "./DatesInputCheckIn";
import DatesInputCheckOut from "./DatesInputCheckOut";
import GuestsInput from "./GuestsInput";

export default function OpenedSearchBar() {
  return (
    <div className="h-[68px] bg-gray-100 flex justify-center items-center border-[1px] border-gray-300 rounded-[40px] shadow-3xl text-sm transition-shadow  duration-200 ease-in hover:shadow-md cursor-pointer relative animate-[popOut_0.2s_ease-in-out_forwards] ">
      <LocationInput />

      {/* vertical line */}
      <div className="h-[40px] w-[1px] bg-gray-200"></div>

      <DatesInputCheckIn />

      {/* vertical line */}
      <div className="h-[40px] w-[1px] bg-gray-200"></div>

      <DatesInputCheckOut />

      {/* vertical line */}
      <div className="h-[40px] w-[1px] bg-gray-200"></div>

      <GuestsInput />
    </div>
  );
}
