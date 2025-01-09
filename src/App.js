import React from "react";
import { Routes, Route } from "react-router";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import Services from "./pages/Services/index";

import "./scss/app.scss";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
