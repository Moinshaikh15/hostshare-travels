import { configureStore } from "@reduxjs/toolkit";
import listingsReducer from "./listings/listingsSlice";
import userReducer from "./user/userSlice";
const store = configureStore({
  reducer: {
    listings: listingsReducer,
    user: userReducer,
  },
});

export default store;
