import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import HomePage from "./pages/HomePage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <HomePage />
    </Provider>
  </React.StrictMode>
);
