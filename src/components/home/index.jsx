import React, { useRef, createRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./main.css";
import utils from "../../services/utils";
const Home = (props) => {
  const data = [];
  const [movies, setMovies] = useState([]);
 
  useEffect(() => {
    utils.mountPropsToState(props,setMovies)
  }, []);
  let refs = useRef(movies.map(() => createRef()));
  return (
    <>
      <Carousel>
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
      <div className="col-md-5 d-flex mt-4 mx-auto justify-content-between">
        <Button variant="outline-warning">
          <Link to="/components/signUp">Subscribe now....</Link>
        </Button>
        <Button variant="outline-dark">
          <Link to="/components/movies">All Movies..</Link>
        </Button>
      </div>
     
    </>
  );
};
const matchStateToProps = (state) => {
  return {
    movies: state.data,
  };
};
export default connect(matchStateToProps)(Home);
