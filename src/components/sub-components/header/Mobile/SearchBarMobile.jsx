import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setShowSelectedCity,
  toggleSearch,
} from "../../../../redux/user/userSlice";

export default function SearchBarMobile() {
  const dispatch = useDispatch();
  const showSelectedCity = useSelector((state) => state.user.showSelectedCity);
  const selectedCity = useSelector((state) => state.listings.selectedCity);
  useEffect(() => {
    if (window.location.href.includes("/s/"))
      dispatch(setShowSelectedCity(true));
    else dispatch(setShowSelectedCity(false));
  }, [showSelectedCity]);
  return (
    <div
      className="w-[348px] h-[48px] flex justify-between items-center gap-4 border-[1px] border-gray-300 rounded-[40px] shadow-3xl text-sm px-2  transition-shadow  duration-200 ease-in hover:shadow-md cursor-pointer animate-[popIn_0.2s_ease-in-out_forwards] sm:hidden"
      onClick={() => dispatch(toggleSearch())}
    >
      <div className="flex justify-center items-center gap-2">
        <div className="w-8 h-8  p-1 flex justify-center items-center">
          <img
            src="/assets/icons/search.png"
            alt="search icon"
            className="w-[24px] invert"
          />
        </div>

        <div className="flex flex-col justify-center items-start">
          <p className="">
            {selectedCity && showSelectedCity ? selectedCity : "Anywhere"}{" "}
          </p>

          <div className="flex justify-center items-center gap-1 text-xs">
            <p className="text-gray-400 ">Any Week</p>

            {/* vertical line */}
            <div className="h-1 w-1 bg-gray-300 rounded-full"></div>

            <p className="text-gray-400">Add Guests</p>
          </div>
        </div>
      </div>
      <img
        src="/assets/icons/filter.png"
        alt=""
        className="w-8 h-8 border-2 p-1 rounded-full"
      />
    </div>
  );
}
