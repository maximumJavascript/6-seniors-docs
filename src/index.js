import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";

import "./components/style/style.scss"
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
