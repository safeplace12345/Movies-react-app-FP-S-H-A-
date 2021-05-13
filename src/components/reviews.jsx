import React, { useContext } from "react";
import moviesContext from "../contexts/movies";
import Media from "react-media";
import "./reviews/main.css";
import { Container, Row, Card, Accordion, Col } from "react-bootstrap";
import { Fragment } from "react";

const Reviews = () => {
  const cursor = {
    cursor: "pointer",
  };
  const data = [];
  const { movies } = useContext(moviesContext);
  movies.forEach((element) => {
    data.push(element.data());
  });
  return (
    <Container>
        {data.map((item) => {
          return (
            <Row key={data.indexOf(item)}>
              <Col>
                <Accordion defaultActiveKey="0">
                  <Card bg="dark" style={{ color: "white" }}>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      style={cursor}
                    >
                      {item.title}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <Row md>
                          <Col md xs={4}>
                            <img src={item.image} alt="Loading image"></img>
                          </Col>
                          <Media queries={{ small: { maxWidth: 599 } }}>
                            {(matches) =>
                              matches.small ? (
                                <Col md style={{padding : '2em'}}>
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

export default Reviews;
