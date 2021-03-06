import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavMenu from "./GlobalComponents/NavMenu.js";
import Home from "./HomePage/Home.js";
import SIRpage from "./SIRPage/SIRpage";
import OCRpage from "./OCRPage/OCRpage";

ReactDOM.render(
  <BrowserRouter>
    <NavMenu />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SIR" element={<SIRpage />} />
      <Route path="/OCR" element={<OCRpage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
