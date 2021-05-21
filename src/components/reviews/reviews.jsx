import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Media from "react-media";
import { Container, Row, Card, Accordion, Col } from "react-bootstrap";

import "./main.css";
import utils from "../../services/utils";

const Reviews = (props) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    if (movies.length === 0) {
      return utils.mountPropsToState(props, setMovies);
    }
    return () => console.log("Un mounting");
  }, [props,movies.length]);
  return (
    <Container>
      {movies.map((item) => {
        return (
          <Row key={movies.indexOf(item)}>
            <Col>
              <Accordion defaultActiveKey="0">
                <Card bg="dark" style={{ color: "white" }}>
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="0"
                    className="pointer"
                  >
                    {item.title}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <Row md>
                        <Col md >
                          <img src={item.image} alt="Loading gallery" className='w-100'></img>
                        </Col>
                        <Media queries={{ small: { maxWidth: 599 } }}>
                          {(matches) =>
                            matches.small ? (
                              <Col md style={{ padding: "2em" }}>
                                {item.description
                                  ? item.description
                                  : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut commodi voluptates non expedita! Saepe pariatur praesentium odit, hic laborum fugiat earum ipsam quo officiis natus voluptatum dolorem est quae vitae.`}
                              </Col>
                            ) : (
                              <Col md>
                                {item.description
                                  ? item.description
                                  : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut commodi voluptates non expedita! Saepe pariatur praesentium odit, hic laborum fugiat earum ipsam quo officiis natus voluptatum dolorem est quae vitae.`}
                              </Col>
                            )
                          }
                        </Media>
                      </Row>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <button className="btn btn-secondary">
                    <a href={item.youtube}>Watch Now .....</a>
                  </button>
                </Card>
              </Accordion>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
};
const matchStateToProps = (state) => {
  return {
    movies: state.data,
  };
};
export default connect(matchStateToProps)(Reviews);
