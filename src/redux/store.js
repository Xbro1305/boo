import { combineReducers, configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/FilterSlice.js";
import { reCount } from "./count/count.js";
import { reMenu } from "./menu/menu.js";

export const store = configureStore({
  reducer: combineReducers({
    filterSlice,
    reCount,
    reMenu,
  }),
});
