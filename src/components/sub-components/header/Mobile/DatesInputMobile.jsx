import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedInput } from "../../../../redux/user/userSlice";
import {
  toggleShowDateRange,
  toggleShowGuests,
  toggleShowSearchCities,
} from "../../../../redux/user/userSlice";
import DateRange from "../SearchComponents/DateRange";

export default function DatesInputMobile() {
  const dispatch = useDispatch();
  let selectedInput = useSelector((state) => state.user.selectedInput);
  let { showSearchCities, showDateRange, showGuests } = useSelector(
    (state) => state.user
  );
  let { selectedDates } = useSelector((state) => state.listings);
  useEffect(() => {}, [selectedInput]);

  return (
    <>
      {selectedInput === "checkIn" ? (
        <div
          className={`w-[90vw] px-2 py-2 flex flex-col justify-center rounded-[20px] relative ${
            selectedInput === "checkIn"
              ? "bg-white shadow-lg drop-shadow-lg shadow-gray-400"
              : ""
          }`}
        >
          <div
            className="h-12  p-2 "
            onClick={() => {
              dispatch(setSelectedInput("checkIn"));
              if (showSearchCities) dispatch(toggleShowSearchCities());
              if (!showDateRange) dispatch(toggleShowDateRange());
              if (showGuests) dispatch(toggleShowGuests());
            }}
          >
            <p className="text-lg font-bold">What's your trip?</p>
          </div>
          <DateRange />
        </div>
      ) : (
        <div
          className="w-[90vw] h-12 flex justify-between items-center p-4 rounded-[12px] border-[1px]"
          onClick={() => {
            dispatch(setSelectedInput("checkIn"));
            if (showSearchCities) dispatch(toggleShowSearchCities());
            if (!showDateRange) dispatch(toggleShowDateRange());
            if (showGuests) dispatch(toggleShowGuests());
          }}
        >
          <p>When</p>
          <p className="text-gray-400 ">
            {selectedDates.checkIn === ""
              ? "dates"
              : `${selectedDates.checkIn}-${selectedDates.checkOut}`}
          </p>
        </div>
      )}
    </>
  );
}
