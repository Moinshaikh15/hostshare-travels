import React from "react";
import { useSelector } from "react-redux";
import CityCard from "./CityCard";

export default function SearchCities() {
  const filteredCities = useSelector((state) => state.listings.filteredCities);

  return (
    <div className="w-[24rem] max-sm:w-[19rem]  bg-white sm:absolute sm:top-[75px] sm:left-0 px-4 py-8 max-sm:px-0 sm:rounded-[40px] flex flex-col">
      {filteredCities.map((city, indx) => (
        <CityCard key={city + indx} city={city} />
      ))}
    </div>
  );
}
