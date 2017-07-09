import React from "react";
import { render } from "react-dom";
import { compose, applyMiddleware, createStore } from "redux";
import { persistStore, autoRehydrate } from "redux-persist";
import { Provider } from "react-redux";

import App from "./components/App";
import reducer from "./reducers";

const store = createStore(reducer, undefined, compose(f => f, autoRehydrate()));

persistStore(store);

import "../node_modules/todomvc-app-css/index.css";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
