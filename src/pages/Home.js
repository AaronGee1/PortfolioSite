import React from "react";
import ProfileJumbotron from "../components/ProfileJumbotron";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div>
      <ProfileJumbotron />
      <Projects />
      <Experience />
      <Education />
    </div>
  );
};

export default Home;
