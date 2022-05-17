import "./layout.css";
import Navbar from "../NavBar";
import Sidebar from "../Sidebar";
import Hero from "../../pages/Hero/hero";
import { useState } from "react";
import About from "../../pages/About/about";
import Portfolio from "../../pages/Portfolio/portfolio";
import Contact from "../../pages/Contact/contact";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Layout">
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className="page">
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
};

export default Layout;
