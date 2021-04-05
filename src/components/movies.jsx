import React, { useContext } from "react";
import  moviesContext  from "../contexts/movies";

const Movies = () => {
  const { movies } = useContext(moviesContext);
  const data = [];
  console.log(movies)
  movies.forEach((element) => {
    data.push(element.data());
  });
  return (
    <div>
      {data.map((item) => {
        return (
          <div className="card" key={item.title}>
            <div className="card-body">
              <div
                className="video"
                style={{
                  position: "relative",
                  paddingBottom: "56.25%" /* 16:9 */,
                  paddingTop: 25,
                  height: 0,
                }}
              >
                <iframe
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  src={`https://www.youtube.com/embed/${item.url}`}
                  frameBorder="0"
                />
              </div>
              <h5 className="card-title">{item.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{item.info}</h6>
              <p className="card-text">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Movies;
