import React, { useEffect, useState } from "react";
import TopHeader from "../sub-components/header/TopHeader";
import Categories from "../sub-components/header/Categories";
import { useDispatch, useSelector } from "react-redux";
import { toggleCategories } from "../../redux/user/userSlice";

export default function Header() {
  let dispatch = useDispatch();
  let hideCategories = useSelector((state) => state.user.hideCategories);
  useEffect(() => {
    if (window.location.href.includes("rooms") && hideCategories)
      dispatch(toggleCategories(true));
    else dispatch(toggleCategories(false));
  }, [hideCategories]);

  return (
    <div
      className={`w-full fixed top-0 z-10 bg-white  border-b-[1px] max-sm:${
        hideCategories ? "hidden" : ""
      }`}
    >
      <TopHeader />
      {!hideCategories ? <Categories /> : ""}
    </div>
  );
}
