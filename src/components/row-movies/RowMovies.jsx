import React, { useEffect, useState } from "react";
import "./rowmovies.scss";
import MovieItem from "../movie-item/MovieItem";
import Modal from "react-responsive-modal";
import MovieInfo from "../movie-info/MovieInfo";
import MovieService from "../../services/movie-series";
import Spinner from "../spinner/spinner";
import Error from "../error/Error";
const RowMovies = () => {
  const [open, setOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [movieId, setMovieId] = useState(null);
  const [page, setPage] = useState(2);
  const [newItemLoading, setNewItemLoading] = useState(false);

  const getApiMovie = new MovieService();

  const getTrandingMovies = (page) => {
    setLoading(true);
    getApiMovie
      .getTopRated(page)
      .then((res) =>
       setMovies(movies => [...movies, ...res]) 
      )
      .catch(() => setError(true))
      .finally(() => {setNewItemLoading(false) 
        setLoading(false)});
  };

  useEffect(() => {
    getTrandingMovies();
  }, []);

  const onClose = () => setOpen(false);
  const onOpen = (id) => {
    setOpen(true);
    setMovieId(id);
  };

  const getMoreMovies = () => {
    setPage(page => page + 1)
    setNewItemLoading(true)
    getTrandingMovies(page);
    console.log(page);
  };
  const loadingContent = loading ? (
    <div className="loader-wrapper">
      <Spinner />
    </div>
  ) : null;
  const errorContent = error ? (
    <div className="errorStaff">
      <Error />
    </div>
  ) : null;
  const content = !(error || loading) ? (
    <Content movies={movies} onOpen={onOpen} />
  ) : null;

  return (
    <div className="rowmovies">
      <div className="rowmovies__top">
        <div className="rowmovies__top-title">
          <img src="/tranding.svg" alt="Tranding" />
          <h1>Trending</h1>
        </div>
        <div className="hr" />
        <a href="#">See More</a>
      </div>
      {errorContent}
      {loadingContent}
      {content}
      <div className="rowmovies__loadmore">
        <button
          disabled={newItemLoading}
          onClick={getMoreMovies}
          className="btn btn-secondary "
        >
          Load More
        </button>
      </div>
      <Modal open={open} onClose={onClose}>
        <MovieInfo movieId={movieId} />
      </Modal>
    </div>
  );
};

export default RowMovies;

const Content = ({ movies, onOpen }) => {
  return (
    <div className="rowmovies__lists">
      {movies.map((movie) => (
        <MovieItem key={movie.id} data={movie} onOpen={onOpen} />
      ))}
    </div>
  );
};
