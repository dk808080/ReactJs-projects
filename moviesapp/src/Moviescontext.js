import React, { Component, createContext } from "react";
import Navbar from "./Navbar";
import Addmovies from "./Addmovies";
import Movieslist from "./Movieslist";

export const Moviesprovider = createContext();

class Moviescontext extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      addmovie: this.addmovie,
    };
  }

  addmovie = (movie) => {
    this.setState({ movies: [...this.state.movies, movie] });
  };

  render() {
    return (
      <Moviesprovider.Provider value={{ ...this.state }}>
        {this.props.children}
      </Moviesprovider.Provider>
    );
  }
}

export default Moviescontext;
