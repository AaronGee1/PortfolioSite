import React from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from "reactstrap";

const Education = () => {
  return (
    <Container className="text-justify mb-5">
      <h1>Education</h1>
      <ListGroup>
        <ListGroupItem>
          <ListGroupItemHeading>
            Fanshawe College 2021 - 2023
          </ListGroupItemHeading>
          <ListGroupItemText>
            Computer Programming and Analysis
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>Ryerson University 2017</ListGroupItemHeading>
          <ListGroupItemText>
            Master of Applied Science, Aerospace Engineering
          </ListGroupItemText>
          <ListGroupItemText>
            Thesis: Dynamic Finite Element (DFE) Formulation of Functionally
            Graded Beams
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>Ryerson University 2015</ListGroupItemHeading>
          <ListGroupItemText>
            Bachelor of Engineering, Aerospace Engineering
          </ListGroupItemText>
          <ListGroupItemText>
            Thesis: FEM - based vibrational modelling of layered structural
            components and elements
          </ListGroupItemText>
          <ListGroupItemText>
            Activities: Ryerson Aero Design, CASI Free Flight
          </ListGroupItemText>
        </ListGroupItem>
      </ListGroup>
    </Container>
  );
};

export default Education;
