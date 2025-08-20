import React, { useEffect, useState } from "react";
import "./movieinfo.scss";
import MovieService from "../../services/movie-series.js";
import Error from "../error/Error.jsx";
import Spinner from "../spinner/spinner.jsx";
import useMovieService from "../../services/movie-series.js";
const MovieInfo = ({movieId}) => {
  const [movie, setMovie] = useState(null);
 

  const {getDetailMovie, error, loading} = useMovieService()
  useEffect(() => {
    updateMovie();
  }, [movieId]);
  const updateMovie = () => {
    if (!movieId) {
      setError(true)
    }
   getDetailMovie(movieId).then((res) => setMovie(res))
  };

  const errorContent = error ? <Error /> : null;
  const loadingContent = loading ? (
    <div className="look">
      <Spinner />
    </div>
  ) : null;
  const content = !(error || loading || !movie) ? (
    <Content movie={movie} ongetRandomMoviee={updateMovie} />
  ) : null;
  return (
    <div className="movieinfo">
      {errorContent},{loadingContent}
      {content}
    </div>
  );
};

export default MovieInfo;

const Content = ({ movie }) => {
  return (
    <div>
      <img src={movie.backdrop_path} alt="movie" />
      <h2>{movie.name}</h2>
      <p>{movie.description}</p>
    </div>
  );
};
