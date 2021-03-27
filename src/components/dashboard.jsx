import React from "react";
import { saveMovie } from "../services/database";
import { getData } from "../services/getData";
const DashBoard = () => {
  return (
    <div className="container mt-5 ">
      <h4 className="text-center"> Log in to add movies</h4>
      <form onSubmit={(e) => {
        e.preventDefault()
        getData.movie(e,saveMovie)}
      }>
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
          <small id="emailHelp" className="form-text text-danger">
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
            placeholder="embed/<...url...>"
          />
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

export default DashBoard;
