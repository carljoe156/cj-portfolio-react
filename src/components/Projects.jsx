import React from "react";
import { Link } from "react-router";
import projects from "../data/projectData";

function Projects() {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My</p>
      <h1 className="title">Projects</h1>
      <div className="section-container">
        <div className="about-containers">
          {projects.map((project) => (
            <div className="details-container" key={project.id}>
              <img
                src={project.images[0]}
                alt={project.title}
                className="project-icon"
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <br />
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <br />
                <Link to={`/project/${project.id}`} className="details-link">
                  View More
                </Link>
              </div>
              <img
                src="/images/arrow.png"
                alt="Arrow icon"
                className="icon arrow"
                onClick={() => (window.location.href = "./#contact")}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
