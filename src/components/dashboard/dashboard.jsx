import React, { useContext } from "react";
import { connect } from "react-redux";

import { getData } from "../../services/getData";
import { saveNewMovie } from "../../services/store/store";
import userContext from "../../contexts/user";
const DashBoard = (props) => {
  const { user } = useContext(userContext);
  return (
    <div className="container mt-5 text-warning ">
      <h4 className="text-center font-weight-italic">
        Welcome To Your DashBoard {user.user.email}
      </h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getData.movie(e, props.dispatchSave);
        }}
      >
        <div className="form-group">
          <label>Movie Title :</label>
          <input
            type="text"
            className="form-control"
            name="title"
            aria-describedby="title help"
            placeholder="Enter title"
            required
          />
          <small
            id="emailHelp"
            className="form-text text-danger font-weight-bold"
          >
            Note : Must titles should have no special characters..
          </small>
        </div>
        <div className="form-group">
          <label>Image Url</label>
          <input
            type="text"
            className="form-control"
            id="image"
            placeholder="URL (https://...)"
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="Stars, year e.t.c"
            required
          />
        </div>
        <div className="form-group">
          <label>You-tube embed URL</label>
          <input
            type="text"
            className="form-control"
            id="youtube"
            placeholder="youtube-url i.e embed/<...url...>"
          />
          <small className="text-mute">
            Please use right embedded url slug .
          </small>
        </div>
        <div className="form-group">
          <label>More Info</label>
          <input
            type="text"
            className="form-control"
            id="info"
            placeholder="Facts and fiction....."
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSave: (movie) => {
      console.log("Dispath here");
      dispatch(saveNewMovie(movie));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
