import React from "react";
const Button = ({ children}) => {
  return (
    <Button variant="primary" type="submit">
      {children}
    </Button>
  );
};
 
export default Button;