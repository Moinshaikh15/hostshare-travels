import React from "react";
import { useSelector } from "react-redux";

export default function TopInfo() {
  let selectedListing = useSelector((state) => state.listings.selectedListing);
  return (
    <div className="w-full max-sm:w-[91vw] flex flex-col justify-center gap-[10px] max-sm:border-b-[1px] max-sm:pb-10">
      <h1 className=" text-3xl font-medium">
        {selectedListing?.info?.title}
      </h1>
      <div className="flex justify-between max-sm:px-2">
        
        <div className="flex justify-start items-center gap-1 text-sm">
          <div className="flex justify-center items-center underline">
            <img src="/assets/icons/star.png" alt="" className="w-3 mr-1" />
            <p>{selectedListing?.info?.ratings.value}</p>
          </div>
          <div className="w-[3px] h-[3px] bg-black rounded-2xl"></div>

          <p className="underline">99 reviews</p>
          <div className="w-[3px] h-[3px] bg-black rounded-2xl"></div>
          <p className="underline">
            {selectedListing?.info?.location.city},
            {selectedListing?.info?.location.country.title}
          </p>
        </div>
        <div className="flex justify-end items-center gap-[18px] max-sm:hidden">
          <div className="flex justify-center items-center gap-[6px]">
            <img src="/assets/icons/upload.png" alt="" className="w-[20px]" />
            <p className="underline "> Share</p>
          </div>
          <div className="flex justify-end items-center gap-[6px]">
            <img src="/assets/icons/heart2.png" alt="" className="w-4" />
            <p className="underline max-sm:hidden">Save</p>
          </div>
        </div>
      </div>
    </div>
  );
}
