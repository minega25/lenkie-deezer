import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "searchResults",
  initialState: {
    data: [],
  },
  reducers: {
    query: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { query } = searchSlice.actions;

export default searchSlice.reducer;
