import React from "react";
// import SIR from "./components/SIR";
import ProjectJumbotron from "../GlobalComponents/ProjectJumbotron";
import OCR from "./components/OCR";

const OCRpage = () => {
  return (
    <div>
      <ProjectJumbotron
        title={"Object Character Recognition"}
        description={
          "This web app uses OpenCV JS and tesseract.js to perform and demonstrate object character recognition"
        }
      />
      <OCR />
    </div>
  );
};

export default OCRpage;
