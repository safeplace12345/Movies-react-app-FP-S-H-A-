import React, { useRef, useEffect } from "react";
import {
  googleAuth,
  newEmailUser,
  yahooAuth,
} from "../services/authentication";
import checkRef from "./signup/checkRef";
import "./signup/main.css";
import {
  Button,
  Row,
  Col,
  Container,
  FormLabel,
  FormText,
  FormControl,
} from "react-bootstrap";
const SignUp = () => {
  const email = useRef(null);
  const yahoo = useRef(null);
  const google = useRef(null);
 
  useEffect(() => {
    checkRef(email, newEmailUser);
    return () => {
      checkRef(email, newEmailUser);
    };
  });
  useEffect(() => {
    checkRef(google, googleAuth);
    return () => {
      checkRef(google, googleAuth);
    };
  });
  useEffect(() => {
    checkRef(yahoo, yahooAuth);
    return () => {
      checkRef(yahoo, yahooAuth);
    };
  });

  return (
    <Container className="col-md-7 rounded main">
      <h2 className="text-center p-3 text-primary">Registration Info</h2>
      <form method="POST">
        <Row className="my-3">
          <Col xs={12} md={3} className="ml-3 font-weight-bold text-primary">
            <FormLabel htmlFor="name">Name : </FormLabel>
          </Col>
          <Col>
            <FormControl
              className="input--style-2"
              type="text"
              placeholder="Name"
              name="name"
            />
          </Col>
        </Row>
        <Row className="my-3">
          <Col xs={12} md={3} className="ml-3 font-weight-bold text-primary">
            <FormLabel htmlFor="email">Email : </FormLabel>
          </Col>
          <Col>
            <FormControl
              className="input--style-2 js-datepicker"
              type="text"
              placeholder="Email...."
              name="email"
            />
            <FormText className="text-light">
              Trust Us we will never share your credentials !
            </FormText>
          </Col>
        </Row>
        <Row className="my-3">
          <Col xs={12} md={3} className="ml-3 font-weight-bold text-primary">
            <FormLabel htmlFor="gender">Gender : </FormLabel>
          </Col>
          <Col>
            <FormControl name="gender" as="select">
              <option disabled="disabled" defaultValue="selected">
                Gender
              </option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </FormControl>
            <div className="select-dropdown"></div>
          </Col>
        </Row>
        <Row className="my-3">
          <Col xs={12} md={3} className="ml-3 font-weight-bold text-primary">
            <FormLabel htmlFor="pwd">PassWord : </FormLabel>
          </Col>
          <Col>
            <FormControl
              className="input--style-2"
              type="password"
              placeholder="Registration Code"
              name="pwd"
            />
          </Col>
        </Row>
        <div className="d-flex justify-content-between">
          <Button variant="outline-light" className="my-3" ref={google}>
            Google
          </Button>
          <Button variant="outline-light" className="my-3" ref={email}>
            Email
          </Button>
          <Button
            variant="outline-light"
            type="submit"
            className="my-3"
            ref={yahoo}
          >
            Yahoo
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default SignUp;
