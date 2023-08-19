import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="det">
          <h5>Hello I'm</h5>
          <h1>Nivin Mathew S</h1>
          <h5 className="text-light">Data Scientist</h5>
          <CTA />
          <HeaderSocials />
          <a href="#contact" className="scroll__down">
            Scroll Down
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
    </header>
  );
};

export default Header;
