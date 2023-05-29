import React from "react";
import Title from "./Title";
import Description from "./Description";
import Amenities from "./Amenities";
import Location from "./Location";

export default function Information() {
  return (
    <div className="max-sm:w-[91vw] flex-1 flex flex-col justify-center items-center gap-10">
      <Title />

      <Description />

      <Amenities />

      <Location />
    </div>
  );
}
