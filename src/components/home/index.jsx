import React, { useRef, createRef, useState, useEffect, Suspense } from "react";
import { connect } from "react-redux";
import {Carousel } from "react-bootstrap";

import "./main.scss";
import utils from "../../services/utils";
import LowerDashboard from "./home-utils/lowerDashboard";
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
      <LowerDashboard/>
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
