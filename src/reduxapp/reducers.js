import { combineReducers } from "@reduxjs/toolkit";
import user from "./features/user/userSlice";
export default combineReducers({
  user,
});
