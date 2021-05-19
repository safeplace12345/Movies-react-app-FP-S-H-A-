import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { fetchMovies, saveMovieToDB } from "../database";

const middleWare = [thunk, logger];
const initialMovies = {
  loading: false,
  data: [
    
  ],
  error: "",
};
let initFetch = () => ({ type: "initFetch" });
let fetchSuccess = (movies) => ({ type: "fetchSuccess", payload: movies });
let fetchError = (err) => ({ type: "fetchError", payload: err });

let save = "SAVE";
export const saveNewMovie = (newMovie) => ({ type: save, payload: newMovie });
const reducer = (state = initialMovies, action) => {
  switch (action.type) {
    case "initFetch":
      return { ...state, loading: true };
    case "fetchSuccess":
      return { ...state, loading: false, data: action.payload };
    case "fetchError":
      return { ...state, loading: false, error: action.payload };
    case save:
      return saveMovieToDB(action.payload);
    default:
      return state;
  }
};

export const thunkFetch = () => {
  return function (dispatch) {
    dispatch(initFetch());
    fetchMovies()
      .then((doc) => dispatch(fetchSuccess(doc)))
      .catch((error) => dispatch(fetchError(error)));
  };
};
export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleWare))
);
