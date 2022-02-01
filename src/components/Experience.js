import React from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from "reactstrap";

const Experience = () => {
  return (
    <Container className="text-justify">
      <h1>Experience</h1>
      <ListGroup>
        <ListGroupItem>
          <ListGroupItemHeading>Software Developer</ListGroupItemHeading>
          <ListGroupItemText>Sagacity Software Inc.</ListGroupItemText>
          <ListGroupItemText>
            <ul>
              <li>Front-End development with React</li>
              <li>Back-End development with Node.js and python</li>
              <li>Firmware and driver development in C/C++</li>
              <li>Bash scripting</li>
              <li>Linux development Environment</li>
            </ul>
          </ListGroupItemText>
        </ListGroupItem>

        <ListGroupItem>
          <ListGroupItemHeading>Automation Specialist</ListGroupItemHeading>
          <ListGroupItemText>TagsForHope</ListGroupItemText>
          <ListGroupItemText>
            <ul>
              <li>Machine Vision/Object Character Recognition using python</li>
              <li>Microcontroller programming in C/C++</li>
            </ul>
          </ListGroupItemText>
        </ListGroupItem>

        <ListGroupItem>
          <ListGroupItemHeading>Research Associate</ListGroupItemHeading>
          <ListGroupItemText>Lawson Research Institute</ListGroupItemText>
          <ListGroupItemText>
            <ul>
              <li>scripting and data analysis with python</li>
              <li>Back-End development with Node.js and python</li>
              <li>Firmware and driver development in C/C++</li>
            </ul>
          </ListGroupItemText>
        </ListGroupItem>

        <ListGroupItem>
          <ListGroupItemHeading>Sustainable Development</ListGroupItemHeading>
          <ListGroupItemText>Pratt & Whitney Canada</ListGroupItemText>
        </ListGroupItem>

        <ListGroupItem>
          <ListGroupItemHeading>Advisor</ListGroupItemHeading>
          <ListGroupItemText>
            Ontario Ministry of Economic Development
          </ListGroupItemText>
        </ListGroupItem>

        <ListGroupItem>
          <ListGroupItemHeading>
            Quality Engineering Intern
          </ListGroupItemHeading>
          <ListGroupItemText>3M Canada</ListGroupItemText>
        </ListGroupItem>
      </ListGroup>
    </Container>
  );
};

export default Experience;
