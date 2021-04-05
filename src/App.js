import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/footer/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/home";
import Movies from "./components/movies";
import Reviews from "./components/reviews";
import SignUp from "./components/signUp";
import Dashboard from "./components/dashboard";
import { fetchMovies } from "./services/database";
import { authState } from "./services/authentication";
import userContext from './contexts/user' 
import moviesContext from './contexts/movies' 
function App() {
  const [user, setUser] = useState({ islogged: false });

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMovies().then((doc) => setMovies(doc));
  }, []);
  useEffect(() => {
    const unsubscribe = authState(setUser);
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <moviesContext.Provider value={{ movies, setMovies }}>
      <div className="App">
        <Router>
          <div>
            <userContext.Provider value={{ user }}>
              <NavBar></NavBar>
              <hr />
             
                <Route exact path="/">
                  <Home />
                </Route>
                  <Switch>
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
              </Switch>
              <Footer />
            </userContext.Provider>
          </div>
        </Router>
      </div>
    </moviesContext.Provider>
  );
}

export default App;
