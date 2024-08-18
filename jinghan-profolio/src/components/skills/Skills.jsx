import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Database from "./Database";
import Backend from "./Backend";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">My technical skills</span>

      <div className="skills_container container grid">
        <Database />
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
