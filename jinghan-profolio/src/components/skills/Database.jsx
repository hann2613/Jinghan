import React from "react";

const Database = () => {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Data Analyst</h3>

      <div className="skills_box">
        <div className="skills_group">
          <div className="skills_data">
            <div>
              <h3 className="skills_name">ETL</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

          <div className="skills_data">
            <div>
              <h3 className="skills_name">SQL</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
          
        </div>

        <div className="skills_group">
          <div className="skills_data">
            <div>
              <h3 className="skills_name">Data warehouse</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

          <div className="skills_data">
            <div>
              <h3 className="skills_name">Data visualisation</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Database;
