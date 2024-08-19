import React, { useState } from "react";

const WorkItems = ({ item }) => {
  const isVideo = item.image.endsWith(".mp4");
  const [showModal, setShowModal] = useState(false);

  const handleDemoClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
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
      <a href="#" className="work_button" onClick={handleDemoClick}>
        Demo <i className="bx bx-right-arrow-alt work_button-icon"></i>
      </a>

     {showModal && (
        <div className={`modal ${showModal ? "show" : ""}`}>
          <div className="modal_content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            {isVideo ? (
              <video controls className="modal_media">
                <source src={item.image} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={item.image} alt="" className="modal_media" />
            )}
            <p>{item.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkItems;
