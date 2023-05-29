import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowAllImages } from "../../../../redux/user/userSlice";

const ImageSlider = () => {
  let selectedListing = useSelector((state) => state.listings.selectedListing);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const dispatch = useDispatch();

  const handleNext = () => {
    const newIndex =
      (currentImageIndex + 1) % selectedListing.info.images.data.length;
    setCurrentImageIndex(newIndex);
  };

  const handlePrevious = () => {
    const newIndex =
      (currentImageIndex - 1 + selectedListing.info.images.data.length) %
      selectedListing.info.images.data.length;
    setCurrentImageIndex(newIndex);
  };

  useEffect(() => {}, [selectedListing]);

  return (
    <div>
      <button
        onClick={handlePrevious}
        className="w-6 h-6 absolute top-[50%] left-2  bg-black bg-opacity-20 rounded-full"
      >
        &lt;
      </button>
      <img
        src={selectedListing?.info.images.data[currentImageIndex].url}
        alt="Slider Image"
        className="w-full h-[280px] object-cover"
        onClick={() => dispatch(setShowAllImages())}
      />
      <button
        onClick={handleNext}
        className=" w-6 h-6 absolute top-[50%] right-2  bg-black bg-opacity-20 rounded-full"
      >
        &gt;
      </button>
    </div>
  );
};

export default ImageSlider;
