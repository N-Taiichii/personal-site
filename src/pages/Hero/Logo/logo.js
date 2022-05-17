import "./logo.css";

import { useEffect, useRef } from "react";
import gsap from "gsap-trial";
import DrawSVGPlugin from "gsap-trial/DrawSVGPlugin";

const Logo = () => {
  const firstLetter = useRef();
  const secondLetter = useRef();

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin);

    gsap.timeline().fromTo(
      firstLetter.current,
      {
        drawSVG: "0",
      },
      {
        duration: 5,
        drawSVG: "100%",
      }
    );

    gsap.fromTo(
      secondLetter.current,
      {
        drawSVG: "0",
      },
      {
        duration: 5,
        drawSVG: "100%",
        delay: 1,
      }
    );
  }, []);

  return (
    <div className="logo-container">
      <svg id="Logo" xmlns="http://www.w3.org/2000/svg">
        <g className="svg-container" fill="none">
          <path
            d="M0,127.27V0H14.44L61.8,55.74V0H94.66V127.27h-15L33,72.08v55.19Z"
            stroke="#f49f0a"
            ref={firstLetter}
          />
          <path
            d="M110.13,127.27,126.21,0h26.85l22.43,56.58L198.26,0h26.16l18.17,127.24h-34l-7.12-58.41-24.6,58.93L150.2,68.86l-6.09,58.41Z"
            stroke="#00A6A6"
            ref={secondLetter}
          />
        </g>
      </svg>
    </div>
  );
};

export default Logo;
