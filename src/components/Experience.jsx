import React from "react";

function Experience() {
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="section-container">
        <div className="about-containers">
          <div className="details-container">
            <img
              src="/images/frontend.png"
              alt="Frontend icon"
              className="icon"
            />
            <h3>Frontend Development</h3>
            <p>
              React.js, JavaScript, HTML, CSS, Bootstrap, Tailwind CSS, Astro.js
            </p>
          </div>
          <div className="details-container">
            <img
              src="/images/backend.png"
              alt="Backend icon"
              className="icon"
            />
            <h3>Backend Development</h3>
            <p>Node.js, Express, MongoDB</p>
          </div>
          <div className="details-container">
            <img src="/images/tools.png" alt="Tools icon" className="icon" />
            <h3>Tools & Technologies</h3>
            <p>Git, Github, Firebase, Docker, AWS</p>
          </div>
        </div>
      </div>
      <img
        src="/images/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "./#projects")}
      />
    </section>
  );
}

export default Experience;
