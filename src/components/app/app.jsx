import React from "react";
import Navbar from "../navbar/navbar";
import Hero from "../hero/Hero";
import RowMovies from "../row-movies/RowMovies";
import MovieService from "../../services/movie-series";
import ErrorBoundary from "../../error-boundary/ErrorBoundary";

const App = () => {
 
  return (
    <div className="app">
      <Navbar />
      <ErrorBoundary>
        <Hero />
      </ErrorBoundary>
      <ErrorBoundary>
        <RowMovies />
      </ErrorBoundary>
    </div>
  );
};

export default App;
