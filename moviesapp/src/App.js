import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Addmovies from "./Addmovies";
import Movieslist from "./Movieslist";
import Moviescontext from "./Moviescontext";

function App() {
  return (
    <div className="App">
      <h1>Movies App</h1>
      <Moviescontext>
        <Navbar />
        <Addmovies />
        <Movieslist />
      </Moviescontext>
    </div>
  );
}

export default App;
