import React from "react";
import "./rowmovies.scss";
import { movies } from "../../constants";
import MovieItem from "../movie-item/MovieItem";
import Modal from "react-responsive-modal";
import MovieInfo from "../movie-info/MovieInfo";
class RowMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  onToggleOpen = () => {
    this.setState(({ open }) => ({ open: !open }));
  };
  render() {
    const {open} = this.state
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
          {movies.map((item, index) => (
            <MovieItem key={index}
             data={{ ...item, index }}
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
