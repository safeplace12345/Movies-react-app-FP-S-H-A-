import React from 'react';
import { Carousel } from "react-bootstrap";
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

export default ImageSlider