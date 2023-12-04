import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import Week8 from './week8.jsx'
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ComponentRoutes from "./ComponentRoutes";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ComponentRoutes/>
    </BrowserRouter>
    {/* <Week8/> */}
  </React.StrictMode>
);
