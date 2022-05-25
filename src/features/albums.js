import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const DEEZER_ENDPOINT = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/`;

export const fetchAlbums = createAsyncThunk("artist/albums", async (id) => {
  const response = await fetch(DEEZER_ENDPOINT + `${id}/albums`).then((res) =>
    res.json()
  );
  return response;
});

export const albumsSlice = createSlice({
  name: "albums",
  initialState: {
    albums: [],
    isLoading: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAlbums.rejected, (state, action) => {
      state.error = action.error;
      state.albums = [];
      state.isLoading = "completed";
    });
    builder.addCase(fetchAlbums.fulfilled, (state, action) => {
      state.error = null;
      state.albums = action.payload.data;
      state.isLoading = "completed";
    });
    builder.addCase(fetchAlbums.pending, (state, action) => {
      state.isLoading = "pending";
    });
  },
});

export default albumsSlice.reducer;
