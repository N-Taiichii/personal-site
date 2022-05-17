import ReactTyped from "react-typed";
import { useState } from "react";
import "./hero.css";
import "animate.css";
import Logo from "./Logo/logo";

const Hero = () => {
  return (
    <div className="Hero" id="/">
      <div className="logo-container">
        <Logo />
      </div>
      <div className="hero-container">
        <h1 className="hero-title">Noah Matsubara</h1>
        <ReactTyped
          className="hero-typed"
          strings={[
            "Web Developer...",
            "Creative Designer...",
            "Avid Learner...",
          ]}
          typeSpeed={80}
          startDelay={999}
          backSpeed={40}
          backDelay={999}
          loop
        />
      </div>
    </div>
  );
};

export default Hero;
