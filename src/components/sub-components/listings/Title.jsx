import React from "react";
import { useSelector } from "react-redux";

export default function Title() {
  let selectedListing = useSelector((state) => state.listings.selectedListing);
  return (
    <div className="w-full max-sm:w-[91vw] flex justify-between items-center border-b-[1px] pb-10">
      <div>
        <h1 className="text-2xl">
          {selectedListing.info.title} hosted by{" "}
          {selectedListing.info.host.name}{" "}
        </h1>
        <div className="flex justify-start items-center gap-2">
          {selectedListing.info.details.data.map((el, indx) => (
            <div
              className="flex justify-center items-center gap-1"
              key={indx + "dddd"}
            >
              <p>
                {el.type} {el.value}
              </p>
              {indx !== selectedListing.info.details.data.length - 1 ? (
                <span className="w-0.5 h-0.5 bg-black rounded-full block"></span>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
      <img
        src={selectedListing.info.host.avatar.url}
        alt=""
        className="w-16 rounded-full"
      />
    </div>
  );
}
