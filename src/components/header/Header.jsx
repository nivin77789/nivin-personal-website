import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import VantaNetBackground from "./VantaNetBackground";

const Header = () => {
  return (
    <header>
      <VantaNetBackground />
      <div className="container header__container">
        <div className="navbar">
          <div className="looader"></div>{" "}
          <a className="actives" href="./">
            <i className="fa fa-fw fa-home"></i>
            <p>Home</p>
          </a>
          <a href="#about">
            <i className="fa fa-fw fa-search"></i>About
          </a>
          <a href="#experience">
            <i className="fa fa-fw fa-envelope"></i>Experience
          </a>
          <a href="#contact">
            <i className="fa fa-fw fa-user"></i>Contact
          </a>
        </div>
        <div className="hed">
          <div className="det">
            <h5>Hello I'm</h5>
            <h1>Nivin Mathew S</h1>
            <h5 className="text-light">Data Scientist</h5>
            <CTA />

            <HeaderSocials />

            <a href="#contact" className="scroll__down">
              Scroll Downs
            </a>
          </div>

          <div className="me">
            <div className="me-top">
              {" "}
              <img src={ME} alt="me" />
            </div>

            <div className="loader"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
