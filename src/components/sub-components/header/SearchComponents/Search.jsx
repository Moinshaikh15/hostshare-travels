import React, { useEffect } from "react";
import SearchBar from "./SearchBar";
import SearchOpened from "./SearchOpened";
import { useSelector } from "react-redux";
import SearchBarMobile from "../Mobile/SearchBarMobile";
import SearchOpenedMobile from "../Mobile/SearchOpenedMobile";

export default function Search() {
  let isSearchOpened = useSelector((state) => state.user.isSearchOpened);
  useEffect(() => {}, [isSearchOpened]);
  return (
    <div className="w-[40vw] flex justify-center items-center max-sm:w-[90vw]">
      {!isSearchOpened ? (
        <>
          <SearchBar /> <SearchBarMobile />
        </>
      ) : (
        <>
          <SearchOpened />
          <SearchOpenedMobile />
        </>
      )}
    </div>
  );
}
