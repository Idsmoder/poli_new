import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import loginUser from "./loginUser";
import thunk from "redux-thunk";

const store = configureStore(
  {
    reducer: {
      loginUser: loginUser,
    },
  },
  applyMiddleware(thunk)
);

export default store;
