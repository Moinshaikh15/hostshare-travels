import React from "react";
import { useDispatch } from "react-redux";
import { toggleSearch } from "../../../../redux/user/userSlice";

export default function SearchBar() {
  let dispatch = useDispatch();

  return (
    <div
      className="w-[348px] h-[48px] flex justify-center items-center gap-4 border-[1px] border-gray-300 rounded-[40px] shadow-3xl text-sm transition-shadow  duration-200 ease-in hover:shadow-md cursor-pointer animate-[popIn_0.2s_ease-in-out_forwards] max-sm:hidden"
      onClick={() => dispatch(toggleSearch())}
    >
      <p className="ml-[16px]">Anywhere</p>
      <div className="h-[20px] w-[1px] bg-gray-300"></div> {/* vertical line */}
      <p>Any Week</p>
      <div className="h-[20px] w-[1px] bg-gray-300"></div> {/* vertical line */}
      <p className="text-gray-400">Add Guests</p>
      <div className="w-[30px] h-[30px] bg-[#329a9a] rounded-[50%] p-1 flex justify-center items-center ml-[4px]">
        <img src="/assets/icons/search.png" alt="" className="w-[18px]" />
      </div>
    </div>
  );
}
