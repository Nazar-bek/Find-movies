import React, { useEffect, useState } from "react";
import "./detailed-movie.scss";
import { useParams } from "react-router-dom";
import useMovieService from "../../services/movie-series";
import Spinner from "../spinner/spinner";
import Error from "../error/Error";
const DetailedMovie = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const { getDetailMovie, error, loading } = useMovieService();

  const updateMovie = () => {
    if (!movieId) {
      setError(true);
    }
    getDetailMovie(movieId).then((res) => setMovie(res));
  };
  useEffect(() => {
    updateMovie();
  }, [movieId]);
  console.log(movie);

  const errorContent = error ? <div className="loader-wrapper"><Error /></div> : null;
  const loadingContent = loading ? (
    <div className="loader-wrapper">
      <Spinner />
    </div>
  ) : null;
  const content = !(error || loading || !movie) ? (
    <Content movie={movie} ongetRandomMoviee={updateMovie} />
  ) : null;

  return (
    <div >
      {errorContent}
        {content}
      {loadingContent}
    </div>
  );
};

const Content = ({ movie }) => {
  return (
    <div className="detailedmovie">
      <div className="detailedmovie__image">
        <img src={movie.poster_path} alt={movie.name} />
      </div>
      <div className="detailedmovie__descr">
        <h1>{movie.name}</h1>
        <p>{movie.description}</p>
        <div className="detailedmovie__descr-info">
          <img className="movieitem-descr_date" src="/date.svg" alt="Date" />
          <p>{movie.release_date}</p>
          <div className="dot" />
          <p>{movie.vote_average.toFixed(1)}</p>
          <img src="/star.svg" alt="Star" />
        </div>
      </div>
    </div>
  );
};

export default DetailedMovie;
