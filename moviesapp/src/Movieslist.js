import React, { useContext } from "react";
import { Moviesprovider } from "./Moviescontext";

function Movieslist() {
  const obj = useContext(Moviesprovider);

  const movieslist = obj.movies.map((movie) => {
    return (
      <div>
        <h1>{movie.moviename}</h1>
        <p>director is {movie.directorname}</p>
      </div>
    );
  });

  return (
    <div style={{ backgroundColor: "green" }}>
      <h1>Movies list</h1>
      {movieslist}
    </div>
  );
}
export default Movieslist;
