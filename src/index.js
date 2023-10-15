import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { StyledEngineProvider } from "@mui/material/styles";

import App from "./App";
import store from "./app/store";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </Provider>
  </Router>,
  document.getElementById("root")
);
