import { createSlice } from "@reduxjs/toolkit";
import listingsData from "../../listingsPayload.json";

const initialState = {
  data: [], //Initial data array
  filteredData: [], // Initial filtered data array
  cities: [], // Initial cities array
  filteredCities: [], // Initial filtered cities array
  selectedCity: localStorage.getItem('selectedCity') || "",
  selectedDates: {
    checkIn: "",
    checkOut: "",
  },
  loading: false,
  error: null,
  filteredData: [],
  selectedListing: JSON.parse(localStorage.getItem('selectedListing')) || "",

};

const listingsSlice = createSlice({
  name: "listings",
  initialState,
  reducers: {
    setInitialListings: (state) => {
      state.data = listingsData.data;

      // Extract cities from the data array
      const uniqueCities = [
        ...new Set(
          listingsData.data.map(
            (item) =>
              `${item.info.location.city}, ${item.info.location.country.title}`
          )
        ),
      ];
      state.cities = uniqueCities; // Update the cities array
      state.filteredCities = uniqueCities.slice(0, 5);
      if (state.selectedCity)
        state.filteredData = state.data.filter(
          (item) => item.info.location.city === state.selectedCity.split(",")[0]
        );
    },
    filterCities: (state, action) => {
      const userInput = action.payload.toLowerCase();

      // Filter the cities based on partial match with user input
      state.filteredCities = state.cities
        .filter((city) => city.toLowerCase().includes(userInput))
        .slice(0, 5);
    },
    filterData: (state) => {
      state.filteredData = state.data.filter(
        (item) => item.info.location.city === state.selectedCity.split(",")[0]
      );
    },
    setSelectedCity: (state, action) => {
      state.selectedCity = action.payload;
      localStorage.setItem('selectedCity', action.payload);
    },

    setSelectedDates: (state, action) => {
      state.selectedDates.checkIn = action.payload.checkIn;
      state.selectedDates.checkOut = action.payload.checkOut;
    },
    setSelectedListing: (state, action) => {
      state.selectedListing = action.payload;
      localStorage.setItem('selectedListing', JSON.stringify(action.payload));
    },
  },
});

export const {
  setInitialListings,
  filterCities,
  filterData,
  setSelectedCity,
  setSelectedDates,
  setSelectedListing,
} = listingsSlice.actions;

export default listingsSlice.reducer;
