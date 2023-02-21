import { useState } from "react";
import { Link, useRoutes } from "react-router-dom";

// import { Button } from "antd";
// import { UpCircleOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import router from "./router";

function App() {
  const outlet = useRoutes(router);
  return (
    <div className="App">
      <Link to="/home">home</Link>
      <Link to="/about">about</Link>
      {outlet}
    </div>
  );
}
export default App;
