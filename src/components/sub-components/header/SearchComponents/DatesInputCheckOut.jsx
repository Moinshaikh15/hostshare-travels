import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedInput } from "../../../../redux/user/userSlice";
import {
  toggleShowDateRange,
  toggleShowGuests,
  toggleShowSearchCities,
} from "../../../../redux/listings/listingsSlice";

export default function DatesInputCheckOut() {
  const dispatch = useDispatch();
  let selectedInput = useSelector((state) => state.user.selectedInput);
  let { showSearchCities, showDateRange, showGuests, selectedDates } =
    useSelector((state) => state.listings);
  useEffect(() => {}, [selectedInput]);
  return (
    <div>
      <div
        className={`w-[8rem] h-full px-6 py-4 rounded-[40px] flex flex-col justify-center  ${
          selectedInput === "checkOut"
            ? "bg-white shadow-lg drop-shadow-lg shadow-gray-400"
            : ""
        }`}
        onClick={() => {
          dispatch(setSelectedInput("checkOut"));

          if (showSearchCities) dispatch(toggleShowSearchCities());
          if (!showDateRange) dispatch(toggleShowDateRange());
          if (showGuests) dispatch(toggleShowGuests());
        }}
      >
        <p className="text-xs font-bold">Check out</p>
        <p className="text-gray-400">
          {selectedDates.checkOut === "" ? "Add dates" : selectedDates.checkOut}
        </p>
      </div>
    </div>
  );
}
