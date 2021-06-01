import React from 'react';
import {Link} from 'react-router-dom';
const NavLink  = ({to,action,children}) => {
    return (
      <li className="nav-item list-unstyled mr-2">
        <Link to={to} onClick={action} >
          {children}
        </Link>
      </li>
    );
}
 
export default NavLink;