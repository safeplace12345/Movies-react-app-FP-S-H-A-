import React from 'react';
import { Button} from "react-bootstrap";
import { Link } from "react-router-dom";

const LowerDashboard = () => {
    return (
      <div className="lower-dashboard">
        <Button variant="btn btn-warning ">
          <Link to="/components/signUp">Subscribe now....</Link>
        </Button>
        <Button variant="btn btn-light px-2">
          <Link to="/components/movies">All Movies..</Link>
        </Button>
      </div>
    );
}
 
export default LowerDashboard;