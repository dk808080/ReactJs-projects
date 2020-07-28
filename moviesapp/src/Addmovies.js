import React, { useState, useContext } from "react";
import { Moviesprovider } from "./Moviescontext";

function Addmovies() {
  const [moviename, setmoviename] = useState("");
  const [directorname, setdirectorname] = useState("");

  const obj = useContext(Moviesprovider);

  function add() {
    var movie = {
      moviename: moviename,
      directorname: directorname,
    };
    obj.addmovie(movie);
  }

  return (
    <div>
      <h1>Add movie</h1>
      <input
        type="text"
        placeholder="Add movie name"
        value={moviename}
        onChange={(e) => {
          setmoviename(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="director name"
        value={directorname}
        onChange={(e) => {
          setdirectorname(e.target.value);
        }}
      />
      <br />
      <button onClick={add}>Add movie</button>
    </div>
  );
}
export default Addmovies;
