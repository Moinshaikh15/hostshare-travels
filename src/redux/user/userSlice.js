import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSearchOpened: false,
  hideCategories: false,
  showAllImages: false,
  selectedInput: "location",
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
  },
});

export const {
  toggleSearch,
  toggleCategories,
  setShowAllImages,
  setSelectedInput,
} = userSlice.actions;

export default userSlice.reducer;
