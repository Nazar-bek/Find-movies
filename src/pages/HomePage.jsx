import React from "react";
import ErrorBoundary from "../error-boundary/ErrorBoundary";
import Hero from "../components/hero/Hero";
import RowMovies from "../components/row-movies/RowMovies";

const HomePage = () => {
  return (
    <>
      <ErrorBoundary>
        <Hero />
      </ErrorBoundary>
      <ErrorBoundary>
        <RowMovies />
      </ErrorBoundary>
    </>
  );
};

export default HomePage;
