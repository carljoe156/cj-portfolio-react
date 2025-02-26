import React from "react";

function Projects() {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My</p>
      <h1 className="title">Projects</h1>
      <div className="section-container">
        <div className="about-containers">
          <div className="details-container">
            <img src="/assets/project1.png" alt="Project 1" className="icon" />
            <h3>VIRTUAL MET MUSEUM</h3>
            <p>
              A Virtual visualization of the MET MUSEMUM built using REACT
              Framework alongside MET API
            </p>
            <div className="project-links">
              <a
                href="https://cozy-brigadeiros-8e017f.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <br />
              <a
                href="https://github.com/carljoe156/SBA-320H-React-Web-Application.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="details-container">
            <img src="/assets/project2.png" alt="Project 2" className="icon" />
            <h3>BookList</h3>
            <p>A simple book management app built with MERN</p>
            <div className="project-links">
              <a
                href="https://github.com/carljoe156/Joseph_Carl_Poetically_Capstone_Frontend.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <br />
              <a
                href="https://github.com/carljoe156/Joseph_Carl_Poetically_Capstone_Frontend.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="details-container">
            <img src="/assets/project3.png" alt="Project 3" className="icon" />
            <h3>Weather App</h3>
            <p>Weather App made with HTML, CSS AND JAVASCRIPT</p>
            <div className="project-links">
              <a
                href="https://github.com/carljoe156/SBA-Module-308A-JS.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <br />
              <a
                href="https://github.com/carljoe156/SBA-Module-308A-JS.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/images/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "./#contact")}
      />
    </section>
  );
}

export default Projects;
