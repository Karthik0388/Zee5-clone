import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import DropDownApiProvider from "./Components/ContextApis/DropDownApi";
import "./zee5.css";
import store from "./Redux/Store/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <DropDownApiProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </DropDownApiProvider>,
  document.getElementById("root")
);
