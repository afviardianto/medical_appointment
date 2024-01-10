import { createSlice } from "@reduxjs/toolkit";

const initialAppState = {
  isLoading: false,
  openSideBar: false,
};
const AppSlice = createSlice({
  name: "AppSlice",
  initialState: initialAppState,
  reducers: {
    setOpenSideBar: (state, action) => {
      state.openSideBar = action.payload;
    },
  },
});
export const { setOpenSideBar } = AppSlice.actions;
export default AppSlice.reducer;
