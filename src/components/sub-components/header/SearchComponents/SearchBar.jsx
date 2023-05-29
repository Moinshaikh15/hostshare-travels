import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setShowSelectedCity,
  toggleSearch,
} from "../../../../redux/user/userSlice";

export default function SearchBar() {
  const selectedCity = useSelector((state) => state.listings.selectedCity);
  const showSelectedCity = useSelector((state) => state.user.showSelectedCity);

  const dispatch = useDispatch();
  useEffect(() => {
    if (window.location.href.includes("/s/"))
      dispatch(setShowSelectedCity(true));
    else dispatch(setShowSelectedCity(false));
  }, [window.location.href]);
  return (
    <div
      className=" h-[48px] flex justify-center items-center gap-4 border-[1px] border-gray-300 rounded-[40px] shadow-3xl text-sm transition-shadow  duration-200 ease-in hover:shadow-md cursor-pointer animate-[popIn_0.2s_ease-in-out_forwards] max-sm:hidden"
      onClick={() => dispatch(toggleSearch())}
    >
      <p className="ml-[16px]">
        {selectedCity && showSelectedCity ? selectedCity : "Anywhere"}{" "}
      </p>
      <div className="h-[20px] w-[1px] bg-gray-300"></div> {/* vertical line */}
      <p>Any Week</p>
      <div className="h-[20px] w-[1px] bg-gray-300"></div> {/* vertical line */}
      <p className="text-gray-400">Add Guests</p>
      <div className="w-[30px] h-[30px] bg-[#329a9a] rounded-[50%] p-1 flex justify-center items-center mr-2">
        <img src="/assets/icons/search.png" alt="" className="w-[18px]" />
      </div>
    </div>
  );
}
