import React from "react";
import "./footer.css";
import { FaLinkedinIn, FaGithub, FaPinterest } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href="./" className="footer__logo">
        Nivin Mathew S
      </a>
      <ul className="permalinks">
        <li>
          <a href="./">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/nivin-mathew-s-5380bb1a5/"
          target="blank"
        >
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/nivin77789" target="blank">
          <FaGithub />
        </a>
        <a
          href="https://in.pinterest.com/nivin77789/nivin-designs/"
          target="blank"
        >
          <FaPinterest />
        </a>
        <a href="https://www.instagram.com/nivin_mathew_s/" target="blank">
          <FiInstagram />
        </a>
        <a href="https://twitter.com" target="blank">
          <IoLogoTwitter />
        </a>
      </div>
      p-=[-]{" "}
    </footer>
  );
};

export default Footer;
