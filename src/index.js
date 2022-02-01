import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavMenu from "./components/NavMenu.js";
import Home from "./pages/Home.js";
import SIR from "./pages/SIR";
import Education from "./components/Education";

ReactDOM.render(
  <BrowserRouter>
    <NavMenu />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/education" element={<SIR />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
