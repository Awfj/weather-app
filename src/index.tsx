import React from "react";
import ReactDOM from "react-dom";
import WindowWidthProvider from "./providers/WindowWidthProvider";
import SettingsProvider from "./providers/SettingsProvider";
import { HashRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./containers/App/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router>
    <WindowWidthProvider>
      <SettingsProvider>
        <App />
      </SettingsProvider>
    </WindowWidthProvider>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();