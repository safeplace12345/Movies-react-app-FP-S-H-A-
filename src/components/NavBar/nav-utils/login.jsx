import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

import { authLogin } from "../../../services/authentication";
import { getData } from "../../../services/getData";
import FormInput from "../../utils/formInput";
const Login = (props) => {
  const { show, hide } = props;
  return (
    <Modal show={show} onHide={hide} variant="primary">
      <Modal.Header closeButton> Log in</Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            getData.form(e, authLogin);
            return hide();
          }}
        >
          <FormInput name="Email" type="email">
            Email Address
          </FormInput>
          <FormInput name="Password" type="password">
            Password
          </FormInput>
          <div className="col-center">
          <Button variant="primary" type="submit" className="button-center">
            Submit
          </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Login;
