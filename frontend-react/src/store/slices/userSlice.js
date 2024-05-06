import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
  },
});
export const { setUserInfo } = userSlice.actions;

export default userSlice.reducer;
