import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedInput } from "../../../../redux/user/userSlice";
import {
  toggleShowDateRange,
  toggleShowGuests,
  toggleShowSearchCities,
} from "../../../../redux/user/userSlice";
import GuestsCard from "../SearchComponents/GuestsCard";

export default function GuestsInputMobile() {
  let selectedInput = useSelector((state) => state.user.selectedInput);
  let { showSearchCities, showDateRange, showGuests } = useSelector(
    (state) => state.listings
  );
  let dispatch = useDispatch();
  return (
    <div>
      {selectedInput === "AddGuest" ? (
        <div
          className={`w-[90vw]  flex flex-col justify-center items-start gap-2 p-4 rounded-[20px] ${
            selectedInput === "AddGuest"
              ? "bg-white shadow-lg drop-shadow-lg shadow-gray-400"
              : ""
          }`}
        >
          <div
            className="w-full "
            onClick={() => {
              dispatch(setSelectedInput("AddGuest"));
              if (showSearchCities) dispatch(toggleShowSearchCities());
              if (showDateRange) dispatch(toggleShowDateRange());
              if (!showGuests) dispatch(toggleShowGuests());
            }}
          >
            <p className="text-lg font-bold">Who's Coming?</p>
            <input
              type="number"
              name=""
              id=""
              placeholder="Search destinations"
              className="w-full outline-none bg-transparent p-4 border-[1px] rounded-lg"
            />
          </div>
          <GuestsCard />
        </div>
      ) : (
        <div
          className="w-[90vw] h-12 flex justify-between items-center p-4 rounded-[12px] border-[1px]"
          onClick={() => {
            dispatch(setSelectedInput("AddGuest"));
            if (showSearchCities) dispatch(toggleShowSearchCities());
            if (!showDateRange) dispatch(toggleShowDateRange());
            if (showGuests) dispatch(toggleShowGuests());
          }}
        >
          <p>Who</p>
          <p className="text-gray-400 ">Guests</p>
        </div>
      )}
    </div>
  );
}
