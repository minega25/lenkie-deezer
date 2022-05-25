import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import searchArtist from "../features/searchArtist";
import albums from "../features/albums";
import topTracks from "../features/topTracks";
import artistProfile from "../features/artistProfile";

export default configureStore({
  reducer: {
    searchArtists: searchArtist,
    albums,
    topTracks,
    artistProfile,
  },
  middleware: getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});
