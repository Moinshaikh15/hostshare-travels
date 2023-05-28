import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Images() {
  let selectedListing = useSelector((state) => state.listings.selectedListing);
  let [images, setImages] = useState([]);
  useEffect(() => {
    let alternatingImages = [];
    let even = 0;
    let allImages = selectedListing.info.images.data;
    for (let i = 0; i < allImages.length; i++) {
      if (even % 2 === 0 || i === allImages.length - 1) {
        alternatingImages.push(allImages[i]);
      } else {
        alternatingImages.push([allImages[i], allImages[i + 1]]);
        i++;
      }
      even++;
    }
    setImages(alternatingImages);
  }, []);

  return (
    <div className="w-[44rem]  max-sm:[20rem] flex flex-wrap gap-[10px] pb-20 ">
      {images?.map((image, index) => {
        if (index % 2 === 0) {
          return (
            <div key={index} className="w-full">
              <img
                src={image.url}
                alt={`Image ${index + 1}`}
                className="w-full h-[30rem] max-sm:h-[14rem] object-cover"
              />
            </div>
          );
        } else if (index % 2 === 1) {
          return (
            <div
              key={index}
              className="w-full flex justify-between items-center gap-[10px]"
            >
              <div className="flex-1">
                <img
                  src={image[0].url}
                  alt={`Image ${index + 1}`}
                  className="w-full"
                />
              </div>
              <div className="flex-1">
                <img
                  src={image[1].url}
                  alt={`Image ${index + 2}`}
                  className="w-full"
                />
              </div>
            </div>
          );
        }
        return null; // Skip rendering for images on even indexes
      })}
    </div>
  );
}
