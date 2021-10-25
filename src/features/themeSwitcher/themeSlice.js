import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  is_dark_theme: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggle: (state) => {
      state.is_dark_theme = !state.is_dark_theme;
    },
  },
});

export const { toggle } = themeSlice.actions;

export default themeSlice.reducer;
