import React from "react";
import { Media, Container, Row, Col } from "reactstrap";

const ProjectJumbotron = (props) => {
  return (
    <Container className="rounded px-3 px-sm-4 py-3 py-sm5 text-center">
      <Row>
        <Col xs="2" />
        <Col xs="8">
          <h1 className="display-3">{props.title}</h1>
          <hr className="my-2" />
          <p className="lead">{props.description}</p>
        </Col>
        <Col xs="2" />
      </Row>
    </Container>
  );
};
export default ProjectJumbotron;
