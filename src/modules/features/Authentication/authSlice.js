import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {},
  token: "",
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.userInfo = {};
      state.token = "";
      localStorage.removeItem("userInfo");
      localStorage.removeItem("token");
    },
  },
});

export const { setUserInfo, setToken, logout } = authSlice.actions;
export default authSlice.reducer;
