import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const DEEZER_ENDPOINT = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/`;

export const fetchArtistProfile = createAsyncThunk(
  "artist/profile",
  async (id) => {
    const response = await fetch(DEEZER_ENDPOINT + `${id}`).then((res) =>
      res.json()
    );
    return response;
  }
);

export const artistProfileSlice = createSlice({
  name: "artist",
  initialState: {
    artist: null,
    isLoading: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArtistProfile.rejected, (state, action) => {
      state.error = action.error;
      state.artist = null;
      state.isLoading = "completed";
    });
    builder.addCase(fetchArtistProfile.fulfilled, (state, action) => {
      state.error = null;
      state.artist = action;
      state.isLoading = "completed";
    });
    builder.addCase(fetchArtistProfile.pending, (state, action) => {
      state.isLoading = "pending";
    });
  },
});

export default artistProfileSlice.reducer;
