import React from "react";

import { Row, Col, FormLabel, FormControl } from "react-bootstrap";

const SelectInput = ({ name, options }) => {
  return (
    <Row className="my-3">
      <Col xs={12} md={3} className="ml-3 font-weight-bold text-primary">
        <FormLabel htmlFor={name}>Gender : </FormLabel>
      </Col>
      <Col>
        <FormControl name={name} as="select">
          <option disabled="disabled" defaultValue="selected">
            Gender
          </option>
          {options.map((opt,index) => <option key={index} >{opt}</option>)}    
        </FormControl>
        <div className="select-dropdown"></div>
      </Col>
    </Row>
  );
};

export default SelectInput;
