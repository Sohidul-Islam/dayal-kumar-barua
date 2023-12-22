import React from "react";
import ReactDOM from "react-dom/client";

import "./assets/css/materialdesignicons.min.css";
import "./assets/scss/themes.scss";
import "react-slideshow-image/dist/styles.css";

import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/marketing";

import NavbarPage from "./component/Navbar";
import AboutPage from "./pages/About";
import EventPage from "./pages/EventPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    {/* <App /> */}
    <NavbarPage />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/events" element={<EventPage />} />
      <Route path="/gallery" element={<AboutPage />} />
    </Routes>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
