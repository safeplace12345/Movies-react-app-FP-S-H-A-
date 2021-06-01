import React from 'react';
import { Row, Col, FormLabel, FormText, FormControl } from "react-bootstrap";
const FormInput = ({ name, type, children }) => {
  return (
    <Row className="my-3">
      <Col xs={12} md={3} className="ml-3 font-weight-bold text-primary">
        <FormLabel htmlFor={name}> {children}: </FormLabel>
      </Col>
      <Col>
        <FormControl
          className="input--style-2"
          type={type}
          placeholder={"Enter " + name}
          name={name}
          autoComplete = {type ? true : false}
        />
        {type === "email" ? (
          <FormText className="text-secondary">
            Trust Us we will never share your credentials !
          </FormText>
        ) : (
          ""
        )}
      </Col>
    </Row>
  );
};

export default FormInput;
