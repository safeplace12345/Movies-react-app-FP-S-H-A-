import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import utils from "../../services/utils";

const Movie = (props) => {
    const { title } = props.match.params;
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState({});
    useEffect(() => {
        utils.mountPropsToState(props,setMovies);
        const found = movies.find(
            (movie) =>
            movie.title.replace(/\W/gi, "") == title.replace(/\W/gi, "")
            );
            setMovie(found)
        }, []);
        
        
  return <>Movies Page Here</>;
};

export default connect(utils.matchStateToProps)(Movie);
// Todos
// add a view movie page for add the reviews id logged in
// View details add reviews on the bottom
// {
//   uid : 1,
//   mid : 1,
//   id : 001,
//   review : '',
// rating
// }
