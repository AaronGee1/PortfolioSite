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
    <Container className="text-justify mb-4">
      <h1>Experience</h1>
      <ListGroup>
        <ListGroupItem>
          <ListGroupItemHeading>Software Developer</ListGroupItemHeading>
          <ListGroupItemText>Sagacity Software Inc.</ListGroupItemText>
          <ListGroupItemText>
            <ul>
              <li>Front-End development with React</li>
              <li>Back-End development with Node.js and Python</li>
              <li>Firmware and driver development in C/C++</li>
              <li>Developed according to microservice architecture</li>
              <li>
                Bash scripting and working in a Linux development Environment
              </li>
              <li>Non-relational databases using MongoDB</li>
              <li>Experience working in an Agile Team Environment</li>
            </ul>
          </ListGroupItemText>
        </ListGroupItem>

        <ListGroupItem>
          <ListGroupItemHeading>Automation Specialist</ListGroupItemHeading>
          <ListGroupItemText>TagsForHope</ListGroupItemText>
          <ListGroupItemText>
            <ul>
              <li>Machine Vision/Object Character Recognition using Python</li>
              <li>Microcontroller programming in C/C++ (ATmega & ESP32)</li>
              <li>PLC programming</li>
              <li>Source control with Git</li>
            </ul>
          </ListGroupItemText>
        </ListGroupItem>

        <ListGroupItem>
          <ListGroupItemHeading>Research Associate</ListGroupItemHeading>
          <ListGroupItemText>Lawson Research Institute</ListGroupItemText>
          <ListGroupItemText>
            <ul>
              <li>Scripting and data analysis with Python</li>
              <li>Developed Python scripts to automate workflow in ABAQUS</li>
              <li>Control system design</li>
              <li>Develop test system using LabView</li>
            </ul>
          </ListGroupItemText>
        </ListGroupItem>

        <ListGroupItem>
          <ListGroupItemHeading>Sustainable Development</ListGroupItemHeading>
          <ListGroupItemText>Pratt & Whitney Canada</ListGroupItemText>
          <ul>
            <li>
              Created data analysis tools to benchmark hundreds of components
              according to key performance indicators
            </li>
            <li>
              Gathered and analyzed data from manufacturing databases,
              blueprints, technical drawings, schematics, and computer-generated
              reports into one cohesive database.
            </li>
            <li>VBA scripting</li>
          </ul>
        </ListGroupItem>

        <ListGroupItem>
          <ListGroupItemHeading>Advisor</ListGroupItemHeading>
          <ListGroupItemText>
            Ontario Ministry of Economic Development
          </ListGroupItemText>
          <ul>
            <li>
              Conducted market research on Ontario's Aerospace industry and
              identified opportunities for market growth and regulatory concerns
            </li>
            <li>
              Produced detailed briefing materials for senior advisors and
              managers
            </li>
          </ul>
        </ListGroupItem>

        <ListGroupItem>
          <ListGroupItemHeading>
            Quality Engineering Intern
          </ListGroupItemHeading>
          <ListGroupItemText>3M Canada</ListGroupItemText>
          <ul>
            <li>Perform statistical analysis on quality test data</li>
            <li>Developed testing procedures for new product testing</li>
          </ul>
        </ListGroupItem>
      </ListGroup>
    </Container>
  );
};

export default Experience;
