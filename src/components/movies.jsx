import React, { useContext } from "react";
import moviesContext from "../contexts/movies";
import "./movies/main.css";
const Movies = () => {
  const { movies } = useContext(moviesContext);
  const data = [];
  movies.forEach((element) => {
    data.push(element.data());
  });
  return (
    <div>
      {data.map((item) => {
        return (
          <div className="card" key={item.title}>
            <div className="card-body">
              <div className="video">
                <iframe
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

export default Movies;
