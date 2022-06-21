import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "antd/dist/antd.min.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import thunkMiddleware from 'redux-thunk';
import { store } from "./redux/store/store";


// export type AppDispatch = typeof store.dispatch // you can use this Dispatch type in your thunks
// export const useAppDispatch = () => useDispatch<AppDispatch>() // Export a hook that can be reused to resolve types
// export type AppDispatch = typeof store.dispatch
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>{" "}
  </BrowserRouter>
);
