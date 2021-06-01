import React from "react";
import { Link } from "react-router-dom";

const LoggedOut = ({ show }) => {
  return (
    <>
      <li className="nav-item list-unstyled mr-2">
        <Link to="/components/signUp">Sign Up</Link>
      </li>
      <li className="nav-item list-unstyled mr-2">
        <Link to="#" onClick={show}>
          Log in
        </Link>
      </li>
    </>
  );
};

export default LoggedOut;
