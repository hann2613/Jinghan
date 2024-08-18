import React from "react";
import "./about.css";

const Info = () => {
  return (
    <div className="about_info grid">
      <div className="about_box">
        <h3 className="about_title">Experience</h3>
        <span className="about_subtitle">piupiu</span>
      </div>

      <div className="about_box">
        <h3 className="about_title">Completed</h3>
        <span className="about_subtitle">5+ projects</span>
      </div>

      <div className="about_box">
        <h3 className="about_title">Support</h3>
        <span className="about_subtitle">xxx</span>
      </div>
    </div>
  );
};

export default Info;
