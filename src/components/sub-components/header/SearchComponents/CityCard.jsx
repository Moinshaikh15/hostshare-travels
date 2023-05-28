import React from "react";
import { useDispatch } from "react-redux";
import {
  setSelectedCity,
  toggleShowSearchCities,
} from "../../../../redux/listings/listingsSlice";
import { setSelectedInput } from "../../../../redux/user/userSlice";

export default function CityCard({ city }) {
  const dispatch = useDispatch();
  
  return (
    <div
      className="flex justify-start items-center gap-4 px-4 py-[10px] max-sm:py-[5px] hover:bg-slate-100"
      onClick={() => {
        dispatch(setSelectedCity(city));
        dispatch(toggleShowSearchCities());
        dispatch(setSelectedInput(""));
      }}
    >
      <div className="w-12 max-sm:w-10 h-12 max-sm:h-10 bg-[#ebebeb] flex justify-center items-center rounded-xl">
        <img
          src="/assets/icons/location.png"
          alt=""
          className="w-6 max-sm:w-4 h-6 max-sm:h-4"
        />
      </div>
      <p className=""> {city}</p>
    </div>
  );
}
