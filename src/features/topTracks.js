import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const DEEZER_ENDPOINT = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/`;

export const fetchTopTracks = createAsyncThunk(
  "artist/topTracks",
  async (id) => {
    const response = await fetch(DEEZER_ENDPOINT + `${id}/top`).then((res) =>
      res.json()
    );
    return response;
  }
);

export const topTracksSlice = createSlice({
  name: "topTracks",
  initialState: {
    topTracks: [],
    isLoading: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTopTracks.rejected, (state, action) => {
      state.error = action.error;
      state.topTracks = [];
      state.isLoading = "completed";
    });
    builder.addCase(fetchTopTracks.fulfilled, (state, action) => {
      state.error = null;
      state.topTracks = action.payload.data;
      state.isLoading = "completed";
    });
    builder.addCase(fetchTopTracks.pending, (state, action) => {
      state.isLoading = "pending";
    });
  },
});

export default topTracksSlice.reducer;
