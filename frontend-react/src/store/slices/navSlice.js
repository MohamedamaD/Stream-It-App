import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "nav",
  initialState: {
    sidebarIsVisible: false,
    activeLink: "",
  },
  reducers: {
    setVisible: (state, action) => {
      state.sidebarIsVisible = action.payload;
    },
    setActivationLink: (state, action) => {
      state.activeLink = action.payload;
    },
  },
});

export const { setVisible, setActivationLink } = navSlice.actions;
export default navSlice.reducer;
