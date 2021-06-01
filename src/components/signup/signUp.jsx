import React, { useRef, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import {
  googleAuth,
  newEmailUser,
  yahooAuth,
} from "../../services/authentication";
import FormInput from "../utils/formInput";
import SelectInput from "../utils/selectForm";
import checkRef from "./checkRef";
import "./main.scss";
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
        {/* inputform */}
        <FormInput name="Name" type="text">
          Enter Full Name
        </FormInput>
        <FormInput name="Email" type="email">
          Email Address
        </FormInput>

        {/* select form */}
        <SelectInput
          name="gender"
          options={["Male", "Female", "Other"]}
        ></SelectInput>
        {/* password input */}
        <FormInput name="Password" type="password">
          Password
        </FormInput>

        {/* Action buttons */}
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
