import React from "react";
import {
  CardGroup,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Container,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <div>
      <Container className="mb-2">
        <h1>Projects</h1>
        <CardGroup>
          <Card>
            <CardImg src="/img/SIR.png" className="w-100 h-75" />
            <CardBody>
              <CardTitle>SIR Model Visualization</CardTitle>
              <CardText>
                A simple web app demonstrating a common infectious disease model
              </CardText>
              <Row>
                <Link to="/SIR">Demo Link</Link>
              </Row>
              <a href="https://github.com/AaronGee1/PortfolioSite">
                Source Code
              </a>
            </CardBody>
          </Card>
          <Card>
            <CardImg />
            <CardBody>
              <CardImg src="/img/ecobee.png" className="w-100 h-75" />
              <CardTitle>
                Central Humidifier controller using Ecobee API
              </CardTitle>
              <CardText>
                A python script running on a RaspberryPi to control a central
                air humidifier by polling the humidity of a house using Ecobee's
                API
              </CardText>
              <a href="https://github.com/AaronGee1/CentralHumidifierController">
                Source Code
              </a>
            </CardBody>
          </Card>
          <Card>
            <CardImg />
            <CardBody>
              <CardImg src="/img/aave.png" className="w-100 h-75" />
              <CardTitle>AAVE Transaction Scanner</CardTitle>
              <CardText>
                A node.js application that periodically queries AAVE graphQl api
                to retrieve new accounts on their lending platform and save it
                to a local sql database
              </CardText>
              <a href="https://github.com/AaronGee1/AAVEScanner">Source Code</a>
            </CardBody>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
};

export default Projects;
