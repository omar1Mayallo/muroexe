import React, {StrictMode} from "react";
import {createRoot} from "react-dom/client";
//Router
import {BrowserRouter, HashRouter} from "react-router-dom";
//Redux
import {Provider} from "react-redux";
import {store, persistor} from "./Redux/Store/store";
import {PersistGate} from "redux-persist/integration/react";

import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <Provider store={store}>
      <HashRouter basename="/">
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </HashRouter>
    </Provider>
  </StrictMode>
);
