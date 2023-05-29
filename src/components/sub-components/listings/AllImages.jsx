import React from "react";
import { useDispatch } from "react-redux";
import { setShowAllImages } from "../../../redux/user/userSlice";
import Images from "./Images";

export default function AllImages() {
  const dispatch = useDispatch();

  return (
    <div className="w-full absolute bottom-0 left-0 bg-white z-20 animate-[fadeFromBottom_1s_ease-in-out_forwards] ">
      <div className="h-[10vh] flex justify-between items-center px-6">
        <img
          src="/assets/icons/left.png"
          alt="left icon"
          className=" w-4 h-5 cursor-pointer"
          onClick={() => dispatch(setShowAllImages())}
        />
        <div className="flex justify-end items-center gap-[18px] cursor-pointer">
          <div className="flex justify-center items-center gap-[6px]">
            <img src="/assets/icons/upload.png" alt="upload icon" className="w-[20px]" />
            <p className="underline"> Share</p>
          </div>
          <div className="flex justify-end items-center gap-[6px] cursor-pointer">
            <img src="/assets/icons/heart2.png" alt="hear icon" className="w-4" />
            <p className="underline">Save</p>
          </div>
        </div>
      </div>

      <div className="w-full max-h-[90vh] flex justify-center items-start overflow-x-auto">
        <Images />
      </div>
    </div>
  );
}
