import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";
import "antd/dist/antd.css";
import { BrowserRouter } from "react-router-dom";
import routes from "./routes";

const Root = () => (
  <BrowserRouter>
      <App routes={routes} />
  </BrowserRouter>
)

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);