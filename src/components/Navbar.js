import React from "react";
import Navbar from "react-bootstrap/Navbar";

function NavigationBar() {
  return (
    <Navbar bg="light">
      <Navbar.Brand href="#home">
        Learning React <span>🎉🎉</span>
      </Navbar.Brand>
    </Navbar>
  );
}

export default NavigationBar;
