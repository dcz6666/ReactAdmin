import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
//样式初始化一般放在最前面
import "reset-css";

//全局样式
import "@/assets/styles/global.scss";
import App from "./App";
// import Router from './router';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
