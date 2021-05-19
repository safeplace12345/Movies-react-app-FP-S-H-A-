import React, { useState, useContext } from "react";
import { Navbar, NavDropdown, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

import { authOut } from "../../services/authentication";
import userContext from "../../contexts/user";
import Login from "./login";
import Search from "./searchBar";
const NavBar = () => {
  const { user } = useContext(userContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand className="d-flex flex-column">
        <Link to="/">G0-Movies</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <li className="nav-item list-unstyled mr-2">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item list-unstyled mr-2">
          <Link to="/components/movies" className="nav-item">
            Movies
          </Link>
        </li>
        <li className="nav-item list-unstyled mr-2">
          <Link to="/components/reviews">Reviews</Link>
        </li>
        {!user.logged && (
          <>
            <li className="nav-item list-unstyled mr-2">
              <Link to="/components/signUp">Sign Up</Link>
            </li>
            <li className="nav-item list-unstyled mr-2">
              <Link to="#" className="logged-out" onClick={handleShow}>
                Log in
              </Link>
            </li>
          </>
        )}
        <Login show={show} hide={handleClose} />
        {user.logged && (
          <>
            <li className="nav-item list-unstyled mr-2">
              <Link to="" onClick={authOut}>
                Log out
              </Link>
            </li>
            <li className="nav-item list-unstyled mr-2">
              <Link to="/components/dashboard">DashBoard</Link>
            </li>
            <li className="nav-item list-unstyled mr-2">
              {/* Account.jsx */}
              <NavDropdown title="Account" id="basic-nav-dropdown">
                <NavDropdown.Item className="bg-info" href="#action/3.1">
                  <Badge>
                    <h6>{user.user.email}</h6>
                  </Badge>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Invite Friends
                </NavDropdown.Item>
              </NavDropdown>
            </li>
          </>
        )}
        <li className="nav-item list-unstyled mr-2">

        <Search></Search>
        </li>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
