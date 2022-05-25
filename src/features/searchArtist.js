import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const DEEZER_ENDPOINT = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=`;

export const fetchAllArtists = createAsyncThunk(
  "artists/search",
  async (artistName = "") => {
    const response = await fetch(DEEZER_ENDPOINT + `${artistName}`).then(
      (res) => res.json()
    );
    return response;
  }
);

export const searchSlice = createSlice({
  name: "searchArtists",
  initialState: {
    searchedArtists: [],
    isLoading: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllArtists.rejected, (state, action) => {
      state.error = action.error;
      state.searchedArtists = [];
      state.isLoading = "completed";
    });
    builder.addCase(fetchAllArtists.fulfilled, (state, action) => {
      state.error = null;
      state.searchedArtists = action.payload.data;
      state.isLoading = "completed";
    });
    builder.addCase(fetchAllArtists.pending, (state, action) => {
      state.isLoading = "pending";
    });
  },
});

export default searchSlice.reducer;
