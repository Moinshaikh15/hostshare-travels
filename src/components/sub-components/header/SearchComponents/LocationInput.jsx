import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedInput } from "../../../../redux/user/userSlice";
import {
  toggleShowDateRange,
  toggleShowGuests,
  toggleShowSearchCities,
} from "../../../../redux/user/userSlice";
import SearchCities from "./SearchCities";
import { filterCities, setSelectedCity } from "../../../../redux/listings/listingsSlice";

export default function () {
  const dispatch = useDispatch();
  const selectedInput = useSelector((state) => state.user.selectedInput);
  const { showSearchCities, showDateRange, showGuests } = useSelector(
    (state) => state.user
  );
  const { selectedCity } = useSelector((state) => state.listings);
  const [userInput, setUserInput] = useState("");
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
    dispatch(filterCities(event.target.value));
  };

  const deleteSearch = () => {
    dispatch(setSelectedCity(""))
    
  };

  useEffect(() => {
    setUserInput(() => selectedCity);
  }, [selectedCity]);
  return (
    <div
      className={`w-[20rem] h-full flex flex-col justify-center px-8  rounded-[40px] relative ${
        selectedInput === "location"
          ? "bg-white shadow-lg drop-shadow-lg shadow-gray-400"
          : ""
      }`}
      onClick={() => {
        dispatch(setSelectedInput("location"));
        if (!showSearchCities) dispatch(toggleShowSearchCities());
        if (showDateRange) dispatch(toggleShowDateRange());
        if (showGuests) dispatch(toggleShowGuests());
      }}
    >
      <p className="text-xs font-bold">Where</p>
      <input
        type="text"
        name="locationInput"
        id="locationInput"
        placeholder="Search destinations"
        className="outline-none bg-transparent"
        value={userInput}
        onChange={handleInputChange}
      />
      <img
        src="/assets/icons/close.png"
        alt=""
        className="w-5 invert absolute right-4 bottom-4 p-[2px]"
        onClick={(e) => {
          e.stopPropagation()
          deleteSearch();
        }}
      />
      {showSearchCities ? <SearchCities /> : ""}
    </div>
  );
}
