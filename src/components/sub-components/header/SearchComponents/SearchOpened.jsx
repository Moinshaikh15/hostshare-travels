import React from "react";
import OpenedSearchBar from "./OpenedSearchBar";
import { useDispatch } from "react-redux";
import { toggleSearch } from "../../../../redux/user/userSlice";

export default function SearchOpened() {
  let dispatch = useDispatch();
  return (
    <div className="flex justify-center items-center gap-6 max-sm:hidden">
      <div className="flex justify-center items-center gap-6 animate-[popOut_0.2s_ease-in-out_forwards]">
        <div className="border-b-2 border-gray-500 h-12 flex justify-center items-center cursor-pointer">
          Stays
        </div>
        <div className="cursor-pointer">Experiences</div>
        <div className="cursor-pointer">Online Experiences</div>
      </div>

      <div
        className="w-full h-screen absolute top-[80px] z-11 flex items-start bg-black bg-opacity-20"
        onClick={() => dispatch(toggleSearch())}
      >
        <div
          className="w-full h-[88px]  flex justify-center items-center bg-white"
          onClick={(e) => e.stopPropagation()}
        >
          <OpenedSearchBar />
        </div>
      </div>
    </div>
  );
}
