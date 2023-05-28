import React from "react";

export default function UserInfo() {
  return (
    <div className="w-[20vw] h-[42px] flex justify-end items-center gap-[6px] max-sm:hidden">
      <div className="w-[158px] h-full flex justify-center items-center rounded-[50px]  hover:bg-gray-100 cursor-pointer ">
        <p>Airbnb your home</p>
      </div>

      <div className="w-[42px] h-full flex justify-center items-center rounded-[50%] hover:bg-gray-100 cursor-pointer">
        <img
          src="/assets/icons/globe.png"
          alt="globe"
          className="w-[16px] h-[16px]"
        />
      </div>

      <div className="w-[80px] h-full flex justify-center items-center gap-[10px] border-[1px] border-gray-400 rounded-[30px] hover:shadow-3xl transition-shadow  duration-200 ease-in cursor-pointer">
        <img
          src="/assets/icons/menu.png"
          alt="menu"
          className="w-[18px] h-[18px]"
        />
        <img
          src="/assets/icons/person.png"
          alt="person"
          className="w-[28px] h-[28px] rounded-[50%] bg-gray-400 p-1"
        />
      </div>
    </div>
  );
}
