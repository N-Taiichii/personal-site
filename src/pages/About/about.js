import "./about.css";
import Portrait from "../../Assets/Portrait.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

import React from "react";
import { useEffect } from "react";
import { Parallax, useParallax } from "react-scroll-parallax";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faHtml5,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  const { ref } = useParallax({ speed: -60 });

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="About" data-aos="fade-up" id="about">
      <div className="image-container">
        <img
          src={Portrait}
          alt="portrait"
          className="about-portrait"
          ref={ref}
        />
      </div>
      <div className="about-content" data-aos="fade-left">
        <h1 className="about-title">About Me</h1>
        <div className="about-description-container">
          <p className="about-description--strong">
            My name is Noah Matsubara.&nbsp;
          </p>
          <p className="about-description">
            I grew up in Okotoks Alberta, Canada where I attended Foothills
            Composite High School, and played high-level baseball in the Okotoks
            Dawgs Academy. With the help of baseball, I was fortunate enough to
            be offered an athletic scholarship to the University of Jamestown,
            where I graduated with a Bachelor's of Computer Science Degree.
            During my time at the University of Jamestown, I aquired knowledge
            of many branches of computer science including C++, SQL, Java, .NET,
            Flutter, and others. However, I found my passion in web development.
            Since then, I have immersed myself in primarily front-end
            development, and have become skilled with HTML, CSS and Javascript.
            I have learned through failure, taking on bigger projects that I can
            handle, and learning from them. I love web development because I
            love problem solving, and web development allows me to do that,
            while displaying my creativity at the same time. Above all else, I
            want to create things that inspire people.
          </p>
          <h2 className="about-skills">Skills</h2>
          <div className="icon-container">
            <FontAwesomeIcon icon={faReact} className="icons" />
            <FontAwesomeIcon icon={faHtml5} className="icons" />
            <FontAwesomeIcon icon={faCss3} className="icons" />
            <FontAwesomeIcon icon={faSass} className="icons" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
