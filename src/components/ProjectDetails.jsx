import React from "react";
import { useParams, Link } from "react-router";
import projects from "../data/projectData";

function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <h2>Oops...Project Not Found, Try Again!</h2>;
  }

  return (
    <section id="project-details">
      <h1>{project.title}</h1>
      <p>{project.description}</p>

      <div className="gallery">
        {project.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${project.title} ${index + 1}`}
            className="gallery-img"
          />
        ))}
      </div>

      <div className="project-links">
        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
        <br />
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>

      <Link to="/projects" className="back-link">
        ← Back to Projects
      </Link>
    </section>
  );
}

export default ProjectDetails;
