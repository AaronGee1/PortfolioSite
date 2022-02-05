import React from "react";
import { Media, Container, Row, Col } from "reactstrap";
import profileImage from "../img/profile.jpeg";

const ProfileJumbotron = (props) => {
  return (
    <Container className="rounded px-3 px-sm-4 py-3 py-sm5 text-center">
      <Row>
        <Col xs="2" />
        <Col xs="8">
          <Media
            object
            src={profileImage}
            alt="Profile Picture"
            className="rounded-circle"
          />
          <h1 className="display-3">Hi, i'm Aaron Gee</h1>
          <hr className="my-2" />
          <p className="lead">
            A tickering, maker, engineer and an aspiring software developer. I
            enjoy learning new technologies and finding solutions to complex
            problems.
          </p>
        </Col>
        <Col xs="2" />
      </Row>
    </Container>
  );
};
export default ProfileJumbotron;
