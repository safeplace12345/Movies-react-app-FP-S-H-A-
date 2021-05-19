import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import utils from "../../services/utils";
import "./main.css";
const Movies = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    utils.mountPropsToState(props,setMovies);
  }, []);
  return (
    <div>
      {movies.map((item) => {
        return (
          <div className="card" key={item.title}>
            <div className="card-body">
              <div className="video">
                <iframe
                  title="frame"
                  className="iframe"
                  src={`https://www.youtube.com/embed/${item.url}`}
                  frameBorder="0"
                />
              </div>
              <div className="captions">
                <h5 className="card-title">{item.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{item.info}</h6>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default connect(utils.matchStateToProps)(Movies);
