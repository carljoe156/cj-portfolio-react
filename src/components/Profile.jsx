import React from "react";

function Profile() {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img
          src=""
          //   src="./images/Carl-Joseph-profile-picture.jpg"
          alt="Carl Joseph profile picture"
        />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Carl Joseph</h1>
        <p className="section__text__p2">
          Frontend Developer, based in Brooklyn New York
        </p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={() => window.open("./assets/resume-example.pdf")}
          >
            Download CV
          </button>
          <button
            className="btn btn-color-1"
            onClick={() => (location.href = "./#contact")}
          >
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src="/images/linkedin.png"
            alt="My LinkedIn profile"
            className="icon"
            onClick={() =>
              (location.href = "https://www.linkedin.com/in/carljoseph156/")
            }
          />
          <img
            src="/images/github.png"
            alt="My Github profile"
            className="icon"
            onClick={() =>
              (location.href = "https://github.com/carljoe156?tab=repositories")
            }
          />
        </div>
      </div>
    </section>
  );
}

export default Profile;
