import React, { useEffect, useState } from "react";
import "./hero.scss";
import image from "/image1.svg";
import MovieService from "../../services/movie-series";
import Spinner from "../spinner/spinner";
import Error from "../error/Error";
const Hero = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState(false);

  const movieService = new MovieService();

  const getRandomMoviee = () => {
    setIsloading(true);
    movieService
      .getRandomMovies()
      .then((res) => {
        setMovie(res);
      })
      .catch(() => setError(true))
      .finally(() => setIsloading(false));
  };

  useEffect(() => {
    getRandomMoviee();
  }, []);
  const errorContent = error ? <Error /> : null;
  const loadingContent = isLoading ? (
    <div className="look">
      <Spinner />
    </div>
  ) : null;
  const content = !(error || isLoading) ? (
    <Content movie={movie} ongetRandomMoviee={getRandomMoviee} />
  ) : null;
  return (
    <div className="hero">
      <div className="hero__info">
        <h2>FIND MOVIES</h2>
        <h1>Tv shows and more </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          temporibus repellendus corporis optio tempore maiores voluptatum ex
          tenetur cumque, omnis, provident quaerat dolores libero odio esse modi
          necessitatibus consequatur excepturi.
        </p>
        <button className="btn btn-primary">Detailes</button>
      </div>
      <div className="hero__movie">
        {loadingContent}
        {errorContent}
        {content}
      </div>
    </div>
  );
};
export default Hero;

const Content = ({ movie, ongetRandomMoviee }) => {
  return (
    <>
      <img src={movie.backdrop_path} alt="Image" />
      <div className="hero__movie-descr">
        <h2>{movie.name}</h2>
        <p>{movie.description}</p>
        <div>
          <button onClick={ongetRandomMoviee} className="btn btn-secondary">
            Random Movie
          </button>
          <button className="btn btn-secondary">Details</button>
        </div>
      </div>
    </>
  );
};
