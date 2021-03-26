import React, {useRef , useState, useEffect } from "react";
import { googleAuth , newEmailUser , yahooAuth} from "../services/authentication";
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
  const [option, setOption] = useState({ choice: false });
const email = useRef(null)
const yahoo = useRef(null)
const google = useRef(null)

useEffect(()=>{
  if(email && email.current){
    email.current.addEventListener('click',newEmailUser)
    return () => {
      email.current.removeEventListener('click',newEmailUser)     
    }
  }
})
  useEffect(() => {
    if (google && google.current) {
      google.current.addEventListener("click", googleAuth);
      return () => {
        google.current.removeEventListener("click", googleAuth);
      };
    }
  }, []);
  useEffect(() => {
    if (yahoo && yahoo.current) {
      google.current.addEventListener("click", yahooAuth);
      return () => {
        google.current.removeEventListener("click", yahooAuth);
      };
    }
  }, []);
  return (
    <Container
      style={{
        backgroundImage:
          "url(" +
          "https://images.unsplash.com/photo-1509564324749-471bd272e1ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" +
          ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        color: "white",
      }}
      className="col-md-7 rounded"
    >
      <h2 class="text-center p-3">Registration Info</h2>
      <form method="POST" >
        <Row className="my-3">
          <Col xs={3} className="ml-3">
            <FormLabel for="name">Name : </FormLabel>
          </Col>
          <Col>
            <FormControl
              class="input--style-2"
              type="text"
              placeholder="Name"
              name="name"
            />
          </Col>
        </Row>
        <Row className="my-3">
          <Col xs={3} className="ml-3">
            <FormLabel for="email">Email : </FormLabel>
          </Col>
          <Col>
            <FormControl
              class="input--style-2 js-datepicker"
              type="text"
              placeholder="Email...."
              name="email"
            />
            <FormText>Trust Us we will never share your credentials !</FormText>
          </Col>
        </Row>
        <Row className="my-3">
          <Col xs={3} className="ml-3">
            <FormLabel for="gender">Gender : </FormLabel>
          </Col>
          <Col>
            <FormControl name="gender" as="Select">
              <option disabled="disabled" selected="selected">
                Gender
              </option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </FormControl>
            <div class="select-dropdown"></div>
          </Col>
        </Row>
        <Row className="my-3">
          <Col xs={3} className="ml-3">
            <FormLabel for="pwd">PassWord : </FormLabel>
          </Col>
          <Col>
            <FormControl
              class="input--style-2"
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
          <Button variant="outline-light" type="submit" className="my-3" ref={yahoo}>
            Yahoo
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default SignUp;
