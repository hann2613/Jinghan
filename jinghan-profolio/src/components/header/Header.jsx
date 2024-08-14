import React, { useState } from "react";
import "./header.css";

const Header = () => {
  /*==toggle==*/
  const [Toggle, showMenu] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">
          Jinghan Yang
        </a>

        <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
          <ul className="nav_list grid">
            <li className="nav_item">
              <a href="#home" className="nav_link active-link">
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

          <i className="uil uil-times nav_close" onClick={() => showMenu(!Toggle)}>close</i>
        </div>

        <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
          <i className="til uil-apps">more</i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
