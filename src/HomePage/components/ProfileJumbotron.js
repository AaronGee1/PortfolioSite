import React from "react";
import { Media, Container, Row, Col } from "reactstrap";
import profileImage from "../../img/profile.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

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
          <a href="https://www.linkedin.com/in/aaron-gee-5a46505a/">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com/AaronGee1">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </Col>
        <Col xs="2" />
      </Row>
    </Container>
  );
};
export default ProfileJumbotron;
