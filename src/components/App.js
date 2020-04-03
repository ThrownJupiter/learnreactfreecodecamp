import React, { useRef, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import NavigationBar from "./Navbar";
import MainContent from "./MainContent";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <container fluid>
      <NavigationBar />
      <Header />
      <MainContent />
      <Footer />
    </container>
  );
}

export default App;
