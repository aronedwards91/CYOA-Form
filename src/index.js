import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import "./styling/formstyling.css";
import GlobalStyle from "./GlobalStyles";
import Layout from "./components/Layout";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Layout />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
