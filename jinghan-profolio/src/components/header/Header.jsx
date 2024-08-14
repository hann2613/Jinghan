import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">
          Jinghan Yang
        </a>

        <div className="nav_menu">
          <ul className="nav_list grid">
            <li className="nav_item">
              <a href="#home" className="nav_link">
                <i className="uil uil- nav_icon"></i>Home
              </a>
            </li>
            <li className="nav_item">
              <a href="#About" className="nav_link">
                <i className="uil uil- nav_icon"></i>About
              </a>
            </li>
            <li className="nav_item">
              <a href="#skills" className="nav_link">
                <i className="uil uil- nav_icon"></i>Skills
              </a>
            </li>
            <li className="nav_item">
              <a href="#services" className="nav_link">
                <i className="uil uil- nav_icon"></i>Services
              </a>
            </li>

            <li className="nav_item">
              <a href="#contact" className="nav_link">
                <i className="uil uil- nav_icon"></i>Contact Me!
              </a>
            </li>
          </ul>

          <i className="uil uil-times nav_close"></i>
        </div>



        <div className="nav_toggle">
            
            <i className="til uil-apps"></i>
        </div>
      </nav>



    </header>
  );
};

export default Header;
