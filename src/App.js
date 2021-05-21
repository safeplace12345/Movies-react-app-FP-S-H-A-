import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/footer/Footer";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import Home from "./components/home";
import Movies from "./components/movies/movies";
import Reviews from "./components/reviews/reviews";
import SignUp from "./components/signUp/signUp";
import Dashboard from "./components/dashboard/dashboard";
import Construction from "./components/construction/construction";
import { authState } from "./services/authentication";
import userContext from "./contexts/user";
import { thunkFetch, store } from "./services/store/store";
import "./App.css";
import Movie from "./components/movie/movie";

store.dispatch(thunkFetch());
function App() {
  const [user, setUser] = useState({ islogged: false });
  useEffect(() => {
    const unsubscribe = authState(setUser);
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <div>
            <userContext.Provider value={{ user }}>
              <NavBar></NavBar>
              <hr />

              <Switch>
                <Route exact path="/">
                  <Home />=
                </Route>
                <Route path="/components/movies">
                  <Movies />
                </Route>
                <Route path="/components/reviews">
                  <Reviews />
                </Route>
                <Route path="/components/signUp">
                  <SignUp />
                </Route>
                <Route path="/components/dashboard">
                  <Dashboard />
                </Route>
                <Route path="/components/construction">
                  <Construction />
                </Route>
                <Route
                  path="/components/movie/:index"
                  component={Movie}
                ></Route>
              </Switch>
              <Footer />
            </userContext.Provider>
          </div>
        </Router>
      </div>
    </Provider>
    // </moviesContext.Provider>
  );
}

export default App;
