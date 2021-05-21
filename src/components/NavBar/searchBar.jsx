import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";

import utils from "../../services/utils";
import "./main.css";
const Search = (props) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    if (movies.length === 0) {
      return utils.mountPropsToState(props, setMovies);
    }
    return () => console.log("Un mounting");
  }, [props,movies.length]);
  return (
    <Form inline>
      <Form.Group
        controlId="movies"
        className="border border-dark p-2 my-2 rounded shadow shadow-3 w-100 flex-grow-2"
      >
        <Form.Label className='px-5'>Search by name : </Form.Label>
        <Form.Control
          as="select"
          className="selectpicker"
          data-live-search="true"
          onChange={(e) => {
            e.preventDefault();
            return (window.location.href =
              "/components/movie/" + e.target.value);
          }}
          name="picker"
        >
          {movies.map((movie, index) => (
            <option key={index} data-tokens={index} defaultValue={index}>
              {movie.title}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
    </Form>
  );
};
const matchStateToProps = (state) => {
  return {
    movies: state.data,
  };
};
export default connect(matchStateToProps)(Search);
