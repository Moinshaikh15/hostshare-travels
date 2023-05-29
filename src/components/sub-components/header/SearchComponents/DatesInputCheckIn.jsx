import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedInput } from "../../../../redux/user/userSlice";
import {
  toggleShowDateRange,
  toggleShowGuests,
  toggleShowSearchCities,
} from "../../../../redux/user/userSlice";
import DateRange from "./DateRange";
export default function DatesInputCheckIn() {
  const dispatch = useDispatch();
  let selectedInput = useSelector((state) => state.user.selectedInput);
  let { showSearchCities, showDateRange, showGuests } = useSelector(
    (state) => state.user
  );
  let { selectedDates } = useSelector((state) => state.listings);
  useEffect(() => {}, [selectedInput]);

  return (
    <div
      className={`w-[8rem] h-full px-6 flex flex-col justify-center rounded-[40px] relative ${
        selectedInput === "checkIn"
          ? "bg-white shadow-lg drop-shadow-lg shadow-gray-400"
          : ""
      }`}
      onClick={() => {
        dispatch(setSelectedInput("checkIn"));
        if (showSearchCities) dispatch(toggleShowSearchCities());
        if (!showDateRange) dispatch(toggleShowDateRange());
        if (showGuests) dispatch(toggleShowGuests());
      }}
    >
      <p className="text-xs font-bold">Check in</p>
      <p className="text-gray-400 ">
        {selectedDates.checkIn === "" ? "Add dates" : selectedDates.checkIn}
      </p>

      {showDateRange ? <DateRange /> : ""}
    </div>
  );
}
