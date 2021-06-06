import React from 'react';
import {Link} from 'react-router-dom';
import { NavDropdown, Badge } from "react-bootstrap";
import NavLink from "./NavLink";
const LoggedIn = ({logout,user}) => {   
    return (
      <>
        <NavLink to='' action={logout}>
          Log Out
        </NavLink>
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
    );
}
 
export default LoggedIn;