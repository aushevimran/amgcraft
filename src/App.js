import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import "./scss/app.scss";

function App() {
  return (
    <div className="wrapper">
      {/* <div className="content"> */}
      <Header />
      <Main />
      <Footer />
      {/* </div> */}
    </div>
  );
}

export default App;
