import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    darkThemeIsChosen: false
  },
  reducers: {
    setDarkTheme: (state, action) => {
      state.darkThemeIsChosen = action.payload;
    }
  }
})

export default themeSlice;
