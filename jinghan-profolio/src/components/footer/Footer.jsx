import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Jinghan Yang</h1>

        <ul className="footer_list">
          <li>
            <a href="#About" className="footer_link">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="footer_link">
              Services
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer_link">
              Portofolio
            </a>
          </li>
          <li>
            <a href="#skills" className="footer_link">
              Skills
            </a>
          </li>
        </ul>

        <div className="footer_social">
          <a href="https://github.com/hann2613" className="footer_social-link" target="_blank">
          <i class="bx bxl-github"></i>
          </a>
          <a href="https://linkedin.com/in/jinghan-yang-30b74b289" className="footer_social-link" target="_blank">
           <i class="bx bxl-linkedin"></i>
          </a>
        </div>

        <span className="footer_copy">
            &#169; Jinghan Yang. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
