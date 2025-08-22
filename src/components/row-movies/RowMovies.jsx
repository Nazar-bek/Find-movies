import React, { useEffect, useState } from "react";
import "./rowmovies.scss";
import MovieItem from "../movie-item/MovieItem";
import Modal from "react-responsive-modal";
import MovieInfo from "../movie-info/MovieInfo";
import MovieService from "../../services/movie-series";
import Spinner from "../spinner/spinner";
import Error from "../error/Error";
import useMovieService from "../../services/movie-series";
import { useLocation } from "react-router-dom";
const RowMovies = () => {
  const [open, setOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [movieId, setMovieId] = useState(null);
  const [page, setPage] = useState(2);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const location = useLocation();

  const { pathname } = location;

  const { getTopRated, loading, error, clearError, getPopular } = useMovieService();

  const getTrandingMovies = (page) => {
    clearError();
    if (pathname === "/popular") {
       getPopular(page)
        .then((res) => setMovies((movies) => [...movies, ...res]))
        .finally(() => setNewItemLoading(false));
    } else {
      getTopRated(page)
        .then((res) => setMovies((movies) => [...movies, ...res]))
        .finally(() => setNewItemLoading(false));
    }
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
    setNewItemLoading(true);
    setPage((page) => page + 1);
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

  return (
    <div className="rowmovies">
      <div className="rowmovies__top">
        <div className="rowmovies__top-title">
          <img src="/tranding.svg" alt="Tranding" />
          <h1>{pathname === "/popular" ? "Popular" : "Tranding"}</h1>
        </div>
        <div className="hr" />
        <a href="#">See More</a>
      </div>
      {errorContent}
      {loadingContent}
      <Content movies={movies} onOpen={onOpen} />
      <div className="rowmovies__loadmore">
        {newItemLoading ? (
          <Spinner />
        ) : (
          <button
            disabled={newItemLoading}
            onClick={getMoreMovies}
            className="btn btn-secondary "
          >
            Load More
          </button>
        )}
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
