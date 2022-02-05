import React from "react";
import ProfileJumbotron from "../components/ProfileJumbotron";
import Experience from "../components/Experience";
import Education from "../components/Education";
import SIR from "../components/SIR";
import ProjectJumbotron from "../components/ProjectJumbotron";

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
