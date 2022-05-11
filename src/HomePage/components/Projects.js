import React from "react";
import { NavLink as RRNavLink } from "react-router-dom";
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

import SIRImage from "../../img/SIR.png";
import aaveImage from "../../img/aave.png";
import ecobeeImage from "../../img/ecobee.png";

const Projects = () => {
  return (
    <div>
      <Container className="mb-2">
        <h1>Projects</h1>
        <CardGroup>
          <Card>
            <CardImg src={SIRImage} className="w-100 h-75" />
            <CardBody>
              <CardTitle>SIR Model Visualization</CardTitle>
              <CardText>
                A simple web app demonstrating a common infectious disease model
              </CardText>
              <Row>
                <a href="/SIR">Demo Link</a>
              </Row>
              <a href="https://github.com/AaronGee1/PortfolioSite">
                Source Code
              </a>
            </CardBody>
          </Card>
          <Card>
            <CardImg />
            <CardBody>
              <CardImg src={ecobeeImage} className="w-100 h-75" />
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
              <CardImg src={aaveImage} className="w-100 h-75" />
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
