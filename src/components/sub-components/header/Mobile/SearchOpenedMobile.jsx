import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterData } from "../../../../redux/listings/listingsSlice";
import { toggleSearch } from "../../../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import LocationInputMobile from "./LocationInputMobile";
import DatesInputMobile from "./DatesInputMobile";
import GuestsInputMobile from "./GuestsInputMobile";

export default function SearchOpenedMobile() {
  const goto = useNavigate();
  let { selectedCity } = useSelector((state) => state.listings);
  let dispatch = useDispatch();

  return (
    <div className="h-screen w-screen py-10 sm:hidden relative">
      <img
        src="/assets/icons/close.png"
        alt=""
        className="invert w-6 absolute left-[-10px] top-2 border-[1px] border-gray-400 rounded-full p-1"
        onClick={() => dispatch(toggleSearch())}
      />

      <div className="w-full bg-flex flex flex-col justify-center items-center gap-4 text-sm transition-shadow  duration-200 ease-in  cursor-pointer animate-[popOut_0.2s_ease-in-out_forwards] ">
        <LocationInputMobile />
        <DatesInputMobile />
        <GuestsInputMobile />
      </div>

      <div className="w-[90vw] absolute bottom-0 flex justify-between items-center py-2 z-30">
        <p className="underline">Clear all</p>
        <div
          className={`w-[120px] h-[50px] bg-[#329a9a] text-white p-1 flex justify-center items-center gap-4 rounded-lg `}
          onClick={() => {
            if (selectedCity !== "") {
              dispatch(filterData());
              goto(`/s/${selectedCity}`);
            }
            dispatch(toggleSearch());
          }}
        >
          <img src="/assets/icons/search.png" alt="" className="w-[22px]" />
          <p>Search</p>
        </div>
      </div>
    </div>
  );
}
