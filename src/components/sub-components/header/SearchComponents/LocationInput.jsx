import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedInput } from "../../../../redux/user/userSlice";
import {
  toggleShowDateRange,
  toggleShowGuests,
  toggleShowSearchCities,
} from "../../../../redux/listings/listingsSlice";
import SearchCities from "./SearchCities";

export default function () {
  let dispatch = useDispatch();
  const [userInput, setUserInput] = useState("");
  let selectedInput = useSelector((state) => state.user.selectedInput);
  let { selectedCity, showSearchCities, showDateRange, showGuests } =
    useSelector((state) => state.listings);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
    dispatch(filterCities(event.target.value));
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
        name=""
        id=""
        placeholder="Search destinations"
        className="outline-none bg-transparent"
        value={userInput}
        onChange={handleInputChange}
      />
      {showSearchCities ? <SearchCities /> : ""}
    </div>
  );
}
