import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import searchArtist from "../features/searchArtist";

export default configureStore({
  reducer: {
    searchArtists: searchArtist,
  },
  middleware: getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});
