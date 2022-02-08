import React from "react";
import {
  CardGroup,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Container,
} from "reactstrap";

const Projects = () => {
  return (
    <div>
      <Container>
        <h1>Projects</h1>
        <CardGroup>
          <Card>
            <CardImg />
            <CardBody>
              <CardTitle>Hi</CardTitle>
              <CardText></CardText>
            </CardBody>
          </Card>
          <Card>
            <CardImg />
            <CardBody></CardBody>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
};

export default Projects;
