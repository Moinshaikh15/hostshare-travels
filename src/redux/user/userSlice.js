import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSearchOpened: false,
  hideCategories: false,
  showAllImages: false,
  selectedInput: "location",
  showSearchCities: true,
  showDateRange: false,
  showGuests: false,
  showSelectedCity:false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleSearch: (state) => {
      state.isSearchOpened = !state.isSearchOpened;
    },
    toggleCategories: (state, action) => {
      state.hideCategories = action.payload;
    },
    setShowAllImages: (state) => {
      state.showAllImages = !state.showAllImages;
    },
    setSelectedInput: (state, action) => {
      state.selectedInput = action.payload;
    },
    toggleShowSearchCities: (state) => {
      state.showSearchCities = !state.showSearchCities;
    },
    toggleShowDateRange: (state) => {
      state.showDateRange = !state.showDateRange;
    },
    toggleShowGuests: (state) => {
      state.showGuests = !state.showGuests;
    },
    setShowSelectedCity:(state,action)=>{
      state.showSelectedCity=action.payload
    }
  },
});

export const {
  toggleSearch,
  toggleCategories,
  setShowAllImages,
  setSelectedInput,
  setShowSelectedCity,
  toggleShowSearchCities,
  toggleShowDateRange,
  toggleShowGuests,

} = userSlice.actions;

export default userSlice.reducer;
