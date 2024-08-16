import React, { useState } from "react";
import "./header.css";

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 100) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  /*==toggle==*/
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">
          Jinghan Yang
        </a>

        <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
          <ul className="nav_list grid">
            <li className="nav_item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav_link active-link" : "nav_link"
                }
              >
                <i className="uil uil- nav_icon"></i>Home
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#About"
                onClick={() => setActiveNav("#About")}
                className={
                  activeNav === "#About" ? "nav_link active-link" : "nav_link"
                }
              >
                <i className="uil uil- nav_icon"></i>About
              </a>
            </li>
            <li className="nav_item">
              <a href="#skills" onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills" ? "nav_link active-link" : "nav_link"
                }>
                <i className="uil uil- nav_icon"></i>Skills
              </a>
            </li>
            <li className="nav_item">
              <a href="#services"  onClick={() => setActiveNav("#services")}
                className={
                  activeNav === "#services" ? "nav_link active-link" : "nav_link"
                }>
                <i className="uil uil- nav_icon"></i>Services
              </a>
            </li>

            <li className="nav_item">
              <a href="#contact"  onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact" ? "nav_link active-link" : "nav_link"
                }>
                <i className="uil uil- nav_icon"></i>Contact Me!
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav_close"
            onClick={() => showMenu(!Toggle)}
          >
            close
          </i>
        </div>

        <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
          <i className="til uil-apps">more</i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
