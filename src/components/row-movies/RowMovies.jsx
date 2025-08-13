import React from "react";
import "./rowmovies.scss";
import MovieItem from "../movie-item/MovieItem";
import Modal from "react-responsive-modal";
import MovieInfo from "../movie-info/MovieInfo";
import MovieService from "../../services/movie-series";
import Spinner from "../spinner/spinner";
class RowMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      movies: [],
      loading: true
    };
    this.getApiMovie = new MovieService();
  }

  getTrandingMovies = () => {
    this.setState({ loading: true });
    this.getApiMovie
      .getTopRated()
      .then((res) => this.setState({ movies: res }))
      .catch(err => console.log(err.message)
      )
      .finally(() => this.setState({loading: false}))
  };
  componentDidMount() {
    this.getTrandingMovies();
  }

  onToggleOpen = () => {
    this.setState(({ open }) => ({ open: !open }));
  };
  render() {
    const { open, movies , loading} = this.state;
    console.log(movies);
    
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
        <div className="rowmovies__lists">
          {loading ?  (<div className="center"><Spinner/></div>) : movies.map((item) => (
            <MovieItem
              key={item.id}
              data={item}
              onToggleOpen={this.onToggleOpen}
            />
          ))}
        </div>

        <Modal open={open} onClose={this.onToggleOpen}>
          <MovieInfo />
        </Modal>
      </div>
    );
  }
}

export default RowMovies;
