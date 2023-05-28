import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSelectedListing } from "../../../redux/listings/listingsSlice";
import { useNavigate } from "react-router-dom";
import { toggleCategories } from "../../../redux/user/userSlice";

export default function HotelCard({ item }) {
  const dispatch = useDispatch();
  const goto = useNavigate();
  return (
    <div
      className="min-w-[312px] flex-1 h-[420px] flex flex-col justify-start items-start gap-2 relative cursor-pointer"
      onClick={() => {
        dispatch(setSelectedListing(item));
        dispatch(toggleCategories(true));
        goto(`/rooms/${item.info.id}`);
      }}
    >
      <img
        src={item.info.mainImage.url}
        alt=""
        className="w-full h-[300px] object-cover rounded-xl"
      />
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <p>{`${item.info.location.city}, ${item.info.location.country.title}`}</p>
          <div className="flex justify-center items-center">
            <img src="/assets/icons/star.png" alt="star" className="w-4" />{" "}
            {item.info.ratings.value}
          </div>
        </div>

        <p className=" text-gray-500">150 Kilometers away</p>
        <p className=" text-gray-500">1-6 Jun</p>
      </div>

      <p>
        {item.info.currency.symbol}
        {item.info.price} night
      </p>

      {/* heart */}
      <img
        src="/assets/icons/heart.png"
        alt=""
        className="w-8 absolute right-1 top-1"
      />
    </div>
  );
}
