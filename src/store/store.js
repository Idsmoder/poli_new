import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import loginUser from "./loginUser";
import thunk from "redux-thunk";
import counterReducer from "../../src/root/Users/counterSlice";

const store = configureStore(
  {
    reducer: {
      loginUser: loginUser,
        counter: counterReducer,

    },
  },
  applyMiddleware(thunk)
);

export default store;
