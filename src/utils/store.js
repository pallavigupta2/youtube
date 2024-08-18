import { configureStore } from "@reduxjs/toolkit";
import HambergerMenuSlice from "./HambergerMenuSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import searchResultsSlice from "./searchResultsSlice";

const store = configureStore({
  reducer: {
    menuSlice: HambergerMenuSlice,
    search:searchSlice,
    chat:chatSlice,
    searchResult:searchResultsSlice
  },
});

export default store;
