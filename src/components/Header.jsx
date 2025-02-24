import React from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleNavigation = (sectionId) => {
    const newUrl = `/#${sectionId}`;

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        window.location.hash = sectionId;
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      window.history.pushState(null, "", newUrl);
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePageNavigation = (path) => {
    if (location.pathname !== path) {
      navigate(path);
    } else {
      window.location.reload();
    }
  };

  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              handlePageNavigation("/");
            }}
          >
            Carl Joseph
          </Link>
        </div>
        <div>
          <ul className="nav-links">
            <li>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("about");
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("experience");
                }}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("projects");
                }}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("contact");
                }}
              >
                Contact
              </a>
            </li>
            <li>
              <Link
                to="/blog"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageNavigation("/blog");
                }}
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
