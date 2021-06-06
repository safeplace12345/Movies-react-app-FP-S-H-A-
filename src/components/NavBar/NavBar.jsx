import React, { useState, useContext } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import { authOut } from "../../services/authentication";
import userContext from "../../contexts/user";
import Login from "./nav-utils/login";
import Search from "./nav-utils/searchBar";
import LoggedOut from "../utils/loggedOut";
import LoggedIn from "../utils/loggedIn";
import NavLink from "../utils/NavLink";
const NavBar = () => {
  const { user } = useContext(userContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar bg="light" expand="lg" sticky="top" animation="false">
      <Navbar.Brand className="d-flex flex-column">
        <Link to="/">G0-Movies</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" animation="false">
        <NavLink to="/" action={() => {}}>
          Home
        </NavLink>
        <NavLink to="/components/movies" action={() => {}}>
          Movies
        </NavLink>
        <NavLink to="/components/reviews" action={() => {}}>
          Reviews
        </NavLink>
        {!user.logged && <LoggedOut show={handleShow}></LoggedOut>}
        <Login show={show} hide={handleClose} />
        {user.logged && <LoggedIn logout={authOut} user={user}></LoggedIn>}
        <Search />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
