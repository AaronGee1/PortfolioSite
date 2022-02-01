import React from "react";
import ProfileJumbotron from "../components/ProfileJumbotron";
import Experience from "../components/Experience";
import Education from "../components/Education";

const Home = () => {
  return (
    <div>
      <ProfileJumbotron />
      <Experience />
      <Education />
    </div>
  );
};

export default Home;
