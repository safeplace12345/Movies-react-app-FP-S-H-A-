import React from 'react';
import { Button} from "react-bootstrap";
import { Link } from "react-router-dom";

const LowerDashboard = () => {
    return (
      <div className="lower-dashboard bg-secondary p-1 col-10 rounded row">
        <div className="col-md-6 p-2 d-flex justify-content-center">
          <Button variant="btn btn-warning ">
            <Link to="/components/signUp">Subscribe now....</Link>
          </Button>
        </div>
        <div className="col-md-6 p-2 d-flex justify-content-center">
          <Button variant="btn btn-light px-2">
            <Link to="/components/movies">All Movies..</Link>
          </Button>
        </div>
      </div>
    );
}
 
export default LowerDashboard;