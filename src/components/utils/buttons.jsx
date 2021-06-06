import React from "react";
import { Button } from 'react-bootstrap'
const SubmitBtn = ({ children}) => {
  return (
    <div className="col-5 mx-auto">
    <Button variant="primary" type="submit" className="px-5">
      {children}
    </Button>
    </div>
  );
};
 
export default SubmitBtn;