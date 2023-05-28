import React from "react";
import Search from "./SearchComponents/Search";
import UserInfo from "./UserInfo";
import { useSelector } from "react-redux";

export default function TopHeader() {
  let hideCategories = useSelector((state) => state.user.hideCategories);
  return (
    <div
      className={`min-h-[83px] ${
        hideCategories ? "px-[13.1vw]" : "px-[5.1vw]"
      } flex justify-between items-center border-b-[1px] relative`}
    >
      <div className="w-[20vw] max-sm:hidden">
        <img
          src="/assets/logo/Hostshare-green.png"
          alt=""
          className="w-[140px]"
        />
      </div>

      <Search />
      <UserInfo />
    </div>
  );
}
