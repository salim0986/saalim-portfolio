import React from "react";
import profile from "../assets/file.jpg";
import {
  FaInstagram,
  FaGithub,
  FaArrowCircleUp,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="admin">
        <img src={profile} alt="Admin's Profile Photo" />
        <h3>Mohd Saalim</h3>
        <p>Ignore perfectism, embrace consistency.</p>
      </div>
      <div className="links">
        <h3>Social Links</h3>
        <a target="blank" href="https://www.linkedin.com/in/md-saalim/">
          <FaLinkedin color="white" />
        </a>
        <a target="blank" href="https://www.instagram.com/_mdsaalim/">
          <FaInstagram color="white" />
        </a>
        <a target="blank" href="https://github.com/salim0986">
          <FaGithub color="white" />
        </a>
      </div>
      <a href="#home">
        <FaArrowCircleUp />
      </a>
    </footer>
  );
};

export default Footer;
