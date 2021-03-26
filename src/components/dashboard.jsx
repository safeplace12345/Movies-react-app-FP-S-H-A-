import React, { useState, useEffect } from "react";
import { authState } from "../services/authentication";
import { addToDataBase } from '../services/database'
const DashBoard = () => {
    
  return (
    <div className="container mt-5 ">
        <h4 className= "text-center"> Log in to add movies</h4>
      <form  onSubmit = { addToDataBase }>
        <div className="form-group">
          <label>Movie Title :
          </label>
          <input
            type="text"
            className="form-control"
            name="title"
            aria-describedby="title help"
            placeholder="Enter title" required
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
            placeholder="URL (https://...)" required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="Stars, year e.t.c"  required
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
          <label >More Info</label>
          <input
            type="text"
            className="form-control"
            id="info"
            placeholder="Facts and fiction....."
          />
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" >
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
    };
    
export default DashBoard;

// <>
//   {authState() ? (
//     <div>Login to proceed</div>
//   ) : (
//     <div>
//       <form>
//         <div class="form-group">
//           <label for="exampleInputEmail1">Email address</label>
//           <input
//             type="email"
//             class="form-control"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//             placeholder="Enter email"
//           />
//           <small id="emailHelp" class="form-text text-muted">
//             We'll never share your email with anyone else.
//           </small>
//         </div>
//         <div class="form-group">
//           <label for="exampleInputPassword1">Password</label>
//           <input
//             type="password"
//             class="form-control"
//             id="exampleInputPassword1"
//             placeholder="Password"
//           />
//         </div>
//         <div class="form-group form-check">
//           <input
//             type="checkbox"
//             class="form-check-input"
//             id="exampleCheck1"
//           />
//           <label class="form-check-label" for="exampleCheck1">
//             Check me out
//           </label>
//         </div>
//         <button type="submit" class="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   )}
// </>