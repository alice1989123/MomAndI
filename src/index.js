import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import MomAndI from "./Components/Mommy_and_I";
import Mint from "./Components/Mint";
import Contact from "./Components/Contact";
import reportWebVitals from "./reportWebVitals";
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";

ReactDOM.render(
  <>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Home" element={<Home />} />
        <Route path="/Moomy_and_I" element={<MomAndI />} />
        <Route path="/Mint" element={<Mint />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  </>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
