import React from "react";
import { Tooltip } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const TooltipIcon = () => {
  const [tooltipOpen, setTooltipOpen] = React.useState(false);

  return (
    <div>
      <FontAwesomeIcon icon={faExclamationCircle} id="tooltipicon" />
      <Tooltip
        isOpen={tooltipOpen}
        target="tooltipicon"
        toggle={() => {
          setTooltipOpen(!tooltipOpen);
        }}
      >
        A SIR model is used to predict the number of people who are susceptible
        to infection, are actively infected and have recovered. Two variables
        affect the model. Beta is the effective contact rate which affects the
        rate of transistion from the susceptible population to the infected
        population. Gamma is the rate of recovery, which affects the rate of
        transistion from infected to recovered.
      </Tooltip>
    </div>
  );
};

export default TooltipIcon;
