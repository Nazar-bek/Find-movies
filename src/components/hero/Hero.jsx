import React, { useEffect, useState } from "react";
import "./hero.scss";
import Spinner from "../spinner/spinner";
import Error from "../error/Error";
import useMovieService from "../../services/movie-series";
const Hero = () => {
  const [movie, setMovie] = useState(null);

  const {getRandomMovies,error, loading, clearError} = useMovieService()
  const getRandomMoviee = () => {
    clearError()
    getRandomMovies().then((res) => {setMovie(res);})
  };

  useEffect(() => {
    
    getRandomMoviee();
  }, []);
  const errorContent = error ? <Error /> : null;
  const loadingContent = loading ? (
    <div className="look">
      <Spinner />
    </div>
  ) : null;
  const content = !(error || loading || !movie) ? (
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
