import { useState } from "react";
import { Outlet,Link } from "react-router-dom";
import { Button } from "antd";
import { UpCircleOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
    <Link to="/home">home</Link>
    <Link to="/about">about</Link>
      <Outlet />
    </div>
  );
}
export default App;
