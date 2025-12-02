import React, { useState } from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import CV from "../../assets/cv.pdf";

import { FaLinkedinIn, FaGithub, FaPinterest, FaKaggle, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { AiOutlineHome, AiOutlineUser, AiOutlineProject } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";

import { IoIosMenu, IoMdClose } from "react-icons/io";

import { BsSun } from "react-icons/bs";

const Header = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [brightness, setBrightness] = useState(100);

  // Apply brightness filter
  React.useEffect(() => {
    document.body.style.filter = `brightness(${brightness}%)`;
  }, [brightness]);

  return (
    <header>
      <div className="container header__container">

        {/* Menu Toggle Button */}
        <div className="nav__toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <IoMdClose /> : <IoIosMenu />}
        </div>

        <div className={`navbar ${isMenuOpen ? "show-nav" : ""}`}>
          <div className="nav__links">
            <a
              href="#"
              onClick={() => { setActiveNav("#"); setIsMenuOpen(false); }}
              className={activeNav === "#" ? "actives" : ""}
            >
              <AiOutlineHome />
              <p>Home</p>
            </a>
            <a
              href="#about"
              onClick={() => { setActiveNav("#about"); setIsMenuOpen(false); }}
              className={activeNav === "#about" ? "actives" : ""}
            >
              <AiOutlineUser />
              <p>About</p>
            </a>
            <a
              href="#experience"
              onClick={() => { setActiveNav("#experience"); setIsMenuOpen(false); }}
              className={activeNav === "#experience" ? "actives" : ""}
            >
              <BiBook />
              <p>Experience</p>
            </a>
            <a
              href="#portfolio"
              onClick={() => { setActiveNav("#portfolio"); setIsMenuOpen(false); }}
              className={activeNav === "#portfolio" ? "actives" : ""}
            >
              <AiOutlineProject />
              <p>Portfolio</p>
            </a>
            <a
              href="#contact"
              onClick={() => { setActiveNav("#contact"); setIsMenuOpen(false); }}
              className={activeNav === "#contact" ? "actives" : ""}
            >
              <BiMessageSquareDetail />
              <p>Contact</p>
            </a>
          </div>

          {/* Brightness Control */}
          <div className="control-center-slider">
            <BsSun className="slider-icon" />
            <input
              type="range"
              min="30"
              max="100"
              value={brightness}
              onChange={(e) => setBrightness(e.target.value)}
            />
          </div>

          <div className="social__links">
            <a href="https://www.linkedin.com/in/nivin-mathew-s-5380bb1a5/" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
              <p>LinkedIn</p>
            </a>
            <a href="https://github.com/nivin77789" target="_blank" rel="noreferrer">
              <FaGithub />
              <p>GitHub</p>
            </a>
            <a href="https://www.kaggle.com/nivinmathews" target="_blank" rel="noreferrer">
              <FaKaggle />
              <p>Kaggle</p>
            </a>
            <a href="https://in.pinterest.com/nivin77789/nivin-designs/" target="_blank" rel="noreferrer">
              <FaPinterest />
              <p>Pinterest</p>
            </a>
            <a href="https://www.instagram.com/nivin_mathew_s/" target="_blank" rel="noreferrer">
              <FiInstagram />
              <p>Instagram</p>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <IoLogoTwitter />
              <p>Twitter</p>
            </a>
            <a href="https://wa.me/917975339228" target="_blank" rel="noreferrer">
              <FaWhatsapp />
              <p>WhatsApp</p>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100086366479473" target="_blank" rel="noreferrer">
              <FaFacebookF />
              <p>Facebook</p>
            </a>
          </div>

          <div className="navbar__cta">
            <a href={CV} download className="btn btn-primary btn-sm">
              Download CV
            </a>
          </div>
        </div>
        <div className="hed">
          <div className="det">
            <h5>Hello I'm</h5>
            <h1>Nivin Mathew S</h1>
            <h5 className="text-light">Web Developer</h5>
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
      </div>
    </header>
  );
};

export default Header;
