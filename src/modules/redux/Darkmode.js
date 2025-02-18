import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem("darkMode", state.darkMode);  // Persist dark mode in localStorage
    },
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

export const { toggleDarkMode, setDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
