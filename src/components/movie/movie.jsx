import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import utils from "../../services/utils";

const Movie = (props) => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(undefined);
  const { index } = props.match.params;
  
  useEffect(() => {
    if (movie === undefined) {
      utils.mountPropsToState(props, setMovies);
      const found = movies.find(
        (movie) => movie.title.replace(/\W/gi, "") === index.replace(/\W/gi, "")
      );
     return setMovie(found);
    }
  }, [movie,index,movies]);
  return (
    <>
      {movie && (
        <div className="card w-75 mx-auto">
          <img
            className="card-img-top"
            src={movie.image}
            alt="movie gallery cap"
          />
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text">{movie.info}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{movie.youtube}</li>
            <li className="list-group-item">{movie.description}</li>
          </ul>
          <div className="card-body">
            <button className="btn btn-dark w-50">
              <a href={movie.youtube}>Watch Now .....</a>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default connect(utils.matchStateToProps)(Movie);
