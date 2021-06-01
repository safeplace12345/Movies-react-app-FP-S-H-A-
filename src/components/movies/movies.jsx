import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import utils from "../../services/utils";
import MovieTile from "../utils/movieTile";
import "./main.scss";
const Movies = (props) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    if (movies.length === 0) {
      return utils.mountPropsToState(props, setMovies);
    }
    return () => console.log("Un mounting");
  }, [props,movies.length]);
  return (
    <div className="row">
      {movies.map((item,index) => <MovieTile key={index} item={item}/>)}
    </div>
  );
};

export default connect(utils.matchStateToProps)(Movies);
