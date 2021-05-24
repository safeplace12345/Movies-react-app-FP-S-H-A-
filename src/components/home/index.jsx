import React, { useRef, createRef, useState, useEffect, Suspense } from "react";
import { connect } from "react-redux";
import { Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./main.css";
import utils from "../../services/utils";
const Home = (props) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    if (movies.length === 0) {
      return utils.mountPropsToState(props, setMovies);
    }
    return () => console.log("Un mounting");
  }, [props, movies.length]);
  let refs = useRef(movies.map(() => createRef()));
  const resource = movies;
  return (
    <>
      <Suspense fallback={<h1 className="text-danger">Loading Movies</h1>}>
        <ImageSlider movies={resource} refs={refs} />
      </Suspense>
      <div className="col d-flex mt-4 mx-auto justify-content-between">
        <Button variant="btn btn-warning ">
          <Link to="/components/signUp">Subscribe now....</Link>
        </Button>
        <Button variant="btn btn-light px-2">
          <Link to="/components/movies">All Movies..</Link>
        </Button>
      </div>
    </>
  );
};

const ImageSlider = ({ movies, refs }) => {
  return (
    <Carousel slide={false} fade={false}>
      {movies.map((item, index) => {
        return (
          <Carousel.Item
            ref={refs.current[index]}
            key={index}
            style={{ maxHeight: "70vh" }}
          >
            <img
              className="capStyles"
              style={{ height: "100%", width: "100%" }}
              src={item.image}
              alt="item-gallery"
            />
            <Carousel.Caption className="capStyles">
              <h3>{item.title}</h3>
              <p>{item.info}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

const matchStateToProps = (state) => {
  return {
    movies: state.data,
  };
};
export default connect(matchStateToProps)(Home);
