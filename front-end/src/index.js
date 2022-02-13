import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import redux, { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
// import logger from "redux-logger";
import thunk from 'redux-thunk';

import rootReducer from "./redux/rootReducer";
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/css/main.css'

// const mystore = createStore(rootReducer, applyMiddleware(logger,thunk));
const mystore = createStore(rootReducer, applyMiddleware(thunk));




ReactDOM.render(

  <React.StrictMode>
    <BrowserRouter>
      <Provider store={mystore}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
