import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowAllImages } from "../../../redux/user/userSlice";

export default function ImageContainer() {
  let selectedListing = useSelector((state) => state.listings.selectedListing);
  let [imageArr, setImageArr] = useState([]);
  let [imageArr2, setImageArr2] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    setImageArr(() => selectedListing.info.images.data.slice(2, 4));
    setImageArr2(() => selectedListing.info.images.data.slice(4, 6));
  }, []);

  return (
    <div className="w-full flex justify-start items-center gap-2 max-sm:hidden">
      <img
        src={selectedListing.info.mainImage.url}
        alt="listing image"
        className="flex-1 h-[370px] object-cover rounded-l-xl cursor-pointer"
        onClick={() => dispatch(setShowAllImages())}
      />

      <div className="flex-1 flex gap-2">
        <div className="flex-1 flex flex-col gap-2 ">
          {imageArr.map((image,indx) => (
            <img
              key={image.url}
              src={image.url}
              alt={`listing image ${indx}`}
              className=" h-[181px] object-cover object-center cursor-pointer"
              style={{
                imageRendering: "crisp-edges",
              }}
              onClick={() => dispatch(setShowAllImages())}
            />
          ))}
        </div>

        <div className="flex-1 flex flex-col gap-2 relative">
          {imageArr2.map((image, indx) => (
            <img
              key={image.url}
              src={image.url}
              alt={`listing image ${indx}`}            
                className={`w-full h-[181px] object-cover cursor-pointer ${
                indx === 0 ? "rounded-tr-xl" : "rounded-br-xl"
              }`}
              onClick={() => dispatch(setShowAllImages())}
            />
          ))}
          <button
            className="absolute bottom-6 right-6 bg-white flex justify-center items-center gap-2 px-4 py-1 border-[1px] border-black rounded-lg cursor-pointer"
            onClick={() => dispatch(setShowAllImages())}
          >
            <img src="/assets/icons/dots.png" alt="dots icon" className="w-3" />
            <p>Show all photos</p>
          </button>
        </div>
      </div>
    </div>
  );
}
