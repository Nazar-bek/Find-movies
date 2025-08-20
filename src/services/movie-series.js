import { useHttp } from "../hooks/useHttps";

const useMovieService = () => {
  const _apiBase = "https://api.themoviedb.org/3/movie/";
  const _apiKey = "api_key=6d4e49c12c2855deb50aee77c7d9b3bc";
  const _apiLng = "language=en-US";
  const _apiImage = "https://image.tmdb.org/t/p/original/";
  const _apiPage = 1;

  const { request, loading, error, clearError } = useHttp();

  const getPopular = async () => {
    return await request(`${_apiBase}popular?${_apiLng}&page=1&${_apiKey}`);
  };
  const getTopRated = async (page = _apiPage) => {
    const response = await request(
      `${_apiBase}top_rated?${_apiLng}&page=${page}&${_apiKey}`
    );
    const movies = response.results;
    return movies && movies.map((item) => _transformMovie(item));
  };
  const getDetailMovie = async (id) => {
    const response = await request(`${_apiBase}${id}?${_apiLng}&${_apiKey}`);

    return _transformMovie(response);
  };

  const getRandomMovies = async () => {
    const response = await getPopular();
    const movie =
      response.results[Math.floor(Math.random() * response.results.length)];
    return _transformMovie(movie);
  };

  const _transformMovie = (movie) => {
    return {
      name: movie.original_title,
      description: movie.overview,
      backdrop_path: `${_apiImage}${movie.backdrop_path}`,
      poster_path: `${_apiImage}${movie.poster_path}`,
      id: movie.id,
      release_date: movie.release_date,
      vote_average: movie.vote_average,
    };
  };
  return {getTopRated, getDetailMovie, getRandomMovies, loading, clearError, error, }
};

export default useMovieService;
