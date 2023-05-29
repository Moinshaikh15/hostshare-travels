import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HotelCard from "../sub-components/common/HotelCard";
import { toggleCategories } from "../../redux/user/userSlice";
import BottomBar from "../layout/BottomBar";

export default function Index() {
  const listings = useSelector((state) => state.listings.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleCategories(false));
  }, []);

  const [visibleListings, setVisibleListings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Number of hotel cards to render per page
  const loadingRef = useRef(null);

  useEffect(() => {
    const loadNextPage = () => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const nextListings = listings.slice(startIndex, endIndex);

      setVisibleListings((prevListings) => [...prevListings, ...nextListings]);
      setCurrentPage((prevPage) => prevPage + 1);
    };

    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight) {
        loadNextPage();
      }
    };

    // Attach event listener for scrolling
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPage, listings, itemsPerPage]);

  useEffect(() => {
    // Set the initial visible listings
    const startIndex = 0;
    const endIndex = startIndex + itemsPerPage;
    const initialListings = listings.slice(startIndex, endIndex);
    setVisibleListings(initialListings);
    setCurrentPage(2);
  }, [listings, itemsPerPage]);

  return (
    <div className="flex flex-wrap justify-between pt-10 gap-6  max-sm:mt-[140px] px-[5.1vw] max-sm:px-4 mt-[164px]">
      {visibleListings.map((item, indx) => (
        <HotelCard key={item.info.id + indx} item={item} />
      ))}
      <div ref={loadingRef}></div>
      <BottomBar />
    </div>
  );
}
