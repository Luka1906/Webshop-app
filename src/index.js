import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
// import { Provider } from "react-redux";
// import authReducer from "./store/slices/authSlice";

// const store = configureStore({
//     reducer: {
//         auth: authReducer

//     }
// })


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
