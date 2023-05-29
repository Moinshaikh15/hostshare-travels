import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedInput,
  toggleSearch,
} from "../../../../redux/user/userSlice";
import {
  toggleShowDateRange,
  toggleShowGuests,
  toggleShowSearchCities,
} from "../../../../redux/user/userSlice";
import GuestsCard from "./GuestsCard";
import { useNavigate } from "react-router-dom";
import {
  filterData,
  setSelectedGuests,
} from "../../../../redux/listings/listingsSlice";

export default function GuestsInput() {
  let goto = useNavigate();
  let selectedInput = useSelector((state) => state.user.selectedInput);
  let { showSearchCities, showDateRange, showGuests } = useSelector(
    (state) => state.user
  );
  let { selectedCity } = useSelector((state) => state.listings);
  let dispatch = useDispatch();

  const handleInputChange = (event) => {
    dispatch(setSelectedGuests(event.target.value));
  };
  return (
    <div
      className={`w-[20rem] h-full px-6 py-4 pr-2 rounded-[40px] flex justify-between items-center relative ${
        selectedInput === "AddGuest"
          ? "bg-white shadow-lg drop-shadow-lg shadow-gray-400"
          : ""
      }`}
      onClick={() => {
        dispatch(setSelectedInput("AddGuest"));
        if (showSearchCities) dispatch(toggleShowSearchCities());
        if (showDateRange) dispatch(toggleShowDateRange());
        if (!showGuests) dispatch(toggleShowGuests());
      }}
    >
      <div>
        <p className="text-xs font-bold">Who</p>
        <input
          type="number"
          name=""
          id=""
          placeholder="Search destinations"
          className="outline-none bg-transparent"
          min="1"
          onChange={handleInputChange}
        />
      </div>

      <button
        className={`h-[50px] bg-[#329a9a] text-white p-1 flex justify-center items-center gap-4 ${
          selectedInput === "AddGuest"
            ? "w-[120px] rounded-[40px]"
            : "w-[50px] rounded-[50px]"
        }`}
        onClick={() => {
          if (selectedCity !== "") {
            dispatch(filterData());
            goto(`/s/${selectedCity}`);
          }
          dispatch(toggleSearch());
        }}
      >
        <img src="/assets/icons/search.png" alt="search icon" className="w-[22px]" />
        {selectedInput === "AddGuest" ? <p>Search</p> : ""}
      </button>

      {showGuests ? <GuestsCard /> : ""}
    </div>
  );
}
