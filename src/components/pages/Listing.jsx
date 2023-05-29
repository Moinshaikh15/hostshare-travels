import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TopInfo from "../sub-components/listings/TopInfo";
import ImageContainer from "../sub-components/listings/ImageContainer";
import { toggleCategories } from "../../redux/user/userSlice";
import AllImages from "../sub-components/listings/AllImages";
import ListingDescContainer from "../sub-components/listings/ListingDescContainer";
import ImageSlider from "../sub-components/listings/ImageSlider";
import { useNavigate } from "react-router-dom";
import Information from "../sub-components/listings/Information";
import Reservation from "../sub-components/listings/Reservation";
import ReservationMobile from "../sub-components/listings/ReservationMobile";

export default function Listing() {
  const showAllImages = useSelector((state) => state.user.showAllImages);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    dispatch(toggleCategories(true));
  }, []);

  return (
    <div className="flex flex-col gap-6 px-[13vw] py-24 max-sm:p-4 max-sm:pt-[340px] ">
      <TopInfo />

      {/* top container for mobile */}
      <div className="sm:hidden w-screen absolute top-0 left-0">
        <div className="h-10 flex justify-between items-center px-2">
          <img
            src="/assets/icons/left.png"
            alt=""
            className="w-4 h-5"
            onClick={goBack}
          />
          <div className="flex justify-end items-center gap-[18px]">
            <img src="/assets/icons/upload.png" alt="" className="w-[20px]" />
            <img src="/assets/icons/heart2.png" alt="" className="w-4" />
          </div>
        </div>
        <ImageSlider />
      </div>

      <ImageContainer />

      {showAllImages ? <AllImages /> : ""}

      <ListingDescContainer />
    </div>
  );
}
