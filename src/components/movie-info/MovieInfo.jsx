import React, { useEffect, useState } from "react";
import "./movieinfo.scss";
import MovieService from "../../services/movie-series.js";
import Error from "../error/Error.jsx";
import Spinner from "../spinner/spinner.jsx";
import useMovieService from "../../services/movie-series.js";
import { useNavigate } from "react-router-dom";
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
         {content}
      {errorContent}
      {loadingContent}
    </div>
  );
};

export default MovieInfo;

const Content = ({ movie }) => {
  const navigate = useNavigate()
  return (
    <div>
      <img src={movie.backdrop_path} alt="movie" />
      <h2>{movie.name}</h2>
      <p>{movie.description}</p>
      <button onClick={() => navigate(`/movie/${movie.id}`)} className="btn btn-light" style={{width: "100%", marginTop: "20px"}}>
        In Details
      </button>
    </div>
  );
};
