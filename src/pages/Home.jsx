import React from "react";
import Profile from "../components/Profile";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

export default Home;
