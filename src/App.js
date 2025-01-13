import React from "react";
import { Routes, Route } from "react-router";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import Services from "./pages/Services";
// import Feedback from "./components/Feedback";

import "./scss/app.scss";

function App() {
  return (
    <div className="wrapper">
123
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
