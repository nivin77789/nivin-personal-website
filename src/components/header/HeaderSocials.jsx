import React from "react";
import { FaLinkedinIn, FaGithub, FaPinterest } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
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
  );
};

export default HeaderSocials;
