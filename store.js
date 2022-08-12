import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./featrures/basketSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
