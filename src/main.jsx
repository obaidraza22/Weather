import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import "./global.css";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<App />);
