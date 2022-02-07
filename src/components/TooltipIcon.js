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
        Adjust the beta and gamma sliders to adjust the SIR model.
      </Tooltip>
    </div>
  );
};

export default TooltipIcon;
