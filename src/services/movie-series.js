class MovieService {
  _apiBase = "https://api.themoviedb.org/3/movie/";
  _apiKey = "api_key=6d4e49c12c2855deb50aee77c7d9b3bc";
  _apiLng = "language=en-US";
  _apiImage = "https://image.tmdb.org/t/p/original/"
  getRource = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Could not fetch ${url}, with statius ${response.status}`
      );
    }
    return await response.json();
  };

  getPopular = async () => {
    return await this.getRource(
      `${this._apiBase}popular?${this._apiLng}&page=1&${this._apiKey}`
    );
  };
  getTopRated = async () => {
    return this.getRource(
      `${this._apiBase}top_rated?${this._apiLng}&page=1&${this._apiKey}`
    );
  };
  getDetailMovie = async (id) => {
    return await this.getRource(
      `${this._apiBase}${id}?${this._apiLng}&${this._apiKey}`
    );
  };

  getRandomMovies = async () =>{
     const response = await  this.getPopular()
    const movie = response.results[Math.floor(Math.random() * response.results.length)]
      return this._transformMovie(movie)
    }
  

  _transformMovie= (movie) => {
    return {
      name: movie.original_title,
        description: movie.overview,
        backdrop_path: `${this._apiImage}${movie.backdrop_path}`,
        poster_path: `${this._apiImage}${movie.poster_path}`,
        id: movie.id
    }
  }
}

export default MovieService;
  