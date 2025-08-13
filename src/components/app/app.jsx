import React from "react";
import Navbar from "../navbar/navbar";
import Hero from "../hero/Hero";
import RowMovies from "../row-movies/RowMovies";
import MovieService from "../../services/movie-series";

const App = () => {
 
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <RowMovies />
    </div>
  );
};

export default App;
