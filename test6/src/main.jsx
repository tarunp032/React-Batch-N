import React from "react";
import App from './App.jsx'
import { Provider } from 'react-redux';
import ReactDOM  from 'react-dom/client';
import {store} from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store= {store}>
    <App />
  </Provider>,
)
