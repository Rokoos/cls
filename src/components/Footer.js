import React from "react";
import logo from "../images/logo.jpg";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <img className="footer-logo" src={logo} alt="" />
      <div className="socials">
        <a
          href="https://www.facebook.com/cls.instalacje.elektryczne/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF className="face" />
        </a>
        <a
          href="https://www.linkedin.com/company/cls-instalacje-elektryczne/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className="linked" />
        </a>

        <a
          href="https://www.instagram.com/cls_instalacje_elektryczne/?fbclid=IwAR3i-tNLWLkGAJEynldJI4okDI_IIv6k81d1lWAkDqql-tTSCat-nlYzR3Q"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="insta" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
