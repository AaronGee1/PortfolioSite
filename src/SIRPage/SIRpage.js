import React from "react";
import SIR from "./components/SIR";
import ProjectJumbotron from "../GlobalComponents/ProjectJumbotron";

const SIRpage = () => {
  return (
    <div>
      <ProjectJumbotron
        title={"Infectious Disease Modeling"}
        description={"Epidemic modeling through interactive graphs"}
      />
      <SIR />
    </div>
  );
};

export default SIRpage;
