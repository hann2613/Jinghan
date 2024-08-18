import React from "react";

const WorkItems = ({ item }) => {
  const isVideo = item.image.endsWith(".mp4");

  return (
    <div className="work_card" key={item.id}>
      {isVideo ? (
        <video controls className="work_img">
          <source src={item.image} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img src={item.image} alt="" className="work_img" />
      )}
      <h3 className="work_title">{item.title}</h3>
      <a href="#" className="work_button">
        Demo <i className="bx bx-right-arrow-alt work_button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;
