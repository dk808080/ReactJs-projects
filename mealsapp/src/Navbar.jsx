import React from "react";

function Navbar() {
  return (
    <div style={{ backgroundColor: "teal" }}>
      <h1>React meals</h1>
      <a style={{ margin: "10px", color: "white" }}>Home</a>
      <a style={{ margin: "10px", color: "white" }}>Order</a>
      <a style={{ margin: "10px", color: "white" }}>Contact us</a>
    </div>
  );
}

export default Navbar;
