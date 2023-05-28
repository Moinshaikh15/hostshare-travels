import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCategories, toggleSearch } from "../../redux/user/userSlice";
import HotelCard from "../sub-components/common/HotelCard";
import { filterData } from "../../redux/listings/listingsSlice";
import MapContainer from "../sub-components/search-result/MapContainer";
export default function SearchResult() {
  const { filteredData, selectedCity } = useSelector((state) => state.listings);
  const isSearchOpened = useSelector((state) => state.user.isSearchOpened);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterData());
    dispatch(toggleCategories(false));
  }, [filterData]);

  return (
    <div className="pt-[90px] flex justify-between items-start gap-6">
      <div className="w-[60%]">
        <h4>
          Over {filteredData?.length} results in {selectedCity}
        </h4>
        <div className="flex flex-wrap justify-between pt-6 gap-6  max-sm:px-6 max-sm:mt-[140px]">
          {filteredData.map((item, indx) => (
            <HotelCard key={item.info.id + indx} item={item} />
          ))}
        </div>
      </div>
      <div
        className={`w-[40%] h-[calc(100vh-160px)]  sm:fixed right-0 top-[160px]  flex-grow bg-yellow-900 bg-opacity-10 overflow-hidden`}
      >
        <MapContainer />
      </div>
    </div>
  );
}
