import React, { useContext } from "react";
import { Moviesprovider } from "./Moviescontext";

function Navbar() {
  const obj = useContext(Moviesprovider);
  return (
    <h1 style={{ backgroundColor: "teal" }}>
      The total movies count : {obj.movies.length}
    </h1>
  );
}
export default Navbar;
