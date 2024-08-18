import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My personal Journey</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className={
              toggleState === 1
                ? "qualification_button qualification_active button-flex"
                : "qualification_button button-flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_button qualification_active button-flex"
                : "qualification_button button-flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification_icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification_sections">
          <div
            className={
              toggleState === 1
                ? "qualification_content qualification_content-active"
                : "qialification_content"
            }
            onClick={() => toggleTab(1)}
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">University College Cork</h3>
                <span className="qualification_subtitle">
                  MSc. Design and Development of Digital Business
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>2023.9-2024.8
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">4567</h3>
                <span className="qualification_subtitle">HR</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>2021.11-2023.4
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">345324234</h3>
                <span className="qualification_subtitle">ADASASDASAFC</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>2023.9-2024.8
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">SDGSDSD</h3>
                <span className="qualification_subtitle">ASFASFSFAAF</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>2021.11-2023.4
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_content qualification_content-active"
                : "qialification_content"
            }
            onClick={() => toggleTab(2)}
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">University College Cork</h3>
                <span className="qualification_subtitle">
                  MSc. Design and Development of Digital Business
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>2023.9-2024.8
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">4567</h3>
                <span className="qualification_subtitle">HR</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>2021.11-2023.4
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
