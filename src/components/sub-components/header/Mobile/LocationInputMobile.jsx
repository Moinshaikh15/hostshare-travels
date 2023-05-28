import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterCities,
  toggleShowDateRange,
  toggleShowGuests,
  toggleShowSearchCities,
} from "../../../../redux/listings/listingsSlice";
import SearchCities from "../SearchComponents/SearchCities";
import { setSelectedInput } from "../../../../redux/user/userSlice";

export default function LocationInputMobile() {
  let selectedInput = useSelector((state) => state.user.selectedInput);
  const [userInput, setUserInput] = useState("");
  let { selectedCity, showSearchCities, showDateRange, showGuests } =
    useSelector((state) => state.listings);
  let dispatch = useDispatch();
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
    dispatch(filterCities(event.target.value));
  };
  useEffect(() => {
    setUserInput(() => selectedCity);
  }, [selectedCity]);
  return (
    <>
      {selectedInput === "location" ? (
        <div
          className={`w-[90vw]  flex flex-col justify-center items-start gap-2 p-4 rounded-[20px] ${
            selectedInput === "location"
              ? "bg-white shadow-lg drop-shadow-lg shadow-gray-400"
              : ""
          }`}
        >
          <div
            className="w-[90vw]"
            onClick={(e) => {
              e.stopPropagation()
              dispatch(setSelectedInput("location"));
              if (!showSearchCities) dispatch(toggleShowSearchCities());
              if (showDateRange) dispatch(toggleShowDateRange());
              if (showGuests) dispatch(toggleShowGuests());
            }}
          >
            <p className="text-lg font-bold">Where to?</p>
            <input
              type="text"
              name=""
              id=""
              placeholder="Search destinations"
              className="outline-none w-[80vw] bg-transparent p-4 border-[1px] rounded-lg"
              value={userInput}
              onChange={handleInputChange}
            />
          </div>
          <SearchCities />
        </div>
      ) : (
        <div
          className="w-[90vw] h-12 flex justify-between items-center p-4 rounded-[12px] border-[1px]"
          onClick={() => {
            dispatch(setSelectedInput("location"));
            if (!showSearchCities) dispatch(toggleShowSearchCities());
            if (showDateRange) dispatch(toggleShowDateRange());
            if (showGuests) dispatch(toggleShowGuests());
          }}
        >
          <p>Where</p>
          <p>{selectedCity ? selectedCity : "I'm flexible"}</p>
        </div>
      )}
    </>
  );
}
