import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import "./i18n";
import { ProvideAuth } from './context/AuthContext';

// const root = ReactDOM.createRoot(document.getElementById("root"));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ProvideAuth>
      <Router>
        <App />
      </Router>
      </ProvideAuth>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
