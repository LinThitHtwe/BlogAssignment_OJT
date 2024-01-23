import { configureStore } from "@reduxjs/toolkit";
import userReducer from "reduxapp/features/user/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
