import { configureStore } from "@reduxjs/toolkit";
import searchArtist from "../features/searchArtist";

export default configureStore({
  reducer: {
    searchResults: searchArtist,
  },
});
