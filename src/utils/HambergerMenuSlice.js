import { createSlice } from "@reduxjs/toolkit";

const HambergerMenuSlice = createSlice({
  name: "Hamberger Menu Slice",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});
export const { toggleMenu, closeMenu } = HambergerMenuSlice.actions;
export default HambergerMenuSlice.reducer;
