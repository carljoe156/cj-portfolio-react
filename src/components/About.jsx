import React from "react";

function About() {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src=""
            // src="./images/Carl-Joseph-profile-picture.jpg"
            alt="Profile picture"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src="/images/experience.png"
                alt="Experience icon"
                className="icon"
              />
              <h3>Experience</h3>
              <p>
                2+ years <br />
                Full Stack Development
              </p>
            </div>
            <div className="details-container">
              <img
                src="/images/education.png"
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>
                Per Scholas Software Engineering Training Program
                <br />
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
              reprehenderit et laborum, rem, dolore eum quod voluptate
              exercitationem nobis, nihil esse debitis maxime facere minus sint
              delectus velit in eos quo officiis explicabo deleniti dignissimos.
              Eligendi illum libero dolorum cum laboriosam corrupti quidem,
              reiciendis ea magnam? Nulla, impedit fuga!
            </p>
          </div>
        </div>
      </div>
      <img
        src="/images/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (location.href = "./#experience")}
      />
    </section>
  );
}

export default About;
