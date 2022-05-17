import "./portfolio.css";
import MKM from "../../Assets/MKM_pic.JPG";
import InteractiveMap from "../../Assets/Interactive-map.JPG";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import React from "react";

const Portfolio = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="Portfolio" id="portfolio">
      <div className="portfolio-container">
        <div className="project-one" data-aos="fade-up">
          <h1 className="project-one-title">
            <a
              href="https://n-taiichii.github.io/"
              target="_blank"
              className="project-one-link"
            >
              MKM design
            </a>
          </h1>
          <img src={MKM} alt="mkm" className="project-one-img" />
          <div className="project-one-description-container">
            <p className="project-one-description">
              Site I am designing for MKM Design Inc. which is an architectural
              company based out of Okotoks Alberta. Still a work in progress.
              Developed using React.
            </p>
          </div>
        </div>

        <div className="project-one" data-aos="fade-left">
          <h1 className="project-one-title">
            <a
              href="https://n-taiichii.github.io/"
              target="_blank"
              className="project-one-link"
            >
              UJ Interactive Map
            </a>
          </h1>
          <img
            src={InteractiveMap}
            alt="interactive-map"
            className="project-one-img"
          />
          <div className="project-one-description-container">
            <p className="project-one-description">
              Web-App I developed for the University of Jamestown's campus.
              provides detailed maps of the campus' buildings, as well as
              classroom schedules. Developed using React.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
