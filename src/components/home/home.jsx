import React, { useContext, useRef, createRef } from "react";
import moviesContext from "../../contexts/movies";
import { Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.css";
const Home = () => {
  const capStyles = {
    color: "black",
    fontSize : "1em",
    fontWeight: "bold"


  }
  const { movies } = useContext(moviesContext);
  const data = [];
  movies.forEach((element) => {
    data.push(element.data());
  });
   let refs = useRef(data.map(()=>createRef()));
  return (
    <>
      <Carousel>
        {data.map((item, index) => {
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
              />
              <Carousel.Caption style={capStyles}>
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

export default Home;
