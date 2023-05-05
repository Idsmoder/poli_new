import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginUser: {},
};

const loginUser = createSlice({
  name: "loginUser",
  initialState,
  reducers: {
    getLoginUserSuccess: (state, { payload }) => {
      state.loginUser = payload;
    },
    setUser(state, { payload }) {
      state.loginUser = payload;
    },
  },
});

export const { getLoginUserSuccess, setUser } = loginUser.actions;
export default loginUser.reducer;
