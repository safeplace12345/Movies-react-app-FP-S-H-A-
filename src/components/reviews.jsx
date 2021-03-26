import React, { useState, useContext, useRef } from "react";
import { moviesContext } from "../App";
import { Link } from "react-router-dom";
import { Container, Row, Card, Accordion, Col } from "react-bootstrap";

const Reviews = () => {
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
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    {item.title}
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <Row md>
                        <Col md xs={4}>
                          <img src={item.image} alt="Loading image"></img>
                        </Col>
                        <Col md>
                          {item.description
                            ? item.description
                            : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut commodi voluptates non expedita! Saepe pariatur praesentium odit, hic laborum fugiat earum ipsam quo officiis natus voluptatum dolorem est quae vitae.`}
                        </Col>
                      </Row>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle
                    as={Card.Header}
                    eventKey="1"
                    href={item.wikipedia}
                  >
                    Watch Now .....
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      For more info...<Link to="./movies">Follow Up</Link>
                    </Card.Body>
                  </Accordion.Collapse>
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
