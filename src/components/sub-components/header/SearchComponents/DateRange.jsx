import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useDispatch } from "react-redux";
import { setSelectedDates } from "../../../../redux/listings/listingsSlice";

export default function DateRange() {
  let dispatch = useDispatch();
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  let getMothsNDate = (inputDate) => {
    const date = new Date(inputDate);
    const month = date.toLocaleString("default", { month: "short" });
    const day = date.getDate();
    return `${day} ${month}`;
  };
  let handleSelect = (ranges) => {
    setSelectionRange(ranges.selection);
    dispatch(
      setSelectedDates({
        checkIn: getMothsNDate(ranges.selection.startDate),
        checkOut: getMothsNDate(ranges.selection.endDate),
      })
    );
  };
  return (
    <div className="w-[40rem] max-sm:w-[20rem] bg-white sm:absolute sm:top-[75px] sm:left-[-100%] sm:px-4 sm:py-8 sm:rounded-[40px] flex flex-col">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
    </div>
  );
}
