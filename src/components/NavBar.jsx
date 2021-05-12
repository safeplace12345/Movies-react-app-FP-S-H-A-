import React, { useState, useContext } from "react";
import { authOut, authLogin } from "../services/authentication";
import userContext from "../contexts/user";
import { getData } from "../services/getData";
import {
  Button,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Modal,
  Badge,
} from "react-bootstrap";
import { Link } from "react-router-dom";
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
              <Link to='#' className="logged-out" onClick={handleShow}>
                Log in
              </Link>
            </li>
          </>
        )}
        {/* log in modal */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton> Log in</Modal.Header>
          <Modal.Body>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                getData.form(e, authLogin);
              }}
            >
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="pwd"
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
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
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
